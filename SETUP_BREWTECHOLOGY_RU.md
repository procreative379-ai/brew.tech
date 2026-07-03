# 🔧 BREW.TECH brewtechology.ru — Полная настройка SEO

**Дата:** 4 июня 2026  
**Домен:** https://brewtechology.ru  
**Статус:** ⚠️ Требуется загрузка файлов

---

## 🚨 ПРОБЛЕМА

Яндекс не может найти robots.txt файл на https://brewtechology.ru/robots.txt

**Ошибка:** "Робот не смог получить доступ к файлу robots.txt сайта или файл не существует"

**Решение:** Загрузить robots.txt и sitemap.xml на сервер

---

## 📦 КАКИЕ ФАЙЛЫ ЗАГРУЗИТЬ

### Обязательные файлы:

1. **robots.txt** (главный файл)
   - Положить в корневую папку сайта
   - Путь: `/public_html/robots.txt`
   - ИЛИ: `/var/www/html/robots.txt`

2. **sitemap-ru.xml** (карта сайта русская)
   - Путь: `/public_html/sitemap-ru.xml`

3. **sitemap-en.xml** (карта сайта английская)
   - Путь: `/public_html/sitemap-en.xml`

4. **sitemap.xml** (главный индекс)
   - Путь: `/public_html/sitemap.xml`

---

## 🚀 ПОШАГОВАЯ ИНСТРУКЦИЯ

### Шаг 1: Определите папку сайта

Используйте один из этих путей (в зависимости от хоста):

```
/public_html/          ← Хостинг cPanel (самый частый)
/var/www/html/         ← Linux сервер
/home/username/        ← Некоторые хосты
~/www/                 ← Альтернатива
```

**Как узнать?** Загрузите тестовый HTML файл через FTP и откройте через браузер. Там и находится корневая папка.

### Шаг 2: Загрузите файлы через FTP

**Способ 1: FileZilla (рекомендуется)**

1. Откройте FileZilla
2. Подключитесь к серверу (хост, пользователь, пароль)
3. Слева: найдите файлы на компьютере
4. Справа: откройте папку `/public_html/`
5. Перетащите эти 4 файла:
   - robots.txt → /public_html/robots.txt
   - sitemap-ru.xml → /public_html/sitemap-ru.xml
   - sitemap-en.xml → /public_html/sitemap-en.xml
   - sitemap.xml → /public_html/sitemap.xml

**Способ 2: Встроенный File Manager в cPanel**

1. Входите в cPanel
2. Нажимаете "File Manager"
3. Открываете папку "public_html"
4. Нажимаете "Upload" (кнопка со стрелкой)
5. Выбираете 4 файла
6. Ждёте загрузки
7. Готово!

**Способ 3: SSH/Terminal (для опытных)**

```bash
# Подключитесь к серверу
ssh user@brewtechology.ru

# Перейдите в папку
cd /var/www/html/    # или /public_html/

# Загрузите файлы (через SCP)
scp robots.txt user@brewtechology.ru:/var/www/html/
scp sitemap-ru.xml user@brewtechology.ru:/var/www/html/
scp sitemap-en.xml user@brewtechology.ru:/var/www/html/
scp sitemap.xml user@brewtechology.ru:/var/www/html/

# Проверьте что загрузилось
ls -la /var/www/html/robots.txt
```

### Шаг 3: Проверьте доступность файлов

Откройте в браузере и убедитесь что загрузилось:

✅ https://brewtechology.ru/robots.txt (должен открыться текст файла)  
✅ https://brewtechology.ru/sitemap.xml (должен открыться XML)  
✅ https://brewtechology.ru/sitemap-ru.xml (должен открыться XML)  
✅ https://brewtechology.ru/sitemap-en.xml (должен открыться XML)

Если видите текст файла или XML - **отлично!** Загрузка успешна.

### Шаг 4: Установите правильные разрешения (permissions)

В FileZilla или cPanel File Manager:

1. Нажмите **правой кнопкой** на файл
2. Выберите **"File Permissions"** (или "Change Permissions")
3. Установите **644** (это стандарт для веб-файлов)
4. Нажмите "OK"

Повторите для всех 4 файлов.

### Шаг 5: Проверка в Яндекс.Вебмастере

1. Откройте https://webmaster.yandex.ru/
2. Входите в аккаунт (или создаёте новый)
3. Добавляете сайт https://brewtechology.ru
4. Идёте в раздел **"Инструменты"** → **"Анализ файлов"**
5. Нажимаете **"Проверить robots.txt"**
6. Должно показать ✅ "Доступен" (зелёная галочка)

---

## ✅ СОДЕРЖАНИЕ ФАЙЛОВ

### robots.txt
- Разрешает индексировать все основные страницы
- Блокирует /admin/, /private/, /api/
- Указывает на sitemap.xml
- Задаёт задержку для роботов
- Блокирует спам-ботов (Ahrefs, Semrush и т.д.)

### sitemap-ru.xml
- Все 5 страниц русской версии
- Meta информация (lastmod, priority, changefreq)
- Иллюстрации продуктов (image sitemap)
- hreflang для альтернативных версий

### sitemap-en.xml
- Все 5 страниц английской версии
- Та же информация что в русской версии
- Переводы описаний

### sitemap.xml
- Главный индекс обоих sitemap'ов
- Яндекс читает этот файл в первую очередь

---

## 🔍 ПРОВЕРКА РЕЗУЛЬТАТОВ

### Проверка 1: robots.txt доступен
```
curl -I https://brewtechology.ru/robots.txt
# Должно быть: HTTP/1.1 200 OK
```

### Проверка 2: sitemap.xml работает
```
curl -I https://brewtechology.ru/sitemap.xml
# Должно быть: HTTP/1.1 200 OK
```

### Проверка 3: Яндекс может читать
Откройте в Яндекс.Вебмастере и проверьте диагностику. Ошибка должна исчезнуть в течение часа.

---

## 📋 СОДЕРЖАНИЕ КАЖДОГО ФАЙЛА

### ✅ robots.txt содержит:
```
# Разрешает Google, Yandex, Bing
User-agent: Googlebot
User-agent: Yandex
User-agent: Bingbot
Allow: /

# Блокирует спам
User-agent: AhrefsBot
Disallow: /

# Указывает на карту
Sitemap: https://brewtechology.ru/sitemap.xml
```

### ✅ sitemap.xml содержит:
- Главную страницу (priority: 1.0)
- Страницу машины (priority: 0.95)
- Страницу молки (priority: 0.95)
- Страницу статей (priority: 0.85)
- Страницу 404 (priority: 0.3)

### ✅ Каждая страница имеет:
- lastmod: дата последнего обновления
- changefreq: как часто меняется (weekly)
- priority: важность страницы
- images: иллюстрации продуктов
- hreflang: ссылки на альтернативные языки

---

## 🚨 ТИПИЧНЫЕ ОШИБКИ

### ❌ Ошибка 1: Файл не в той папке
**Проблема:** Загрузили в `/uploads/` вместо `/public_html/`  
**Решение:** Загрузите в КОРНЕВУЮ папку сайта

### ❌ Ошибка 2: Неправильное расширение
**Проблема:** Назвали `robots.txt.txt` или `robots.HTML`  
**Решение:** Правильное имя: `robots.txt` (без точки в конце, маленькие буквы)

### ❌ Ошибка 3: Неправильные права доступа
**Проблема:** Установили 600 вместо 644  
**Решение:** Установите 644 через File Manager или FTP

### ❌ Ошибка 4: Неправильный URL в robots.txt
**Проблема:** Написали `Sitemap: https://brew.tech/sitemap.xml`  
**Решение:** Должно быть `Sitemap: https://brewtechology.ru/sitemap.xml`

### ❌ Ошибка 5: HTTPS vs HTTP
**Проблема:** Смешали https:// и http://  
**Решение:** Везде используйте https://brewtechology.ru

---

## 📞 ПРОВЕРКА ПОСЛЕ ЗАГРУЗКИ

### Очередь действий:

1. ✅ Загрузите файлы на сервер
2. ✅ Проверьте что они открываются в браузере
3. ✅ Установите права 644
4. ✅ Подождите 15-30 минут (кеш сервера)
5. ✅ Откройте Яндекс.Вебмастер
6. ✅ Нажмите "Проверить robots.txt" ещё раз
7. ✅ Должна появиться зелёная галочка ✅

---

## 🎯 ПОСЛЕ УСПЕШНОЙ ЗАГРУЗКИ

### Что нужно сделать в Яндекс.Вебмастере:

1. **Добавьте сайт:**
   - Перейдите https://webmaster.yandex.ru/
   - Нажмите "Добавить сайт"
   - Введите https://brewtechology.ru
   - Подтвердите владение (через meta тег или HTML файл)

2. **Отправьте карту сайта:**
   - Перейдите в "Инструменты" → "Sitemaps"
   - Нажмите "Добавить sitemap"
   - Введите https://brewtechology.ru/sitemap.xml
   - Яндекс сам прочитает остальные

3. **Проверьте диагностику:**
   - Перейдите в "Диагностика"
   - Убедитесь что нет ошибок с robots.txt
   - Должны быть найдены все страницы

---

## 📊 РЕЗУЛЬТАТЫ (ожидается)

**Через 24 часа:**
- ✅ Яндекс найдёт все страницы
- ✅ Исчезнет ошибка про robots.txt
- ✅ Появятся страницы в индексе

**Через неделю:**
- ✅ Сайт будет полностью проиндексирован
- ✅ Начнёт приходить трафик из поиска
- ✅ Увидите статистику в Яндекс.Вебмастере

---

## 🎁 ФАЙЛЫ ДЛЯ ЗАГРУЗКИ

Все файлы выше готовы в папке `/outputs/`:

- ✅ robots-brewtechology-ru.txt → переименуйте в robots.txt
- ✅ sitemap-brewtechology-ru.xml → переименуйте в sitemap-ru.xml
- ✅ sitemap-brewtechology-en.xml → переименуйте в sitemap-en.xml
- ✅ sitemap.xml-brewtechology → переименуйте в sitemap.xml

**ВАЖНО:** При загрузке переименуйте файлы (удалите часть с "-brewtechology-" в названии)

---

## ✅ ЧЕКЛИСТ

- [ ] Определили корневую папку сайта
- [ ] Загрузили 4 файла через FTP
- [ ] Проверили что файлы открываются в браузере
- [ ] Установили права 644
- [ ] Проверили в Яндекс.Вебмастере
- [ ] Добавили сайт в Яндекс.Вебмастер
- [ ] Отправили sitemap
- [ ] Проверили диагностику
- [ ] Готово! ✅

---

## 📱 КОНТАКТЫ И ССЫЛКИ

**Яндекс.Вебмастер:**  
https://webmaster.yandex.ru/

**Справка Яндекса по robots.txt:**  
https://yandex.ru/support/webmaster/robot-workings/robots-txt.html

**Справка по sitemap.xml:**  
https://yandex.ru/support/webmaster/indexing/sitemap.html

**Проверка файлов в Яндексе:**  
https://webmaster.yandex.ru/ → Инструменты → Анализ файлов

---

**Версия:** 1.0  
**Дата:** 4 июня 2026  
**Статус:** 🚀 Готово к использованию

Загрузите файлы и сайт начнёт индексироваться! 🎉
