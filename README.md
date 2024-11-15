<h1 align="center">My First Node Js Backend Server</h1>
<!-- OVERVIEW -->

## Overview
This project involved building a RESTful API using Node.js and Express that retrieves data from a JSON file and provides endpoints to access and display user data. The API reads a users.json file containing details about different users and returns this data based on various queries.

## Screenshots
- All Users Response
![screenshot](images/Screenshot%202024-11-15%20at%205.53.12 PM.png)

- Users/:id Response
![screenshot](images/Screenshot%202024-11-15%20at%205.54.22 PM.png)

- Users/:id error Response
![screenshot](images/Screenshot%202024-11-15%20at%205.54.44 PM.png)

- Users/profession/:profession Response
![screenshot](images/Screenshot%202024-11-15%20at%205.55.14 PM.png)

- Users/profession/:profession error Response
![screenshot](images/Screenshot%202024-11-15%20at%205.55.30 PM.png)

- Users/name/:name Response
![screenshot](images/Screenshot%202024-11-15%20at%205.56.17 PM.png)

- Users/name/:name error Response
![screenshot](images/Screenshot%202024-11-15%20at%205.56.03 PM.png)

### Built With

- [Node JS](https://www.w3schools.com/html/)
- [Express JS](https://www.w3schools.com/css/)
- [Javascript](https://www.w3schools.com/js/)

## Features

- Returns all users on entering /users endpoint
- Returns a user by id on entering /users/:id endpoint
- Returns a user by profession on entering /users/profession/:profession endpoint
- Returns a user by name on entering /users/name/:name endpoint

## Discussions/Takeaways
Through this project, I learned how to use the fs module to read and parse JSON files in Node.js, build a RESTful API with Express, including setting up multiple GET routes, implement error-handling in Express, returning user-friendly messages for invalid requests and test API endpoints using tools like Postman, which was valuable for verifying functionality.