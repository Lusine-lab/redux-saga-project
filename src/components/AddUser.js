import {useState} from "react";
import {addUsersAction, getUsers} from "../redux/actions";
import {useDispatch} from "react-redux";

function Users() {
    // const users = useSelector((state) => state.user.users);
    const [addUser, setAddUser] = useState({
        id: Date.now(),
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    });


    //
    // const arrKeys = Object.keys(users ? users[0] : {})
    // const arrValues = Object.values(users ? users[0] : {})
    //
    // console.log('users1111', users);
    // console.log('arrKeys1111', arrKeys);
    // console.log('arrValues1111', arrValues);

    const dispatch = useDispatch();
    const addUserHandler = (e) => {
        dispatch(addUsersAction(addUser));
    }

    const handleChange = (e) => {
        console.log(11111111111111, e.target.value)
        let value = e.target.value
        let data = e.target.getAttribute("data-id")
        setAddUser(prev => {
            return {
                ...prev, [data]: value
            }
        })
    }

    return (
        <div className="w-50 mx-auto">
            <input type="text" className="form-control mb-3" value={addUser.name} placeholder="Name" data-id="name"
                   onChange={handleChange}/>
            <input type="text" className="form-control mb-3" value={addUser.username} data-id="username"
                   placeholder="User name" onChange={handleChange}/>
            <input type="text" className="form-control mb-3" value={addUser.email} placeholder="Email"
                   onChange={handleChange}/>
            <div>
                <h2>Address</h2>
                <input type="text" className="form-control mb-3" value={addUser.address.street} placeholder="Street"
                       onChange={handleChange}/>
                <input type="text" className="form-control mb-3" value={addUser.address.suite} placeholder="Suite"
                       onChange={handleChange}/>
                <input type="text" className="form-control mb-3" value={addUser.address.city} placeholder="City"
                       onChange={handleChange}/>
                <input type="text" className="form-control mb-3" value={addUser.address.zipcode} placeholder="Zipcode"
                       onChange={handleChange}/>
            </div>

            <input type="text" className="form-control mb-3" value={addUser.phone} placeholder="Phone"
                   onChange={handleChange}/>
            <input type="text" className="form-control mb-3" value={addUser.website} placeholder="Website"
                   onChange={handleChange}/>
            <div>
                <h2>Company</h2>
                <input type="text" className="form-control mb-3" value={addUser.company.name} placeholder="Company Name"
                       data-id="company.name" onChange={handleChange}/>
                <input type="text" className="form-control mb-3" value={addUser.catchPhrase} placeholder="catch Phrase"
                       onChange={handleChange}/>
                <input type="text" className="form-control mb-3" value={addUser.bs} placeholder="bs"
                       onChange={handleChange}/>
            </div>
            <br/>
            <button className="btn btn-primary" onClick={addUserHandler}>Add user</button>
        </div>
    );
}

export default Users;