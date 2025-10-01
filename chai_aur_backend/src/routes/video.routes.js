import {Router} from "express"
import {verifyJWT} from "../middlewares/auth.middleware.js"
import {upload} from "../middlewares/multer.middleware.js"
import {getAllVideos, publishAVideo, getVideoById, updateVideo, deleteVideo, togglePublishStatus} from "../controllers/video.controllers.js"
const router =Router()
router.use(verifyJWT)

// List and upload videos
router.route("/")
    .get(getAllVideos)
    .post(
        upload.fields([
            { name: "videoFile", maxCount: 1 },
            { name: "thumbnail", maxCount: 1 }
        ]),
        publishAVideo
    )

// Single video CRUD
router.route("/:videoId")
    .get(getVideoById)
    .patch(upload.single("thumbnail"), updateVideo)
    .delete(deleteVideo)

// Toggle publish/unpublish
router.route("/:videoId/toggle-publish").patch(togglePublishStatus)

export default router