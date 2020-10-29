import { Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import useWindowSize from '../../hooks/useWindowSize';
import SideBarButton from '../SideBarButton';

import Avatar from '../Avatar';

import { Container, ContainerT, Item, Menu, Text } from './styles';

import FolderIcon from '../../assets/img/sidebar/folder.svg';
import FollowerIcon from '../../assets/img/sidebar/follower.svg';
import FollowingIcon from '../../assets/img/sidebar/following.svg';
import { useEffect, useState } from 'react';

function SideBar() {
  const [values, setValues] = useState([]);
  const [itens, setItens] = useState([]);
  const { width } = useWindowSize();

  useEffect(() => {
    const followers = localStorage.getItem('followers');
    const following = localStorage.getItem('following');
    const public_repos = localStorage.getItem('public_repos');
    const avatar_url = localStorage.getItem('avatar_url');
    const name = localStorage.getItem('name');
    const login = localStorage.getItem('login');
    const bio = localStorage.getItem('bio');

    setValues({ avatar_url, name, login, bio });
    setItens([
      {
        id: 'repositorios',
        icon: FolderIcon,
        label: 'Repositórios',
        to: '/app/repositorios',
        badge: public_repos,
      },
      {
        id: 'seguindo',
        icon: FollowingIcon,
        label: 'Seguindo',
        to: '/app/seguindo',
        badge: following,
      },
      {
        id: 'seguidores',
        icon: FollowerIcon,
        label: 'Seguidores',
        to: '/app/seguidores',
        badge: followers,
      },
    ]);
  }, []);

  return (
    <Menu tabIndex='0'>
      {width <= 900 ? <SideBarButton /> : ''}
      <Avatar values={values} />
      <Container>
        <PerfectScrollbar
          options={{ suppressScrollX: true, wheelPropagation: false }}
        >
          <div>
            {itens.map((item) => {
              return (
                <NavLink to={item.to} key={item.id}>
                  <Item background={`${item.icon}`} key={item.id}>
                    <Text>{item.label}</Text>
                    <Badge
                      style={{
                        marginLeft: 6,
                        background: '#5a5df6',
                        borderRadius: 7,
                      }}
                    >
                      {item.badge}
                    </Badge>
                  </Item>
                </NavLink>
              );
            })}
          </div>
        </PerfectScrollbar>
      </Container>
      <ContainerT></ContainerT>
    </Menu>
  );
}

export default SideBar;
