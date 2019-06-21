var express = require('express');

var ticketService = require('./services/ticketService');

var app = express();
var ticketRouter = express.Router();
var port = process.env.PORT || 3000;





ticketRouter.route('/ticket').get(async (req, res) => {
        return res.json(await ticketService.getTicket());
});

app.use('/api', ticketRouter);

app.get('/', (req, res) =>{
    res.send('answer!');
});

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});