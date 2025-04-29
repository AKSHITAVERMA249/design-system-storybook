# 🧩 Design System with Storybook

A reusable **component design system** built with **React**, **TypeScript**, **CSS Modules**, and **Storybook** — ideal for scalable enterprise UI development.

---

## 📁 Project Structure

//FOLDER STRUCTURE
design-system-storybook/
│
├── .storybook/                  # Storybook configuration files
│   ├── main.ts
│   ├── preview.ts
│   └── vitest.setup.ts
│
├── public/                      # Public static assets (if any)
│
├── src/
│   ├── assets/                  # General assets (images, svgs)
│   ├── stories/                 # Component implementations and stories
│   │   ├── Button.tsx / .css / .stories.ts
│   │   ├── Header.tsx / .css / .stories.ts
│   │   ├── Page.tsx / .css / .stories.ts
│   │   ├── ProgressBar.tsx / .css / .stories.ts
│   │   └── SideNavigation.tsx / .css / .stories.tsx
│   │
│   ├── styles/                  # Global styling and design tokens
│   │   ├── colors.css
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── App.tsx                  # Root application component
│   ├── main.tsx                 # App entry point
│   └── index.ts                 # Entry for exporting components (optional)
│
├── .gitignore
├── eslint.config.js
├── vite-env.d.ts
└── README.md                    # Project documentation

THE PROJECT INCLUDES 🧱 Foundational Element: Color System
Create a token-based color system supporting B2B enterprise UI needs:
● Primary, Secondary, Tertiary Colors
● Neutral Colors (greys, whites, backgrounds, borders)
● Semantic Colors: Success, Info, Warning, Error
● Surface & Background Layers
● Light & Dark Theme Support

1.Data Display Components : "PROGRESS BAR"
<img width="500" alt="Screenshot 2025-04-29 at 6 28 01 PM" src="https://github.com/user-attachments/assets/d1aebe93-e480-434e-a0bd-54ddeabdc8b4" />

2. Navigation Components : "SIDEBAR NAVIGATION "
<img width="500" alt="Screenshot 2025-04-29 at 6 28 30 PM" src="https://github.com/user-attachments/assets/4181a021-25fe-4768-9277-a50c1b7bae31" />

