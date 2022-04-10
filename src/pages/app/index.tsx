import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/system';
import { ActionTypes, appSelector, addEnvVar as addEnvVarAction } from '../../redux';
import api from '../../api';
import AppDetails from './app-details';
import EnvVars from './env-vars';
import styles from './styles';

const Container = styled('div')(styles.container);
const ContentContainer = styled('div')(styles.contentContainer);
const Header = styled('span')(styles.header);

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

  const addEnvVar = (varText: string): void => {
    dispatch(addEnvVarAction({
      appId: app!._id,
      envVar: varText,
    }));
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
        <AppDetails
          app={app}
          deployApp={deployApp}
          isDeploying={isDeploying}
        />
        <EnvVars
          addEnvVar={addEnvVar}
          app={app}
        />
      </ContentContainer>
      
    </Container>
  );
};

export default App;
