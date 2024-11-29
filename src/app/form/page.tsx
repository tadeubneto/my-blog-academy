"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgnpgao");
  if (state.succeeded) {
    return <p>Obrigado!</p>;
  }
  return (
    
    <form
      action="https://formspree.io/f/xkgnpgao"
      method="POST"
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <div className="mb-4">
        <h2 className="text-center p-5 font-bold">Fale Conosco!</h2>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm
        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-600 text-sm mt-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          class="mt-1 block w-full p-2 border
           border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500
           sm:text-sm"
        >

        </textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          class="text-red-600 text-sm mt-2"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={state.submitting}
          className="py-2 px-4 bg-indigo-600
          text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Enviar{""}
        </button>
      </div>
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
