const Order = require("../models/chat.model.js");

const ORDER_PER_PAGE = 10;

class OrderRespository {
  SaveOrder(data = {}) { 
      const { description } = JSON.parse(data.embeddata);
      Order.create({
        apptransid: data.apptransid,
        zptransid: data.zptransid,
        channel: data.channel,
        timestamp: data.servertime,
        amount: data.amount,
        description,
      }); 
  }

  async Paginate(page = 1) {
    const { rows: orders, count: totalOrder } = await Order.findAndCountAll({
      order: [
        ['timestamp', 'DESC']
      ],
      offset: (page - 1) * ORDER_PER_PAGE,
      limit: ORDER_PER_PAGE
    });

    return {
      currentPage: page,
      totalOrder,
      orders,
      orderPerPage: ORDER_PER_PAGE
    }
  }
}

module.exports = new OrderRespository();