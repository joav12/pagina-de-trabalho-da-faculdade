'use client';

import { useState } from 'react';

const AskQuestion = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question) return;
    setLoading(true);

    try {
      const response = await fetch('/chatbot/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      setAnswer('Error retrieving answer. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Faça uma pergunta sobre energia renovável</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Digite sua pergunta"
      />
      <button onClick={handleAsk} disabled={loading}>
        {loading ? 'Carregando...' : 'Perguntar'}
      </button>

      {answer && (
        <div>
          <h2>Resposta:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AskQuestion;