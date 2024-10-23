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

- [x]: Proje dosyasını oluştur.
- [x]: Projede gerekli olacak klasörleri oluştur. (utils, libs, api ....)
- [x]: Projenin layout yapısını oluştur.
- [ ]: Componentleri oluştur
  - [x]: Navbar
  - [ ]: Footer
  - [ ]: Profile
  - [ ]: Hava durumu component'i
    - [ ]: Beş günlük hava durumunu gösteren component
    - [ ]: Seçili günün saatlik hava durumunu gösteren component
- [ ]: Hava durumunu almak için api bağla (ChatGpt de öneriler var)
- [ ]: Lokasyon bilgisini almak için Google API bagla
- [ ]: Kullanıcının seçtiği lokasyonları ve bilgilerini tutmak için Supabase bağlantısı oluştur.

## Proje Özellikleri

- Ana sayada 5 günlük hava durumu gösterilecek ve seçili olan dışında geri kalanlar kısmı bilgi gösterecek
- Seçili olan günün altında 24 saatlik hava durumu gösterilecek
- Günlük hava durumu görünümlerinde olan ya da olacak hava durumunun efekti gözükecek
- Kullanıcı kayıt olabilecek ve giriş yapabilecek
- Kullanıcı giriş yaparsa seçtiği lokasyonu favorilerine ekleyebielecek ve ana sayfada favori lokasyonlar için hava durumları gösterilecek
- Kullanıcı profil sayfasında kayıtlı lokasyonları düzenleyebilecek. (Silme ya da ekleme)

## Hava Durumu API

- Konum Bulmak için:

```http
https://api.openweathermap.org/geo/1.0/direct?q={location}&limit=5&appid={API Key}
```

- Hava Durumu için

```http
https://api.openweathermap.org/data/2.5/forecast?units=metric&lat={}&lon={}&appid={API Key}
```
