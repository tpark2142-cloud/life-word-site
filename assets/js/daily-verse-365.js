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
    'Faith & Trust': '믿음과 신뢰',
    'Prayer': '기도와 중보',
    'Grace & Mercy': '은혜와 자비',
    'Salvation': '구원과 속량',
    'Heaven & Eternity': '천국과 영원',
    'Strength': '힘과 용기',
    "God's Presence": '하나님의 임재와 위로'
  };

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

  function buildDailyVerse365Plan(){
    const source = buildSourceEntries();
    const plan = [];
    if(!source.length) return plan;

    for(let day = 1; day <= 365; day += 1){
      const memoryIndex = (day - 1) % source.length;
      let meditationIndex = ((day - 1) * 11 + 17) % source.length;
      if(source.length > 1 && meditationIndex === memoryIndex){
        meditationIndex = (meditationIndex + 1) % source.length;
      }
      const memory = source[memoryIndex];
      const meditation = source[meditationIndex];
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
