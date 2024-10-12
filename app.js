const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/messages', (req, res) => {
  const mockData = {
    "messages": [
      {
        "id": "msg121",
        "content": "Team meeting at 12 PM today 🙂",
        "priority": "low",
        "timestamp": "2024-10-10T12:00:00Z",
        "read": false
      },
      {
        "id": "msg12",
        "content": "Team meeting at 2 PM today 🙂",
        "priority": "low",
        "timestamp": "2024-10-11T14:00:00Z",
        "read": false
      },
      {
        "id": "msg123",
        "content": "Team meeting at 6 PM today 🙂",
        "priority": "high",
        "timestamp": "2024-10-02T18:00:00Z",
        "read": false
      },
      {
        "id": "msg1234",
        "content": "Team meeting at 4 PM today 🙂",
        "priority": "high",
        "timestamp": "2024-10-02T16:00:00Z",
        "read": false
      }
    ]
  };

  res.json(mockData);
});

app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});