import {Link} from "react-router-dom";
import LeaderBoardWolf from "./LeaderBoardWolf";
import UserProfile from "./UserProfile";

function Leaderboard() {
    return (
        <div className="sections-container">
            <div className="section" id="header">
                <div className={"pongers-logo"}>
                    <Link className={"link"} to="/home">Pongers</Link><br/>
                </div>
                <ul className={"upper-links"}>
                    <li>
                        <Link className={"link"} to="/leaderboard">Leaderboard</Link>
                    </li>
                    <li>
                        <Link className={"link"} to="/game">Game</Link>
                    </li>
                    <li>
                        <Link className={"link"} to="/chat">Chat</Link>
                    </li>
                </ul>
            </div>
            <div className="section" id="right-bar">Right Bar</div>
            <div className="section" id="center">
                <div>Leaderboard
                     <LeaderBoardWolf n={5} />
                </div>
            </div>
            <div className="section" id="left-bar">
                <div>User Profile
                    <UserProfile userId={1} />
                </div>
            </div>
            <div className="section" id="footer">Footer</div>
        </div>
    );
}

export default Leaderboard;
