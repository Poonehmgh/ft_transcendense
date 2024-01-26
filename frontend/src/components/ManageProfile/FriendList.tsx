import React, { useEffect, useState } from "react";
import { fetchGetSet } from "src/functions/fetchers";
import { blockUser, removeFriend } from "src/functions/userActions";

// DTO
import { IdAndNameDTO } from "user-dto";

// CSS
import "src/styles/style.css";
import "src/styles/manageProfile.css";

function FriendList() {
    const [group, setGroup] = useState([]);
    const apiUrl = process.env.REACT_APP_BACKEND_URL + "/user/friends";

    useEffect(() => {
        fetchGetSet<IdAndNameDTO[]>(apiUrl, setGroup);
    }, [apiUrl]);

    function handleRemoveFriend(index: number) {
        if (window.confirm(`Remove friend ${group[index].name}?`)) {
            if (removeFriend(group[index].id)) {
                alert("Friend removed");
                fetchGetSet<IdAndNameDTO[]>(apiUrl, setGroup);
            } else {
                alert("Error removing friend");
            }
        }
    }

    function handleSendMsg(id: number) {
        console.log("Mock execute send msg to user with id ", id);
    }

    function handleBlockUser(index: number) {
        if (window.confirm(`Unfriend and block ${group[index].name}?`)) {
            if (blockUser(group[index].id)) {
                alert("Removed from friends and blocked");
                fetchGetSet<IdAndNameDTO[]>(apiUrl, setGroup);
            } else {
                alert("Error unfriending / blocking");
            }
        }
    }

	if (!group) return <div className="p">Loading data...</div>;
	if (group.length === 0) return <div className="p">No friends. Don't be shy!</div>;
	
    return (
                <table className="modalUserList">
                    <tbody>
                        {group.map((element, index) => (
                            <tr key={index}>
                                <td>{element.name}</td>
                                <td>
                                    <button
                                        className="contactsButton"
                                        onClick={() => handleSendMsg(element.id)}
                                    >
                                        ✉️
                                    </button>
                                    <button
                                        className="contactsButton"
                                        onClick={() =>
                                            handleRemoveFriend(index)
                                        }
                                    >
                                        ❌
                                    </button>
                                    <button
                                        className="contactsButton"
                                        onClick={() => handleBlockUser(index)}
                                    >
                                        ⛔
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
}

export default FriendList;
