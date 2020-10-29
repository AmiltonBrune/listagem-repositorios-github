import NavDashboard from '../../../components/Nav';
import { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ClipLoader from 'react-spinners/ClipLoader';

import useWindowSize from '../../../hooks/useWindowSize';

import { Container, Card, Img, Text, Link } from './styles';

import api from '../../../services/api';

function Following() {
  const [loading, setLoading] = useState(true);
  const [repositories, setRepositories] = useState();
  const { width } = useWindowSize();

  useEffect(() => {
    const user = localStorage.getItem('user');

    api.get(`/${user}/following`).then((res) => {
      setRepositories(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <NavDashboard title={'Seguindo'} />
      <Row>
        <Col>
          <Container>
            <div className='d-flex justify-content-center'>
              <ClipLoader size={60} color={'#5a5df6'} loading={loading} />
            </div>
            <PerfectScrollbar
              options={{ suppressScrollX: true, wheelPropagation: false }}
            >
              <Row>
                {repositories &&
                  repositories.map((repository) => (
                    <>
                      {width === 1366 ? (
                        <Col md='4'>
                          <Link
                            href={`${repository.html_url}`}
                            target='_blank'
                            rel='noreferrer'
                            key={repository.id}
                          >
                            <Card>
                              <Row>
                                <Col md='12'>
                                  <div className='d-flex justify-content-center'>
                                    <Img
                                      src={repository.avatar_url}
                                      alt='ArchiveIcon'
                                    />
                                  </div>
                                  <div className='d-flex justify-content-center'>
                                    <Text>{repository.login}</Text>
                                  </div>
                                </Col>
                              </Row>
                            </Card>
                          </Link>
                        </Col>
                      ) : (
                        <Col sm='4' md='6' lg='6' xs='12' xl='3'>
                          <Link
                            href={`${repository.html_url}`}
                            target='_blank'
                            rel='noreferrer'
                            key={repository.id}
                          >
                            <Card>
                              <Row>
                                <Col md='12'>
                                  <div className='d-flex justify-content-center'>
                                    <Img
                                      src={repository.avatar_url}
                                      alt='ArchiveIcon'
                                    />
                                  </div>
                                  <div className='d-flex justify-content-center'>
                                    <Text>{repository.login}</Text>
                                  </div>
                                </Col>
                              </Row>
                            </Card>
                          </Link>
                        </Col>
                      )}
                    </>
                  ))}
              </Row>
            </PerfectScrollbar>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default Following;
