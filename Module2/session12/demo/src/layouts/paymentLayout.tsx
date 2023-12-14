import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

interface Props {
  child: JSX.Element;
}

const PaymentLayout = (props: Props) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div>{props.child}</div>
    </div>
  );
};

export default PaymentLayout;
