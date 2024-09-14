import { Tweet } from "../models/tweetSchema.js"

export const createTweet = async (req, res) => {
    try {
        const {description, id} = req.body;
        if(!description || !id){
            return res.status(401).json({
                message:"All fields are required",
                success:false
            })
        };

        await Tweet.create({
            description,
            userId:id
        });

        return res.status(201).json({
            message:"Tweeted successfully!",
            success:true
        })
    } catch (error) {
        console.log(error);        
    }
}

export const deleteTweet = async (req, res) => {
    try {
        const {id} = req.params;
        await Tweet.findByIdAndDelete(id);
        return res.status(200).json({
            message:"Tweet deleted successfully!",
            success:true
        })
    } catch (error) {
        console.log(error);        
    }
}

export const likeOrDislike = async (req, res) => {
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const tweet = await Tweet.findById(tweetId);
        if(tweet.like.includes(loggedInUserId)){
            await Tweet.findByIdAndUpdate(tweetId, {$pull:{like:loggedInUserId}})
            return res.status(200).json({
                message:"Tweet disliked!"
            })
        } else {
            await Tweet.findByIdAndUpdate(tweetId, {$push:{like:loggedInUserId}})
            return res.status(200).json({
                message:"Tweet liked!"
            })
        }

    } catch (error) {
        console.log(error);        
    }
}
