#!/usr/bin/env python3
"""Собирает страницы статей, список статей и sitemap.xml из tools/articles.json.

Запуск из корня репозитория:  python3 tools/build.py

Чтобы добавить статью, допишите объект в tools/articles.json (slug, date,
meta, title, description, lead, blocks) и запустите скрипт ещё раз.
Главная, docs и 404 редактируются вручную, скрипт их не трогает.
"""
import html
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://brewtechology.ru'
METRIKA_ID = 109249350
OG_IMAGE = SITE + '/assets/img/og-image.jpg'

# Страницы, которые не генерируются, но должны быть в sitemap.
STATIC_PAGES = [
    ('/', '2026-10-31', 'weekly', '1.0'),
    ('/articles', '2026-10-31', 'weekly', '0.8'),
]

e = html.escape


def head(title, description, path, og_type='website', jsonld=None, robots=None, extra=''):
    """Общий <head> для всех страниц сайта."""
    url = SITE + path
    parts = [
        '<meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width, initial-scale=1">',
        f'<title>{e(title)}</title>',
        f'<meta name="description" content="{e(description)}">',
    ]
    if robots:
        parts.append(f'<meta name="robots" content="{robots}">')
    else:
        parts.append(f'<link rel="canonical" href="{url}">')
    parts += [
        # Яндекс.Вебмастер: вставьте сюда код подтверждения прав, например
        # <meta name="yandex-verification" content="xxxxxxxxxxxxxxxx">
        '<!-- yandex-verification -->',
        '<meta name="theme-color" content="#0A0B0D">',
        '<meta property="og:locale" content="ru_RU">',
        '<meta property="og:site_name" content="BREW.TECH">',
        f'<meta property="og:type" content="{og_type}">',
        f'<meta property="og:title" content="{e(title)}">',
        f'<meta property="og:description" content="{e(description)}">',
        f'<meta property="og:url" content="{url}">',
        f'<meta property="og:image" content="{OG_IMAGE}">',
        '<meta property="og:image:width" content="1200">',
        '<meta property="og:image:height" content="630">',
        '<meta name="twitter:card" content="summary_large_image">',
        '<link rel="icon" href="/favicon.ico" sizes="any">',
        '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
        '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
        '<link rel="preload" href="/assets/fonts/montserrat-cyrillic.woff2" as="font" type="font/woff2" crossorigin>',
        '<link rel="stylesheet" href="/assets/site.css">',
    ]
    if extra:
        parts.append(extra)
    for block in (jsonld or []):
        parts.append('<script type="application/ld+json">'
                     + json.dumps(block, ensure_ascii=False).replace('</', '<\\/')
                     + '</script>')
    parts.append(metrika())
    return '\n'.join(parts)


def metrika():
    """Счётчик Яндекс.Метрики. Номер счётчика меняется в METRIKA_ID."""
    return f'''<script>
(function(m,e,t,r,i,k,a){{m[i]=m[i]||function(){{(m[i].a=m[i].a||[]).push(arguments)}};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {{if (document.scripts[j].src === r) {{ return; }}}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}})
(window, document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
ym({METRIKA_ID}, 'init', {{ webvisor: true, clickmap: true, trackLinks: true, accurateTrackBounce: true }});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/{METRIKA_ID}" style="position:absolute; left:-9999px;" alt=""></div></noscript>'''


ORG = {
    '@type': 'Organization',
    'name': 'BREW.TECH',
    'url': SITE + '/',
    'logo': SITE + '/assets/img/logo.png',
    'email': 'info@brewtechology.ru',
}

BASE_STYLE = '''<style>
  body { margin: 0; background: #f6f3ee; color: #111214; font-family: 'Montserrat', system-ui, sans-serif; }
  a { color: #0066ff; text-decoration: none; }
  a:hover { color: #003fae; }
  ::selection { background: #0066ff; color: #fff; }
</style>'''

HEADER = '''<header style="position:sticky; top:0; z-index:20; display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; padding:14px clamp(16px,4vw,32px); background:#0A0B0D; border-bottom:1px solid #1e2126">
    <a href="/" style="font-size:20px; font-weight:800; letter-spacing:-0.02em; color:#ffffff">brew<span style="color:#0066ff">.</span>tech</a>
    <nav style="display:flex; gap:24px; align-items:center">
      <a href="/articles" class="h-muted" style="font-family:'JetBrains Mono', monospace; font-size:12px; letter-spacing:0.14em; color:#a8adb5">СТАТЬИ</a>
      <a href="/#buy" class="h-muted" style="font-family:'JetBrains Mono', monospace; font-size:12px; letter-spacing:0.14em; color:#a8adb5">ГДЕ КУПИТЬ</a>
      <a href="/#contact" class="h-blue" style="padding:12px 20px; background:#0066ff; color:#ffffff; font-size:13px; font-weight:700">Запросить цену</a>
    </nav>
  </header>'''

FOOTER = '''<footer style="background:#000000; color:#8b9099; padding:40px clamp(20px,4vw,32px)">
    <div style="max-width:900px; margin:0 auto; display:flex; flex-wrap:wrap; gap:20px; justify-content:space-between; font-size:13px">
      <a href="/" style="font-size:18px; font-weight:800; color:#ffffff">brew<span style="color:#0066ff">.</span>tech</a>
      <div style="display:flex; gap:20px; flex-wrap:wrap">
        <a href="/articles" class="h-muted" style="color:#8b9099">Статьи</a>
        <a href="/#buy" class="h-muted" style="color:#8b9099">Где купить</a>
        <a href="/docs#offer" class="h-muted" style="color:#8b9099">Оферта</a>
        <a href="/docs#privacy" class="h-muted" style="color:#8b9099">Политика</a>
      </div>
      <div>© 2026 BREW.TECH</div>
    </div>
  </footer>'''


def page(head_html, body_html):
    return f'''<!DOCTYPE html>
<html lang="ru">
<head>
{head_html}
{BASE_STYLE}
</head>
<body>
<div style="width:100%">
  {HEADER}
{body_html}
  {FOOTER}
</div>
</body>
</html>
'''


def hero(kicker, title, lead, crumbs=''):
    return f'''
  <div style="background:#0A0B0D; color:#F2F2EE; padding:clamp(44px,8vw,64px) clamp(20px,4vw,32px) 48px">
    <div style="max-width:900px; margin:0 auto">
      {crumbs}<div style="font-size:14px; font-weight:600; color:#0066ff; margin-bottom:16px">{kicker}</div>
      <h1 style="font-size:clamp(30px,6vw,44px); font-weight:800; letter-spacing:-0.03em; line-height:1.08; margin:0 0 16px; text-wrap:balance">{title}</h1>
      <p style="font-size:17px; color:#a8adb5; margin:0; max-width:680px; line-height:1.65">{lead}</p>
    </div>
  </div>'''


def article_url(a):
    return f'/stati/{a["slug"]}'


def render_article(a, articles):
    path = article_url(a)
    blocks = []
    for b in a['blocks']:
        paras = ''.join(
            f'\n          <p style="font-size:16px; line-height:1.75; color:#4a4f57; margin:0 0 14px">{e(p)}</p>'
            for p in b['p'])
        lst = ''
        if b.get('list'):
            items = ''.join(f'\n            <li>{e(li)}</li>' for li in b['list'])
            lst = f'\n          <ul style="margin:0; padding-left:20px; font-size:16px; line-height:1.8; color:#4a4f57">{items}\n          </ul>'
        blocks.append(f'''
        <section style="border-top:1px solid #e2e4e8; padding-top:24px">
          <h2 style="font-size:24px; font-weight:700; letter-spacing:-0.02em; margin:0 0 14px; line-height:1.2">{e(b["h"])}</h2>{paras}{lst}
        </section>''')

    i = articles.index(a)
    others = [articles[(i + k) % len(articles)] for k in (1, 2, 3)]
    related = ''.join(f'''
        <a href="{article_url(o)}" class="h-card" style="background:#ffffff; padding:24px; display:flex; flex-direction:column; gap:10px; color:#000000; border:1px solid #e2e4e8; margin:0 -1px -1px 0">
          <span style="font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:0.12em; color:#0066ff">{e(o["meta"])}</span>
          <span style="font-size:17px; font-weight:700; letter-spacing:-0.015em; line-height:1.3">{e(o["title"])}</span>
        </a>''' for o in others)

    crumbs = f'''<nav aria-label="Навигация" style="font-size:13px; color:#8b9099; margin-bottom:20px"><a href="/" style="color:#8b9099">Главная</a> / <a href="/articles" style="color:#8b9099">Статьи</a></nav>
      '''
    body = hero(e(a['meta']), e(a['title']), e(a['lead']), crumbs) + f'''

  <main style="max-width:760px; margin:0 auto; padding:clamp(36px,6vw,56px) clamp(20px,4vw,32px) 96px">
    <article>
      <div style="display:flex; flex-direction:column; gap:36px">{''.join(blocks)}
      </div>
    </article>

    <div style="margin-top:56px; border:1px solid #0066ff; padding:32px; display:flex; flex-wrap:wrap; gap:20px; align-items:center; justify-content:space-between">
      <div style="max-width:420px">
        <div style="font-size:20px; font-weight:700; letter-spacing:-0.02em; margin-bottom:8px">Подберём конфигурацию под ваш поток</div>
        <div style="font-size:14px; color:#4a4f57; line-height:1.6">Пришлём расчёт с разбивкой цены за 24 часа.</div>
      </div>
      <a href="/#contact" class="h-cta" style="padding:16px 24px; background:#0066ff; color:#ffffff; font-size:14px; font-weight:700">Получить КП</a>
    </div>

    <div style="margin-top:64px">
      <div style="font-size:20px; font-weight:700; letter-spacing:-0.02em; margin-bottom:20px">Ещё по теме</div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px,1fr)); gap:0">{related}
      </div>
      <a href="/articles" style="display:inline-block; margin-top:24px; font-family:'JetBrains Mono', monospace; font-size:13px; letter-spacing:0.1em">Все статьи</a>
    </div>
  </main>
'''
    jsonld = [
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            'headline': a['title'],
            'description': a['description'],
            'datePublished': a['date'],
            'dateModified': a.get('updated', a['date']),
            'inLanguage': 'ru',
            'mainEntityOfPage': SITE + path,
            'image': OG_IMAGE,
            'author': ORG,
            'publisher': ORG,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {'@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': SITE + '/'},
                {'@type': 'ListItem', 'position': 2, 'name': 'Статьи', 'item': SITE + '/articles'},
                {'@type': 'ListItem', 'position': 3, 'name': a['title'], 'item': SITE + path},
            ],
        },
    ]
    title = a.get('seo_title') or a['title']
    if len(title) < 60:
        title += ' | BREW.TECH'
    return page(head(title, a['description'], path, 'article', jsonld), body)


def render_list(articles):
    items = ''.join(f'''
      <article style="padding:32px 0; border-bottom:1px solid #ddd8cf; display:flex; flex-direction:column; gap:12px">
        <div style="font-family:'JetBrains Mono', monospace; font-size:12px; letter-spacing:0.12em; color:#0066ff">{i:02d} · {e(a["meta"])}</div>
        <h2 style="font-size:clamp(22px,4.5vw,28px); font-weight:700; letter-spacing:-0.025em; margin:0; line-height:1.15; text-wrap:balance"><a href="{article_url(a)}" style="color:#111214">{e(a["title"])}</a></h2>
        <p style="font-size:16px; line-height:1.7; color:#4a4f57; margin:0; max-width:680px">{e(a["lead"])}</p>
        <a href="{article_url(a)}" class="h-dark" style="align-self:flex-start; margin-top:8px; padding:14px 22px; background:#000000; color:#ffffff; border:1px solid #000000; font-size:14px; font-weight:700">Читать</a>
      </article>''' for i, a in enumerate(articles, 1))
    body = hero('База знаний', 'Статьи об оборудовании для кофейни',
                'Как выбирать машину под поток, почему кофемолка важнее корпуса, как готовить воду и точку к запуску и во что обходится бар на старте.') + f'''

  <main style="max-width:900px; margin:0 auto; padding:clamp(36px,6vw,56px) clamp(20px,4vw,32px) 96px">{items}
  </main>
'''
    jsonld = [{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'itemListElement': [
            {'@type': 'ListItem', 'position': i, 'url': SITE + article_url(a), 'name': a['title']}
            for i, a in enumerate(articles, 1)
        ],
    }]
    return page(head('Статьи об оборудовании для кофейни | BREW.TECH',
                     'Статьи о выборе кофемашины и кофемолки для кофейни, водоподготовке, подключении, обслуживании и бюджете бара.',
                     '/articles', jsonld=jsonld), body)


def render_sitemap(articles):
    rows = list(STATIC_PAGES) + [
        (article_url(a), a.get('updated', a['date']), 'monthly', '0.7') for a in articles
    ]
    urls = ''.join(f'''  <url>
    <loc>{SITE}{p}</loc>
    <lastmod>{d}</lastmod>
    <changefreq>{c}</changefreq>
    <priority>{pr}</priority>
  </url>
''' for p, d, c, pr in rows)
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{urls}</urlset>
'''


def main():
    with open(os.path.join(ROOT, 'tools', 'articles.json'), encoding='utf-8') as f:
        articles = json.load(f)
    os.makedirs(os.path.join(ROOT, 'stati'), exist_ok=True)
    for a in articles:
        with open(os.path.join(ROOT, 'stati', a['slug'] + '.html'), 'w', encoding='utf-8') as f:
            f.write(render_article(a, articles))
    with open(os.path.join(ROOT, 'articles.html'), 'w', encoding='utf-8') as f:
        f.write(render_list(articles))
    with open(os.path.join(ROOT, 'sitemap.xml'), 'w', encoding='utf-8') as f:
        f.write(render_sitemap(articles))
    print(f'{len(articles)} статей, articles.html и sitemap.xml обновлены')


if __name__ == '__main__':
    main()
