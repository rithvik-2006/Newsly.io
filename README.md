# 🗞️ Newsly — Your Personalized Newspaper on the Web

Welcome to **Newsly**, a sleek, modern web app built with **Next.js** and **Tailwind CSS** that aggregates news from multiple sources. Designed with user experience in mind, Newsly features light/dark mode toggling, personalized feeds, bookmarks, and AI-powered enhancements like news summarization and sentiment analysis.

## 🌍 Live Preview

> [https://newsly.vercel.app](https://newsly-io.vercel.app/) <!-- Replace with your actual link -->

## 📌 Features

- Read headlines from multiple news sources (via NewsAPI, GNews, etc.)
- Light/Dark mode toggle with persistence
- Category and source filters
- Search by keyword
- Bookmarked articles (localStorage)
- Estimated reading time per article
- AI-generated summaries (OpenAI/HuggingFace)
- Progressive Web App support

## 🛠️ Tech Stack

- **Frontend**: Next.js (App Router), Tailwind CSS, TypeScript
- **State Management**: Context API / Zustand
- **API**: NewsAPI.org 
<!-- - **Optional AI**: OpenAI API (for summarization), Web Speech API (for TTS) -->

## 📁 Folder Structure

```
newsly/
├── app/                 # App directory (Next.js App Router)
│   ├── api/             # API routes      # Page-level components
│   └── ...
├── components/          # Reusable UI components (Navbar, NewsCard, etc.)
├── hooks/               # Custom React hooks (useTheme, etc.)
├── public/              # Static assets (logo, favicon, etc.)
├── styles/              # Global and custom styles
├── utils/               # Helper functions (e.g., formatTime, summarizer)
├── constants/           # Category/source constants
├── types/               # TypeScript type definitions
├── .env         # Environment variables (API keys)
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/newsly.git
cd newsly
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env` file and add:

```env
NEWS_API_KEY=your_api_key_here
OPENAI_API_KEY=your_openai_key_if_using_summarization
```

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### 📌 Open to Contributions Like:

* Adding more news APIs or regions
* Improving accessibility (a11y)
* Enhancing mobile responsiveness
* Adding internationalization (i18n)
* Improving summarization quality
* Implementing user accounts with Firebase/Auth0

### 🔧 How to Contribute:

1. Fork the repo
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to your branch (`git push origin feature/your-feature-name`)
5. Open a **Pull Request**

## 🧪 Testing

Basic unit tests can be written using **Jest** and **React Testing Library** (optional setup).
Coming soon in future versions!

## 🙌 Acknowledgements

* [NewsAPI.org](https://newsapi.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Next.js](https://nextjs.org/)
* [OpenAI](https://openai.com/) for summarization

## 📬 Contact

Made with ❤️ by **Manne Rithvik**  
[LinkedIn](https://www.linkedin.com/in/manne-rithvik-708iith/) | [GitHub](https://github.com/rithvik-2006)
