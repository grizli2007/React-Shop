import express from "express"
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js"
import { authorizer } from "../middleware/authMiddleware.js"

router.route("/").post(registerUser)
router.post("/login", authUser)
router
  .route("/profile")
  .get(authorizer, getUserProfile)
  .put(authorizer, updateUserProfile)
export default router
