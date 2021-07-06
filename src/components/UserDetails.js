import { useEffect } from "react";
import { getSingleUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function UserDetails() {
  let { userId } = useParams();
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleUser(userId));
  }, []);
  return (
    <div>
      Test
      {user && user.name}
    </div>
  );
}

export default UserDetails;
