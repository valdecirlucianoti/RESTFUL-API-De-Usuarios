module.exports = {

    send: (err, req, res, code = 400) => {
        console.error(`ERRO: ${err}`);
        res.status(code).json({
            error: err
        });
    }
};