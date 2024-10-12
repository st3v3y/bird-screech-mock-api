# Message Notifier Mock API

This repository contains a mock API for the Message Notifier Chrome Extension. It serves as a backend simulation for testing and development purposes.

## Chrome Extension

The "Bird Screech" Message Notifier Chrome Extension is a tool that displays unread messages and allows users to mark them as read. It syncs with this mock API to fetch and update message data.

**Extension Repository:** [https://github.com/st3v3y/bird-screech](https://github.com/st3v3y/bird-screech)

## Mock API Functionality

The mock API provides the following endpoints:

- `GET /api/messages`: Retrieves all messages
- `POST /api/messages`: Adds a new message

## Message Structure

Messages follow this JSON structure:

```json
{
  "messages": [
    {
      "id": "msg123",
      "content": "Team meeting at 3 PM today 🙂",
      "priority": "high",
      "category": "Meetings",
      "timestamp": "2024-09-30T15:00:00Z",
      "read": false
    }
  ]
}
```

## Installation and Setup

1. Clone this repository:
   ```
   git clone https://github.com/st3v3y/bird-screech-mock-api
   cd bird-screech-mock-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

The server will start running on `http://localhost:3000`.

## Adding Messages via POST

To add a new message manually:

1. Send a POST request to `http://localhost:3000/api/messages` with a JSON body. For example:

   ```json
   {
     "content": "New project kickoff meeting",
     "priority": "high", // any other value than "high" will be a normal priority
     "category": "Meetings" // any category name you want, or empty
   }
   ```

   You can use tools like cURL, Postman, or any HTTP client to send this request.

2. The server will automatically assign an ID, timestamp and set `read` to `false`.

## Modifying the initial Mock Data

To change the initial set of messages or modify how the mock API behaves:

1. Open `app.js` in your code editor.
2. Locate the `mockData` array or the relevant route handlers.
3. Modify the data or logic as needed.
4. Save the file and restart the server to see the changes.

## Contributing

Contributions to improve the mock API are welcome. Please feel free to submit issues or pull requests.

## License

MIT