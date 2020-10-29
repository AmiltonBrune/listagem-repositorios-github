import { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import useWindowSize from '../../hooks/useWindowSize';

import {
  Container,
  Div,
  DivInput,
  Image,
  InputContainer,
  SubContainer,
  Title,
} from './styles';

import User from '../../assets/img/user/profile-user.svg';

function NavDashboard({ title, history }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { width } = useWindowSize();

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/login';
  };

  return (
    <Container>
      {width >= 900 ? <Title>{title}</Title> : ''}

      <SubContainer>
        <DivInput>
          <InputContainer>
            {/* <Input placeholder='Pesquisar' /> */}
            {/* <Button>
              <FaSearch />
            </Button> */}
          </InputContainer>
        </DivInput>
        <Div>
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            style={{ marginRight: 20 }}
          >
            <DropdownToggle
              tag='div'
              data-toggle='dropdown'
              aria-expanded={dropdownOpen}
            >
              <Image src={User} alt='user' />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Opções</DropdownItem>
              <DropdownItem onClick={handleLogout}>Sair</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Div>
      </SubContainer>
    </Container>
  );
}

export default NavDashboard;
