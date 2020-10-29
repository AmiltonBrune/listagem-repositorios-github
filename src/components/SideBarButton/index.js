import { Menu, Image } from './styles';
import MenuButton from '../../assets/img/sidebar/menu.svg';

function SideBarButton() {
  return (
    <Menu>
      <Image src={MenuButton} />
    </Menu>
  );
}

export default SideBarButton;
