import { useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Badge } from 'reactstrap';
import ClipLoader from 'react-spinners/ClipLoader';

import useWindowSize from '../../../hooks/useWindowSize';

import Nav from '../../../components/Nav';
import CardMobile from '../../../components/CardMobile';

import api from '../../../services/api';

import { Container, Card, Img, Text, Link, TextDescription } from './styles';

import ArchiveIcon from '../../../assets/img/app/archive.svg';

function MyRepositories() {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(true);

  const { width } = useWindowSize();

  useEffect(() => {
    const user = localStorage.getItem('user');

    api.get(`/${user}/repos`).then((res) => {
      setRepositories(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Nav title={'Meus Repositórios'} />
      <Row>
        <Col>
          <Container>
            <div className='d-flex justify-content-center'>
              <ClipLoader size={60} color={'#5a5df6'} loading={loading} />
            </div>
            <PerfectScrollbar
              options={{ suppressScrollX: true, wheelPropagation: false }}
            >
              {repositories &&
                repositories.map((repository) => (
                  <Link
                    href={`${repository.html_url}`}
                    target='_blank'
                    rel='noreferrer'
                    key={repository.id}
                  >
                    {width < 768 ? (
                      <CardMobile repository={repository} img={ArchiveIcon} />
                    ) : (
                      <Card>
                        <div className='d-fle justify-content-center align-items-center'>
                          <Row>
                            <Col md='4'>
                              <Img src={ArchiveIcon} alt='ArchiveIcon' />
                              <Text>{repository.name}</Text>
                            </Col>
                            <Col md='4'>
                              <div>
                                <Badge
                                  style={{
                                    fontSize: 16,
                                    background: '#5a5df6',
                                  }}
                                >
                                  {repository.language}
                                </Badge>
                              </div>
                            </Col>
                            <Col md='4'>
                              <TextDescription>
                                {repository.description}
                              </TextDescription>
                            </Col>
                          </Row>
                        </div>
                      </Card>
                    )}
                  </Link>
                ))}
            </PerfectScrollbar>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default MyRepositories;
