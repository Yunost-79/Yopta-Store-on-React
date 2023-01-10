import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import MapProfile from '../../components/MapProfile';
import Loader from '../../components/UI/Loader';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './style.scss';

const MyProfile = ({ userProfileData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [changeIconPassword, setChangeIconPassword] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');

  const randomAvatarImg = 'https://source.boringavatars.com/beam';

  const userData =  JSON.parse(localStorage.getItem('user_data'));
  const data = userData.profileUserData;

  useEffect(() => {
    setIsLoading(true);
    setLatitude(userData.userGeoData.lat);
    setLongitude(userData.userGeoData.lon);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);


  const toUpperCaseFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleChangePasswords = () => {
    setChangeIconPassword(!changeIconPassword);
  };

  return (
    <div className="profile_container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2 className="profile_container_title">My Yopta profile</h2>
          <div className="profile_container_content">
            <div className="profile_left_side">
              <div className="profile_imaga">
                <img src={randomAvatarImg} alt="random avatar" />
              </div>
            </div>
            <div className="profile_right_side">
              <div className="profile_subtitle profile_username">{`Username: ${data.username}`}</div>
              <div className="profile_subtitle profile_firstname_lastname">
                {`Name: ${toUpperCaseFirstLetter(data.name.firstname)} ${toUpperCaseFirstLetter(data.name.lastname)}`}
              </div>

              <div className="profile_subtitle profile_email">{`E-mail: ${data.email}`}</div>
              <div className="profile_subtitle profile_phone_num">{`Phone number: +${data.phone}`}</div>
              <div className="profile_subtitle profile_password">
                <div className="password_item password_title">Password:</div>
                {changeIconPassword ? (
                  <div className="password_item password_show">{data.password}</div>
                ) : (
                  <div className="password_item password_hide">PasswordOff</div>
                )}

                <div className="password_item show_password_icons">
                  {changeIconPassword ? (
                    <VisibilityOffIcon className=" password_icons_item" onClick={handleChangePasswords} />
                  ) : (
                    <VisibilityIcon className="password_icons_item" onClick={handleChangePasswords} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <MapProfile latitude={latitude} longitude={longitude} className="profile_map" />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userProfileData: state.users.userData,
});

export default connect(mapStateToProps)(MyProfile);
