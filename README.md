This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Yapılacaklar

- [x] Proje dosyasını oluştur.
- [x] Projede gerekli olacak klasörleri oluştur. (utils, libs, api ....)
- [x] Projenin layout yapısını oluştur.
- [x] Components oluştur
  - [x] Navbar Component
  - [x] Footer Component
  - [x] Profile Component and Page
  - [x] Search Bar Component
  - [x] Weather Component
  - [x] Widget Card Component (Tıklanan kartın hava durumu ile ilgili ek bilgiler yazsın içinde)
  - [x] Auth Page
  - [x] Login ve Register Component (Tek Sayfada gösterilecek)
    - [x] Weather Component Ana Sayfa da 5 gün için gösterilecek.
- [x] Hava durumunu almak için api bağla (Open Weather Maps API)
- [x] Lokasyon bilgisini almak için (Open Weather Maps API)
- [x] Kullanıcının seçtiği lokasyonları ve bilgilerini tutmak için Firebase bağlantısı oluştur.
  - [x] Register fonksiyonu
  - [x] Log-in fonksiyonu
  - [x] Navbar da giriş yapmış kullanıcıyı yakalama
  - [x] Giriş yapmış kullanıcıya favori ekle butonunu göster ve favorileri Search Bar altında gösterme
    - [x] Favori ekleme fonksiyonu
    - [x] Favorileri getirme fonksiyonu
- [x] middleware yapısı oluştur
- [x] RESPONSIVE DESIGN
  - [x] Navbar responsive hale getirilecek ve mobil navbar eklenecek
  - [x] Footer responsive hale getirilecek
  - [x] Search Bar responsive hale getirilecek
  - [x] Ana Sayfadaki kartların gösterimi responsive hale getirilecek
  - [x] Ana Sayfadaki kartların ek bilgi kartları tablet gösteriminden sonra kaldırılacak
  - [x] Profil sayfası responsive hale getirilecek
  - [x] Login ve Register sayfası responsive hale getirilecek
- [ ] Hata mesajlarının iyileştirilmesi

## Proje Özellikleri

- Ana sayada 5 günlük hava durumu gösterilecek ve seçili olan dışında geri kalanlar kısmı bilgi gösterecek
- Seçili olan günün altında o günle ilgili ek bilgi widgetları gösterilecek
- Günlük hava durumu görünümlerinde olan ya da olacak hava durumunun efekti gözükecek
- Kullanıcı kayıt olabilecek ve giriş yapabilecek
- Kullanıcı giriş yaparsa seçtiği lokasyon favorilerine ekleyebilecek ve çıkarabilecek
- Kullanıcı ana sayfada kayıtlı lokasyonları görebilecek ve düzenleyebilecek. (Silme ya da ekleme)
- Kullanıcı profil sayfasında bilgilerini değiştirme ve şifre değiştirme işlemlerini yapabilecek.

## Hava Durumu API

- Konum Bulmak için:

```http
https://api.openweathermap.org/geo/1.0/direct?q={location}&limit=1&appid={API Key}
```

- Hava Durumu için

```http
https://api.openweathermap.org/data/2.5/forecast?units=metric&lat={}&lon={}&appid={API Key}
```

"src/types/\*_/_.d.ts"
