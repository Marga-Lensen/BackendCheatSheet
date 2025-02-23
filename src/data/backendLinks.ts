/* type BackendLink = {
  link: {
    text: string;
    url: {
      en: string;
      de: string;
    };
  };
  explanation: {
    en: string;
    de: string;
  };
};

export const backendLinks: BackendLink[] = [ */
   
export const backendLinks = [
  {
    link: {
      text: "Express.js",
      url: { en: "https://expressjs.com/", de: "https://expressjs.com/de/" }
    },
    explanation: {
      en: "Fast, minimalist web framework for Node.js to build backend applications and APIs.",
      de: "Schnelles, minimalistisches Web-Framework für Node.js zur Erstellung von Backend-Anwendungen und APIs."
    }
  },

    {
      link: {
        text: "Express Middleware",
        url: { en: "https://expressjs.com/en/guide/using-middleware.html", de: "https://expressjs.com/de/guide/using-middleware.html" }
      },
      explanation: {
        en: "Middleware functions are functions that have access to the request and response objects in Express.",
        de: "Middleware-Funktionen haben Zugriff auf die Request- und Response-Objekte in Express."
      }
    },
    {
      link: {
        text: "express.json() Middleware",
        url: { en: "https://expressjs.com/en/api.html#express.json", de: "https://expressjs.com/de/api.html#express.json" }
      },
      explanation: {
        en: "Built-in Express middleware for parsing incoming JSON request bodies.",
        de: "Eingebaute Express-Middleware zum Parsen eingehender JSON-Anfragen."
      }
    },
    {
      link: {
        text: "CORS in Express",
        url: { en: "https://expressjs.com/en/resources/middleware/cors.html", de: "https://expressjs.com/de/resources/middleware/cors.html" }
      },
      explanation: {
        en: "Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express applications.",
        de: "Middleware zur Aktivierung von Cross-Origin Resource Sharing (CORS) in Express-Anwendungen."
      }
    },
    {
      link: {
        text: "Express Routers",
        url: { en: "https://expressjs.com/en/guide/routing.html", de: "https://expressjs.com/de/guide/routing.html" }
      },
      explanation: {
        en: "Express Routers allow you to define modular routes for better project organization.",
        de: "Express Router ermöglichen die Definition modularer Routen für eine bessere Projektorganisation."
      }
    },
    {
      link: {
        text: "Postman",
        url: { en: "https://www.postman.com/", de: "https://www.postman.com/" }
      },
      explanation: {
        en: "Popular API testing tool for sending requests and inspecting responses.",
        de: "Beliebtes API-Testtool zum Senden von Anfragen und Überprüfen von Antworten."
      }
    },
    {
      link: {
        text: "localhost & PORT",
        url: { en: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server", de: "https://developer.mozilla.org/de/docs/Learn/Common_questions/What_is_a_web_server" }
      },
      explanation: {
        en: "Localhost refers to the local computer running the server, typically on port 3000 or 5000.",
        de: "Localhost bezieht sich auf den lokalen Computer, der den Server ausführt, typischerweise auf Port 3000 oder 5000."
      }
    },

    {
      link: {
        text: "HTTP Methods (GET, POST, PATCH, DELETE)",
        url: { en: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods", de: "https://developer.mozilla.org/de/docs/Web/HTTP/Methods" }
      },
      explanation: {
        en: "HTTP methods define the type of action performed in an API request.",
        de: "HTTP-Methoden definieren die Art der Aktion, die in einer API-Anfrage ausgeführt wird."
      }
    },

    {
      link: {
        text: "HTTP Status Codes",
        url: { en: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status", de: "https://developer.mozilla.org/de/docs/Web/HTTP/Status" }
      },
      explanation: {
        en: "List of HTTP response status codes with explanations.",
        de: "Liste der HTTP-Antwortstatuscodes mit Erklärungen."
      }
    },
    {
      link: {
        text: "JSON Web Tokens (JWT)",
        url: { en: "https://jwt.io/", de: "https://jwt.io/" }
      },
      explanation: {
        en: "Standard for securely transmitting information as JSON objects.",
        de: "Standard zur sicheren Übertragung von Informationen als JSON-Objekte."
      }
    },
   
  
  {
    link: {
      text: "Node.js File System (fs)",
      url: { en: "https://nodejs.org/api/fs.html", de: "https://nodejs.org/api/fs.html" }
    },
    explanation: {
      en: "Node.js module that allows interacting with the file system, reading, writing, and managing files.",
      de: "Node.js-Modul, das die Interaktion mit dem Dateisystem ermöglicht, einschließlich Lesen, Schreiben und Verwalten von Dateien."
    }
  },
 
  
  {
    link: {
      text: "What is an API?",
      url: { en: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction", de: "https://developer.mozilla.org/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" }
    },
    explanation: {
      en: "APIs allow communication between different software applications over the web.",
      de: "APIs ermöglichen die Kommunikation zwischen verschiedenen Softwareanwendungen über das Web."
    }
  },
  {
    link: {
      text: "Axios",
      url: { en: "https://axios-http.com/", de: "https://axios-http.com/de" }
    },
    explanation: {
      en: "Promise-based HTTP client for making requests in Node.js and browsers.",
      de: "Versprechensbasierter HTTP-Client für Anfragen in Node.js und Browsern."
    }
  },
  {
    link: {
      text: "Fetch API",
      url: { en: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API", de: "https://developer.mozilla.org/de/docs/Web/API/Fetch_API" }
    },
    explanation: {
      en: "Modern way to make HTTP requests in JavaScript.",
      de: "Moderne Methode zum Senden von HTTP-Anfragen in JavaScript."
    }
  },
  {
    link: {
      text: "REST API Design Guide",
      url: { en: "https://restfulapi.net/", de: "https://restfulapi.net/" }
    },
    explanation: {
      en: "Guidelines for designing RESTful APIs with best practices and principles.",
      de: "Richtlinien für das Design von RESTful-APIs mit bewährten Methoden und Prinzipien."
    }
  },
  
  
  {
    link: {
      text: "MongoDB",
      url: { en: "https://www.mongodb.com/", de: "https://www.mongodb.com/de" }
    },
    explanation: {
      en: "NoSQL database for scalable and flexible data storage.",
      de: "NoSQL-Datenbank für skalierbare und flexible Datenspeicherung."
    }
  },
  {
    link: {
      text: "Mongoose.js",
      url: { en: "https://mongoosejs.com/", de: "https://mongoosejs.com/" }
    },
    explanation: {
      en: "Elegant MongoDB object modeling for Node.js.",
      de: "Elegantes MongoDB-Objektmodell für Node.js."
    }
  },
  {
    link: {
      text: "bcrypt.js",
      url: { en: "https://www.npmjs.com/package/bcryptjs", de: "https://www.npmjs.com/package/bcryptjs" }
    },
    explanation: {
      en: "Library for hashing passwords using bcrypt in JavaScript.",
      de: "Bibliothek zum Hashen von Passwörtern mit bcrypt in JavaScript."
    }
  },
  {
    link: {
      text: "dotenv",
      url: { en: "https://www.npmjs.com/package/dotenv", de: "https://www.npmjs.com/package/dotenv" }
    },
    explanation: {
      en: "Module that loads environment variables from a `.env` file.",
      de: "Modul zum Laden von Umgebungsvariablen aus einer `.env`-Datei."
    }
  },
  {
    link: {
      text: "jsonwebtoken (JWT Library)",
      url: { en: "https://www.npmjs.com/package/jsonwebtoken", de: "https://www.npmjs.com/package/jsonwebtoken" }
    },
    explanation: {
      en: "Library for creating and verifying JSON Web Tokens (JWT).",
      de: "Bibliothek zum Erstellen und Überprüfen von JSON Web Tokens (JWT)."
    }
  },
 
  {
    link: {
      text: "WebSockets",
      url: { en: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", de: "https://developer.mozilla.org/de/docs/Web/API/WebSockets_API" }
    },
    explanation: {
      en: "API for real-time, bidirectional communication over the web.",
      de: "API für Echtzeit-Kommunikation über das Web in beide Richtungen."
    }
  },
  {
    link: {
      text: "Redis",
      url: { en: "https://redis.io/", de: "https://redis.io/de" }
    },
    explanation: {
      en: "In-memory data store for caching and real-time applications.",
      de: "In-Memory-Datenspeicher für Caching und Echtzeitanwendungen."
    }
  },
  {
    link: {
      text: "GraphQL",
      url: { en: "https://graphql.org/", de: "https://graphql.org/" }
    },
    explanation: {
      en: "Query language for APIs that enables fetching specific data efficiently.",
      de: "Abfragesprache für APIs zur effizienten Datenabfrage."
    }
  },
  {
    link: {
      text: "Socket.IO",
      url: { en: "https://socket.io/", de: "https://socket.io/" }
    },
    explanation: {
      en: "Real-time communication library for WebSockets and beyond.",
      de: "Bibliothek für Echtzeitkommunikation mit WebSockets und mehr."
    }
  },
  {
    link: {
      text: "Swagger (OpenAPI)",
      url: { en: "https://swagger.io/", de: "https://swagger.io/" }
    },
    explanation: {
      en: "Tool for API documentation and testing based on OpenAPI specifications.",
      de: "Tool zur API-Dokumentation und -Tests basierend auf OpenAPI-Spezifikationen."
    }
  }
];

export default backendLinks;
