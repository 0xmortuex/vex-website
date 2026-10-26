(function () {
  'use strict';

  // ----- the text of the page in Turkish. The English is the page itself (each element keeps it in data-en). -----
  var TR = {
    'skip': 'İçeriğe geç',
    'nav.inside': 'İçinde neler var', 'nav.moving': 'Taşınma', 'nav.new': 'Yenilikler', 'nav.questions': 'Sorular', 'nav.download': 'İndir',
    'hero.h1': 'Tam size göre yapılmış bir tarayıcı.',
    'hero.lede': 'Nasıl göründüğünü, her şeyin nerede durduğunu ve neler yaptığını siz seçin. Vex; sekmeleriniz üzerinde iş yapabilen bir yapay zekâ yardımcısı, gerçek yayın desteği ve seçmediğiniz hiçbir yere hiçbir şey göndermeyen, hızlı ve gizli bir Windows tarayıcısıdır.',
    'cta.download': 'Windows için indir', 'cta.inside': 'İçinde neler var',
    'hero.meta': 'Windows 10 ve 11, 64 bit. Ücretsiz, MIT lisanslı.',
    'demo.look': 'Bir görünüm deneyin', 'demo.classic': 'Klasik', 'demo.newtab': 'Yeni sekme', 'demo.url': 'Ara ya da adres girin',
    'demo.greet': 'İyi akşamlar', 'demo.search': 'Google ile ara',
    'demo.caption': 'Her parçası yerinden oynar: sekmeleri, araç çubuğunu ve kenar çubuğunu siz yerleştirirsiniz.',
    'move.h2': 'Taşınmak yaklaşık beş dakika sürer',
    'move.p': 'Kaydolacak bir şey yok. Kurulum ağır işi yapar ve her adım atlanabilir.',
    'move.1.h': 'Kurun', 'move.1.p': 'Yükleyiciyi çalıştırın. Açılacak bir hesap yok.',
    'move.2.h': 'Eşyalarınızı getirin',
    'move.2.p': 'Kurulum; Chrome, Edge, Brave, Firefox, Opera ve Opera GX’ten yer imlerinizi ve geçmişinizi getirmeyi önerir. Parolalar, o tarayıcıdan dışa aktardığınız dosyayla gelir; Vex başka bir tarayıcının şifreli depolarını hiçbir zaman açmaz.',
    'move.3.h': 'Size göre yapın',
    'move.3.p': 'Bir görünüm seçin, sonra araç çubuğunu ve kenar çubuğu düğmelerini istediğiniz yere sürükleyin. Hepsini sonradan Ayarlar’dan değiştirebilirsiniz.',
    'move.note': 'Web siteleri yine de bir kez oturum açmanızı isteyecek: tarayıcılar açık oturumlarını kendilerine saklar. Parolalarınız içe aktarıldığında bu, tek tıktır.',
    'in.h2': 'İçinde neler var, ne yapmak istediğinize göre',
    'in.p': 'Yüzlerce özellik, hepsi tarayıcının içinde. Hiçbiri ücretli eklenti değil.',
    'in.browse': 'Gezin', 'in.private': 'Gizli kalın', 'in.ai': 'Yapay zekâya sorun', 'in.watch': 'İzleyin ve dinleyin', 'in.do': 'İşlerinizi halledin',
    'b.1.h': 'Sekmeler istediğiniz yerde', 'b.1.p': 'Chrome gibi üstte, yanda ya da buzlu Glass görünümünde. Gruplar, belleğini geri veren uyuyan sekmeler, dört sayfaya kadar bölünmüş ekran, Resim İçinde Resim.',
    'b.2.h': 'Her şey için tek çubuk', 'b.2.p': 'Ctrl+K ile bir sayfa açın, arama yapın, bir panele geçin ya da kullanımınıza göre sıralanmış herhangi bir komutu çalıştırın.',
    'b.3.h': 'Değiştirebileceğiniz görünümler', 'b.3.p': 'Firefox, Chrome, Safari, Glass ve Klasik; temalar, dokular, yazı tipleri ve sürükleyerek düzenleyebileceğiniz bir yerleşim.',
    'b.4.h': 'Kenar çubuğunda uygulamalar', 'b.4.p': 'Discord, WhatsApp, Spotify, GitHub ve sabitlediğiniz her site; her biri kendi oturumunda, okunmamış rozetleriyle.',
    'b.5.h': 'Fotoğrafları koruyan karanlık mod', 'b.5.p': 'Açık renkli siteleri ilk görüntüden itibaren karartır, fotoğraflara ve logolara dokunmaz, site zaten karanlıksa kenara çekilir.',
    'b.6.h': 'Kendi görüntüleyicileri', 'b.6.p': 'PDF’ler, resimler, JSON ve CSV dosyaları ve klasörler Vex’in içinde açılır; PDF’lerde not ve form, klasörlerde gerçek bir dosya tarayıcısı vardır.',
    'p.1.h': 'Baştan açık engelleme', 'p.1.p': 'Ağda ve sayfada reklamlar ile izleyiciler; ayrıca parmak izi koruması, DNS-over-HTTPS ve yalnızca HTTPS kipi.',
    'p.2.h': 'Tek tıkla Tor', 'p.2.p': 'Vex resmî Tor paketini kendisi indirir ve çalıştırır. Kurulacak başka bir şey yok.',
    'p.3.h': 'Engelli sitenin ötesine', 'p.3.p': 'DNS ve SNI engellemesi için yerleşik bir aşma yolu; VPN ve yönetici izni gerekmez.',
    'p.4.h': 'Hiçbir şey eve haber vermez', 'p.4.p': 'Analitik yok, telemetri yok. Düz bir belge, Vex’in yaptığı her isteği ve nedenini listeler.',
    'a.1.h': 'Düz sözlerle söyleyin', 'a.1.p': '“Tüm YouTube sekmelerini kapat.” “GitHub sekmelerimi grupla.” Yaygın komutlar, ağ olmadan bilgisayarınızda anlaşılır.',
    'a.2.h': 'Okuduğunuz şeyi sorun', 'a.2.p': 'Bir sayfayı ya da seçimi özetleyin, açıklayın, çevirin; okuduğunuz her şeyde anlamına göre arayın.',
    'a.3.h': 'Nerede çalışacağını siz seçersiniz', 'a.3.p': 'Kendi Cloudflare Worker’ınızda bulutta, Ollama ile kendi makinenizde ya da tamamen tarayıcının içinde. Siz kurana kadar kapalıdır.',
    'a.4.h': 'Yapmadan önce sorar', 'a.4.p': 'Ajan planını gösterir, geri alamayacağı bir şeyden önce sorar ve Duraklat onu adımlar arasında durdurur.',
    'w.1.h': 'Gerçekten oynayan yayın', 'w.1.p': 'Netflix, Spotify, Prime Video ve Disney+, imzalı yükleyicideki Widevine sayesinde çalışır.',
    'w.2.h': 'Gerçek denetimli ekran paylaşımı', 'w.2.p': 'Pencereyi, 1440p’ye kadar çözünürlüğü, kare hızını ve sesin paylaşılıp paylaşılmayacağını seçin.',
    'w.3.h': 'Her şey için tek ses', 'w.3.p': 'Her sekmede 0’dan yüzde 500’e tek bir kaydırıcı ve çalanlar için bir merkez.',
    'w.4.h': 'Oyunun yolundan çekilir', 'w.4.p': 'Tam ekran bir oyun başlayınca Vex ekran kartını boşaltır ve arka plan işlerini bekletir.',
    'w.5.h': 'Kendi oynatıcısı', 'w.5.p': 'Videolar ve sesler; altyazı, hız, A-B döngüsü, kapak resmi ve klasör sırasıyla açılır.',
    'd.1.h': 'Küçük araçlardan bir kutu', 'd.1.p': 'Yüzlerce hesap makinesi, dönüştürücü ve biçimlendirici; işinize uyanlar en üstte.',
    'd.2.h': 'Notlar, hatırlatıcılar, odak', 'd.2.p': 'Sayfaya yapışkan notlar, bilgisayarınızı uyandıran hatırlatıcılar ve dikkat dağıtanları engelleyen odak oturumları.',
    'd.3.h': 'Sorunsuz oturum açma', 'd.3.p': 'Şifreli bir parola kasası, kendiliğinden dolan iki adımlı doğrulama kodları ve geçiş anahtarları.',
    'd.4.h': 'Herkes için ayrı bir Vex', 'd.4.p': 'Kendi sekmeleri, yer imleri, parolaları ve çerezleri olan, yan yana açılabilen profiller.',
    'd.5.h': 'Ayrılmadan belgeler', 'd.5.p': 'Word, Excel, PowerPoint ve e-kitap dosyaları indirilmek yerine bir görüntüleyicide açılır; Boşluk tuşu her indirmeyi önizler.',
    'd.6.h': 'İstediğiniz gibi yazdırın', 'd.6.p': 'Ctrl+P sayfaları basılacakları gibi gösterir; kâğıt, kenar boşlukları ve yaprak başına sayfa seçenekleriyle.',
    'tr.h2': 'Vex’in tamamı Türkçe konuşur',
    'tr.p': 'Kurulumda Türkçe’yi seçin, uygulamanın tamamı ona uyar: Ayarlar, adım adım anlatımlı özellik kitaplığı, hata iletileri, Windows iletişim kutuları ve sürüm notları. İngilizce varsayılan kalır ve Vex dili kendiliğinden asla değiştirmez.',
    'new.h2': 'Yenilikler', 'new.loading': 'Son sürüm okunuyor…', 'new.all': 'Her sürüm ve notları',
    'q.h2': 'Sorular',
    'q.1.q': 'Ücretsiz mi?', 'q.1.a': 'Evet. Vex, MIT lisansıyla açık kaynaktır ve içindeki hiçbir şey ücretli eklenti değildir.',
    'q.2.q': 'Mac ya da Linux’ta çalışır mı?', 'q.2.a': 'Henüz değil. Vex, Windows 10 ve 11 (64 bit) içindir.',
    'q.3.q': 'Netflix çalışır mı?', 'q.3.a': 'Evet, Sürümler sayfasındaki imzalı yükleyicide. Yayın sitelerinin istediği Widevine yalnızca o sürümde vardır.',
    'q.4.q': 'Yükleyiciyi çalıştırırken Windows uyarı gösteriyor.', 'q.4.a': 'Vex bağımsız bir uygulamadır; SmartScreen onu henüz tanımıyor olabilir. Daha fazla bilgi’yi, sonra Yine de çalıştır’ı seçin.',
    'q.5.q': 'Vex ne gönderir, kime?', 'q.5.a': 'Analitik yok, telemetri yok. Güncelleme denetimleri, filtre listeleri ve yapay zekâ ya da eşitleme gibi açtığınız şeyler istek yapar; gizlilik belgesi her birini listeler.',
    'q.6.q': 'Yapay zekâ hesabına ihtiyacım var mı?', 'q.6.a': 'Hayır. Yapay zekâ yardımcısı isteğe bağlıdır; kendi Worker’ınızı, yerel bir Ollama modelini ya da cihazdaki modeli bağlayana kadar kapalıdır.',
    'get.h2': 'Vex’i edinin', 'get.p': 'Yükleyiciyi indirin, bir dakika içinde geziniyorsunuz.', 'get.all': 'Tüm sürümler',
    'foot.tag': 'Tam size göre yapılmış bir tarayıcı.', 'foot.releases': 'Sürümler', 'foot.issues': 'Sorun bildirin', 'foot.license': 'Lisans',
    'foot.privacy': 'Gizlilik', 'foot.terms': 'Kullanım şartları', 'foot.notices': 'Üçüncü taraf bildirimleri', 'foot.legal': '0xmortuex tarafından yapıldı. MIT lisansı.',
  };

  var lang = 'en';
  var els = Array.prototype.slice.call(document.querySelectorAll('[data-i]'));
  els.forEach(function (el) { el.setAttribute('data-en', el.innerHTML); });
  var latestEl = document.getElementById('latest');
  var latestVersion = (latestEl.textContent.match(/v\d+\.\d+\.\d+/) || [''])[0];   // the release script moves this number

  function setLanguage(next) {
    lang = next === 'tr' ? 'tr' : 'en';
    document.documentElement.lang = lang;
    els.forEach(function (el) {
      var key = el.getAttribute('data-i');
      el.innerHTML = lang === 'tr' && TR[key] ? TR[key] : el.getAttribute('data-en');
    });
    document.title = lang === 'tr' ? 'Vex — Tam size göre yapılmış bir tarayıcı' : 'Vex — A browser built just for you';
    latestEl.textContent = (lang === 'tr' ? 'Son sürüm: ' : 'Latest: ') + latestVersion;
    var hero = document.getElementById('hero-meta');
    if (hero && !/Win/i.test(navigator.platform)) hero.textContent = lang === 'tr' ? 'Yalnızca Windows 10/11, 64 bit.' : 'Windows 10 and 11, 64-bit. Windows only for now.';
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    try { localStorage.setItem('vex-site-lang', lang); } catch (e) { /* the choice just is not remembered */ }
    showRelease();
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (b) {
    b.addEventListener('click', function () { setLanguage(b.getAttribute('data-lang')); });
  });

  // ----- the window in the hero changes its look -----
  var win = document.getElementById('win');
  Array.prototype.forEach.call(document.querySelectorAll('[data-look]'), function (b) {
    if (b === win) return;
    b.addEventListener('click', function () {
      win.setAttribute('data-look', b.getAttribute('data-look'));
      Array.prototype.forEach.call(document.querySelectorAll('.picker [data-look]'), function (x) { x.setAttribute('aria-pressed', String(x === b)); });
    });
  });

  // ----- tabs: arrow keys move between them -----
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function pick(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { pick(t); });
    t.addEventListener('keydown', function (e) {
      var to = e.key === 'ArrowRight' ? tabs[(i + 1) % tabs.length] : e.key === 'ArrowLeft' ? tabs[(i + tabs.length - 1) % tabs.length] : e.key === 'Home' ? tabs[0] : e.key === 'End' ? tabs[tabs.length - 1] : null;
      if (!to) return;
      e.preventDefault(); pick(to); to.focus();
    });
  });

  // ----- what's new: the newest release's own notes, in the language of the page -----
  var release = null;
  function bulletsOf(body, wantTurkish) {
    var text = String(body || '');
    var at = text.search(/^## Türkçe/m);
    var part = wantTurkish ? (at >= 0 ? text.slice(at) : text) : (at >= 0 ? text.slice(0, at) : text);
    var out = [];
    part.split(/\r?\n/).forEach(function (line) {
      var m = /^- \*\*(.+?)\*\*\s*(.*)$/.exec(line.trim());
      if (m) out.push({ title: m[1].replace(/[.:]$/, ''), text: m[2].replace(/\s*(Try|Deneyin):.*$/, '') });
    });
    return out.slice(0, 6);
  }
  function showRelease() {
    var list = document.getElementById('new-list');
    var sub = document.getElementById('new-sub');
    if (!release) return;
    var items = bulletsOf(release.body, lang === 'tr');
    if (!items.length && lang === 'tr') items = bulletsOf(release.body, false);
    sub.textContent = (lang === 'tr' ? 'Son sürüm ' : 'Latest release ') + release.tag_name + (release.name ? ' — ' + release.name.replace(/^v?[\d.]+\s*[—-]\s*/, '') : '');
    list.textContent = '';
    items.forEach(function (it) {
      var li = document.createElement('li');
      var s = document.createElement('strong'); s.textContent = it.title;
      var p = document.createElement('span'); p.textContent = it.text;
      li.appendChild(s); li.appendChild(p); list.appendChild(li);
    });
    document.getElementById('new-link').href = release.html_url || 'https://github.com/0xmortuex/Vex/releases';
  }
  fetch('https://api.github.com/repos/0xmortuex/Vex/releases/latest', { headers: { Accept: 'application/vnd.github+json' } })
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (r) { release = r; showRelease(); })
    .catch(function () {
      // Nothing is made up when GitHub cannot be reached: the section says where the notes are.
      var sub = document.getElementById('new-sub');
      sub.textContent = lang === 'tr' ? 'Son sürümün notları şu an okunamadı. Aşağıdaki bağlantıda hepsi var.' : 'The notes for the latest release could not be read just now. They are all at the link below.';
    });

  document.getElementById('year').textContent = new Date().getFullYear();

  // English unless asked: ?lang=tr, or what this person chose before. Never from the browser's language.
  var asked = (/[?&]lang=(tr|en)/.exec(location.search) || [])[1];
  var saved = null;
  try { saved = localStorage.getItem('vex-site-lang'); } catch (e) { saved = null; }
  if ((asked || saved) === 'tr') setLanguage('tr');
})();
