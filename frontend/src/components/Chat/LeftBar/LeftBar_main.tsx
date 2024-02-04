import React from "react";
import NewChat from "./NewChat";
import ChatList from "./ChatList";

// DTO
import { ChatInfoDTO } from "src/dto/chat-dto";

// CSS
import "src/styles/chat.css";
import "src/styles/style.css";

interface leftBarProps {
    selectedChat: ChatInfoDTO | null;
    selectChat: React.Dispatch<React.SetStateAction<ChatInfoDTO | null>>;
    chats: ChatInfoDTO[];
}

function LeftBar(props: leftBarProps): React.JSX.Element {
    return (
        <div className="sideBar">
            <NewChat selectChat={(chat) => props.selectChat(chat)} />

            <ChatList
                selectedChat={props.selectedChat}
                onSelectChat={(chat) => props.selectChat(chat)}
                chats={props.chats}
            />
        </div>
    );
}
export default LeftBar;
