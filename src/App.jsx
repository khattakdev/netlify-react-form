import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <form
        name="contact"
        action="/contact_sent"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="grid grid-cols-2 gap-10">
          <label className="block my-4 relative z-10">
            <span className=" block text-xl my-2 text-primary font-bold capitalize">
              Your name
            </span>
            <input
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 text-xl w-full rounded-md shadow-sm border-zinc border hover:shadow-md transition-all"
            />
          </label>

          <label className="block my-4 relative z-10">
            <span className=" block text-xl my-2 text-primary font-bold capitalize">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 text-xl w-full rounded-md shadow-sm border-zinc border hover:shadow-md transition-all"
            />
          </label>
        </div>

        <label className="block my-4 relative z-10">
          <span className=" block text-xl my-2 text-primary font-bold capitalize">
            Your subject
          </span>
          <input
            type="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="p-2 text-xl w-full rounded-md shadow-sm border-zinc border hover:shadow-md transition-all"
          />
        </label>

        <label className="block my-2">
          <span className="block text-xl my-2 text-primary font-bold">
            Message
          </span>
          <textarea
            value={message}
            name="message"
            placeholder="What's on your mind..."
            onChange={(e) => setMessage(e.target.value)}
            className="r w-[100%] text-xl p-2 resize-none min-h-[200px] rounded-md shadow-sm border-zinc border hover:shadow-md transition-all"
          ></textarea>
        </label>

        <button
          disabled={!name || !email || !subject || !message}
          className={`bg-primary text-white p-4 text-xl inline-block my-6
              ${
                !name || !email || !subject || !message
                  ? "bg-zinc cursor-not-allowed"
                  : ""
              }
              `}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
