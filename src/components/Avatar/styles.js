import styled from 'styled-components';

export const Header = styled.header`
  background: #0f152d;
  padding: 3em 0.5em;
  text-align: center;
  border-radius: 15px 15px 0px 0px;

  @media screen and (max-width: 900px) and (min-width: 420px) {
    padding: 3em 0.5em;
    position: relative;
  }
`;

export const Text = styled.h3`
  margin-top: 10px;
  color: #fff;
`;

export const TextBio = styled.p`
  margin-left: 40px;
  margin-top: 10px;
  color: #fff;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Div = styled.div`
  padding: 10px;
  max-width: 240px;
`;

export const Image = styled.img`
  width: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 900px) and (min-width: 420px) {
    width: 100px;
  }
`;
