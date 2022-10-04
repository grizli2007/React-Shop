import express from "express"
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js"
import { authorizer, admin } from "../middleware/authMiddleware.js"

router.route("/").post(registerUser).get(authorizer, admin, getUsers)
router.post("/login", authUser)
router
  .route("/profile")
  .get(authorizer, getUserProfile)
  .put(authorizer, updateUserProfile)

router
  .route("/:id")
  .delete(authorizer, admin, deleteUser)
  .get(authorizer, admin, getUserById)
  .put(authorizer, admin, updateUser)
export default router
