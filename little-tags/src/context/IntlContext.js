import React from "react";
import { IntlProvider } from "react-intl";

const enTranslation = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  login: "Log In",
  profile: "Profile",
  wishlist: "Wishlist",
  categories: "Categories",
  cart: "Cart",
  whatsNew: "What's New",
  searchText: "Search for products,brands and more",
  dealsOfTheDay: "Deals of the day",
  contactUs: "Contact Us",
  faq: "FAQ",
  termsConditions: "T & C",
  connectWithUs: "Connect With Us",
  usefulLinks: "Useful Links",
  newsletterHeading: "Subscribe for Latest News And Offers",
  newsletterButton: "Register",
  newsletterPlaceholder: "Enter Your Email Here",
  copyright: "2021 Clothify. All Rights Reserved",
  loginFacebook:"Log in using Facebook",
  loginGoogle: "Log in using Google"
};
const hiTranslation = {
  men: "पुस्र्ष",
  women: "महिलाएं",
  kids: "बच्चे",
  login: "लॉग इन करें",
  profile: "प्रोफ़ाइल",
  wishlist: "इच्छा-सूची",
  cart: "कार्ट",
  categories: "श्रेणियाँ",
  searchText: "प्रोडक्ट, ब्रांड और अधिक के लिये सर्च करें",
  whatsNew: "नए प्रोडक्ट",
  dealsOfTheDay: "आज के ऑफर्स",
  contactUs: "संपर्क करें",
  faq: "सामान्य प्रश्न",
  termsConditions: "नियम और शर्तें",
  connectWithUs: "हमसे जुडीये",
  usefulLinks: "उपयोगी लिंक",
  newsletterHeading: "नवीनतम समाचार और ऑफर के लिए सब्सक्राइब करें",
  newsletterButton: "रजिस्टर करें",
  newsletterPlaceholder: "यहा अपना ई मेल भरे",
  copyright: "2021 क्लोथिफाई। सर्वाधिकार सुरक्षित।",
  loginFacebook: "फेसबुक से लॉग इन करें",
  loginGoogle: "गूगल से लॉग इन करें"
};

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
      switchToHindi: this.switchToHindi,
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
