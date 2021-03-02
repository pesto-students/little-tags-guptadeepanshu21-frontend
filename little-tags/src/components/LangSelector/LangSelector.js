import { useContext } from "react";
import "./LangSelector.css";
import { IntlContext } from "../../context/IntlContext";

const LangSelector = () => {
  const { locale, switchToEnglish, switchToHindi } = useContext(
    IntlContext
  );

  const selectLanguage = (e) => {
    const selectedLang = e.target.value;
    if (selectedLang === "English") {
      switchToEnglish();
    } else if (selectedLang === "हिन्दी") {
      switchToHindi();
    }
  };

  const value = locale === "en" ? "English" : "हिन्दी";

  return (
    <select value={value} className="lang-selector" onChange={selectLanguage}>
      <option>English</option>
      <option>हिन्दी</option>
    </select>
  );
};

export default LangSelector;
