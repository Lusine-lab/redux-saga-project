import { useEffect } from "react";
import { getSingleUser, getCurrentUserPosts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function UserDetails() {
  let { userId } = useParams();
  const user = useSelector((state) => state.user.currentUser);
  const posts = useSelector((state) => state.user.currentUserPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleUser(userId));
    dispatch(getCurrentUserPosts(userId));
  }, []);

  return (
    <div>
      Test
      {user && user.name}
      {posts &&
        posts.map((post) => (
          <>
            <h4 key={post.id}>{post.title}</h4>
            <br />
            <br />
          </>
        ))}
    </div>
  );
}

export default UserDetails;
