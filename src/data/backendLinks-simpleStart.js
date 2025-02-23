const backendLinks = [
    {
      link: {
        text: "Express.js",
        url: "https://expressjs.com/"
      },
      explanation: "Fast, minimalist web framework for Node.js to build backend applications and APIs."
    },
    {
      link: {
        text: "Node.js File System (fs)",
        url: "https://nodejs.org/api/fs.html"
      },
      explanation: "Node.js module that allows interacting with the file system, reading, writing, and managing files."
    },
    {
      link: {
        text: "express.json() Middleware",
        url: "https://expressjs.com/en/api.html#express.json"
      },
      explanation: "Built-in Express middleware for parsing incoming JSON request bodies."
    },
    {
      link: {
        text: "MongoDB",
        url: "https://www.mongodb.com/docs/manual/introduction/"
      },
      explanation: "NoSQL document-oriented database that stores data in flexible JSON-like documents."
    },
    {
      link: {
        text: "Express Middleware",
        url: "https://expressjs.com/en/guide/using-middleware.html"
      },
      explanation: "Functions that execute during the request-response cycle, used for logging, authentication, and error handling."
    },
    {
      link: {
        text: "Error Handling Middleware",
        url: "https://expressjs.com/en/guide/error-handling.html"
      },
      explanation: "Special middleware in Express to catch and handle errors globally in the app."
    },
    {
      link: {
        text: "Express Routers",
        url: "https://expressjs.com/en/guide/routing.html"
      },
      explanation: "Router module in Express that allows organizing routes into separate files or modules."
    },
    {
      link: {
        text: "Postman",
        url: "https://learning.postman.com/docs/getting-started/introduction/"
      },
      explanation: "Tool for testing APIs, making HTTP requests, and managing API collections."
    },
    {
      link: {
        text: "response.json() in Express",
        url: "https://expressjs.com/en/api.html#res.json"
      },
      explanation: "Express method to send a JSON response to the client."
    },
    {
      link: {
        text: "REST API Principles",
        url: "https://restfulapi.net/"
      },
      explanation: "Guidelines and best practices for designing RESTful web services."
    },
    {
      link: {
        text: "localhost & PORT",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server"
      },
      explanation: "Local development environment where the server runs on a specified port."
    },
    {
      link: {
        text: "What is an API?",
        url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
      },
      explanation: "Application Programming Interface (API) allows communication between different software applications."
    },
    {
      link: {
        text: "API Key Authentication",
        url: "https://cloud.google.com/docs/authentication/api-keys"
      },
      explanation: "Method to authenticate and authorize API requests using a unique API key."
    },
    {
      link: {
        text: "HTTP Headers",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"
      },
      explanation: "Metadata sent in HTTP requests and responses, such as authorization and content type."
    },
    {
      link: {
        text: "HTTP Methods (GET, POST, PATCH, DELETE)",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"
      },
      explanation: "Different HTTP request methods for retrieving, sending, updating, and deleting data."
    },
    {
      link: {
        text: "CRUD Operations",
        url: "https://www.codecademy.com/articles/what-is-crud"
      },
      explanation: "Basic operations for managing data: Create, Read, Update, and Delete."
    },
    {
      link: {
        text: "dotenv - Environment Variables",
        url: "https://www.npmjs.com/package/dotenv"
      },
      explanation: "Package for loading environment variables from a `.env` file into `process.env`."
    },
    {
      link: {
        text: "CORS (Cross-Origin Resource Sharing)",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
      },
      explanation: "Mechanism that allows or restricts cross-origin HTTP requests between different domains."
    },
    {
      link: {
        text: "JWT Authentication",
        url: "https://jwt.io/introduction/"
      },
      explanation: "JSON Web Tokens (JWT) are used for securely transmitting authentication and authorization data."
    },
    {
      link: {
        text: "WebSockets in Node.js",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
      },
      explanation: "Protocol for real-time communication between a client and server over a persistent connection."
    }
  ];
  
  export default backendLinks;
  

  /* const germanExplanation = {
    "Fast, minimalist web framework for Node.js to build backend applications and APIs.":
      "Schnelles, minimalistisches Web-Framework für Node.js zum Erstellen von Backend-Anwendungen und APIs.",
    "Node.js module that allows interacting with the file system, reading, writing, and managing files.":
      "Node.js-Modul, das die Interaktion mit dem Dateisystem ermöglicht, zum Lesen, Schreiben und Verwalten von Dateien.",
    "Built-in Express middleware for parsing incoming JSON request bodies.":
      "Integrierte Express-Middleware zum Parsen eingehender JSON-Anforderungsdaten.",
    "NoSQL document-oriented database that stores data in flexible JSON-like documents.":
      "NoSQL-Datenbank, die Daten in flexiblen JSON-ähnlichen Dokumenten speichert.",
    "Functions that execute during the request-response cycle, used for logging, authentication, and error handling.":
      "Funktionen, die während des Anforderungs-Antwort-Zyklus ausgeführt werden und für Protokollierung, Authentifizierung und Fehlerbehandlung verwendet werden.",
    "Special middleware in Express to catch and handle errors globally in the app.":
      "Spezielle Middleware in Express, um Fehler global in der App zu erfassen und zu behandeln.",
    "Router module in Express that allows organizing routes into separate files or modules.":
      "Router-Modul in Express, das es ermöglicht, Routen in separate Dateien oder Module zu organisieren.",
    "Tool for testing APIs, making HTTP requests, and managing API collections.":
      "Tool zum Testen von APIs, Senden von HTTP-Anfragen und Verwalten von API-Sammlungen.",
    "Express method to send a JSON response to the client.":
      "Express-Methode zum Senden einer JSON-Antwort an den Client.",
    "Guidelines and best practices for designing RESTful web services.":
      "Richtlinien und Best Practices für das Entwerfen von RESTful-Webdiensten.",
    "Local development environment where the server runs on a specified port.":
      "Lokale Entwicklungsumgebung, in der der Server auf einem angegebenen Port ausgeführt wird.",
    "Application Programming Interface (API) allows communication between different software applications.":
      "Application Programming Interface (API), die die Kommunikation zwischen verschiedenen Software-Anwendungen ermöglicht.",
    "Method to authenticate and authorize API requests using a unique API key.":
      "Methode zur Authentifizierung und Autorisierung von API-Anfragen mit einem eindeutigen API-Schlüssel.",
    "Metadata sent in HTTP requests and responses, such as authorization and content type.":
      "Metadaten, die in HTTP-Anfragen und -Antworten gesendet werden, wie Autorisierung und Inhaltstyp.",
    "Different HTTP request methods for retrieving, sending, updating, and deleting data.":
      "Verschiedene HTTP-Anfragemethoden zum Abrufen, Senden, Aktualisieren und Löschen von Daten.",
    "Basic operations for managing data: Create, Read, Update, and Delete.":
      "Grundoperationen zur Verwaltung von Daten: Erstellen, Lesen, Aktualisieren und Löschen.",
    "Package for loading environment variables from a `.env` file into `process.env`.":
      "Paket zum Laden von Umgebungsvariablen aus einer `.env`-Datei in `process.env`.",
    "Mechanism that allows or restricts cross-origin HTTP requests between different domains.":
      "Mechanismus, der HTTP-Anfragen zwischen verschiedenen Domains ermöglicht oder einschränkt.",
    "JSON Web Tokens (JWT) are used for securely transmitting authentication and authorization data.":
      "JSON Web Tokens (JWT) werden verwendet, um Authentifizierungs- und Autorisierungsdaten sicher zu übertragen.",
    "Protocol for real-time communication between a client and server over a persistent connection.":
      "Protokoll für die Echtzeitkommunikation zwischen einem Client und Server über eine persistente Verbindung.",
  };

  const germanDescription = germanExplanation[explanation] || explanation; */
