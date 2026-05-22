(function(){
  const STORAGE_KEY='lifeword.siteLang';
  const POSITION_KEY='lifeword.langSwitcherPosition.v1';
  const DRAG_THRESHOLD=6;
  let suppressClicksUntil=0;

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
    if(typeof window.updateHomepageVisitLanguage === 'function'){
      window.updateHomepageVisitLanguage(next);
    }
  }

  function bindButtons(){
    document.querySelectorAll('[data-lang-btn]').forEach(button => {
      button.addEventListener('click', () => {
        if(Date.now() < suppressClicksUntil){
          return;
        }
        setSiteLanguage(button.getAttribute('data-lang-btn'));
      });
    });
  }

  function clampPosition(left, top, width, height){
    const maxLeft=Math.max(0, window.innerWidth - width);
    const maxTop=Math.max(0, window.innerHeight - height);
    return {
      left: Math.min(Math.max(0, left), maxLeft),
      top: Math.min(Math.max(0, top), maxTop)
    };
  }

  function readSavedPosition(){
    try{
      const raw=localStorage.getItem(POSITION_KEY);
      if(!raw){
        return null;
      }
      const parsed=JSON.parse(raw);
      if(typeof parsed?.left !== 'number' || typeof parsed?.top !== 'number'){
        return null;
      }
      return parsed;
    }catch(_error){
      return null;
    }
  }

  function savePosition(left, top){
    try{
      localStorage.setItem(POSITION_KEY, JSON.stringify({left, top}));
    }catch(_error){}
  }

  function applyFloatingPosition(switcher, left, top){
    const rect=switcher.getBoundingClientRect();
    const next=clampPosition(left, top, rect.width, rect.height);
    switcher.style.left=`${next.left}px`;
    switcher.style.top=`${next.top}px`;
    switcher.style.right='auto';
    switcher.style.bottom='auto';
    return next;
  }

  function initializeFloatingSwitcher(){
    const switcher=document.querySelector('.lang-switcher');
    if(!switcher){
      return;
    }

    switcher.style.position='fixed';
    switcher.style.cursor='grab';
    switcher.style.touchAction='none';
    switcher.style.userSelect='none';

    const saved=readSavedPosition();
    if(saved){
      applyFloatingPosition(switcher, saved.left, saved.top);
    }else{
      const rect=switcher.getBoundingClientRect();
      applyFloatingPosition(switcher, rect.left, rect.top);
    }

    let pointerId=null;
    let startX=0;
    let startY=0;
    let originLeft=0;
    let originTop=0;
    let dragged=false;

    switcher.addEventListener('pointerdown', (event) => {
      if(event.button !== 0){
        return;
      }
      if(event.target.closest('[data-lang-btn]')){
        return;
      }
      pointerId=event.pointerId;
      startX=event.clientX;
      startY=event.clientY;
      const rect=switcher.getBoundingClientRect();
      originLeft=rect.left;
      originTop=rect.top;
      dragged=false;
      switcher.style.cursor='grabbing';
      if(typeof switcher.setPointerCapture === 'function'){
        switcher.setPointerCapture(pointerId);
      }
    });

    switcher.addEventListener('pointermove', (event) => {
      if(pointerId !== event.pointerId){
        return;
      }
      const deltaX=event.clientX - startX;
      const deltaY=event.clientY - startY;
      if(!dragged && Math.hypot(deltaX, deltaY) < DRAG_THRESHOLD){
        return;
      }
      dragged=true;
      const next=applyFloatingPosition(switcher, originLeft + deltaX, originTop + deltaY);
      savePosition(next.left, next.top);
    });

    function endDrag(event){
      if(pointerId !== event.pointerId){
        return;
      }
      if(typeof switcher.releasePointerCapture === 'function'){
        try{
          switcher.releasePointerCapture(pointerId);
        }catch(_error){}
      }
      pointerId=null;
      switcher.style.cursor='grab';
      if(dragged){
        suppressClicksUntil=Date.now() + 250;
      }
    }

    switcher.addEventListener('pointerup', endDrag);
    switcher.addEventListener('pointercancel', endDrag);

    window.addEventListener('resize', () => {
      const rect=switcher.getBoundingClientRect();
      const next=applyFloatingPosition(switcher, rect.left, rect.top);
      savePosition(next.left, next.top);
    });
  }

  window.getSiteLanguage = getSiteLanguage;
  window.setSiteLanguage = setSiteLanguage;

  document.addEventListener('DOMContentLoaded', () => {
    bindButtons();
    initializeFloatingSwitcher();
    applyLanguage(getSiteLanguage());
    if(typeof window.recordHomepageVisit === 'function'){
      window.recordHomepageVisit();
    }
  });
})();
