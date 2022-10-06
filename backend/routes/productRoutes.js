import express from "express"
const router = express.Router()
import {
  getProductById,
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/productControllers.js"
import { authorizer, admin } from "../middleware/authMiddleware.js"

router.route("/").get(getProducts).post(authorizer, admin, createProduct)

router
  .route("/:id")
  .get(getProductById)
  .delete(authorizer, admin, deleteProduct)
  .put(authorizer, admin, updateProduct)

export default router
