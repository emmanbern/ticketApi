const ticketRepository = require('../repository/ticketRepository');

class TicketService{

    static async getTicket(){
        return await ticketRepository.getTicket();;
    }
}

module.exports = TicketService;