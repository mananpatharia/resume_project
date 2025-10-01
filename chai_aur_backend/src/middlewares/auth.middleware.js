import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
export const verifyJWT=asyncHandler(async(req,_,next)=>{
    try {
        const authHeader = req.header("Authorization") || ""
        const bearerToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : authHeader.replace(/^Bearer/i, "").trim()
        const token = req.cookies?.accessToken || bearerToken
    
        if(!token){
            throw new ApiError(401,"Unauthorized request")
        }
        const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        const user=await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user){
            throw new ApiError(401,"Invalid Access Token")
        }
        req.user=user
        next()
    } catch (error) {
        throw new ApiError(401,error?.message||"Invalid access token")
    }

})