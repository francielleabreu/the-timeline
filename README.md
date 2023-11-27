# The Timeline

## Back-end

This Express application provides endpoints to manage messages stored in a MongoDB Atlas database. It exposes GET and POST endpoints for managing messages.

### Installation and Setup

1. Clone this repository.

2. Navigate to the back-end folder.

3. Create a .env file with the following content:

`MONGODB_URI=mongodb+srv://franabreu2:<password>@cluster0.bprf5qi.mongodb.net/`

4. Install dependencies:

`npm install`

5. Start the server:

`npm run start`

The server will run on `http://localhost:3000`.

### Endpoints

#### GET `/api/messages`

Retrieves all messages stored in the database.

Response format:

```JSON
[
    {
        "_id": "6564698d816b92c695cc380b",
        "message": "test 2",
        "timestamp": "2023-11-27T10:03:57.033Z",
        "__v": 0
    },
    {
        "_id": "65646911816b92c695cc3803",
        "message": "test",
        "timestamp": "2023-11-27T10:01:53.271Z",
        "__v": 0
    }
]

```

#### POST `/api/messages`

Adds a new message to the database.

Request body format:

```JSON
{
    "message": "Your message content here"
}

```

Response format:

```JSON
{
    "message": "Message saved successfully"
}
```

## Frontend

The front-end folder contains the frontend of this project. It's a simple HTML and JavaScript application that communicates with the backend to display and add messages.

To run the frontend:

Open the front-end folder.
Open the index.html file in a browser.
The frontend application will display the stored messages and allow you to add new ones via an input field.
