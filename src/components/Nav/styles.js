import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Image = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Div = styled.div`
  padding: 30px 0px 30px 30px;
`;

export const DivInput = styled.div`
  margin-right: -40px;
  padding: 30px;

  @media screen and (max-width: 420px) {
    margin-right: -55px;
  }

  @media screen and (max-width: 320px) {
    margin-right: -85px;
  }
`;

export const Button = styled.div`
  color: #767676;
  margin-top: 8px;
  margin-right: 20px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  border: none;
  background: transparent;
  outline: none;

  @media screen and (max-width: 320px) {
    color: #767676;
    margin-top: 8px;
    margin-right: 50px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    border: none;
    background: transparent;
    outline: none;
  }
`;

export const InputContainer = styled.div`
  align-items: center;
  position: relative;
  width: 224px;
`;

export const Input = styled.input`
  background: #f3f7fa;
  padding: 20px;
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 15px;

  &:hover {
    border: none;
  }

  &:focus {
    border: none;
    outline: none !important;
  }

  @media screen and (max-width: 420px) {
    width: 220px;
  }

  @media screen and (max-width: 320px) {
    width: 190px;
  }
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f152d;
  margin-left: 50px;
  text-transform: uppercase;

  @media screen and (max-width: 900px) {
    margin-top: 10px;
    font-size: 1rem;
    margin-left: 30px;
  }
`;
