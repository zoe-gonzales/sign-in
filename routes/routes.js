var db = require('../models');

module.exports = function(app){
    app.get('/', function(req,res){
        db.Signin.findAll().then(function(data){
            console.log(data);
            res.render('index', {signIns: data});
        });
    });

    app.post('/api/signins', function(req,res){
        db.Signin.create(req.body).then(function(result){
            res.json(result);
        });
    });

    app.post('/api/notes', function(req,res){
        db.Note.create(req.body).then(function(result){
            res.json(result);
        });
    });

    app.put('/api/signins/:id', function(req,res){
        db.Signin.update(req.body, {
            where: {id: req.params.id}
        }).then(function(result){
            res.json(result);
        });
    });

    app.delete('/api/signins/:id', function(req,res){
        db.Signin.destroy({
            where: {id: req.params.id}
        }).then(function(result){
            res.json(result);
        });
    });
}