import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/system';
import { ActionTypes, appSelector } from '../../redux';
import AppCard from './app-card';
import styles from './styles';

const Container = styled('div')(styles.container);
const Header = styled('span')(styles.header);

const Apps: React.FC = () => {
  const dispatch = useDispatch();
  const appState = useSelector(appSelector);

  console.log(appState.apps);

  const renderApps = appState.apps.map(a => (
    <AppCard
      key={a._id}
      app={a}
      navigateTo={() => null}
    />
  ));

  useEffect(() => {
    dispatch({
      type: ActionTypes.GET_APPS,
    });
  }, []);

  return (
    <Container>
      <Header>
        Apps
      </Header>
      {renderApps}
    </Container>
  );
};

export default Apps;
