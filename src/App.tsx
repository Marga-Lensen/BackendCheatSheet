import { useState } from "react";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext.js"; // Import the language context

import backendLinks from "./data/backendLinks.js"; // Import the static data
import './App.css'

export interface IRow {
  link: { text: string; url: string };
  explanation: string;
}

export interface IRowProps {
  props: IRow;
  highlight: boolean; // new prop
}

export const TableRow = ({ props, highlight }: IRowProps) => {
  const { link, explanation } = props;
  const { language } = useLanguage();

  const germanExplanation = {
    "Fast, minimalist web framework for Node.js to build backend applications and APIs.": "Schnelles, minimalistisches Web-Framework für Node.js zum Erstellen von Backend-Anwendungen und APIs.",
    "Node.js module that allows interacting with the file system, reading, writing, and managing files.": "Node.js-Modul, das die Interaktion mit dem Dateisystem ermöglicht, zum Lesen, Schreiben und Verwalten von Dateien.",
    "Built-in Express middleware for parsing incoming JSON request bodies.": "Integrierte Express-Middleware zum Parsen eingehender JSON-Anforderungsdaten.",
    "NoSQL document-oriented database that stores data in flexible JSON-like documents.": "NoSQL-Datenbank, die Daten in flexiblen JSON-ähnlichen Dokumenten speichert.",
    "Functions that execute during the request-response cycle, used for logging, authentication, and error handling.": "Funktionen, die während des Anforderungs-Antwort-Zyklus ausgeführt werden und für Protokollierung, Authentifizierung und Fehlerbehandlung verwendet werden.",
    "Special middleware in Express to catch and handle errors globally in the app.": "Spezielle Middleware in Express, um Fehler global in der App zu erfassen und zu behandeln.",
    "Router module in Express that allows organizing routes into separate files or modules.": "Router-Modul in Express, das es ermöglicht, Routen in separate Dateien oder Module zu organisieren.",
    "Tool for testing APIs, making HTTP requests, and managing API collections.": "Tool zum Testen von APIs, Senden von HTTP-Anfragen und Verwalten von API-Sammlungen.",
    "Express method to send a JSON response to the client.": "Express-Methode zum Senden einer JSON-Antwort an den Client.",
    "Guidelines and best practices for designing RESTful web services.": "Richtlinien und Best Practices für das Entwerfen von RESTful-Webdiensten.",
    "Local development environment where the server runs on a specified port.": "Lokale Entwicklungsumgebung, in der der Server auf einem angegebenen Port ausgeführt wird.",
    "Application Programming Interface (API) allows communication between different software applications.": "Application Programming Interface (API), die die Kommunikation zwischen verschiedenen Software-Anwendungen ermöglicht.",
    "Method to authenticate and authorize API requests using a unique API key.": "Methode zur Authentifizierung und Autorisierung von API-Anfragen mit einem eindeutigen API-Schlüssel.",
    "Metadata sent in HTTP requests and responses, such as authorization and content type.": "Metadaten, die in HTTP-Anfragen und -Antworten gesendet werden, wie Autorisierung und Inhaltstyp.",
    "Different HTTP request methods for retrieving, sending, updating, and deleting data.": "Verschiedene HTTP-Anfragemethoden zum Abrufen, Senden, Aktualisieren und Löschen von Daten.",
    "Basic operations for managing data: Create, Read, Update, and Delete.": "Grundoperationen zur Verwaltung von Daten: Erstellen, Lesen, Aktualisieren und Löschen.",
    "Package for loading environment variables from a `.env` file into `process.env`.": "Paket zum Laden von Umgebungsvariablen aus einer `.env`-Datei in `process.env`.",
    "Mechanism that allows or restricts cross-origin HTTP requests between different domains.": "Mechanismus, der HTTP-Anfragen zwischen verschiedenen Domains ermöglicht oder einschränkt.",
    "JSON Web Tokens (JWT) are used for securely transmitting authentication and authorization data.": "JSON Web Tokens (JWT) werden verwendet, um Authentifizierungs- und Autorisierungsdaten sicher zu übertragen.",
    "Protocol for real-time communication between a client and server over a persistent connection.": "Protokoll für die Echtzeitkommunikation zwischen einem Client und Server über eine persistente Verbindung."
  };

  const germanDescription = germanExplanation[explanation] || explanation;

  return (
    <tr >
      <td>
        <a className={highlight ? "highlight" : ""} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.text}
        </a>
      </td>
      <td>{language === "de" ? germanDescription : explanation}</td>
    </tr>
  );
};

function App() {
  const { language, toggleLanguage } = useLanguage(); // Use the language context

  const [methodsData] = useState<IRow[]>(backendLinks); // No fetching needed

  const highlightedLinks = ["Express Middleware", "Express Routers", "Postman", "localhost & PORT", "What is an API?", "HTTP Methods (GET, POST, PATCH, DELETE)"]; // Add more as needed


  return (
    <>
      <h1>Backend Cheat Sheet</h1>
      <button onClick={toggleLanguage}>
        Switch to {language === "en" ? "German" : "English"}
      </button>
      <table>
        <thead>
          <tr>
            <th>Resource</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          {methodsData.map((method, i) => (
            <TableRow props={method} key={i} highlight={highlightedLinks.includes(method.link.text)}
/>
          ))}
        </tbody>
      </table>
    </>
  );
}

// export default App;
export default () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
