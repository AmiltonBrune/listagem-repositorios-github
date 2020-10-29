import { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

import { Row, Col } from 'reactstrap';

import { NotificationManager } from 'react-notifications';

import {
  Buttom,
  Container,
  ContainerLogin,
  Card,
  GlobalStyles,
  ImageVetor,
  Div,
  Text,
  Input,
} from './styles';

import LoginImage from '../../assets/img/login/login.svg';

import api from '../../services/api';

function User({ history }) {
  const [user, setUser] = useState('');

  const { width } = useWindowSize();

  const createNotification = (type, message) => {
    switch (type) {
      case 'info':
        NotificationManager.info(`${message}`, '', 1000);
        break;
      case 'success':
        NotificationManager.success(`${message}`, '', 1000);
        break;
      case 'warning':
        NotificationManager.warning(`${message}`, '', 2000);
        break;
      case 'error':
        NotificationManager.error(`${message}`, '', 2000);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (user.length === 0) {
      return createNotification(
        'warning',
        'Você precisa informar o seu usuário do GitHub'
      );
    }
    createNotification('info', 'Validando dados...');

    api
      .get(`/${user}`)
      .then((res) => {
        console.log(' res.data -->', res.data);
        localStorage.setItem('followers', res.data.followers);
        localStorage.setItem('following', res.data.following);
        localStorage.setItem('public_repos', res.data.public_repos);
        localStorage.setItem('user', user);
        localStorage.setItem('avatar_url', res.data.avatar_url);
        localStorage.setItem('name', res.data.name);
        localStorage.setItem('login', res.data.login);
        localStorage.setItem('bio', res.data.bio);

        createNotification('success', 'Login com sucesso!');
        history.push('/app');
      })
      .catch(() => {
        createNotification(
          'error',
          'Usuário não existe, verifique se digitou corretamente.'
        );
      });
  };

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Card>
          <Row>
            {width >= 1024 && (
              <Col md='6'>
                <ContainerLogin>
                  <Row>
                    <Col md='12'>
                      <Div>
                        <ImageVetor src={LoginImage} alt='login' />
                      </Div>
                    </Col>
                  </Row>
                </ContainerLogin>
              </Col>
            )}

            <Col>
              <ContainerLogin>
                <Row>
                  <Col md='12'>
                    <Div>
                      <Text>LOGIN</Text>
                    </Div>
                  </Col>
                  <Col md='12'>
                    <Div>
                      <Input
                        placeholder='digite seu usuário do git...'
                        value={user}
                        onChange={handleChange}
                      />
                    </Div>
                  </Col>
                  <Col md='12'>
                    <Div>
                      <Buttom onClick={handleSubmit}>entrar</Buttom>
                    </Div>
                  </Col>
                </Row>
              </ContainerLogin>
            </Col>
          </Row>
        </Card>
      </Container>
      {/* <NotificationContainer /> */}
    </>
  );
}

export default User;
