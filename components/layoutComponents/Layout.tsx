import { ServiceType } from "@/types/Layout.types";
import React, { PropsWithChildren } from "react";
import ContactSection from "../globalComponents/sections/Contact";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, contactType }: PropsWithChildren<ServiceType>) => {
  return (
    <main>
      <Header />
      {children}
      <ContactSection contactType={contactType} />
      <Footer />
    </main>
  );
};

export default Layout;
