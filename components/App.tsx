import React from "react";
import Navbar from "./Navbar";
import AboutUsSection from "./AboutUsSection";
import MerchSection from "./MerchSection";
import CheckoutSection from "./CheckoutSection";
import { IContentfull } from "../types";
import AppContextProvider from "../context/AppContextProvider";

const App: React.FC<IContentfull> = ({ abouUstContent, catalougeContent }) => {
  return (
    <AppContextProvider>
      <Navbar />
      <AboutUsSection
        aboutUsTitle={abouUstContent.aboutUsTitle}
        aboutUsImage={abouUstContent.aboutUsImage}
        aboutUsDescription={abouUstContent.aboutUsDescription}
      />
      <MerchSection merchContent={catalougeContent} />
      <CheckoutSection />
    </AppContextProvider>
  );
};

export default App;
