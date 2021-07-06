import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";

function Users() {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  let filterData = [];

  if (users) {
    filterData = users.filter((user) => parseInt(user.id) % 2 === 0);
  }

  return (
    <div>
      {filterData.map((user) => {
        return <h1 key={user.id}>{user.name}</h1>;
      })}
    </div>
  );
}

export default Users;
