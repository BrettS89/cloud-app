import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { App } from '../../types';
import styles from './styles';

interface Props {
  app: App;
}

const Container = styled('div')(styles.appCard);
const LeftSection = styled('div')(styles.appCardLeft);
const AppName = styled('div')(styles.appCardName);
const AppType1 = styled('div')(styles.appType);
const AppType2 = styled('span')(styles.appCardEnvs);
const AppTypeContainer = styled('div')(styles.typeContainer)

const AppCard: FC<Props> = ({ app }) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(`/app/${app._id}`)}
    >
      <LeftSection>
        <CloudRoundedIcon style={{ fontSize: 28, marginRight: 15, color: '#5367FF' }} />
        <AppName>
          <span>
            {app.name}
          </span>
        </AppName>
        <AppTypeContainer>
          <AppType1>
            Application type: 
          </AppType1>
          <AppType2>
           {app.type}
          </AppType2>
        </AppTypeContainer>
        
      </LeftSection>
      <div>
        <MoreHorizRoundedIcon style={{ fontSize: 28 }} />
      </div>
    </Container>
  );
};

export default AppCard;