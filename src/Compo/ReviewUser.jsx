import React from 'react';

const ReviewUser = ({ data }) => {
    const { Photo, email, eventName, name, review } = data
    console.log(Photo);
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={Photo} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {review}
                <br />
                <span className="badge badge-ghost badge-sm"></span>
            </td>
            <td>{eventName}</td>
            <th>
                <h1>{email}</h1>
            </th>
        </tr>
    );
};

export default ReviewUser;