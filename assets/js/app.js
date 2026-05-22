// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// MODAL (for emotion cards)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
const EMOTION_MODAL_KO = {
  Joy: { title:'ê¸°ì¨', note:'ì°¸ëœ ê¸°ì¨ì€ ë³€í•˜ëŠ” í™˜ê²½ì´ ì•„ë‹ˆë¼ ë³€í•¨ì—†ëŠ” í•˜ë‚˜ë‹˜ì˜ ìž„ìž¬ ì•ˆì— ìžˆìŠµë‹ˆë‹¤.' },
  Sorrow: { title:'ìŠ¬í””', note:'í•˜ë‚˜ë‹˜ì€ ìš°ë¦¬ì˜ ëˆˆë¬¼ì„ ì™¸ë©´í•˜ì§€ ì•Šìœ¼ì‹œë©° ìƒí•œ ë§ˆìŒì— ê°€ê¹Œì´ ì˜¤ì‹­ë‹ˆë‹¤.' },
  Peace: { title:'í‰ì•ˆ', note:'í•˜ë‚˜ë‹˜ì´ ì£¼ì‹œëŠ” í‰ì•ˆì€ í­í’ì´ ì§€ë‚œ ë’¤ì—ë§Œì´ ì•„ë‹ˆë¼ í­í’ í•œê°€ìš´ë°ì„œë„ ë§ˆìŒì„ ì§€ì¼œ ì¤ë‹ˆë‹¤.' },
  Hope: { title:'ì†Œë§', note:'ì„±ê²½ì  ì†Œë§ì€ í•˜ë‚˜ë‹˜ì˜ ê¹¨ëœ¨ë ¤ì§€ì§€ ì•ŠëŠ” ì•½ì† ìœ„ì— ì„œ ìžˆëŠ” í™•ì‹ ìž…ë‹ˆë‹¤.' },
  Fear: { title:'ë‘ë ¤ì›€', note:'í•˜ë‚˜ë‹˜ì´ ìš°ë¦¬ì™€ í•¨ê»˜í•˜ì‹œëŠ” ë¶„ì´ì‹¬ì„ ê¸°ì–µí•  ë•Œ ë‘ë ¤ì›€ì€ íž˜ì„ ìžƒìŠµë‹ˆë‹¤.' },
  Anxiety: { title:'ë¶ˆì•ˆ', note:'ë¶ˆì•ˆì€ ìš°ë¦¬ë¥¼ ëŒë³´ì‹œëŠ” í•˜ë‚˜ë‹˜ê»˜ ëª¨ë“  ì—¼ë ¤ë¥¼ ë§¡ê¸°ë¼ëŠ” ì´ˆëŒ€ìž…ë‹ˆë‹¤.' },
  Loneliness: { title:'ì™¸ë¡œì›€', note:'í•˜ë‚˜ë‹˜ì˜ ìž„ìž¬ëŠ” ê±°ë¦¬ë‚˜ ê³ ë¦½ìœ¼ë¡œ ì œí•œë˜ì§€ ì•ŠìŠµë‹ˆë‹¤.' },
  Anger: { title:'ë¶„ë…¸', note:'ë¶„ë…¸ëŠ” ì£„ê°€ ë˜ê¸° ì „ì— í•˜ë‚˜ë‹˜ê»˜ ë§¡ê²¨ì ¸ì•¼ í•©ë‹ˆë‹¤.' },
  Gratitude: { title:'ê°ì‚¬', note:'ê°ì‚¬ëŠ” ìš°ë¦¬ê°€ ëª¨ë“  ê²ƒì„ ë°”ë¼ë³´ëŠ” ì‹œì„ ì„ ìƒˆë¡­ê²Œ ë¹šì–´ ê°€ëŠ” í›ˆë ¨ìž…ë‹ˆë‹¤.' },
  Guilt: { title:'ì£„ì±…ê°ê³¼ í›„íšŒ', note:'ì£„ì±…ê°ì€ ìš°ë¦¬ë¥¼ ì‹­ìžê°€ë¡œ ì´ëŒë©°, ê·¸ê³³ì—ì„œ ìš©ì„œëŠ” ì™„ì „í•´ì§‘ë‹ˆë‹¤.' },
  Love: { title:'ì‚¬ëž‘', note:'í•˜ë‚˜ë‹˜ì˜ ì‚¬ëž‘ì€ ëª¨ë“  ì‚¬ëž‘ì˜ ê¸°ì´ˆì´ë©°, ê·¸ ì‚¬ëž‘ì´ ë¨¼ì € ìš°ë¦¬ì—ê²Œ ì™”ìŠµë‹ˆë‹¤.' },
  Discouragement: { title:'ë‚™ì‹¬', note:'ì£¼ë¥¼ ê¸°ë‹¤ë¦¬ëŠ” ìžì—ê²Œ í•˜ë‚˜ë‹˜ì€ ìƒˆ íž˜ì„ ì£¼ì‹­ë‹ˆë‹¤.' }
};

const TOPIC_RESULT_KO = {
  'Joy': { name:'ê¸°ì¨', cat:'ê°ì •', note:'ì°¸ëœ ê¸°ì¨ì€ ìƒí™©ì´ ì•„ë‹ˆë¼ í•˜ë‚˜ë‹˜ì˜ ìž„ìž¬ ì•ˆì— ë¿Œë¦¬ë¥¼ ë‘¡ë‹ˆë‹¤.' },
  'Sorrow & Grief': { name:'ìŠ¬í””', cat:'ê°ì •', note:'í•˜ë‚˜ë‹˜ì€ ìƒí•œ ë§ˆìŒì— ê°€ê¹Œì´ ì˜¤ì‹œë©° ìš°ë¦¬ì˜ ëˆˆë¬¼ì„ ì™¸ë©´í•˜ì§€ ì•Šìœ¼ì‹­ë‹ˆë‹¤.' },
  'Peace': { name:'í‰ì•ˆ', cat:'ê°ì •', note:'í•˜ë‚˜ë‹˜ì´ ì£¼ì‹œëŠ” í‰ì•ˆì€ í­í’ ì†ì—ì„œë„ ë§ˆìŒì„ ì§€ì¼œ ì¤ë‹ˆë‹¤.' },
  'Hope': { name:'ì†Œë§', cat:'ê°ì •', note:'ì„±ê²½ì  ì†Œë§ì€ í•˜ë‚˜ë‹˜ì˜ ì•½ì†ì— ë¿Œë¦¬ë‚´ë¦° í™•ì‹  ìžˆëŠ” ê¸°ë‹¤ë¦¼ìž…ë‹ˆë‹¤.' },
  'Fear': { name:'ë‘ë ¤ì›€', cat:'ê°ì •', note:'í•˜ë‚˜ë‹˜ì´ ìš°ë¦¬ì˜ ë„ì›€ì´ì‹¬ì„ ê¸°ì–µí•  ë•Œ ë‘ë ¤ì›€ì€ íž˜ì„ ìžƒìŠµë‹ˆë‹¤.' },
  'Anxiety & Worry': { name:'ë¶ˆì•ˆ', cat:'ê°ì •', note:'ë¶ˆì•ˆì€ ìš°ë¦¬ë¥¼ ëŒë³´ì‹œëŠ” í•˜ë‚˜ë‹˜ê»˜ ì—¼ë ¤ë¥¼ ë§¡ê¸°ë¼ëŠ” ì´ˆëŒ€ìž…ë‹ˆë‹¤.' },
  'Loneliness': { name:'ì™¸ë¡œì›€', cat:'ê°ì •', note:'í•˜ë‚˜ë‹˜ì˜ ìž„ìž¬ëŠ” ê±°ë¦¬ì™€ ì§ˆë³‘ê³¼ ê³ ë¦½ìœ¼ë¡œ ì œí•œë˜ì§€ ì•ŠìŠµë‹ˆë‹¤.' },
  'Anger': { name:'ë¶„ë…¸', cat:'ê°ì •', note:'ë¶„ë…¸ê°€ ì£„ê°€ ë˜ê¸° ì „ì— í•˜ë‚˜ë‹˜ê»˜ ë§¡ê²¨ì§ˆ ë•Œ ë‹¤ìŠ¤ë ¤ì§‘ë‹ˆë‹¤.' },
  'Gratitude': { name:'ê°ì‚¬', cat:'ê°ì •', note:'ê°ì‚¬ëŠ” ì„¸ìƒì„ ë°”ë¼ë³´ëŠ” ì‹œì„ ì„ ìƒˆë¡­ê²Œ ë¹šì–´ ê°€ëŠ” í›ˆë ¨ìž…ë‹ˆë‹¤.' },
  'Guilt & Regret': { name:'ì£„ì±…ê°ê³¼ í›„íšŒ', cat:'ê°ì •', note:'ì£„ì±…ê°ì€ ìš°ë¦¬ë¥¼ ì‹­ìžê°€ë¡œ ì´ëŒë©°, ê±°ê¸°ì—ì„œ ìš©ì„œëŠ” ì™„ì „í•´ì§‘ë‹ˆë‹¤.' },
  'Love': { name:'ì‚¬ëž‘', cat:'ê°ì •', note:'í•˜ë‚˜ë‹˜ì˜ ì‚¬ëž‘ì€ ëª¨ë“  ì‚¬ëž‘ì˜ ê¸°ì´ˆì´ë©°, ê·¸ ì‚¬ëž‘ì´ ë¨¼ì € ìš°ë¦¬ì—ê²Œ ì™”ìŠµë‹ˆë‹¤.' },
  'Discouragement': { name:'ë‚™ì‹¬', cat:'ê°ì •', note:'ê°€ìž¥ ë‚®ì€ ìžë¦¬ì—ì„œë„ í•˜ë‚˜ë‹˜ì€ ì£¼ë¥¼ ê¸°ë‹¤ë¦¬ëŠ” ìžì—ê²Œ ìƒˆ íž˜ì„ ì£¼ì‹­ë‹ˆë‹¤.' },
  'Suffering & Trials': { name:'ê³ ë‚œê³¼ ì‹œë ¨', cat:'ì‚¶ì˜ ë¬¸ì œ', note:'ê³ ë‚œì€ í•˜ë‚˜ë‹˜ì˜ ì† ì•ˆì—ì„œ í—›ë˜ì§€ ì•Šìœ¼ë©°, í•˜ë‚˜ë‹˜ì€ ê·¸ê²ƒì„ í†µí•´ ì¼í•˜ì‹­ë‹ˆë‹¤.' },
  'Illness & Sickness': { name:'ì§ˆë³‘ê³¼ ì•„í””', cat:'ì‚¶ì˜ ë¬¸ì œ', note:'ë³‘ ê°€ìš´ë°ì„œë„ í•˜ë‚˜ë‹˜ì€ ë©€ë¦¬ ê³„ì‹œì§€ ì•Šê³  ë¶™ë“œì‹œë©° í•¨ê»˜í•˜ì‹­ë‹ˆë‹¤.' },
  'Death & Dying': { name:'ì£½ìŒê³¼ ìž„ì¢…', cat:'ì‚¶ì˜ ë¬¸ì œ', note:'ë¯¿ëŠ” ì´ì—ê²Œ ì£½ìŒì€ ëì´ ì•„ë‹ˆë¼ í•˜ë‚˜ë‹˜ê»˜ë¡œ ë“¤ì–´ê°€ëŠ” ë¬¸ìž…ë‹ˆë‹¤.' },
  'Grief & Funeral Comfort': { name:'ìŠ¬í””ê³¼ ìž¥ë¡€ì˜ ìœ„ë¡œ', cat:'ì‚¶ì˜ ë¬¸ì œ', note:'í•¨ê»˜ ìŠ¬í¼í•˜ê³  ê¸°ì–µí•˜ëŠ” ì´ë“¤ì„ ìœ„í•œ ì˜ì›í•œ ì†Œë§ì˜ ë§ì”€ìž…ë‹ˆë‹¤.' },
  'Forgiveness': { name:'ìš©ì„œ', cat:'ì‚¶ì˜ ë¬¸ì œ', note:'ìš©ì„œëŠ” ìž˜ëª»ì„ ë¶™ë“¤ê³  ì‚´ì•„ê°€ëŠ” ë¬´ê±°ìš´ ì§ì—ì„œ ìš°ë¦¬ë¥¼ ë†“ì•„ì¤ë‹ˆë‹¤.' },
  'Marriage & Family': { name:'ê²°í˜¼ê³¼ ê°€ì •', cat:'ì‚¶ì˜ ë¬¸ì œ', note:'ê²°í˜¼ì€ ê·¸ë¦¬ìŠ¤ë„ê»˜ì„œ êµíšŒë¥¼ ì‚¬ëž‘í•˜ì‹  ìžê¸°í¬ìƒì  ì‚¬ëž‘ì„ ë¹„ì¶¥ë‹ˆë‹¤.' },
  'Money & Financial Worry': { name:'ìž¬ì •ê³¼ ëˆ ê±±ì •', cat:'ì‚¶ì˜ ë¬¸ì œ', note:'í•˜ë‚˜ë‹˜ì€ ë¨¼ì € ê·¸ì˜ ë‚˜ë¼ë¥¼ êµ¬í•˜ë¼ê³  ë¶€ë¥´ì‹œë©° í•„ìš”í•œ ê³µê¸‰ì„ ì•½ì†í•˜ì‹­ë‹ˆë‹¤.' },
  'Decision-Making & Wisdom': { name:'ê²°ì •ê³¼ ì§€í˜œ', cat:'ì‚¶ì˜ ë¬¸ì œ', note:'ê°ˆë¦¼ê¸¸ë§ˆë‹¤ ìžì‹ ì˜ ëª…ì² ë§Œ ì˜ì§€í•˜ì§€ ë§ê³  ë©ˆì¶”ì–´ í•˜ë‚˜ë‹˜ì„ ë°”ë¼ë³´ì‹­ì‹œì˜¤.' },
  'Faith & Trust': { name:'ë¯¿ìŒê³¼ ì‹ ë¢°', cat:'ì˜ì  ì£¼ì œ', note:'ë¯¿ìŒì€ ê¸¸ì´ ë³´ì´ì§€ ì•Šì•„ë„ í•˜ë‚˜ë‹˜ì„ ë¶™ë“œëŠ” ì‹ ë¢°ìž…ë‹ˆë‹¤.' },
  'Prayer': { name:'ê¸°ë„ì™€ ì¤‘ë³´', cat:'ì˜ì  ì£¼ì œ', note:'ê¸°ë„ëŠ” ê°€ìž¥ ë‹¨ìˆœí•˜ë©´ì„œë„ ê°€ìž¥ ê¹Šì€ ë¯¿ìŒì˜ í–‰ìœ„ìž…ë‹ˆë‹¤.' },
  'Grace & Mercy': { name:'ì€í˜œì™€ ìžë¹„', cat:'ì˜ì  ì£¼ì œ', note:'ì€í˜œëŠ” ë°›ì„ ìžê²©ì´ ì—†ëŠ” ìš°ë¦¬ì—ê²Œ í•˜ë‚˜ë‹˜ì´ ë² í‘¸ì‹œëŠ” ì„ ë¬¼ì´ë©° ë¯¿ìŒì˜ ê¸°ì´ˆìž…ë‹ˆë‹¤.' },
  'Salvation': { name:'êµ¬ì›ê³¼ ì†ëŸ‰', cat:'ì˜ì  ì£¼ì œ', note:'êµ¬ì›ì€ ì „ì ìœ¼ë¡œ í•˜ë‚˜ë‹˜ì˜ ì„ ë¬¼ì´ë©° ì˜¤ì§ ê·¸ë¦¬ìŠ¤ë„ë¥¼ ë¯¿ëŠ” ë¯¿ìŒìœ¼ë¡œ ë°›ìŠµë‹ˆë‹¤.' },
  'Heaven & Eternity': { name:'ì²œêµ­ê³¼ ì˜ì›', cat:'ì˜ì  ì£¼ì œ', note:'ì²œêµ­ì€ ì‹¤ì œì´ë©°, í•˜ë‚˜ë‹˜ê»˜ì„œ ìžê¸° ë°±ì„±ê³¼ ì˜ì›ížˆ í•¨ê»˜í•˜ì‹œëŠ” ê³³ìž…ë‹ˆë‹¤.' },
  'Strength': { name:'íž˜', cat:'ì˜ì  ì£¼ì œ', note:'í•˜ë‚˜ë‹˜ì€ í”¼ê³¤í•œ ìžì—ê²Œ ëŠ¥ë ¥ì„ ì£¼ì‹œë©° ë¬´ëŠ¥í•œ ìžì—ê²Œ íž˜ì„ ë”í•˜ì‹­ë‹ˆë‹¤.' },
  "God's Presence": { name:'í•˜ë‚˜ë‹˜ì˜ ìž„ìž¬ì™€ ìœ„ë¡œ', cat:'ì˜ì  ì£¼ì œ', note:'í•˜ë‚˜ë‹˜ì˜ ìž„ìž¬ëŠ” ê±´ë¬¼ì— ì œí•œë˜ì§€ ì•Šìœ¼ë©° ì–¸ì œë‚˜ ìš°ë¦¬ ê°€ê¹Œì´ì— ìžˆìŠµë‹ˆë‹¤.' }
};

function openEmotion(name){
  const d=EMOTIONS[name];if(!d)return;
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  const localized=lang==='ko' ? (EMOTION_MODAL_KO[name] || null) : null;
  document.getElementById('m-icon').textContent=d.icon;
  document.getElementById('m-cat').textContent=lang==='ko'?'ê°ì •':'Emotion';
  document.getElementById('m-title').textContent=localized?localized.title:name;
  document.getElementById('m-note').textContent=localized?localized.note:d.note;
  let dvIdx = 1000;
  document.getElementById('m-verses').innerHTML=d.verses.map(v=>{
    if(v.kjv !== undefined){
      const id = 'mdv'+(++dvIdx);
      return '<div class="modal-dv dual-verse">'
        +'<div class="dv-tabs">'
        +'<button class="dv-tab active" onclick="switchTab(this,\''+id+'-kjv\')">KJV</button>'
        +'<button class="dv-tab" onclick="switchTab(this,\''+id+'-esv\')">ESV</button>'
        +'</div>'
        +'<div class="dv-content active" id="'+id+'-kjv"><blockquote>&ldquo;'+v.kjv+'&rdquo;</blockquote><cite>'+v.r+'</cite></div>'
        +'<div class="dv-content" id="'+id+'-esv"><blockquote>&ldquo;'+v.esv+'&rdquo;</blockquote><cite>'+v.r+' (ESV)</cite></div>'
        +'</div>';
    }
    return '<div class="modal-v"><blockquote>&ldquo;'+(v.t||v.esv)+'&rdquo;</blockquote><cite>'+v.r+'</cite></div>';
  }).join('');
  document.getElementById('modal-overlay').classList.add('show');
  document.body.style.overflow='hidden';
}
function closeModal(e){
  if(e&&e.target!==document.getElementById('modal-overlay')&&e.type==='click'&&e.currentTarget===document.getElementById('modal-overlay')){
    if(!document.getElementById('modal-overlay').contains(e.target)||e.target===document.getElementById('modal-overlay')){
      document.getElementById('modal-overlay').classList.remove('show');
      document.body.style.overflow='';
    }
    return;
  }
  document.getElementById('modal-overlay').classList.remove('show');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// TOPIC ACCORDION
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function tgl(btn){
  const panel=btn.nextElementSibling;
  const isOpen=btn.classList.contains('open');
  const col=btn.closest('.topic-col-card');
  col.querySelectorAll('.topic-btn.open').forEach(b=>{b.classList.remove('open');b.nextElementSibling.classList.remove('open');});
  if(!isOpen){btn.classList.add('open');panel.classList.add('open');setTimeout(()=>btn.scrollIntoView({behavior:'smooth',block:'nearest'}),50);}
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// SEARCH ENGINE
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
const inp=document.getElementById('hero-input');
const rs=document.getElementById('results-section');
const rg=document.getElementById('results-grid');
const nr=document.getElementById('no-results');
const cb=document.getElementById('hero-clear');
const rt=document.getElementById('res-title');
const rc=document.getElementById('res-count');

// globally unique ID counter for search result verse tabs
let _resIdx = 0;

const EXACT_TOPIC_QUERY_MAP = {
  grief:'Sorrow & Grief',
  sorrow:'Sorrow & Grief',
  sadness:'Sorrow & Grief',
  fear:'Fear',
  hope:'Hope',
  strength:'Strength',
  peace:'Peace',
  forgiveness:'Forgiveness',
  forgive:'Forgiveness',
  money:'Money & Financial Worry',
  financial:'Money & Financial Worry',
  finance:'Money & Financial Worry',
  anxiety:'Anxiety & Worry',
  worry:'Anxiety & Worry',
  lonely:'Loneliness',
  loneliness:'Loneliness',
  sick:'Illness & Sickness',
  illness:'Illness & Sickness',
  sickness:'Illness & Sickness',
  marriage:'Marriage & Family',
  family:'Marriage & Family',
  faith:'Faith & Trust',
  trust:'Faith & Trust',
  prayer:'Prayer',
  salvation:'Salvation',
  heaven:'Heaven & Eternity',
  eternity:'Heaven & Eternity',
  presence:"God's Presence",
  comfort:'Grief & Funeral Comfort',
  funeral:'Grief & Funeral Comfort',
  death:'Death & Dying',
  dying:'Death & Dying',
  ìŠ¬í””:'Sorrow & Grief',
  ë‘ë ¤ì›€:'Fear',
  ì†Œë§:'Hope',
  íž˜:'Strength',
  í‰ì•ˆ:'Peace',
  ìš©ì„œ:'Forgiveness',
  ìž¬ì •:'Money & Financial Worry',
  ëˆ:'Money & Financial Worry',
  ë¶ˆì•ˆ:'Anxiety & Worry',
  ì™¸ë¡œì›€:'Loneliness',
  ì§ˆë³‘:'Illness & Sickness',
  ì•„í””:'Illness & Sickness',
  ê²°í˜¼:'Marriage & Family',
  ê°€ì •:'Marriage & Family',
  ë¯¿ìŒ:'Faith & Trust',
  ì‹ ë¢°:'Faith & Trust',
  ê¸°ë„:'Prayer',
  êµ¬ì›:'Salvation',
  ì²œêµ­:'Heaven & Eternity',
  ì˜ì›:'Heaven & Eternity',
  ìž„ìž¬:"God's Presence",
  ìœ„ë¡œ:'Grief & Funeral Comfort',
  ìž¥ë¡€:'Grief & Funeral Comfort',
  ì£½ìŒ:'Death & Dying',
  ìž„ì¢…:'Death & Dying'
};

function doHeroSearch(){
  const q=inp.value.trim().toLowerCase();
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  if(!q){clearHeroSearch();return;}
  cb.style.display='block';
  const words=typeof normalizeWords==='function'
    ? normalizeWords(q)
    : q.split(/\s+/).filter(w=>w.length>1);
  const exactTopicName = EXACT_TOPIC_QUERY_MAP[q];
  const matched=exactTopicName
    ? DB.filter(t=>t.name===exactTopicName)
    : DB
      .map(t=>{
        const hay=(t.name+' '+t.keys+' '+t.note+' '+t.verses.map(v=>(v.t||v.esv||'')+' '+(v.kjv||'')+' '+v.r).join(' ')).toLowerCase();
        const score=words.reduce((sum,w)=>sum+(hay.includes(w)?1:0),0);
        return {topic:t,score};
      })
      .filter(item=>item.score>0)
      .sort((a,b)=>b.score-a.score)
      .map(item=>item.topic);
  rs.style.display='block';
  rg.innerHTML='';nr.style.display='none';
  _resIdx = 0; // reset counter for each new search (IDs unique within this search)
  if(matched.length===0){
    nr.style.display='block';
    rt.textContent=lang==='ko'
      ? '"'+inp.value+'"ì— ëŒ€í•œ ì„±ê²½ êµ¬ì ˆì„ ì°¾ì§€ ëª»í–ˆìŠµë‹ˆë‹¤'
      : 'No Bible verses found for "'+inp.value+'"';
    rc.textContent='';
  }
  else{
    const displayQuery = lang==='ko'
      ? getLocalizedTopicResult(matched[0], 'ko').name
      : inp.value;
    rt.textContent=lang==='ko'
      ? '"'+displayQuery+'"ì— ëŒ€í•œ ì„±ê²½ êµ¬ì ˆ'
      : 'Bible Verses for "'+displayQuery+'"';
    rc.textContent=lang==='ko'
      ? matched.length+'ê°œ ì£¼ì œ ì°¾ìŒ'
      : matched.length+' topic'+(matched.length!==1?'s':'')+' found';
    matched.forEach((t,i)=>{
      const displayTopic=getLocalizedTopicResult(t, lang);
      const c=document.createElement('div');c.className='res-card';c.style.animationDelay=(i*.06)+'s';
      c.innerHTML='<div class="res-card-head"><h3>'+hl(displayTopic.name,words)+'</h3><span class="res-cat">'+displayTopic.cat+'</span></div>'
        +'<div class="res-card-body"><p class="res-ref-note">'+hl(displayTopic.note,words)+'</p>'
        +t.verses.map(v=>{
          if(v.kjv){
            const rid='rs'+(++_resIdx); // globally unique per search
            return '<div class="res-dual dual-verse">'
              +'<div class="dv-tabs">'
              +'<button class="dv-tab active" onclick="rTab(this)">KJV</button>'
              +'<button class="dv-tab" onclick="rTab(this)">ESV</button>'
              +'</div>'
              +'<div class="dv-content active" id="'+rid+'-kjv"><p>&ldquo;'+hl(v.kjv,words)+'&rdquo;</p><cite>'+v.r+'</cite></div>'
              +'<div class="dv-content" id="'+rid+'-esv"><p>&ldquo;'+hl(v.esv,words)+'&rdquo;</p><cite>'+v.r+' (ESV)</cite></div>'
              +'</div>';
          }
          return '<div class="res-verse"><p>&ldquo;'+hl((v.t||v.esv||''),words)+'&rdquo;</p><cite>'+v.r+'</cite></div>';
        }).join('')+'</div>';
      rg.appendChild(c);
    });
  }
  rs.scrollIntoView({behavior:'smooth',block:'start'});
}
// Self-contained tab switcher for search results â€” uses pure DOM traversal, no getElementById
function rTab(btn){
  var tabs=btn.parentNode; // .dv-tabs
  var wrapper=tabs.parentNode; // .dual-verse
  // deactivate all tab buttons
  tabs.querySelectorAll('button').forEach(function(b){b.classList.remove('active');});
  // hide all content panes in this wrapper
  wrapper.querySelectorAll('.dv-content').forEach(function(p){
    p.classList.remove('active');
    p.style.display='none';
  });
  // activate clicked button
  btn.classList.add('active');
  // show matching pane: KJV is index 0, ESV is index 1
  var idx=Array.from(tabs.children).indexOf(btn);
  var panes=wrapper.querySelectorAll('.dv-content');
  if(panes[idx]){panes[idx].classList.add('active');panes[idx].style.display='block';}
}
function hl(text,words){
  let r=text;
  words.forEach(w=>{const re=new RegExp('('+w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');r=r.replace(re,'<mark>$1</mark>');});
  return r;
}
function clearHeroSearch(){inp.value='';rs.style.display='none';cb.style.display='none';rg.innerHTML='';nr.style.display='none';inp.focus();}
const AI_WORKSPACE_TOOLS={
  chatgpt:{
    name:'ChatGPT Search',
    summary:'Best for natural-language searching when someone wants a quick answer and easy follow-up questions.',
    promptLead:'Answer this question clearly, then suggest helpful next questions to explore:'
  },
  perplexity:{
    name:'Perplexity',
    summary:'Best for research-style searching when someone wants explanations, comparisons, and organized source-based thinking.',
    promptLead:'Research this question and organize the answer with key points and helpful Bible references:'
  },
  gemini:{
    name:'Google Gemini',
    summary:'Best for broad question-and-answer searching when people want a simple summary and a quick next step.',
    promptLead:'Summarize this question clearly and suggest practical next steps:'
  },
  copilot:{
    name:'Bing Copilot',
    summary:'Best for everyday searching in a familiar search-engine style with AI-guided summaries.',
    promptLead:'Help answer this search question simply and directly:'
  },
  brave:{
    name:'Brave Search',
    summary:'Best for privacy-minded searching while still helping people discover key ideas and questions.',
    promptLead:'Explore this question with a privacy-friendly search mindset and point me to the main ideas:'
  }
};
let activeAiWorkspaceTool='chatgpt';

function selectAiWorkspaceTool(toolId, btn){
  activeAiWorkspaceTool=AI_WORKSPACE_TOOLS[toolId]?toolId:'chatgpt';
  document.querySelectorAll('.ai-tool-tab').forEach(tab=>tab.classList.remove('active'));
  if(btn)btn.classList.add('active');
  const queryInput=document.getElementById('ai-hub-query');
  if(queryInput&&queryInput.value.trim())runAiWorkspaceSearch();
}

function fillAiWorkspace(text){
  const queryInput=document.getElementById('ai-hub-query');
  if(!queryInput)return;
  queryInput.value=text;
  runAiWorkspaceSearch();
}

function runAiWorkspaceSearch(){
  const queryInput=document.getElementById('ai-hub-query');
  const query=(queryInput&&queryInput.value?queryInput.value:'').trim();
  if(!query)return;
  const tool=AI_WORKSPACE_TOOLS[activeAiWorkspaceTool]||AI_WORKSPACE_TOOLS.chatgpt;
  const words=typeof normalizeWords==='function'
    ? normalizeWords(query.toLowerCase())
    : query.toLowerCase().split(/\s+/).filter(w=>w.length>1);
  const matches=DB
    .map(topic=>{
      const hay=(topic.name+' '+topic.keys+' '+topic.note+' '+topic.verses.map(v=>(v.kjv||'')+' '+(v.esv||'')+' '+(v.t||'')+' '+v.r).join(' ')).toLowerCase();
      const score=words.reduce((sum,w)=>sum+(hay.includes(w)?1:0),0);
      return {topic,score};
    })
    .filter(item=>item.score>0)
    .sort((a,b)=>b.score-a.score)
    .slice(0,3);

  const title=document.getElementById('ai-workspace-title');
  const copy=document.getElementById('ai-workspace-copy');
  const promptText=document.getElementById('ai-workspace-prompt-text');
  const links=document.getElementById('ai-workspace-links');
  const siteMatches=document.getElementById('ai-site-matches');

  if(title)title.textContent=tool.name+' Workspace';
  if(copy)copy.textContent=tool.summary+' This keeps the visitor inside your homepage and sends them back into your own original content.';
  if(promptText)promptText.textContent=tool.promptLead+' "'+query+'"';

  if(links){
    links.innerHTML=''
      +'<a class="ai-submit" href="#topics" style="text-decoration:none;display:inline-flex;align-items:center;justify-content:center;">Topics</a>'
      +'<a class="ai-submit" href="#missions" style="text-decoration:none;display:inline-flex;align-items:center;justify-content:center;">Missions</a>'
      +'<a class="ai-submit" href="#living-word" style="text-decoration:none;display:inline-flex;align-items:center;justify-content:center;">Living the Word</a>'
      +'<a class="ai-submit" href="#fellowship" style="text-decoration:none;display:inline-flex;align-items:center;justify-content:center;">Guestbook</a>'
      +'<a class="ai-submit" href="#about" style="text-decoration:none;display:inline-flex;align-items:center;justify-content:center;">Home Content</a>';
  }

  if(siteMatches){
    if(!matches.length){
      siteMatches.innerHTML=''
        +'<div class="ai-match-card">'
        +'<h4>Start Here on Your Website</h4>'
        +'<p>I could not find a close topic match in the built-in Scripture database for "'+escapeHtmlAi(query)+'". Try a simpler life situation or open your main Bible sections below.</p>'
        +'<div class="ai-match-actions">'
        +'<a class="ai-secondary-link" href="#emotions">Emotions</a>'
        +'<a class="ai-secondary-link" href="#situations">Situations</a>'
        +'<a class="ai-secondary-link" href="#topics">Topics</a>'
        +'</div>'
        +'</div>';
    } else {
      siteMatches.innerHTML=matches.map(item=>{
        const topic=item.topic;
        return ''
          +'<div class="ai-match-card">'
          +'<div class="ai-match-meta">'+escapeHtmlAi(topic.cat)+'</div>'
          +'<h4>'+escapeHtmlAi(topic.name)+'</h4>'
          +'<p>'+escapeHtmlAi(topic.note)+'</p>'
          +'<div class="ai-match-actions">'
          +'<button class="ai-secondary-link" type="button" onclick="openTopicPanelByLabel(\''+jsEscape(topic.name)+'\')">Open Topic</button>'
          +'<a class="ai-secondary-link" href="'+bestAiInternalLink(topic)+'">Go to Best Page</a>'
          +'</div>'
          +'</div>';
      }).join('');
    }
  }

  document.getElementById('ai-summary').scrollIntoView({behavior:'smooth',block:'start'});
}

function bestAiInternalLink(topic){
  const name=(topic&&topic.name?topic.name:'').toLowerCase();
  if(name.includes('grief')||name.includes('death')||name.includes('heaven'))return 'comfort.html';
  if(name.includes('prayer')||name.includes('anxiety')||name.includes('fear'))return 'prayer.html';
  if(name.includes('faith')||name.includes('grace')||name.includes('hope')||name.includes('strength'))return 'devotion.html';
  return '#topics';
}

function jsEscape(value){
  return String(value||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'");
}

function escapeHtmlAi(value){
  return String(value||'')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}
function openTopicPanelByLabel(label){
  const topicsRoot=document.getElementById('topics');
  if(!topicsRoot)return false;
  const buttons=Array.from(document.querySelectorAll('.topic-btn'));
  const match=buttons.find(btn=>btn.textContent.toLowerCase().includes(label.toLowerCase()));
  if(!match)return false;
  document.querySelectorAll('.topic-btn.open').forEach(btn=>{
    btn.classList.remove('open');
    if(btn.nextElementSibling)btn.nextElementSibling.classList.remove('open');
  });
  match.classList.add('open');
  if(match.nextElementSibling)match.nextElementSibling.classList.add('open');
  clearHeroSearch();
  topicsRoot.scrollIntoView({behavior:'smooth',block:'start'});
  setTimeout(()=>match.scrollIntoView({behavior:'smooth',block:'center'}),220);
  return true;
}
function heroChip(term){
  const isKorean=document.documentElement.lang==='ko';
  const chipTopicMap=isKorean
    ? {
        grief:'ìŠ¬í””',
        fear:'ë‘ë ¤ì›€',
        lonely:'ì™¸ë¡œì›€',
        sick:'ì§ˆë³‘ê³¼ ì•„í””',
        anxiety:'ë¶ˆì•ˆ',
        forgive:'ìš©ì„œ',
        hope:'ì†Œë§',
        strength:'ë‚™ì‹¬',
        money:'ìž¬ì •ê³¼ ëˆ ê±±ì •',
        peace:'í‰ì•ˆ',
        marriage:'ê²°í˜¼ê³¼ ê°€ì •',
        death:'ì£½ìŒê³¼ ìž„ì¢…'
      }
    : {
        grief:'Grief',
        fear:'Fear',
        lonely:'Loneliness',
        sick:'Illness & Sickness',
        anxiety:'Anxiety',
        forgive:'Forgiveness',
        hope:'Hope',
        strength:'Discouragement',
        money:'Money & Financial Worry',
        peace:'Peace',
        marriage:'Marriage & Family',
        death:'Death & Dying'
      };
  inp.value=term;
  if(openTopicPanelByLabel(chipTopicMap[term]||term))return;
  doHeroSearch();
  document.getElementById('results-section').scrollIntoView({behavior:'smooth'});
}
inp.addEventListener('keydown',e=>{if(e.key==='Enter')doHeroSearch();});
inp.addEventListener('input',()=>{if(!inp.value.trim())clearHeroSearch();});
const aiHubInput=document.getElementById('ai-hub-query');
if(aiHubInput){
  aiHubInput.addEventListener('keydown',e=>{if(e.key==='Enter')runAiWorkspaceSearch();});
}

// â”€â”€ DUAL TRANSLATION HELPER â”€â”€
let dvCounter = 0;
function dualVerse(kjv, esv, ref) {
  const id = 'dv' + (++dvCounter);
  return '<div class="dual-verse">'
    + '<div class="dv-tabs">'
    + '<button class="dv-tab active" onclick="switchTab(this,\'' + id + '-kjv\')">KJV</button>'
    + '<button class="dv-tab" onclick="switchTab(this,\'' + id + '-esv\')">ESV</button>'
    + '</div>'
    + '<div class="dv-content active" id="' + id + '-kjv"><p>&ldquo;' + kjv + '&rdquo;</p><cite>' + ref + '</cite></div>'
    + '<div class="dv-content" id="' + id + '-esv"><p>&ldquo;' + esv + '&rdquo;</p><cite>' + ref + ' (ESV)</cite></div>'
    + '</div>';
}
function switchTab(btn, contentId) {
  var tabs = btn.parentNode;
  var wrapper = tabs.parentNode;
  var btns = tabs.querySelectorAll('button');
  btns.forEach(function(b){ b.classList.remove('active','on'); });
  var children = wrapper.children;
  for(var i=0;i<children.length;i++){
    var el=children[i];
    if(el.classList&&(el.classList.contains('dv-content')||el.classList.contains('dv-pane'))){
      el.style.display='none';
      el.classList.remove('active','on');
    }
  }
  btn.classList.add('active');
  var target=document.getElementById(contentId);
  if(target){ target.style.display='block'; target.classList.add('active'); }
}
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// SIDEBAR TOGGLE (MOBILE)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sb-overlay').classList.toggle('open');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sb-overlay').classList.remove('open');
}
// Active sidebar link based on hash and current view
const sbLinks=document.querySelectorAll('.sb-link[href^="#"]');
const sections=document.querySelectorAll('section[id],div[id]');
function setActiveSidebarLink(targetHash){
  sbLinks.forEach(link=>{
    const href=link.getAttribute('href')||'';
    const isHomeLink=href==='#' || href==='';
    const shouldActivate=targetHash ? href===targetHash : isHomeLink;
    link.classList.toggle('active',shouldActivate);
  });
}
function updateSidebarActiveLinkFromView(){
  const currentHash=window.location.hash||'';
  if(currentHash){
    setActiveSidebarLink(currentHash);
    return;
  }
  let cur='';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-120)cur=s.id;});
  setActiveSidebarLink(cur?('#'+cur):'');
}
sbLinks.forEach(link=>{
  link.addEventListener('click',()=>{
    const href=link.getAttribute('href')||'';
    setActiveSidebarLink(href==='#'?'':href);
  });
});
window.addEventListener('hashchange',updateSidebarActiveLinkFromView);
window.addEventListener('scroll',updateSidebarActiveLinkFromView,{passive:true});
updateSidebarActiveLinkFromView();

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// TRAVEL GALLERY â€” LIGHTBOX
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function openLightbox(src,alt,evt){
  if(evt)evt.stopPropagation();
  const lb=document.getElementById('gallery-lightbox');
  const img=document.getElementById('lb-img');
  img.src='';
  setTimeout(()=>{
    img.src=src;
    img.alt=alt||'';
  },10);
  const cap=document.getElementById('lb-caption');
  if(cap)cap.textContent=alt||'';
  lb.style.display='flex';
  lb.classList.add('show');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  const lb=document.getElementById('gallery-lightbox');
  lb.classList.remove('show');
  lb.style.display='none';
  document.getElementById('lb-img').src='';
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeLightbox();}});

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// PHOTO UPLOAD â†’ GALLERY
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
const STORAGE_JOURNAL='lifeword.travelJournal.v2';
const STORAGE_GALLERY='lifeword.travelGallery.v2';
const TRAVEL_IMAGE_MAX_WIDTH=1600;
const TRAVEL_IMAGE_MAX_HEIGHT=1600;
const TRAVEL_IMAGE_QUALITY=.82;
const DEFAULT_GALLERY_ITEMS=[
  {id:'g1',src:'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=500&q=75',caption:'TÃ¼rkiye - Ancient Churches'},
  {id:'g2',src:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75',caption:'Cappadocia - Balloon Sunrise'},
  {id:'g3',src:'https://images.unsplash.com/photo-1609788935434-3c1d2945a57f?w=500&q=75',caption:'New York - Gods World'},
  {id:'g4',src:'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=500&q=75',caption:'Gods Word - Our Guide'},
  {id:'g5',src:'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&q=75',caption:'Creation - His Handiwork'},
  {id:'g6',src:'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=75',caption:'Edmonton - Home'}
];
let journalItems=loadStoredItems(STORAGE_JOURNAL,[]);
let galleryItems=loadStoredItems(STORAGE_GALLERY,DEFAULT_GALLERY_ITEMS);
let journalEditMode=false;
let galleryEditMode=false;
function resizeImageFile(file){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=ev=>{
      const img=new Image();
      img.onload=()=>{
        let width=img.width||TRAVEL_IMAGE_MAX_WIDTH;
        let height=img.height||TRAVEL_IMAGE_MAX_HEIGHT;
        const scale=Math.min(
          1,
          TRAVEL_IMAGE_MAX_WIDTH/width,
          TRAVEL_IMAGE_MAX_HEIGHT/height
        );
        width=Math.max(1,Math.round(width*scale));
        height=Math.max(1,Math.round(height*scale));
        const canvas=document.createElement('canvas');
        canvas.width=width;
        canvas.height=height;
        const ctx=canvas.getContext('2d');
        if(!ctx){
          resolve(ev.target.result);
          return;
        }
        ctx.drawImage(img,0,0,width,height);
        resolve(canvas.toDataURL('image/jpeg',TRAVEL_IMAGE_QUALITY));
      };
      img.onerror=()=>resolve(ev.target.result);
      img.src=ev.target.result;
    };
    reader.onerror=()=>reject(new Error('Unable to read image file.'));
    reader.readAsDataURL(file);
  });
}
function handlePhotoUpload(e){
  const files=Array.from(e.target.files||[]);
  files.forEach(file=>{
    resizeImageFile(file).then(dataUrl=>{
      journalItems.unshift({
        id:makeId('j'),
        img:dataUrl,
        title:'My Travel Photo',
        text:'Share your reflections here...',
        verse:'',
        ref:''
      });
      renderJournal();
      const firstCard=document.querySelector('#journal-entries .journal-card');
      if(firstCard)firstCard.scrollIntoView({behavior:'smooth',block:'start'});
      if(!saveStoredItems(STORAGE_JOURNAL,journalItems))showTravelStorageNotice();
    }).catch(()=>{});
  });
  e.target.value='';
}
// â”€â”€â”€ GALLERY MODAL â”€â”€â”€
let gmPhotoData = null;
let galleryIdCounter = 100;

function loadStoredItems(key,fallback){
  try{
    const raw=localStorage.getItem(key);
    if(!raw)return JSON.parse(JSON.stringify(fallback));
    const parsed=JSON.parse(raw);
    return Array.isArray(parsed)?parsed:JSON.parse(JSON.stringify(fallback));
  }catch(_err){
    return JSON.parse(JSON.stringify(fallback));
  }
}
function saveStoredItems(key,items){
  try{
    localStorage.setItem(key,JSON.stringify(items));
    return true;
  }catch(_err){
    return false;
  }
}
function makeId(prefix){
  return prefix+Date.now().toString(36)+Math.random().toString(36).slice(2,8);
}
function escapeHtml(value){
  return String(value||'')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}
function escapeAttr(value){
  return escapeHtml(value);
}
function updateJournalEditButton(){
  const btn=document.getElementById('journal-edit-btn');
  if(!btn)return;
  btn.textContent=journalEditMode?'Done Editing':'Edit Journal';
  btn.classList.toggle('active',journalEditMode);
}
function updateGalleryEditButton(){
  const btn=document.getElementById('gallery-edit-btn');
  if(!btn)return;
  btn.textContent=galleryEditMode?'Done Editing':'Edit Gallery';
  btn.classList.toggle('active',galleryEditMode);
}
function showTravelStorageNotice(){
  alert('Your photo was added, but this browser could not save it permanently. Smaller images will save more reliably.');
}

function openGalleryModal(id){
  const modal=document.getElementById('gallery-modal');
  const preview=document.getElementById('gm-preview');
  const drop=document.getElementById('gm-drop');
  const saveBtn=document.getElementById('gm-save-btn');
  modal.classList.add('show');
  document.body.style.overflow='hidden';
  gmPhotoData=null;
  modal.dataset.editId=id||'';
  document.getElementById('gm-file-input').value='';
  document.getElementById('gm-caption').value='';
  preview.style.display='none';
  preview.src='';
  drop.style.display='block';
  saveBtn.disabled=true;
  saveBtn.style.opacity='.5';
  saveBtn.style.cursor='not-allowed';
  saveBtn.textContent=id?'Save Changes':'Post Photo';
  if(id){
    const item=galleryItems.find(entry=>entry.id===id);
    if(item){
      document.getElementById('gm-caption').value=item.caption||'';
      preview.src=item.src;
      preview.style.display='block';
      drop.style.display='none';
      saveBtn.disabled=false;
      saveBtn.style.opacity='1';
      saveBtn.style.cursor='pointer';
    }
  }
}
function closeGalleryModal(e){
  if(e && e.target!==document.getElementById('gallery-modal')) return;
  document.getElementById('gallery-modal').classList.remove('show');
  document.body.style.overflow='';
}
function previewGalleryFile(e){
  const file=e.target.files[0];
  if(!file)return;
  resizeImageFile(file).then(dataUrl=>{
    gmPhotoData=dataUrl;
    const prev=document.getElementById('gm-preview');
    prev.src=gmPhotoData;
    prev.style.display='block';
    document.getElementById('gm-drop').style.display='none';
    const btn=document.getElementById('gm-save-btn');
    btn.disabled=false;btn.style.opacity='1';btn.style.cursor='pointer';
  }).catch(()=>{});
}
function saveGalleryPhoto(){
  const modal=document.getElementById('gallery-modal');
  const editId=modal.dataset.editId||'';
  const caption=document.getElementById('gm-caption').value.trim()||'My Travel Photo';
  if(editId){
    galleryItems=galleryItems.map(item=>item.id===editId?{...item,caption,src:gmPhotoData||item.src}:item);
  }else{
    if(!gmPhotoData)return;
    galleryItems.unshift({id:makeId('g'),src:gmPhotoData,caption});
  }
  renderGallery();
  closeGalleryModal();
  if(!saveStoredItems(STORAGE_GALLERY,galleryItems))showTravelStorageNotice();
}
function addToGallery(src,caption){
  const grid=document.getElementById('gallery-grid');
  const id=++galleryIdCounter;
  const item=document.createElement('div');
  item.className='gallery-item';
  item.setAttribute('data-id',id);
  item.innerHTML=`<img src="${src}" alt="${caption}" style="width:100%;display:block;" onclick="openLightbox('${src}','${caption.replace(/'/g,"\'")}')">
    <div class="gallery-overlay"><span class="gallery-caption">${caption}</span></div>
    <button class="gallery-delete" onclick="deletePhoto(this)" title="Delete photo">âœ•</button>`;
  grid.insertBefore(item,grid.firstChild);
  updateGalleryCount();
  checkGalleryEmpty();
}
function deletePhoto(btn){
  const item=btn.closest('.gallery-item');
  if(!item)return;
  if(!confirm('Remove this photo from the gallery?'))return;
  item.style.transition='opacity .3s, transform .3s';
  item.style.opacity='0';
  item.style.transform='scale(.9)';
  setTimeout(()=>{
    item.remove();
    updateGalleryCount();
    checkGalleryEmpty();
  },300);
}
function updateGalleryCount(){
  const count=document.getElementById('gallery-grid').querySelectorAll('.gallery-item').length;
  const el=document.getElementById('gallery-count');
  if(el)el.textContent=count+' photo'+(count!==1?'s':'');
}
function checkGalleryEmpty(){
  const count=document.getElementById('gallery-grid').querySelectorAll('.gallery-item').length;
  document.getElementById('gallery-empty').style.display=count===0?'block':'none';
}
function handleGalleryUpload(e){
  Array.from(e.target.files).forEach(f=>{
    const r=new FileReader();
    r.onload=ev=>addToGallery(ev.target.result,'My Photo');
    r.readAsDataURL(f);
  });
}
function addJournalCard(img,title,text,verse){
  const grid=document.getElementById('journal-entries');
  const card=document.createElement('div');
  card.className='journal-card';
  card.innerHTML=(img?`<img src="${img}" alt="${title}" style="width:100%;height:200px;object-fit:cover;display:block;">`:'')
    +`<div class="journal-card-body">
      <p class="journal-card-title">ðŸ“· ${title}</p>
      <p class="journal-card-text">${text}</p>
      ${verse?`<div class="journal-verse"><p>&ldquo;${verse}&rdquo;</p></div>`:''}
    </div>`;
  grid.insertBefore(card,grid.firstChild);
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// TRAVEL JOURNAL FORM
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function toggleJournalForm(){
  document.getElementById('journal-form').classList.toggle('open');
}
function saveJournalEntry(){
  const title=document.getElementById('jf-title').value.trim()||'My Journey';
  const text=document.getElementById('jf-text').value.trim()||'Reflections from my travels...';
  const verse=document.getElementById('jf-verse').value.trim();
  const img=document.getElementById('jf-img').value.trim();
  addJournalCard(img,title,text,verse);
  if(img)addToGallery(img,title);
  // reset form
  ['jf-title','jf-text','jf-verse','jf-img'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('journal-form').classList.remove('open');
}

function renderJournal(){
  const grid=document.getElementById('journal-entries');
  const empty=document.getElementById('journal-empty');
  if(!grid)return;
  grid.classList.toggle('journal-editing',journalEditMode);
  grid.innerHTML=journalItems.map(item=>{
    const imgBlock=item.img?`<img src="${escapeAttr(item.img)}" alt="${escapeAttr(item.title)}" loading="lazy">`:'';
    const verseBlock=item.verse
      ? `<div class="journal-verse"><p>&ldquo;${escapeHtml(item.verse)}&rdquo;</p>${item.ref?`<cite>${escapeHtml(item.ref)}</cite>`:''}</div>`
      : '';
    return `<div class="journal-card" data-id="${escapeAttr(item.id)}">
      ${imgBlock}
      <div class="journal-card-body">
        <p class="journal-card-title">ðŸ“· ${escapeHtml(item.title)}</p>
        <p class="journal-card-text">${escapeHtml(item.text)}</p>
        ${verseBlock}
      </div>
    </div>`;
  }).join('');
  if(empty)empty.style.display=journalItems.length===0?'block':'none';
  updateJournalEditButton();
}
function resetJournalForm(){
  ['jf-title','jf-text','jf-verse','jf-img','jf-edit-id'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.value='';
  });
  const form=document.getElementById('journal-form');
  const saveBtn=document.getElementById('journal-save-btn');
  if(form)form.dataset.currentImg='';
  if(saveBtn)saveBtn.textContent='Save Entry';
}
function toggleJournalForm(){
  const form=document.getElementById('journal-form');
  if(!form)return;
  const isOpen=form.classList.contains('open');
  form.classList.toggle('open');
  if(isOpen)resetJournalForm();
}
function toggleJournalEditMode(){
  journalEditMode=!journalEditMode;
  renderJournal();
}
function editJournalEntry(id){
  const item=journalItems.find(entry=>entry.id===id);
  const form=document.getElementById('journal-form');
  if(!item||!form)return;
  document.getElementById('jf-edit-id').value=item.id;
  document.getElementById('jf-title').value=item.title||'';
  document.getElementById('jf-text').value=item.text||'';
  document.getElementById('jf-verse').value=item.ref?`${item.verse} - ${item.ref}`:(item.verse||'');
  document.getElementById('jf-img').value=item.img&&item.img.startsWith('http')?item.img:'';
  form.dataset.currentImg=item.img||'';
  form.classList.add('open');
  document.getElementById('journal-save-btn').textContent='Update Entry';
  form.scrollIntoView({behavior:'smooth',block:'start'});
}
function deleteJournalEntry(id){
  const item=journalItems.find(entry=>entry.id===id);
  if(!item)return;
  if(!confirm('Delete this travel journal entry?'))return;
  journalItems=journalItems.filter(entry=>entry.id!==id);
  renderJournal();
  if(!saveStoredItems(STORAGE_JOURNAL,journalItems))showTravelStorageNotice();
}
function saveJournalEntry(){
  const form=document.getElementById('journal-form');
  const editId=document.getElementById('jf-edit-id').value.trim();
  const title=document.getElementById('jf-title').value.trim()||'My Journey';
  const text=document.getElementById('jf-text').value.trim()||'Reflections from my travels...';
  const verseText=(document.getElementById('jf-verse').value||'').trim();
  const rawImg=(document.getElementById('jf-img').value||'').trim();
  const img=rawImg||form.dataset.currentImg||'';
  const split=verseText.lastIndexOf(' - ');
  const verse=split>0?verseText.slice(0,split).trim():verseText;
  const ref=split>0?verseText.slice(split+3).trim():'';
  if(editId){
    journalItems=journalItems.map(item=>item.id===editId?{...item,title,text,verse,ref,img}:item);
  }else{
    journalItems.unshift({id:makeId('j'),title,text,verse,ref,img});
  }
  renderJournal();
  resetJournalForm();
  form.classList.remove('open');
  if(!saveStoredItems(STORAGE_JOURNAL,journalItems))showTravelStorageNotice();
}
function renderGallery(){
  const grid=document.getElementById('gallery-grid');
  if(!grid)return;
  grid.classList.toggle('gallery-editing',galleryEditMode);
  grid.innerHTML=galleryItems.map(item=>`<div class="gallery-item" data-id="${escapeAttr(item.id)}">
    <img src="${escapeAttr(item.src)}" alt="${escapeAttr(item.caption)}" loading="lazy" onclick="openLightbox('${escapeAttr(item.src)}','${escapeAttr(item.caption)}')">
    <div class="gallery-overlay"><span class="gallery-caption">${escapeHtml(item.caption)}</span></div>
  </div>`).join('');
  updateGalleryCount();
  checkGalleryEmpty();
  updateGalleryEditButton();
}
function toggleGalleryEditMode(){
  galleryEditMode=!galleryEditMode;
  renderGallery();
}
function deletePhoto(id){
  const item=galleryItems.find(entry=>entry.id===id);
  if(!item)return;
  if(!confirm('Remove this photo from the gallery?'))return;
  galleryItems=galleryItems.filter(entry=>entry.id!==id);
  renderGallery();
  if(!saveStoredItems(STORAGE_GALLERY,galleryItems))showTravelStorageNotice();
}
function updateGalleryCount(){
  const el=document.getElementById('gallery-count');
  if(el)el.textContent=getLocalizedPhotoCount(galleryItems.length);
}
function checkGalleryEmpty(){
  const empty=document.getElementById('gallery-empty');
  if(empty)empty.style.display=galleryItems.length===0?'block':'none';
}
function renderJournal(){
  const grid=document.getElementById('journal-entries');
  const empty=document.getElementById('journal-empty');
  if(!grid)return;
  grid.innerHTML=journalItems.map(item=>{
    const imgBlock=item.img?`<img src="${escapeAttr(item.img)}" alt="${escapeAttr(item.title)}" loading="lazy">`:'';
    const verseBlock=item.verse
      ? `<div class="journal-verse"><p>&ldquo;${escapeHtml(item.verse)}&rdquo;</p>${item.ref?`<cite>${escapeHtml(item.ref)}</cite>`:''}</div>`
      : '';
    return `<div class="journal-card" data-id="${escapeAttr(item.id)}">
      ${imgBlock}
      <div class="journal-card-body">
        <p class="journal-card-title">Ã°Å¸â€œÂ· ${escapeHtml(item.title)}</p>
        <p class="journal-card-text">${escapeHtml(item.text)}</p>
        ${verseBlock}
      </div>
    </div>`;
  }).join('');
  if(empty)empty.style.display=journalItems.length===0?'block':'none';
}
function renderGallery(){
  const grid=document.getElementById('gallery-grid');
  if(!grid)return;
  grid.innerHTML=galleryItems.map(item=>`<div class="gallery-item" data-id="${escapeAttr(item.id)}">
    <img src="${escapeAttr(item.src)}" alt="${escapeAttr(item.caption)}" loading="lazy" onclick="openLightbox('${escapeAttr(item.src)}','${escapeAttr(item.caption)}')">
    <div class="gallery-overlay"><span class="gallery-caption">${escapeHtml(item.caption)}</span></div>
  </div>`).join('');
  updateGalleryCount();
  checkGalleryEmpty();
}
function updateGalleryCount(){
  const el=document.getElementById('gallery-count');
  if(el)el.textContent=galleryItems.length+' photo'+(galleryItems.length!==1?'s':'');
}
function checkGalleryEmpty(){
  const empty=document.getElementById('gallery-empty');
  if(empty)empty.style.display=galleryItems.length===0?'block':'none';
}
function toggleJournalForm(){ return false; }
function saveJournalEntry(){ return false; }
function toggleJournalEditMode(){ return false; }
function editJournalEntry(){ return false; }
function deleteJournalEntry(){ return false; }
function handlePhotoUpload(){ return false; }
function openGalleryModal(){ return false; }
function closeGalleryModal(){ return false; }
function previewGalleryFile(){ return false; }
function saveGalleryPhoto(){ return false; }
function toggleGalleryEditMode(){ return false; }
function deletePhoto(){ return false; }

renderJournal();
renderGallery();

const LIVING_WORD_STORAGE='lifeword.livingWord.v1';
const HOMEPAGE_VISITS_STORAGE='lifeword.homepageVisits.v1';
const HOMEPAGE_VISIT_SESSION_KEY='lifeword.homepageVisit.session';
const SITE_LANGUAGE_STORAGE='lifeword.siteLang';
const DEFAULT_LIVING_WORD_ITEMS=[
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

let livingWordItems=normalizeLivingWordItems(loadStoredItems(LIVING_WORD_STORAGE,DEFAULT_LIVING_WORD_ITEMS));

function renderLivingWord(){
  const grid=document.getElementById('living-word-grid');
  const empty=document.getElementById('living-word-empty');
  const lang=typeof window.getSiteLanguage==='function' ? window.getSiteLanguage() : 'en';
  const visibleItems=livingWordItems.filter(item => (item.language === 'ko' ? 'ko' : 'en') === lang);
  if(!grid||!empty)return;
  if(!visibleItems.length){
    grid.innerHTML='';
    empty.style.display='block';
    return;
  }
  empty.style.display='none';
  grid.innerHTML=visibleItems.map(item=>{
    const media=getLivingWordMediaMarkup(item);
    const link=getLivingWordActionMarkup(item);
    return '<article class="living-word-card">'
      +'<p class="living-word-type">'+escapeHtml(item.type||'Article')+'</p>'
      +'<h3>'+escapeHtml(item.title||'Untitled Entry')+'</h3>'
      +'<p>'+escapeHtml(item.summary||'')+'</p>'
      +media
      +link
      +'</article>';
  }).join('');
}

function getLivingWordMediaMarkup(item){
  if(!item||!item.mediaSrc||!item.mediaKind)return '';
  if(item.mediaKind==='video'){
    return '<div class="living-word-media-shell"><video class="living-word-media" controls playsinline preload="metadata" src="'+escapeAttr(item.mediaSrc)+'"></video></div>';
  }
  return '<div class="living-word-media-shell living-word-audio-shell"><audio class="living-word-media" controls preload="metadata" src="'+escapeAttr(item.mediaSrc)+'"></audio></div>';
}

function getLivingWordActionMarkup(item){
  if(!item)return '';
  const actions=[];
  const primaryLink=(item.link||'').trim();
  const mediaLink=(item.mediaSrc||'').trim();
  if(primaryLink){
    actions.push(`<a class="living-word-link-btn" href="${escapeAttr(primaryLink)}" target="_blank" rel="noopener noreferrer">${getLivingWordLinkLabel(item.type)}</a>`);
  }
  if((item.type||'').toLowerCase()==='podcast' && mediaLink){
    actions.push(`<a class="living-word-link-btn living-word-link-btn-secondary" href="${escapeAttr(mediaLink)}" target="_blank" rel="noopener noreferrer">${getLivingWordOpenAudioLabel()}</a>`);
  }
  if(!actions.length)return '';
  return `<div class="living-word-actions">${actions.join('')}</div>`;
}

function normalizeLivingWordItems(items){
  return (Array.isArray(items) ? items : []).map(item => ({
    ...item,
    language: item && item.language === 'ko' ? 'ko' : 'en'
  }));
}

function getLivingWordLinkLabel(type){
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  const normalized=(type||'').toLowerCase();
  if(lang==='ko'){
    if(normalized==='podcast')return 'ë“£ê¸°';
    if(normalized==='powerpoint')return 'ê°•ì˜ ì—´ê¸°';
    if(normalized==='journal')return 'ë¬µìƒ ì½ê¸°';
    return 'ê¸€ ì½ê¸°';
  }
  if(normalized==='podcast')return 'Listen';
  if(normalized==='powerpoint')return 'Open Lesson';
  if(normalized==='journal')return 'Read Journal';
  return 'Read Article';
}

function recordHomepageVisit(){
  if(window.__homepageVisitRecorded){
    return;
  }
  const stats=loadVisitStats();
  const nowIso=new Date().toISOString();
  const lang=getHomepageVisitLanguage();
  stats.totalViews=(stats.totalViews||0)+1;
  stats.lastVisitedAt=nowIso;
  stats.history=Array.isArray(stats.history)?stats.history:[];
  stats.history.push({at:nowIso,lang:lang==='ko'?'ko':'en'});
  if(stats.history.length>5000){
    stats.history=stats.history.slice(-5000);
  }
  if(!sessionStorage.getItem(HOMEPAGE_VISIT_SESSION_KEY)){
    stats.browserSessions=(stats.browserSessions||0)+1;
    sessionStorage.setItem(HOMEPAGE_VISIT_SESSION_KEY,'true');
  }
  saveVisitStats(stats);
  window.__homepageVisitRecorded=true;
}

function getHomepageVisitLanguage(){
  if(typeof window.getSiteLanguage==='function'){
    return window.getSiteLanguage()==='ko' ? 'ko' : 'en';
  }
  try{
    return localStorage.getItem(SITE_LANGUAGE_STORAGE)==='ko' ? 'ko' : 'en';
  }catch(_error){
    return 'en';
  }
}

function updateHomepageVisitLanguage(lang){
  const next=lang==='ko' ? 'ko' : 'en';
  const stats=loadVisitStats();
  const history=Array.isArray(stats.history) ? stats.history : [];
  if(!history.length){
    return;
  }
  const lastIndex=history.length-1;
  const lastItem=history[lastIndex];
  if(!lastItem || typeof lastItem.at !== 'string'){
    return;
  }
  history[lastIndex]={
    ...lastItem,
    lang:next
  };
  stats.history=history;
  saveVisitStats(stats);
}

window.recordHomepageVisit=recordHomepageVisit;
window.updateHomepageVisitLanguage=updateHomepageVisitLanguage;

// Keep Living the Word link labels readable in both English and Korean.
function getLivingWordLinkLabel(type){
  const lang=typeof window.getSiteLanguage==='function' ? window.getSiteLanguage() : 'en';
  const normalized=(type||'').toLowerCase();
  if(lang==='ko'){
    if(normalized==='podcast') return 'ì˜¤ë””ì˜¤ ë“£ê¸°';
    if(normalized==='powerpoint') return 'ê°•ì˜ ì—´ê¸°';
    if(normalized==='journal') return 'ë¬µìƒ ì½ê¸°';
    return 'ê¸€ ì½ê¸°';
  }
  if(normalized==='podcast') return 'Listen Now';
  if(normalized==='powerpoint') return 'Open Lesson';
  if(normalized==='journal') return 'Read Journal';
  return 'Read Article';
}

function getLivingWordOpenAudioLabel(){
  const lang=typeof window.getSiteLanguage==='function' ? window.getSiteLanguage() : 'en';
  return lang==='ko' ? 'ì˜¤ë””ì˜¤ ì§ì ‘ ì—´ê¸°' : 'Open Audio';
}

function loadVisitStats(){
  const fallback={totalViews:0,browserSessions:0,lastVisitedAt:'',history:[]};
  try{
    const raw=localStorage.getItem(HOMEPAGE_VISITS_STORAGE);
    if(!raw)return fallback;
    const parsed=JSON.parse(raw);
    return {
      totalViews:Number(parsed.totalViews||0),
      browserSessions:Number(parsed.browserSessions||0),
      lastVisitedAt:parsed.lastVisitedAt||'',
      history:Array.isArray(parsed.history)
        ? parsed.history
            .map(item=>{
              if(typeof item==='string') return {at:item,lang:'en'};
              if(item&&typeof item.at==='string') return {at:item.at,lang:item.lang==='ko'?'ko':'en'};
              return null;
            })
            .filter(Boolean)
        : []
    };
  }catch(_error){
    return fallback;
  }
}

function saveVisitStats(stats){
  try{
    localStorage.setItem(HOMEPAGE_VISITS_STORAGE,JSON.stringify(stats));
  }catch(_error){}
}

const GUESTBOOK_STORAGE='lifeword.guestbook.v1';
const SUPABASE_PROJECT_URL='https://ytfjmlhfkgvdoifhknxq.supabase.co';
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_LBT8442LBjSc0ZOvaUxkFg_MIIBacTw';
const DEFAULT_GUESTBOOK_ENTRIES=[
  {
    id:'gb1',
    name:'A grateful visitor',
    message:'Thank you for creating a peaceful place to find Bible verses and encouragement.',
    language:'en',
    reactionEmoji:'',
    replyText:'',
    createdAt:'2026-05-14T09:00:00.000Z'
  }
];

const supabaseClient=window.supabase && SUPABASE_PROJECT_URL && SUPABASE_PUBLISHABLE_KEY
  ? window.supabase.createClient(SUPABASE_PROJECT_URL,SUPABASE_PUBLISHABLE_KEY)
  : null;
let guestbookEntries=loadStoredItems(GUESTBOOK_STORAGE,DEFAULT_GUESTBOOK_ENTRIES);
let guestbookUsesSupabase=Boolean(supabaseClient);

async function loadGuestbookEntries(){
  if(!supabaseClient){
    guestbookEntries=normalizeGuestbookEntries(loadStoredItems(GUESTBOOK_STORAGE,DEFAULT_GUESTBOOK_ENTRIES));
    renderGuestbook();
    return;
  }
  try{
    let data=null;
    let error=null;
    ({data,error}=await supabaseClient
      .from('guestbook_entries')
      .select('id,name,message,language,created_at,is_visible,reaction_emoji,reply_text')
      .eq('is_visible',true)
      .order('created_at',{ascending:false}));
    if(error){
      ({data,error}=await supabaseClient
        .from('guestbook_entries')
        .select('id,name,message,language,created_at,is_visible')
        .eq('is_visible',true)
        .order('created_at',{ascending:false}));
    }
    if(error)throw error;
    guestbookEntries=normalizeGuestbookEntries((data||[]).map(entry=>({
      id:'gb-'+String(entry.id),
      name:entry.name||'',
      message:entry.message||'',
      language:entry.language==='ko'?'ko':'en',
      reactionEmoji:entry.reaction_emoji||'',
      replyText:entry.reply_text||'',
      createdAt:entry.created_at||new Date().toISOString()
    })));
    renderGuestbook();
  }catch(_error){
    guestbookUsesSupabase=false;
    guestbookEntries=normalizeGuestbookEntries(loadStoredItems(GUESTBOOK_STORAGE,DEFAULT_GUESTBOOK_ENTRIES));
    renderGuestbook();
  }
}

function renderGuestbook(){
  const list=document.getElementById('guestbook-list');
  const empty=document.getElementById('guestbook-empty');
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  if(!list||!empty)return;
  if(!guestbookEntries.length){
    list.innerHTML='';
    empty.style.display='block';
    return;
  }
  empty.style.display='none';
  list.innerHTML=guestbookEntries.map(entry=>{
    return '<article class="guestbook-entry">'
      +'<div class="guestbook-entry-head">'
      +'<div class="guestbook-entry-name">'+escapeHtml(entry.name||(lang==='ko'?'ë°©ë¬¸ìž':'Guest'))+'</div>'
      +'<div class="guestbook-entry-date">'+formatGuestbookDate(entry.createdAt)+'</div>'
      +'</div>'
      +'<div class="guestbook-entry-message">'+escapeHtml(entry.message||'')+'</div>'
      +'</article>';
  }).join('');
}

function submitGuestbookEntry(){
  const nameInput=document.getElementById('guestbook-name');
  const messageInput=document.getElementById('guestbook-message');
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  if(!nameInput||!messageInput)return;
  const name=(nameInput.value||'').trim();
  const message=(messageInput.value||'').trim();
  if(!name||!message){
    alert(lang==='ko'?'ì´ë¦„ê³¼ ë©”ì‹œì§€ë¥¼ ëª¨ë‘ ìž…ë ¥í•´ ì£¼ì„¸ìš”.':'Please enter both your name and your message.');
    return;
  }
  guestbookEntries.unshift({
    id:makeId('gb'),
    name:name.slice(0,50),
    message:message.slice(0,500),
    createdAt:new Date().toISOString()
  });
  saveStoredItems(GUESTBOOK_STORAGE,guestbookEntries);
  nameInput.value='';
  messageInput.value='';
  renderGuestbook();
}

function formatGuestbookDate(value){
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  const date=value?new Date(value):new Date();
  if(Number.isNaN(date.getTime()))return lang==='ko'?'ìµœê·¼ ë©”ì‹œì§€':'Recent Message';
  return date.toLocaleDateString(lang==='ko'?'ko-KR':undefined,{year:'numeric',month:'short',day:'numeric'});
}

function getLocalizedPhotoCount(count){
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  if(lang==='ko')return count+'ê°œì˜ ì‚¬ì§„';
  return count+' photo'+(count!==1?'s':'');
}

function normalizeGalleryItems(items){
    return (Array.isArray(items) ? items : []).map(item => ({
      ...item,
      language: item && item.language === 'ko' ? 'ko' : 'en',
      title: (item && item.title ? String(item.title) : '').trim(),
      summary: (item && (item.summary || item.caption) ? String(item.summary || item.caption) : '').trim(),
      caption: (item && item.caption ? String(item.caption) : '').trim()
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

  galleryItems = normalizeGalleryItems(galleryItems);
  guestbookEntries = normalizeGuestbookEntries(guestbookEntries);

  function buildGalleryCaptionHtml(item){
    const title=(item.title||'').trim();
    const summary=(item.summary||item.caption||'').trim();
    const displayTitle=item.language==='ko' ? title.replace(/ ìžì „ê±° ì—¬í–‰$/,'\nìžì „ê±° ì—¬í–‰') : title;
    const displaySummary=item.language==='ko' ? summary.replace(/ ìžì „ê±° ì—¬í–‰$/,'\nìžì „ê±° ì—¬í–‰') : summary;
    const showTitle=title && title!==summary;
    if(!showTitle && !displaySummary)return '';
    return `<div class="gallery-copy">
      ${showTitle?`<h3 class="gallery-copy-title">${escapeHtml(displayTitle)}</h3>`:''}
      ${displaySummary?`<p class="gallery-copy-summary">${escapeHtml(displaySummary)}</p>`:''}
    </div>`;
  }
  
function renderGallery(){
    const grid=document.getElementById('gallery-grid');
    const lang=typeof window.getSiteLanguage==='function' ? window.getSiteLanguage() : 'en';
    const visibleItems=galleryItems.filter(item => (item.language === 'ko' ? 'ko' : 'en') === lang);
    if(!grid)return;
    grid.classList.toggle('gallery-editing',galleryEditMode);
    grid.innerHTML=visibleItems.map(item=>`<div class="gallery-item" data-id="${escapeAttr(item.id)}">
      <img src="${escapeAttr(item.src)}" alt="${escapeAttr((item.title||item.summary||item.caption||'Gallery photo').trim())}" loading="lazy" onclick="openLightbox('${escapeAttr(item.src)}','${escapeAttr((item.title||item.summary||item.caption||'Gallery photo').trim())}')">
      <div class="gallery-overlay"><span class="gallery-caption">${escapeHtml(item.caption)}</span></div>
      ${buildGalleryCaptionHtml(item)}
    </div>`).join('');
    updateGalleryCount(visibleItems.length);
    checkGalleryEmpty(visibleItems.length);
    updateGalleryEditButton();
}

function updateGalleryCount(countOverride){
  const el=document.getElementById('gallery-count');
  const count=typeof countOverride==='number' ? countOverride : galleryItems.length;
  if(el)el.textContent=getLocalizedPhotoCount(count);
}

function checkGalleryEmpty(countOverride){
  const empty=document.getElementById('gallery-empty');
  const count=typeof countOverride==='number' ? countOverride : galleryItems.length;
  if(empty)empty.style.display=count===0?'block':'none';
}

function renderGuestbook(){
  const list=document.getElementById('guestbook-list');
  const empty=document.getElementById('guestbook-empty');
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  const visibleEntries=guestbookEntries.filter(entry => (entry.language === 'ko' ? 'ko' : 'en') === lang);
  const replyLabel=lang==='ko'?'ìš´ì˜ìž ë‹µê¸€':'Reply from Admin';
  if(!list||!empty)return;
  if(!visibleEntries.length){
    list.innerHTML='';
    empty.style.display='block';
    return;
  }
  empty.style.display='none';
  list.innerHTML=visibleEntries.map(entry=>{
    return '<article class="guestbook-entry">'
      +'<div class="guestbook-entry-head">'
      +'<div class="guestbook-entry-topline">'
      +'<div class="guestbook-entry-name">'+escapeHtml(entry.name||(lang==='ko'?'ë°©ë¬¸ìž':'Guest'))+'</div>'
      +(entry.reactionEmoji?'<div class="guestbook-entry-reaction" aria-label="Guestbook reaction">'+escapeHtml(entry.reactionEmoji)+'</div>':'')
      +'</div>'
      +'<div class="guestbook-entry-date">'+formatGuestbookDate(entry.createdAt)+'</div>'
      +'</div>'
      +'<div class="guestbook-entry-message">'+escapeHtml(entry.message||'')+'</div>'
      +(entry.replyText?'<div class="guestbook-entry-reply"><span class="guestbook-entry-reply-label">'+escapeHtml(replyLabel)+'</span><div class="guestbook-entry-reply-text">'+escapeHtml(entry.replyText)+'</div></div>':'')
      +'</article>';
  }).join('');
}

window.appendGuestbookEmoji=function(emoji){
  const messageInput=document.getElementById('guestbook-message');
  if(!messageInput||!emoji)return;
  const current=messageInput.value||'';
  messageInput.value=current ? `${current} ${emoji}` : emoji;
  messageInput.focus();
};

function submitGuestbookEntry(){
  const nameInput=document.getElementById('guestbook-name');
  const messageInput=document.getElementById('guestbook-message');
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  if(!nameInput||!messageInput)return;
  const name=(nameInput.value||'').trim();
  const message=(messageInput.value||'').trim();
  if(!name||!message){
    alert(lang==='ko'?'ì´ë¦„ê³¼ ë©”ì‹œì§€ë¥¼ ëª¨ë‘ ìž…ë ¥í•´ ì£¼ì„¸ìš”.':'Please enter both your name and your message.');
    return;
  }
  guestbookEntries.unshift({
    id:makeId('gb'),
    language:lang === 'ko' ? 'ko' : 'en',
    name:name.slice(0,50),
    message:message.slice(0,500),
    createdAt:new Date().toISOString()
  });
  saveStoredItems(GUESTBOOK_STORAGE,guestbookEntries);
  nameInput.value='';
  messageInput.value='';
  renderGuestbook();
}

window.refreshPublicLanguage=function(){
  renderGallery();
  renderLivingWord();
  renderGuestbook();
};

renderLivingWord();
renderGuestbook();

async function submitGuestbookEntry(){
  const nameInput=document.getElementById('guestbook-name');
  const messageInput=document.getElementById('guestbook-message');
  const button=document.querySelector('#fellowship button[onclick="submitGuestbookEntry()"]');
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  if(!nameInput||!messageInput)return;
  const name=(nameInput.value||'').trim();
  const message=(messageInput.value||'').trim();
  if(!name||!message){
    alert(lang==='ko'?'Ã¬ÂÂ´Ã«Â¦â€žÃªÂ³Â¼ Ã«Â©â€Ã¬â€¹Å“Ã¬Â§â‚¬Ã«Â¥Â¼ Ã«ÂªÂ¨Ã«â€˜Â Ã¬Å¾â€¦Ã«Â Â¥Ã­â€¢Â´ Ã¬Â£Â¼Ã¬â€žÂ¸Ã¬Å¡â€.':'Please enter both your name and your message.');
    return;
  }
  const entry={
    language:lang === 'ko' ? 'ko' : 'en',
    name:name.slice(0,50),
    message:message.slice(0,500),
    reactionEmoji:'',
    replyText:'',
    createdAt:new Date().toISOString()
  };
  if(button)button.disabled=true;
  if(supabaseClient && guestbookUsesSupabase){
    try{
      const {error}=await supabaseClient
        .from('guestbook_entries')
        .insert({
          name:entry.name,
          message:entry.message,
          language:entry.language
        });
      if(error)throw error;
      nameInput.value='';
      messageInput.value='';
      await loadGuestbookEntries();
      if(button)button.disabled=false;
      return;
    }catch(_error){
      guestbookUsesSupabase=false;
    }
  }
  guestbookEntries.unshift({
    id:makeId('gb'),
    language:entry.language,
    name:entry.name,
    message:entry.message,
    reactionEmoji:'',
    replyText:'',
    createdAt:entry.createdAt
  });
  saveStoredItems(GUESTBOOK_STORAGE,guestbookEntries);
  nameInput.value='';
  messageInput.value='';
  renderGuestbook();
  if(button)button.disabled=false;
}

loadGuestbookEntries();

function normalizeLivingWordTypeForDisplay(type){
  const normalized=(type||'article').toLowerCase();
  if(normalized==='podcast')return 'Podcast';
  if(normalized==='journal')return 'Journal';
  if(normalized==='powerpoint')return 'PowerPoint';
  return 'Article';
}
function inferLivingWordMediaKind(url, type){
  const normalizedType=(type||'').toLowerCase();
  if(normalizedType==='podcast') return 'audio';
  const value=(url||'').toLowerCase();
  if(/\.(mp4|webm|mov|m4v)(\?|#|$)/.test(value)) return 'video';
  if(/\.(mp3|m4a|wav|ogg|aac)(\?|#|$)/.test(value)) return 'audio';
  return '';
}

async function loadLivingWordItems(){
  if(!supabaseClient){
    livingWordItems=normalizeLivingWordItems(loadStoredItems(LIVING_WORD_STORAGE,DEFAULT_LIVING_WORD_ITEMS));
    renderLivingWord();
    return;
  }
  try{
    const {data,error}=await supabaseClient
      .from('living_word_posts')
      .select('id,language,content_type,title,summary,link_url,media_url,is_visible,created_at')
      .eq('is_visible',true)
      .order('created_at',{ascending:false});
    if(error)throw error;
    livingWordItems=normalizeLivingWordItems((data||[]).map(item=>({
      id:'lw-'+String(item.id),
      language:item.language==='ko'?'ko':'en',
      type:normalizeLivingWordTypeForDisplay(item.content_type),
      title:item.title||'',
      summary:item.summary||'',
      link:(item.link_url||'').trim(),
      mediaSrc:(item.media_url||'').trim(),
      mediaKind:inferLivingWordMediaKind((item.media_url||'').trim(), item.content_type),
      mediaMime:'',
      mediaName:'',
      createdAt:item.created_at||new Date().toISOString()
    })));
    renderLivingWord();
  }catch(_error){
    livingWordItems=normalizeLivingWordItems(loadStoredItems(LIVING_WORD_STORAGE,DEFAULT_LIVING_WORD_ITEMS));
    renderLivingWord();
  }
}

loadLivingWordItems();

async function loadGalleryItems(){
  if(!supabaseClient){
    galleryItems=normalizeGalleryItems(loadStoredItems(STORAGE_GALLERY,DEFAULT_GALLERY_ITEMS));
    renderGallery();
    return;
  }
  try{
    const {data,error}=await supabaseClient
      .from('gallery_items')
      .select('id,language,title,caption,image_url,is_visible,created_at')
      .eq('is_visible',true)
      .order('created_at',{ascending:false});
    if(error)throw error;
      galleryItems=normalizeGalleryItems((data||[]).map(item=>({
        id:'g-'+String(item.id),
        language:item.language==='ko'?'ko':'en',
        title:(item.title||'').trim(),
        src:(item.image_url||'').trim(),
        caption:(item.caption||item.title||'Untitled Photo').trim(),
        summary:(item.caption||item.title||'Untitled Photo').trim()
      })));
      renderGallery();
  }catch(_error){
    galleryItems=normalizeGalleryItems(loadStoredItems(STORAGE_GALLERY,DEFAULT_GALLERY_ITEMS));
    renderGallery();
  }
}

loadGalleryItems();



