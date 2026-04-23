# Kalorilaskuri-projekti — Low Code -toteutus

## Projektin kuvaus

Rakensin itsenäisesti mobiiliystävällisen kalorilaskurisovelluksen käyttäen low code -lähestymistapaa ja tekoälyavusteista kehitystä. Projekti sisälsi koko tuotantoputken suunnittelusta julkaisuun.

## Tekninen toteutus

**Frontend**
- HTML, CSS ja JavaScript ilman frameworkeja
- Moderni tumma käyttöliittymä Google Fonts -fonteilla (Playfair Display, DM Sans)
- Responsiivinen design — toimii sekä mobiililla että selaimella
- Vaiheistettu käyttökokemus step-indikaattoreilla

**Backend & AI-integraatio**
- Google Gemini 2.5 Flash API kuvantunnistukseen
- Vercel serverless -funktiot API-avaimen turvalliseen piilottamiseen
- Kuvan automaattinen pakkaus ennen lähetystä (Canvas API)

**Infrastruktuuri**
- GitHub versionhallintaan
- GitHub Pages alkuperäinen hosting
- Vercel tuotantoympäristöön (API-backend + frontend)
- CI/CD automaattinen deployment GitHubin kautta

## Keskeiset ominaisuudet

- 📸 Ruoka-annoksen tunnistus kuvasta Gemini AI:lla
- 🔢 Automaattinen kalorilaskenta tunnistuksen pohjalta
- ✏️ Manuaalinen ruokalistan muokkaus
- 🎯 Tavoitekohtainen palaute (ylläpito, kevyt ateria, treeni)
- 🇫🇮 Suomalaisten ruokien tunnistus (poronkäristys, raita-kastike jne.)

## Mitä opin

- AI-pohjaisen kuvantunnistuksen integrointi tuotantosovellukseen
- Serverless backend-arkkitehtuuri API-avainten suojaamiseen
- Service worker -välimuistin hallinta ja debug-prosessi
- GitHub Actions CI/CD -putken käyttö
- Vercel-deploymentten hallinta

## Työkalut

Claude AI (kehitysapuri) · Google Gemini API · Vercel · GitHub · JavaScript · HTML/CSS

---

*Projekti toteutettu huhtikuussa 2026 low code -periaatteella hyödyntäen tekoälyavusteista kehitystä.*
