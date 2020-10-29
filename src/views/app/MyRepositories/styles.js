import styled from 'styled-components';

export const Container = styled.div`
  height: 80vh;
  padding: 20px;
`;

export const Card = styled.div`
  width: 99%;
  margin-bottom: 20px;
  padding: 30px;
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 15px;
  cursor: pointer;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */

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

export const Link = styled.a`
  color: #222;
  text-decoration: none !important;

  &:link {
    text-decoration: none !important;
  }
`;

export const TextDescription = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
