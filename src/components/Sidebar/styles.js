import styled from 'styled-components';

export const Container = styled.header`
  padding: 80px 0px 0px 30px;
  border-radius: 0px 100px 0px 0px;
  height: 100vh;
  background: #162447;

  @media screen and (max-width: 900px) {
    height: 50vh;
  }
`;

export const ContainerT = styled.header`
  height: 100vh;
  background: #162447;
`;

export const Menu = styled.nav`
  background: #0f152d;
  height: 100vh;
  width: 300px;
  position: fixed;
  top: 5px;
  left: 5px;
  bottom: 5px;
  outline: none;
  border-radius: 20px;

  @media screen and (max-width: 900px) and (min-width: 420px) {
    top: 0px;
    left: 0px;
    width: 230px;
    border-radius: 0px;
    box-shadow: 0 0 0 100em rgba(0, 0, 0, 0);
    transform: translate3d(-230px, 0, 0);
    transition: all 0.3s ease-in-out;

    &:focus {
      transform: translate3d(0, 0, 0);
      transition: all 0.3s ease-in-out;
      box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6);
    }
  }

  @media screen and (max-width: 420px) {
    top: 0px;
    left: 0px;
    width: 230px;
    border-radius: 0px;
    box-shadow: 0 0 0 100em rgba(0, 0, 0, 0);
    transform: translate3d(-230px, 0, 0);
    transition: all 0.3s ease-in-out;

    &:focus {
      transform: translate3d(0, 0, 0);
      transition: all 0.3s ease-in-out;
      box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6);
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0.5em 0;
  margin: 0;
`;

export const Item = styled.div`
  margin-bottom: 20px;
  background-image: url(${(props) => props.background});
  padding: 0.5em 1em 0.5em 3em;
  font-size: 20px;
  font-weight: 300;
  background-repeat: no-repeat;
  background-position: left 5px center;
  background-size: auto 20px;
  transition: all 0.15s linear;
  cursor: pointer;

  @media screen and (max-width: 900px) and (min-width: 420px) {
    padding: 1em 1em 1em 3em;
    font-size: 1.0em;
  }

  @media screen and (max-width: 414px) {
    padding: 1em 1em 1em 3em;
    font-size: 1.0em;
  }
`;

export const Text = styled.span`
  color: #fff;

  &:hover {
    color: #5a5df6;
  }

  /* @media screen and (max-width: 900px) and (min-width: 420px) {
    opacity: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.2em 0.5em;
    border-radius: 4px;
    top: 50%;
    left: 80px;
    transform: translate3d(-15px, -50%, 0);
    transition: all 0.15s ease-in-out;

    &:hover {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      top: 50%;
      left: -5px;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-right: 5px solid rgba(0, 0, 0, 0.5);
      transform: translateY(-50%);
    }

    &:before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      top: 50%;
      left: -5px;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-right: 5px solid rgba(0, 0, 0, 0.5);
      transform: translateY(-50%);
    }
  } */
`;
