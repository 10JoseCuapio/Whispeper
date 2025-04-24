import { useState } from 'react';

export default function Bot() {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      await fetch('http://localhost:3000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message }),
      });

      setMessage('');
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe tu mensaje..."
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
}
