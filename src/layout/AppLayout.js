import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

import { GlobalStyle } from './styles';

function AppLayout({ children, dados }) {
  return (
    <>
      <GlobalStyle />
      <Sidebar dados={dados} />
      <Main>{children}</Main>
    </>
  );
}

export default AppLayout;
