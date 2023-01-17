import React from "react";
import styles from "../styles/Bottom.module.css";
import Botto from "./Botto";
import dummy from "../data/item.js";

function Bottom  () {
  console.log(dummy);
  return (
    <article>
      {dummy.map((item, idx) => {
        // console.log(data);
        return <Botto key={idx} data={item} />;
      })}
    </article>
  );
}

export default Bottom;
