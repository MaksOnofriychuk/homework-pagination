import React, { useState } from "react";
import PropTypes from "prop-types";

import User from "./user";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";

const Users = ({ users, onDelete, onBookMark }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const userCrop = paginate(users, currentPage, pageSize);
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Провфессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th colSpan="2" scope="col">
                            Избранное
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {userCrop.map((user) => (
                        <User
                            key={user._id}
                            {...user}
                            onDelete={onDelete}
                            onBookMark={onBookMark}
                            status={user.status}
                        />
                    ))}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onBookMark: PropTypes.func.isRequired
};
export default Users;
