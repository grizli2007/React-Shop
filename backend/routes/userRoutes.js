import express from "express"
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
} from "../controllers/userController.js"
import { authorizer, admin } from "../middleware/authMiddleware.js"

router.route("/").post(registerUser).get(authorizer, admin, getUsers)
router.post("/login", authUser)
router
  .route("/profile")
  .get(authorizer, getUserProfile)
  .put(authorizer, updateUserProfile)
export default router
