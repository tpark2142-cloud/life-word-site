$ErrorActionPreference = 'Stop'
$root = 'C:\Users\tea21\Documents\Codex\2026-04-21-summarize-my-unread-emails-and-draft'
$jsPath = Join-Path $root 'assets\js\travel-admin.js'
$htmlPath = Join-Path $root 'gallery-admin.html'
$utf8 = New-Object System.Text.UTF8Encoding($false)
$js = [System.IO.File]::ReadAllText($jsPath)

$clear = @'
function clearGalleryForm(){
  document.getElementById('gallery-edit-id').value = '';
  document.getElementById('gallery-photo-stem').value = '';
  document.getElementById('gallery-caption-en').value = '';
  document.getElementById('gallery-caption-ko').value = '';
  document.getElementById('gallery-image').value = '';
  galleryPendingImage = '';
  setPreview('');
  document.getElementById('gallery-save-button').textContent = 'Save Gallery Photo';
}
'@
$js = [System.Text.RegularExpressions.Regex]::Replace($js, 'function clearGalleryForm\(\)\{[\s\S]*?\r?\n\}', $clear.TrimEnd(), 1)

$save = @'
async function saveGalleryEntry(){
  const editId = document.getElementById('gallery-edit-id').value.trim();
  const selectedStem = document.getElementById('gallery-photo-stem').value.trim();
  const captionEn = document.getElementById('gallery-caption-en').value.trim();
  const captionKo = document.getElementById('gallery-caption-ko').value.trim();
  const currentItem = editId ? galleryItems.find(item => item.id === editId) : null;
  const stem = selectedStem || (currentItem && (currentItem.photoStem || getGalleryStemFromUrl(currentItem.src || ''))) || '';
  const pairStem = currentItem ? (currentItem.photoStem || getGalleryStemFromUrl(currentItem.src || '')) : stem;
  const nextImageUrl = getGalleryRegularUrl(stem) || (currentItem && currentItem.src) || '';
  const samePhoto = item => !item.storageOnly && (item.photoStem || getGalleryStemFromUrl(item.src || '')) === pairStem;
  const pairItems = galleryItems.filter(samePhoto);

  if (!captionEn || !captionKo) {
    alert('Please enter both English and Korean captions.');
    return;
  }
  if (!stem || !nextImageUrl) {
    alert('Please select a photo file from Supabase Storage.');
    return;
  }
  const hasNewLocalImage = galleryPendingImage && galleryPendingImage.startsWith('data:image/');
  if (hasNewLocalImage && !galleryPreviewValid) {
    alert('This image could not be prepared correctly. Please choose a JPG or PNG image and try again.');
    return;
  }

  const rowsByLanguage = {
    en:{ language:'en', title:captionEn, caption:captionEn, image_url:nextImageUrl, is_visible:true },
    ko:{ language:'ko', title:captionKo, caption:captionKo, image_url:nextImageUrl, is_visible:true }
  };
  if (supabaseClient) {
    try {
      const rowsToInsert = [];
      for (const language of ['en', 'ko']) {
        const existing = pairItems.find(item => {
          const rawId = String(item.id || '').replace(/^g-/, '');
          return item.language === language && /^\d+$/.test(rawId);
        });
        if (existing) {
          const rawId = String(existing.id).replace(/^g-/, '');
          const { error } = await supabaseClient.from('gallery_items').update(rowsByLanguage[language]).eq('id', rawId);
          if (error) throw error;
        } else {
          rowsToInsert.push(rowsByLanguage[language]);
        }
      }
      if (rowsToInsert.length) {
        const { error } = await supabaseClient.from('gallery_items').insert(rowsToInsert);
        if (error) throw error;
      }
      clearGalleryForm();
      await loadGalleryAdminItems();
      return;
    } catch (error) {
      alert('Supabase could not save both language captions. Browser-only changes will be saved instead.' + '\n\n' + formatSupabaseError(error));
    }
  }

  const updatedItems = galleryItems.map(item => samePhoto(item) ? {
    ...item,
    photoStem:stem,
    src:nextImageUrl,
    caption:item.language === 'ko' ? captionKo : captionEn
  } : item);
  const languagesPresent = new Set(pairItems.map(item => item.language));
  if (!languagesPresent.has('ko')) updatedItems.unshift({ id:makeId('g'), language:'ko', photoStem:stem, src:nextImageUrl, caption:captionKo });
  if (!languagesPresent.has('en')) updatedItems.unshift({ id:makeId('g'), language:'en', photoStem:stem, src:nextImageUrl, caption:captionEn });
  galleryItems = updatedItems;
  saveStoredItems(STORAGE_GALLERY, galleryItems);
  clearGalleryForm();
  renderGalleryAdminList();
}
'@
$js = [System.Text.RegularExpressions.Regex]::Replace($js, 'async function saveGalleryEntry\(\)\{[\s\S]*?\r?\n\}', $save.TrimEnd(), 1)

$usePhoto = @'
window.useStorageGalleryPhoto = function(stem){
  document.getElementById('gallery-edit-id').value = '';
  document.getElementById('gallery-photo-stem').value = stem;
  document.getElementById('gallery-caption-en').value = '';
  document.getElementById('gallery-caption-ko').value = '';
  document.getElementById('gallery-image').value = '';
  galleryPendingImage = '';
  setPreview(getGalleryRegularUrl(stem));
  document.getElementById('gallery-save-button').textContent = 'Save Gallery Photo';
  window.scrollTo({top: 0, behavior: 'smooth'});
};
'@
$js = [System.Text.RegularExpressions.Regex]::Replace($js, 'window\.useStorageGalleryPhoto = function\(stem\)\{[\s\S]*?\r?\n\};', $usePhoto.TrimEnd(), 1)

$edit = @'
window.editGallery = function(id){
  const item = galleryItems.find(entry => entry.id === id);
  if (!item) return;
  const stem = item.photoStem || getGalleryStemFromUrl(item.src || '');
  const pair = galleryItems.filter(entry => !entry.storageOnly && (entry.photoStem || getGalleryStemFromUrl(entry.src || '')) === stem);
  const englishItem = pair.find(entry => entry.language !== 'ko');
  const koreanItem = pair.find(entry => entry.language === 'ko');
  document.getElementById('gallery-edit-id').value = item.id;
  document.getElementById('gallery-photo-stem').value = stem;
  document.getElementById('gallery-caption-en').value = englishItem ? englishItem.caption || englishItem.title || '' : '';
  document.getElementById('gallery-caption-ko').value = koreanItem ? koreanItem.caption || koreanItem.title || '' : '';
  document.getElementById('gallery-image').value = '';
  galleryPendingImage = item.src || '';
  setPreview(item.src || '');
  document.getElementById('gallery-save-button').textContent = 'Update Both Captions';
  window.scrollTo({top: 0, behavior: 'smooth'});
};
'@
$js = [System.Text.RegularExpressions.Regex]::Replace($js, 'window\.editGallery = function\(id\)\{[\s\S]*?\r?\n\};', $edit.TrimEnd(), 1)
[System.IO.File]::WriteAllText($jsPath, $js, $utf8)

$html = [System.IO.File]::ReadAllText($htmlPath)
$languageBlock = '<div class="admin-field">' + [Environment]::NewLine + '          <label for="gallery-language">Language</label>' + [Environment]::NewLine + '          <select id="gallery-language">' + [Environment]::NewLine + '            <option value="en">English Site</option>' + [Environment]::NewLine + '            <option value="ko">Korean Site</option>' + [Environment]::NewLine + '          </select>' + [Environment]::NewLine + '        </div>' + [Environment]::NewLine + '        '
if (-not $html.Contains($languageBlock)) { throw 'Could not find the old single-language selector.' }
$html = $html.Replace($languageBlock, '')
$oldCaption = '<div class="admin-field">' + [Environment]::NewLine + '          <label for="gallery-caption">Caption</label>' + [Environment]::NewLine + '          <input type="text" id="gallery-caption" placeholder="e.g. Banff â€” Mountain View">' + [Environment]::NewLine + '        </div>'
$newCaption = @'
<div class="admin-field">
          <label for="gallery-caption-en">English title and caption</label>
          <input type="text" id="gallery-caption-en" placeholder="e.g. Pamukkale’s Warm Thermal Waters">
        </div>
        <div class="admin-field">
          <label for="gallery-caption-ko">Korean title and caption</label>
          <input type="text" id="gallery-caption-ko" placeholder="예: 파묵칼레의 따뜻한 온천수">
        </div>
'@
if (-not $html.Contains($oldCaption)) { throw 'Could not find the old caption field.' }
$html = $html.Replace($oldCaption, $newCaption.TrimEnd())
if (-not $html.Contains('travel-admin.js?v=20261112h')) { throw 'Could not find the admin script cache version.' }
$html = $html.Replace('travel-admin.js?v=20261112h', 'travel-admin.js?v=20261113a')
[System.IO.File]::WriteAllText($htmlPath, $html, $utf8)
Get-Item $htmlPath, $jsPath | Select-Object FullName, Length, LastWriteTime
