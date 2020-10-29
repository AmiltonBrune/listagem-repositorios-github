import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 10px;
  margin-left: 15px;
  border-radius: 15px;
  width: 250px;
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
  width: 30px;
  height: 30px;
`;

export const Text = styled.span`
  margin-left: 20px;
`;

export const TextDescription = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
