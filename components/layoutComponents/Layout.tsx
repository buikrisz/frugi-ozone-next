import { ServiceType } from "@/types/Layout.types";
import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, serviceType }: PropsWithChildren<ServiceType>) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
