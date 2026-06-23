(function(){
  const SUPABASE_PROJECT_URL='https://ytfjmlhfkgvdoifhknxq.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY='sb_publishable_LBT8442LBjSc0ZOvaUxkFg_MIIBacTw';
  const GALLERY_BUCKET='gallery';
  const GALLERY_STEMS=[
    '1',
    '1765669348028',
    '2',
    '20210820_152827-01',
    '20220813_125953',
    '20240705_123854',
    'b',
    'c',
    'FB_IMG_1713760844282',
    'IMG_1462',
    'IMG_8519',
    '20250927_133835',
    '20250927_133219'
  ];

  const state={
    client:null,
    session:null,
    selectedFile:null,
    editingId:'',
    galleryRows:[]
  };

  const els={
    loginCard: document.getElementById('login-card'),
    dashboard: document.getElementById('admin-dashboard'),
    email: document.getElementById('admin-email'),
    password: document.getElementById('admin-password'),
    loginButton: document.getElementById('login-button'),
    loginError: document.getElementById('login-error'),
    logoutButton: document.getElementById('logout-button'),
    refreshButton: document.getElementById('refresh-public-button'),
    galleryStem: document.getElementById('gallery-photo-stem'),
    galleryLanguage: document.getElementById('gallery-language'),
    galleryImage: document.getElementById('gallery-image'),
    galleryPreview: document.getElementById('gallery-preview'),
    galleryPreviewImg: document.getElementById('gallery-preview-img'),
    galleryCaption: document.getElementById('gallery-caption'),
    gallerySaveButton: document.getElementById('gallery-save-button'),
    galleryClearButton: document.getElementById('gallery-clear-button'),
    galleryEditId: document.getElementById('gallery-edit-id'),
    galleryList: document.getElementById('gallery-admin-list')
  };

  function initSupabase(){
    if(!window.supabase){
      return null;
    }
    return window.supabase.createClient(SUPABASE_PROJECT_URL, SUPABASE_PUBLISHABLE_KEY);
  }

  function escapeHtml(value){
    return String(value || '')
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function getStemFromUrl(value){
    const raw=String(value || '').trim();
    if(!raw) return '';
    const decoded = (() => {
      try { return decodeURIComponent(raw); } catch(_error) { return raw; }
    })();
    const match=decoded.match(/(?:regular|thumbnails)\/([^/?#]+?)(?:-(?:regular|thumb))?\.webp(?:[?#].*)?$/i);
    if(match) return match[1];
    const fileMatch=decoded.match(/([^\/\\?#]+?)(?:-(?:regular|thumb))?\.webp(?:[?#].*)?$/i);
    return fileMatch ? fileMatch[1] : raw.replace(/^.*[\/\\]/,'').replace(/-(?:regular|thumb)\.webp$/i,'').replace(/\.webp$/i,'');
  }

  function getPublicThumbUrl(stem){
    return `${SUPABASE_PROJECT_URL}/storage/v1/object/public/${GALLERY_BUCKET}/thumbnails/${encodeURIComponent(stem)}-thumb.webp`;
  }

  function getPublicRegularUrl(stem){
    return `${SUPABASE_PROJECT_URL}/storage/v1/object/public/${GALLERY_BUCKET}/regular/${encodeURIComponent(stem)}-regular.webp`;
  }

  function setMode(mode){
    if(els.gallerySaveButton){
      els.gallerySaveButton.textContent = mode === 'edit' ? 'Update Gallery Photo' : 'Save Gallery Photo';
    }
  }

  function clearForm(){
    state.editingId = '';
    state.selectedFile = null;
    if(els.galleryEditId) els.galleryEditId.value = '';
    if(els.galleryCaption) els.galleryCaption.value = '';
    if(els.galleryImage) els.galleryImage.value = '';
    if(els.galleryStem) els.galleryStem.value = '';
    if(els.galleryPreview){
      els.galleryPreview.style.display = 'none';
    }
    if(els.galleryPreviewImg){
      els.galleryPreviewImg.src = '';
    }
    setMode('new');
  }

  function populateStemSelect(){
    if(!els.galleryStem) return;
    const current = els.galleryStem.value;
    els.galleryStem.innerHTML = '<option value="">Choose the matching gallery photo</option>' +
      GALLERY_STEMS.map(stem => `<option value="${escapeHtml(stem)}">${escapeHtml(stem)}</option>`).join('');
    if(current){
      els.galleryStem.value = current;
    }
  }

  function ensureSignedIn(){
    if(!state.session){
      return false;
    }
    return true;
  }

  function showDashboard(){
    if(els.loginCard) els.loginCard.style.display='none';
    if(els.dashboard) els.dashboard.style.display='block';
  }

  function showLogin(){
    if(els.loginCard) els.loginCard.style.display='block';
    if(els.dashboard) els.dashboard.style.display='none';
  }

  async function login(){
    if(!state.client){
      alert('Supabase is not available on this page.');
      return;
    }
    const email = (els.email && els.email.value || '').trim();
    const password = (els.password && els.password.value || '').trim();
    if(!email || !password){
      if(els.loginError){
        els.loginError.textContent = 'Please enter both email and password.';
        els.loginError.style.display = 'block';
      }
      return;
    }
    const { data, error } = await state.client.auth.signInWithPassword({ email, password });
    if(error){
      if(els.loginError){
        els.loginError.textContent = 'That email or password did not match.';
        els.loginError.style.display = 'block';
      }
      return;
    }
    state.session = data && data.session ? data.session : null;
    if(els.loginError) els.loginError.style.display='none';
    showDashboard();
    populateStemSelect();
    await loadGalleryRows();
  }

  async function logout(){
    if(!state.client) return;
    await state.client.auth.signOut();
    state.session = null;
    showLogin();
    clearForm();
  }

  function resizeToWebp(file, maxWidth, maxHeight, quality){
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error('Unable to read file.'));
      reader.onload = event => {
        const img = new Image();
        img.onerror = () => reject(new Error('Unable to load image.'));
        img.onload = () => {
          const scale = Math.min(1, maxWidth / (img.width || maxWidth), maxHeight / (img.height || maxHeight));
          const width = Math.max(1, Math.round((img.width || maxWidth) * scale));
          const height = Math.max(1, Math.round((img.height || maxHeight) * scale));
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if(!ctx){
            reject(new Error('Canvas not available.'));
            return;
          }
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob(blob => {
            if(blob){
              resolve(blob);
              return;
            }
            reject(new Error('Unable to create webp image.'));
          }, 'image/webp', quality);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  async function uploadGalleryPair(stem, file){
    const thumbBlob = await resizeToWebp(file, 420, 420, 0.8);
    const regularBlob = await resizeToWebp(file, 1600, 1600, 0.9);
    const thumbPath = `thumbnails/${stem}-thumb.webp`;
    const regularPath = `regular/${stem}-regular.webp`;
    const thumbUpload = await state.client.storage.from(GALLERY_BUCKET).upload(thumbPath, thumbBlob, {
      upsert: true,
      contentType: 'image/webp'
    });
    if(thumbUpload.error){
      throw thumbUpload.error;
    }
    const regularUpload = await state.client.storage.from(GALLERY_BUCKET).upload(regularPath, regularBlob, {
      upsert: true,
      contentType: 'image/webp'
    });
    if(regularUpload.error){
      throw regularUpload.error;
    }
    return {
      thumbUrl: getPublicThumbUrl(stem),
      regularUrl: getPublicRegularUrl(stem)
    };
  }

  function getSelectedLang(){
    return els.galleryLanguage && els.galleryLanguage.value === 'ko' ? 'ko' : 'en';
  }

  function getCaptionDefaults(lang, stem){
    if(lang === 'ko'){
      return {
        title: `갤러리 사진 ${stem}`,
        caption: `갤러리 사진 ${stem}`
      };
    }
    return {
      title: `Gallery Photo ${stem}`,
      caption: `Gallery Photo ${stem}`
    };
  }

  async function saveGalleryPhoto(){
    if(!ensureSignedIn()){
      alert('Please sign in first.');
      return;
    }
    const stem = (els.galleryStem && els.galleryStem.value || '').trim();
    if(!stem){
      alert('Please choose the matching gallery photo stem first.');
      return;
    }
    const caption = (els.galleryCaption && els.galleryCaption.value || '').trim();
    const lang = getSelectedLang();
    const existingId = state.editingId || (els.galleryEditId && els.galleryEditId.value || '');
    let regularUrl = getPublicRegularUrl(stem);
    if(state.selectedFile){
      try{
        const uploaded = await uploadGalleryPair(stem, state.selectedFile);
        regularUrl = uploaded.regularUrl;
      }catch(error){
        alert(error && error.message ? error.message : 'Gallery upload failed.');
        return;
      }
    }else if(!existingId){
      alert('Please choose a photo file so both thumbnail and regular images can be uploaded.');
      return;
    }

    const fallback = getCaptionDefaults(lang, stem);
    const payload = {
      language: lang,
      title: caption || fallback.title,
      caption: caption || fallback.caption,
      image_url: regularUrl,
      is_visible: true
    };

    let result;
    if(existingId){
      result = await state.client.from('gallery_items').update(payload).eq('id', existingId).select('id');
    }else{
      result = await state.client.from('gallery_items').insert(payload).select('id');
    }
    if(result.error){
      alert(result.error.message || 'Could not save gallery item.');
      return;
    }
    clearForm();
    await loadGalleryRows();
  }

  async function loadGalleryRows(){
    if(!state.client || !ensureSignedIn()){
      return;
    }
    const { data, error } = await state.client
      .from('gallery_items')
      .select('id,language,title,caption,image_url,is_visible,created_at')
      .order('created_at', { ascending: false });
    if(error){
      alert(error.message || 'Could not load gallery rows.');
      return;
    }
    state.galleryRows = Array.isArray(data) ? data : [];
    renderGalleryList();
  }

  function renderGalleryList(){
    if(!els.galleryList) return;
    if(!state.galleryRows.length){
      els.galleryList.innerHTML = '<div class="admin-empty">No gallery rows have been saved yet.</div>';
      return;
    }
    els.galleryList.innerHTML = state.galleryRows.map(row => {
      const stem = getStemFromUrl(row.image_url);
      const thumb = stem ? getPublicThumbUrl(stem) : row.image_url;
      const langLabel = row.language === 'ko' ? 'Korean Site' : 'English Site';
      return `
        <article class="admin-item" data-id="${escapeHtml(row.id)}">
          <img class="admin-thumb" src="${escapeHtml(thumb)}" alt="${escapeHtml(row.caption || row.title || 'Gallery photo')}">
          <div>
            <h3>${escapeHtml(row.title || 'Untitled')}</h3>
            <p>${escapeHtml(row.caption || '')}</p>
            <div class="admin-meta">${escapeHtml(langLabel)} · Photo file: ${escapeHtml(stem || 'unknown')}</div>
            <div class="admin-item-actions">
              <button class="admin-btn secondary" type="button" data-action="edit">Edit</button>
              <button class="admin-btn secondary" type="button" data-action="toggle">${row.is_visible ? 'Hide' : 'Show'}</button>
              <button class="admin-btn danger" type="button" data-action="delete">Delete</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    els.galleryList.querySelectorAll('.admin-item').forEach(card => {
      const row = state.galleryRows.find(item => String(item.id) === String(card.dataset.id));
      if(!row) return;
      card.querySelector('[data-action="edit"]').addEventListener('click', () => {
        state.editingId = row.id;
        if(els.galleryEditId) els.galleryEditId.value = row.id;
        if(els.galleryLanguage) els.galleryLanguage.value = row.language === 'ko' ? 'ko' : 'en';
        if(els.galleryCaption) els.galleryCaption.value = row.caption || row.title || '';
        const stem = getStemFromUrl(row.image_url);
        if(els.galleryStem && stem){
          els.galleryStem.value = stem;
        }
        if(els.galleryPreview && els.galleryPreviewImg){
          els.galleryPreviewImg.src = row.image_url || '';
          els.galleryPreview.style.display = row.image_url ? 'block' : 'none';
        }
        setMode('edit');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      card.querySelector('[data-action="toggle"]').addEventListener('click', async () => {
        if(!state.client) return;
        const { error } = await state.client.from('gallery_items').update({ is_visible: !row.is_visible }).eq('id', row.id);
        if(error){
          alert(error.message || 'Could not update visibility.');
          return;
        }
        await loadGalleryRows();
      });
      card.querySelector('[data-action="delete"]').addEventListener('click', async () => {
        if(!confirm('Delete this gallery photo and its thumbnail pair?')) return;
        const stem = getStemFromUrl(row.image_url);
        if(stem){
          await state.client.storage.from(GALLERY_BUCKET).remove([
            `thumbnails/${stem}-thumb.webp`,
            `regular/${stem}-regular.webp`
          ]);
        }
        const { error } = await state.client.from('gallery_items').delete().eq('id', row.id);
        if(error){
          alert(error.message || 'Could not delete gallery row.');
          return;
        }
        await loadGalleryRows();
      });
    });
  }

  function previewSelectedFile(){
    const file = els.galleryImage && els.galleryImage.files ? els.galleryImage.files[0] : null;
    state.selectedFile = file || null;
    if(!file){
      if(els.galleryPreview) els.galleryPreview.style.display='none';
      if(els.galleryPreviewImg) els.galleryPreviewImg.src='';
      return;
    }
    const reader = new FileReader();
    reader.onload = ev => {
      if(els.galleryPreview && els.galleryPreviewImg){
        els.galleryPreviewImg.src = ev.target.result;
        els.galleryPreview.style.display = 'block';
      }
    };
    reader.readAsDataURL(file);
  }

  function bindEvents(){
    if(els.loginButton) els.loginButton.addEventListener('click', login);
    if(els.logoutButton) els.logoutButton.addEventListener('click', logout);
    if(els.refreshButton) els.refreshButton.addEventListener('click', loadGalleryRows);
    if(els.galleryImage) els.galleryImage.addEventListener('change', previewSelectedFile);
    if(els.gallerySaveButton) els.gallerySaveButton.addEventListener('click', saveGalleryPhoto);
    if(els.galleryClearButton) els.galleryClearButton.addEventListener('click', clearForm);
  }

  async function init(){
    state.client = initSupabase();
    bindEvents();
    populateStemSelect();
    clearForm();
    if(!state.client){
      showLogin();
      if(els.loginError){
        els.loginError.textContent = 'Supabase is not available on this page.';
        els.loginError.style.display = 'block';
      }
      return;
    }
    const { data } = await state.client.auth.getSession();
    state.session = data && data.session ? data.session : null;
    if(state.session){
      showDashboard();
      await loadGalleryRows();
    }else{
      showLogin();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
