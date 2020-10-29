import { Card } from './styles';

function Main({ children }) {
  return (
    <main>
      <Card>{children}</Card>
    </main>
  );
}

export default Main;
