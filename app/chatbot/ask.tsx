import { NextApiRequest, NextApiResponse } from 'next';

const askQuestion = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { question } = req.body;
    
    if (!question) {
      return res.status(400).json({ error: 'No question provided' });
    }

    try {
      const response = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Error connecting to the backend' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

export default askQuestion;