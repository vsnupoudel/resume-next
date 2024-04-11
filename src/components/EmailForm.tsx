"use client";
import React, { useState } from 'react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
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
    <div className="bg-blue-100 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Contact via Email</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span>Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="flex flex-col">
          <span>Message:</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-2 p-2 border border border-gray-300 rounded h-36"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
      {status && <p className="mt-2">{status}</p>}
    </div>
  );
};

export default EmailForm;
