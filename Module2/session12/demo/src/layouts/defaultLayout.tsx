import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

interface Props {
  child: JSX.Element;
}

const DefaultLayout = (props: Props) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div>{props.child}</div>
      <aside>
        <Sidebar/>
      </aside>
      
    </div>
  );
};

export default DefaultLayout;
