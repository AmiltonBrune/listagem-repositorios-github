import { Row, Col, Badge } from 'reactstrap';

import { Card, Img, Text, TextDescription } from './styles';

function CardMObile({ repository, img }) {
  return (
    <Card>
      <Row>
        <Col md='12'>
          <div className='d-flex justify-content-center mb-4'>
            <Img src={img} alt='ArchiveIcon' />
            <Text>{repository.name}</Text>
          </div>
        </Col>
        <Col md='12'>
          <div className='d-flex justify-content-center  mb-4'>
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
        <Col md='12'>
          <div className='text-center'>
            <TextDescription>{repository.description}</TextDescription>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CardMObile;
