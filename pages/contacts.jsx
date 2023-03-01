import Head from "next/head";
import React from "react";
import LazyLoadImage from "../components/LazyLoadImage";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Liên hệ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="contacts">
        <div className="contacts__wrapper">
          <div className="contacts__heading">
            <div className="contacts__title dark:text-slate-200">Liên hệ tôi:</div>
            <p className="contacts__description dark:text-slate-200">0836730193</p>
          </div>
          <figure className="contacts__image relative pb-[64.3836%]">
            <LazyLoadImage
              photo="https://res.cloudinary.com/tachibao/image/upload/v1665892495/posts/spaeky0gjzmruezc7bmh.jpg"
              blurhash="LKF#|0~B^l9|.TbZaxxbyDI:xWoM"
              alt="alt"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Contacts;