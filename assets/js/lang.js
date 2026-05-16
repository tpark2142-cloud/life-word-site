(function(){
  const STORAGE_KEY='lifeword.siteLang';

  function normalizeLanguage(value){
    return value === 'ko' ? 'ko' : 'en';
  }

  function getSiteLanguage(){
    try{
      return normalizeLanguage(localStorage.getItem(STORAGE_KEY) || 'en');
    }catch(_error){
      return 'en';
    }
  }

  function updateButtons(lang){
    document.querySelectorAll('[data-lang-btn]').forEach(button => {
      const active = button.getAttribute('data-lang-btn') === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function applyLanguage(lang){
    const next = normalizeLanguage(lang);
    document.documentElement.lang = next;
    updateButtons(next);
    if(typeof window.applyPageLanguage === 'function'){
      window.applyPageLanguage(next);
    }
    if(typeof window.refreshPublicLanguage === 'function'){
      window.refreshPublicLanguage();
    }
  }

  function setSiteLanguage(lang){
    const next = normalizeLanguage(lang);
    try{
      localStorage.setItem(STORAGE_KEY, next);
    }catch(_error){}
    applyLanguage(next);
  }

  function bindButtons(){
    document.querySelectorAll('[data-lang-btn]').forEach(button => {
      button.addEventListener('click', () => {
        setSiteLanguage(button.getAttribute('data-lang-btn'));
      });
    });
  }

  window.getSiteLanguage = getSiteLanguage;
  window.setSiteLanguage = setSiteLanguage;

  document.addEventListener('DOMContentLoaded', () => {
    bindButtons();
    applyLanguage(getSiteLanguage());
  });
})();
