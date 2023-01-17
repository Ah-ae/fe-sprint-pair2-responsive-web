import React from "react";
import styles from "../styles/Main.module.css";
import Top from "./Top";
// import Bottom from "./Bottom";

function Main() {
  return (
    <main>
      <h1>최고의 웹 컨텐츠 검색</h1>
      <h2>오늘의 필독 자료</h2>
      <Top />
      <hr />
      {/* <Bottom /> */}
    </main>
  );
}

export default Main;
