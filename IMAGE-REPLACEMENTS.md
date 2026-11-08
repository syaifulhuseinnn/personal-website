## Image and placeholder replacements

This site ships with placeholder photography and sample copy. Replace the items below before publishing.

### Photos (replace with your own work)

All photo placeholders currently use Unsplash URLs. Swap each `src` with your own image (local file in `public/` or a hosted URL you trust and add to `next.config.ts` `images.remotePatterns` if needed). Keep descriptive `alt` text aligned with the real image.

| Location | File | What to replace |
|---|---|---|
| Introduction hero image | `app/page.tsx` (intro section, `Image` with `priority`) | `src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?..."` and its `alt` — a strong portrait or signature photograph that represents you. |
| Work gallery: “Morning light, Pearl District” | `app/page.tsx` (`work[0]`) | `src`, `alt`, `title`, and `category` for your own portrait/editorial piece. |
| Work gallery: “Still water” | `app/page.tsx` (`work[1]`) | `src`, `alt`, `title`, and `category`. |
| Work gallery: “Studio study” | `app/page.tsx` (`work[2]`) | `src`, `alt`, `title`, and `category`. |
| Work gallery: “Market day” | `app/page.tsx` (`work[3]`) | `src`, `alt`, `title`, and `category`. |
| Work gallery: “Coastline” | `app/page.tsx` (`work[4]`) | `src`, `alt`, `title`, and `category`. |
| Work gallery: “Quiet afternoon” | `app/page.tsx` (`work[5]`) | `src`, `alt`, `title`, and `category`. |
| Browser/site icon | `app/favicon.ico` (template default) | Replace with your own favicon/brand mark. |

If you prefer `picsum.photos` while drafting, you can use URLs like `https://picsum.photos/seed/your-seed/1200/1500` and keep the existing `picsum.photos` remote pattern in `next.config.ts`.

### Copy and identity (also placeholders)

| Location | File | What to replace |
|---|---|---|
| Site name / metadata | `app/layout.tsx` (`metadata.title`, `metadata.description`) | Your name, location, and what you shoot. |
| Display name in header/footer | `app/page.tsx` (`Avery Lane`, footer copyright) | Your name or studio name. |
| Introduction | `app/page.tsx` (intro section) | Who you are, what you shoot, and where you work. |
| Contact email | `app/page.tsx` (`CONTACT_EMAIL` constant) | Your real email address (appears in nav, intro, pricing note, contact section). |
| Pricing | `app/page.tsx` (`pricing` array) | Package names, prices, descriptions, and inclusions to match your actual offers. |
| Location references | `app/page.tsx` (“Portland, Oregon”, travel note) | Your base location and travel policy. |

### Design notes

- Fonts are set in `app/layout.tsx`: **Cormorant Garamond** for headings and **Inter** for body text (loaded via `next/font/google`).
- Neutral palette and spacing live in `app/globals.css`. Adjust `:root` / `.dark` tokens there if you want a different tone.
