import React from "react";
import { store as appStore } from "ice";

export default function Home(props) {
  const [counterState] = appStore.useModel("app");
  for (const item of counterState.routerList) {
    item.component && console.log('读取routes',Object.getOwnPropertyDescriptors(item.component));
  }
  return (
    <>
      <h2>Home Page...</h2>
    </>
  );
}

Home.pageConfig = {
  title: "Home Page",
};
