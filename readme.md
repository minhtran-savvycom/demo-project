Overview
This project is a demo API built with Node.js, Express, TypeORM, PassportJS demonstrating user management with JWT authentication. Users can update their profiles, including associating themselves with games. The project uses Postgres for the database and includes detailed input validation and transformation.

Design Decisions

1. Project Structure

   routers: Serve direct incoming requests to their respective controllers via predefined paths

   controllers: Handle incoming requests and send responses.

   services: Contain the business logic of the application.

   entities: Define the data models and their relationships.

   dtos (Data Transfer Objects): Define how data is sent over the network.

   middlewares: Handle cross-cutting concerns like authentication and error handling.

   configuration: Manage environment variables and database configuration.

   exception: Error logic handling, response error messages to users

   authentication: Authentication logic handling, specifically passportjs

   settings: Configuration file settings included Swagger and Typeorm

2. Database ORM - TypeORM

   TypeORM is chosen for its ability to map database tables to TypeScript classes, providing a seamless integration with relational databases like MySQL.

3. Authentication - JWT

   JWT (JSON Web Tokens) is used for stateless authentication. This allows secure API endpoints that require user authentication without the need to maintain session state on the server.

4. Validation and Transformation

   class-validator: Ensures the incoming data meets the expected format and constraints.
   class-transformer: Transforms plain JavaScript objects into instances of classes, allowing for advanced serialization and deserialization logic.

5. Password Hashing

   Passwords are hashed using bcrypt to ensure they are stored securely in the database.

6. Swagger Integration

   Swagger is used for API documentation, allowing for easy testing and documentation of the API endpoints.

7. Middleware

   CORS: Enables Cross-Origin Resource Sharing to allow API access from different domains.
   Error Handling: Centralized error handling middleware to catch and respond to errors consistently.
   Assumptions
   Unique User Email: Each user must have a unique email address, enforced by the @Unique decorator in the User entity.
   Game Existence: Games must exist in the database before they can be associated with a user. This ensures referential integrity.
   Secure Password Storage: Passwords are never stored in plain text and are always hashed before saving to the database.
   Eager Loading for Relations: User's associated games are eagerly loaded to simplify accessing related data.
   Error Handling: Any error during the database operations or authentication processes is caught and a relevant error message is sent to the client.
   Usage

8. Install Dependencies

   run: npm install

9. Set Up Environment Variables

   Create a .env file with the following variables:

PORT=3000
JWT_SECRET=demo_project

10. Database Schema
    The database consists of three main tables:

User: Stores user information.
Game: Stores game information.
Publisher: Stores publisher information for games.
user_game: A join table that associates users with games.

Conclusion
This demo project provides a robust and scalable foundation for user management with secure authentication and data validation. It demonstrates best practices for building RESTful APIs with Node.js and TypeORM.
