// server.js
const express = require('express');
const openai = require('openai');
const bodyParser = require('body-parser');
const { createCompletion } = require('openai');
const app = express();
const port = process.env.PORT || 5000;

openai.apiKey = process.env.OPENAI_API_KEY; // Securely store API key
app.use(bodyParser.json())
app.post('/openai', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.createCompletion ({
      model: 'gpt-3.5-turbo',
      prompt: prompt,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    res.json({ text: response.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate text' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});