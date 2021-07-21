import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage from 'components/Main/ProfileImage';

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #38a2ff 0%, #ffde15 100%);
  color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;
  font-family: 'Otomanopee One', sans-serif;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  font-family: 'Otomanopee One', sans-serif;
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;
  font-family: 'Otomanopee One', sans-serif;
`;

const Introduction: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />

        <div>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Junior Frontend Developer Yurim.👋🏻</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
