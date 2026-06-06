(function(){
  const DISMISS_KEY='lifeword.pwaPromptDismissed';
  let deferredPrompt=null;
  let promptEl=null;

  function getLang(){
    return typeof window.getSiteLanguage==='function' && window.getSiteLanguage()==='ko' ? 'ko' : 'en';
  }

  function isStandalone(){
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }

  function isIos(){
    return /iphone|ipad|ipod/i.test(window.navigator.userAgent || '');
  }

  function isSafari(){
    const ua=window.navigator.userAgent || '';
    return /safari/i.test(ua) && !/crios|fxios|edgios|android/i.test(ua);
  }

  function shouldShowIosHelp(){
    return isIos() && isSafari() && !isStandalone();
  }

  function getCopy(){
    if(getLang()==='ko'){
      return {
        title:'앱처럼 저장하기',
        body: deferredPrompt
          ? '이 사이트를 홈 화면에 추가하면 앱처럼 더 쉽게 열 수 있습니다.'
          : '공유 메뉴에서 "홈 화면에 추가"를 누르면 이 사이트를 앱처럼 저장할 수 있습니다.',
        action: deferredPrompt ? '앱으로 저장' : '설치 방법 보기',
        close:'닫기',
        iosHelp:'Safari 공유 버튼을 누른 뒤 "홈 화면에 추가"를 선택해 주세요.'
      };
    }
    return {
      title:'Save as an app',
      body: deferredPrompt
        ? 'Add this website to your home screen for faster app-style access.'
        : 'Use the Share menu and choose "Add to Home Screen" to save this website like an app.',
      action: deferredPrompt ? 'Install App' : 'How to Install',
      close:'Close',
      iosHelp:'Tap Safari Share, then choose "Add to Home Screen".'
    };
  }

  function installStyles(){
    if(document.getElementById('pwa-install-styles')){
      return;
    }
    const style=document.createElement('style');
    style.id='pwa-install-styles';
    style.textContent=
      '.pwa-install-banner{position:fixed;left:14px;right:14px;bottom:18px;z-index:10001;background:rgba(252,240,220,.97);color:#5b1f1a;border:1px solid rgba(164,74,62,.45);border-radius:18px;box-shadow:0 18px 35px rgba(0,0,0,.28);padding:15px 16px 14px;display:none;backdrop-filter:blur(10px)}'
      +'.pwa-install-banner.show{display:block}'
      +'.pwa-install-banner h3{margin:0 0 6px;font-family:Cinzel,serif;font-size:14px;letter-spacing:.08em;color:#9b2f25}'
      +'.pwa-install-banner p{margin:0;font-family:"EB Garamond",serif;font-size:16px;line-height:1.45;color:#5b1f1a}'
      +'.pwa-install-actions{display:flex;gap:10px;align-items:center;justify-content:flex-end;margin-top:12px;flex-wrap:wrap}'
      +'.pwa-install-btn{border:none;border-radius:999px;padding:10px 16px;font-family:Cinzel,serif;font-size:11px;letter-spacing:.12em;cursor:pointer}'
      +'.pwa-install-btn.primary{background:#9b2f25;color:#fff7e8;font-weight:700}'
      +'.pwa-install-btn.secondary{background:rgba(155,47,37,.08);color:#7b2a22;border:1px solid rgba(155,47,37,.22)}'
      +'@media (max-width:719px){.pwa-install-banner{left:auto;right:14px;bottom:92px;width:min(310px,calc(100vw - 142px));padding:13px 14px 12px;border-radius:16px}.pwa-install-banner h3{font-size:12px}.pwa-install-banner p{font-size:14px;line-height:1.38}.pwa-install-actions{gap:8px;margin-top:10px}.pwa-install-btn{padding:9px 12px;font-size:9.8px}}'
      +'@media (max-width:420px){.pwa-install-banner{right:10px;bottom:88px;width:min(280px,calc(100vw - 128px))}}'
      +'@media (min-width:720px){.pwa-install-banner{left:auto;right:20px;bottom:20px;max-width:400px}}';
    document.head.appendChild(style);
  }

  function ensurePrompt(){
    installStyles();
    if(promptEl){
      return promptEl;
    }
    const wrap=document.createElement('aside');
    wrap.className='pwa-install-banner';
    wrap.innerHTML=
      '<h3></h3>'
      +'<p></p>'
      +'<div class="pwa-install-actions">'
      +'<button type="button" class="pwa-install-btn secondary" data-pwa-close></button>'
      +'<button type="button" class="pwa-install-btn primary" data-pwa-install></button>'
      +'</div>';
    wrap.querySelector('[data-pwa-close]').addEventListener('click', () => {
      hidePrompt(true);
    });
    wrap.querySelector('[data-pwa-install]').addEventListener('click', async () => {
      const copy=getCopy();
      if(deferredPrompt){
        deferredPrompt.prompt();
        try{
          await deferredPrompt.userChoice;
        }catch(_error){}
        deferredPrompt=null;
        hidePrompt(true);
        updatePrompt();
        return;
      }
      window.alert(copy.iosHelp);
    });
    document.body.appendChild(wrap);
    promptEl=wrap;
    updatePrompt();
    return wrap;
  }

  function updatePrompt(){
    if(!promptEl){
      return;
    }
    const copy=getCopy();
    promptEl.querySelector('h3').textContent=copy.title;
    promptEl.querySelector('p').textContent=copy.body;
    promptEl.querySelector('[data-pwa-close]').textContent=copy.close;
    promptEl.querySelector('[data-pwa-install]').textContent=copy.action;
  }

  function wasDismissed(){
    try{
      return sessionStorage.getItem(DISMISS_KEY)==='true';
    }catch(_error){
      return false;
    }
  }

  function hidePrompt(remember){
    if(promptEl){
      promptEl.classList.remove('show');
    }
    if(remember){
      try{
        sessionStorage.setItem(DISMISS_KEY,'true');
      }catch(_error){}
    }
  }

  function showPrompt(){
    if(isStandalone() || wasDismissed()){
      return;
    }
    if(!(deferredPrompt || shouldShowIosHelp())){
      return;
    }
    ensurePrompt().classList.add('show');
    updatePrompt();
  }

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredPrompt=event;
    showPrompt();
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt=null;
    hidePrompt(true);
  });

  window.addEventListener('lifeword:languagechange', () => {
    updatePrompt();
  });

  window.addEventListener('load', () => {
    if('serviceWorker' in navigator){
      navigator.serviceWorker.register('service-worker.js').catch(() => {});
    }
    setTimeout(showPrompt, 1200);
  });
})();
