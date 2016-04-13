var carController = function(Car) {

  var post = function(req, res){
        var car = new Car(req.body);

        if(!req.body.make){
            res.status(400);
            res.send('Vehicle Make is required');
        }
        else {
            car.save();
            res.status(201);
            res.send(car);
        }
    };

    var get = function(req, res){

        var query = {};

        if(req.query.model)
        {
            query.model = req.query.model;
        }
        Car.find(query, function(err, cars){
            if(err)
                res.status(500).send(err);
            else {

                var returnCars= [];
                cars.forEach(function(element, index, array){
                    var newCar = element.toJSON();
                    newCar.links = {};
                    neaCar.links.self = 'http://' + req.headers.host + '/api/cars/' + newCar._id;
                    returnCars.push(newCar);
                });
                res.json(returnCars);
            }
        });
    };

    return {
        post: post,
        get: get
    };
};

module.exports = carController
