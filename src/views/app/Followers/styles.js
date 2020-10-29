import styled from 'styled-components';

export const Container = styled.div`
  height: 80vh;
  padding: 20px;

  @media screen and (width: 1366px) {
    padding: 10px;
  }

  @media screen and (width: 1024px) {
    padding: 10px;
  }

  @media screen and (max-width: 900px) and (max-width: 768px) {
    padding: 10px;
  }

  @media screen and (max-width: 700px) and (min-width: 540px) {
    padding: 10px;
  }

  @media screen and (max-width: 500px) and (min-width: 420px) {
    padding: 10px;
  }

  @media screen and (max-width: 415px) and (min-width: 280px) {
    padding: 10px;
  }

  @media screen and (width: 1440px) {
    padding: 10px;
  }

  @media screen and (width: 1280px) {
    padding: 10px;
  }
`;

export const Card = styled.div`
  margin-top: 10px;
  margin-left: 15px;
  border-radius: 15px;
  width: 300px;
  margin-bottom: 20px;
  padding: 30px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background: #fff;
  background-clip: border-box;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  cursor: pointer;

  &:hover {
    background: #0f152d;
    color: #fff;
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Text = styled.h5`
  margin-top: 20px;
`;

export const Link = styled.a`
  color: #222;
  text-decoration: none !important;

  &:link {
    text-decoration: none !important;
  }
`;
