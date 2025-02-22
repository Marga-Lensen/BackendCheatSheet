import { createContext, useContext, useState, ReactNode } from "react";

// Define types for our context
interface LanguageContextType {
//   language: string;
  language: "en" | "de";
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
//   const [language, setLanguage] = useState<string>("en"); // Default language is English
  const [language, setLanguage] = useState<"en" | "de">("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "de" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
// export const useLanguage = () => {
export const useLanguage = (): LanguageContextType => {

  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
