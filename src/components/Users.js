import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUsers, setUsers} from "../redux/actions";

function Users() {
    const users = useSelector((state) => state.user.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div>
            {users &&
            users.map((user) => {
                return <h1>{user.name}</h1>;
            })}
        </div>
    );
}

export default Users;