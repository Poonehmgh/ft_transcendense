import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "src/components/Header/Header_main";
import Home from "src/components/Home";
import Leaderboard from "src/components/LeaderBoard/Leaderboard_main";
import AllUsers from "src/components/AllUsers/AllUsers_main";
import Game from "src/components/Game/Game";
import Chat from "src/components/Chat/Chat_main";
import ErrorPage from "src/components/ErrorPage";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/home" Component={Home} />
                    <Route path="/leaderboard" Component={Leaderboard} />
                    <Route path="/allusers" Component={AllUsers} />
                    <Route path="/game" Component={Game} />
                    <Route path="/chat" Component={Chat} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
