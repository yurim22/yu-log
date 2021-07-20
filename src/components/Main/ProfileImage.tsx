import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
// import Profile from '../../../public/yurim.jpg';

const PROFILE_IMAGE_LINK = '<https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fbearshit_&psig=AOvVaw2p-YHBiqC7fVoMbAL4sWds&ust=1626825929920000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMiGqYKt8PECFQAAAAAdAAAAABAD>';
const PROFILE_IMAGE_PATH = '/assets/profile.jpg';

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`;

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_PATH} alt="Profile Image" />;
};

export default ProfileImage;

