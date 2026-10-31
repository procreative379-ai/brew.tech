// Главная: cookie-баннер, кнопки «Запросить» и форма заявки (Formspree).
(function () {
  var METRIKA = 109249350;
  var FORM_URL = 'https://formspree.io/f/xyeybdyz';

  function goal(name, params) {
    if (typeof window.ym === 'function') window.ym(METRIKA, 'reachGoal', name, params);
  }
  function block(name) { return document.querySelector('[data-if="' + name + '"]'); }
  function show(name, on) { var el = block(name); if (el) el.hidden = !on; }

  var form = block('notSent');
  var errorBox = block('error');
  var submitBtn = document.querySelector('[data-act="submit"]');
  var sending = false;

  function field(name) { return form.querySelector('[name="' + name + '"]'); }
  function setError(msg) {
    errorBox.firstElementChild.textContent = msg;
    errorBox.hidden = !msg;
  }

  var cookie = null;
  try { cookie = window.localStorage.getItem('brewtech.cookie'); } catch (e) {}
  show('showCookie', !cookie);
  function setCookie(v) {
    try { window.localStorage.setItem('brewtech.cookie', v); } catch (e) {}
    show('showCookie', false);
  }

  function focusForm(item) {
    goal('cta_kp', { item: item });
    field('item').value = item;
    show('sent', false);
    show('notSent', true);
    var el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' });
  }

  function submit() {
    if (sending) return;
    var name = field('name').value.trim();
    var contact = field('contact').value.trim();
    if (!name || !contact) { setError('Укажите имя и контакт'); return; }
    if (!field('consent').checked) { setError('Нужно согласие на обработку персональных данных'); return; }
    goal('lead');
    setError('');
    sending = true;
    submitBtn.textContent = 'Отправляем…';
    fetch(FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: name,
        contact: contact,
        item: field('item').value,
        detail: field('detail').value,
        consent: 'да, ' + new Date().toLocaleString('ru-RU'),
        page: window.location.href
      })
    }).then(function (r) {
      if (!r.ok) throw new Error('bad response');
      show('notSent', false);
      show('sent', true);
    }).catch(function () {
      setError('Не удалось отправить. Напишите на info@brewtechology.ru');
    }).then(function () {
      sending = false;
      submitBtn.textContent = 'Отправить заявку';
    });
  }

  var actions = {
    requestMoka: function () { focusForm('BREW.TECH Moka'); },
    requestGrind: function () { focusForm('BREW.TECH Grind'); },
    acceptCookie: function () { setCookie('all'); },
    declineCookie: function () { setCookie('necessary'); },
    submit: submit,
    reset: function () {
      field('name').value = '';
      field('contact').value = '';
      field('detail').value = '';
      show('sent', false);
      show('notSent', true);
    }
  };

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-act]');
    if (btn && actions[btn.getAttribute('data-act')]) {
      e.preventDefault();
      actions[btn.getAttribute('data-act')]();
    }
  });
})();
