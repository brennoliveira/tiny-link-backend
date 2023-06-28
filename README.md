# Tiny Link Backend

## Description
Tiny Link Backend is an application that provides URL shortening functionality. It allows users to generate short URLs for long web addresses, making them easier to share and remember. It was developed using `Node.js` with `Typescript`.

## Prerequisites
- Node.js [v.16.16.0]

## Installation
1. Clone the repository: `git clone [repository URL]`
2. Install dependencies: `npm install`

## Confirguration
### Main Branch (PostgreSQL)

The `main` branch uses a PostgreSQL database hosted in the cloud and requires the use of the `.env` file for configuration. Follow the steps below to set up the project with the `main` branch:
1. Rename the `.env.example` file to `.env`.
2. Update the values in the `.env` file with your PostgreSQL databse credentials and confirgurations.
3. Start the application by running `npm run dev` in the terminal.
4. Access the application at `http://localhost:4000`.

### SQLite Branch

The `sqlite` branch uses SQLite as the database, which is a file-based database system. It doesn't require the use of the `.env` file. Follow the steps below to set up the project with the `sqlite` branch:
1. Ensure you have SQLite installed on your system.
2. Switch to the `sqlite` branch by running `git checkout sqlite`.
3. Install the dependencies by running `npm install`.
4. Run the necessary migrations to create the SQLite database file by running `npx prisma generate` and then `npm run migrate:dev`.
5. Start the application by running `npm run dev`.
6. Access the application at `http://localhost:4000`.

## Project Structure
- `src/` - Main source code folder
  - `Models/` - Contains the entities and the repositories interfaces
  - `Web/` - Contains controllers, routes, and business logic
  - `Infra/` - Contains repositories and database integration
  - `Shared/` - Contains shared functions and utilities
