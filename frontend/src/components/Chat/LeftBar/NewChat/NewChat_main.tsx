import React, { useRef, useState } from "react";
import Modal from "react-modal";
import CreateChatControls from "./CreateChatControls";
import { fetchX } from "src/functions/utils";

// DTO
import { ChatInfoDTO, NewChatDTO } from "src/dto/chat-dto";

// CSS
import "src/styles/modals.css";
import "src/styles/buttons.css";
import SelectUsersTable from "./SelectUsersTable";

interface newChatProps {
    selectChat: (chat: ChatInfoDTO) => void;
}

function NewChat(props: newChatProps): React.JSX.Element {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const passwordRef = useRef(null);
    const [newChatDTO, setChatDto] = useState<NewChatDTO>({
        dm: false,
        private: true,
        password: null,
        userIds: [],
    });
    const apiUrl = process.env.REACT_APP_BACKEND_URL + "/chat/create";

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
        setChatDto({
            dm: false,
            private: true,
            password: null,
            userIds: [],
        });
    }

    function setIsPrivate() {
        setChatDto((prevChatDto) => ({
            ...prevChatDto,
            private: !prevChatDto.private,
        }));
    }

    function setIsDm(selectedUsers: number[]) {
        setChatDto((prevChatDto) => ({
            ...prevChatDto,
            dm: selectedUsers.length === 1,
        }));
    }

    function setSelectedUsers(selectedUsers: number[]) {
        setChatDto((prevChatDto) => ({
            ...prevChatDto,
            userIds: selectedUsers,
        }));
    }

    function onSelectedUsersChange(selectedUsers: number[]) {
        setSelectedUsers(selectedUsers);
        setIsDm(selectedUsers);
    }

    async function createChat() {
        if (passwordRef.current) {
            newChatDTO.password = passwordRef.current.value;
        }
        try {
            const newChat: ChatInfoDTO = await fetchX("POST", apiUrl, newChatDTO);
            props.selectChat(newChat);
            closeModal();
        } catch (error) {
            console.error("Error creating chat:", error);
        }
    }

    return (
        <div style={{ width: "100%" }}>
            <button
                className="bigButton"
                style={{
                    fontSize: "2rem",
                    color: "hsl(18, 100%, 50%)",
                    marginBottom: "10px",
                }}
                onClick={openModal}
            >
                +
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="New Chat"
                className="chatModal"
                overlayClassName="chatModalOverlay"
            >
                <SelectUsersTable onSelectedUsersChange={onSelectedUsersChange} />

                <CreateChatControls
                    newChatDTO={newChatDTO}
                    createChat={createChat}
                    setIsPrivate={setIsPrivate}
                    passwordRef={passwordRef}
                />

                <button className="closeX" onClick={closeModal}>
                    ❌
                </button>
            </Modal>
        </div>
    );
}

export default NewChat;
