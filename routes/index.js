module.exports = (app) => {
        app.get("/", (req, res) => {
        
        console.log('URL:', req.url);
        console.log('METHOD:', req.method);
 
        res.statusCode = 200; //status de que deu tudo certo;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Olá</h1>');
    }); 
};