import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { App } from '../../types';
import styles from './styles';

interface Props {
  app: App;
  addEnvVar(varString: string): void;
}

const EnvVarContainer = styled('div')(styles.envVarContainer);
const DetailKey = styled('span')(styles.detailKey);
const AddEnvVar = styled('div')(styles.addEnvVar);
const Input = styled(TextField)(styles.addEnvVarInput);
const EnvVarsContainer = styled('div')(styles.envVars);
const EnvVar = styled('div')(styles.envVar);
const AddButton = styled(Button)(styles.btn);

const EnvVars: React.FC<Props> = ({ addEnvVar, app }) => {
  const [envVarToAdd, setEnvVarToAdd] = React.useState<string>('');

  const addEnvVarHandler = () => {
    if (!envVarToAdd) return;
    addEnvVar(envVarToAdd);
    setEnvVarToAdd('');
  };

  const renderEnvVars = (app.envVars || []).map(e => (
    <EnvVar key={e._id}>
      <code>{e.envVar}</code>
    </EnvVar>
  ));

  return (
    <EnvVarContainer>
      <DetailKey>
        Environment Variables
      </DetailKey>
      <AddEnvVar>
        <Input
          placeholder='FOO=bar'
          value={envVarToAdd}
          onChange={e => setEnvVarToAdd(e.target.value)}
          size='small'
        />
        <AddButton
          variant='outlined'
          onClick={addEnvVarHandler}
        >
          Add
        </AddButton>
      </AddEnvVar>
      <EnvVarsContainer>
        {renderEnvVars}
      </EnvVarsContainer>
    </EnvVarContainer>
  );
};

export default EnvVars;
