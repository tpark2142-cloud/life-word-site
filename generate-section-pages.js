const fs = require('fs');
const path = require('path');

const root = __dirname;
const templatePath = path.join(root, 'index-full-template.html');
const fullTemplate = fs.readFileSync(templatePath, 'utf8');
const site = 'https://www.lifemoment.site';

const pages = [
  {
    file: 'topics.html',
    className: 'page-topics',
    activeHref: 'topics.html#topics',
    titleEn: "Bible Topics | Life's Moments, God's Word",
    titleKo: '성경 주제 | 삶의 순간들, 하나님의 말씀',
    description: 'Browse Bible verses by emotion, life situation, spiritual topic, and season of life.'
  },
  {
    file: 'gallery.html',
    className: 'page-gallery',
    activeHref: 'gallery.html',
    titleEn: "Gallery | Life's Moments, God's Word",
    titleKo: '갤러리 | 삶의 순간들, 하나님의 말씀',
    description: 'View shared travel, nature, community, and ministry moments.'
  },
  {
    file: 'ai-playground.html',
    className: 'page-ai',
    activeHref: 'ai-playground.html',
    titleEn: "AI Playground | Life's Moments, God's Word",
    titleKo: 'AI 놀이터 | 삶의 순간들, 하나님의 말씀',
    description: 'Try helpful AI tools for questions, learning, music, voice, and creative work.'
  },
  {
    file: 'missions.html',
    className: 'page-missions',
    activeHref: 'missions.html',
    titleEn: "Missions | Life's Moments, God's Word",
    titleKo: '전도 | 삶의 순간들, 하나님의 말씀',
    description: 'Explore gospel outreach resources and Bible reading plans.'
  },
  {
    file: 'living-word.html',
    className: 'page-living',
    activeHref: 'living-word.html',
    titleEn: "Living the Word | Life's Moments, God's Word",
    titleKo: '말씀대로 살기 | 삶의 순간들, 하나님의 말씀',
    description: 'Explore original teaching, audio, articles, lessons, and devotional resources.'
  },
  {
    file: 'guestbook.html',
    className: 'page-guestbook',
    activeHref: 'guestbook.html',
    titleEn: "Guestbook | Life's Moments, God's Word",
    titleKo: '방명록 | 삶의 순간들, 하나님의 말씀',
    description: 'Share encouragement, prayer requests, testimonies, and messages of faith.'
  }
];

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function customizePage(template, page) {
  const canonical = `${site}/${page.file}`;
  return template
    .replace('<body class="home-page">', `<body class="section-page ${page.className}" data-title-en="${escapeAttr(page.titleEn)}" data-title-ko="${escapeAttr(page.titleKo)}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${page.titleEn}</title>`)
    .replace(/<meta name="description" content="[^"]*"\/>/, `<meta name="description" content="${escapeAttr(page.description)}"/>`)
    .replace(/<link rel="canonical" href="[^"]*"\/>/, `<link rel="canonical" href="${canonical}"/>`)
    .replace(/<meta property="og:title" content="[^"]*"\/>/, `<meta property="og:title" content="${escapeAttr(page.titleEn)}"/>`)
    .replace(/<meta property="og:description" content="[^"]*"\/>/, `<meta property="og:description" content="${escapeAttr(page.description)}"/>`)
    .replace(/<meta property="og:url" content="[^"]*"\/>/, `<meta property="og:url" content="${canonical}"/>`)
    .replace('</body>', `<script>document.querySelectorAll('.sidebar .sb-link').forEach(function(link){link.classList.remove('active')});var current=document.querySelector('.sidebar .sb-link[href="${page.activeHref}"]');if(current)current.classList.add('active');</script></body>`);
}

function removeElementById(html, id) {
  const idPosition = html.indexOf(`id="${id}"`);
  if (idPosition < 0) return html;
  const start = html.lastIndexOf('<', idPosition);
  const opening = html.slice(start).match(/^<([a-zA-Z0-9-]+)\b/);
  if (!opening) return html;
  const tag = opening[1];
  const token = new RegExp(`<\\/?${tag}\\b[^>]*>`, 'gi');
  token.lastIndex = start;
  let depth = 0;
  let match;
  while ((match = token.exec(html))) {
    const value = match[0];
    if (value.startsWith('</')) depth -= 1;
    else if (!value.endsWith('/>')) depth += 1;
    if (depth === 0) return html.slice(0, start) + html.slice(token.lastIndex);
  }
  return html;
}

for (const page of pages) {
  fs.writeFileSync(path.join(root, page.file), customizePage(fullTemplate, page), 'utf8');
}

let homepage = fullTemplate;
for (const id of ['home-spotlight','homepage-update','emotions','situations','topics','seniors','gallery','ai-summary','missions','living-word','fellowship']) {
  homepage = removeElementById(homepage, id);
}
fs.writeFileSync(path.join(root, 'index.html'), homepage, 'utf8');

console.log(`Generated ${pages.length} dedicated pages and a focused homepage.`);
