# Hostech
CRUD Products - Hostech

# API Documentation

## Authentication

All the following endpoints require token authentication. The token should be included in the `Authorization` header of the request.
### POST /login

This endpoint is used for user authentication.

**Request parameters:**

- `username`: The username of the user.
- `password`: The password of the user.

**Response:**

Returns a JSON object containing the JWT token if the login is successful.

## Products

### POST /products

This endpoint creates a new product.

**Request parameters:**

- `name`: The name of the product.
- `key`: The key of the product.

**Response:**

Returns a JSON object of the newly created product.

### GET /products

This endpoint returns all products.

**Request parameters:**

None

**Response:**

Returns a JSON array of all products.

### GET /products/:id

This endpoint returns a specific product.

**Request parameters:**

- `id`: The ID of the product.

**Response:**

Returns a JSON object of the product.

### PUT /products/:id

This endpoint updates a specific product.

**Request parameters:**

- `id`: The ID of the product.
- `name`: The new name of the product.
- `key`: The key of the product.

**Response:**

Returns a JSON object of the updated product.

### DELETE /products/:id

This endpoint deletes a specific product.

**Request parameters:**

- `id`: The ID of the product.

**Response:**

Returns a JSON object with a success message.

### GET /products/:name

This endpoint returns products with a specific name.

**Request parameters:**

- `name`: The name of the product.

**Response:**

Returns a JSON array of products with the specified name.

### GET /products/:key

This endpoint returns a product with a specific key.

**Request parameters:**

- `key`: The key of the product.

**Response:**

Returns a JSON object of the product with the specified key.
