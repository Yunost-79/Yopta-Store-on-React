import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './style.scss';

const MyProfile = ({ userProfileData }) => {
  const [isProductLoading, setIsProductLoading] = useState(false);

  const avatarImg = 'https://source.boringavatars.com/beam';


  console.log(userProfileData);

  return (
    <div className="profile_container">
      <div className="profile_left_side">
        <div className="profile_imaga">
          {}
          <img src={avatarImg} alt="" />
        </div>
      </div>
      <div className="profile_right_side"></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userProfileData: state.users.userLoginData,
});

export default connect(mapStateToProps)(MyProfile);
