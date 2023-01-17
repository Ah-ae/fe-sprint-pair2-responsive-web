import React from "react";
import styles from "../styles/Top.module.css";
import Card from "./Card";
import dummy from "../data/data.js";

function Top() {
  console.log(dummy);
  return (
    <section>
      {dummy.map((data, idx) => {
        // console.log(data);
        return <Card key={idx} data={data} />;
      })}
    </section>
  );
}

export default Top;
