import React from "react";
import styles from "../styles/Bottom.module.css";
import Botto from "./Botto";
import dumy from "../data/item.js";

function Bottom  () {
  console.log(dumy);
  return (
    <article>
      {dumy.map((item, idx) => {
        // console.log(data);
        return <Botto key={idx} data={item} />;
      })}
    </article>
  );
}

export default Bottom;
