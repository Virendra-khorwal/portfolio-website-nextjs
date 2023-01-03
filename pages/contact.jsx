import Head from "next/head";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  DispatchCursor,
  CURSOR_HIDE,
  CURSOR_COLOR,
  CURSOR_TEXT,
} from "haspr-cursor";

const Contact = () => {
    const form = useRef();
    const dispatch = DispatchCursor();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
      <>
        <Head>
          <title>Contact me | Virendra Khorwal</title>
        </Head>
        <main>
          <section
            className="flex flex-col items-center h-screen font-roboto text-xl"
            onMouseEnter={() => CURSOR_COLOR("RED")}
            onMouseLeave={CURSOR_HIDE}
          >
            <h1 className="mt-10 mb-10 text-3xl bg-clip-text text-transparent  bg-gradient-to-r from-blue1 to-red font-roboto ">
              Contact Me
            </h1>
            <form
              className="flex flex-col gap-y-6 bg-lightBlack p-6 rounded-sm w-5/6 max-w-2xl"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex items-center">
                <label className="w-36 text-white">Name</label>
                <input
                  placeholder="Name"
                  className="p-3 rounded-sm bg-darkBlack focus:outline-yellow1 outline-none text-white w-full"
                  type="text"
                  name="user_name"
                />
              </div>
              <div className="flex items-center">
                <label className="w-36 text-white">Email</label>
                <input
                  placeholder="Email"
                  className="p-3 rounded-sm bg-darkBlack focus:outline-yellow1 outline-none text-white w-full"
                  type="email"
                  name="user_email"
                />
              </div>
              <div className="flex items-start">
                <label className="w-36 text-white">Message</label>
                <textarea
                  placeholder="message"
                  className="p-3 rounded-sm bg-darkBlack focus:outline-yellow1 outline-none text-white w-full h-72"
                  name="message"
                />
              </div>

              <input
                className="bg-gradient-to-r from-blue1 to-red rounded-sm py-2 text-white cursor-pointer text-xl hover:from-red1 hover:to-blue1 transition-all ease-in-out mt-4"
                type="submit"
                value="Send"
              />
            </form>
          </section>
        </main>
      </>
    );
}

export default Contact;