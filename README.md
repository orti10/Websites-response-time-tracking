# Websites-response-time-tracking

## Summary
This is a web application that tests and records the response times of a list of common websites, 
namely "google.com", "facebook.com", "twitter.com", "cnet.com", and "amazon.com". 
The backend of the application executes HTTP requests to these websites, 
saves the results to a PostgreSQL database, and exposes the data through a REST API endpoint. 
The frontend displays a linear graph with the response times of each website over time, with the option to start or stop the tests.

The application is implemented using ReactJS on the frontend and any backend technology or framework of your choice. 
It is efficient and supports multiple users simultaneously. 
The data is saved and available when closing the browser and reopening the app. 
The application allows you to use any external library of your choice.



## Getting Started
1. Clone the repository to your local machine 
git clone https://github.com/orti10/Websites-response-time-tracking.git
2. Install the dependencies by running `npm install` on the command line from the project directory.
3. Configure the PostgreSQL database connection
open 2 terminals:
1. Start the backend server - cd server and after: nodemon index
![8deb9ab2-a732-4f3e-b8d5-8411b5188a28](https://user-images.githubusercontent.com/44768171/223105083-87d2692f-8d74-44ba-b153-0596a4f9e889.jpg)
2. Start the frontend client - cd client and after: npm start
![client](https://user-images.githubusercontent.com/44768171/223104032-08b72d6d-fcd6-440a-b9ba-c2b58eae1ecf.jpg)

## Features 
The Response Time Tracker application has the following features:
* Tracks the response times of the listed websites over time.
* Provides a REST API endpoint to expose the data.
* Displays the data on a linear graph on the frontend.
* Allows the user to start or stop the tests.
* Saves the data when closing the browser and reopening the application.

## Technology Stack
The Response Time Tracker application uses the following technology stack:
* ReactJS for the frontend
* PostgreSQL for the database
* Node.js and Express for the backend server

## Conclusion
This is a simple application that can be used to track the response times of a list of websites. It is efficient, supports multiple users simultaneously, 
and allows you to use any external library of your choice.

UPDATE:

![046cac37-c4f0-4316-ba5c-ac4c88b84f4e](https://user-images.githubusercontent.com/44768171/223847828-c6dc45b2-e5d9-4d3c-be64-56ae9943bd8f.jpg)

![39eae163-e04e-486d-8e5d-3c1c00006e09](https://user-images.githubusercontent.com/44768171/223847251-2fe30f15-0e95-4a7d-a94a-fdb6e6307660.jpg)



A. Dashboars with data:
![1f0da43d-9330-411f-89c3-53151f82d858](https://user-images.githubusercontent.com/44768171/223106171-0e3a7688-db20-4223-b476-bbc4c6c9b7f3.jpg)

B. Edit Dialog:
![235acd94-e7d0-4a0e-ba91-ce6250b8510f](https://user-images.githubusercontent.com/44768171/223106348-58328b85-5b67-4d7c-8076-5b7ba8899285.jpg)

