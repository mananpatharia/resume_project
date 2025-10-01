import { Router } from "express"
import {
  getDashboardStats,
  getDashboardVideos
} from "../controllers/dashboard.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()

router.get("/stats", verifyJWT, getDashboardStats)
router.get("/videos", verifyJWT, getDashboardVideos)

export default router
