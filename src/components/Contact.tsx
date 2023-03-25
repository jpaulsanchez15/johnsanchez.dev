import { useState } from "react";

type Form = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [form, setForm] = useState<Form>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, isLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isLoading(true);
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
      isLoading(false);
    } else {
      setStatusMessage("We recieved your message! Thank you!");
      isLoading(false);
      setForm({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    }

    return;
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="rounded-lg shadow-xl flex flex-col w-1/1 ml-3 mr-3 md:w-1/2 md:m-auto md:mt-12 md:mb-8 mt-12 mb-8 px-8 py-8 border border-gray-600"
      >
        <h1 className="text-2xl font-bold text-slate-100 ">Contact me</h1>

        <label htmlFor="full-name" className="text-gray-50 font-light mt-8 ">
          Name
        </label>
        <input
          type="text"
          name="full-name"
          value={form.fullName}
          autoComplete="given-name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, fullName: e.target.value })
          }
          required
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-600  text-gray-50"
        />

        <label htmlFor="email" className="text-gray-50 font-light mt-4 ">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          autoComplete="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, email: e.target.value })
          }
          required
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-600  text-gray-50"
        />

        <label htmlFor="subject" className="text-gray-50 font-light mt-4 ">
          Subject
        </label>
        <input
          type="text"
          value={form.subject}
          name="subject"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, subject: e.target.value })
          }
          required
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-600  text-gray-50"
        />

        <label htmlFor="message" className="text-gray-50 font-light mt-4 ">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setForm({ ...form, message: e.target.value })
          }
          required
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-600 text-white"
        ></textarea>
        <div className="flex flex-row items-center justify-start">
          <button
            type="submit"
            disabled={loading}
            className="px-10 mt-8 py-2 bg-black border border-gray-600 hover:bg-gray-900 text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
          >
            Send
          </button>
          <div className="flex flex-row">
            <p className="text-white ml-2 mt-2 font-semibold w-full">
              {statusMessage != "" ? statusMessage : null}
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
