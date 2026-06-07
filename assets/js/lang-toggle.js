/* Language toggle for about page */
(function() {
  var lang = localStorage.getItem('lang') || 'en';
  var enDivs = document.querySelectorAll('.lang-en');
  var zhDivs = document.querySelectorAll('.lang-zh');
  var enBtn = document.getElementById('lang-en-btn');
  var zhBtn = document.getElementById('lang-zh-btn');

  function setLang(l) {
    lang = l;
    localStorage.setItem('lang', l);
    if (enDivs.length) {
      enDivs.forEach(function(el) { el.style.display = (l === 'en') ? 'block' : 'none'; });
    }
    if (zhDivs.length) {
      zhDivs.forEach(function(el) { el.style.display = (l === 'zh') ? 'block' : 'none'; });
    }
    if (enBtn) enBtn.classList.toggle('active', l === 'en');
    if (zhBtn) zhBtn.classList.toggle('active', l === 'zh');
  }

  if (enBtn) enBtn.addEventListener('click', function(e) { setLang('en'); });
  if (zhBtn) zhBtn.addEventListener('click', function(e) { setLang('zh'); });

  setLang(lang);
})();
