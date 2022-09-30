import express from "express"
const router = express.Router()
import { addOrderItems, getOrderById } from "../controllers/orderController.js"
import { authorizer } from "../middleware/authMiddleware.js"

router.route("/").post(authorizer, addOrderItems)
router.route("/:id").get(authorizer, getOrderById)

export default router
