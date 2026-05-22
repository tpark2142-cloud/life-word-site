// ═══════════════════════════════════════
// MODAL (for emotion cards)
// ═══════════════════════════════════════
const EMOTION_MODAL_KO = {
  Joy: { title:'기쁨', note:'참된 기쁨은 변하는 환경이 아니라 변함없는 하나님의 임재 안에 있습니다.' },
  Sorrow: { title:'슬픔', note:'하나님은 우리의 눈물을 외면하지 않으시며 상한 마음에 가까이 오십니다.' },
  Peace: { title:'평안', note:'하나님이 주시는 평안은 폭풍이 지난 뒤에만이 아니라 폭풍 한가운데서도 마음을 지켜 줍니다.' },
  Hope: { title:'소망', note:'성경적 소망은 하나님의 깨뜨려지지 않는 약속 위에 서 있는 확신입니다.' },
  Fear: { title:'두려움', note:'하나님이 우리와 함께하시는 분이심을 기억할 때 두려움은 힘을 잃습니다.' },
  Anxiety: { title:'불안', note:'불안은 우리를 돌보시는 하나님께 모든 염려를 맡기라는 초대입니다.' },
  Loneliness: { title:'외로움', note:'하나님의 임재는 거리나 고립으로 제한되지 않습니다.' },
  Anger: { title:'분노', note:'분노는 죄가 되기 전에 하나님께 맡겨져야 합니다.' },
  Gratitude: { title:'감사', note:'감사는 우리가 모든 것을 바라보는 시선을 새롭게 빚어 가는 훈련입니다.' },
  Guilt: { title:'죄책감과 후회', note:'죄책감은 우리를 십자가로 이끌며, 그곳에서 용서는 완전해집니다.' },
  Love: { title:'사랑', note:'하나님의 사랑은 모든 사랑의 기초이며, 그 사랑이 먼저 우리에게 왔습니다.' },
  Discouragement: { title:'낙심', note:'주를 기다리는 자에게 하나님은 새 힘을 주십니다.' }
};

const TOPIC_RESULT_KO = {
  'Joy': { name:'기쁨', cat:'감정', note:'참된 기쁨은 상황이 아니라 하나님의 임재 안에 뿌리를 둡니다.' },
  'Sorrow & Grief': { name:'슬픔', cat:'감정', note:'하나님은 상한 마음에 가까이 오시며 우리의 눈물을 외면하지 않으십니다.' },
  'Peace': { name:'평안', cat:'감정', note:'하나님이 주시는 평안은 폭풍 속에서도 마음을 지켜 줍니다.' },
  'Hope': { name:'소망', cat:'감정', note:'성경적 소망은 하나님의 약속에 뿌리내린 확신 있는 기다림입니다.' },
  'Fear': { name:'두려움', cat:'감정', note:'하나님이 우리의 도움이심을 기억할 때 두려움은 힘을 잃습니다.' },
  'Anxiety & Worry': { name:'불안', cat:'감정', note:'불안은 우리를 돌보시는 하나님께 염려를 맡기라는 초대입니다.' },
  'Loneliness': { name:'외로움', cat:'감정', note:'하나님의 임재는 거리와 질병과 고립으로 제한되지 않습니다.' },
  'Anger': { name:'분노', cat:'감정', note:'분노가 죄가 되기 전에 하나님께 맡겨질 때 다스려집니다.' },
  'Gratitude': { name:'감사', cat:'감정', note:'감사는 세상을 바라보는 시선을 새롭게 빚어 가는 훈련입니다.' },
  'Guilt & Regret': { name:'죄책감과 후회', cat:'감정', note:'죄책감은 우리를 십자가로 이끌며, 거기에서 용서는 완전해집니다.' },
  'Love': { name:'사랑', cat:'감정', note:'하나님의 사랑은 모든 사랑의 기초이며, 그 사랑이 먼저 우리에게 왔습니다.' },
  'Discouragement': { name:'낙심', cat:'감정', note:'가장 낮은 자리에서도 하나님은 주를 기다리는 자에게 새 힘을 주십니다.' },
  'Suffering & Trials': { name:'고난과 시련', cat:'삶의 문제', note:'고난은 하나님의 손 안에서 헛되지 않으며, 하나님은 그것을 통해 일하십니다.' },
  'Illness & Sickness': { name:'질병과 아픔', cat:'삶의 문제', note:'병 가운데서도 하나님은 멀리 계시지 않고 붙드시며 함께하십니다.' },
  'Death & Dying': { name:'죽음과 임종', cat:'삶의 문제', note:'믿는 이에게 죽음은 끝이 아니라 하나님께로 들어가는 문입니다.' },
  'Grief & Funeral Comfort': { name:'슬픔과 장례의 위로', cat:'삶의 문제', note:'함께 슬퍼하고 기억하는 이들을 위한 영원한 소망의 말씀입니다.' },
  'Forgiveness': { name:'용서', cat:'삶의 문제', note:'용서는 잘못을 붙들고 살아가는 무거운 짐에서 우리를 놓아줍니다.' },
  'Marriage & Family': { name:'결혼과 가정', cat:'삶의 문제', note:'결혼은 그리스도께서 교회를 사랑하신 자기희생적 사랑을 비춥니다.' },
  'Money & Financial Worry': { name:'재정과 돈 걱정', cat:'삶의 문제', note:'하나님은 먼저 그의 나라를 구하라고 부르시며 필요한 공급을 약속하십니다.' },
  'Decision-Making & Wisdom': { name:'결정과 지혜', cat:'삶의 문제', note:'갈림길마다 자신의 명철만 의지하지 말고 멈추어 하나님을 바라보십시오.' },
  'Faith & Trust': { name:'믿음과 신뢰', cat:'영적 주제', note:'믿음은 길이 보이지 않아도 하나님을 붙드는 신뢰입니다.' },
  'Prayer': { name:'기도와 중보', cat:'영적 주제', note:'기도는 가장 단순하면서도 가장 깊은 믿음의 행위입니다.' },
  'Grace & Mercy': { name:'은혜와 자비', cat:'영적 주제', note:'은혜는 받을 자격이 없는 우리에게 하나님이 베푸시는 선물이며 믿음의 기초입니다.' },
  'Salvation': { name:'구원과 속량', cat:'영적 주제', note:'구원은 전적으로 하나님의 선물이며 오직 그리스도를 믿는 믿음으로 받습니다.' },
  'Heaven & Eternity': { name:'천국과 영원', cat:'영적 주제', note:'천국은 실제이며, 하나님께서 자기 백성과 영원히 함께하시는 곳입니다.' },
  'Strength': { name:'힘', cat:'영적 주제', note:'하나님은 피곤한 자에게 능력을 주시며 무능한 자에게 힘을 더하십니다.' },
  "God's Presence": { name:'하나님의 임재와 위로', cat:'영적 주제', note:'하나님의 임재는 건물에 제한되지 않으며 언제나 우리 가까이에 있습니다.' }
};

const TOPIC_VERSE_NOTE_KO = {
  '1 Corinthians 10:13':'í•˜ë‚˜ë‹˜ì€ ê°ë‹¹í•  ìˆ˜ ì—†ëŠ” ìœ í˜¹ì„ í—ˆë½í•˜ì§€ ì•Šìœ¼ì‹œê³  í”¼í•  ê¸¸ë„ ì£¼ì‹ ìž…ë‹ˆë‹¤.',
  '1 Corinthians 13:4':'ì‚¬ëž‘ì€ ì°¸ê³  ì–‘ë³´í•˜ë©° ìƒëŒ€ë¥¼ ì„¸ì›Œ ì£¼ëŠ” ì„±í’ˆì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '1 Corinthians 6:19':'ìš°ë¦¬ì˜ ëª¸ì´ ì„±ë ¹ì˜ ì „ì´ë¯€ë¡œ ê±°ë£©í•˜ê²Œ ì§€ì¼œì•¼ í•œë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '1 John 1:9':'ì£„ë¥¼ ìžë°±í•˜ë©´ í•˜ë‚˜ë‹˜ì´ ìš©ì„œí•˜ì‹ ê³  ê¹¨ë—í•˜ê²Œ í•˜ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '1 John 4:19':'ìš°ë¦¬ê°€ ì‚¬ëž‘í•  ìˆ˜ ìžˆëŠ” ì´ìœ ëŠ” í•˜ë‚˜ë‹˜ì´ ë¨¼ì € ìš°ë¦¬ë¥¼ ì‚¬ëž‘í•˜ì…¨ê¸° 때문ìž…ë‹ˆë‹¤.',
  '1 Peter 1:15':'ë¶€ë¥´ì‹ í•˜ë‚˜ë‹˜ì´ ê±°ë£©í•˜ì‹ë‹ˆ ìš°ë¦¬ë„ ì‚¶ ì „ì²´ì—ì„œ ê±°ë£©ì„ 따ë¼ì•¼ í•œë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '1 Peter 1:3':'í•˜ë‚˜ë‹˜ì˜ ê¸íœ¼ë¡œ ê·¸ë¦¬ìŠ¤ë„ ì•ˆì—ì„œ ì‚° ì†Œë§ì„ ì–»ì—ˆë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '1 Peter 3:15':'ë§ˆìŒì— ê·¸ë¦¬ìŠ¤ë„ë¥¼ ëª¨ì‹œê³  ì†Œë§ì— ëŒ€í•œ ì´ìœ ë¥¼ ì˜¨ìœ í•¨ìœ¼ë¡œ ì„¤ëª…í•  ì¤€ë¹„ë¥¼ í•˜ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '1 Peter 5:7':'ëª¨ë“  ì—¼ë ¤ë¥¼ í•˜ë‚˜ë‹˜ê»˜ ë§¡ê¸¸ ìˆ˜ ìžˆëŠ” ì´ìœ ëŠ” ê·¸ë¶„ì´ ìš°ë¦¬ë¥¼ ëŒë³´ì‹œê¸° 때문ìž…ë‹ˆë‹¤.',
  '1 Samuel 15:22':'í•˜ë‚˜ë‹˜ì€ í˜•ì‹ë³´ë‹¤ ìˆœì¢…í•˜ëŠ” ë§ˆìŒì„ ë” ê¸°ë»í•˜ì‹ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '1 Thessalonians 5:17':'ê¸°ë„ëŠ” íŠ¹ë³„í•œ ë•Œë§Œì´ ì•„ë‹ˆë¼ ì‚¶ ê°€ìš´ë°ì„œ ê³„ì† ë“œë ¤ì•¼ í•œë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '1 Thessalonians 5:18':'ëª¨ë“  ìƒí™©ì—ì„œë„ ê°ì‚¬í•˜ëŠ” ê²ƒì´ í•˜ë‚˜ë‹˜ì˜ 뜻ì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '1 Timothy 6:6':'ê²½ê±´ì— ìžì¡±í•¨ì´ ë”í•´ì§ˆ ë•Œ í° ìœ ìµì´ ìžˆë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '2 Corinthians 1:3-4':'í•˜ë‚˜ë‹˜ì€ ìš°ë¦¬ë¥¼ ìœ„ë¡œí•˜ì‹ê³  ê·¸ ìœ„ë¡œë¡œ ë‹¤ë¥¸ ì´ë¥¼ ìœ„ë¡œí•˜ê²Œ í•˜ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '2 Corinthians 12:9':'í•˜ë‚˜ë‹˜ì˜ ì€í˜œëŠ” ì¶©ë¶„í•˜ë©° ì•½í•  ë•Œ ê·¸ë¶„ì˜ ëŠ¥ë ¥ì´ ë” 분ëª…í•´ì§„ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '2 Corinthians 5:17':'ê·¸ë¦¬ìŠ¤ë„ ì•ˆì— ìžˆëŠ” ìžëŠ” ìƒˆë¡œìš´ í”¼ì¡°ë¬¼ì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '2 Corinthians 5:7':'ë³´ì´ëŠ” ê²ƒë³´ë‹¤ í•˜ë‚˜ë‹˜ì„ ë¯¿ëŠ” ë¯¿ìŒìœ¼ë¡œ ê±¸ì–´ê°€ì•¼ í•œë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  '2 Timothy 1:7':'í•˜ë‚˜ë‹˜ì´ ì£¼ì‹ ê²ƒì€ ë‘ë ¤ì›€ì´ ì•„ë‹ˆë¼ ëŠ¥ë ¥ê³¼ ì‚¬ëž‘ê³¼ ìžì œí•˜ëŠ” ë§ˆìŒì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Colossians 3:13':'ì£¼ë‹˜ì´ ìš©ì„œí•˜ì‹ 것ì²˜ëŸ¼ ì„œë¡œ ìš©ë‚©í•˜ê³  ìš©ì„œí•˜ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Colossians 3:15':'ê·¸ë¦¬ìŠ¤ë„ì˜ í‰ê°•ì´ ë§ˆìŒì„ 다스ë¦¬ê²Œ í•˜ê³  ê°ì‚¬í•˜ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Colossians 3:23':'ë¬´ìŠ¨ ì¼ì„ í•˜ë“ ì§€ ì‚¬ëžŒì—ê²Œ í•˜ë“¯í•˜ì§€ ë§ê³  ì£¼ë‹˜ê»˜ í•˜ë“¯ í•˜ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Ecclesiastes 4:9':'í•¨ê»˜í•˜ëŠ” ì‚¶ì€ í˜¼ìžì¼ ë•Œë³´ë‹¤ ë” í° ìœ ìµê³¼ ë„ì›€ì„ 준ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Ephesians 2:10':'ìš°ë¦¬ëŠ” í•˜ë‚˜ë‹˜ê»˜ì„œ 지ìœ¼ì‹ì´ìš´ 작품ìœ¼ë¡œ ì„ í•œ 일을 위해 부ë¥´ì‹심받ì•˜ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Ephesians 2:8':'êµ¬ì›ì€ í•˜ë‚˜ë‹˜ì˜ ì€í˜œë¡œ ì£¼ì–´ì§€ëŠ” ì„ ë¬¼ì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Ephesians 4:26':'í™”ê°€ ë‚˜ë„ ê·¸ê²ƒì„ ê¸¸ê²Œ í’ˆì§€ ë§ê³  ì£„ë¡œ ë„˜ì–´ê°€ì§€ ì•Šê²Œ í•˜ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Ephesians 4:32':'ì„œë¡œ ì¹œì ˆí•˜ê²Œ ëŒ€í•˜ê³  ê·¸ë¦¬ìŠ¤ë„ ì•ˆì—ì„œ ìš©ì„œë°›ì€ 것ì²˜ëŸ¼ ìš©ì„œí•˜ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Ephesians 5:25':'ê²°í˜¼ì€ ê·¸ë¦¬ìŠ¤ë„ì˜ í¬ìƒì  ì‚¬ëž‘ì„ 닮ì•„ê°€ëŠ” ë¶€ë¦„ì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Ephesians 6:4':'ìžë…€ë¥¼ 노ì—½ê²Œ í•˜ì§€ ë§ê³  ì£¼ì˜ 교훈ê³¼ 훈계ë¡œ 키우ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Galatians 5:22-23':'ì„±ë ¹ì˜ ì—´ë§¤ëŠ” í•˜ë‚˜ë‹˜ê»˜ì„œ ì‚¶ ì•ˆì— ìžë¼ë‚˜ê²Œ í•˜ì‹시는 거ë£©í•œ 성품ì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Galatians 6:2':'ì„œë¡œì˜ ì§ì„ ë‚˜ëˆ„ì–´ ì§€ëŠ” 것이 ê·¸ë¦¬ìŠ¤ë„ì˜ 법ì„ 이루ëŠ” 길ì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Hebrews 11:1':'ë¯¿ìŒì€ ë°”ë¼ëŠ” 것ì„ 확신í•˜ê³  ë³´ì§€ 못í•˜ëŠ” 것을 믿ëŠ” 증거ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Hebrews 12:14':'ëª¨ë“  ì‚¬ëžŒê³¼ í™”í‰í•˜ê²Œ ì§€ë‚´ë©° ê±°ë£©í•¨ì„ 따ë¼ê°€ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Hebrews 13:5':'í•˜ë‚˜ë‹˜ì´ ê²°ì½” ë²„ë¦¬ì§€ ì•Šìœ¼ì‹고 ë– ë‚˜ì§€ ì•Šìœ¼ì‹ë¯€ë¡œ ì¡±í•¨ì„ 배우ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Isaiah 26:3':'ì£¼ë‹˜ì„ ì˜ì§€í•˜ëŠ” ìžì˜ ë§ˆìŒì„ í•˜ë‚˜ë‹˜ì´ í‰ê°•ìœ¼ë¡œ 지켜 ì£¼ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Isaiah 40:31':'ì£¼ë¥¼ 앙ë§í•˜ëŠ” ìžëŠ” ìƒˆ 힘ì„ 얻ê³  다시 일ì–´ë‚œë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Isaiah 41:10':'ë‘ë ¤ì›€ì„ 이ê¸¸ 수 ìžˆëŠ” 이유ëŠ” í•˜ë‚˜ë‹˜ì´ 함께í•˜ì‹기 때문ìž…ë‹ˆë‹¤.',
  'Isaiah 46:4':'ë‚˜ì´ë“¤ì–´ê¹Œì§€ í•˜ë‚˜ë‹˜ì´ 붙ë“œì‹고 지키며 구원í•˜ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'James 1:19':'ë“£ê¸°ë¥¼ 빠ë¥´ê²Œ í•˜ê³  ë§í•˜ê¸°ì™€ í™”ë‚˜ê¸°ëŠ” ë”ë”” í•˜ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'James 1:2':'ì‹œë ¨ì„ 만나ë„ í•˜ë‚˜ë‹˜ì´ ì¸ë‚´ë¥¼ 기르ì‹시는 통ë¡œë¡œ 볼 수 있다ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'James 1:22':'ë§ì”€ì„ ë“£ëŠ” 데ë§Œ ë©ˆì¶”ì§€ ë§ê³  ì‹¤ì²œí•˜ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'James 1:5':'ì§€í˜œê°€ 부족í•˜ë©´ 후ížˆ 주ì‹시는 í•˜ë‚˜ë‹˜ê»˜ 구í•˜ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'James 4:8':'í•˜ë‚˜ë‹˜ê»˜ ê°€ê¹Œì´ 나ì•„ê°€ë©´ ê·¸ë¶„ë„ ìš°ë¦¬ì—ê²Œ 가까이 ì˜¤ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'James 5:16':'ì„œë¡œ ì£„ë¥¼ 고백하고 ê¸°ë„í•˜ë©´ 치유와 회복ì´ ìžˆë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Jeremiah 29:11':'í•˜ë‚˜ë‹˜ì€ ì†Œë§ìžˆëŠ” 미래ë¥¼ 주ì‹시ëŠ” 평ì•ˆì˜ 계획ì„ 가지ê³  ê³„ì‹ ë¶„ì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'John 1:16':'ê·¸ë¦¬ìŠ¤ë„ì˜ 충만í•¨ ì•ˆì—ì„œ ìš°ë¦¬ê°€ ì€í˜œ 위ì— ì€í˜œë¥¼ 받ëŠ”ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'John 11:25':'ì˜ˆìˆ˜ë‹˜ì€ ë¶€í™œê³¼ ìƒëª…ì´ì‹며 ê·¸ë¥¼ ë¯¿ëŠ” ìžëŠ” 영ì›í•œ ì†Œë§ì„ 가진ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'John 11:35':'ì˜ˆìˆ˜ë‹˜ë„ ëˆˆë¬¼í˜ë¦¬ì‹œëŠ” ë¶„ì´ì‹€ë¡œ ìš°ë¦¬ ìŠ¬í””ì— 공감í•˜ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'John 14:15':'ì‚¬ëž‘ì€ ì˜ˆìˆ˜ë‹˜ì˜ 말씀ì„ 지키ëŠ” 순ì¢…ìœ¼ë¡œ 드ëŸ¬난ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'John 14:2':'í•˜ë‚˜ë‹˜ì˜ 집ì— ìš°ë¦¬ë¥¼ 위한 처ì†Œê°€ 예비ë˜ì–´ 있다ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'John 14:26':'ì„±ë ¹ë‹˜ì€ 우리ë¥¼ 가르치고 말씀ì„ 생각ë‚˜ê²Œ í•˜ì‹시는 ë¶„ì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'John 14:27':'ì˜ˆìˆ˜ë‹˜ì´ 주ì‹시는 í‰ê°•ì€ 세상ì´ 줄 수 없는 참된 평ì•ˆì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'John 15:11':'ì˜ˆìˆ˜ë‹˜ì˜ 기쁨ì´ ìš°ë¦¬ ì•ˆì— 머ë¬¼ê²Œ í•˜ì—¬ ì¶©ë§Œ한 기쁨ì„ 누리ê²Œ í•˜ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'John 3:16':'í•˜ë‚˜ë‹˜ì´ 세상ì„ 사랑í•˜ì‚¬ 독생ìžë¥¼ 주ì‹œê³  ë¯¿ëŠ” ìžë¥¼ 구원í•˜ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'John 4:24':'ì°¸ëœ 예ë°°ëŠ” 영ê³¼ 진리ë¡œ í•˜ë‚˜ë‹˜ê»˜ 드ë ¤ì•¼ í•œë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'John 8:36':'ì˜ˆìˆ˜ë‹˜ì´ 자유롭게 í•˜ì‹œë©´ 죄ì™€ 묶임ì—ì„œ 참ìœ¼ë¡œ 풀ë ¤ë‚œë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Joshua 1:9':'ê°•í•˜ê³  담대í•˜ë¼ëŠ” 명ë ¹ì˜ 이유ëŠ” í•˜ë‚˜ë‹˜ì´ 언제ë‚˜ 함께í•˜ì‹기 때문ìž…ë‹ˆë‹¤.',
  'Lamentations 3:22-23':'í•˜ë‚˜ë‹˜ì˜ ì¸ìžì™€ 긍휼ì€ ë§¤ì¼ 새ë¡­ê²Œ 우리ì—ê²Œ 임í•œë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Mark 9:24':'믿음ì´ 약í•´ë„ 그 연약í•¨ì„ 솔직ížˆ 아ë¢°ì—´ ì£¼ë‹˜ê»˜ ë„ì›€ì„ 구할 수 있다ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Matthew 11:28':'ìˆ˜ê³ í•˜ê³  ë¬´ê±°ìš´ ì§ ì§„ ìžë“¤ì„ ì˜ˆìˆ˜ë‹˜ì´ 쉬ê²Œ í•˜ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Matthew 25:40':'ìž‘ì€ ìžì—ê²Œ 베í‘¼ ì„¬ê¹€ì´ 곧 ì£¼ë‹˜ê»˜ í•œ ì„¬ê¹€ì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Matthew 28:19':'ëª¨ë“  민족ì„ 제ìžë¡œ 삼으ë¼ëŠ” 전ë„ì˜ 사ëª…ì´ 주ì–´ì¡Œë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Matthew 28:20':'ì˜ˆìˆ˜ë‹˜ì€ 세상 ëë‚ ê¹Œì§€ 함께í•˜ì‹겠ë‹¤ê³  약속í•˜ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Matthew 5:4':'ìŠ¬í¼í•˜ëŠ” ìžëŠ” í•˜ë‚˜ë‹˜ì˜ 위ë¡œë¥¼ 받ëŠ” ë³µì´ 있다ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Matthew 6:33':'ë¨¼ì € í•˜ë‚˜ë‹˜ì˜ 나ë¼ì™€ 의ë¥¼ 구í•˜ë©´ 필요한 것ì„ 더í•˜ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Matthew 6:34':'ë‚´ì¼ì˜ 염려ë¥¼ 미ë¦¬ 짊어ì§€ ë§ê³  오늘ì„ ì£¼ë‹˜ê»˜ 맡기ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Philippians 1:21':'ê·¸ë¦¬ìŠ¤ë„ë¥¼ 위해 ì‚¬ëŠ” 것이 참ëœ 유익ì´ë©° 죽음ë„ 주ì•ˆì— ì†Œë§ì´ 될 수 있다ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Philippians 3:20':'ìš°ë¦¬ì˜ 시민권ì€ 하ëŠ˜ì— ìžˆê³  그ê³³ì—ì„œ êµ¬ì£¼ë¥¼ 기다린ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Philippians 4:11':'ì–´ë–¤ 형편ì—ì„œë„ 자ì¡±í•˜ëŠ” ì€í˜œë¥¼ 배ìš°ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Philippians 4:19':'í•˜ë‚˜ë‹˜ì´ ê·¸ë¦¬ìŠ¤ë„ ì•ˆì—ì„œ ëª¨ë“  필요ë¥¼ 채워 주ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Philippians 4:4':'ì£¼ë‹˜ ì•ˆì—ì„œ 항상 기뻐í•˜ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Philippians 4:6':'ì—¼ë ¤í•˜ê¸°ë³´ë‹¤ 기ë„ì™€ 감ì‚¬ë¡œ 하ë‚˜ë‹˜ê»˜ 아ë¢°ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Philippians 4:7':'í•˜ë‚˜ë‹˜ì˜ í‰ê°•ì´ ë§ˆìŒê³¼ 생각ì„ 지켜 ì£¼ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Proverbs 15:1':'ë¶€ë“œëŸ¬ìš´ ëŒ€ë‹µì€ 분ë…¸ë¥¼ 누그러뜨ë¦¬ê³  거친 ë§ì€ 더 í™”ë¥¼ 일으킨ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Proverbs 16:3':'ì¼ì„ ì£¼ë‹˜ê»˜ 맡ê¸°ë©´ ê·¸ë¶„ì´ 길ì„ 세ì›Œ 주ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Proverbs 16:31':'ë°±ë°œì€ 의ë¡œìš´ 길ì—ì„œ 얻ëŠ” 영예ë¡œìš´ 관ì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Proverbs 18:22':'ë°°ìš°ìžë¥¼ 얻ëŠ” 것은 ì£¼ë‹˜ê»˜ì„œ ì£¼ì‹신 ì„ í•œ 은총ì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Proverbs 22:6':'ìžë…€ì—ê²Œ 마땅í•œ 길ì„ 가르치ëŠ” 것이 평ìƒì— 귀í•œ 열ë§¤ë¥¼ ë‚³ëŠ”ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Proverbs 24:16':'ì˜ì¸ì€ 넘어ì§€ë„ 다시 일ì–´ë‚œë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Proverbs 3:5-6':'ìžê¸° 명ì² ë³´ë‹¤ ì£¼ë‹˜ì„ 신ë¢°í•˜ë©´ ê·¸ë¶„ì´ 길ì„ 곧ê²Œ 인ë„í•˜ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 100:4':'감ì‚¬ì™€ 찬ì†¡ìœ¼ë¡œ í•˜ë‚˜ë‹˜ ì•žì— 나ì•„ê°€ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 103:12':'í•˜ë‚˜ë‹˜ì´ 죄ë¥¼ ë©€ë¦¬ 옮ê²¨ 더 이상 붙들ì§€ ì•Šìœ¼ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 119:105':'í•˜ë‚˜ë‹˜ì˜ 말씀ì€ ë°œê±¸ìŒì„ 비추ëŠ” 등ë¶ˆì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 127:2':'ì£¼ë‹˜ì´ 사랑í•˜ëŠ” 자ì—ê²Œ 쉼ì„ 주ì‹시ë¯€ë¡œ 과ë„í•œ 염려ë¥¼ 내려놓으ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 127:3':'ìžë…€ëŠ” í•˜ë‚˜ë‹˜ê»˜ì„œ ì£¼ì‹신 기업ì´ìž 축복ì´ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 139:7':'í•˜ë‚˜ë‹˜ì˜ 영ê³¼ 임ìž¬ë¥¼ 피í•  곳ì´ ì—†ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 145:18':'ì£¼ë‹˜ì€ 진ì‹¤í•˜ê²Œ ë¶€ë¥´ëŠ” 모든 자ì—ê²Œ 가까이 í•˜ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 147:3':'í•˜ë‚˜ë‹˜ì´ 상í•œ 마음ì„ 고치고 상ì²˜ë¥¼ 싸매ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 16:11':'ì£¼ë‹˜ì˜ 임ìž¬ 안ì— ìƒëª…ì˜ 길ê³¼ ì¶©ë§Œí•œ 기쁨ì´ 있다ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 23:1':'ì£¼ë‹˜ì´ 목ìžë˜ì‹면 필요한 것을 부족í•¨ 없이 채워 주ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 23:4':'ì–´ë‘운 골짜ê¸¸ì„ 지나ë„ ì£¼ë‹˜ì´ 함께í•˜ì‹니 두려워í•˜ì§€ 않아ë„ ëœë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 34:18':'í•˜ë‚˜ë‹˜ì€ 상í•œ 마음ì— 가까이 í•˜ì‹시ê³  통íšŒí•˜ëŠ” 영ì„ 구원í•˜ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 37:24':'ë„˜ì–´ì§€ë„ ì™„ì „ížˆ ì—Žë“œëŸ¬ì§€ì§€ 않는 이유ëŠ” ì£¼ë‹˜ì´ 손ìœ¼ë¡œ 붙들ì‹시ê¸° 때문ìž…ë‹ˆë‹¤.',
  'Psalm 4:8':'ì£¼ë‹˜ì´ 안전í•˜ê²Œ í•˜ì‹시ë¯€ë¡œ 평ì•ˆížˆ 눕ê³  ìžë„ ëœë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 41:3':'ë³‘ìƒì— ìžˆëŠ” 자ë¥¼ ì£¼ë‹˜ì´ 붙ë“œì‹ê³  회ë³µ시키ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 42:11':'ë‚™ì‹¬í•œ 영í˜¼ì—ê²Œ í•˜ë‚˜ë‹˜ì„ 바ë¼ë³´ë¼ê³  다시 소망í•˜ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 51:10':'í•˜ë‚˜ë‹˜ê»˜ 정í•œ 마음ê³¼ 새ë¡œìš´ 영ì„ 창조í•´ ì£¼ì‹도록 구í•˜ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Psalm 95:6':'ì£¼ë‹˜ ì•žì— 엎ë“œë¦¬ê³  경배í•˜ëŠ” 것이 마땅í•˜ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Revelation 21:4':'í•˜ë‚˜ë‹˜ì´ 눈ë¬¼ê³¼ 죽ìŒê³¼ ê³ í†µì„ 없애ì‹시는 영ì›í•œ 날ì´ 온ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Romans 1:16':'ë³µìŒì€ 믿ëŠ” ìžë¥¼ 구원í•˜ëŠ” í•˜ë‚˜ë‹˜ì˜ 능ë ¥ì´ë¯€ë¡œ 부끄ëŸ¬워í•˜ì§€ ë§ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Romans 10:9':'ì˜ˆìˆ˜ë‹˜ì„ ì£¼ë¡œ 시ì¸í•˜ê³  ë¶€í™œì„ 믿ìœ¼ë©´ 구원을 받ëŠ”ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Romans 12:1':'ì‚¶ ì „ì²´ë¥¼ í•˜ë‚˜ë‹˜ê»˜ ë“œë¦¬ëŠ” 것이 ì°¸ëœ 예ë°°ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Romans 12:18':'í•  수 ìžˆëŠ” í•œ 모든 ì‚¬ëžŒê³¼ í™”ëª©í•˜ê²Œ 지내ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Romans 12:2':'ì„¸ìƒì— ë™í™”ë˜ì§€ ë§ê³  ë§ˆìŒì„ 새ë¡­ê²Œ 하ì—¬ í•˜ë‚˜ë‹˜ì˜ 뜻ì„ 분ë³„í•˜ë¼ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Romans 15:13':'ì†Œë§ì˜ í•˜ë‚˜ë‹˜ì´ 믿ëŠ” 자ì—ê²Œ 기쁨ê³¼ 평ì•ˆì„ 주ì‹셔 ì†Œë§ì´ 넘치ê²Œ í•˜ì‹신ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Romans 6:14':'ê·¸ë¦¬ìŠ¤ë„ ì•ˆì—ì„œ ì€í˜œê°€ 죄ì˜ 지ë°°ë¥¼ 끊ê²Œ í•œë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Romans 8:18':'현재ì˜ 고ë‚œì€ 장ì°¨ 나타ë‚  영광ê³¼ 비교í•  수 없ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.',
  'Romans 8:28':'í•˜ë‚˜ë‹˜ì„ ì‚¬ëž‘í•˜ëŠ” 자ë“¤ì—ê²Œ ëª¨ë“  것ì´ 합í•˜ì—¬ 선ì„ 이룬ë‹¤ëŠ” 뜻ìž…ë‹ˆë‹¤.'
};

function normalizeTopicVerseReference(ref){
  return String(ref||'')
    .replace(/\s*\(ESV\)\s*/g,'')
    .replace(/&ndash;|–|—/g,'-')
    .replace(/(\d)\?(\d)/g,'$1-$2')
    .replace(/\s+/g,' ')
    .trim();
}

function injectTopicVerseKoreanNotes(){
  document.querySelectorAll('.topic-panel .dv-content').forEach(content=>{
    if(content.querySelector('.ko-key-note')) return;
    const cite=content.querySelector('cite');
    if(!cite) return;
    const ref=normalizeTopicVerseReference(cite.textContent||'');
    const note=TOPIC_VERSE_NOTE_KO[ref];
    if(!note) return;
    const noteEl=document.createElement('p');
    noteEl.className='ko-key-note';
    noteEl.textContent='한글 핵심 뜻: '+note;
    cite.insertAdjacentElement('afterend',noteEl);
  });
}

function getLocalizedTopicResult(topic, lang){
  if(lang !== 'ko') return topic;
  const localized = TOPIC_RESULT_KO[topic.name];
  if(!localized) return topic;
  return Object.assign({}, topic, localized);
}

injectTopicVerseKoreanNotes();

function openEmotion(name){
  const d=EMOTIONS[name];if(!d)return;
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  const localized=lang==='ko' ? (EMOTION_MODAL_KO[name] || null) : null;
  document.getElementById('m-icon').textContent=d.icon;
  document.getElementById('m-cat').textContent=lang==='ko'?'감정':'Emotion';
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

// ═══════════════════════════════════════
// TOPIC ACCORDION
// ═══════════════════════════════════════
function tgl(btn){
  const panel=btn.nextElementSibling;
  const isOpen=btn.classList.contains('open');
  const col=btn.closest('.topic-col-card');
  col.querySelectorAll('.topic-btn.open').forEach(b=>{b.classList.remove('open');b.nextElementSibling.classList.remove('open');});
  if(!isOpen){btn.classList.add('open');panel.classList.add('open');setTimeout(()=>btn.scrollIntoView({behavior:'smooth',block:'nearest'}),50);}
}

// ═══════════════════════════════════════
// SEARCH ENGINE
// ═══════════════════════════════════════
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
  슬픔:'Sorrow & Grief',
  두려움:'Fear',
  소망:'Hope',
  힘:'Strength',
  평안:'Peace',
  용서:'Forgiveness',
  재정:'Money & Financial Worry',
  돈:'Money & Financial Worry',
  불안:'Anxiety & Worry',
  외로움:'Loneliness',
  질병:'Illness & Sickness',
  아픔:'Illness & Sickness',
  결혼:'Marriage & Family',
  가정:'Marriage & Family',
  믿음:'Faith & Trust',
  신뢰:'Faith & Trust',
  기도:'Prayer',
  구원:'Salvation',
  천국:'Heaven & Eternity',
  영원:'Heaven & Eternity',
  임재:"God's Presence",
  위로:'Grief & Funeral Comfort',
  장례:'Grief & Funeral Comfort',
  죽음:'Death & Dying',
  임종:'Death & Dying'
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
      ? '"'+inp.value+'"에 대한 성경 구절을 찾지 못했습니다'
      : 'No Bible verses found for "'+inp.value+'"';
    rc.textContent='';
  }
  else{
    const displayQuery = lang==='ko'
      ? getLocalizedTopicResult(matched[0], 'ko').name
      : inp.value;
    rt.textContent=lang==='ko'
      ? '"'+displayQuery+'"에 대한 성경 구절'
      : 'Bible Verses for "'+displayQuery+'"';
    rc.textContent=lang==='ko'
      ? matched.length+'개 주제 찾음'
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
// Self-contained tab switcher for search results — uses pure DOM traversal, no getElementById
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
        grief:'슬픔',
        fear:'두려움',
        lonely:'외로움',
        sick:'질병과 아픔',
        anxiety:'불안',
        forgive:'용서',
        hope:'소망',
        strength:'낙심',
        money:'재정과 돈 걱정',
        peace:'평안',
        marriage:'결혼과 가정',
        death:'죽음과 임종'
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

// ── DUAL TRANSLATION HELPER ──
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
// ═══════════════════════════════════════
// SIDEBAR TOGGLE (MOBILE)
// ═══════════════════════════════════════
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

// ═══════════════════════════════════════
// TRAVEL GALLERY — LIGHTBOX
// ═══════════════════════════════════════
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

// ═══════════════════════════════════════
// PHOTO UPLOAD → GALLERY
// ═══════════════════════════════════════
const STORAGE_JOURNAL='lifeword.travelJournal.v2';
const STORAGE_GALLERY='lifeword.travelGallery.v2';
const TRAVEL_IMAGE_MAX_WIDTH=1600;
const TRAVEL_IMAGE_MAX_HEIGHT=1600;
const TRAVEL_IMAGE_QUALITY=.82;
const DEFAULT_GALLERY_ITEMS=[
  {id:'g1',src:'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=500&q=75',caption:'Türkiye - Ancient Churches'},
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
// ─── GALLERY MODAL ───
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
    <button class="gallery-delete" onclick="deletePhoto(this)" title="Delete photo">✕</button>`;
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
      <p class="journal-card-title">📷 ${title}</p>
      <p class="journal-card-text">${text}</p>
      ${verse?`<div class="journal-verse"><p>&ldquo;${verse}&rdquo;</p></div>`:''}
    </div>`;
  grid.insertBefore(card,grid.firstChild);
}

// ═══════════════════════════════════════
// TRAVEL JOURNAL FORM
// ═══════════════════════════════════════
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
        <p class="journal-card-title">📷 ${escapeHtml(item.title)}</p>
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
        <p class="journal-card-title">ðŸ“· ${escapeHtml(item.title)}</p>
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
    if(normalized==='podcast')return '듣기';
    if(normalized==='powerpoint')return '강의 열기';
    if(normalized==='journal')return '묵상 읽기';
    return '글 읽기';
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
    if(normalized==='podcast') return '오디오 듣기';
    if(normalized==='powerpoint') return '강의 열기';
    if(normalized==='journal') return '묵상 읽기';
    return '글 읽기';
  }
  if(normalized==='podcast') return 'Listen Now';
  if(normalized==='powerpoint') return 'Open Lesson';
  if(normalized==='journal') return 'Read Journal';
  return 'Read Article';
}

function getLivingWordOpenAudioLabel(){
  const lang=typeof window.getSiteLanguage==='function' ? window.getSiteLanguage() : 'en';
  return lang==='ko' ? '오디오 직접 열기' : 'Open Audio';
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
      +'<div class="guestbook-entry-name">'+escapeHtml(entry.name||(lang==='ko'?'방문자':'Guest'))+'</div>'
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
    alert(lang==='ko'?'이름과 메시지를 모두 입력해 주세요.':'Please enter both your name and your message.');
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
  if(Number.isNaN(date.getTime()))return lang==='ko'?'최근 메시지':'Recent Message';
  return date.toLocaleDateString(lang==='ko'?'ko-KR':undefined,{year:'numeric',month:'short',day:'numeric'});
}

function getLocalizedPhotoCount(count){
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  if(lang==='ko')return count+'개의 사진';
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
    const displayTitle=item.language==='ko' ? title.replace(/ 자전거 여행$/,'\n자전거 여행') : title;
    const displaySummary=item.language==='ko' ? summary.replace(/ 자전거 여행$/,'\n자전거 여행') : summary;
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
  const replyLabel=lang==='ko'?'운영자 답글':'Reply from Admin';
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
      +'<div class="guestbook-entry-name">'+escapeHtml(entry.name||(lang==='ko'?'방문자':'Guest'))+'</div>'
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
    alert(lang==='ko'?'이름과 메시지를 모두 입력해 주세요.':'Please enter both your name and your message.');
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
    alert(lang==='ko'?'ì´ë¦„ê³¼ ë©”ì‹œì§€ë¥¼ ëª¨ë‘ ìž…ë ¥í•´ ì£¼ì„¸ìš”.':'Please enter both your name and your message.');
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

