import React from "react";
// import Head from "next/head";

type Form = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [form, setForm] = React.useState<Form>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = React.useState<string>("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        ...form,
      }),
    });

    if (!res.ok) {
      setStatusMessage("Something went wrong, please try again later.");
    } else {
      setStatusMessage("We recieved your message! Thank you!");
    }

    return;
  };

  return (
    <>
      {/* <Head>
        <title>John Sanchez | Contact</title>
      </Head> */}
      <form
        id="contact"
        onSubmit={handleFormSubmit}
        className="rounded-lg shadow-xl flex flex-col w-1/2 m-auto mt-12 mb-8 px-8 py-8 border border-gray-600"
      >
        <h1 className="text-2xl font-bold dark:text-gray-50">Contact me</h1>

        <label
          htmlFor="full-name"
          className="text-gray-500 font-light mt-8 dark:text-gray-50"
        >
          Name
        </label>
        <input
          type="text"
          name="full-name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, fullName: e.target.value })
          }
          required
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-600 font-light text-gray-500"
        />

        <label
          htmlFor="email"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, email: e.target.value })
          }
          required
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-600 font-light text-gray-500"
        />

        <label
          htmlFor="subject"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          Subject<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, subject: e.target.value })
          }
          required
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-600 font-light text-gray-500"
        />

        <label
          htmlFor="message"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setForm({ ...form, message: e.target.value })
          }
          required
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-600 font-light text-gray-500"
        ></textarea>
        <div className="flex flex-row items-center justify-start">
          <button
            type="submit"
            className="px-10 mt-8 py-2 bg-black border border-gray-600 hover:bg-gray-900 text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
          >
            Send
          </button>
          <p className="text-white block">
            {statusMessage != "" ? statusMessage : null}
          </p>
        </div>
      </form>
    </>
  );
};

export default Contact;
