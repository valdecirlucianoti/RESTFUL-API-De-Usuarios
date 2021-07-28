module.exports = (app) => {
    const NeDB = require('nedb');
    const db = new NeDB({
        filename: 'users.db',
        autoload: true
    });

    let route = app.route('/users');

    route.get((req, res) => {
    
        console.log('URL:', req.url);
        console.log('METHOD:', req.method);

        db.find({}).sort({name: 1}).exec((err, users) => {
            if(err){
                app.utils.error.send(err, req, res);
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    users 
                });
            }
        });

    }); 

    route.post((req, res) => {

       // if(app.utils.validator.user(app, req, res)) return false;

        console.log('URL:', req.url);
        console.log('METHOD:', req.method);

        //pegando o corpo da requisição
        db.insert(req.body, (err, user) =>{
            if (err) {
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(user);
            }

        });

    });
 
    let routeId = app.route('/users/:id');

    routeId.get((req, res) => {

        console.log('URL:', req.url);
        console.log('METHOD:', req.method);

        db.findOne({_id:req.params.id}).exec((err, user) =>{

            if (err) {
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(user);
            }

        });
    });

    routeId.put((req, res) => {
        
        //if(app.utils.validator.user(app, req, res)) return false;

        console.log('URL:', req.url);
        console.log('METHOD:', req.method);

        db.update({_id:req.params.id}, req.body, err =>{

            if (err) {
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(Object.assign(req.params, req.body));
            }
            
        });

    });

    routeId.delete((req, res) => {

        console.log('URL:', req.url);
        console.log('METHOD:', req.method);

        db.remove({_id:req.params.id}, {}, err =>{

            if (err) {
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(req.params);
            }
            
        });
    });

}; 