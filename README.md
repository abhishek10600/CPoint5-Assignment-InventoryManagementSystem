# CPoint5 Assignment ( Inventory Management System ) by Abhishek Sharma

## Contents

### 1. api (Backend)

To develop the backend of the application I used Nodejs and Expressjs framework to develop the REST apis. 

For database I used MongoDB.

I used cloudinary for file storage.(To store images in cloud.)

I create 2 routes.

Route 1: http://localhost:4000/api/v1/inventory/grocery/addItem
This is a POST route that is used to add item into the database. It takes name, description, quantity and a image file as input from frontend form.

Route 2: http://localhost:4000/api/v1/inventory/grocery/all
This is a GET route that is used to get all the items from the database and send it in json format to the frontend.

#### How to run the backend:
1. Perform npm i command inside the api folder which will download the node_modules folder for the api. 

2. Then inside the api repository type npm run dev (for development) or npm run stat.

3. Two endpoints:
   i. POST endoint: http://localhost:4000/api/v1/inventory/grocery/addItem

   ii. GET endpoint: http://localhost:4000/api/v1/inventory/grocery/all

### 2. client (Frontend)

To develop the backend of the application I have used ReactJs for the frontend library and Tailwind CSS for styling.

##### How to run the backend:
1. Inside the client repository type npm i to downlaod the node_modules folder for the client.

2. Inside the client repository type npm run dev. 

3. Frontend url: http://localhost:5173. 



