import React, {useEffect, useState} from "react";
import {UserProfileDTO} from "user-dto";
import SocialActionBar from "./SocialActionBar";

interface userProfileProp {
  id: number;
  
}

function UserProfile(props: userProfileProp): React.JSX.Element {
  const [userProfile, setUserProfile] = useState <UserProfileDTO>();

  useEffect(() => {
    void fetchAndSet(props.id, setUserProfile);
  }, [props.id]);

  if (!userProfile)
    return (
        <div>
          <br/>User not found.
        </div>
    );
  return (
      <div>
          <img
              src={userProfile.avatarURL}
              alt="User Avatar"
              style={{ width: '200px', height: 'auto' }}
          />
          <br/>
          Name: {userProfile.name}
          <br/>
          Rank: {userProfile.rank}
          <br/>
          mmr: {userProfile.mmr}
          <br/>
          Matches: {userProfile.matches}
          <br/>
          winrate: {userProfile.winrate}
          <br/>
          {userProfile.online ? 'online' : 'offline'}
          <br/>
          <br/>
          <SocialActionBar userId={1} otherId={0} />
        </div>
  );
}

const fetchAndSet = async (userId: number, setter: React.Dispatch<React.SetStateAction<UserProfileDTO>>): Promise<void> => {
  try {
    const apiUrl = process.env.REACT_APP_BACKEND_URL + `user/profileid=${userId}`;
	const response = await fetch(apiUrl);
    const data = await response.json();
    setter(data);
  } catch (error) {
    console.error('Error fetching user/profile:', error);
    setter(null);
  }
}

export default UserProfile;
