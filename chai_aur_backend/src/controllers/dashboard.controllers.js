import mongoose from "mongoose"
import { Video } from "../models/video.model.js"
import { Subscription } from "../models/subscription.model.js"
import { Like } from "../models/like.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

// Controller to get channel statistics
const getChannelStats = asyncHandler(async (req, res) => {
    const channelId = req.user?._id   // assuming user authenticated hai aur middleware se aa rha hai

    if (!channelId) {
        throw new ApiError(401, "Unauthorized request")
    }

    // total videos
    const totalVideos = await Video.countDocuments({ owner: channelId })

    // total views
    const videos = await Video.find({ owner: channelId }, "views")
    const totalViews = videos.reduce((acc, vid) => acc + vid.views, 0)

    // total subscribers
    const totalSubscribers = await Subscription.countDocuments({ channel: channelId })

    // total likes across all videos
    const totalLikes = await Like.countDocuments({ video: { $in: videos.map(v => v._id) } })

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {
                    totalVideos,
                    totalViews,
                    totalSubscribers,
                    totalLikes
                },
                "Channel stats fetched successfully"
            )
        )
})

// Controller to get all channel videos
const getChannelVideos = asyncHandler(async (req, res) => {
    const channelId = req.user?._id

    if (!channelId) {
        throw new ApiError(401, "Unauthorized request")
    }

    const videos = await Video.find({ owner: channelId }).sort({ createdAt: -1 })

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                videos,
                "Channel videos fetched successfully"
            )
        )
})

export {
    getChannelStats,
    getChannelVideos
}
