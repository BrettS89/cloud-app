import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { ActionTypes, appSelector } from '../../redux';
import api from '../../api';
import styles from './styles';

const Container = styled('div')(styles.container);
const ContentContainer = styled('div')(styles.contentContainer);
const DetailsContainer = styled('div')(styles.detailsContainer);
const Header = styled('span')(styles.header);
const DetailRow = styled('div')(styles.detailRow);
const DetailKey = styled('span')(styles.detailKey);
const DetailValue = styled('span')(styles.detailValue);
const ButtonContainer = styled('div')(styles.buttonContainer);
const EnvVarContainer = styled('div')(styles.envVarContainer);

const App = () => {
  const dispatch = useDispatch();
  const appState = useSelector(appSelector);
  const path = useLocation()
  const appId = path.pathname.split('/')[2]
  const app = appState.apps.find(a => a._id === appId);

  const [isDeploying, setIsDeploying] = useState<boolean>(false);

  const fetchApps = () => {
    dispatch({
      type: ActionTypes.GET_APPS,
    });
  };

  const deployApp = async () => {
    await api
      .service('deployment')
      .create({ appId: app?._id });

    setIsDeploying(true);
    setIsDeploying(false);
  };

  const renderDeploying = () => {
    if (isDeploying) {
      return (
        <span>
          Deploying...
        </span>
      );
    }

    return (
      <Button
        variant='outlined'
        // color='secondary'
        disableElevation
        onClick={deployApp}
      >
        Deploy
      </Button>
    );
  };

  useEffect(() => {
    if (!app) {
      fetchApps();
    }
  }, []);

  return !app ? <></> : (
    <Container>
      <Header>
        {app.name}
      </Header>

      <ContentContainer>
        <DetailsContainer>
          <DetailRow>
            <DetailKey>
              Application type:
            </DetailKey>
            <DetailValue>
              {app.type}
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailKey>
              Github repo:
            </DetailKey>
            <DetailValue>
              {app.repo}
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailKey>
              Branch:
            </DetailKey>
            <DetailValue>
              {app.branch}
            </DetailValue>
          </DetailRow>
          <ButtonContainer>
            {renderDeploying()}
          </ButtonContainer>
        </DetailsContainer>
      
        <EnvVarContainer>
          <DetailKey>
            Environment Variables
          </DetailKey>
        </EnvVarContainer>

      </ContentContainer>
      
    </Container>
  );
};

export default App;
