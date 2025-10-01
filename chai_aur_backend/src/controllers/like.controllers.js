import mongoose, { isValidObjectId } from "mongoose"
import { Like } from "../models/like.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

// ✅ Toggle Like on Video
const toggleVideoLike = asyncHandler(async (req, res) => {
    const { videoId } = req.params

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid video ID")
    }

    const existingLike = await Like.findOne({
        video: videoId,
        likedBy: req.user._id
    })

    if (existingLike) {
        await Like.findByIdAndDelete(existingLike._id)
        return res.status(200).json(new ApiResponse(200, null, "Video unliked successfully"))
    }

    const like = await Like.create({ video: videoId, likedBy: req.user._id })
    return res.status(201).json(new ApiResponse(201, like, "Video liked successfully"))
})

// ✅ Toggle Like on Comment
const toggleCommentLike = asyncHandler(async (req, res) => {
    const { commentId } = req.params

    if (!isValidObjectId(commentId)) {
        throw new ApiError(400, "Invalid comment ID")
    }

    const existingLike = await Like.findOne({
        comment: commentId,
        likedBy: req.user._id
    })

    if (existingLike) {
        await Like.findByIdAndDelete(existingLike._id)
        return res.status(200).json(new ApiResponse(200, null, "Comment unliked successfully"))
    }

    const like = await Like.create({ comment: commentId, likedBy: req.user._id })
    return res.status(201).json(new ApiResponse(201, like, "Comment liked successfully"))
})

// ✅ Toggle Like on Tweet
const toggleTweetLike = asyncHandler(async (req, res) => {
    const { tweetId } = req.params

    if (!isValidObjectId(tweetId)) {
        throw new ApiError(400, "Invalid tweet ID")
    }

    const existingLike = await Like.findOne({
        tweet: tweetId,
        likedBy: req.user._id
    })

    if (existingLike) {
        await Like.findByIdAndDelete(existingLike._id)
        return res.status(200).json(new ApiResponse(200, null, "Tweet unliked successfully"))
    }

    const like = await Like.create({ tweet: tweetId, likedBy: req.user._id })
    return res.status(201).json(new ApiResponse(201, like, "Tweet liked successfully"))
})

// ✅ Get all Liked Videos of a User
const getLikedVideos = asyncHandler(async (req, res) => {
    const likes = await Like.find({ likedBy: req.user._id, video: { $exists: true, $ne: null } })
        .populate("video")

    return res
        .status(200)
        .json(new ApiResponse(200, likes, "Fetched all liked videos successfully"))
})

export {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos
}
