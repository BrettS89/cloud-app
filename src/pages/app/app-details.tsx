import { FC } from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { App } from '../../types';
import styles from './styles';

interface Props {
  app: App;
  deployApp(): void;
}

const DetailsContainer = styled('div')(styles.detailsContainer);
const DetailRow = styled('div')(styles.detailRow);
const DetailKey = styled('span')(styles.detailKey);
const DetailValue = styled('span')(styles.detailValue);
const ButtonContainer = styled('div')(styles.buttonContainer);

const AppDetails: FC<Props> = ({ app, deployApp }) => {
  const renderDeploying = () => {
    return (
      <Button
        variant='contained'
        disableElevation
        onClick={deployApp}
        disabled={app.status === 'Deploying...'}
      >
        Deploy
      </Button>
    );
  };

  return (
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
      <DetailRow>
        <DetailKey>
          Status:
        </DetailKey>
        <DetailValue>
          {app.status}
        </DetailValue>
      </DetailRow>
      <ButtonContainer>
        {renderDeploying()}
      </ButtonContainer>
    </DetailsContainer>
  );
};

export default AppDetails;