import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets } from "../redux/tweetSlice";

const useGetMyTweets = (id) => {
  const dispatch = useDispatch();
  const { refresh } = useSelector((store) => store.tweet);

  const fetchMyTweets = async () => {
    try {
      const res = await axios.get(`${TWEET_API_END_POINT}/alltweet/${id}`, {
        withCredentials: true,
      });
      console.log(res);
      dispatch(getAllTweets(res.data.tweets));
    } catch (error) {
      console.log(error);
    }
  };
  const followingTweetHandler = async () => {
    try {
      const res = await axios.get(`${TWEET_API_END_POINT}/following/${id}`);
      console.log(res);
      dispatch(getAllTweets(res.data.message));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMyTweets();
  }, [id, refresh, dispatch]);
};
export default useGetMyTweets;
