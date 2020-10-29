import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   body,
html {
  height: 100%;
}

body {
  background: #fff;
  margin: 0;
  font-family: 'Titillium Web', sans-serif;
  color: #020203;
  padding-left: 300px;
}

a:link {
  text-decoration: none !important;
}

main {
  padding: 0px 30px 30px 30px;
  position: relative;
  height: 93.5vh;
}

.activeContainer {
  display: flex;
  align-items: center;
  margin-bottom: 50%;
}

.activeItem {
  display: flex;
  align-items: center;
}

.activeContainer img {
  padding-left: 10px;
}

.textContainer h1 {
  margin-bottom: 0px;
}

.card {
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}

.active_sidebar {
   text-decoration: none !important;
   color: #fff
}

.active_sidebar:hover{
   color: #5a5df6;
}
/* .active_sidebar:active {
  color: #5a5df6 !important;
} */


.space-between {
  align-content: space-between;
}

.justify-content {
  justify-content: center;
}

.mb-1 {
  margin-bottom: 1px;
}

.mb-2 {
  margin-bottom: 2px;
}

.mb-3 {
  margin-bottom: 3px;
}

.mb-4 {
  margin-bottom: 4px;
}

.mb-5 {
  margin-bottom: 5px;
}

.br-15 {
  border-radius: 15px !important;
  border: none !important;
}

@media screen and (max-width: 900px) and (min-width: 420px) {
  body {
    padding-left: 0;
  }

  main {
   z-index: -1;
    padding: 20px 20px 20px 20px;
  }
}

@media screen and (max-width: 414px) {
  body {
    padding-left: 0;
  }

  main {
   z-index: -1;
    padding: 20px 20px 20px 20px;
  }
}
`;
