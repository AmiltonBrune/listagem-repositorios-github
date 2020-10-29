import { Badge } from 'reactstrap';
import useWindowSize from '../../hooks/useWindowSize';

import { Header, Image, Text, TextBio, Div } from './styles';

function Logo({ values }) {
  const { width } = useWindowSize();

  return (
    <Header>
      <Image src={values.avatar_url} alt='logo' />
      <Text>{values.name}</Text>
      <Badge
        style={{
          borderRadius: 10,
          fontSize: 16,
          marginTop: 10,
          background: '#5a5df6',
        }}
      >
        {values.login}
      </Badge>
      <Div>{width >= 900 && <TextBio>{values.bio}</TextBio>}</Div>
    </Header>
  );
}

export default Logo;
