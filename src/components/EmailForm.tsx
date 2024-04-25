"use client";
import React, { useState } from 'react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, message }),
    });

    if (response.ok) {
      setStatus('Email sent successfully!');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Failed to send email.');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
      <h2 className="text-gray-900 dark:text-white text-xl font-semibold mb-4">
        Contact via Email
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="text-gray-600 dark:text-gray-300">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 p-2 border border-gray-300 rounded text-black"
          />
        </label>
        
        { /* Set subject */}

        <label className="flex flex-col">
          <span className="text-gray-600 dark:text-gray-300">Subject:</span>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="mt-2 p-2 border border-gray-300 rounded text-black"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-600 dark:text-gray-300">Message:</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-2 p-2 border border-gray-300 rounded h-36 text-black"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
      {status && (
        <p className="text-gray-600 dark:text-gray-300">{status}</p>
      )}
    </div>
  );
};

export default EmailForm;
