import { useContext } from "react";
import "./LangSelector.css";
import { IntlContext } from "../../context/IntlContext";

const LangSelector = () => {
  const { locale, switchToEnglish, switchToHindi } = useContext(IntlContext);

  const selectLanguage = (e) => {
    const selectedLang = e.target.value;
    if (selectedLang === "en") {
      switchToEnglish();
    } else if (selectedLang === "hi") {
      switchToHindi();
    }
  };

  return (
    <select value={locale} className="lang-selector" onChange={selectLanguage}>
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
    </select>
  );
};

export default LangSelector;
