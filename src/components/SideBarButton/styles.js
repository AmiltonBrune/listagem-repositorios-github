import styled from 'styled-components';

export const Menu = styled.div`
  @media screen and (max-width: 900px) {
    z-index: 1000;
    padding: 10px;
    position: absolute;
    left: 100%;
    background: #0f152d;
    border-radius: 0 0 10px 0;

    &:focus {
      pointer-events: none;
    }
  }

  &:focus {
    pointer-events: none;
  }
`;

export const Image = styled.img`
  width: 25px;
  height: 25px;

  &:focus {
    pointer-events: none;
  }
`;
