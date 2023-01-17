import React from "react";
import styles from "../styles/Card.module.css";

function Card({ data }) {
  const { imgUrl, title, source, readtime, excerpt } = data;

  return (
    <article className={styles.container}>
      <div className={styles.cardWrapper}>
        <div className={styles.media}>
          <a>
            <img src={imgUrl}></img>
            <span className={styles.viewOriginal}>
              <span className={styles.viewOriginalText}>원본 보기</span>
            </span>
          </a>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <cite className={styles.details}>
            <a>{source}</a>
            <span className={styles.readTime}>{readtime} min</span>
          </cite>
          {excerpt ? (
            <div className={styles.excerpt}>
              <p>{excerpt}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <button>저장</button>
      </div>
    </article>
  );
}

export default Card;
