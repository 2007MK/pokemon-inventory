# Pokémon Inventory

This project is a simple inventory management system for Pokémon, built using Node.js, Express, and a PostgreSQL database. It allows users to browse, add, edit, and delete Pokémon and their associated types.

I made this project while learning about backend and databases.

> **Note:** This project was built entirely from scratch without using any generative AI tools.

## Features

- **View Pokémon and Types**: Browse the entire collection of Pokémon or view them categorized by type.
- **CRUD Operations for Pokémon**:
  - **Create**: Add new Pokémon with a name, type, and image URL.
  - **Read**: View details for each individual Pokémon.
  - **Update**: Edit a Pokémon's name, type, and image.
  - **Delete**: Remove a Pokémon from the inventory.
- **CRUD Operations for Types**:
  - **Create**: Add new Pokémon types.
  - **Read**: View all Pokémon belonging to a specific type.
  - **Update**: Edit the name of a type.
  - **Delete**: Remove a type, only if no Pokémon are currently assigned to it.
- **Dashboard**: A homepage that displays key statistics like the total number of Pokémon and types.
- **Responsive UI**: A clean and simple interface for managing the inventory.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (using the `pg` library)
- **Frontend**: EJS (Embedded JavaScript templates) for server-side rendering
- **Styling**: Custom CSS
- **Environment Variables**: `dotenv`

## Project Structure

The repository is organized into the following directories:

```
├── app.js               # Main application entry point
├── controllers/         # Handles request logic and interacts with the database
├── db/                  # Database connection, queries, and seeding script
├── public/              # Static assets (CSS, images)
├── routes/              # Defines the application's URL endpoints
└── views/               # EJS templates for the user interface
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/2007MK/pokemon-inventory.git
    cd pokemon-inventory
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

3.  **Set up the database:**
    - Make sure your PostgreSQL server is running.
    - Create a new database for the project.

4.  **Configure environment variables:**
    - Create a `.env` file in the root of the project.
    - Add your PostgreSQL connection string to the `.env` file:
      ```
      DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/YOUR_DATABASE_NAME"
      ```
    - Replace the placeholder values with your actual database credentials.

5.  **Seed the database:**
    - Run the `populatedb.js` script to create the necessary tables and populate them with initial data. Pass your database URL as an argument.

    ```sh
    node db/populatedb.js "postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/YOUR_DATABASE_NAME"
    ```

6.  **Start the server:**
    ```sh
    node app.js
    ```
    The application will be running on `http://localhost:3000`.

### Todos :

1. Make the UI responsive
2. Integrate with an external API (like PokeAPI)
3. Add a dedicated page for each Pokémon
4. Add sorting options
