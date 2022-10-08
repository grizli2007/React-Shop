import express from "express"
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} from "../controllers/orderController.js"
import { admin, authorizer } from "../middleware/authMiddleware.js"

router
  .route("/")
  .post(authorizer, addOrderItems)
  .get(authorizer, admin, getOrders)
router.route("/myorders").get(authorizer, getMyOrders)
router.route("/:id").get(authorizer, getOrderById)
router.route("/:id/pay").put(authorizer, updateOrderToPaid)
router.route("/:id/deliver").put(authorizer, admin, updateOrderToDelivered)

export default router
