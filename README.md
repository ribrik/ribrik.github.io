# Ribrik PWA Demo

En **minimalistisk och professionell Progressive Web App (PWA)** med mörkt tema och neonrosa detaljer. Byggd för utbildningssyfte, fullt kompatibel med GitHub Pages och Lighthouse PWA-standarder.

---

## 🚀 Installation

```bash
git clone https://github.com/ribrik/ribrik.github.io.git
cd ribrik.github.io
npm install
```

## 🛠️ Kommandon

| Kommando | Beskrivning |
|----------|-------------|
| `npm run sass` | Kompilerar SASS till CSS |
| `npm run lint` | Lintar CSS-filer |
| `npm run test:a11y` | Testar tillgänglighet med axe-core |
| `npm run test:e2e` | Kör e2e-test med Cypress |

## 🌐 Publicering på GitHub Pages

1. Gå till **Settings → Pages**
2. Välj branch `main` → `/ (root)`
3. GitHub Pages aktiverar HTTPS och publicerar din PWA automatiskt.

## 🧩 Funktioner

- 🛰️ Offline-stöd via Service Worker
- 📲 Install-knapp (via `beforeinstallprompt`)
- 🎨 Mörkt tema med neonrosa accent (OKLCH-färg)
- ⚙️ SASS + Stylelint
- ♿ axe-core för a11y-test
- 🧪 Cypress för E2E-test

## ✅ Verifiering

Testa din PWA:
- [PWA Testing Tool](https://www.seoreviewtools.com/pwa-testing-tool/)
- Lighthouse i Chrome DevTools

## 🖼️ Ikoner

Projektet förväntar sig ikoner i mappen `images/`:
- `images/icon-192.png` (192x192 pixels)
- `images/icon-512.png` (512x512 pixels)

Du kan skapa dessa med [favicon.io](https://favicon.io/emoji-favicons/) eller liknande verktyg.

---

© 2025 **Ribrik.github.io**
