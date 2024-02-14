import React from "react";
import ChatList from "./ChatList";

// DTO
import { Chat_ChatUsersDTO, Chat_CompleteDTO } from "src/dto/chat-dto";

// CSS
import "src/styles/chat.css";
import "src/styles/style.css";
import ChatOptions from "./ChatOptions";

interface chatsMainProps {
    activeChat: Chat_CompleteDTO | null;
    onSelectChat: (chat: Chat_ChatUsersDTO) => void;
    chats: Chat_ChatUsersDTO[];
}

function Chats(props: chatsMainProps): React.JSX.Element {
    return (
        <div style={{ width: "100%" }}>
            <ChatList
                activeChat={props.activeChat}
                onSelectChat={(chat) => props.onSelectChat(chat)}
                chats={props.chats}
            />
            <ChatOptions activeChat={props.activeChat} />
        </div>
    );
}
export default Chats;
