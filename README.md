# UVBASKICINIZ Site Dosyaları

Bu paket statik HTML/CSS/JS sitesidir. GitHub Pages, Netlify, Vercel veya cPanel üzerinde çalışır.

## Dosya yapısı

- `index.html` → ana site dosyası
- `style.css` → renkler, tema, mobil uyum ve tasarım
- `script.js` → koyu/açık mod, mobil menü, WhatsApp teklif formu
- `assets/logo-uvbaskiciniz.png` → site logosu
- `assets/favicon.png` → tarayıcı ikon dosyası
- `assets/og-preview.png` → sosyal paylaşım görseli

## İletişim bilgileri

WhatsApp numarası şu şekilde ayarlı:

`0507 296 61 75`

Kod içinde yönlendirme formatı:

`905072966175`

Gmail şu şekilde yazıldı:

`uvbaskıcınız@gmail.com`

Not: Gmail adresinde Türkçe karakter sorun çıkarırsa `index.html` içinde bu alanı `uvbaskiciniz@gmail.com` olarak değiştirmen daha sağlıklı olur.

## GitHub Pages ile yayınlama

1. GitHub'da yeni repo aç.
2. Bu klasörün içindeki dosyaları direkt repoya yükle.
3. Dosyalar repoda şu şekilde görünmeli:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/`
4. Repo içinde `Settings > Pages` alanına gir.
5. `Deploy from a branch` seç.
6. Branch: `main`, Folder: `/root` seç.
7. Kaydet ve birkaç dakika bekle.

Link şu formatta olur:

`https://kullaniciadin.github.io/repo-adi/`

## Renk değiştirme

`style.css` dosyasının başındaki `:root` alanından renkleri değiştirebilirsin.

Ana renkler:

- Sarı: `--yellow`
- Mor: `--purple`
- Siyah zemin: `--bg`
- Beyaz yazı: `--text`

## Logo değiştirme

Yeni logoyu `assets` klasörüne koyup `index.html` içindeki şu yolu değiştir:

`assets/logo-uvbaskiciniz.png`

Commit changes
