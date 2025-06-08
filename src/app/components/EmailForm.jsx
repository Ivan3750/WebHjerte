"use client"

import { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    // Валідація email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Будь ласка, введіть коректну електронну адресу.');
      return;
    }

    setLoading(true);

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('Дякуємо за підписку!');
      setEmail('');
    } else {
      setMessage(data.error || 'Щось пішло не так, спробуйте пізніше.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h2>Підпишись на новини</h2>
      <input
        type="email"
        placeholder="Введіть вашу пошту"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ padding: '10px', fontSize: '1rem', width: '100%', marginBottom: '1rem' }}
      />
      <button type="submit" disabled={loading} style={{ padding: '10px', width: '100%', fontSize: '1rem' }}>
        {loading ? 'Завантаження...' : 'Підписатися'}
      </button>
      {message && <p style={{ marginTop: '1rem', color: 'green' }}>{message}</p>}
    </form>
  );
}
