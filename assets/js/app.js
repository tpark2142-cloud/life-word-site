// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// MODAL (for emotion cards)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
const EMOTION_MODAL_KO = {
  Joy: { title:'기쁨', note:'참된 기쁨은 변하는 환경이 아니라 변함없는 하나님의 임재 안에 있습니다.' },
  Sorrow: { title:'슬픔', note:'하나님은 우리의 눈물을 외면하지 않으시고 상한 마음 가까이 오십니다.' },
  Peace: { title:'평안', note:'하나님이 주시는 평안은 폭풍이 사라진 뒤가 아니라 폭풍 속에서도 마음을 지켜 줍니다.' },
  Hope: { title:'소망', note:'성경의 소망은 하나님의 약속에 뿌리를 둔 흔들리지 않는 기대입니다.' },
  Fear: { title:'두려움', note:'하나님이 우리와 함께하신다는 사실을 기억할 때 두려움의 힘은 약해집니다.' },
  Anxiety: { title:'불안', note:'불안은 우리를 돌보시는 하나님께 염려를 맡기라는 초대입니다.' },
  Loneliness: { title:'외로움', note:'하나님의 임재는 거리나 고립에 제한되지 않습니다. 하나님은 늘 가까이 계십니다.' },
  Anger: { title:'분노', note:'분노는 죄가 되기 전에 하나님께 맡기고 다스려야 합니다.' },
  Gratitude: { title:'감사', note:'감사는 기다리는 감정이 아니라 삶을 새롭게 바라보게 하는 거룩한 습관입니다.' },
  Guilt: { title:'죄책감과 후회', note:'죄책감은 우리를 정죄에 머물게 하기보다 용서가 완전한 십자가로 이끕니다.' },
  Love: { title:'사랑', note:'모든 사랑의 기초는 하나님의 사랑이며, 그 사랑이 먼저 우리에게 왔습니다.' },
  Discouragement: { title:'낙심', note:'가장 낮은 자리에서도 하나님은 멀리 계시지 않으며 새 힘을 주십니다.' }
};

const KOREAN_VERSE_BY_REF = {
  'Philippians 4:13': '내게 능력 주시는 그리스도를 통하여 내가 모든 것을 할 수 있느니라.',
  'Philippians 4:4': '주 안에서 항상 기뻐하라. 내가 다시 말하노니 기뻐하라.',
  'Psalm 16:11': '주께서 내게 생명의 길을 보여 주시리니 주의 면전에는 충만한 기쁨이 있고 주의 오른편에는 즐거움이 영원무궁토록 있나이다.',
  'John 15:11': '내가 이런 것을 너희에게 말한 것은 나의 기쁨이 너희 안에 머물러 있어 너희의 기쁨이 충만하게 하려는 것이라.',
  'Psalm 34:18': '주께서 마음이 상한 자들을 가까이하시며 참회하는 영이 있는 자를 구원하시는도다.',
  'Matthew 5:4': '애통하는 자들은 복이 있나니, 그들이 위로를 받을 것임이요,',
  'Matthew 6:33': '오히려 너희는 먼저 하나님의 나라와 그분의 의를 구하라. 그리하면 이 모든 것을 너희에게 더해 주시리라.',
  'Philippians 4:7': '그리하면 모든 지각을 초월하시는 하나님의 평강이 그리스도 예수 안에서 너희의 마음과 생각을 지키시리라.',
  'John 11:35': '예수께서 우시더라.',
  'John 14:27': '내가 너희에게 화평을 남겨 두나니 나의 화평을 너희에게 주노라. 내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니, 너희는 마음에 근심하지 말고, 두려워하지도 말라.',
  'Isaiah 26:3': '주께서는 마음을 주께 의탁하는 사람을 완전한 화평 속에 지키시리니 이는 그 사람이 주를 의뢰함이니이다.',
  'Romans 15:13': '이제 소망의 하나님께서 너희를 모든 기쁨과 평강으로 믿음 안에서 충만케 하시어 성령의 능력으로 소망이 넘치게 하시기를 원하노라.',
  'Jeremiah 29:11': '이는 내가 너희를 향하여 생각하는 그 생각들을 내가 앎이니, 곧 화평의 생각이요, 재앙이 아니라. 기대하던 끝을 너희에게 주리라. 주가 말하노라.',
  '1 Peter 1:3': '하나님, 곧 우리 주 예수 그리스도의 아버지를 송축하리로다. 그분은 그의 풍성하신 자비하심을 따라 죽은 자들로부터의 예수 그리스도의 부활로 인하여, 우리를 거듭나게 하사 산 소망을 갖게 하셨으며',
  'Isaiah 41:10': '너는 두려워 말라, 내가 너와 함께함이라. 놀라지 말라, 내가 네 하나님임이라. 내가 너를 강건하게 하리라. 정녕, 내가 너를 도우리라. 정녕, 내가 내 의의 오른손으로 너를 높이리라.',
  'Psalm 23:4': '정녕, 내가 죽음의 그림자의 골짜기를 지날지라도 악을 두려워하지 않으리니 이는 주께서 나와 함께 계심이요, 주의 막대기와 주의 지팡이가 나를 위로하심이라.',
  'Psalm 30:5': '그의 분노는 잠시뿐이나 그의 은총은 생명 안에 있도다. 울음이 밤새도록 머물 수 있으나 기쁨은 아침에 오는도다.',
  '2 Timothy 1:7': '하나님께서 우리에게 주신 것은 두려워하는 영이 아니라 능력과 사랑과 건전한 생각의 영이라.',
  '1 Peter 5:7': '너희의 염려를 다 하나님께 맡기라. 이는 그분께서 너희를 돌보심이니라.',
  'Philippians 4:6': '아무것도 염려하지 말고 다만 모든 일에 기도와 간구로 너희의 구하는 것들을 감사함으로 하나님께 알려지게 하라.',
  'Matthew 6:34': '그러므로 내일을 위하여 염려하지 말라. 내일 일은 내일 염려할 것이요, 그 날의 재앙은 그 날로 충분하니라.',
  'Psalm 23:1-2': '주는 나의 목자시니, 내가 부족한 것이 없으리로다. 그가 나를 푸른 초장에 눕게 하시며 잔잔한 물가로 나를 인도하시는도다.',
  'Proverbs 16:31': '의의 길에서 얻게 된다면 흰머리는 영광의 면류관이니라.',
  'Isaiah 46:4': '너희의 노년에 이르러서도 내가 너희를 백발이 될 때까지도 내가 너희를 품을 것이라. 내가 지었으니 내가 안고 품을 것이며 너희들을 건져내리라.',
  'Philippians 1:21': '이는 내게 사는 것이 그리스도니 죽는 것도 유익함이라.',
  'Psalm 147:3': '그는 마음이 상한 자들을 고치시며 그들의 상처들을 싸매어 주시는도다.',
  'Psalm 41:3': '주께서는 병상에서 그에게 힘을 돋우시며 그의 병든 때에 그의 모든 침상을 고치시리이다.',
  '2 Corinthians 12:9': '주께서 내게 말씀하시기를 “내 은혜가 네게 충분하도다. 이는 내 능력이 약한 데서 온전하게 됨이니라.”고 하셨느니라. 그러므로 내가 오히려 매우 기쁘게 나의 약한 것들을 자랑하리니 이는 그리스도의 능력이 내게 거하게 하려 함이라.',
  'John 11:25': '예수께서 그녀에게 말씀하시기를 “나는 부활이요, 생명이니 나를 믿는 자는 죽어도 살 것이며',
  '1 Thessalonians 4:13-14': '형제들아, 잠든 자들에 관해서는 너희가 모르게 되는 것을 원치 아니하노니 이는 너희가 소망이 없는 다른 사람들과 같이 슬퍼하지 않게 하려는 것이라.',
  'Ephesians 4:32': '너희는 서로 친절하고 다정다감하며 서로 용서하되 하나님께서 그리스도를 위하여 너희를 용서하신 것같이 하라.',
  'Colossians 3:13': '만일 어떤 사람이 누구에게 불평이 있으면 서로 용납하고, 서로 용서하기를 마치 그리스도께서 너희를 용서하신 것같이 너희도 그리하라.',
  'Matthew 6:14': '만일 너희가 사람들의 허물을 용서하면 하늘에 계신 너희 아버지께서도 너희를 용서하실 것이니라.',
  'Hebrews 13:5': '너희의 생활방식에 탐욕이 없도록 하고 현재 가진 것들로 만족하라. 이는 그가 말씀하시기를 “내가 너를 떠나지 아니하고 너를 버리지 아니하리라.”고 하셨음이라.',
  'Psalm 139:7': '내가 주의 영으로부터 벗어나 어디로 가며 주의 면전에서 벗어나 어디로 피하리이까?',
  'Matthew 28:20': '내가 너희에게 명령한 모든 것을 가르쳐 지키게 하라. 보라, 내가 세상 끝까지 너희와 항상 함께 있으리라.”고 하시더라. 아멘.',
  'Isaiah 40:31': '오직 주를 앙망하는 자는 자기의 힘을 새롭게 하리니 독수리처럼 날개로 치솟을 것이요, 그들이 달려도 피곤치 않으며 걸어도 곤비치 아니하리라.',
  'Matthew 11:28': '수고하고 무거운 짐진 자들아, 다 내게로 오라. 그러면 내가 너희에게 쉼을 주리라.',
  'Psalm 46:1': '하나님은 우리의 피난처요 힘이시며, 고난 중에 나타나시는 도움이시라.',
  'Psalm 55:22': '네 짐을 주께 맡기라. 그분께서 너를 붙드시며, 의인이 결코 흔들리도록 허락하지 아니하시리로다.',
  'Proverbs 3:5-6': '네 마음을 다하여 주를 신뢰하고, 네 자신의 명철을 의지하지 말라. 네 모든 길들에서 그를 인정하라. 그리하면 그가 네 길들을 지도하시리라.',
  'James 1:5': '너희 중에 누가 지혜가 부족하면, 모든 사람에게 아낌없이 주시고 꾸짖지 아니하시는 하나님께 구하라. 그러면 그분께서 주실 것이라.',
  'Psalm 32:8': '네가 가야 할 길을 내가 네게 지시하고 가르치리니 내가 너를 내 눈으로 인도하리라.',
  'Mark 9:24': '“주여, 내가 믿나이다. 나의 믿음 없음을 도와주소서.”라고 하더라.',
  'Hebrews 11:1': '이제 믿음은 바라는 것들에 대한 실상이요, 보이지 않는 것들에 대한 증거니,',
  'Romans 10:17': '그러므로 믿음은 들음에서 나오며 들음은 하나님의 말씀에 의해서니라.',
  'Matthew 6:31-33': '그러므로 “무엇을 먹을까?” “무엇을 마실까?” “무엇을 입을까?”라고 말하며 염려하지 말라. (이런 것들은 모두 이방인들이 구하는 것이라.) 하늘에 계신 너희 아버지께서는 너희에게 이런 모든 것이 필요한 줄 아시느니라. 오히려 너희는 먼저 하나님의 나라와 그분의 의를 구하라. 그리하면 이 모든 것을 너희에게 더해 주시리라.',
  'Philippians 4:19': '그러나 나의 하나님께서 그리스도 예수를 통하여 영광 가운데서 그의 풍요함을 따라 너희의 모든 필요를 채워 주실 것이라.',
  'Proverbs 16:3': '네 행사를 주께 맡기라. 그리하면 네 생각들이 굳게 서리라.',
  'Psalm 37:25': '내가 어려서부터 지금 늙기까지 의인이 버림받거나 그의 씨가 걸식함을 아직 보지 못하였도다.'
  ,'Ephesians 4:26': '화를 내되 죄는 짓지 말고 해가 지도록 분노를 품지 말며'
  ,'James 1:19': '그러므로 나의 사랑하는 형제들아, 사람마다 듣기는 빨리 하고, 말하기는 더디 하며, 성내기도 더디 하라.'
  ,'James 1:19-20': '그러므로 나의 사랑하는 형제들아, 사람마다 듣기는 빨리 하고, 말하기는 더디 하며, 성내기도 더디 하라. 사람의 분노는 하나님의 의를 이루지 못함이라.'
  ,'Proverbs 15:1': '유순한 대답은 진노를 삭이나, 과격한 말은 화를 일으키느니라.'
  ,'Romans 1:16': '내가 그리스도의 복음을 부끄러워하지 아니하노니 이는 이 복음이 믿는 모든 사람을 구원에 이르게 하는 하나님의 능력이 됨이라. 첫째는 유대인에게요, 또한 헬라인에게로다.'
  ,'1 Peter 3:15': '그러나 너희 마음속에서 주 하나님을 거룩하게 여기며 너희 안에 있는 소망에 관한 이유를 묻는 모든 사람에게 답변할 것을 온유와 두려움으로 항상 예비하고'
  ,'Philippians 3:20': '우리의 시민권은 하늘에 있으므로 우리가 그곳으로부터 오실 구주이신 주 예수 그리스도를 기다리고 있느니'
  ,'James 4:8': '하나님께 가까이 다가가라. 그리하면 그분께서도 너희에게 가까이 다가가시리라. 너희 죄인들아, 손을 깨끗이 하라. 너희 두 마음을 품은 자들아, 마음을 정결케 하라.'
  ,'Psalm 145:18': '주께서는 자기를 부르는 모든 사람들과 자기를 진실로 부르는 모든 자들에게 가까이하시는도다.'
  ,'1 Thessalonians 5:18': '모든 일에 감사하라. 이것은 그리스도 예수 안에서 너희에 관한 하나님의 뜻이니라.'
  ,'Psalm 100:4': '감사함으로 그의 문들로 들어가고 찬양으로 그의 뜰들로 들어가라. 그분께 감사하고 그의 이름을 송축하라.'
  ,'Colossians 3:15': '하나님의 화평이 너희 마음을 다스리게 하라. 이를 위하여 너희가 한 몸으로 부르심을 받았나니 또한 너희는 감사하는 자가 되라.'
  ,'John 3:16': '하나님께서 세상을 이처럼 사랑하셔서 그의 독생자를 주셨으니, 이는 그를 믿는 사람은 누구든지 멸망하지 않고 영생을 얻게 하려 하심이니라.'
  ,'1 Corinthians 13:4': '사랑은 오래 참고 친절하며 사랑은 시기하지 아니하고 사랑은 자랑하지 아니하며 교만하지 아니하고'
  ,'1 John 4:19': '우리가 그분을 사랑하는 것은 그분께서 먼저 우리를 사랑하셨음이라.'
  ,'1 John 1:9': '우리가 우리 죄들을 자백하면 그는 신실하시고 의로우셔서 우리 죄들을 용서하시며, 모든 불의에서 우리를 깨끗하게 하시느니라.'
  ,'Psalm 103:12': '동이 서에서 먼 것같이 그가 우리의 죄과들을 우리로부터 멀리 옮기셨으며,'
  ,'Lamentations 3:22-23': '주의 긍휼로 인하여 우리가 진멸되지 아니함은 그의 자비가 무궁함이니이다. 이것들이 아침마다 새로우니 주의 신실하심이 크시도소이다.'
  ,'Joshua 1:9': '내가 네게 명령하지 아니하였느냐? 강건하고 담대하라. 무서워 말고 낙심치 말라. 이는 주 네 하나님이 네가 어디로 가든지 너와 함께함이라.” 하시니라.'
  ,'Philippians 4:11': '내가 궁핍하므로 말하는 것이 아니니 이는 내가 어떤 처지에서도 스스로 만족하는 법을 배웠기 때문이라.'
  ,'1 Timothy 6:6': '그러나 만족할 줄 아는 경건은 큰 이익이 되느니라.'
  ,'Psalm 42:11': '오 내 혼아, 어찌하여 네가 낙담하느냐? 어찌하여 네가 내 안에서 불안해 하느냐? 너는 하나님을 바라라. 내 얼굴을 강건케 하시는 분이요, 나의 하나님이신 그분을 내가 여전히 찬양하리라.'
  ,'2 Corinthians 1:3-4': '하나님을 송축하리로다. 그는 우리 주 예수 그리스도의 아버지시요, 자비의 아버지시요, 모든 위로의 하나님이시며 우리의 모든 환난 가운데서 우리를 위로하시는 분이시라.'
  ,'Psalm 4:8': '내가 평안 가운데 눕기도 하고 자기도 하리니 이는 주여, 주만이 나를 안전한 가운데 거하게 하심이니이다.'
  ,'Psalm 127:2': '너희가 일찍 일어나고 밤 늦도록 자지 않고 수고의 빵을 먹는 것도 헛되도다. 그러므로 그가 자기의 사랑하시는 자에게 잠을 주시는도다.'
  ,'Romans 8:28': '우리가 알거니와 하나님을 사랑하는 자들, 곧 그분의 목적에 따라 부르심을 받은 자들에게는 모든 일이 합력하여 선을 이루느니라.'
  ,'James 1:2': '나의 형제들아, 너희가 여러 가지 시험에 빠질 때면 그것을 모두 기쁨으로 여기라.'
  ,'Romans 8:18': '이는 현재의 고난들이 우리에게 나타나게 될 영광에 감히 비교되지 못한다고 내가 여기기 때문이라.'
  ,'Revelation 21:4': '하나님께서 그들의 눈에서 모든 눈물을 닦아 내시며, 다시는 사망이나 슬픔이나 울부짖음이 없고 고통 또한 없으리니, 이는 이전 것들은 다 사라져 버렸음이라.”고 하더라.'
  ,'Galatians 6:2': '너희는 서로의 짐을 지라. 그리하여 그리스도의 법을 이루라.'
  ,'Matthew 25:40': '그러나 왕이 대답하여 그들에게 말하기를 ‘진실로 내가 너희에게 말하노니, 여기 내 형제들 가운데 가장 작은 자 하나에게 한 것이 곧 나에게 한 것이니라.’ 하리라.'
  ,'John 8:36': '그러므로 만일 아들이 너희를 자유롭게 하면 참으로 너희가 자유롭게 되리라.'
  ,'Romans 6:14': '죄가 너희를 주관하지 못하리니 이는 너희가 율법 아래 있지 아니하고 은혜 아래 있기 때문이라.'
  ,'1 Corinthians 10:13': '사람에게 흔히 닥치는 시험 외에는 너희가 당한 것이 없나니 하나님께서는 신실하셔서 너희가 감당할 수 있는 것 이상으로 시험을 당하지 않게 하시고 시험을 당하면 피할 길도 마련하셔서 너희로 능히 감당케 하시느니라.'
  ,'Psalm 51:10': '오 하나님이여, 내 안에 깨끗한 마음을 창조하시고 내 안에 바른 영을 새롭게 하소서.'
  ,'Ephesians 5:25': '남편들아, 너희는 자기 아내를 사랑하되 그리스도께서 교회를 사랑하셔서 교회를 위하여 자신을 주신 것같이 하라.'
  ,'Proverbs 18:22': '아내를 얻는 자는 좋은 것을 얻는 것이요 주의 은총을 받는 것이니라.'
  ,'Ecclesiastes 4:9': '둘이 하나보다 더 나으니, 이는 그들이 그들의 수고에 대한 좋은 상을 가짐이라.'
  ,'Romans 12:18': '가능한 한 너희 편에서는 모든 사람과 더불어 화목하게 지내라.'
  ,'Proverbs 24:16': '의인은 일곱 번 넘어질지라도 다시 일어나지만 악인은 재앙으로 말미암아 쓰러지느니라.'
  ,'Proverbs 22:6': '아이를 그가 마땅히 가야 할 길로 훈육하라. 그리하면 그가 늙어도 그 길을 떠나지 아니하리라.'
  ,'Psalm 127:3': '보라, 자녀들은 주의 유업이요, 태의 열매는 그의 보상이로다.'
  ,'Ephesians 6:4': '너희 아비들아, 너희 자녀들을 성나게 하지 말고 주의 교훈과 훈계로 양육하라.'
  ,'Colossians 3:23': '무슨 일을 하든지 마음을 다하여 주께 하듯 하고 사람에게 하듯 하지 말라.'
  ,'Ephesians 2:10': '우리는 그분의 작품이니 그리스도 예수 안에서 선한 일들을 위하여 창조되었느니라. 이 일들은 하나님께서 미리 정하시어 우리로 그것들 가운데서 행하게 하려 하신 것이라.'
  ,'Psalm 37:24': '그가 넘어져도 완전히 쓰러지지 아니함은 주께서 그의 손으로 그를 붙드심이라.'
  ,'Psalm 119:105': '주의 말씀은 내 발에 등불이요, 내 길에 빛이니이다.'
  ,'Psalm 23:1': '주는 나의 목자시니, 내가 부족한 것이 없으리로다.'
  ,'2 Corinthians 5:17': '그러므로 누구든지 그리스도 안에 있으면 새로운 피조물이라. 옛 것들은 지나갔으니, 보라, 모든 것이 새롭게 되었도다.'
  ,'2 Corinthians 5:7': '(이는 우리가 믿음으로 행하고 보는 것으로 하지 아니함이라.)'
  ,'1 Thessalonians 5:17': '쉬지 말고 기도하라.'
  ,'James 5:16': '그러므로 너희는 서로 잘못들을 자백하고 치유를 위하여 서로 기도하라. 의인의 효과적이고 열렬한 기도는 역사하는 힘이 많으니라.'
  ,'Ephesians 2:8': '너희가 믿음으로 말미암아 은혜로 구원을 받았으니 이것은 너희에게서 난 것이 아니요, 하나님의 선물이라.'
  ,'John 1:16': '우리 모두가 그의 충만한 데서 받았으니 은혜 위에 은혜니라.'
  ,'Romans 10:9': '네가 네 입으로 주 예수를 시인하고 또 하나님께서 그를 죽은 자들로부터 살리신 것을 네 마음에 믿으면 구원을 받으리라.'
  ,'John 14:15': '너희가 나를 사랑하면 나의 계명들을 지키라.'
  ,'James 1:22': '그러나 너희는 말씀을 행하는 자가 되고, 단순히 듣기만 하는 자가 되어 자기 자신을 속이지 말라.'
  ,'1 Samuel 15:22': '그러자 사무엘이 말하기를 “주께서 번제와 희생제를 주의 음성에 복종하는 것만큼 크게 기뻐하시나이까? 보소서, 복종하는 것이 희생제물보다 낫고, 경청하는 것이 숫양의 기름보다 낫나이다.'
  ,'1 Peter 1:15': '오히려 너희를 부르신 그분께서 거룩하신 것처럼 너희도 모든 행실에 거룩하라.'
  ,'Romans 12:2': '너희는 이 세상과 일치하지 말고 너희 마음을 새롭게 함으로써 변화를 받아 하나님의 선하시고 기뻐하시고 온전하신 뜻이 무엇인지 입증하도록 하라.'
  ,'Hebrews 12:14': '모든 사람과 더불어 화평함과 거룩함을 추구하라. 이것이 없이는 아무도 주를 보지 못하리라.'
  ,'John 14:26': '그러나 위로자이신 성령을 아버지께서 내 이름으로 보내시리니, 그가 너희에게 모든 것들을 가르치시며 또 내가 너희에게 말한 모든 것들을 기억나게 하시리라.'
  ,'Galatians 5:22-23': '그러나 성령의 열매는 사랑과 기쁨과 화평과 오래 참음과 친절과 선함과 믿음과 온유와 절제니 그러한 것을 반대할 법이 없느니라.'
  ,'1 Corinthians 6:19': '또한, 너희 몸은 너희가 하나님으로부터 받은 바 너희 안에 계신 성령의 전인 것을 알지 못하느냐? 너희는 너희 자신의 것이 아니니라.'
  ,'John 4:24': '하나님은 한 영이시니 그분께 경배드리는 자들은 영과 진리로 경배드려야만 하리라.”고 하시니라.'
  ,'Romans 12:1': '그러므로 형제들아, 내가 하나님의 긍휼로 너희에게 간청하노니 너희 몸을 거룩하고 하나님께서 받으실 만한 살아 있는 희생물로 드리라. 이것이 너희의 합당한 섬김이니라.'
  ,'Psalm 95:6': '오라, 우리가 경배하며 몸을 굽히고 우리를 지으신 주 앞에 무릎을 꿇자.'
  ,'Matthew 28:19': '그러므로 너희는 가서 모든 민족들을 가르치고 아버지와 아들과 성령의 이름으로 그들에게 침례를 주며'
  ,'John 14:2': '내 아버지 집에는 거할 곳이 많도다. 그렇지 않으면 내가 너희에게 말하였으리라. 내가 너희를 위하여 처소를 마련하러 가노니'
};

const KOREAN_ESV_BY_REF = {
  'Psalm 16:11': '주께서 생명의 길을 내게 알려 주시니 주의 앞에는 충만한 기쁨이 있고 주의 오른편에는 영원한 즐거움이 있습니다.',
  'Philippians 4:4': '주 안에서 항상 기뻐하십시오. 다시 말하겠습니다. 기뻐하십시오.',
  'John 15:11': '내가 이것을 너희에게 말한 것은 나의 기쁨이 너희 안에 있게 하고 너희의 기쁨을 충만하게 하려는 것입니다.',
  'Psalm 34:18': '주께서는 마음이 상한 자에게 가까이하시고 영이 짓눌린 자를 구원하십니다.',
  'Matthew 5:4': '애통하는 자는 복이 있나니 그들이 위로를 받을 것입니다.',
  'Philippians 4:7': '모든 이해를 뛰어넘는 하나님의 평강이 그리스도 예수 안에서 여러분의 마음과 생각을 지켜 줄 것입니다.',
  'John 14:27': '내가 너희에게 평안을 남겨 둔다. 곧 나의 평안을 너희에게 준다. 내가 주는 평안은 세상이 주는 것과 같지 않다.',
  'Isaiah 26:3': '주께서는 주께 마음을 둔 사람을 완전한 평강 가운데 지키시니 이는 그가 주를 신뢰하기 때문입니다.',
  'Romans 15:13': '소망의 하나님께서 믿는 여러분에게 모든 기쁨과 평강을 충만하게 하셔서 성령의 능력으로 소망이 넘치게 하시기를 바랍니다.',
  'Jeremiah 29:11': '내가 너희를 향해 가지고 있는 계획을 내가 안다. 그것은 평안의 계획이며 재앙의 계획이 아니니 너희에게 미래와 소망을 주려는 것이다.',
  '1 Peter 1:3': '그는 예수 그리스도를 죽은 자 가운데서 다시 살리심으로 우리를 거듭나게 하셔서 살아 있는 소망을 갖게 하셨습니다.',
  'Isaiah 41:10': '두려워하지 말라. 내가 너와 함께한다. 놀라지 말라. 내가 네 하나님이다. 내가 너를 강하게 하고 너를 도울 것이다.',
  'Psalm 23:4': '내가 사망의 음침한 골짜기를 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 함께하시기 때문입니다.',
  '2 Timothy 1:7': '하나님께서 우리에게 주신 영은 두려움의 영이 아니라 능력과 사랑과 절제의 영입니다.',
  '1 Peter 5:7': '너희의 모든 염려를 하나님께 맡기십시오. 하나님께서 너희를 돌보십니다.',
  'Philippians 4:6': '아무것도 염려하지 말고 오직 모든 일에 기도와 간구로, 감사함으로 너희의 구할 것을 하나님께 아뢰십시오.',
  'Matthew 6:34': '그러므로 내일을 염려하지 마십시오. 내일은 내일이 스스로 염려할 것입니다.',
  'Ephesians 4:26': '분을 내어도 죄를 짓지 말며 해가 지도록 분을 품지 마십시오.',
  'James 1:19': '사람마다 듣기는 빨리 하고 말하기는 더디 하며 성내기도 더디 하십시오.',
  'James 1:19-20': '사람마다 듣기는 빨리 하고 말하기는 더디 하며 성내기도 더디 하십시오. 사람의 분노는 하나님의 의를 이루지 못합니다.',
  'Proverbs 15:1': '부드러운 대답은 분노를 가라앉히지만 거친 말은 화를 일으킵니다.',
  '1 Thessalonians 5:18': '모든 상황에서 감사하십시오. 이것이 그리스도 예수 안에서 여러분을 향하신 하나님의 뜻입니다.',
  'Psalm 100:4': '감사함으로 그의 문에 들어가고 찬송함으로 그의 궁정에 들어가십시오. 그에게 감사하며 그의 이름을 송축하십시오.',
  'Colossians 3:15': '그리스도의 평강이 여러분의 마음을 다스리게 하십시오. 그리고 감사하는 사람이 되십시오.',
  '1 John 1:9': '우리가 우리 죄를 자백하면 그는 신실하시고 의로우셔서 우리 죄를 용서하시고 모든 불의에서 우리를 깨끗하게 하십니다.',
  'Psalm 103:12': '동이 서에서 먼 것같이 그가 우리의 죄를 우리에게서 멀리 옮기십니다.',
  'Lamentations 3:22-23': '주의 한결같은 사랑은 결코 그치지 않고 그의 자비는 결코 끝나지 않습니다. 그것은 아침마다 새롭습니다. 주의 성실하심이 크십니다.',
  'John 3:16': '하나님께서 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심입니다.',
  '1 Corinthians 13:4': '사랑은 오래 참고 친절하며 시기하지 않고 자랑하지 않으며 교만하지 않습니다.',
  '1 John 4:19': '우리가 사랑하는 것은 그가 먼저 우리를 사랑하셨기 때문입니다.',
  'Isaiah 40:31': '오직 주를 바라는 자는 새 힘을 얻어 독수리처럼 날개 치며 올라갈 것입니다.',
  'Psalm 42:11': '내 영혼아, 네가 어찌하여 낙심하며 어찌하여 내 속에서 불안해하는가? 하나님을 바라라. 내가 다시 그를 찬양할 것이다.',
  'Joshua 1:9': '강하고 담대하라. 두려워하지 말고 놀라지 말라. 네가 어디로 가든지 주 네 하나님이 너와 함께하신다.',
  'Psalm 4:8': '내가 평안히 눕고 자기도 하리니 오직 주님만이 나를 안전하게 살게 하십니다.',
  'Matthew 11:28': '수고하고 무거운 짐 진 모든 자들아 내게로 오라. 내가 너희를 쉬게 하겠다.',
  'Psalm 127:2': '주께서 사랑하시는 자에게 잠을 주십니다.',
  'Romans 8:28': '하나님을 사랑하는 자들 곧 그의 뜻대로 부르심을 받은 자들에게는 모든 것이 합력하여 선을 이룹니다.',
  'James 1:2-3': '여러 가지 시험을 만날 때에 온전히 기쁘게 여기십시오. 이는 믿음의 시련이 인내를 만들어 내는 줄 알기 때문입니다.',
  'Romans 8:18': '현재의 고난은 장차 우리에게 나타날 영광과 비교할 수 없습니다.',
  'Psalm 147:3': '그는 상한 마음을 고치시며 그들의 상처를 싸매어 주십니다.',
  'Psalm 41:3': '주께서 그를 병상에서 붙드시고 그의 병중에서 회복시켜 주십니다.',
  '2 Corinthians 12:9': '내 은혜가 네게 족하다. 이는 내 능력이 약한 데서 온전하여지기 때문이다.',
  'Ephesians 4:32': '서로 친절하게 하며 마음을 부드럽게 하고 하나님이 그리스도 안에서 여러분을 용서하신 것같이 서로 용서하십시오.',
  'Matthew 6:14': '너희가 다른 사람의 잘못을 용서하면 너희 하늘 아버지께서도 너희를 용서하실 것입니다.',
  'Hebrews 13:5': '돈을 사랑하지 말고 있는 것으로 만족하십시오. 그가 친히 말씀하시기를 내가 결코 너를 떠나지 않고 버리지 않겠다고 하셨습니다.',
  'Psalm 139:7': '내가 주의 영을 떠나 어디로 가며 주의 앞에서 어디로 피하겠습니까?',
  'Matthew 28:20': '보라, 내가 세상 끝날까지 항상 너희와 함께 있을 것이다.',
  'Psalm 55:22': '너의 짐을 주께 맡기라. 그가 너를 붙드시고 의인이 흔들리도록 결코 허락하지 않으실 것이다.',
  'Proverbs 3:5-6': '너는 마음을 다하여 주를 신뢰하고 네 명철을 의지하지 말라. 너의 모든 길에서 그를 인정하라. 그가 네 길을 곧게 하실 것이다.',
  'James 1:5': '너희 중에 누구든지 지혜가 부족하거든 모든 사람에게 후히 주시고 꾸짖지 아니하시는 하나님께 구하십시오.',
  'Psalm 119:105': '주의 말씀은 내 발에 등이요 내 길에 빛입니다.',
  'Hebrews 11:1': '믿음은 바라는 것들의 실상이요 보이지 않는 것들의 증거입니다.',
  'Mark 9:24': '내가 믿습니다. 나의 믿음 없는 것을 도와주십시오.',
  '2 Corinthians 5:7': '우리는 보는 것으로가 아니라 믿음으로 행합니다.',
  '1 Thessalonians 5:17': '쉬지 말고 기도하십시오.',
  'James 5:16': '의인의 기도는 역사하는 힘이 큽니다.',
  'Ephesians 2:8': '너희는 은혜로 말미암아 믿음으로 구원을 받았습니다. 이것은 너희에게서 난 것이 아니요 하나님의 선물입니다.',
  'John 1:16': '우리는 모두 그의 충만함에서 받았으니 은혜 위에 은혜를 받았습니다.',
  'Romans 10:9': '네가 입으로 예수를 주로 시인하고 하나님께서 그를 죽은 자 가운데서 살리신 것을 마음으로 믿으면 구원을 받을 것이다.',
  'Romans 6:23': '죄의 삯은 사망이요 하나님의 은사는 그리스도 예수 우리 주 안에 있는 영생입니다.',
  'John 14:26': '보혜사 곧 아버지께서 내 이름으로 보내실 성령께서 너희에게 모든 것을 가르치시고 내가 너희에게 말한 모든 것을 생각나게 하실 것입니다.',
  'Galatians 5:22-23': '성령의 열매는 사랑과 기쁨과 평안과 오래 참음과 자비와 양선과 신실함과 온유와 절제입니다.',
  '1 Corinthians 6:19': '너희 몸은 너희 안에 계신 성령의 전인 줄 알지 못하느냐?',
  'John 4:24': '하나님은 영이시니 예배하는 자가 영과 진리로 예배해야 합니다.',
  'Romans 12:1': '여러분의 몸을 하나님이 기뻐하시는 거룩한 산 제물로 드리십시오. 이것이 여러분의 영적 예배입니다.',
  'Psalm 95:6': '오라, 우리가 굽혀 경배하며 우리를 지으신 주 앞에 무릎을 꿇자.',
  'Matthew 28:19': '그러므로 가서 모든 민족을 제자로 삼아 아버지와 아들과 성령의 이름으로 침례를 베풀고',
  'Proverbs 16:3': '네 행사를 주께 맡겨라. 그러면 네 계획이 굳게 서리라.',
  'Proverbs 24:16': '의인은 일곱 번 넘어질지라도 다시 일어나지만 악인은 재앙으로 말미암아 쓰러진다.',
  'Psalm 139:7–8': '내가 주의 영을 떠나 어디로 가며 주의 앞에서 어디로 피하겠습니까? 내가 하늘에 올라갈지라도 거기 계시며 내가 스올에 잠자리를 펼지라도 거기 계십니다.',
  'Romans 1:16': '나는 복음을 부끄러워하지 않습니다. 이 복음은 믿는 모든 사람에게 구원을 주시는 하나님의 능력입니다.',
  '1 Peter 3:15': '너희 안에 있는 소망에 관한 이유를 묻는 자에게는 언제든지 대답할 것을 준비하십시오.',
  'Revelation 21:4': '그가 그들의 눈에서 모든 눈물을 닦아 주실 것이며 다시는 사망이 없고 애통하는 것이나 곡하는 것이나 아픈 것이 다시 있지 않을 것입니다.',
  'John 14:2': '내 아버지 집에는 거할 곳이 많습니다. 내가 너희를 위하여 처소를 예비하러 갑니다.',
  'Philippians 3:20': '우리의 시민권은 하늘에 있으며 거기로부터 구주이신 주 예수 그리스도를 기다립니다.',
  'Isaiah 40:29': '그는 피곤한 자에게 능력을 주시며 무능한 자에게 힘을 더하십니다.',
  'James 4:8': '하나님께 가까이 가십시오. 그리하면 하나님께서도 여러분에게 가까이 오실 것입니다.',
  'Psalm 145:18': '주께서는 자기를 부르는 모든 자 곧 진실하게 부르는 모든 자에게 가까이하십니다.',
  'Romans 12:18': '할 수 있거든 여러분으로서는 모든 사람과 더불어 화목하게 지내십시오.',
  'Matthew 25:40': '너희가 여기 내 형제 중에 지극히 작은 자 하나에게 한 것이 곧 내게 한 것이다.',
  'John 8:36': '아들이 너희를 자유롭게 하면 너희가 참으로 자유로울 것입니다.',
  'Romans 6:14': '죄가 너희를 지배하지 못할 것이다. 너희가 법 아래 있지 않고 은혜 아래 있기 때문이다.',
  '1 Corinthians 10:13': '하나님은 신실하셔서 여러분이 감당할 수 있는 이상으로 시험당하도록 두지 않으시고 피할 길도 내실 것입니다.',
  'Philippians 1:21': '내게 사는 것이 그리스도니 죽는 것도 유익합니다.',
  'John 11:25': '나는 부활이요 생명이니 나를 믿는 자는 죽어도 살 것입니다.',
  '2 Corinthians 5:8': '우리는 몸을 떠나 주와 함께 거하는 것을 더 원합니다.',
  'Psalm 30:5': '울음은 밤새도록 머물 수 있으나 기쁨은 아침에 옵니다.',
  'Proverbs 18:22': '아내를 얻는 자는 좋은 것을 얻고 주께 은총을 받습니다.',
  'Ecclesiastes 4:9': '두 사람이 한 사람보다 나음은 그들이 수고함으로 좋은 보상을 얻기 때문입니다.'
};

function normalizeVerseRef(ref) {
  return String(ref || '')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

function getKoreanVerseText(ref, fallback) {
  const normalizedRef = normalizeVerseRef(ref);
  return KOREAN_VERSE_BY_REF[normalizedRef] || KOREAN_VERSE_BY_REF[String(ref || '').trim()] || fallback || '';
}

function getKoreanEsvText(ref, fallback) {
  const normalizedRef = normalizeVerseRef(ref);
  return KOREAN_ESV_BY_REF[normalizedRef] || KOREAN_ESV_BY_REF[String(ref || '').trim()] || getKoreanVerseText(ref, fallback) || fallback || '';
}
function getKjvLabel(){
  const lang=typeof window.getSiteLanguage==='function' ? window.getSiteLanguage() : 'en';
  return lang==='ko' ? '킹 제임스' : 'KJV';
}

const TOPIC_RESULT_KO = {
  'Joy': { name:'기쁨', cat:'감정', note:'참된 기쁨은 하나님의 임재 안에 머무를 때 깊어집니다.' },
  'Sorrow & Grief': { name:'슬픔과 애통', cat:'감정', note:'하나님은 상한 마음 가까이 오시며 우리의 눈물을 아십니다.' },
  'Peace': { name:'평안', cat:'감정', note:'하나님이 주시는 평안은 상황을 넘어 마음을 지켜 줍니다.' },
  'Hope': { name:'소망', cat:'감정', note:'성경의 소망은 하나님의 약속 위에 선 흔들리지 않는 기대입니다.' },
  'Fear': { name:'두려움', cat:'감정', note:'하나님이 함께하신다는 사실을 기억할 때 두려움은 힘을 잃습니다.' },
  'Anxiety & Worry': { name:'불안과 염려', cat:'감정', note:'염려는 우리를 돌보시는 하나님께 마음을 맡기라는 초대입니다.' },
  'Loneliness': { name:'외로움', cat:'감정', note:'홀로 있는 것처럼 느껴질 때에도 하나님은 결코 멀리 계시지 않습니다.' },
  'Anger': { name:'분노', cat:'감정', note:'분노는 하나님 앞에 내려놓고 다스릴 때 치유의 길이 열립니다.' },
  'Gratitude': { name:'감사', cat:'감정', note:'감사는 삶의 시선을 바꾸고 하나님의 선하심을 더 깊이 보게 합니다.' },
  'Guilt & Regret': { name:'죄책감과 후회', cat:'감정', note:'죄책감은 용서가 완전한 십자가 앞으로 우리를 이끕니다.' },
  'Love': { name:'사랑', cat:'감정', note:'모든 사랑의 시작은 먼저 우리를 사랑하신 하나님의 사랑입니다.' },
  'Discouragement': { name:'낙심', cat:'감정', note:'낙심한 마음에도 하나님은 가까이 계시며 새 힘을 주십니다.' },
  'Depression & Discouragement': { name:'우울과 깊은 침체', cat:'감정', note:'깊은 낙심과 무거운 마음 속에서 하나님의 위로와 붙드심을 찾는 이들을 위한 주제입니다.' },
  'Sleep & Insomnia': { name:'수면과 불면', cat:'감정', note:'잠들기 어렵고 마음이 쉬지 못할 때 하나님의 평안 안에서 안식을 찾도록 돕는 주제입니다.' },
  'Contentment & Satisfaction': { name:'자족과 만족', cat:'감정', note:'자족은 타고나는 성격이 아니라 배워 가는 영적 훈련입니다.' },
  'Suffering & Trials': { name:'고난과 시련', cat:'삶의 문제', note:'고난은 헛되지 않으며 하나님은 그 가운데서도 선을 이루십니다.' },
  'Illness & Sickness': { name:'질병과 아픔', cat:'삶의 문제', note:'병약함 가운데서도 하나님은 우리를 붙드시고 함께하십니다.' },
  'Caregiving & Support': { name:'돌봄과 간병', cat:'삶의 문제', note:'아픈 가족이나 사랑하는 이를 돌보며 지치고 무거운 마음을 가진 이들을 위한 주제입니다.' },
  'Addiction & Recovery': { name:'중독과 회복', cat:'삶의 문제', note:'반복되는 습관과 묶임에서 벗어나 하나님의 은혜 안에서 회복을 구하는 이들을 위한 주제입니다.' },
  'Death & Dying': { name:'죽음과 임종', cat:'삶의 문제', note:'그리스도 안에서 죽음은 끝이 아니라 하나님께로 가는 문입니다.' },
  'Grief & Funeral Comfort': { name:'슬픔과 장례의 위로', cat:'삶의 문제', note:'애통의 자리에서도 하나님은 소망과 위로를 주십니다.' },
  'Forgiveness': { name:'용서', cat:'삶의 문제', note:'용서는 상처의 짐을 내려놓고 자유로 나아가게 합니다.' },
  'Marriage & Family': { name:'결혼과 가정', cat:'삶의 문제', note:'가정은 그리스도의 사랑과 섬김을 비추는 자리입니다.' },
  'Relationship Conflict': { name:'관계의 갈등', cat:'삶의 문제', note:'가족, 친구, 직장, 교회 안의 갈등 속에서 지혜와 화해를 구하는 이들을 위한 주제입니다.' },
  'Parenting & Children': { name:'양육과 자녀', cat:'삶의 문제', note:'자녀는 하나님께서 주신 기업이며, 양육은 그들을 하나님께 인도하는 일입니다.' },
  'Work & Calling': { name:'일과 부르심', cat:'삶의 문제', note:'일은 우리가 날마다 하나님을 섬기고 영화롭게 하는 자리 중 하나입니다.' },
  'Money & Financial Worry': { name:'재정과 돈 걱정', cat:'삶의 문제', note:'하나님은 필요를 아시며 먼저 그의 나라를 구하라 하십니다.' },
  'Failure & Disappointment': { name:'실패와 실망', cat:'삶의 문제', note:'실패는 하나님의 이야기에서 마지막 결론이 아닙니다. 하나님은 넘어지는 자를 붙드십니다.' },
  'Decision-Making & Wisdom': { name:'결정과 지혜', cat:'삶의 문제', note:'갈림길에서 하나님의 지혜를 구할 때 길을 인도하십니다.' },
  'Aging & Senior Life': { name:'노년과 시니어의 삶', cat:'삶의 문제', note:'하나님은 모든 계절을 지나도록 자기 백성을 품으시며, 특히 노년의 때에도 함께하십니다.' },
  'New Beginnings & Change': { name:'새로운 시작과 변화', cat:'삶의 문제', note:'당신이 들어서는 새로운 장에도 하나님은 이미 먼저 가 계십니다.' },
  'Faith & Trust': { name:'믿음과 신뢰', cat:'영적 주제', note:'믿음은 보이지 않아도 하나님을 붙드는 신뢰입니다.' },
  'Prayer': { name:'기도', cat:'영적 주제', note:'기도는 가장 단순하면서도 가장 깊은 믿음의 행위입니다.' },
  'Grace & Mercy': { name:'은혜와 자비', cat:'영적 주제', note:'은혜는 받을 자격 없는 우리에게 베푸시는 하나님의 선물입니다.' },
  'Salvation': { name:'구원과 속량', cat:'영적 주제', note:'구원은 오직 그리스도를 통한 하나님의 선물입니다.' },
  'Obedience & Surrender': { name:'순종과 내려놓음', cat:'영적 주제', note:'순종은 하나님의 사랑으로 변화된 마음에서 자연스럽게 흘러나오는 열매입니다.' },
  'Holiness & Sanctification': { name:'거룩함과 성화', cat:'영적 주제', note:'거룩함은 하나님께 구별되어 날마다 그리스도를 닮아 가는 삶입니다.' },
  'The Holy Spirit': { name:'성령님', cat:'영적 주제', note:'성령님은 우리 안에 거하시는 하나님으로서 인도하시고 능력을 주십니다.' },
  'Worship & Praise': { name:'예배와 찬양', cat:'영적 주제', note:'예배는 하나님의 영광 앞에 삶 전체를 드리는 자세입니다.' },
  'Evangelism & Witness': { name:'전도와 증언', cat:'영적 주제', note:'복음을 전하는 일은 우리가 받은 것을 다른 이에게 나누는 기쁜 특권입니다.' },
  'Heaven & Eternity': { name:'천국과 영원', cat:'영적 주제', note:'천국은 하나님이 그의 백성과 영원히 함께하시는 실제입니다.' },
  'Strength': { name:'힘과 새 힘', cat:'영적 주제', note:'하나님은 지친 자에게 힘을 주시고 약한 자를 새롭게 하십니다.' },
  "God's Presence": { name:'하나님의 임재와 위로', cat:'영적 주제', note:'하나님의 임재는 어디서나 우리 가까이에 있으며 결코 떠나지 않으십니다.' }
};

const TOPIC_BONUS_VERSES = {
  'Joy': [{ r:'Psalm 118:24', kjv:'This is the day which the LORD hath made; we will rejoice and be glad in it.', esv:'This is the day that the Lord has made; let us rejoice and be glad in it.', koKjv:'이 날은 주께서 만드신 날이니 우리가 이 날 안에서 기뻐하고 즐거워하리로다.', koEsv:'이 날은 주께서 만드신 날이니 우리가 이날을 기뻐하며 즐거워하자.' }],
  'Sorrow & Grief': [{ r:'2 Corinthians 1:3-4', kjv:'Blessed be God... the Father of mercies, and the God of all comfort; Who comforteth us in all our tribulation.', esv:'Blessed be... the Father of mercies and God of all comfort, who comforts us in all our affliction.', koKjv:'하나님 곧 모든 자비의 아버지시요 모든 위로의 하나님께서 우리의 모든 환난 가운데서 우리를 위로하십니다.', koEsv:'긍휼의 아버지이시며 모든 위로의 하나님께서 우리의 모든 환난 가운데서 우리를 위로하십니다.' }],
  'Peace': [{ r:'Psalm 29:11', kjv:'The LORD will bless his people with peace.', esv:'May the Lord bless his people with peace!', koKjv:'주께서 자기 백성에게 평안을 복으로 주시리로다.', koEsv:'주께서 자기 백성에게 평강을 복으로 주시기를 원하노라.' }],
  'Hope': [{ r:'Hebrews 10:23', kjv:'Let us hold fast the profession of our faith without wavering; (for he is faithful that promised;)', esv:'Let us hold fast the confession of our hope without wavering, for he who promised is faithful.', koKjv:'약속하신 분께서 신실하시니 우리가 흔들림 없이 우리의 소망의 고백을 굳게 붙들자.', koEsv:'약속하신 이가 신실하시니 우리가 흔들림 없이 소망의 고백을 굳게 붙들자.' }],
  'Fear': [{ r:'Psalm 56:3', kjv:'What time I am afraid, I will trust in thee.', esv:'When I am afraid, I put my trust in you.', koKjv:'내가 두려워하는 때에는 주를 신뢰하리이다.', koEsv:'내가 두려워할 때에 내가 주를 신뢰하리이다.' }],
  'Anxiety & Worry': [{ r:'Psalm 94:19', kjv:'In the multitude of my thoughts within me thy comforts delight my soul.', esv:'When the cares of my heart are many, your consolations cheer my soul.', koKjv:'내 속에 생각이 많을 때에 주의 위로들이 내 혼을 즐겁게 하나이다.', koEsv:'내 마음의 염려가 많을 때에 주의 위로가 내 영혼을 기쁘게 합니다.' }],
  'Loneliness': [{ r:'Deuteronomy 31:8', kjv:'And the LORD, he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee.', esv:'It is the Lord who goes before you. He will be with you; he will not leave you or forsake you.', koKjv:'주께서 친히 네 앞서 가시며 너와 함께하실 것이요, 너를 떠나지 아니하시며 버리지 아니하시리라.', koEsv:'주께서 친히 네 앞에 가시고 너와 함께하실 것이다. 그가 너를 떠나지 아니하시며 버리지 아니하실 것이다.' }],
  'Anger': [{ r:'Ecclesiastes 7:9', kjv:'Be not hasty in thy spirit to be angry: for anger resteth in the bosom of fools.', esv:'Be not quick in your spirit to become angry, for anger lodges in the heart of fools.', koKjv:'네 영 안에서 성내기를 속히 하지 말라. 분노는 어리석은 자들의 품에 머무느니라.', koEsv:'네 심령으로 속히 성내지 말라. 분노는 어리석은 자의 품에 머무느니라.' }],
  'Gratitude': [{ r:'Psalm 136:1', kjv:'O give thanks unto the LORD; for he is good: for his mercy endureth for ever.', esv:'Give thanks to the Lord, for he is good, for his steadfast love endures forever.', koKjv:'오, 주께 감사하라. 그분은 선하시며 그분의 긍휼은 영원히 지속되기 때문이로다.', koEsv:'주께 감사하라. 그는 선하시며 그의 인자하심이 영원함이로다.' }],
  'Love': [{ r:'John 13:34', kjv:'A new commandment I give unto you, That ye love one another; as I have loved you.', esv:'A new commandment I give to you, that you love one another: just as I have loved you.', koKjv:'내가 너희에게 새 명령을 주노니, 서로 사랑하라. 내가 너희를 사랑한 것 같이 너희도 서로 사랑하라.', koEsv:'내가 너희에게 새 계명을 주노니 서로 사랑하라. 내가 너희를 사랑한 것 같이 너희도 서로 사랑하라.' }],
  'Guilt & Regret': [{ r:'Isaiah 1:18', kjv:'Though your sins be as scarlet, they shall be as white as snow.', esv:'Though your sins are like scarlet, they shall be as white as snow.', koKjv:'너희 죄가 주홍 같을지라도 눈과 같이 희어질 것이요.', koEsv:'너희 죄가 주홍 같을지라도 눈 같이 희어질 것이다.' }],
  'Discouragement': [{ r:'Psalm 31:24', kjv:'Be of good courage, and he shall strengthen your heart, all ye that hope in the LORD.', esv:'Be strong, and let your heart take courage, all you who wait for the Lord!', koKjv:'주를 바라는 너희 모두여, 용기를 내라. 그리하면 그분께서 너희 마음을 강하게 하시리로다.', koEsv:'주를 바라는 너희 모두여, 강하고 담대하라. 그가 너희 마음을 굳세게 하실 것이다.' }],
  'Contentment & Satisfaction': [{ r:'Psalm 23:1', kjv:'The LORD is my shepherd; I shall not want.', esv:'The Lord is my shepherd; I shall not want.', koKjv:'주는 나의 목자시니 내가 부족함이 없으리로다.', koEsv:'여호와는 나의 목자시니 내게 부족함이 없다.' }],
  'Depression & Discouragement': [{ r:'Psalm 40:1-2', kjv:'He brought me up also out of an horrible pit... and set my feet upon a rock.', esv:'He drew me up from the pit of destruction... and set my feet upon a rock.', koKjv:'그분께서 나를 두려운 구덩이에서 끌어올리시고 내 발을 반석 위에 세우셨도다.', koEsv:'그가 나를 멸망의 구덩이에서 끌어올리시고 내 발을 반석 위에 두셨다.' }],
  'Sleep & Insomnia': [{ r:'Proverbs 3:24', kjv:'When thou liest down, thou shalt not be afraid: yea, thou shalt lie down, and thy sleep shall be sweet.', esv:'If you lie down, you will not be afraid; when you lie down, your sleep will be sweet.', koKjv:'네가 누울 때에 두려워하지 아니하리니, 참으로 네가 누울 때에 네 잠이 달리로다.', koEsv:'네가 누울 때에 두려워하지 않을 것이며 네가 누우면 네 잠이 달 것이다.' }],
  'Suffering & Trials': [{ r:'1 Peter 5:10', kjv:'The God of all grace... after that ye have suffered a while, make you perfect, stablish, strengthen, settle you.', esv:'After you have suffered a little while, the God of all grace... will himself restore, confirm, strengthen, and establish you.', koKjv:'모든 은혜의 하나님께서 너희를 완전하게 하시고 굳건하게 하시며 강하게 하시고 터를 견고하게 세우시리라.', koEsv:'모든 은혜의 하나님께서 잠시 고난을 당한 너희를 친히 회복하시고 굳게 하시며 강하게 하시고 터를 견고하게 하실 것이다.' }],
  'Illness & Sickness': [{ r:'Jeremiah 17:14', kjv:'Heal me, O LORD, and I shall be healed; save me, and I shall be saved.', esv:'Heal me, O Lord, and I shall be healed; save me, and I shall be saved.', koKjv:'오 주여, 나를 고치소서. 그리하면 내가 고침을 받으리이다. 나를 구원하소서. 그리하면 내가 구원을 받으리이다.', koEsv:'여호와여, 나를 고쳐 주소서. 그러면 내가 낫겠고, 나를 구원하여 주소서. 그러면 내가 구원을 얻겠습니다.' }],
  'Death & Dying': [{ r:'Psalm 116:15', kjv:'Precious in the sight of the LORD is the death of his saints.', esv:'Precious in the sight of the Lord is the death of his saints.', koKjv:'주의 눈앞에서 그분의 성도들의 죽음은 귀중하도다.', koEsv:'여호와께서 보시기에 그의 성도들의 죽음은 귀하다.' }],
  'Caregiving & Support': [{ r:'Isaiah 40:11', kjv:'He shall gather the lambs with his arm, and carry them in his bosom.', esv:'He will tend his flock like a shepherd; he will gather the lambs in his arms.', koKjv:'그분께서 어린양들을 자기 팔로 모으시고 자기 품에 안으시리로다.', koEsv:'그는 목자 같이 양 떼를 먹이시며 어린 양들을 자기 팔로 모아 품에 안으실 것이다.' }],
  'Addiction & Recovery': [{ r:'2 Corinthians 5:17', kjv:'If any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.', esv:'If anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.', koKjv:'누구든지 그리스도 안에 있으면 새로운 창조물이라. 옛것들은 지나갔으니, 보라, 모든 것이 새롭게 되었도다.', koEsv:'누구든지 그리스도 안에 있으면 새로운 피조물이다. 옛 것은 지나갔으니 보라 새 것이 되었다.' }],
  'Forgiveness': [{ r:'Luke 6:37', kjv:'Forgive, and ye shall be forgiven.', esv:'Forgive, and you will be forgiven.', koKjv:'용서하라. 그리하면 너희가 용서받으리라.', koEsv:'용서하라. 그러면 너희도 용서받을 것이다.' }],
  'Marriage & Family': [{ r:'Joshua 24:15', kjv:'As for me and my house, we will serve the LORD.', esv:'As for me and my house, we will serve the Lord.', koKjv:'오직 나와 내 집은 주를 섬기겠노라.', koEsv:'오직 나와 내 집은 여호와를 섬기겠다.' }],
  'Relationship Conflict': [{ r:'Ephesians 4:2-3', kjv:'With all lowliness and meekness, with longsuffering, forbearing one another in love; Endeavouring to keep the unity of the Spirit in the bond of peace.', esv:'With all humility and gentleness, with patience, bearing with one another in love, eager to maintain the unity of the Spirit in the bond of peace.', koKjv:'모든 겸손과 온유와 오래 참음으로 사랑 안에서 서로 용납하고 평안의 매는 띠로 성령의 하나 되게 하신 것을 힘써 지키라.', koEsv:'모든 겸손과 온유와 오래 참음으로 사랑 가운데서 서로 용납하고 평안의 매는 줄로 성령이 하나 되게 하신 것을 힘써 지켜라.' }],
  'Parenting & Children': [{ r:'Proverbs 22:6', kjv:'Train up a child in the way he should go: and when he is old, he will not depart from it.', esv:'Train up a child in the way he should go; even when he is old he will not depart from it.', koKjv:'아이를 마땅히 가야 할 길로 훈련시키라. 그리하면 늙어도 그 길을 떠나지 아니하리라.', koEsv:'마땅히 행할 길을 아이에게 가르치라. 그리하면 늙어도 그것을 떠나지 않을 것이다.' }],
  'Work & Calling': [{ r:'Colossians 3:23', kjv:'And whatsoever ye do, do it heartily, as to the Lord, and not unto men;', esv:'Whatever you do, work heartily, as for the Lord and not for men.', koKjv:'무엇을 하든지 마음을 다하여 주께 하듯 하고 사람들에게 하듯 하지 말라.', koEsv:'무슨 일을 하든지 마음을 다하여 주께 하듯 하고 사람에게 하듯 하지 말라.' }],
  'Money & Financial Worry': [{ r:'Psalm 37:25', kjv:'I have not seen the righteous forsaken, nor his seed begging bread.', esv:'I have not seen the righteous forsaken or his children begging for bread.', koKjv:'내가 의인이 버림받는 것이나 그의 씨가 빵을 구걸하는 것을 보지 못하였도다.', koEsv:'내가 의인이 버림받거나 그의 자손이 떡을 구걸하는 것을 본 적이 없다.' }],
  'Failure & Disappointment': [{ r:'Psalm 37:23-24', kjv:'Though he fall, he shall not be utterly cast down: for the LORD upholdeth him with his hand.', esv:'Though he fall, he shall not be cast headlong, for the Lord upholds his hand.', koKjv:'그가 넘어질지라도 완전히 내던져지지 아니하리니 이는 주께서 자기 손으로 그를 붙드심이라.', koEsv:'그가 넘어져도 완전히 엎드러지지 않을 것은 여호와께서 그의 손을 붙드심이다.' }],
  'Decision-Making & Wisdom': [{ r:'Psalm 32:8', kjv:'I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye.', esv:'I will instruct you and teach you in the way you should go; I will counsel you with my eye upon you.', koKjv:'내가 네가 가야 할 길에서 너를 가르치고 네게 훈계하리니 내 눈으로 너를 인도하리라.', koEsv:'내가 네가 가야 할 길을 네게 가르치고 훈계하겠으며 내 눈으로 너를 지도하겠다.' }],
  'Aging & Senior Life': [{ r:'Psalm 92:14', kjv:'They shall still bring forth fruit in old age; they shall be fat and flourishing;', esv:'They still bear fruit in old age; they are ever full of sap and green.', koKjv:'그들은 늙어서도 여전히 열매를 맺으며 기름지고 번성하리로다.', koEsv:'그들은 늙어도 여전히 열매를 맺으며 진액이 풍족하고 푸르다.' }],
  'New Beginnings & Change': [{ r:'Isaiah 43:19', kjv:'Behold, I will do a new thing; now it shall spring forth; shall ye not know it?', esv:'Behold, I am doing a new thing; now it springs forth, do you not perceive it?', koKjv:'보라, 내가 새 일을 행하리니 이제 그것이 나타날 것이라. 너희가 그것을 알지 못하겠느냐?', koEsv:'보라, 내가 새 일을 행하겠다. 이제 그것이 나타날 것이니 너희가 깨닫지 못하겠느냐?' }],
  'Faith & Trust': [{ r:'Psalm 56:3', kjv:'What time I am afraid, I will trust in thee.', esv:'When I am afraid, I put my trust in you.', koKjv:'내가 두려워하는 때에는 주를 신뢰하리이다.', koEsv:'내가 두려워할 때에 내가 주를 신뢰하리이다.' }],
  'Prayer': [{ r:'Jeremiah 33:3', kjv:'Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.', esv:'Call to me and I will answer you, and will tell you great and hidden things that you have not known.', koKjv:'내게 부르짖으라. 그리하면 내가 네게 응답하고 네가 알지 못하는 크고 능한 일들을 네게 보이리라.', koEsv:'내게 부르짖어라. 내가 네게 응답하겠고 네가 알지 못하는 크고 은밀한 일들을 네게 알려 주겠다.' }],
  'Grace & Mercy': [{ r:'Lamentations 3:22-23', kjv:'It is of the LORD\'s mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.', esv:'The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning.', koKjv:'주의 긍휼로 인하여 우리가 진멸되지 아니함은 그의 자비가 무궁함이니이다. 이것들이 아침마다 새로우니 주의 신실하심이 크시도소이다.', koEsv:'여호와의 인자와 긍휼이 무궁하므로 우리가 진멸되지 아니함이다. 이것들이 아침마다 새로우니 주의 성실하심이 크시다.' }],
  'Salvation': [{ r:'Acts 4:12', kjv:'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.', esv:'There is salvation in no one else, for there is no other name under heaven given among men by which we must be saved.', koKjv:'다른 어떤 이 안에도 구원이 없나니 우리가 구원받아야 할 다른 이름을 하늘 아래 사람들 가운데 주신 일이 없음이라.', koEsv:'다른 이에게서는 구원을 얻을 수 없나니 천하 사람 중에 우리가 구원을 받아야 할 다른 이름을 주신 일이 없음이라.' }],
  'Obedience & Surrender': [{ r:'John 14:15', kjv:'If ye love me, keep my commandments.', esv:'If you love me, you will keep my commandments.', koKjv:'너희가 나를 사랑하면 나의 명령들을 지키라.', koEsv:'너희가 나를 사랑하면 나의 계명들을 지킬 것이다.' }],
  'Holiness & Sanctification': [{ r:'1 Peter 1:15-16', kjv:'Be ye holy; for I am holy.', esv:'You also be holy in all your conduct, since it is written, “You shall be holy, for I am holy.”', koKjv:'나를 부르신 분께서 거룩하신 것 같이 너희도 모든 행실에서 거룩하라. 기록되기를 내가 거룩하니 너희도 거룩하라 하였느니라.', koEsv:'너희를 부르신 이가 거룩하신 것처럼 너희도 모든 행실에서 거룩한 사람이 되어라. 기록되되 내가 거룩하니 너희도 거룩할지어다 하셨다.' }],
  'The Holy Spirit': [{ r:'Romans 8:26', kjv:'Likewise the Spirit also helpeth our infirmities.', esv:'Likewise the Spirit helps us in our weakness.', koKjv:'이와 같이 성령께서도 우리의 연약함을 도우시느니라.', koEsv:'이와 같이 성령도 우리의 연약함을 도우신다.' }],
  'Worship & Praise': [{ r:'Psalm 100:2', kjv:'Serve the LORD with gladness: come before his presence with singing.', esv:'Serve the Lord with gladness! Come into his presence with singing!', koKjv:'즐거움으로 주를 섬기고 노래하며 그분 앞에 나아갈지어다.', koEsv:'기쁨으로 여호와를 섬기며 노래하면서 그의 앞에 나아가라.' }],
  'Evangelism & Witness': [{ r:'Acts 1:8', kjv:'Ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me.', esv:'You will receive power when the Holy Spirit has come upon you, and you will be my witnesses.', koKjv:'오직 성령님께서 너희에게 임하신 뒤에 너희가 권능을 받고 내 증인이 되리라.', koEsv:'오직 성령이 너희에게 임하시면 너희가 권능을 받고 내 증인이 될 것이다.' }],
  'Heaven & Eternity': [{ r:'1 Thessalonians 4:16-17', kjv:'And so shall we ever be with the Lord.', esv:'And so we will always be with the Lord.', koKjv:'그리하여 우리가 항상 주와 함께 있으리라.', koEsv:'그리하여 우리가 항상 주와 함께 있을 것이다.' }],
  'Strength': [{ r:'Psalm 28:7', kjv:'The LORD is my strength and my shield; my heart trusted in him, and I am helped.', esv:'The Lord is my strength and my shield; in him my heart trusts, and I am helped.', koKjv:'주는 나의 힘이시요 나의 방패시니 내 마음이 그분을 신뢰하여 내가 도움을 받았도다.', koEsv:'여호와는 나의 힘이시요 나의 방패이시니 내 마음이 그를 의지하여 도움을 얻었다.' }],
  "God's Presence": [{ r:'Zephaniah 3:17', kjv:'The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy.', esv:'The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness.', koKjv:'네 가운데 계신 주 네 하나님은 능하신 분이시니 그가 구원하시며 기쁨으로 너로 인하여 즐거워하시리라.', koEsv:'너의 하나님 여호와가 네 가운데 계시니 그는 구원을 베푸실 전능자시다. 그가 기쁨으로 너로 말미암아 즐거워하실 것이다.' }]
};

const TOPIC_NAME_ALIASES = {
  'Anger & Frustration': 'Anger',
  'Grief': 'Sorrow & Grief',
  'Anxiety': 'Anxiety & Worry',
  'Love & Compassion': 'Love',
  'Prayer & Intercession': 'Prayer',
  'Salvation & Redemption': 'Salvation',
  'God’s Presence & Comfort': "God's Presence",
  "God's Presence & Comfort": "God's Presence"
};

function normalizeTopicName(value) {
  return String(value || '')
    .replace(/&/g, ' and ')
    .replace(/[\u2018\u2019']/g, '')
    .replace(/[\u2013\u2014]/g, ' ')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

const TOPIC_LOOKUP_BY_LABEL = (() => {
  const map = {};
  Object.keys(TOPIC_RESULT_KO).forEach(key => {
    map[normalizeTopicName(key)] = key;
    map[normalizeTopicName(TOPIC_RESULT_KO[key].name)] = key;
  });
  Object.keys(TOPIC_NAME_ALIASES).forEach(label => {
    map[normalizeTopicName(label)] = TOPIC_NAME_ALIASES[label];
  });
  return map;
})();

function getLocalizedTopicResult(topic, lang){
  if(lang==='ko' && topic && TOPIC_RESULT_KO[topic.name]){
    return TOPIC_RESULT_KO[topic.name];
  }
  return {
    name: topic?.name || '',
    cat: topic?.cat || '',
    note: topic?.note || ''
  };
}

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
      const kjvText = lang==='ko' ? getKoreanVerseText(v.r, v.kjv) : v.kjv;
      const esvText = lang==='ko' ? getKoreanEsvText(v.r, v.esv) : v.esv;
      return '<div class="modal-dv dual-verse">'
        +'<div class="dv-tabs">'
        +'<button class="dv-tab active" onclick="switchTab(this,\''+id+'-kjv\')">'+getKjvLabel()+'</button>'
        +'<button class="dv-tab" onclick="switchTab(this,\''+id+'-esv\')">ESV</button>'
        +'</div>'
        +'<div class="dv-content active" id="'+id+'-kjv"><blockquote>&ldquo;'+kjvText+'&rdquo;</blockquote><cite>'+v.r+'</cite></div>'
        +'<div class="dv-content" id="'+id+'-esv"><blockquote>&ldquo;'+esvText+'&rdquo;</blockquote><cite>'+v.r+' (ESV)</cite></div>'
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

const TODAY_MEMORY_VERSE_ROTATIONS = {
  ko: [
    {
      icon: '✦',
      category: '암송구절',
      title: '오늘의 암송구절',
      note: '오늘 하루 마음에 두고 천천히 되새겨 보세요.',
      verse: '“영원하신 하나님은 너의 거처가 되시나니 그 아래에는 영원한 팔이 있도다.”',
      ref: '신명기 33:27 (ESV)'
    },
    {
      icon: '✦',
      category: '암송구절',
      title: '오늘의 암송구절',
      note: '필요할 때마다 소리 내어 읽어도 좋습니다.',
      verse: '“두려워하지 말라, 내가 너와 함께함이라. 놀라지 말라, 내가 네 하나님이니라.”',
      ref: '이사야 41:10 (ESV)'
    },
    {
      icon: '✦',
      category: '암송구절',
      title: '오늘의 암송구절',
      note: '짧게라도 기억하며 오늘의 걸음을 시작해 보세요.',
      verse: '“네 마음을 다하여 주를 신뢰하고 네 명철을 의지하지 말라.”',
      ref: '잠언 3:5 (ESV)'
    },
    {
      icon: '✦',
      category: '암송구절',
      title: '오늘의 암송구절',
      note: '지친 순간에 다시 떠올릴 수 있도록 가까이 두세요.',
      verse: '“수고하고 무거운 짐 진 자들아 다 내게로 오라. 내가 너희를 쉬게 하리라.”',
      ref: '마태복음 11:28 (ESV)'
    },
    {
      icon: '✦',
      category: '암송구절',
      title: '오늘의 암송구절',
      note: '오늘의 염려를 내려놓으며 천천히 묵상해 보세요.',
      verse: '“아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 감사함으로 너희 구할 것을 하나님께 아뢰라.”',
      ref: '빌립보서 4:6 (ESV)'
    },
    {
      icon: '✦',
      category: '암송구절',
      title: '오늘의 암송구절',
      note: '하루를 시작하며 또는 마무리하며 읽기 좋은 말씀입니다.',
      verse: '“주의 말씀은 내 발에 등이요 내 길에 빛이니이다.”',
      ref: '시편 119:105 (ESV)'
    },
    {
      icon: '✦',
      category: '암송구절',
      title: '오늘의 암송구절',
      note: '하나님의 선하심을 붙들며 평안히 머물러 보세요.',
      verse: '“주는 나의 목자시니 내게 부족함이 없으리로다.”',
      ref: '시편 23:1 (ESV)'
    }
  ],
  en: [
    {
      icon: '✦',
      category: 'Memory Verse',
      title: "Today's Memory Verse",
      note: 'Keep this verse close and read it slowly through the day.',
      verse: '“The eternal God is your dwelling place, and underneath are the everlasting arms.”',
      ref: 'Deuteronomy 33:27 (ESV)'
    },
    {
      icon: '✦',
      category: 'Memory Verse',
      title: "Today's Memory Verse",
      note: 'A good verse to return to whenever your heart feels unsettled.',
      verse: '“Fear not, for I am with you; be not dismayed, for I am your God.”',
      ref: 'Isaiah 41:10 (ESV)'
    },
    {
      icon: '✦',
      category: 'Memory Verse',
      title: "Today's Memory Verse",
      note: 'Read it once now and again later in the day.',
      verse: '“Trust in the Lord with all your heart, and do not lean on your own understanding.”',
      ref: 'Proverbs 3:5 (ESV)'
    },
    {
      icon: '✦',
      category: 'Memory Verse',
      title: "Today's Memory Verse",
      note: 'A gentle verse for tired hearts and heavy days.',
      verse: '“Come to me, all who labor and are heavy laden, and I will give you rest.”',
      ref: 'Matthew 11:28 (ESV)'
    },
    {
      icon: '✦',
      category: 'Memory Verse',
      title: "Today's Memory Verse",
      note: 'Pause with this verse and turn today’s worries into prayer.',
      verse: '“Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.”',
      ref: 'Philippians 4:6 (ESV)'
    },
    {
      icon: '✦',
      category: 'Memory Verse',
      title: "Today's Memory Verse",
      note: 'A simple verse to carry into every decision and step.',
      verse: '“Your word is a lamp to my feet and a light to my path.”',
      ref: 'Psalm 119:105 (ESV)'
    },
    {
      icon: '✦',
      category: 'Memory Verse',
      title: "Today's Memory Verse",
      note: 'Let this promise steady your heart today.',
      verse: '“The Lord is my shepherd; I shall not want.”',
      ref: 'Psalm 23:1 (ESV)'
    }
  ]
};

let DAILY_MEMORY_VERSE_POOL = null;

function getDailyVersePlanEntry(){
  const plan = Array.isArray(window.DAILY_VERSE_365_PLAN) ? window.DAILY_VERSE_365_PLAN : [];
  if(!plan.length) return null;
  const dayIndex = getDayOfYear(new Date()) - 1;
  return plan[((dayIndex % plan.length) + plan.length) % plan.length];
}

function buildDailyMemoryVersePool(){
  if(DAILY_MEMORY_VERSE_POOL) return DAILY_MEMORY_VERSE_POOL;
  const poolMap = new Map();
  const addVerse = (ref, enVerse, koVerse) => {
    const normalizedRef = normalizeVerseRef(ref);
    const normalizedVerse = String(enVerse || '').trim();
    const normalizedKoVerse = String(koVerse || '').trim();
    if(!normalizedRef || !normalizedVerse || !normalizedKoVerse) return;
    if(!poolMap.has(normalizedRef)){
      poolMap.set(normalizedRef, {
        ref: normalizedRef,
        enVerse: normalizedVerse,
        koVerse: normalizedKoVerse
      });
    }
  };

  Object.values(EMOTIONS || {}).forEach(group => {
    (group.verses || []).forEach(verse => {
      if(verse && verse.esv && verse.r) addVerse(verse.r, verse.esv, getKoreanEsvText(verse.r, ''));
    });
  });

  (DB || []).forEach(topic => {
    (topic.verses || []).forEach(verse => {
      if(verse && verse.esv && verse.r) addVerse(verse.r, verse.esv, getKoreanEsvText(verse.r, ''));
    });
  });

  DAILY_MEMORY_VERSE_POOL = Array.from(poolMap.values());
  return DAILY_MEMORY_VERSE_POOL;
}

function getDayOfYear(date){
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function getLocalDateKey(date){
  const current = date || new Date();
  const year = current.getFullYear();
  const month = String(current.getMonth() + 1).padStart(2, '0');
  const day = String(current.getDate()).padStart(2, '0');
  return year + '-' + month + '-' + day;
}

function getTodayMemoryVerseData(lang){
  const plannedEntry = getDailyVersePlanEntry();
  if(plannedEntry && plannedEntry.memory){
    const ref = normalizeVerseRef(plannedEntry.memory.ref);
    return {
      icon: '✦',
      category: lang === 'ko' ? '암송구절' : 'Memory Verse',
      title: lang === 'ko' ? '오늘의 암송구절' : "Today's Memory Verse",
      note: lang === 'ko'
        ? '오늘의 묵상 말씀입니다. 이 말씀으로 주님과 조용히 교제해 보세요.'
        : 'This is today’s meditation verse. Take a quiet moment to meet with the Lord through this passage.',
      verse: lang === 'ko'
        ? getKoreanEsvText(ref, plannedEntry.memory.esv)
        : plannedEntry.memory.esv,
      ref: (lang === 'ko' ? ref : plannedEntry.memory.ref) + ' (ESV)'
    };
  }
  const pool = buildDailyMemoryVersePool();
  if(pool.length){
    const today = new Date();
    const dayIndex = getDayOfYear(today) - 1;
    const verse = pool[((dayIndex % pool.length) + pool.length) % pool.length];
    return {
      icon: '✦',
      category: lang === 'ko' ? '암송구절' : 'Memory Verse',
      title: lang === 'ko' ? '오늘의 암송구절' : "Today's Memory Verse",
      note: lang === 'ko'
        ? '오늘의 묵상 말씀입니다. 이 말씀으로 주님과 조용히 교제해 보세요.'
        : 'This is today’s meditation verse. Take a quiet moment to meet with the Lord through this passage.',
      verse: lang === 'ko' ? verse.koVerse : verse.enVerse,
      ref: verse.ref + ' (ESV)'
    };
  }
  const fallback = TODAY_MEMORY_VERSE_ROTATIONS[lang] || TODAY_MEMORY_VERSE_ROTATIONS.en;
  return fallback[0];
}

let DAILY_MEDITATION_POOL = null;
const HOMEPAGE_PROMISE_REF = 'Matthew 6:33';

const DAILY_MEDITATION_NOTES = {
  en: {
    'Emotions': 'A verse for the heart today. Read it slowly and let it steady your thoughts.',
    'Life Issues': 'A verse for today’s real-life needs. Carry this promise with you through the day.',
    'Spiritual Themes': 'A verse to draw you nearer to God today. Pause and reflect on it quietly.',
    default: 'A verse for today. Read it slowly and carry it with you throughout the day.'
  },
  ko: {
    'Emotions': '오늘의 마음에 이 말씀을 천천히 품어 보세요.',
    'Life Issues': '오늘의 삶의 자리에서 이 약속을 붙들어 보세요.',
    'Spiritual Themes': '오늘의 걸음 속에서 이 말씀으로 하나님께 더 가까이 나아가 보세요.',
    default: '오늘 하루 이 말씀을 천천히 읽고 마음에 품어 보세요.'
  }
};

function buildDailyMeditationPool(){
  if(DAILY_MEDITATION_POOL) return DAILY_MEDITATION_POOL;
  const pool = [];

  (DB || []).forEach(topic => {
    const category = String(topic?.cat || '').trim() || 'Spiritual Themes';
    const verses = Array.isArray(topic?.verses) ? topic.verses : [];
    verses.forEach(verse => {
      const ref = normalizeVerseRef(verse?.r);
      const enKjv = String(verse?.kjv || '').trim();
      const enEsv = String(verse?.esv || '').trim();
      const koKjv = String(getKoreanVerseText(ref, '') || '').trim();
      const koEsv = String(getKoreanEsvText(ref, '') || '').trim();
      if(!ref || !enKjv || !enEsv || !koKjv || !koEsv) return;
      pool.push({
        ref,
        category,
        enKjv,
        enEsv,
        koKjv,
        koEsv
      });
    });
  });

  DAILY_MEDITATION_POOL = pool;
  return DAILY_MEDITATION_POOL;
}

function getDailyMeditationNote(lang, category){
  const noteSet = DAILY_MEDITATION_NOTES[lang] || DAILY_MEDITATION_NOTES.en;
  return noteSet[category] || noteSet.default;
}

function getTodayMeditationData(lang){
  const plannedEntry = getDailyVersePlanEntry();
  if(plannedEntry && plannedEntry.meditation){
    const ref = normalizeVerseRef(plannedEntry.meditation.ref);
    if(ref !== HOMEPAGE_PROMISE_REF){
      const category = plannedEntry.meditation.categoryEn || 'Spiritual Themes';
      return {
        label: lang === 'ko' ? '✦ 오늘의 묵상 말씀 ✦' : '✦ Today’s Meditation Verse ✦',
        verse: lang === 'ko'
          ? getKoreanEsvText(ref, plannedEntry.meditation.esv)
          : plannedEntry.meditation.esv,
        ref: (lang === 'ko' ? ref : plannedEntry.meditation.ref) + ' (ESV)',
        note: getDailyMeditationNote(lang, category)
      };
    }
  }
  const pool = buildDailyMeditationPool();
  const dayIndex = getDayOfYear(new Date()) - 1;
  const noteLabel = lang === 'ko' ? '✦ 오늘의 묵상 말씀 ✦' : '✦ Today’s Meditation Verse ✦';

  if(pool.length){
    const memoryPool = buildDailyMemoryVersePool();
    const memoryRef = memoryPool.length
      ? memoryPool[((dayIndex % memoryPool.length) + memoryPool.length) % memoryPool.length].ref
      : '';
    let index = ((dayIndex * 17) + 11) % pool.length;
    let selected = pool[index];

    if(pool.length > 1){
      for(let tries = 0; tries < pool.length; tries += 1){
        const candidate = pool[(index + tries) % pool.length];
        if(candidate.ref !== memoryRef && normalizeVerseRef(candidate.ref) !== HOMEPAGE_PROMISE_REF){
          selected = candidate;
          break;
        }
      }
    }

    return {
      label: noteLabel,
      verse: lang === 'ko' ? selected.koEsv : selected.enEsv,
      ref: selected.ref + ' (ESV)',
      note: getDailyMeditationNote(lang, selected.category)
    };
  }

  return {
    label: noteLabel,
    verse: lang === 'ko'
      ? '“내게 능력 주시는 그리스도를 통하여 내가 모든 것을 할 수 있느니라.”'
      : '“I can do all things through him who strengthens me.”',
    ref: lang === 'ko' ? '빌립보서 4:13 (ESV)' : 'Philippians 4:13 (ESV)',
    note: getDailyMeditationNote(lang, 'default')
  };
}

function applyHomepageDailyMeditation(){
  if(!document.querySelector('.votd-band')) return;
  const lang = typeof window.getSiteLanguage === 'function' ? window.getSiteLanguage() : 'en';
  const data = getTodayMeditationData(lang);
  const labelEl = document.querySelector('.votd-lbl');
  const verseEl = document.querySelector('.votd-q');
  const refEl = document.querySelector('.votd-ref');
  const noteEl = document.querySelector('.votd-note');
  if(labelEl) labelEl.textContent = data.label;
  if(verseEl) verseEl.innerHTML = '&ldquo;' + data.verse + '&rdquo;';
  if(refEl) refEl.textContent = data.ref;
  if(noteEl) noteEl.textContent = data.note;
}

window.refreshDailyHomepageVerse = applyHomepageDailyMeditation;

function openTodayMemoryVersePopup(force){
  if(!document.getElementById('seniors') || !document.getElementById('modal-overlay')) return;
  const lang = typeof window.getSiteLanguage === 'function' ? window.getSiteLanguage() : 'en';
  const todayKey = getLocalDateKey();
  const storageKey = 'lm-gw-memory-popup-' + todayKey + '-' + lang;
  if(!force && localStorage.getItem(storageKey) === 'shown') return;
  const data = getTodayMemoryVerseData(lang);
  document.getElementById('m-icon').textContent = data.icon;
  document.getElementById('m-cat').textContent = data.category;
  document.getElementById('m-title').textContent = data.title;
  document.getElementById('m-note').textContent = data.note;
  document.getElementById('m-verses').innerHTML =
    '<div class="modal-v"><blockquote>&ldquo;' + data.verse + '&rdquo;</blockquote><cite>' + data.ref + '</cite></div>';
  document.getElementById('modal-overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
  localStorage.setItem(storageKey, 'shown');
}
window.openTodayMemoryVersePopup = openTodayMemoryVersePopup;

let dailyVerseRefreshTimer = null;
function scheduleDailyVerseRefresh(){
  if(dailyVerseRefreshTimer){
    window.clearTimeout(dailyVerseRefreshTimer);
  }
  const now = new Date();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 1, 0);
  dailyVerseRefreshTimer = window.setTimeout(() => {
    applyHomepageDailyMeditation();
    dailyVerseRefreshTimer = null;
    scheduleDailyVerseRefresh();
  }, Math.max(1000, nextMidnight.getTime() - now.getTime()));
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// TOPIC ACCORDION
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function tgl(btn){
  if(!btn)return;
  const panel=btn.nextElementSibling;
  if(!panel)return;
  const isOpen=btn.classList.contains('open');
  const col=btn.closest('.topic-col-card') || btn.parentElement?.parentElement || document;
  col.querySelectorAll('.topic-btn.open').forEach(b=>{
    b.classList.remove('open');
    if(b.nextElementSibling)b.nextElementSibling.classList.remove('open');
  });
  if(!isOpen){
    btn.classList.add('open');
    panel.classList.add('open');
    setTimeout(()=>btn.scrollIntoView({behavior:'smooth',block:'nearest'}),50);
  }
}

function bindTopicButtons(){
  document.querySelectorAll('.topic-btn').forEach(btn=>{
    if(btn.dataset.topicBound==='true'){
      return;
    }
    if(btn.getAttribute('onclick')){
      return;
    }
    btn.dataset.topicBound='true';
    btn.addEventListener('click', function(event){
      event.preventDefault();
      tgl(btn);
    });
  });
}
window.tgl=tgl;

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
  기쁨:'Joy',
  기뻐:'Joy',
  기뻐요:'Joy',
  기쁩니다:'Joy',
  너무기뻐요:'Joy',
  '너무 기뻐요':'Joy',
  즐거워요:'Joy',
  즐겁습니다:'Joy',
  행복해요:'Joy',
  행복합니다:'Joy',
  슬픔:'Sorrow & Grief',
  슬퍼:'Sorrow & Grief',
  슬퍼요:'Sorrow & Grief',
  슬픕니다:'Sorrow & Grief',
  '너무 슬퍼요':'Sorrow & Grief',
  너무슬퍼요:'Sorrow & Grief',
  '마음이 슬퍼요':'Sorrow & Grief',
  마음이슬퍼요:'Sorrow & Grief',
  '마음이 아파요':'Sorrow & Grief',
  마음이아파요:'Sorrow & Grief',
  '마음이 너무 아파요':'Sorrow & Grief',
  마음이너무아파요:'Sorrow & Grief',
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

function resolveHeroTopicQuery(query){
  const raw=String(query||'').trim();
  const lower=raw.toLowerCase();
  const normalized=normalizeTopicName(raw);
  const compact=normalized.replace(/\s+/g, '');
  const direct=EXACT_TOPIC_QUERY_MAP[lower] || EXACT_TOPIC_QUERY_MAP[raw] || EXACT_TOPIC_QUERY_MAP[normalized] || EXACT_TOPIC_QUERY_MAP[compact];
  if(direct)return TOPIC_NAME_ALIASES[direct] || direct;
  if(TOPIC_LOOKUP_BY_LABEL[normalized])return TOPIC_LOOKUP_BY_LABEL[normalized];
  const localizedMatch=Object.keys(TOPIC_RESULT_KO).find(key=>{
    const ko=TOPIC_RESULT_KO[key] || {};
    return normalizeTopicName(ko.name)===normalized || normalizeTopicName(ko.name).includes(normalized);
  });
  if(localizedMatch)return localizedMatch;
  const englishMatch=(DB || []).find(topic=>{
    const topicName=normalizeTopicName(topic.name);
    return topicName===normalized || topicName.includes(normalized);
  });
  return englishMatch ? englishMatch.name : '';
}

function getHeroTopicHaystack(topic){
  const localized=getLocalizedTopicResult(topic, 'ko');
  const aliasLabels=Object.keys(TOPIC_NAME_ALIASES)
    .filter(label=>TOPIC_NAME_ALIASES[label]===topic.name)
    .join(' ');
  return (
    topic.name+' '+topic.cat+' '+topic.keys+' '+topic.note+' '+
    localized.name+' '+localized.cat+' '+localized.note+' '+
    aliasLabels+' '+
    topic.verses.map(v=>(v.t||v.esv||'')+' '+(v.kjv||'')+' '+v.r).join(' ')
  ).toLowerCase();
}

const HERO_INTENT_PHRASES = {
  'Joy': ['기쁨','기뻐','기뻐요','기쁩니다','즐거워','즐거워요','행복해','행복해요','감격','좋아요','감사해요','joy','joyful','rejoice','happy','happiness','delight','glad'],
  'Sorrow & Grief': ['슬픔','슬퍼','슬프','마음이 아파','마음이 너무 아파','마음 아파','마음 아프','가슴 아파','가슴 아프','눈물','울고','울어요','상처','상실','잃었','떠났','그리워','애통','sorrow','sad','sadness','grief','grieving','tears','crying','heartbroken','heartbreak','loss','lost someone'],
  'Fear': ['두려움','두려워','무서워','겁나','불길','걱정돼','fear','afraid','scared','terrified','frightened','panic','danger'],
  'Anxiety & Worry': ['불안','염려','걱정','초조','긴장','마음이 불편','압박','스트레스','anxiety','anxious','worry','worried','stress','stressed','overthinking','nervous','uneasy'],
  'Loneliness': ['외로움','외로워','혼자','고립','버려진','아무도 없어','친구가 없어','lonely','alone','isolated','abandoned','rejected','no one','forgotten'],
  'Illness & Sickness': ['질병','아픔','아파','병','병원','수술','치료','건강','암','통증','sick','ill','illness','sickness','disease','hospital','healing','pain','cancer','surgery'],
  'Caregiving & Support': ['간병','돌봄','돌보고','돌보는','보호자','가족을 돌','가족이 아파','환자 돌','지쳐','caregiver','caregiving','taking care','supporting family','patient'],
  'Death & Dying': ['죽음','임종','돌아가','세상 떠','생의 마지막','death','dying','terminal','end of life','passed away'],
  'Grief & Funeral Comfort': ['장례','장례식','추모','위로가 필요','위로해','bereavement','funeral','memorial','burial','comfort me','need comfort'],
  'Forgiveness': ['용서','미움','원망','상대가 미워','배신','화해','forgive','forgiveness','resentment','betrayed','betrayal','grudge','reconcile'],
  'Marriage & Family': ['결혼','가정','부부','남편','아내','가족','자녀','부모','marriage','family','husband','wife','children','parenting','parents'],
  'Money & Financial Worry': ['재정','돈','돈 걱정','빚','월세','렌트','생활비','경제','직장 잃','수입','financial','financial worry','money','money worry','worried about bills','debt','rent','bills','income','job loss'],
  'Work & Calling': ['직장','일터','사업','소명','일이 힘','career','work','job','calling','business'],
  'Decision-Making & Wisdom': ['결정','선택','어떻게 해야','길을 몰라','지혜','인도','decision','choose','choice','wisdom','guidance','what should i do'],
  'Faith & Trust': ['믿음','신뢰','의심','믿기 어려','하나님을 못 느','faith','trust','doubt','doubting','hard to believe'],
  'Hope': ['소망','희망','절망','막막','앞이 안 보여','hope','hopeless','future','despair','no hope'],
  'Peace': ['평안','평화','마음의 쉼','쉬고 싶','calm','peace','rest','restless','quiet heart'],
  'Strength': ['힘','새 힘','버틸 힘','감당','지쳤','피곤','strength','strong','weary','tired','exhausted','endure'],
  'Discouragement': ['낙심','실망','포기','넘어졌','실패','discouraged','discouragement','defeated','give up','failure'],
  'Depression & Discouragement': ['우울','침체','무기력','어두운 마음','살기 힘','depression','depressed','darkness','heavy heart','emotional pain'],
  'Sleep & Insomnia': ['잠','불면','잠이 안','잠 못','밤마다','sleep','insomnia','sleepless','cannot sleep','can not sleep'],
  'Prayer': ['기도','중보','하나님께 말','pray','prayer','intercession','talk to god'],
  'Grace & Mercy': ['은혜','자비','긍휼','받을 자격','grace','mercy','compassion'],
  'Salvation': ['구원','복음','예수 믿','영생','salvation','saved','gospel','eternal life','born again'],
  "God's Presence": ['임재','하나님이 멀','하나님이 계','함께하심','presence','god feels far','god is near','with me'],
  'Heaven & Eternity': ['천국','영원','내세','heaven','eternity','afterlife'],
  'Gratitude': ['감사','고마움','thankful','gratitude','grateful','thanksgiving'],
  'Love': ['사랑','긍휼','love','compassion'],
  'Anger': ['분노','화가','짜증','억울','anger','angry','rage','frustrated'],
  'Addiction & Recovery': ['중독','끊고 싶','습관을 못','회복','addiction','recovery','relapse','habit','bondage'],
  'New Beginnings & Change': ['새 시작','변화','이사','새로운 길','new beginning','change','new chapter'],
  'Aging & Senior Life': ['노년','시니어','나이 들어','늙어','aging','senior','old age'],
  'Worship & Praise': ['예배','찬양','worship','praise'],
  'Evangelism & Witness': ['전도','증언','복음 전','evangelism','witness','share the gospel']
};

function getHeroIntentScore(query, topicName){
  const phrases=HERO_INTENT_PHRASES[topicName] || [];
  const normalizedQuery=normalizeTopicName(query);
  const lowerQuery=String(query||'').toLowerCase();
  return phrases.reduce((score, phrase)=>{
    const normalizedPhrase=normalizeTopicName(phrase);
    if(!normalizedPhrase)return score;
    if(normalizedQuery.includes(normalizedPhrase) || lowerQuery.includes(String(phrase).toLowerCase())){
      return score + Math.max(3, normalizedPhrase.length > 5 ? 5 : 3);
    }
    return score;
  }, 0);
}

function doHeroSearch(){
  const q=inp.value.trim().toLowerCase();
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  if(!q){clearHeroSearch();return;}
  cb.style.display='block';
  const words=typeof normalizeWords==='function'
    ? normalizeWords(q)
    : q.split(/\s+/).filter(w=>w.length>1);
  const exactTopicName = resolveHeroTopicQuery(q);
  const matched=exactTopicName
    ? DB.filter(t=>t.name===exactTopicName)
    : DB
      .map(t=>{
        const hay=getHeroTopicHaystack(t);
        const keywordScore=words.reduce((sum,w)=>sum+(hay.includes(w)?1:0),0);
        const intentScore=getHeroIntentScore(q, t.name);
        const score=keywordScore + intentScore;
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
            const kjvText = lang==='ko' ? getKoreanVerseText(v.r, v.kjv) : v.kjv;
            const esvText = lang==='ko' ? getKoreanEsvText(v.r, v.esv) : v.esv;
            return '<div class="res-dual dual-verse">'
              +'<div class="dv-tabs">'
              +'<button class="dv-tab active" onclick="rTab(this)">'+getKjvLabel()+'</button>'
              +'<button class="dv-tab" onclick="rTab(this)">ESV</button>'
              +'</div>'
              +'<div class="dv-content active" id="'+rid+'-kjv"><p>&ldquo;'+hl(kjvText,words)+'&rdquo;</p><cite>'+v.r+'</cite></div>'
              +'<div class="dv-content" id="'+rid+'-esv"><p>&ldquo;'+hl(esvText,words)+'&rdquo;</p><cite>'+v.r+' (ESV)</cite></div>'
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

// â”€â”€ DUAL TRANSLATION HELPER â”€â”€
let dvCounter = 0;
function dualVerse(kjv, esv, ref) {
  const id = 'dv' + (++dvCounter);
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  const kjvText = lang==='ko' ? getKoreanVerseText(ref, kjv) : kjv;
  return '<div class="dual-verse">'
    + '<div class="dv-tabs">'
    + '<button class="dv-tab active" onclick="switchTab(this,\'' + id + '-kjv\')">' + getKjvLabel() + '</button>'
    + '<button class="dv-tab" onclick="switchTab(this,\'' + id + '-esv\')">ESV</button>'
    + '</div>'
    + '<div class="dv-content active" id="' + id + '-kjv"><p>&ldquo;' + kjvText + '&rdquo;</p><cite>' + ref + '</cite></div>'
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
  var target=null;
  for(var j=0;j<children.length;j++){
    if(children[j].id===contentId){
      target=children[j];
      break;
    }
  }
  if(target){ target.style.display='block'; target.classList.add('active'); }
}

function getTopicButtonLabel(btn){
  if(!btn)return '';
  const clone=btn.cloneNode(true);
  clone.querySelectorAll('.t-icon').forEach(icon=>icon.remove());
  return clone.textContent.trim();
}

function resolveTopicKeyFromLabel(label){
  if(!label)return null;
  const normalized=normalizeTopicName(label);
  return TOPIC_LOOKUP_BY_LABEL[normalized] || null;
}

function renderTopicBonusVerseCard(topicKey, verseData){
  const id='tpx'+(++dvCounter);
  const lang=typeof window.getSiteLanguage==='function' ? window.getSiteLanguage() : 'en';
  const kjvText=lang==='ko'
    ? (verseData.koKjv || getKoreanVerseText(verseData.r, verseData.kjv))
    : verseData.kjv;
  const esvText=lang==='ko'
    ? (verseData.koEsv || getKoreanEsvText(verseData.r, verseData.esv))
    : verseData.esv;
  const refLabel=escapeHtml(verseData.r);
  return '<div class="topic-bonus-card" data-topic-bonus="true" data-topic-key="'+escapeAttr(topicKey)+'" style="margin-bottom:9px;border-radius:4px;overflow:hidden;border:1px solid var(--border);">'
    + '<div class="dv-tabs" style="border-bottom:1px solid var(--border);">'
    + '<button class="dv-tab active" onclick="switchTab(this,\'' + id + '-kjv\')" style="font-size:9px;padding:5px 10px;">' + getKjvLabel() + '</button>'
    + '<button class="dv-tab" onclick="switchTab(this,\'' + id + '-esv\')" style="font-size:9px;padding:5px 10px;">ESV</button>'
    + '</div>'
    + '<div class="dv-content active" id="' + id + '-kjv" style="padding:10px 14px;background:#fff;"><p style="font-family:\'Cormorant Garamond\',serif;font-size:16px;font-style:italic;color:var(--deep);line-height:1.5;margin-bottom:4px;">&ldquo;' + escapeHtml(kjvText) + '&rdquo;</p><cite style="font-family:\'Cinzel\',serif;font-size:10px;letter-spacing:.1em;color:var(--gold);">' + refLabel + '</cite></div>'
    + '<div class="dv-content" id="' + id + '-esv" style="padding:10px 14px;background:#fff;"><p style="font-family:\'Cormorant Garamond\',serif;font-size:16px;font-style:italic;color:var(--deep);line-height:1.5;margin-bottom:4px;">&ldquo;' + escapeHtml(esvText) + '&rdquo;</p><cite style="font-family:\'Cinzel\',serif;font-size:10px;letter-spacing:.1em;color:var(--gold);">' + refLabel + ' (ESV)</cite></div>'
    + '</div>';
}

function injectTopicBonusVerses(){
  const topicsRoot=document.getElementById('topics');
  if(!topicsRoot)return;
  topicsRoot.querySelectorAll('.topic-item').forEach(item=>{
    const btn=item.querySelector('.topic-btn');
    const inner=item.querySelector('.tp-inner');
    if(!btn || !inner)return;
    inner.querySelectorAll('[data-topic-bonus="true"]').forEach(el=>el.remove());
    const topicKey=resolveTopicKeyFromLabel(getTopicButtonLabel(btn));
    const bonusVerses=topicKey ? TOPIC_BONUS_VERSES[topicKey] : null;
    if(!bonusVerses || !bonusVerses.length)return;
    bonusVerses.forEach(verseData=>{
      inner.insertAdjacentHTML('beforeend', renderTopicBonusVerseCard(topicKey, verseData));
    });
  });
}

function updateStaticKjvCards(){
  const lang=typeof window.getSiteLanguage==='function' ? window.getSiteLanguage() : 'en';
  document.querySelectorAll('.dv-tabs').forEach(tabs=>{
    const firstButton=tabs.querySelector('.dv-tab');
    if(firstButton){
      firstButton.textContent=getKjvLabel();
    }
  });
  document.querySelectorAll('.dv-content').forEach(panel=>{
    const refEl=panel.querySelector('cite, span');
    const verseEl=panel.querySelector('p, blockquote');
    if(!refEl || !verseEl)return;
    const refText=(refEl.textContent||'').trim();
    if(!refText || /\(ESV\)/i.test(refText))return;
    const ref=refText.replace(/\s*\(KJV\)\s*$/i,'').trim();
    if(!verseEl.dataset.kjvOriginal){
      verseEl.dataset.kjvOriginal=verseEl.textContent.trim().replace(/^["“”]+|["“”]+$/g,'');
    }
    const nextText=lang==='ko' ? getKoreanVerseText(ref, verseEl.dataset.kjvOriginal) : verseEl.dataset.kjvOriginal;
    verseEl.innerHTML='&ldquo;'+escapeHtml(nextText)+'&rdquo;';
  });
}

function updateStaticTopicEsvCards(){
  const lang=typeof window.getSiteLanguage==='function' ? window.getSiteLanguage() : 'en';
  document.querySelectorAll('#topics .dv-content, #situations .dv-content, #emotions .dv-content').forEach(panel=>{
    const refEl=panel.querySelector('cite, span');
    const verseEl=panel.querySelector('p, blockquote');
    if(!refEl || !verseEl)return;
    const refText=(refEl.textContent||'').trim();
    if(!/\(ESV\)/i.test(refText)){
      return;
    }
    const ref=refText.replace(/\s*\(ESV\)\s*$/i,'').trim();
    if(!verseEl.dataset.esvOriginal){
      verseEl.dataset.esvOriginal=verseEl.textContent.trim().replace(/^["“”]+|["“”]+$/g,'');
    }
    const nextText=lang==='ko' ? getKoreanEsvText(ref, verseEl.dataset.esvOriginal) : verseEl.dataset.esvOriginal;
    verseEl.innerHTML='&ldquo;'+escapeHtml(nextText)+'&rdquo;';
  });
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
bindTopicButtons();
injectTopicBonusVerses();
updateStaticKjvCards();
updateStaticTopicEsvCards();
window.addEventListener('lifeword:languagechange', injectTopicBonusVerses);
window.addEventListener('lifeword:languagechange', updateStaticKjvCards);
window.addEventListener('lifeword:languagechange', updateStaticTopicEsvCards);
window.addEventListener('lifeword:languagechange', applyHomepageDailyMeditation);

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// TRAVEL GALLERY â€” LIGHTBOX
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function openLightbox(src,alt,evt){
  if(evt)evt.stopPropagation();
  const lb=document.getElementById('gallery-lightbox');
  const img=document.getElementById('gallery-lightbox-image');
  if(!lb || !img)return false;
  img.src='';
  setTimeout(()=>{
    img.src=src;
    img.alt=alt||'';
  },10);
  const cap=document.getElementById('gallery-lightbox-caption');
  if(cap)cap.textContent=alt||'';
  lb.style.display='flex';
  lb.classList.add('show');
  document.body.style.overflow='hidden';
  return true;
}
function closeLightbox(event){
  if(event){
    event.stopPropagation();
    const closeButton=event.target.closest ? event.target.closest('.gallery-lightbox-close') : null;
    const returnButton=event.target.closest ? event.target.closest('.gallery-lightbox-return') : null;
    if(event.target.id!=='gallery-lightbox' && !closeButton && !returnButton)return;
  }
  const lb=document.getElementById('gallery-lightbox');
  if(!lb)return;
  lb.classList.remove('show');
  lb.style.display='none';
  const img=document.getElementById('gallery-lightbox-image');
  if(img)img.src='';
  document.body.style.overflow='';
}
function handleGalleryThumbClick(link,event){
  if(!link)return true;
  const src=link.dataset.src || link.getAttribute('href') || '';
  const title=link.dataset.title || link.getAttribute('aria-label') || '';
  if(!src)return true;
  if(event)event.preventDefault();
  openLightbox(src,title,event);
  return false;
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
  {
    id:'g1-en',
    language:'en',
    src:'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=500&q=75',
    title:'Ancient Church Ruins in Türkiye',
    summary:'A quiet place where history, prayer, and reflection seem to linger in the stones.',
    caption:'Ancient Church Ruins in Türkiye'
  },
  {
    id:'g2-en',
    language:'en',
    src:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75',
    title:'Sunrise Over Cappadocia',
    summary:'Soft morning light and drifting balloons create a peaceful beginning to the day.',
    caption:'Sunrise Over Cappadocia'
  },
  {
    id:'g3-en',
    language:'en',
    src:'https://images.unsplash.com/photo-1609788935434-3c1d2945a57f?w=500&q=75',
    title:'A Bright Moment in New York',
    summary:'A city scene that captures movement, light, and a sense of wonder in ordinary life.',
    caption:'A Bright Moment in New York'
  },
  {
    id:'g4-en',
    language:'en',
    src:'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=500&q=75',
    title:'A Gentle Path for Reflection',
    summary:'A quiet travel moment that invites stillness, gratitude, and calm reflection.',
    caption:'A Gentle Path for Reflection'
  },
  {
    id:'g5-en',
    language:'en',
    src:'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&q=75',
    title:'Creation in Full Beauty',
    summary:'Wide skies, open land, and living color remind us how much beauty surrounds us.',
    caption:'Creation in Full Beauty'
  },
  {
    id:'g6-en',
    language:'en',
    src:'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=75',
    title:'Home in Edmonton',
    summary:'A familiar place remembered with warmth, gratitude, and a sense of belonging.',
    caption:'Home in Edmonton'
  },
  {
    id:'g1-ko',
    language:'ko',
    src:'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=500&q=75',
    title:'튀르키예의 오래된 교회 유적',
    summary:'역사와 기도의 흔적이 조용히 머무는 듯한 장소의 분위기를 담았습니다.',
    caption:'튀르키예의 오래된 교회 유적'
  },
  {
    id:'g2-ko',
    language:'ko',
    src:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75',
    title:'카파도키아의 해뜨는 아침',
    summary:'부드러운 아침 빛과 떠오르는 열기구가 평안한 하루의 시작을 보여 줍니다.',
    caption:'카파도키아의 해뜨는 아침'
  },
  {
    id:'g3-ko',
    language:'ko',
    src:'https://images.unsplash.com/photo-1609788935434-3c1d2945a57f?w=500&q=75',
    title:'뉴욕의 빛나는 한순간',
    summary:'도시의 움직임과 빛 속에서도 특별한 아름다움이 느껴지는 장면입니다.',
    caption:'뉴욕의 빛나는 한순간'
  },
  {
    id:'g4-ko',
    language:'ko',
    src:'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=500&q=75',
    title:'조용히 머물게 하는 길',
    summary:'잠시 걸음을 늦추고 고요히 생각하게 만드는 여행의 한순간입니다.',
    caption:'조용히 머물게 하는 길'
  },
  {
    id:'g5-ko',
    language:'ko',
    src:'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&q=75',
    title:'창조의 가득한 아름다움',
    summary:'넓은 하늘과 살아 있는 색감이 자연의 풍성함과 평안을 전해 줍니다.',
    caption:'창조의 가득한 아름다움'
  },
  {
    id:'g6-ko',
    language:'ko',
    src:'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=75',
    title:'에드먼턴, 익숙한 집 같은 풍경',
    summary:'따뜻한 기억과 감사가 스며 있는 익숙한 장소의 정취를 담았습니다.',
    caption:'에드먼턴, 익숙한 집 같은 풍경'
  }
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
const HOMEPAGE_VISIT_REMOTE_SESSION_KEY='lifeword.homepageVisit.remoteSession';
const HOMEPAGE_VISIT_REMOTE_ID_KEY='lifeword.homepageVisit.remoteId';
const HOMEPAGE_VISIT_LANGUAGES_KEY='lifeword.homepageVisit.languages.v1';
const HOMEPAGE_VISIT_REMOTE_SESSION_VALUE_KEY='lifeword.homepageVisit.remoteSessionValue.v1';
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
  if(item.mediaKind==='pdf'){
    return '';
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
  if(item.mediaKind==='pdf' && mediaLink){
    actions.push(`<a class="living-word-link-btn living-word-link-btn-secondary" href="${escapeAttr(mediaLink)}" target="_blank" rel="noopener noreferrer">${getLivingWordOpenPdfLabel()}</a>`);
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
  const lang=getHomepageVisitLanguage();
  recordHomepageVisitForLanguage(lang);
  if(!sessionStorage.getItem(HOMEPAGE_VISIT_SESSION_KEY)){
    const stats=loadVisitStats();
    stats.browserSessions=(stats.browserSessions||0)+1;
    saveVisitStats(stats);
    sessionStorage.setItem(HOMEPAGE_VISIT_SESSION_KEY,'true');
  }
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
  recordHomepageVisitForLanguage(next);
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

function getLivingWordOpenPdfLabel(){
  const lang=typeof window.getSiteLanguage==='function' ? window.getSiteLanguage() : 'en';
  return lang==='ko' ? 'PDF 열기' : 'Open PDF';
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

function recordHomepageVisitForLanguage(lang){
  const normalized=lang==='ko' ? 'ko' : 'en';
  if(hasHomepageVisitLanguageRecorded(normalized)){
    return;
  }
  const stats=loadVisitStats();
  const nowIso=new Date().toISOString();
  stats.totalViews=(stats.totalViews||0)+1;
  stats.lastVisitedAt=nowIso;
  stats.history=Array.isArray(stats.history)?stats.history:[];
  stats.history.push({at:nowIso,lang:normalized});
  if(stats.history.length>5000){
    stats.history=stats.history.slice(-5000);
  }
  saveVisitStats(stats);
  markHomepageVisitLanguageRecorded(normalized);
  void recordHomepageVisitRemote(nowIso, normalized);
}

function hasHomepageVisitLanguageRecorded(lang){
  try{
    const raw=sessionStorage.getItem(HOMEPAGE_VISIT_LANGUAGES_KEY);
    if(!raw){
      return false;
    }
    const parsed=JSON.parse(raw);
    return Boolean(parsed && parsed[lang==='ko'?'ko':'en']);
  }catch(_error){
    return false;
  }
}

function markHomepageVisitLanguageRecorded(lang){
  try{
    const normalized=lang==='ko' ? 'ko' : 'en';
    const raw=sessionStorage.getItem(HOMEPAGE_VISIT_LANGUAGES_KEY);
    const parsed=raw ? JSON.parse(raw) : {};
    parsed[normalized]=true;
    sessionStorage.setItem(HOMEPAGE_VISIT_LANGUAGES_KEY, JSON.stringify(parsed));
  }catch(_error){}
}

async function recordHomepageVisitRemote(nowIso, lang){
  if(!supabaseClient){
    return;
  }
  try{
    const sessionKey=getHomepageVisitRemoteSessionKey();
    const payload={
      visited_at: nowIso,
      language: lang==='ko' ? 'ko' : 'en',
      page_path: window.location.pathname || '/',
      session_key: sessionKey
    };
    const { error } = await supabaseClient
      .from('homepage_visits')
      .insert(payload)
      .select('id');
    if(error){
      return;
    }
    sessionStorage.setItem(HOMEPAGE_VISIT_REMOTE_SESSION_KEY, 'true');
  }catch(_error){}
}

function getHomepageVisitRemoteSessionKey(){
  const existing=sessionStorage.getItem(HOMEPAGE_VISIT_REMOTE_SESSION_VALUE_KEY);
  if(existing && existing !== 'true'){
    return existing;
  }
  const generated=`hv-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;
  sessionStorage.setItem(HOMEPAGE_VISIT_REMOTE_SESSION_VALUE_KEY, generated);
  return generated;
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
      <a class="gallery-thumb" href="${escapeAttr(item.src)}" data-src="${escapeAttr(item.src)}" data-title="${escapeAttr((item.title||item.summary||item.caption||'Gallery photo').trim())}" aria-label="${escapeAttr((item.title||item.summary||item.caption||'Gallery photo').trim())}" onclick="return handleGalleryThumbClick(this,event)">
        <img src="${escapeAttr(item.src)}" alt="${escapeAttr((item.title||item.summary||item.caption||'Gallery photo').trim())}" loading="lazy">
      </a>
      ${buildGalleryCaptionHtml(item)}
    </div>`).join('');
    grid.querySelectorAll('.gallery-thumb').forEach(btn=>{
      btn.addEventListener('click',event=>{
        handleGalleryThumbClick(btn,event);
      });
      btn.addEventListener('keydown',event=>{
        if(event.key==='Enter' || event.key===' '){
          handleGalleryThumbClick(btn,event);
        }
      });
    });
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

const GUESTBOOK_PREVIEW_LIMIT=48;

function getGuestbookPreview(message){
  const text=String(message||'').trim();
  if(text.length<=GUESTBOOK_PREVIEW_LIMIT){
    return {preview:text,isLong:false};
  }
  return {preview:text.slice(0,GUESTBOOK_PREVIEW_LIMIT).trimEnd()+'...',isLong:true};
}

window.toggleGuestbookEntry=function(button){
  const entry=button.closest('.guestbook-entry');
  if(!entry)return;
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  const expanded=entry.classList.toggle('expanded');
  button.textContent=expanded?(lang==='ko'?'접기':'Show Less'):(lang==='ko'?'전체 보기':'Read More');
  button.setAttribute('aria-expanded',expanded?'true':'false');
};

function renderGuestbook(){
  const list=document.getElementById('guestbook-list');
  const empty=document.getElementById('guestbook-empty');
  const lang=typeof window.getSiteLanguage==='function'?window.getSiteLanguage():'en';
  const visibleEntries=guestbookEntries.filter(entry => (entry.language === 'ko' ? 'ko' : 'en') === lang);
  const replyLabel=lang==='ko'?'운영자 답글':'Reply from Admin';
  const readMoreLabel=lang==='ko'?'전체 보기':'Read More';
  if(!list||!empty)return;
  if(!visibleEntries.length){
    list.innerHTML='';
    empty.style.display='block';
    return;
  }
  empty.style.display='none';
  list.innerHTML=visibleEntries.map(entry=>{
    const messagePreview=getGuestbookPreview(entry.message||'');
    return '<article class="guestbook-entry">'
      +'<div class="guestbook-entry-head">'
      +'<div class="guestbook-entry-topline">'
      +'<div class="guestbook-entry-name">'+escapeHtml(entry.name||(lang==='ko'?'방문자':'Guest'))+'</div>'
      +(entry.reactionEmoji?'<div class="guestbook-entry-reaction" aria-label="Guestbook reaction">'+escapeHtml(entry.reactionEmoji)+'</div>':'')
      +'</div>'
      +'<div class="guestbook-entry-date">'+formatGuestbookDate(entry.createdAt)+'</div>'
      +'</div>'
      +'<div class="guestbook-entry-message guestbook-entry-preview">'+escapeHtml(messagePreview.preview)+'</div>'
      +(messagePreview.isLong?'<div class="guestbook-entry-message guestbook-entry-full">'+escapeHtml(entry.message||'')+'</div><button class="guestbook-read-more" type="button" aria-expanded="false" onclick="toggleGuestbookEntry(this)">'+escapeHtml(readMoreLabel)+'</button>':'')
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
    alert(lang==='ko'?'이름과 메시지를 모두 입력해 주세요.':'Please enter both your name and your message.');
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
      alert(lang==='ko'
        ? '이 글은 온라인 Supabase에 저장되지 못했고, 현재 브라우저에만 임시 저장됩니다. 그래서 관리자 페이지에는 보이지 않을 수 있습니다.'
        : 'This message could not be saved to online Supabase and is being stored only in this browser for now. That is why it may not appear on the admin page.');
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
  if(value.startsWith('data:application/pdf') || /\.(pdf)(\?|#|$)/.test(value)) return 'pdf';
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

bindTopicButtons();

window.addEventListener('load', ()=>{
applyHomepageDailyMeditation();
  scheduleDailyVerseRefresh();
  window.setTimeout(()=>openTodayMemoryVersePopup(false), 700);
});




