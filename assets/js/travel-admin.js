const ADMIN_PASSWORD = 'TeaPark2026';
const ADMIN_SESSION_KEY = 'lifeword.galleryAdmin.auth';
const STORAGE_GALLERY = 'lifeword.travelGallery.v2';
const STORAGE_GUESTBOOK = 'lifeword.guestbook.v1';
const STORAGE_LIVING = 'lifeword.livingWord.v1';
const STORAGE_HOMEPAGE_VISITS = 'lifeword.homepageVisits.v1';
const SUPABASE_PROJECT_URL = 'https://ytfjmlhfkgvdoifhknxq.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_LBT8442LBjSc0ZOvaUxkFg_MIIBacTw';
const SUPABASE_GALLERY_BUCKET_BASE = 'https://ytfjmlhfkgvdoifhknxq.supabase.co/storage/v1/object/public/gallery';
const SUPABASE_GALLERY_FILE_STEMS = [
  '1',
  '1765669348028',
  '2',
  '20210820_152827-01',
  '20220813_125953',
  '20240705_123854',
  'b',
  'c',
  'DSC04349',
  'FB_IMG_1713760844282',
  'IMG_1462',
  'IMG_8519',
  '20250927_133835',
  '20250927_133219'
];
const TRAVEL_IMAGE_MAX_WIDTH = 1600;
const TRAVEL_IMAGE_MAX_HEIGHT = 1600;
const TRAVEL_IMAGE_QUALITY = 0.82;

const DEFAULT_GALLERY_ITEMS = [
  {id:'g1',language:'en',src:'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=500&q=75',caption:'Turkiye - Ancient Churches'},
  {id:'g2',language:'en',src:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75',caption:'Cappadocia - Balloon Sunrise'},
  {id:'g3',language:'en',src:'https://images.unsplash.com/photo-1609788935434-3c1d2945a57f?w=500&q=75',caption:"New York - God's World"},
  {id:'g4',language:'en',src:'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=500&q=75',caption:"God's Word - Our Guide"},
  {id:'g5',language:'en',src:'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&q=75',caption:'Creation - His Handiwork'},
  {id:'g6',language:'en',src:'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=75',caption:'Edmonton - Home'}
];

const DEFAULT_LIVING_ITEMS = [
  {
    id:'lw1',
    language:'en',
    type:'Podcast',
    title:'Walking by Faith in Ordinary Days',
    summary:'A short audio encouragement about trusting God faithfully in everyday life, even when the path ahead is unclear.',
    link:'',
    createdAt:'2026-05-14T09:00:00.000Z'
  },
  {
    id:'lw2',
    language:'en',
    type:'Article',
    title:'When Prayer Feels Quiet',
    summary:'A reflective article for believers who feel spiritually tired and need gentle encouragement to keep drawing near to the Lord.',
    link:'',
    createdAt:'2026-05-14T09:30:00.000Z'
  }
];

let galleryItems = normalizeGalleryItems(loadStoredItems(STORAGE_GALLERY, DEFAULT_GALLERY_ITEMS));
let guestbookEntries = normalizeGuestbookEntries(loadStoredItems(STORAGE_GUESTBOOK, []));
let livingWordItems = normalizeLivingWordItems(loadStoredItems(STORAGE_LIVING, DEFAULT_LIVING_ITEMS));
let galleryPendingImage = '';
let galleryPreviewValid = false;
let livingPendingMedia = { src:'', kind:'', mime:'', name:'' };
const GUESTBOOK_EMOJI_CHOICES = ['🙏','❤️','😊','✨','👍','🎉'];
const supabaseClient = window.supabase && SUPABASE_PROJECT_URL && SUPABASE_PUBLISHABLE_KEY
  ? window.supabase.createClient(SUPABASE_PROJECT_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;
let guestbookUsesSupabase = Boolean(supabaseClient);

const loginCard = document.getElementById('login-card');
const dashboard = document.getElementById('admin-dashboard');
const ADMIN_EMAIL = 'tpark2142@gmail.com';
const emailInput = document.getElementById('admin-email');
const passwordInput = document.getElementById('admin-password');
const loginError = document.getElementById('login-error');

document.getElementById('login-button').addEventListener('click', login);
emailInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') login();
});
passwordInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') login();
});
document.getElementById('logout-button').addEventListener('click', logout);
document.getElementById('refresh-public-button').addEventListener('click', refreshData);
document.getElementById('gallery-image').addEventListener('change', handleGalleryImage);
document.getElementById('gallery-save-button').addEventListener('click', saveGalleryEntry);
document.getElementById('gallery-clear-button').addEventListener('click', clearGalleryForm);
document.getElementById('living-save-button').addEventListener('click', saveLivingEntry);
document.getElementById('living-clear-button').addEventListener('click', clearLivingForm);
document.getElementById('living-media').addEventListener('change', handleLivingMedia);

init();

async function init(){
  populateGalleryPhotoStemOptions();
  if (supabaseClient) {
    try {
      await supabaseClient.auth.signOut();
    } catch (_error) {
      // Ignore sign-out errors on load.
    }
  }
  showLogin();
}

function populateGalleryPhotoStemOptions(){
  const select = document.getElementById('gallery-photo-stem');
  if (!select) return;
  select.innerHTML = '<option value="">Choose the matching gallery photo</option>' + SUPABASE_GALLERY_FILE_STEMS.map((stem, index) => (
    `<option value="${escapeAttr(stem)}">${index + 1}. ${escapeHtml(stem)}</option>`
  )).join('');
}

function getGalleryRegularUrl(stem){
  const value = String(stem || '').trim();
  return value ? `${SUPABASE_GALLERY_BUCKET_BASE}/regular/${encodeURIComponent(value)}-regular.webp` : '';
}

function getGalleryThumbnailUrl(stem){
  const value = String(stem || '').trim();
  return value ? `${SUPABASE_GALLERY_BUCKET_BASE}/thumbnails/${encodeURIComponent(value)}-thumb.webp` : '';
}

function getGalleryStemFromUrl(value){
  const raw = String(value || '').trim();
  if (!raw) return '';
  let decoded = raw;
  try { decoded = decodeURIComponent(raw); } catch (_error) {}
  const match = decoded.match(/(?:regular|thumbnails)\/([^/?#]+?)(?:-(?:regular|thumb))?\.webp(?:[?#].*)?$/i);
  if (match) return match[1];
  const fileMatch = decoded.match(/([^\/\\?#]+?)(?:-(?:regular|thumb))?\.webp(?:[?#].*)?$/i);
  return fileMatch ? fileMatch[1] : '';
}

async function login(){
  if (!supabaseClient || !emailInput || !passwordInput) {
    loginError.style.display = 'block';
    return;
  }
  const email = (emailInput.value || '').trim().toLowerCase();
  const password = passwordInput.value || '';
  if (!email || !password || email !== ADMIN_EMAIL.toLowerCase()) {
    loginError.style.display = 'block';
    return;
  }
  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;
    const userEmail = data && data.user ? data.user.email : '';
    if (!userEmail || userEmail.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      throw new Error('Unauthorized admin email');
    }
    passwordInput.value = '';
    loginError.style.display = 'none';
    showDashboard();
  } catch (_error) {
    loginError.style.display = 'block';
  }
}

async function logout(){
  if (supabaseClient) {
    try {
      await supabaseClient.auth.signOut();
    } catch (_error) {
      // Ignore sign-out errors and continue.
    }
  }
  if (passwordInput) passwordInput.value = '';
  showLogin();
}

function showLogin(){
  loginCard.style.display = 'block';
  dashboard.style.display = 'none';
}

function showDashboard(){
  loginCard.style.display = 'none';
  dashboard.style.display = 'block';
  loginError.style.display = 'none';
  refreshData();
}

async function refreshData(){
  await renderHomepageVisitStats();
  await Promise.all([
    loadGalleryAdminItems(),
    loadLivingAdminItems(),
    loadGuestbookAdminEntries()
  ]);
}

async function loadGuestbookAdminEntries(){
  if (!supabaseClient || !guestbookUsesSupabase) {
    guestbookEntries = normalizeGuestbookEntries(loadStoredItems(STORAGE_GUESTBOOK, []));
    renderGuestbookAdminList();
    return;
  }

  try {
    let data = null;
    let error = null;
    ({ data, error } = await supabaseClient
      .from('guestbook_entries')
      .select('id, name, message, language, created_at, is_visible, reaction_emoji, reply_text')
      .eq('is_visible', true)
      .order('created_at', { ascending: false }));
    if (error) {
      ({ data, error } = await supabaseClient
        .from('guestbook_entries')
        .select('id, name, message, language, created_at, is_visible')
        .eq('is_visible', true)
        .order('created_at', { ascending: false }));
    }

    if (error) throw error;

    guestbookEntries = normalizeGuestbookEntries((data || []).map(entry => ({
      id: `gb-${entry.id}`,
      name: entry.name || '',
      message: entry.message || '',
      language: entry.language === 'ko' ? 'ko' : 'en',
      reactionEmoji: entry.reaction_emoji || '',
      replyText: entry.reply_text || '',
      createdAt: entry.created_at || new Date().toISOString()
    })));
    renderGuestbookAdminList();
  } catch (error) {
    const fallbackEntries = normalizeGuestbookEntries(loadStoredItems(STORAGE_GUESTBOOK, []));
    guestbookEntries = fallbackEntries;
    renderGuestbookAdminList();
    if (!fallbackEntries.length) {
      const list = document.getElementById('guestbook-admin-list');
      if (list) {
        list.innerHTML = `<div class="admin-empty">Guestbook messages could not be loaded from Supabase.<br><br>${escapeHtml(formatSupabaseError(error))}</div>`;
      }
    } else {
      alert(`Supabase could not load Fellowship Corner messages. Showing browser-saved messages instead.\n\n${formatSupabaseError(error)}`);
    }
  }
}

async function loadGalleryAdminItems(){
  if (!supabaseClient) {
    galleryItems = normalizeGalleryItems(loadStoredItems(STORAGE_GALLERY, DEFAULT_GALLERY_ITEMS));
    renderGalleryAdminList();
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from('gallery_items')
      .select('id, language, title, caption, image_url, is_visible, created_at')
      .eq('is_visible', true)
      .order('created_at', { ascending: false });

    if (error) throw error;

    galleryItems = normalizeGalleryItems((data || []).map(item => ({
      id: `g-${item.id}`,
      language: item.language === 'ko' ? 'ko' : 'en',
      title: item.title || '',
      caption: item.caption || item.title || '',
      photoStem: getGalleryStemFromUrl(item.image_url || ''),
      src: item.image_url || '',
      createdAt: item.created_at || ''
    })));
    renderGalleryAdminList();
  } catch (_error) {
    galleryItems = normalizeGalleryItems(loadStoredItems(STORAGE_GALLERY, DEFAULT_GALLERY_ITEMS));
    renderGalleryAdminList();
  }
}

async function loadLivingAdminItems(){
  if (!supabaseClient) {
    livingWordItems = normalizeLivingWordItems(loadStoredItems(STORAGE_LIVING, DEFAULT_LIVING_ITEMS));
    renderLivingAdminList();
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from('living_word_posts')
      .select('id, language, content_type, title, summary, link_url, media_url, is_visible, created_at')
      .eq('is_visible', true)
      .order('created_at', { ascending: false });

    if (error) throw error;

    livingWordItems = normalizeLivingWordItems((data || []).map(item => ({
      id: `lw-${item.id}`,
      language: item.language === 'ko' ? 'ko' : 'en',
      type: normalizeLivingWordTypeForDisplay(item.content_type),
      title: item.title || '',
      summary: item.summary || '',
      link: item.link_url || '',
      mediaSrc: item.media_url || '',
      mediaKind: inferMediaKind(item.media_url || ''),
      mediaMime: '',
      mediaName: '',
      createdAt: item.created_at || ''
    })));
    renderLivingAdminList();
  } catch (_error) {
    livingWordItems = normalizeLivingWordItems(loadStoredItems(STORAGE_LIVING, DEFAULT_LIVING_ITEMS));
    renderLivingAdminList();
  }
}

function normalizeGalleryItems(items){
  return (Array.isArray(items) ? items : []).map(item => ({
    ...item,
    language: item && item.language === 'ko' ? 'ko' : 'en'
  }));
}

function normalizeGuestbookEntries(items){
  return (Array.isArray(items) ? items : []).map(item => ({
    ...item,
    language: item && item.language === 'ko' ? 'ko' : 'en',
    reactionEmoji: item && item.reactionEmoji ? String(item.reactionEmoji) : '',
    replyText: item && item.replyText ? String(item.replyText) : ''
  }));
}

function normalizeLivingWordTypeForDisplay(type){
  const normalized = String(type || 'article').toLowerCase();
  if (normalized === 'podcast') return 'Podcast';
  if (normalized === 'journal') return 'Journal';
  if (normalized === 'powerpoint') return 'PowerPoint';
  return 'Article';
}

function normalizeLivingWordTypeForDatabase(type){
  const normalized = String(type || 'Article').toLowerCase();
  if (normalized === 'podcast') return 'podcast';
  if (normalized === 'journal') return 'journal';
  if (normalized === 'powerpoint') return 'powerpoint';
  return 'article';
}

function inferMediaKind(value){
  const source = String(value || '').trim().toLowerCase();
  if (!source) return '';
  if (source.startsWith('data:video/') || source.includes('.mp4') || source.includes('.mov') || source.includes('.webm')) {
    return 'video';
  }
  if (source.startsWith('data:audio/') || source.includes('.mp3') || source.includes('.m4a') || source.includes('.wav')) {
    return 'audio';
  }
  return '';
}

function normalizeLivingWordItems(items){
  return (Array.isArray(items) ? items : []).map(item => ({
    ...item,
    language: item && item.language === 'ko' ? 'ko' : 'en'
  }));
}

function loadStoredItems(key, fallback){
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return clone(fallback);
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : clone(fallback);
  } catch (_error) {
    return clone(fallback);
  }
}

function loadHomepageVisitStats(){
  const fallback = { totalViews: 0, browserSessions: 0, lastVisitedAt: '', history: [] };
  try {
    const raw = localStorage.getItem(STORAGE_HOMEPAGE_VISITS);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return {
      totalViews: Number(parsed.totalViews || 0),
      browserSessions: Number(parsed.browserSessions || 0),
      lastVisitedAt: parsed.lastVisitedAt || '',
      history: Array.isArray(parsed.history)
        ? parsed.history
            .map(item => {
              if (typeof item === 'string') return { at: item, lang: 'en' };
              if (item && typeof item.at === 'string') return { at: item.at, lang: item.lang === 'ko' ? 'ko' : 'en' };
              return null;
            })
            .filter(Boolean)
        : []
    };
  } catch (_error) {
    return fallback;
  }
}

async function loadHomepageVisitStatsRemote(){
  if (!supabaseClient) {
    return null;
  }
  try {
    const { data, error } = await supabaseClient
      .from('homepage_visits')
      .select('id, visited_at, language, session_key')
      .order('visited_at', { ascending: false });
    if (error) throw error;
    const rows = Array.isArray(data) ? data : [];
    const history = rows
      .map(item => ({
        at: item.visited_at || '',
        lang: item.language === 'ko' ? 'ko' : 'en'
      }))
      .filter(item => item.at);
    const sessionKeys = new Set(
      rows
        .map(item => String(item.session_key || '').trim())
        .filter(Boolean)
    );
    return {
      totalViews: rows.length,
      browserSessions: sessionKeys.size,
      lastVisitedAt: rows.length ? (rows[0].visited_at || '') : '',
      history
    };
  } catch (_error) {
    return null;
  }
}

function saveStoredItems(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}

function clone(value){
  return JSON.parse(JSON.stringify(value));
}

function makeId(prefix){
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function escapeHtml(value){
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(value){
  return escapeHtml(value).replace(/`/g, '&#96;');
}

function formatSupabaseError(error){
  if (!error) return 'Unknown error.';
  const parts = [];
  if (error.message) parts.push(error.message);
  if (error.details) parts.push(error.details);
  if (error.hint) parts.push(`Hint: ${error.hint}`);
  if (error.code) parts.push(`Code: ${error.code}`);
  return parts.join('\n\n') || 'Unknown error.';
}

function resizeImageFile(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = event => {
      const img = new Image();
      img.onload = () => {
        let width = img.width || TRAVEL_IMAGE_MAX_WIDTH;
        let height = img.height || TRAVEL_IMAGE_MAX_HEIGHT;
        const scale = Math.min(
          1,
          TRAVEL_IMAGE_MAX_WIDTH / width,
          TRAVEL_IMAGE_MAX_HEIGHT / height
        );
        width = Math.max(1, Math.round(width * scale));
        height = Math.max(1, Math.round(height * scale));
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(event.target.result);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', TRAVEL_IMAGE_QUALITY));
      };
      img.onerror = () => reject(new Error('Unsupported image format.'));
      img.src = event.target.result;
    };
    reader.onerror = () => reject(new Error('Unable to read image.'));
    reader.readAsDataURL(file);
  });
}

function handleGalleryImage(event){
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  resizeImageFile(file)
    .then(dataUrl => {
      galleryPendingImage = dataUrl;
      setPreview(dataUrl);
    })
    .catch(() => {
      alert('This photo could not be read. Please try another image.');
    });
}

function setPreview(src){
  const wrapper = document.getElementById('gallery-preview');
  const img = document.getElementById('gallery-preview-img');
  galleryPreviewValid = false;
  img.onload = () => {
    galleryPreviewValid = Boolean(img.src);
  };
  img.onerror = () => {
    galleryPreviewValid = false;
  };
  img.src = src || '';
  wrapper.style.display = src ? 'block' : 'none';
}

function clearGalleryForm(){
  document.getElementById('gallery-edit-id').value = '';
  document.getElementById('gallery-language').value = 'en';
  document.getElementById('gallery-photo-stem').value = '';
  document.getElementById('gallery-caption').value = '';
  document.getElementById('gallery-image').value = '';
  galleryPendingImage = '';
  setPreview('');
  document.getElementById('gallery-save-button').textContent = 'Save Gallery Photo';
}

async function saveGalleryEntry(){
  const editId = document.getElementById('gallery-edit-id').value.trim();
  const language = document.getElementById('gallery-language').value === 'ko' ? 'ko' : 'en';
  const photoStem = document.getElementById('gallery-photo-stem').value.trim();
  const caption = document.getElementById('gallery-caption').value.trim() || 'Untitled Photo';
  const selectedStorageUrl = getGalleryRegularUrl(photoStem);
  const currentItem = editId ? galleryItems.find(item => item.id === editId) : null;
  const nextImageUrl = selectedStorageUrl || galleryPendingImage || (currentItem && currentItem.src) || '';

  if (!editId && !nextImageUrl) {
    alert('Please choose a gallery photo file or upload a photo first.');
    return;
  }
  const hasNewLocalImage = galleryPendingImage && galleryPendingImage.startsWith('data:image/');
  if (hasNewLocalImage && !galleryPreviewValid) {
    alert('This image could not be prepared correctly. Please choose a JPG or PNG image and try again.');
    return;
  }

  if (editId) {
    galleryItems = galleryItems.map(item => item.id === editId ? {
      ...item,
      language,
      photoStem,
      caption,
      src: nextImageUrl || item.src
    } : item);
  } else {
    galleryItems.unshift({
      id: makeId('g'),
      language,
      photoStem,
      src: nextImageUrl,
      caption
    });
  }

  if (supabaseClient) {
    const payload = {
      language,
      title: caption,
      caption,
      image_url: nextImageUrl,
      is_visible: true
    };
    try {
      if (editId) {
        const numericId = String(editId).startsWith('g-') ? String(editId).slice(2) : String(editId);
        const { error } = await supabaseClient
          .from('gallery_items')
          .update(payload)
          .eq('id', numericId);
        if (error) throw error;
      } else {
        const { error } = await supabaseClient
          .from('gallery_items')
          .insert(payload);
        if (error) throw error;
      }
      clearGalleryForm();
      await loadGalleryAdminItems();
      return;
    } catch (error) {
      alert(`Supabase could not save this Gallery item. Falling back to browser-only storage.\n\n${formatSupabaseError(error)}`);
    }
  }

  saveStoredItems(STORAGE_GALLERY, galleryItems);
  clearGalleryForm();
  renderGalleryAdminList();
}

function renderGalleryAdminList(){
  const list = document.getElementById('gallery-admin-list');
  if (!list) return;
  if (!galleryItems.length) {
    list.innerHTML = '<div class="admin-empty">No Gallery photos are published yet.</div>';
    return;
  }

  list.innerHTML = galleryItems.map(item => {
    const stem = item.photoStem || getGalleryStemFromUrl(item.src || '');
    const thumbSrc = getGalleryThumbnailUrl(stem) || item.src || '';
    const fallbackSrc = item.src || getGalleryRegularUrl(stem) || '';
    return `
    <article class="admin-item">
      <img class="admin-thumb" src="${escapeHtml(thumbSrc)}" data-fallback-src="${escapeHtml(fallbackSrc)}" data-photo-stem="${escapeHtml(stem)}" alt="${escapeHtml(item.caption || 'Gallery image')}" onerror="handleAdminThumbError(this)">
      <div>
        <h3>${escapeHtml(item.caption || 'Untitled Photo')}</h3>
        <p class="admin-meta">${escapeHtml(item.language === 'ko' ? 'Korean Site' : 'English Site')} &middot; ${escapeHtml(stem ? `Photo file: ${stem}` : 'No photo file selected')}</p>
        <div class="admin-item-actions">
          <button class="admin-btn secondary" type="button" onclick="editGallery('${item.id}')">Edit</button>
          <button class="admin-btn danger" type="button" onclick="removeGallery('${item.id}')">Delete</button>
        </div>
      </div>
    </article>
  `;
  }).join('');
}

window.handleAdminThumbError = function(img){
  if (!img) return;
  const fallback = img.dataset ? (img.dataset.fallbackSrc || '') : '';
  if (fallback && img.src !== fallback && !img.dataset.usedFallback) {
    img.dataset.usedFallback = 'true';
    img.src = fallback;
    return;
  }
  img.classList.add('is-missing');
  img.removeAttribute('src');
  img.alt = img.dataset && img.dataset.photoStem
    ? `Upload thumbnail and regular files for ${img.dataset.photoStem}`
    : 'Upload thumbnail and regular files';
};

window.editGallery = function(id){
  const item = galleryItems.find(entry => entry.id === id);
  if (!item) return;
  document.getElementById('gallery-edit-id').value = item.id;
  document.getElementById('gallery-language').value = item.language === 'ko' ? 'ko' : 'en';
  document.getElementById('gallery-photo-stem').value = item.photoStem || getGalleryStemFromUrl(item.src || '');
  document.getElementById('gallery-caption').value = item.caption || '';
  document.getElementById('gallery-image').value = '';
  galleryPendingImage = item.src || '';
  setPreview(item.src || '');
  document.getElementById('gallery-save-button').textContent = 'Update Gallery Photo';
  window.scrollTo({top: 0, behavior: 'smooth'});
};

window.removeGallery = async function(id){
  const item = galleryItems.find(entry => entry.id === id);
  if (!item) return;
  if (!confirm(`Delete "${item.caption || 'this photo'}" from the Gallery?`)) return;
  if (supabaseClient) {
    try {
      const numericId = String(id).startsWith('g-') ? String(id).slice(2) : String(id);
      const { error } = await supabaseClient
        .rpc('admin_hide_gallery_item', { item_id: Number(numericId) });
      if (error) throw error;
      await loadGalleryAdminItems();
      clearGalleryForm();
      return;
    } catch (error) {
      alert(`Supabase could not hide this Gallery item. Falling back to browser-only removal.\n\n${formatSupabaseError(error)}`);
    }
  }
  galleryItems = galleryItems.filter(entry => entry.id !== id);
  saveStoredItems(STORAGE_GALLERY, galleryItems);
  renderGalleryAdminList();
  clearGalleryForm();
};

function renderGuestbookAdminList(){
  const list = document.getElementById('guestbook-admin-list');
  if (!list) return;
  if (!guestbookEntries.length) {
    list.innerHTML = '<div class="admin-empty">No guestbook messages have been posted yet.</div>';
    return;
  }

  list.innerHTML = guestbookEntries.map(entry => `
    <article class="admin-item" style="grid-template-columns:1fr;">
      <div>
        <h3>${escapeHtml(entry.name || 'Guest')}</h3>
        <p>${escapeHtml(entry.message || '')}</p>
        <p class="admin-meta">${escapeHtml(entry.language === 'ko' ? 'Korean Site' : 'English Site')} &middot; ${formatGuestbookDate(entry.createdAt)}</p>
        ${entry.reactionEmoji ? `<p class="admin-meta">Guest Emoji: ${escapeHtml(entry.reactionEmoji)}</p>` : ''}
        ${entry.replyText ? `<div class="admin-reply-preview"><strong>Current Reply</strong><div>${escapeHtml(entry.replyText)}</div></div>` : ''}
        <div class="admin-inline-field">
          <label>Reply Emoji</label>
          <div class="admin-emoji-row">
            ${GUESTBOOK_EMOJI_CHOICES.map(emoji => `<button class="admin-emoji-chip" type="button" onclick="setGuestbookReplyEmoji('${entry.id}','${emoji.replace(/'/g, "\\'")}')">${emoji}</button>`).join('')}
          </div>
        </div>
        <div class="admin-inline-field">
          <label>Reply</label>
          <textarea id="guestbook-reply-${entry.id}" placeholder="Write a short reply for this guestbook message...">${escapeHtml(entry.replyText || '')}</textarea>
        </div>
        <div class="admin-item-actions">
          <button class="admin-btn primary" type="button" onclick="saveGuestbookResponse('${entry.id}')">Save Reply</button>
          <button class="admin-btn secondary" type="button" onclick="clearGuestbookResponse('${entry.id}')">Clear Reply</button>
          <button class="admin-btn danger" type="button" onclick="removeGuestbookEntry('${entry.id}')">Delete Message</button>
        </div>
      </div>
    </article>
  `).join('');
}

window.setGuestbookReplyEmoji = function(id, emoji){
  const input = document.getElementById(`guestbook-reply-${id}`);
  if (!input || !emoji) return;
  const current = input.value || '';
  input.value = current ? `${current} ${emoji}` : emoji;
  input.focus();
};

window.clearGuestbookResponse = async function(id){
  const replyInput = document.getElementById(`guestbook-reply-${id}`);
  if (replyInput) replyInput.value = '';
  await saveGuestbookResponse(id);
};

window.saveGuestbookResponse = async function(id){
  const entry = guestbookEntries.find(item => item.id === id);
  if (!entry) return;
  const replyInput = document.getElementById(`guestbook-reply-${id}`);
  const replyText = (replyInput ? replyInput.value : '').trim().slice(0, 700);

  if (supabaseClient && guestbookUsesSupabase) {
    const numericId = String(id).startsWith('gb-') ? String(id).slice(3) : String(id);
    try {
      const { error } = await supabaseClient
        .rpc('admin_update_guestbook_response', {
          entry_id: Number(numericId),
          emoji_value: entry.reactionEmoji || null,
          reply_value: replyText || null
        });
      if (error) throw error;
      await loadGuestbookAdminEntries();
      return;
    } catch (error) {
      alert(`Supabase could not save this reply yet. Please run the guestbook reply SQL once, then try again.\n\n${formatSupabaseError(error)}`);
      return;
    }
  }

  guestbookEntries = guestbookEntries.map(item => item.id === id ? {
    ...item,
    replyText
  } : item);
  saveStoredItems(STORAGE_GUESTBOOK, guestbookEntries);
  renderGuestbookAdminList();
};

function formatGuestbookDate(value){
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) return 'Recent message';
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatVisitDateTime(value){
  const date = value ? new Date(value) : null;
  if (!date || Number.isNaN(date.getTime())) return 'No visit recorded yet';
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

async function renderHomepageVisitStats(){
  const list = document.getElementById('homepage-visits-list');
  const summary = document.getElementById('homepage-visits-summary');
  if (!list) return;
  const stats = await loadHomepageVisitStatsRemote() || loadHomepageVisitStats();
  const history = Array.isArray(stats.history) ? stats.history : [];
  const todayEnglish = countVisitsOnDate(history, new Date(), 'en');
  const monthEnglish = countVisitsInMonth(history, new Date(), 'en');
  const yearEnglish = countVisitsInYear(history, new Date(), 'en');
  const totalEnglish = countVisitsAll(history, 'en');
  const todayKorean = countVisitsOnDate(history, new Date(), 'ko');
  const monthKorean = countVisitsInMonth(history, new Date(), 'ko');
  const yearKorean = countVisitsInYear(history, new Date(), 'ko');
  const totalKorean = countVisitsAll(history, 'ko');
  list.innerHTML = `
    <article class="admin-item" style="grid-template-columns:repeat(3,minmax(0,1fr));">
      <div>
        <h3>${escapeHtml(String(stats.totalViews || 0))}</h3>
        <p class="admin-meta">Total homepage visits counted here</p>
      </div>
      <div>
        <h3>${escapeHtml(String(stats.browserSessions || 0))}</h3>
        <p class="admin-meta">Unique open sessions across devices</p>
      </div>
      <div>
        <h3>${escapeHtml(formatVisitDateTime(stats.lastVisitedAt))}</h3>
        <p class="admin-meta">Most recent homepage visit</p>
      </div>
    </article>
  `;
  if (summary) {
    summary.innerHTML = `
      <article class="stats-card">
        <h3>${escapeHtml(String(todayEnglish))}</h3>
        <p>English Today</p>
      </article>
      <article class="stats-card">
        <h3>${escapeHtml(String(monthEnglish))}</h3>
        <p>English This Month</p>
      </article>
      <article class="stats-card">
        <h3>${escapeHtml(String(yearEnglish))}</h3>
        <p>English This Year</p>
      </article>
      <article class="stats-card">
        <h3>${escapeHtml(String(totalEnglish))}</h3>
        <p>English Total</p>
      </article>
      <article class="stats-card">
        <h3>${escapeHtml(String(todayKorean))}</h3>
        <p>Korean Today</p>
      </article>
      <article class="stats-card">
        <h3>${escapeHtml(String(monthKorean))}</h3>
        <p>Korean This Month</p>
      </article>
      <article class="stats-card">
        <h3>${escapeHtml(String(yearKorean))}</h3>
        <p>Korean This Year</p>
      </article>
      <article class="stats-card">
        <h3>${escapeHtml(String(totalKorean))}</h3>
        <p>Korean Total</p>
      </article>
    `;
  }
  renderVisitComparisonChart('daily-visits-chart', buildDailyVisitBuckets(history, 7));
  renderVisitComparisonChart('monthly-visits-chart', buildMonthlyVisitBuckets(history, 6));
  renderVisitComparisonChart('yearly-visits-chart', buildYearlyVisitBuckets(history, 5));
}

function countVisitsOnDate(history, targetDate, lang){
  const key = formatDayKey(targetDate);
  return history.reduce((count, item) => count + (formatDayKey(item.at) === key && getVisitItemLang(item) === lang ? 1 : 0), 0);
}

function countVisitsInMonth(history, targetDate, lang){
  const key = formatMonthKey(targetDate);
  return history.reduce((count, item) => count + (formatMonthKey(item.at) === key && getVisitItemLang(item) === lang ? 1 : 0), 0);
}

function countVisitsInYear(history, targetDate, lang){
  const key = formatYearKey(targetDate);
  return history.reduce((count, item) => count + (formatYearKey(item.at) === key && getVisitItemLang(item) === lang ? 1 : 0), 0);
}

function countVisitsAll(history, lang){
  return history.reduce((count, item) => count + (getVisitItemLang(item) === lang ? 1 : 0), 0);
}

function getVisitItemLang(item){
  return item && item.lang === 'ko' ? 'ko' : 'en';
}

function toDateValue(value){
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDayKey(value){
  const date = toDateValue(value);
  if (!date) return '';
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function formatMonthKey(value){
  const date = toDateValue(value);
  if (!date) return '';
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function formatYearKey(value){
  const date = toDateValue(value);
  if (!date) return '';
  return String(date.getFullYear());
}

function buildDailyVisitBuckets(history, days){
  const buckets = [];
  const today = new Date();
  for (let offset = days - 1; offset >= 0; offset -= 1) {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - offset);
    const key = formatDayKey(date);
    buckets.push({
      label: `${date.getMonth() + 1}/${date.getDate()}`,
      en: history.reduce((sum, item) => sum + (formatDayKey(item.at) === key && getVisitItemLang(item) === 'en' ? 1 : 0), 0),
      ko: history.reduce((sum, item) => sum + (formatDayKey(item.at) === key && getVisitItemLang(item) === 'ko' ? 1 : 0), 0)
    });
  }
  return buckets;
}

function buildMonthlyVisitBuckets(history, months){
  const buckets = [];
  const now = new Date();
  for (let offset = months - 1; offset >= 0; offset -= 1) {
    const date = new Date(now.getFullYear(), now.getMonth() - offset, 1);
    const key = formatMonthKey(date);
    buckets.push({
      label: date.toLocaleDateString(undefined, { month: 'short' }),
      en: history.reduce((sum, item) => sum + (formatMonthKey(item.at) === key && getVisitItemLang(item) === 'en' ? 1 : 0), 0),
      ko: history.reduce((sum, item) => sum + (formatMonthKey(item.at) === key && getVisitItemLang(item) === 'ko' ? 1 : 0), 0)
    });
  }
  return buckets;
}

function buildYearlyVisitBuckets(history, years){
  const buckets = [];
  const now = new Date();
  for (let offset = years - 1; offset >= 0; offset -= 1) {
    const date = new Date(now.getFullYear() - offset, 0, 1);
    const key = formatYearKey(date);
    buckets.push({
      label: key,
      en: history.reduce((sum, item) => sum + (formatYearKey(item.at) === key && getVisitItemLang(item) === 'en' ? 1 : 0), 0),
      ko: history.reduce((sum, item) => sum + (formatYearKey(item.at) === key && getVisitItemLang(item) === 'ko' ? 1 : 0), 0)
    });
  }
  return buckets;
}

function renderVisitComparisonChart(containerId, buckets){
  const container = document.getElementById(containerId);
  if (!container) return;
  const maxCount = Math.max(...buckets.flatMap(bucket => [bucket.en || 0, bucket.ko || 0]), 1);
  container.innerHTML = buckets.map(bucket => {
    const enHeight = bucket.en ? Math.max(8, Math.round((bucket.en / maxCount) * 150)) : 8;
    const koHeight = bucket.ko ? Math.max(8, Math.round((bucket.ko / maxCount) * 150)) : 8;
    return `
      <div class="stats-bar-wrap">
        <div class="stats-bar-values"><span>E ${escapeHtml(String(bucket.en || 0))}</span><span>K ${escapeHtml(String(bucket.ko || 0))}</span></div>
        <div class="stats-bar-group">
          <div class="stats-bar stats-bar-en" style="height:${enHeight}px;"></div>
          <div class="stats-bar stats-bar-ko" style="height:${koHeight}px;"></div>
        </div>
        <div class="stats-bar-label">${escapeHtml(bucket.label)}</div>
      </div>
    `;
  }).join('');
}

window.removeGuestbookEntry = async function(id){
  const entry = guestbookEntries.find(item => item.id === id);
  if (!entry) return;
  if (!confirm(`Delete the guestbook message from "${entry.name || 'Guest'}"?`)) return;
  if (supabaseClient && guestbookUsesSupabase) {
    const numericId = String(id).startsWith('gb-') ? String(id).slice(3) : String(id);
    try {
      const { error } = await supabaseClient
        .rpc('admin_hide_guestbook_entry', { entry_id: Number(numericId) });
      if (error) throw error;
      await loadGuestbookAdminEntries();
      return;
    } catch (error) {
      alert(`Supabase could not hide this guestbook message. Please refresh and try again.\n\n${formatSupabaseError(error)}`);
      return;
    }
  }
  guestbookEntries = guestbookEntries.filter(item => item.id !== id);
  saveStoredItems(STORAGE_GUESTBOOK, guestbookEntries);
  renderGuestbookAdminList();
};

function clearLivingForm(){
  document.getElementById('living-edit-id').value = '';
  document.getElementById('living-language').value = 'en';
  document.getElementById('living-type').value = 'Podcast';
  document.getElementById('living-title').value = '';
  document.getElementById('living-summary').value = '';
  document.getElementById('living-link').value = '';
  document.getElementById('living-media').value = '';
  livingPendingMedia = { src:'', kind:'', mime:'', name:'' };
  setLivingMediaPreview(null);
  document.getElementById('living-save-button').textContent = 'Save Living the Word Entry';
}

function handleLivingMedia(event){
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const kind = file.type === 'application/pdf'
    ? 'pdf'
    : (file.type.startsWith('video/') ? 'video' : (file.type.startsWith('audio/') ? 'audio' : ''));
  if (!kind) {
    alert('Please choose an audio, video, or PDF file.');
    event.target.value = '';
    return;
  }

  readMediaFile(file)
    .then(dataUrl => {
      livingPendingMedia = {
        src: dataUrl,
        kind,
        mime: file.type || '',
        name: file.name || ''
      };
      setLivingMediaPreview(livingPendingMedia);
    })
    .catch(() => {
      alert('This media file could not be read. Please try another file.');
      event.target.value = '';
    });
}

function readMediaFile(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Unable to read media file.'));
    reader.readAsDataURL(file);
  });
}

function setLivingMediaPreview(media){
  const wrapper = document.getElementById('living-media-preview');
  const audio = document.getElementById('living-audio-preview');
  const video = document.getElementById('living-video-preview');
  const pdf = document.getElementById('living-pdf-preview');
  if (!wrapper || !audio || !video || !pdf) return;
  audio.style.display = 'none';
  video.style.display = 'none';
  pdf.style.display = 'none';
  pdf.textContent = '';
  audio.pause();
  video.pause();
  audio.removeAttribute('src');
  video.removeAttribute('src');
  audio.load();
  video.load();

  if (!media || !media.src || !media.kind) {
    wrapper.style.display = 'none';
    return;
  }

  wrapper.style.display = 'block';
  if (media.kind === 'video') {
    video.src = media.src;
    video.style.display = 'block';
    video.load();
    return;
  }
  if (media.kind === 'pdf') {
    pdf.textContent = `PDF selected: ${media.name || 'document.pdf'}`;
    pdf.style.display = 'block';
    return;
  }

  audio.src = media.src;
  audio.style.display = 'block';
  audio.load();
}

async function saveLivingEntry(){
  const editId = document.getElementById('living-edit-id').value.trim();
  const language = document.getElementById('living-language').value === 'ko' ? 'ko' : 'en';
  const type = document.getElementById('living-type').value.trim() || 'Article';
  const title = document.getElementById('living-title').value.trim();
  const summary = document.getElementById('living-summary').value.trim();
  const link = document.getElementById('living-link').value.trim();

  if (!title || !summary) {
    alert('Please enter both a title and a summary.');
    return;
  }

  if (editId) {
    livingWordItems = livingWordItems.map(item => item.id === editId ? {
      ...item,
      language,
      type,
      title: title.slice(0, 120),
      summary: summary.slice(0, 700),
      link: link.slice(0, 500),
      mediaSrc: livingPendingMedia.src || item.mediaSrc || '',
      mediaKind: livingPendingMedia.kind || item.mediaKind || '',
      mediaMime: livingPendingMedia.mime || item.mediaMime || '',
      mediaName: livingPendingMedia.name || item.mediaName || ''
    } : item);
  } else {
    livingWordItems.unshift({
      id: makeId('lw'),
      language,
      type,
      title: title.slice(0, 120),
      summary: summary.slice(0, 700),
      link: link.slice(0, 500),
      mediaSrc: livingPendingMedia.src || '',
      mediaKind: livingPendingMedia.kind || '',
      mediaMime: livingPendingMedia.mime || '',
      mediaName: livingPendingMedia.name || '',
      createdAt: new Date().toISOString()
    });
  }

  if (supabaseClient) {
    const payload = {
      language,
      content_type: normalizeLivingWordTypeForDatabase(type),
      title: title.slice(0, 120),
      summary: summary.slice(0, 700),
      link_url: link.slice(0, 500),
      media_url: livingPendingMedia.src || '',
      is_visible: true
    };
    try {
      if (editId) {
        const numericId = String(editId).startsWith('lw-') ? String(editId).slice(3) : String(editId);
        const { error } = await supabaseClient
          .from('living_word_posts')
          .update(payload)
          .eq('id', numericId);
        if (error) throw error;
      } else {
        const { error } = await supabaseClient
          .from('living_word_posts')
          .insert(payload);
        if (error) throw error;
      }
      clearLivingForm();
      await loadLivingAdminItems();
      return;
    } catch (error) {
      alert(`Supabase could not save this Living the Word entry. Falling back to browser-only storage.\n\n${formatSupabaseError(error)}`);
    }
  }

  try {
    saveStoredItems(STORAGE_LIVING, livingWordItems);
  } catch (_error) {
    alert('This audio or video file is too large to save in the browser. Please try a shorter or smaller file.');
    refreshData();
    return;
  }
  clearLivingForm();
  renderLivingAdminList();
}

function renderLivingAdminList(){
  const list = document.getElementById('living-admin-list');
  if (!list) return;
  if (!livingWordItems.length) {
    list.innerHTML = '<div class="admin-empty">No Living the Word entries are published yet.</div>';
    return;
  }

  list.innerHTML = livingWordItems.map(item => `
    <article class="admin-item" style="grid-template-columns:1fr;">
      <div>
        <h3>${escapeHtml(item.title || 'Untitled Entry')}</h3>
        <p class="admin-meta">${escapeHtml(item.language === 'ko' ? 'Korean Site' : 'English Site')} &middot; ${escapeHtml(item.type || 'Article')}${item.createdAt ? ' &middot; ' + escapeHtml(formatGuestbookDate(item.createdAt)) : ''}</p>
        <p>${escapeHtml(item.summary || '')}</p>
        ${item.mediaKind ? `<p class="admin-meta">Media: ${escapeHtml(item.mediaKind)}${item.mediaName ? ' &middot; ' + escapeHtml(item.mediaName) : ''}</p>` : ''}
        ${item.link ? `<p class="admin-meta">Link: <a href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.link)}</a></p>` : '<p class="admin-meta">No external link attached.</p>'}
        <div class="admin-item-actions">
          <button class="admin-btn secondary" type="button" onclick="editLivingEntry('${item.id}')">Edit</button>
          <button class="admin-btn danger" type="button" onclick="removeLivingEntry('${item.id}')">Delete</button>
        </div>
      </div>
    </article>
  `).join('');
}

window.editLivingEntry = function(id){
  const item = livingWordItems.find(entry => entry.id === id);
  if (!item) return;
  document.getElementById('living-edit-id').value = item.id;
  document.getElementById('living-language').value = item.language === 'ko' ? 'ko' : 'en';
  document.getElementById('living-type').value = item.type || 'Podcast';
  document.getElementById('living-title').value = item.title || '';
  document.getElementById('living-summary').value = item.summary || '';
  document.getElementById('living-link').value = item.link || '';
  document.getElementById('living-media').value = '';
  livingPendingMedia = {
    src: item.mediaSrc || '',
    kind: item.mediaKind || '',
    mime: item.mediaMime || '',
    name: item.mediaName || ''
  };
  setLivingMediaPreview(livingPendingMedia.src ? livingPendingMedia : null);
  document.getElementById('living-save-button').textContent = 'Update Living the Word Entry';
  const formTop = document.getElementById('living-edit-id');
  if (formTop) {
    formTop.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

window.removeLivingEntry = async function(id){
  const item = livingWordItems.find(entry => entry.id === id);
  if (!item) return;
  if (!confirm(`Delete "${item.title || 'this entry'}" from Living the Word?`)) return;
  if (supabaseClient) {
    try {
      const numericId = String(id).startsWith('lw-') ? String(id).slice(3) : String(id);
      const { error } = await supabaseClient
        .rpc('admin_hide_living_word_post', { post_id: Number(numericId) });
      if (error) throw error;
      await loadLivingAdminItems();
      clearLivingForm();
      return;
    } catch (error) {
      alert(`Supabase could not hide this Living the Word entry. Falling back to browser-only removal.\n\n${formatSupabaseError(error)}`);
    }
  }
  livingWordItems = livingWordItems.filter(entry => entry.id !== id);
  saveStoredItems(STORAGE_LIVING, livingWordItems);
  renderLivingAdminList();
  clearLivingForm();
};
