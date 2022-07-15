import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import styles from "../styles/contact.module.css";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <style jsx>{``}</style>
      <h1 className={styles.headerText}>Contact</h1>
      <div className={styles.container}>
        <form className={styles.form}>
          <label className={styles.formLabel} htmlFor="name">
            Name
          </label>
          <input className={styles.formInput} type="email" id="name" />
          <label className={styles.formLabel} htmlFor="email">
            Email
          </label>
          <input className={styles.formInput} type="text" id="email" />
          <label className={styles.formLabel} htmlFor="message">
            Message
          </label>
          <textarea
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "10rem",
              maxHeight: "10rem",
            }}
            className={styles.formInput}
            id="message"
          ></textarea>
        </form>
      </div>
    </>
  );
};

export default Contact;
