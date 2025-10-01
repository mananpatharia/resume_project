import mongoose, { isValidObjectId } from "mongoose"
import { User } from "../models/user.model.js"
import { Subscription } from "../models/subscription.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

// 🔹 Toggle subscription (subscribe/unsubscribe)
const toggleSubscription = asyncHandler(async (req, res) => {
    const { channelId } = req.params

    if (!isValidObjectId(channelId)) {
        throw new ApiError(400, "Invalid channel ID")
    }

    if (req.user._id.toString() === channelId.toString()) {
        throw new ApiError(400, "You cannot subscribe to yourself")
    }

    // Check if already subscribed
    const existingSub = await Subscription.findOne({
        subscriber: req.user._id,
        channel: channelId
    })

    if (existingSub) {
        // If already subscribed → unsubscribe
        await Subscription.findByIdAndDelete(existingSub._id)
        return res
            .status(200)
            .json(new ApiResponse(200, null, "Unsubscribed successfully"))
    }

    // Otherwise → subscribe
    const subscription = await Subscription.create({
        subscriber: req.user._id,
        channel: channelId
    })

    return res
        .status(201)
        .json(new ApiResponse(201, subscription, "Subscribed successfully"))
})

// 🔹 Get all subscribers of a channel
const getUserChannelSubscribers = asyncHandler(async (req, res) => {
    const { channelId } = req.params

    if (!isValidObjectId(channelId)) {
        throw new ApiError(400, "Invalid channel ID")
    }

    const subscribers = await Subscription.find({ channel: channelId })
        .populate("subscriber", "username email avatar")

    return res
        .status(200)
        .json(new ApiResponse(200, subscribers, "Subscribers fetched successfully"))
})

// 🔹 Get all channels a user is subscribed to
const getSubscribedChannels = asyncHandler(async (req, res) => {
    const { subscriberId } = req.params

    if (!isValidObjectId(subscriberId)) {
        throw new ApiError(400, "Invalid subscriber ID")
    }

    const channels = await Subscription.find({ subscriber: subscriberId })
        .populate("channel", "username email avatar")

    return res
        .status(200)
        .json(new ApiResponse(200, channels, "Subscribed channels fetched successfully"))
})

export {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels
}
