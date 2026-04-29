# Portfolio - Hariharan A

A modern, interactive, and highly animated personal portfolio website built to showcase projects, experience, and technical competencies. Designed with a sleek approach alongside dynamic theme switching (Dark, Purple, Cyan).

## 🚀 Key Features

*   **Immersive Animations:** Utilizing [Motion](https://motion.dev/) for scroll-linked animations, parallax effects, and smooth page transitions.
*   **Scroll-Stack Projects:** A custom-built, sticky card stack animation for the projects showcase area, providing an engaging way to scroll through the portfolio.
*   **Dynamic Theming:** Seamless switching between customized dark-mode themes (Monochrome, Purple, and Cyan).
*   **Responsive Design:** Fully fluid UI optimized for mobile, tablet, and desktop viewports using Tailwind CSS.
*   **Atmosphere HUD:** An ambient, fixed-position Heads-Up Display showing localized context and scroll metrics.

## 🛠 Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Motion](https://motion.dev/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Components:** Custom UI components with headless primitives and conditional class merging (`clsx`, `tailwind-merge`).

## 📁 Project Structure

```text
.
├── app/                  # Next.js App Router (Pages, Layout, Globals)
├── components/
│   ├── sections/         # Main page sections (Hero, Competencies, Experience, Projects, Contact)
│   ├── ui/               # Reusable UI components (Buttons, ThemeToggle, AtmosphereHUD, etc)
│   └── reactbits/        # Specialized animation components (e.g., DecryptedText)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and static data
│   ├── portfolioData.ts  # Centralized data store for projects, experience, and skills
│   └── utils.ts          # Helper functions (Tailwind cn merge, etc.)
├── public/               # Static assets (Images, Resume)
```
