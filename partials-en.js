// Shared nav + footer renderer for all brew.tech pages
(function(){
  const active = document.documentElement.getAttribute('data-page') || '';
  const dark = document.documentElement.getAttribute('data-nav') === 'dark';

  const navHTML = `
  <nav class="nav ${dark?'dark':''}" data-screen-label="Nav">
    <div class="nav-inner">
      <a href="index.html" class="logo"><span class="b">BREW</span><span class="dot">.</span><span class="t">TECH</span></a>

      <div class="nav-links">
        <div class="item has-mega">
          <a href="index.html#products" class="${active==='products'?'active':''}">Equipment</a>
          <div class="mega">
            <div class="col">
              <h6>// CATALOG 2026</h6>
              <a class="product-mini" href="machine.html">
                <span class="thumb">
                  <svg viewBox="0 0 64 64" width="44" height="44"><rect x="14" y="12" width="36" height="40" rx="3" fill="#1a1a1a" stroke="#333"/><rect x="20" y="18" width="24" height="10" fill="#0066ff" fill-opacity=".4"/><circle cx="24" cy="38" r="3" fill="#0066ff"/><circle cx="40" cy="38" r="3" fill="#0066ff"/><rect x="18" y="46" width="28" height="3" fill="#0066ff"/></svg>
                </span>
                <div><h4>Pro Espresso</h4><p>Two-group professional machine · from ₽489,000</p></div>
              </a>
              <a class="product-mini" href="grinder.html">
                <span class="thumb">
                  <svg viewBox="0 0 64 64" width="44" height="44"><ellipse cx="32" cy="14" rx="18" ry="4" fill="#0a0a0a" stroke="#333"/><rect x="18" y="14" width="28" height="14" fill="#1a1a1a" stroke="#333"/><rect x="22" y="28" width="20" height="26" fill="#1a1a1a" stroke="#333"/><rect x="26" y="34" width="12" height="8" fill="#0066ff" fill-opacity=".4"/><circle cx="32" cy="48" r="3" fill="#0066ff"/></svg>
                </span>
                <div><h4>Pro Grinder</h4><p>Grinder с&nbsp;плоскandмand жерновамand · from ₽189,000</p></div>
              </a>
            </div>
            <div class="col">
              <h6>// SECTIONS</h6>
              <div class="links">
                <a href="machine.html"><span class="arr">→</span>Coffee Machine BT-PRO/01</a>
                <a href="grinder.html"><span class="arr">→</span>Grinder BT-GR/75</a>
                <a href="index.html#price"><span class="arr">→</span>Transparent Pricing</a>
                <a href="index.html#contact"><span class="arr">→</span>Order a Demo</a>
              </div>
            </div>
          </div>
        </div>
        <div class="item"><a href="machine.html" class="${active==='machine'?'active':''}">Coffee Machine</a></div>
        <div class="item"><a href="grinder.html" class="${active==='grinder'?'active':''}">Grinder</a></div>
        <div class="item"><a href="index.html#buy">Where to Buy</a></div>
        <div class="item"><a href="articles.html" class="${active==='articles'?'active':''}">Articles</a></div>
        <div class="item"><a href="index.html#mission">About</a></div>
      </div>

      <div class="nav-right">
        <a href="tel:+74951234567" class="nav-phone">+7 495 123-45-67</a>
        <a href="index.html#contact" class="nav-cta">Request a Demo</a>
        <button class="burger" aria-label="Меню" id="burger"><span></span><span></span><span></span></button>
      </div>
    </div>
  </nav>

  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html">Home <span class="arr">→</span></a>
    <a data-toggle="prod">Equipment <span class="arr">+</span></a>
    <div class="sub" id="prod-sub" style="display:none">
      <a href="machine.html">Pro Espresso Machine</a>
      <a href="grinder.html">Pro Grinder</a>
      <a href="index.html#price">Transparent Pricing</a>
    </div>
    <a href="index.html#buy">Where to Buy <span class="arr">→</span></a>
    <a href="articles.html">Articles <span class="arr">→</span></a>
    <a href="index.html#platform">Platform <span class="arr">→</span></a>
    <a href="index.html#mission">About <span class="arr">→</span></a>
    <a href="index.html#audience">Who It's For <span class="arr">→</span></a>
    <a href="tel:+74951234567">+7 495 123-45-67 <span class="arr">→</span></a>
    <a href="index.html#contact" class="foot-cta">Request a Demo</a>
  </div>
  `;

  const footerHTML = `
  <footer data-screen-label="10 Footer">
    <div class="container">
      <div class="foot">
        <div>
          <div class="logo"><span style="color:#fff">BREW</span><span style="color:#0066ff">.</span><span style="color:#0066ff">TECH</span></div>
          <p>Профессandональное оборfromдованandе для кофе. Технологandя. Мandнandмалandзм. Надёжность. Собрано and&nbsp;поддержandвается в&nbsp;Россandand.</p>
        </div>
        <div>
          <h5>// EQUIPMENT</h5>
          <ul>
            <li><a href="machine.html">Pro Espresso Machine</a></li>
            <li><a href="grinder.html">Pro Grinder</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Spare Parts</a></li>
          </ul>
        </div>
        <div>
          <h5>// COMPANY</h5>
          <ul>
            <li><a href="index.html#mission">Mission</a></li>
            <li><a href="index.html#platform">Platform</a></li>
            <li><a href="index.html#price">Transparent Pricing</a></li>
            <li><a href="articles.html">Articles</a></li>
            <li><a href="index.html#buy">Where to Buy</a></li>
            <li><a href="https://disk.yandex.ru/i/XuidxsI_v73MfA" target="_blank" rel="noopener">Brand Book ↗</a></li>
          </ul>
        </div>
        <div>
          <h5>// CONTACTS</h5>
          <ul>
            <li><a href="mailto:hello@brew.tech">hello@brew.tech</a></li>
            <li><a href="tel:+74951234567">+7 (495) 123-45-67</a></li>
            <li><a href="#">Moscow, Nizhny, Kazan</a></li>
            <li><a href="#">Telegram · WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-bot">
        <span>© 2026 BREW.TECH · ALL RIGHTS RESERVED</span>
        <span>BUILD 2026.05 · MOSCOW / NIZHNY / KAZAN</span>
      </div>
    </div>
  </footer>
  `;

  document.getElementById('navMount')?.insertAdjacentHTML('beforebegin', navHTML);
  document.getElementById('navMount')?.remove();
  document.getElementById('footMount')?.insertAdjacentHTML('beforebegin', footerHTML);
  document.getElementById('footMount')?.remove();

  // Burger toggle
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  burger?.addEventListener('click', ()=>{
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
  menu?.addEventListener('click', e=>{
    const t = e.target.closest('a');
    if(t && !t.dataset.toggle){
      burger.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    }
    if(t && t.dataset.toggle){
      e.preventDefault();
      const sub = document.getElementById(t.dataset.toggle + '-sub');
      sub.style.display = sub.style.display === 'none' ? 'flex' : 'none';
    }
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
  },{threshold:.08});
  document.querySelectorAll('[data-reveal], section, .machine-card, .product, .aud-card, .value-card, .flow-step, .pq').forEach(el=>{el.classList.add('reveal');io.observe(el);});
})();
