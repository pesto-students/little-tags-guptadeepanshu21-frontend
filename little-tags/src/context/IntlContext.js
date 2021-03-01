import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import hi from "react-intl/locale-data/hi";

const enTranslation = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  categories: "Categories",
  dealsOfTheDay: "Deals of the day",
  contactUs: "Contact Us",
  faq: "FAQ",
  termsConditions: "T & C",
  keepInTouch: "Keep In Touch"
};
const hiTranslation = {
  men: "पुस्र्ष",
  women: "महिलाएं",
  kids: "बच्चे",
  dealsOfTheDay:"आज के ऑफर्स",
  contactUs: "संपर्क करें",
  faq: "सामान्य प्रश्न",
  termsConditions: "नियम और शर्तें",
  keepInTouch: "संपर्क में रहे"
};

addLocaleData([...en, ...hi]);

const Context = React.createContext();

class IntlContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.switchToEnglish = () =>
      this.setState({ locale: "en", messages: enTranslation });

    this.switchToHindi = () =>
      this.setState({ locale: "hi", messages: hiTranslation });

    this.state = {
      locale: "en",
      messages: enTranslation,
      switchToEnglish: this.switchToEnglish,
      switchToHindi: this.switchToHindi
    };
  }

  render() {
    const { children } = this.props;
    const { locale, messages } = this.state;
    return (
      <Context.Provider value={this.state}>
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages}
          defaultLocale="en"
        >
          {children}
        </IntlProvider>
      </Context.Provider>
    );
  }
}

export { IntlContextProvider, Context as IntlContext };
