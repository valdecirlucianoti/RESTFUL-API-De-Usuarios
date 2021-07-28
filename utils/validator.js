module.exports = {

    user: (app, req, res) => {

        //req.assert('_name', 'O nome é obrigatório').notEmpty();
        //req.assert('_email', 'O email não é valido').notEmpty().isEmail();

        let errors = req.validationErrors();

        if(errors){
            app.utils.error.send(err, req, res);
            return false;
        }else{
            return true;
        }

    }
    
};