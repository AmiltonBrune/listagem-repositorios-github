import styled, { createGlobalStyle } from 'styled-components';

export const Buttom = styled.button`
  outline: none;
  text-transform: uppercase;
  font-weight: 500;
  background: #0f152d;
  border: none;
  border-radius: 10px;
  width: 300px;
  height: 60px;
  color: #fff;

  &:hover {
    background: #5a5df6;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

export const ContainerLogin = styled.div`
  margin-top: 5%;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f2f5fc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 80%;
  height: 80%;
  background: #fff;
  position: fixed;
  border-radius: 15px;
  padding: 120px 50px 50px 50px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const ImageVetor = styled.img`
  margin-top: 30px;
  width: 500px;

  @media screen and (max-width: 1366px) {
    width: 300px;
  }
`;

export const Div = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

export const Text = styled.span`
  text-align: center;
  color: #0f152d;
  font-weight: bold;
  font-size: 30px;
`;

export const Input = styled.input`
  display: block;
  width: 300px;
  height: 60px !important;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #162447;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #162447;
  }
`;

export const GlobalStyles = createGlobalStyle`
   body{
      margin: 0px ;
      top: 50% ;
      left: 50% ;
   }
`;
