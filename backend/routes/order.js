const express = require("express");
const router = express.Router();

var controller = require("../controllers/order.controller");
 
const ZaloPay = require("../zalopay");
const OrderRespository = require("../respository/OrderRepository");

router.get("/", controller.index);
router.get("/:id", controller.orderInfo);
router.post("/", controller.postOrder);
router.post("/delete/:id", controller.deleteOrder);
router.post("/update/:id", controller.updateOrder);


router.get("/zalo/getbanklist", async (req, res) => { 
    res.send(await ZaloPay.GetBankList());
});

router.post("/zalo/createorder", async (req, res) => {
  const { ordertype } = req.query;
//   switch (ordertype) {
//     case "gateway":
//       return res.send(await ZaloPay.Gateway(req.body));
//     case "quickpay":
//       return res.send(await ZaloPay.QuickPay(req.body));
//     default:
      return res.send(await ZaloPay.CreateOrder(req.body));
//   }
});

// router.post("/refund", async (req, res) => {
//   res.send(await ZaloPay.Refund(req.body));
// });

// router.get("/getrefundstatus", async (req, res) => {
//   const { mrefundid } = req.query;
//   res.send(await ZaloPay.GetRefundStatus(mrefundid));
// });
// router.get("/zalo/gethistory", async (req, res) => {
//   let { page } = req.query;
//   page = Number(page);
//   page = isNaN(page) ? 1 : page;

//   const orders = await OrderRespository.Paginate(page);
//   res.send(orders);
// });

module.exports = router; 