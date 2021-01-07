### Node JS Exercise


#### Problem Statement

We intend to build a NodeJs + Express server. 
The server will have a `books.json` file included in it. The aim of this server is to provide API capabilities to exchange information about the books mentioned in the `books.json` file. It should essentially expose the following functionalities:

  1. It should respond to requests of the following paths

      1. `GET /books`
          - Returns the details of all the available books
          - Sample Response: 
        
            ```json
              [
                {
                  "id": 1,
                  "title": "Express.js Guide",
                  "tags": ["node.js", "express.js"],
                  "url": "http://expressjsguide.com"
                },
                {
                  "id": 2,
                  "title": "Rapid Prototyping with JS",
                  "tags": ["backbone.js", "node.js", "mongodb"],
                  "url": "http://rpjs.co"
                }, 
                {
                  "id": 3,
                  "title": "JavaScript: The Good Parts",
                  "tags": ["javascript"]
                }
              ]
            ```

        2. `GET /books/:id`
            - Returns the details about the book whose ID is mentioned in the path.
            - Sample Response:

            `GET /books/3`
            ```json
              {
                "id": 3,
                "title": "JavaScript: The Good Parts",
                "tags": ["javascript"]
              }
            
            ```
    
        3. `GET /status`
            - Returns the status of the server.
            - Sample Response

            ```json
            {
              "status": "OK",
              "time": "2021-01-07T10:20:12.398Z",
              "name": "Application Server"
            }
            ```


#### Evaluation Parameters:
  - REST API Best Practices should be followed.
  - Server PORT should be provided through environment parameters.
  - Appropriate unit test-cases should be added wherever necessary.
  - Error Handling Capabilities should be in place.
  - REST API request validation should be involved wherever necessary.
  - Show to us that you know - how API development should be done.

#### Steps for Submission 
  - Fork the repository and make changes in your forked repository.
  - When done, push your branch and let us know it’s done by making a pull request.

Good Luck and have fun!