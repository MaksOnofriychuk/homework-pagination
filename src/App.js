import "./App.css";
import Api from "./API";
import React, { useState } from "react";
import Users from "./components/users";
import Search from "./components/search";

function App() {
    const [users, setUsers] = useState(Api.users.fetchAll());
    const filterUsers = (usersId) => {
        const newUsers = users.filter((user) => user._id !== usersId);
        setUsers(newUsers);
    };
    const changeBookmark = (Id) => {
        const newUsers = [...users];
        const user = newUsers.find((us) => us._id === Id);
        user.status = !user.status;
        setUsers(newUsers);
    };
    return (
        <div>
            <Search length={users.length} />
            <Users
                users={users}
                onDelete={filterUsers}
                onBookMark={changeBookmark}
            />
        </div>
    );
}

export default App;
