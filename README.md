# Ghost Portfolio 👻

> "I code things that haunt the web."

A story-driven, immersive personal portfolio website built with modern web technologies. This project blends a professional developer portfolio with gaming aesthetics, hidden easter eggs, and interactive storytelling elements.

## 🛠️ Tech Stack

- **Core**: [React](https://react.dev/) (v18) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/abhijit-the-ghost/portfolio.git
    cd ghost-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🌟 Key Features

- **Immersive Hero Section**: Glitch effects and typing animations.
- **Interactive Components**:
  - **Skill Cards**: Hover effects and category filtering.
  - **Project Showcase**: Detailed cards with links.
  - **Game Stats**: A unique way to show personality traits.
- **Theming**: Dark mode by default with neon accents.

## 🕵️‍♂️ Easter Eggs (Spoilers!)

This site is packed with hidden secrets. Can you find them all?

### 1. The Ghost Companion 👻
- A friendly ghost floats around the screen.
- **Trigger**: He appears automatically.
- **Interaction**: Click him for wisdom. Click him **3 times** to unlock a secret.

### 2. The Secret Art Chamber 🎨
- A hidden gallery of digital art.
- **Unlock Methods**:
  - Click the Ghost Companion 3 times.
  - Double-click the Avatar in the "About" section.
  - Find the hidden "glitch pixel" in the footer.
  - Type the secret keyword: `ghostworld`.

### 3. God Mode (Developer Override) 💻
- A full-screen hacker interface.
- **Trigger**: Enter the **Konami Code** on your keyboard:
  `↑` `↑` `↓` `↓` `←` `→` `←` `→` `B` `A`
- **Features**:
  - Matrix Rain Intro sequence.
  - Live System Stats (FPS, DOM nodes).
  - Interactive Terminal.
  - **Edit Mode**: Visual component inspector.

## 📂 Project Structure

```
src/
├── components/        # Main UI components (Hero, About, etc.)
├── easter-eggs/       # Secret features (God Mode, Ghost, etc.)
│   ├── GhostGodModeOverlay.jsx
│   ├── MatrixRainCanvas.jsx
│   └── ...
├── assets/            # Images and static files
└── App.jsx            # Main entry point
```

## 📄 License

MIT License - feel free to use this code for your own portfolio!
