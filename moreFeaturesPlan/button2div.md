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
```css

button {
  /* padding: 29px; */
  padding-top: 25px;
  padding-bottom: 25px;
  /* background: linear-gradient(black, red, gold); */
  border: none;
  /* border-radius: 4px; */
  color: #1f0c2e;
  font-weight: bold;
}
button:hover {
  color: aliceblue;
  cursor: pointer;
}
```