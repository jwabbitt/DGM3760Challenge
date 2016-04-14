Cars app

Description:  Simple database of cars by make, model, color, etc.

Requirements:  

1. Node: download at https://nodejs.org/en/download/ 
    or with homebrew, update brew `brew update` and install node `brew install node`
2. MongoDB: download at https://www.mongodb.org/downloads#production
    or with homebrew, update brew `brew update` and install mongodb `brew install mongodb`

Usage:

`npm install`  

`mongod`  

Now in a separate terminal tab or window:

`node app.js`  

Use Postman to get and post: http://localhost:3000/api/cars

post with this model:

```
{
  "make": "MakeOfCar",
  "model": "ModelOfCar",
  "color": "colorOfCar",
  "AC": true
}
```  

delete and patch with id number: http://localhost:3000/api/cars/[id#]
