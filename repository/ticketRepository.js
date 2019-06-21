var baseRepository = require('../repository/baseRepository');
var Ticket = require('../models/ticketModel');

var TicketRepository = class TicketRepository{

    static getTicket(){
        return Ticket.find((err, ticket) => {
            if(err){
               return err;
            }
            return ticket;
        });
    }

    static getTickets(){

    }
}

module.exports = TicketRepository;