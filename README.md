# React Eğitim Kodları

React eğitiminde adım adım yazılan örnek projeler: sade React bileşenlerinden Redux ve React Router'a, oradan
Express + MongoDB arka uçlu bir öğrenci yönetim uygulamasına kadar.

> **Not:** Bu depo 2019 yılında eğitim amaçlı yazıldı ve artık güncellenmiyor. Bağımlılıkları eskidir ve bilinen güvenlik açıkları içerir; üretimde kullanmayın.

## İçerik

| Klasör | Ne yapar |
|---|---|
| `proje1` | React'e giriş: CDN'den yüklenen React ile sayaç bileşeni, Babel ile derleme, ok fonksiyonu örnekleri |
| `proje2` | Şehir listesi uygulaması (`sessionStorage` ile saklama); JSON ve spread örnekleri |
| `proje3` | Webpack, Redux ve React Router ile öğrenci listesi: ekleme, düzenleme, listeleme |
| `proje4` | `proje3`'ün Express + MongoDB (Mongoose) arka uçlu hâli: JWT ile kullanıcı kaydı/girişi, öğrenci CRUD API'si, Material UI ve Redux Thunk |
| `proje5` | Moment.js ile ayın günlerini gösteren takvim bileşeni, CSS'in webpack ile yüklenmesi |

`Student.postman_collection.json`, `proje4` API'si (`/api/users`, `/api/student`) için Postman koleksiyonudur;
`{{url}}` değişkenini kendi sunucu adresinize ayarlayın.

## Teknolojiler

- React 16.12, Redux 4, React Redux 7, React Router 5
- Babel 7, Webpack 4, webpack-dev-server 3, live-server
- `proje4`: Express 4, Mongoose 5, jsonwebtoken 8, bcryptjs, Material UI 4, axios
- `proje5`: Moment.js

## Çalıştırma

Her klasör ayrı bir npm projesidir; önce klasöre girip `npm install` çalıştırın.

- `proje1`, `proje2`: `npm run babel` ile `src/app.js` dosyasını `script.js`'e derleyin, ayrı bir terminalde
  `npm run live` ile sayfayı açın.
- `proje3`, `proje5`: `npm run devServer` (geliştirme sunucusu) ya da `npm run build:dev` (çıktı
  `public/script.js`).
- `proje4`:
  1. Yerelde bir MongoDB çalıştırın.
  2. `server/config/config.json` içindeki `MONGODB_URI` ve `JWT_SECRET` değerlerini kendinize göre ayarlayın
     (`JWT_SECRET` yalnızca örnek bir değerdir). `NODE_ENV` `development` ya da `test` değilse bu değerler ortam
     değişkenlerinden okunur.
  3. `npm run build:prod` ile önyüzü derleyin, `npm start` ile sunucuyu başlatın (`config.json`'daki ayarla port 3000).

`proje4/server/upload.js`, dosyaları AWS S3'e yüklemek için yazılmış bir denemedir; sunucuya bağlı değildir ve
kullandığı `multer`, `multer-s3`, `aws-sdk` paketleri `package.json`'da yoktur. Kullanmak isterseniz bu
paketleri kurup `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION` ve `S3_BUCKET` ortam değişkenlerini
kendi değerlerinizle verin.
