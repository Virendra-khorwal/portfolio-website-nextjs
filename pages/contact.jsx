import Head from "next/head";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  DispatchCursor,
  CURSOR_HIDE,
  CURSOR_COLOR,
  CURSOR_TEXT,
} from "haspr-cursor";

import { toast } from "react-toastify";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_KEY;

const Contact = () => {
    const form = useRef();
    const dispatch = DispatchCursor();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          form.current,
          PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.status)
            if(result.status === 200){
              toast.success("Message sent successfully 📧")
            }
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
            toast.error("Message sending failed, try again ⛔")
            e.target.reset();
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
              className="flex flex-col gap-y-6 bg-lightBlack p-6 rounded-sm w-5/6 max-w-2xl sm:text-sm"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex items-center sm:flex-col sm:gap-2 sm:items-start">
                <label className="w-36 text-white">
                  Name<span className="text-red1">*</span>
                </label>
                <input
                  placeholder="Name"
                  className="p-3 rounded-sm bg-darkBlack focus:outline-yellow1 outline-none text-white w-full sm:p-2"
                  type="text"
                  name="user_name"
                  required
                />
              </div>
              <div className="flex items-center sm:flex-col sm:gap-2 sm:items-start">
                <label className="w-36 text-white">
                  Email<span className="text-red1">*</span>
                </label>
                <input
                  placeholder="Email"
                  className="p-3 rounded-sm bg-darkBlack focus:outline-yellow1 outline-none text-white w-full"
                  type="email"
                  name="user_email"
                  required
                />
              </div>
              <div className="flex items-start sm:flex-col sm:gap-2">
                <label className="w-36 text-white">
                  Message<span className="text-red1">*</span>
                </label>
                <textarea
                  placeholder="message"
                  className="p-3 rounded-sm bg-darkBlack focus:outline-yellow1 outline-none text-white w-full h-72"
                  name="message"
                  required
                />
              </div>

              <input
                className="bg-gradient-to-r from-blue1 to-red rounded-sm py-2 text-white cursor-pointer text-xl hover:from-red1 hover:to-blue1 transition-all ease-in-out mt-4 sm:text-sm"
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