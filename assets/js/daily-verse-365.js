(function(){
  const TOPIC_KO_BY_EN = {
    'Joy': '기쁨과 즐거움',
    'Sorrow & Grief': '슬픔과 장례를 위한 말씀',
    'Peace': '평안',
    'Hope': '소망',
    'Fear': '두려움',
    'Anxiety & Worry': '불안과 염려',
    'Loneliness': '외로움',
    'Anger': '분노와 답답함',
    'Gratitude': '감사',
    'Guilt & Regret': '죄책감과 후회',
    'Discouragement': '낙심',
    'Contentment & Satisfaction': '자족과 만족',
    'Depression & Discouragement': '우울과 깊은 침체',
    'Sleep & Insomnia': '수면과 불면',
    'Suffering & Trials': '고난과 시련',
    'Illness & Sickness': '질병과 아픔',
    'Caregiving & Support': '돌봄과 간병',
    'Addiction & Recovery': '중독과 회복',
    'Death & Dying': '죽음과 임종',
    'Grief & Funeral Comfort': '슬픔과 장례를 위한 말씀',
    'Forgiveness': '용서',
    'Marriage & Family': '결혼과 가정',
    'Relationship Conflict': '관계의 갈등',
    'Money & Financial Worry': '재정과 돈 걱정',
    'Decision-Making & Wisdom': '결정과 지혜',
    'Aging & Senior Life': '노년과 시니어의 삶',
    'New Beginnings & Change': '새로운 시작과 변화',
    'Faith & Trust': '믿음과 신뢰',
    'Prayer': '기도와 중보',
    'Grace & Mercy': '은혜와 자비',
    'Salvation': '구원과 속량',
    'Heaven & Eternity': '천국과 영원',
    'Strength': '힘과 용기',
    "God's Presence": '하나님의 임재와 위로'
  };

  const MONTH_LENGTHS = [31,28,31,30,31,30,31,31,30,31,30,31];
  const MONTH_THEME_FLOW = [
    ['New Beginnings & Change','Hope','Faith & Trust','Peace'],
    ['Prayer','Grace & Mercy','Contentment & Satisfaction','Decision-Making & Wisdom'],
    ['Fear','Anxiety & Worry','Strength','God\'s Presence'],
    ['Salvation','Grace & Mercy','Forgiveness','Joy'],
    ['Marriage & Family','Relationship Conflict','Caregiving & Support','Love'],
    ['Work & Calling','Money & Financial Worry','Decision-Making & Wisdom','Contentment & Satisfaction'],
    ['Joy','Gratitude','Worship & Praise','Hope'],
    ['Suffering & Trials','Illness & Sickness','Strength','Peace'],
    ['Parenting & Children','Aging & Senior Life','God\'s Presence','Prayer'],
    ['Discouragement','Depression & Discouragement','Sleep & Insomnia','Faith & Trust'],
    ['Death & Dying','Grief & Funeral Comfort','Heaven & Eternity','Hope'],
    ['Gratitude','Joy','Heaven & Eternity','God\'s Presence']
  ];

  const MONTH_MEDITATION_FLOW = [
    ['Faith & Trust','Prayer','Grace & Mercy','Hope'],
    ['Decision-Making & Wisdom','Contentment & Satisfaction','Peace','God\'s Presence'],
    ['Strength','Fear','Hope','Prayer'],
    ['Forgiveness','Salvation','Joy','Love'],
    ['Caregiving & Support','Relationship Conflict','Marriage & Family','Grace & Mercy'],
    ['Work & Calling','Money & Financial Worry','Decision-Making & Wisdom','Faith & Trust'],
    ['Gratitude','Joy','Hope','Worship & Praise'],
    ['Suffering & Trials','Illness & Sickness','Peace','God\'s Presence'],
    ['Aging & Senior Life','New Beginnings & Change','Parenting & Children','Prayer'],
    ['Discouragement','Sleep & Insomnia','Faith & Trust','Strength'],
    ['Heaven & Eternity','Grief & Funeral Comfort','God\'s Presence','Hope'],
    ['Grace & Mercy','Joy','Heaven & Eternity','Peace']
  ];

  function monthFromDay(day){
    let running = 0;
    for(let monthIndex = 0; monthIndex < MONTH_LENGTHS.length; monthIndex += 1){
      const next = running + MONTH_LENGTHS[monthIndex];
      if(day <= next){
        return { monthIndex, dayInMonth: day - running };
      }
      running = next;
    }
    return { monthIndex: 11, dayInMonth: 31 };
  }

  function buildSourceEntries(){
    const entries = [];
    (DB || []).forEach(topic => {
      const topicEn = String(topic?.name || '').trim();
      const topicKo = TOPIC_KO_BY_EN[topicEn] || topicEn;
      const categoryEn = String(topic?.cat || '').trim() || 'Spiritual Themes';
      const categoryKo = categoryEn === 'Emotions'
        ? '감정'
        : categoryEn === 'Life Issues'
          ? '삶의 문제'
          : '영적 주제';
      (topic?.verses || []).forEach((verse, index) => {
        const ref = String(verse?.r || '').trim();
        const kjv = String(verse?.kjv || '').trim();
        const esv = String(verse?.esv || '').trim();
        if(!ref || !kjv || !esv) return;
        entries.push({
          id: topicEn + '-' + index,
          topicEn,
          topicKo,
          categoryEn,
          categoryKo,
          ref,
          kjv,
          esv
        });
      });
    });
    return entries;
  }

  function groupByTopic(entries){
    return entries.reduce((acc, entry) => {
      (acc[entry.topicEn] = acc[entry.topicEn] || []).push(entry);
      return acc;
    }, {});
  }

  function uniqueAvailableTopics(requestedTopics, topicMap, fallbackTopics){
    const seen = new Set();
    const result = [];
    requestedTopics.forEach(topic => {
      if(topicMap[topic] && !seen.has(topic)){
        seen.add(topic);
        result.push(topic);
      }
    });
    if(result.length){
      return result;
    }
    return fallbackTopics;
  }

  function pickEntryForDay(topics, topicMap, dayInMonth, bias){
    const topicIndex = (dayInMonth - 1 + bias) % topics.length;
    const topicName = topics[topicIndex];
    const verses = topicMap[topicName] || [];
    const verseIndex = Math.floor((dayInMonth - 1 + bias) / topics.length) % verses.length;
    return verses[verseIndex];
  }

  function buildDailyVerse365Plan(){
    const source = buildSourceEntries();
    if(!source.length) return [];

    const topicMap = groupByTopic(source);
    const fallbackTopics = Object.keys(topicMap);
    const plan = [];

    for(let day = 1; day <= 365; day += 1){
      const { monthIndex, dayInMonth } = monthFromDay(day);
      const memoryTopics = uniqueAvailableTopics(MONTH_THEME_FLOW[monthIndex], topicMap, fallbackTopics);
      const meditationTopics = uniqueAvailableTopics(MONTH_MEDITATION_FLOW[monthIndex], topicMap, fallbackTopics);
      const memory = pickEntryForDay(memoryTopics, topicMap, dayInMonth, monthIndex);
      let meditation = pickEntryForDay(meditationTopics, topicMap, dayInMonth, monthIndex + 2);

      if(meditation && memory && meditation.id === memory.id){
        meditation = pickEntryForDay(meditationTopics, topicMap, dayInMonth + 1, monthIndex + 5);
      }
      if(meditation && memory && meditation.id === memory.id && fallbackTopics.length > 1){
        const altTopics = fallbackTopics.filter(topic => topic !== memory.topicEn);
        meditation = pickEntryForDay(altTopics, topicMap, dayInMonth, monthIndex + 7);
      }

      plan.push({
        day,
        topicEn: memory.topicEn,
        topicKo: memory.topicKo,
        categoryEn: memory.categoryEn,
        categoryKo: memory.categoryKo,
        memory: {
          ref: memory.ref,
          kjv: memory.kjv,
          esv: memory.esv
        },
        meditation: {
          ref: meditation.ref,
          topicEn: meditation.topicEn,
          topicKo: meditation.topicKo,
          categoryEn: meditation.categoryEn,
          categoryKo: meditation.categoryKo,
          kjv: meditation.kjv,
          esv: meditation.esv
        }
      });
    }

    return plan;
  }

  window.DAILY_VERSE_365_PLAN = buildDailyVerse365Plan();
})();
