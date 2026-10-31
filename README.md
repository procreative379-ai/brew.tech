# brewtechology.ru

Статический сайт BREW.TECH. Сборщика нет, страницы — обычный HTML.

- `index.html`, `docs.html`, `404.html` — правятся вручную.
- `articles.html`, `stati/*.html`, `sitemap.xml` — генерируются из `tools/articles.json`:
  добавьте статью в JSON и запустите `python3 tools/build.py`.
- `assets/` — шрифты, картинки, `site.css`, `site.js` (форма заявки и cookie-баннер на главной).
- Яндекс.Метрика: счётчик 109249350 (номер задан в `tools/build.py` и `assets/site.js`).
- Яндекс.Вебмастер: код подтверждения вставляется вместо комментария `<!-- yandex-verification -->` в `<head>`.
