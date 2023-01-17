import React from "react";
import styles from "../styles/Botto.module.css";


function Botto({ data }) {
  const { imgUrl, title, source, readtime, contents } = data;

  return (
    <article className={styles.container}>
      <div className={styles.bottoWrapper}>
        <div className={styles.media}>
            <img src={imgUrl}></img>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <cite className={styles.details}>
            <a>{source}</a>
            <span className={styles.readTime}>{readtime} min</span>
          </cite>
          {contents ? (
            <div className={styles.contents}>
              <p>{contents}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
          
        </div>

      </div>
    </article>
  );
}

export default Botto;