import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../reducers/UserReducer";
import { fetchComments } from "../reducers/CommentReducer";
import { fetchPosts } from "../reducers/postsReducer";

import { FaUser, FaMusic, FaRegNewspaper, FaComments } from "react-icons/fa";

const States = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const comments = useSelector((state) => state.comments);
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchComments());
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-12 pb-4">
      <div className="h-20 sm:h-20 md:h-24 lg:h-24 rounded-lg bg-white border-l-4 border-violet-400 flex items-center justify-between px-4 cursor-pointer hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out">
        <div>
          <h2 className="text-[#5a5c69] text-xs sm:text-sm uppercase">
            total users
          </h2>
          <h1 className="text-lg sm:text-xl  text-[#5a5c69] mt-1">
            {users.data.length}
          </h1>
        </div>
        <FaUser fontSize={24} className="text-[#5a5c69]" color="" />
      </div>
      <div className="h-20 sm:h-20 md:h-24 lg:h-24 rounded-lg bg-white border-l-4 border-violet-400 flex items-center justify-between px-4 cursor-pointer hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out">
        <div>
          <h2 className="text-xs sm:text-sm uppercase">total comments</h2>
          <h1 className="text-lg sm:text-xl  text-[#5a5c69] mt-1">
            {comments.data.length}
          </h1>
        </div>
        <FaComments fontSize={24} className="text-[#5a5c69]" />
      </div>
      <div className="h-20 sm:h-20 md:h-24 lg:h-24 rounded-lg bg-white border-l-4 border-violet-400 flex items-center justify-between px-4 cursor-pointer hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out">
        <div>
          <h2 className="text-xs sm:text-sm uppercase">total posts</h2>
          <h1 className="text-lg sm:text-xl  text-[#5a5c69] mt-1">
            {posts.data.length}
          </h1>
        </div>
        <FaRegNewspaper fontSize={24} className="text-[#5a5c69]" />
      </div>
    </div>
  );
};

export default States;
