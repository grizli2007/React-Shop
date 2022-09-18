import express from "express"
const router = express.Router()
import { authUser, getUserProfile } from "../controllers/userController.js"
import { authorizer } from "../middleware/authMiddleware.js"

router.post("/login", authUser)
router.route("/profile").get(authorizer, getUserProfile)
export default router
