import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import BaseAppBar from '@mui/material/AppBar';
import BaseToolbar from '@mui/material/Toolbar';
import styles from './styles';

const AppBar = styled(BaseAppBar)(styles.appBar)
const Toolbar = styled(BaseToolbar)(styles.toolbar);
const LeftContent = styled('div')(styles.leftItems)
const RightContent = styled('div')(styles.rightItems);
const Logo = styled('span')(styles.logo);
const SubLogo = styled('span')(styles.subLogo);
const Link = styled('span')(styles.link);

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar elevation={0} color="primary">
      <Toolbar>
        <LeftContent onClick={() => navigate('/')}>
          <Logo>
            SKYLINE
          </Logo>
          <SubLogo>
            Server
          </SubLogo>
        </LeftContent>

        <RightContent>
          <Link onClick={() => navigate('/')}>
            Apps
          </Link>
          <Link onClick={() => navigate('/app/create')}>
            Create an app +
          </Link>
        </RightContent>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header