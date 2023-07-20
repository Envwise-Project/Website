---
sidebar_label: 'Code Structure'
sidebar_position: 1
---


# Server Code Structure

```

server/
├── src/
│   ├── controllers/
│   │   ├── property/
│   │   │   ├── createPropertyController.js
│   │   │   ├── getAllPropertiesController.js
│   │   │   └── getFilteredPropertiesController.js
│   │   │
│   │   ├── transaction/
│   │   │   ├── createTransaction.js
│   │   │   └── getAllTransactions.js
│   │   │
│   │   └── user/
│   │       ├── createUserController.js
│   │       ├── getAllUsersController.js
│   │       ├── getPropertiesUserController.js
│   │       └── updateUserController.js
│   │
│   ├── handlers/
│   │   ├── property/
│   │   │   ├── createPropertyHandler.js
│   │   │   ├── getAllPropertiesHandler.js
│   │   │   └── getFilteredPropertiesHandler.js
│   │   │
│   │   ├── transaction/
│   │   │   ├── createTransactionHandler.js
│   │   │   └── getAllTransactionsHandler.js
│   │   │
│   │   └── user/
│   │       ├── createUserHandler.js
│   │       ├── getAllUsersHandler.js
│   │       ├── getPropertiesUserHandler.js
│   │       └── updateUserHandler.js
│   │
│   ├── models/
│   │   ├── Feature.js
│   │   ├── Financial.js
│   │   ├── Owner.js
│   │   ├── Property.js
│   │   ├── Transaction.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── index.js
│   │   ├── propertyRoutes.js
│   │   ├── transactionRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── app.js
│   └── db.js
│
├── index.js
└── package.json

```


1. `src/controllers/`: This folder contains the controllers responsible for interacting with the database and handling the business logic for different entities in the application. Each controller is responsible for handling specific operations related to the entity it represents, such as creating, reading, updating, or deleting data from the database.

2. `src/handlers/`: The handlers folder contains files that handle the responses sent back to clients when they make requests to the server. The handlers are responsible for formatting the data and sending appropriate responses, such as success responses, error responses, or custom responses based on the application's needs.

3. `src/models/`: In the models folder, you define the data models for different entities in the application. Each model represents a data structure that maps to a specific table or collection in the database. Models are used to define the schema and validation rules for the data, making it easier to interact with the database and maintain data consistency.

4. `src/routes/`: This folder holds the route files that define the API endpoints for the application. Each route file corresponds to a specific entity and contains the necessary route handlers to process incoming requests. The route handlers in these files call the appropriate controller functions to perform the requested actions.

5. `src/app.js`: The app.js file serves as the entry point of the application. It's where I set up the express application, configure middleware, and register the routes to be used by the server.

6. `src/db.js`: The db.js file is used to set up and establish the connection to the database. It also include configurations or helper functions related to the database operations.


