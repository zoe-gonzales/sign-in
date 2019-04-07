var db = require('../models');

module.exports = function(app){
    app.get('/', function(req,res){
        db.Meeting.findAll().then(function(data){
            res.render('add', {meetings: data});
        });
    });

    app.get('/meeting/:id', function(req,res){
        db.Meeting.findOne({
            where: {id: req.params.id},
            include: [db.Signin, db.Note]
        }).then(function(data){
            res.render('index', {
                meetingDesc: data.dataValues.description,
                meetingId: req.params.id,
                signIns: data.dataValues.Signins,
                notes: data.dataValues.Notes
            });
        });
    });

    app.post('/api/meetings', function(req,res){
        db.Meeting.create(req.body).then(function(result){
            res.json(result);
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