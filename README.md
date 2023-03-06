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

## Welcome!
A. Dashboars with data:

![1f0da43d-9330-411f-89c3-53151f82d858](https://user-images.githubusercontent.com/44768171/223106171-0e3a7688-db20-4223-b476-bbc4c6c9b7f3.jpg)

B. Edit Dialog:
![235acd94-e7d0-4a0e-ba91-ce6250b8510f](https://user-images.githubusercontent.com/44768171/223106348-58328b85-5b67-4d7c-8076-5b7ba8899285.jpg)
