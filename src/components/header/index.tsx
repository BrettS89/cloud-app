import { styled } from '@mui/system';
import BaseAppBar from '@mui/material/AppBar';
import BaseToolbar from '@mui/material/Toolbar';
import styles from './styles';

const AppBar = styled(BaseAppBar)(styles.appBar)
const Toolbar = styled(BaseToolbar)(styles.toolbar);
const LeftContent = styled('div')(styles.leftItems)
const Logo = styled('span')(styles.logo);
const SubLogo = styled('span')(styles.subLogo);

const Header = (props: any) => {
  return (
    <AppBar elevation={0} color="primary">
      <Toolbar>
        <LeftContent onClick={() => props.history.push('/')}>
          <Logo>
            SKYLINE
          </Logo>
          <SubLogo>
            Server
          </SubLogo>
        </LeftContent>

        {/* {loggedIn()}
        {notLoggedIn()} */}
        
      </Toolbar>
    </AppBar>
  );
};

export default Header