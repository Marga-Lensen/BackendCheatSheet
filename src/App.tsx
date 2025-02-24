import { useState } from "react";
import Footer from "./components/Footer.tsx";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext.js"; // Import the language context
import germanFlag from "/de.png"; // Adjust path if needed
import englishFlag from "/gb.png";

import backendLinks from "./data/backendLinks.ts"; // Import the static data
import "./App.css";

export interface ILocalizedText {
  en: string;
  de: string;
}
export interface IRow {
  link: { 
    text: string; 
    // url: string };
    url: ILocalizedText }; // Now supports both English and German URLs
  // explanation: string;
  explanation: ILocalizedText;  // Now explanation is localized
}

export interface IRowProps {
  props: IRow;
  highlight: boolean; // Keeps the highlight prop
}

export const TableRow = ({ props, highlight }: IRowProps) => {
  const { link, explanation } = props;
  const { language } = useLanguage();

  // Pick the correct URL based on language
  const localizedUrl = link.url[language] || link.url.en;

  // Pick the correct explanation (fallback to English if German not available)
  const localizedDescription = explanation[language] || explanation.en;

  
  return (
    <tr>
      <td>
        <a
          className={highlight ? "highlight" : ""}
          // href={link.url}
          href={localizedUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.text}
        </a>
      </td>
      {/* <td>{language === "de" ? germanDescription : explanation}</td> */}
      <td>{localizedDescription}</td>
    </tr>
  );
};

function App() {
  const { language, toggleLanguage } = useLanguage(); // Use the language context

  const [methodsData] = useState<IRow[]>(backendLinks); // No fetching needed

  const highlightedLinks = [
    "Express Middleware",
    "Express Routers",
    "HTTP Status Codes",
    "localhost & PORT",
    "What is an API?",
    "HTTP Methods (GET, POST, PATCH, DELETE)",
  ]; // Add more as needed

  return (
    <>
     <div className="app-container">
     <h1>Backend Cheat Sheet</h1>
      <div className="language-toggle" onClick={toggleLanguage}>
        <span className="toggle-text">
          {language === "en" ? "Switch to German" : "Switch to English"}
        </span>
        <div className="flags">
          <img
            src={germanFlag}
            alt="English"
            className={`flag ${language === "en" ? "active" : "inactive"}`}
          />

          <img
            src={englishFlag}
            alt="Deutsch"
            className={`flag ${language === "de" ? "active" : "inactive"}`}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Resource</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          {methodsData.map((method, i) => (
            <TableRow
              props={method}
              key={i}
              highlight={highlightedLinks.includes(method.link.text)}
            />
          ))}
        </tbody>
      </table>
      <Footer />
     </div>
    </>
  );
}

// export default App;
export default () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
