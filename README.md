Cars app

Description:  Simple database of cars by make, model, color, etc.

Usage:

`npm install`  

`mongod`  

Now in a separate terminal tab or window:

`node app.js`  

Use Postman to get and post: http://localhost:3000/api/cars

post with this model:

`
{
  "make": "MakeOfCar",
  "model": "ModelOfCar",
  "color": "colorOfCar",
  "AC": true
}
`
delete and patch with id number: http://localhost:3000/api/cars/[id#]
