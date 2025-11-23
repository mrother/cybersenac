## Project Overview

CyberSenac is an educational cybersecurity website built with React, TypeScript, Vite, and Tailwind CSS. The application is a single-page application (SPA) that provides:
- Educational content about cybersecurity threats (malware, phishing, network attacks)
- Protection best practices (strong passwords, 2FA, backups)
- An interactive quiz with 5 questions to test user knowledge

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
vite build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Architecture

### Single Component Design
The entire application is contained in a single `App.tsx` component with section-based navigation. There are no separate route files or component directories - all UI logic is in one file.

### State Management
All state is managed locally in the App component using React hooks:
- `currentSection`: Controls which section is visible ('home', 'threats', 'protection', 'quiz')
- `currentQuestion`: Tracks quiz progress
- `selectedAnswers`: Array storing user quiz responses
- `quizCompleted`: Boolean for quiz completion state
- `showExplanation`: Controls explanation visibility for current question

### Navigation Pattern
Navigation uses scroll-to-section behavior for content pages and a conditional render for the quiz:
- Content sections (home, threats, protection) are rendered in the main flow and navigated via `scrollIntoView`
- Quiz section uses conditional rendering to replace all other content when active
- The `scrollToSection` function handles both navigation types

### Quiz Data Structure
Quiz questions are defined as an array of objects with this interface:
```typescript
interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;  // Index of correct option
  explanation: string;
}
```

## Styling

The project uses Tailwind CSS with a dark theme based on slate colors:
- Primary gradient: cyan-400 to blue-500
- Background: slate-900/800 gradients
- All styling is inline using Tailwind utility classes
- No separate CSS modules or styled-components

## Key Files

- `src/App.tsx`: Single component containing all application logic and UI (539 lines)
- `src/main.tsx`: React app entry point
- `src/index.css`: Global styles and Tailwind directives
- `index.html`: Contains meta tags for SEO (Portuguese language, cybersecurity keywords)
- `vite.config.ts`: Vite configuration with lucide-react excluded from optimization
- `tailwind.config.js`: Tailwind configuration scanning HTML and all TS/TSX files

## Dependencies

### Production
- `react` & `react-dom`: UI framework
- `lucide-react`: Icon library (Shield, Lock, Eye, AlertTriangle, etc.)

### Development
- `vite`: Build tool and dev server
- `typescript`: Type checking
- `tailwindcss`: Utility-first CSS
- `eslint`: Code linting with React-specific plugins

## Making Changes

When modifying this codebase:
- All UI changes go in `src/App.tsx`
- To add quiz questions: append to the `quizQuestions` array
- To add new sections: add to the main content render area and update navigation buttons
- Icons are from `lucide-react` - import them from that package
- The app is in Portuguese (pt-BR) - maintain this language for new content
