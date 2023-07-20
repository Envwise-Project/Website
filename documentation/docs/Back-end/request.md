---
sidebar_label: "End-Points"
sidebar_position: 2
---

# End-Points

## Property Endpoints

### Create a property

```json

Request Body:
{
  "ownerData": {
    "Firstname": "John",
    "Surname": "Doe",
    "Address": "123 Main St",
    "City": "New York",
    "State": "NY",
    "Country": "ARG",
    "Postal_Code": "12345",
    "Mail": "john@example.com",
    "Phone_number": "123-456-7890",
    "Code_area": "54",
    "Passport_ID": "AB123456",
    "Date_of_birth": "1990-01-01"
  },
  "featureData": {
    "Type": "Apartment",
    "Country": "USA",
    "City": "New York",
    "Address": "456 Elm St",
    "State": "NY",
    "Postal_Code": "67890",
    "Description": "Spacious apartment with great views",
    "Square_foot": 1200,
    "Amenities": "Swimming pool, gym, parking",
    "Rooms": 2,
    "Occupancy_Status": "Vacant",
    "Link_Image": ["http://example.com/image.jpg"],
    "Link_Document": "http://example.com/document.pdf",
    "Current_Emission": 120,
    "Expected_Emission_Level": 100,
    "More": "Additional information"
  },
  "financialData": {
    "Investment_type": "Passive Income Only",
    "Market_value_of_the_property": 500000,
    "Percent_of_property_tokenized": 100,
    "Rental_yield": 6.5,
    "Number_of_tokens_available": 1000,
    "Passive_Income_per_token": 100,
    "Token_Price": 500,
    "Mortgage": "30000",
    "Monthly_capital_repayment_amount": 2000,
    "Capital_payment_duration": 10
  }
}

Response:
{
  "ID_Property": 1,
  "ID_owner": 1,
  "ID_Financials": 1,
  "ID_Features": 1,
  "savedBy": null,
  "publishedBy": null,
  "investedBy": null
}
```

The provided JSON data represents an example of a property registration request to the server. This request is sent to the endpoint `POST /properties` to create a new property entry in the system. The request body contains three main sections: `ownerData`, `featureData`, and `financialData`, each holding specific details related to the property.

The `ownerData` section includes information about the property owner, such as their first name, surname, address, contact details, passport ID, and date of birth.

The `featureData` section contains various features of the property, including its type (e.g., apartment), location details (country, city, address, etc.), a description, square footage, amenities, and occupancy status.

The `financialData` section provides financial information about the property, such as investment type (e.g., Passive Income Only), market value, tokenization percentage, rental yield, available tokens, passive income per token, token price, mortgage details, and monthly capital repayment amount.

Upon successful registration of the property, the server responds with a JSON object containing the IDs assigned to the newly created property, owner, features, and financials. The fields `savedBy`, `publishedBy`, and `investedBy` are currently set to `null`, indicating that these fields have not been assigned values yet.

---

### Get all properties

**Example Response for GET /properties**

```json

[{
"ID_Property": 1,
"ID_owner": 1,
"ID_Financials": 1,
"ID_Features": 1,
"savedBy": null,
"publishedBy": null,
"investedBy": null,

"Owner": {
"ID_owner": 1,
"Firstname": "John",
"Surname": "Doe",
"Address": "123 Main St",
"City": "New York",
"State": "NY",
"Country": "USA",
"Postal_Code": "12345",
"Mail": "john@example.com",
"Phone_number": "123-456-7890",
"Code_area": "54",
"Passport_ID": "AB123456",
"Date_of_birth": "1990-01-01T00:00:00.000Z"
},

"Financial": {
"ID_Financial": 1,
"Market_value_of_the_property": "500000.00",
"Investment_type": "Passive Income Only",
"Percent_of_property_tokenized": "100.00",
"Rental_yield": "6.50",
"Number_of_tokens_available": 1000,
"Passive_Income_per_token": "100.00",
"Token_Price": "500.00",
"Monthly_capital_repayment_amount": "2000.00",
"Capital_payment_duration": "10.00",
"Mortgage": "30000.00"
},

"Feature": {
"ID_Feature": 1,
"Type": "Apartment",
"Country": "ARG",
"City": "New York",
"Address": "456 Elm St",
"State": "NY",
"Postal_Code": "67890",
"Description": "Spacious apartment with great views",
"Square_foot": 1200,
"Amenities": "Swimming pool, gym, parking",
"Rooms": 2,
"Occupancy_Status": "Vacant",
"Link_Image": [
"http://example.com/image.jpg"
],
"Link_Document": "http://example.com/document.pdf",
"Current_Emission": "120.00",
"Expected_Emission_Level": "100.00",
"More": "Additional information"
}]
```

This example response is intended to showcase the structure of the data returned when retrieving property information from the server using the `GET /properties` endpoint.

---

### Get Filtered Properties

`/properties/filter`: This is the endpoint that handles the filtering of properties. The properties will be filtered based on the criteria provided in the query parameters.

**Example**

```
http://serverURL/properties/filter?financeType=&rentalYield=6.5&location=USA
```

**Query Parameters:**

The query parameters are provided after the `?` symbol in the URL and are used to specify the filtering criteria:

-   `financeType=`: This query parameter has no value assigned (`=`), which indicates that it is optional. It is used to filter properties based on the type of finance, but in this case, no specific value is provided.

-   `rentalYield=6.5`: This query parameter indicates that properties should be filtered based on a specific rental yield of 6.5%. The properties returned by the server will have a rental yield of 6.5.

-   `location=USA`: This query parameter indicates that properties should be filtered based on the location, specifically in the USA. The properties returned by the server will be located in the USA.

When the client sends this request to the server, the server's `properties/filter` endpoint will handle the request and apply the specified filtering criteria. For example, the server might query the database for properties that match the provided rental yield (6.5%) and are located in the USA. The response from the server will include the properties that meet the filtering criteria.

---

## User Endpoints

### Create User

`POST /user`: This endpoint allows clients to create a new user by sending a `POST` request with the user details in the request body.

**Example Request**

```json
POST http://serverURL/user

Request Body:
{
    "email": "johndoe@example.com",
    "name": "John Doe"
}
```

**Example Response**

```json
Response:
{
    "ID_user": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
}
```

**Request Body:**

-   The request body should be a JSON object containing the user details.
-   The `email` field represents the user's email address, and the `name` field represents the user's name.

**Response:**

-   Upon successful creation of the user, the server responds with a JSON object containing the user's details.
-   The response includes the `ID_user`, which represents the unique identifier assigned to the newly created user.
-   The `name` field displays the user's name ("John Doe"), and the `email` field shows the user's email address ("johndoe@example.com").

**User Creation Process:**

1. The client sends a `POST` request to the URL `http://serverURL/user` with the user details in the request body.

2. The createUser function uses Sequelize's `findOrCreate` method to create a new user in the database if it doesn't exist already. It searches for the user based on the provided email, and if not found, it creates a new user with the given email and name.

3. The client can use the information from the response to further interact with the user's data or for display purposes.

---


### Get All Users

`GET /user`: This endpoint allows clients to retrieve a list of all users along with their associated properties and transactions.

**Example Request**

```
GET http://localhost:7689/user
```

**Example Response**

```json
Response:
[
  {
    "ID_user": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
    "savedProperties": [
      {
        "ID_Property": 1,
        "ID_owner": 1,
        "ID_Financials": 1,
        "ID_Features": 1,
        "savedBy": 1,
        "publishedBy": null,
        "investedBy": null
      }
    ],
    "publishedProperties": [],
    "investedProperties": [],
    "transactions": []
  }
]
```

**Response:**
- The server responds with a JSON `array` containing multiple user `objects`, each representing a user in the system.
- Each user object includes the `ID_user`, which represents the unique identifier of the user.
- The `email` field contains the user's email address.
- The `name` field displays the user's name.
- The `savedProperties` field is an array containing the properties that the user has saved.
- Each property object within the `savedProperties` array contains specific details such as `ID_Property`, `ID_owner`, `ID_Financials`, `ID_Features`, `savedBy`, `publishedBy`, and `investedBy`.
- The `publishedProperties` and `investedProperties` fields are empty arrays, indicating that the user has not published or invested in any properties.
- The `transactions` field is an empty array, indicating that the user has no associated transactions.

---

### Get User Properties by Type

`GET /user/:userId/type?type=all`: This endpoint allows clients to retrieve properties associated with a specific user based on the specified type.

**Example Request**

```
GET http://localhost:7689/user/1/type?type=all
```

**Example Response**

```json
Response:
{
  "ID_user": 1,
  "email": "johndoe@example.com"
  "name": "John Doe",
  "savedProperties": [
    {
      "ID_Property": 1,
      "ID_owner": 1,
      "ID_Financials": 1,
      "ID_Features": 1,
      "savedBy": 1,
      "publishedBy": null,
      "investedBy": null
    }
  ],
  "publishedProperties": [],
  "investedProperties": []
}
```

**Response:**
- The server responds with a JSON object containing user details along with the associated properties based on the specified type.
- The `ID_user` field represents the unique identifier of the user.
- The `email` field contains the user's email address.
- The `name` field displays the user's name.
- The `savedProperties` field is an array containing properties that the user has saved.
- Each property object within the `savedProperties` array contains specific details such as `ID_Property`, `ID_owner`, `ID_Financials`, `ID_Features`, `savedBy`, `publishedBy`, and `investedBy`.
- The `publishedProperties` and `investedProperties` fields are empty arrays, indicating that the user has not published or invested in any properties.

**Get User Properties by Type Process**

1. The client sends a `GET` request to the URL `http://localhost:7689/user/:userId/type?type=all`, where `:userId` is the specific user's unique identifier, and `type=all` specifies that all properties associated with the user should be retrieved.

2. The server's `user` endpoint handles the incoming request and calls the `getPropertiesUser` controller function.

3. The `getPropertiesUser` function finds the user by the provided `userId` using Sequelize's `findByPk` method. It includes multiple associations to retrieve the properties associated with the user based on the type specified in the request.

4. Depending on the `type` specified in the request, the controller function determines whether to retrieve the properties that the user has saved, invested in, or published using the respective Sequelize association methods (`getSavedProperties()`, `getInvestedProperties()`, `getPublishedProperties()`). If `type=all`, the controller returns all properties associated with the user without any filtering.

5. The controller returns the properties based on the specified type in the response.

**You have the following options for the type query parameter**

1. `type=saved`: With this option, the server will retrieve and return only the properties that the user has saved.

2. `type=invested`: With this option, the server will retrieve and return only the properties that the user has invested in.

3. `type=published`: With this option, the server will retrieve and return only the properties that the user has published.

4. `type=all` (or not specifying the type parameter): With this option, the server will retrieve and return all properties associated with the user without any filtering based on their saved, invested, or published status.

You can use any of these options to fetch the desired set of properties associated with the user based on your specific use case.

For example, if you want to fetch only the properties that the user has saved, you can make the following request:

```bash
GET http://localhost:7689/user/1/type?type=saved
```

---

### Update User Data

`POST /user/update`: This endpoint allows clients to modify user data by associating new properties with the user based on the specified type.

**Example Request**

```
POST http://localhost:7689/user/update?userId=1&saved=1&invested=&published=
```

**Request Parameters**

- `userId`: The unique identifier of the user whose data needs to be updated (e.g., `userId=1`).

- `saved`: The unique identifier of the property to be associated as a saved property for the user (e.g., `saved=1`). Leave it empty (`saved=`) if no saved property needs to be associated.

- `invested`: The unique identifier of the property to be associated as an invested property for the user (e.g., `invested=2`). Leave it empty (`invested=`) if no invested property needs to be associated.

- `published`: The unique identifier of the property to be associated as a published property by the user (e.g., `published=3`). Leave it empty (`published=`) if no published property needs to be associated.

**Example Response**

```json
Response:
{
  "ID_user": 1,
  "email": "johndoe@example.com"
  "name": "John Doe",
  "savedProperties": [
    {
      "ID_Property": 1,
      "ID_owner": 1,
      "ID_Financials": 1,
      "ID_Features": 1,
      "savedBy": 1,
      "publishedBy": null,
      "investedBy": null
    }
  ],
  "publishedProperties": [],
  "investedProperties": []
}
```

**Response:**
- The server responds with a JSON object containing user details along with the updated associated properties after the modifications.

**Update User Process:**

1. The client sends a `POST` request to the URL `http://localhost:7689/user/update` with the necessary request parameters, including `userId`, `saved`, `invested`, and `published`.

2. The server's `user` endpoint handles the incoming request and calls the `updateUser` controller function.

3. The `updateUser` function finds the user by the provided `userId` using Sequelize's `findByPk` method.

4. Depending on the provided parameters (`saved`, `invested`, `published`), the controller function associates the corresponding properties with the user using the appropriate Sequelize association methods (`addSavedProperties`, `addInvestedProperties`, `addPublishedProperties`).

5. After the associations are made, the controller returns the updated user object, including the associated properties.

---

## Transaction Endpoints

### Create Transaction

`POST /transaction`: This endpoint allows clients to create a new transaction by providing transaction details in the request body.

**Example Request**

```json
POST http://localhost:7689/transaction

Body:
{
  "Transaction_Date": "2023-07-20",
  "Token_quantity": 100,
  "Price": 2500.00,
  "Payment_Method": "Credit Card",
  "Payment_Currency": "USD",
  "ID_User": 1,
  "ID_Property": 1
}
```

**Request Body:**
- The request body contains the details of the transaction to be created, including:
  - `Transaction_Date`: The date of the transaction in the format "YYYY-MM-DD".
  - `Token_quantity`: The quantity of tokens involved in the transaction.
  - `Price`: The price of the tokens in the transaction.
  - `Payment_Method`: The payment method used for the transaction (e.g., "Credit Card").
  - `Payment_Currency`: The currency used for the payment (e.g., "USD").
  - `ID_User`: The unique identifier of the user associated with the transaction.
  - `ID_Property`: The unique identifier of the property involved in the transaction.

**Example Response**

```json
Response:
{
  "Transaction_ID": 1,
  "Transaction_Date": "2023-07-20T00:00:00.000Z",
  "Token_quantity": 100,
  "Price": "2500.00",
  "Payment_Method": "Credit Card",
  "Payment_Currency": "USD",
  "ID_User": 1,
  "ID_Property": 1
}
```

**Response:**
- The server responds with a JSON object containing the details of the created transaction.
- The `Transaction_ID` field represents the unique identifier of the transaction.
- The `Transaction_Date` field displays the date of the transaction in ISO 8601 format (e.g., "2023-07-20T00:00:00.000Z").
- The `Token_quantity` field indicates the quantity of tokens involved in the transaction.
- The `Price` field shows the price of the tokens in the transaction.
- The `Payment_Method` field indicates the payment method used for the transaction.
- The `Payment_Currency` field displays the currency used for the payment.
- The `ID_User` field contains the unique identifier of the user associated with the transaction.
- The `ID_Property` field contains the unique identifier of the property involved in the transaction.

---

### Get All Transactions

`GET /transaction`: This endpoint allows clients to retrieve all transactions stored in the database.

**Example Request**

```
GET http://localhost:7689/transaction
```

**Example Response**

```json
Response:
[
  {
    "Transaction_ID": 1,
    "Transaction_Date": "2023-07-20T00:00:00.000Z",
    "Token_quantity": 100,
    "Price": "2500.00",
    "Payment_Method": "Credit Card",
    "Payment_Currency": "USD",
    "ID_User": 1,
    "ID_Property": 1,
    "user": {
      "ID_user": 1,
      "email": "johndoe@example.com",
      "name": "John Doe"
    },
    "property": {
      "ID_Property": 1,
      "ID_owner": 1,
      "ID_Financials": 1,
      "ID_Features": 1,
      "savedBy": null,
      "publishedBy": null,
      "investedBy": null
    }
  }
]
```

**Response:**
- The server responds with a JSON array containing all transactions available in the database.
- Each transaction object in the array includes the following details:
  - `Transaction_ID`: The unique identifier of the transaction.
  - `Transaction_Date`: The date of the transaction in ISO 8601 format (e.g., "2023-07-20T00:00:00.000Z").
  - `Token_quantity`: The quantity of tokens involved in the transaction.
  - `Price`: The price of the tokens in the transaction.
  - `Payment_Method`: The payment method used for the transaction.
  - `Payment_Currency`: The currency used for the payment.
  - `ID_User`: The unique identifier of the user associated with the transaction.
  - `ID_Property`: The unique identifier of the property involved in the transaction.
  - `user`: An object containing the user details associated with the transaction, including `ID_user`, `email`, and `name`.
  - `property`: An object containing the property details associated with the transaction, including `ID_Property`, `ID_owner`, `ID_Financials`, `ID_Features`, `savedBy`, `publishedBy`, and `investedBy`.


**Get All Transactions Process:**

1. The client sends a `GET` request to the URL `http://localhost:7689/transaction`.

2. The server's `transaction` endpoint handles the incoming request and calls the `getAllTransactions` controller function.

3. The `getAllTransactions` function uses Sequelize's `findAll` method to retrieve all transactions from the database.

4. The controller uses the `include` option in Sequelize to specify the associated models (`User` and `Property`) to be included with each transaction.

5. The controller returns an array of transaction objects, each containing details about the transaction, along with the associated user and property details.

---


