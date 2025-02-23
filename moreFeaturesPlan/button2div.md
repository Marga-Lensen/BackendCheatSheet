```javascript
<button 
        onClick={toggleLanguage}
        style={{
/*           background: language === "en" 
          ? "linear-gradient(black, red, gold)"  // German flag colors
          : "linear-gradient(navy, white, red)", // Example English colors (UK-like)
          color: language === "en" 
          ? "linear-gradient(black, red, gold)"  // German flag colors
          : "linear-gradient(navy, white, red)", // Example English colors (UK-like) */
          backgroundImage: `url(${language === "en" ? germanFlag : englishFlag})`,
          // backgroundSize: "cover",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        Switch to {language === "en" ? "German" : "English"}
      </button>
```