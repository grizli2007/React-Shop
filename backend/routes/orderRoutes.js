import express from "express"
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderController.js"
import { authorizer } from "../middleware/authMiddleware.js"

router.route("/").post(authorizer, addOrderItems)
router.route("/:id").get(authorizer, getOrderById)
router.route("/:id/pay").put(authorizer, updateOrderToPaid)

export default router
