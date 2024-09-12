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