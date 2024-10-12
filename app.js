const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let mockData = [
  {
    "id": "msg1",
    "content": "Team meeting at 4 PM today 🙂",
    "priority": "high",
    "timestamp": "2024-10-02T16:00:00Z",
    "read": false
  }
];

app.get('/api/messages', (req, res) => {
  const data = { "messages": mockData };
  res.json(data);
});

app.post('/api/messages', (req, res) => {
  if (!req || !req.body) {
    throw new Error("Invalid request body", req);
  }
  
  const newMessage = {
    id: `msg${mockData.length + 1}`,
    content: req.body.content,
    priority: req.body.priority,
    timestamp: new Date().toISOString(),
    read: false
  };

  mockData.push(newMessage);
  res.status(201).json(newMessage);
});

app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});