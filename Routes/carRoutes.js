var express = require('express');


var routes = function(Car){
    var carRouter = express.Router();

    var carController = require('../controllers/carController')(Car);
    carRouter.route('/')
        .post(carController.post)
        .get(carController.get);

    carRouter.use('/:carId', function(req,res,next){
        car.findById(req.params.carId, function(err, car){
            if(err)
                res.status(500).send(err);
            else if(car)
            {
                req.car = car;
                next();
            }
            else
            {
                res.status(404).send('no car found');
            }
        });
    });
    carRouter.route('/:carId')
        .get(function(req, res){

            var returnCar = req.car.toJSON();

            returnCar.links = {};
            var newLink = 'http://' + req.headers.host + '/api/cars/?model=' + returnCar.genre;
            returnCar.links.FilterByThisModel = newLink.replace(' ', '%20');
            res.json(returnCar);

        })
        .put(function(req,res){
            req.car.title = req.body.make;
            req.car.model = req.body.model;
            req.car.color = req.body.color;
            req.car.AC = req.body.AC;
            req.car.GPS = req.body.GPS;
            req.car.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.car);
                }
            });
        })
        .patch(function(req,res){
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body)
            {
                req.car[p] = req.body[p];
            }

            req.car.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.car);
                }
            });
        })
        .delete(function(req,res){
            req.car.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204).send('Removed Car');
                }
            });
        });
    return carRouter;
};

module.exports = routes;
