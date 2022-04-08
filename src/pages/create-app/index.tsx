import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { createApp } from '../../redux';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import styles from './styles';

const Container = styled('div')(styles.container);
const Header = styled('span')(styles.header);
const Form = styled('div')(styles.form);
const Input = styled(TextField)(styles.input);
const ButtonContainer = styled('div')(styles.buttonContainer);

const CreateApp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [app, setApp] = useState({
    name: '',
    type: '',
    repo: '',
    branch: '',
    port: '',
  });

  const onChange = (e: any, field: string): void => {
    setApp({ ...app, [field]: e.target.value });
  };

  const navigateToApp = (_id: string) => {
    navigate(`/app/${_id}`);
  };

  const onCreateApp = () => {
    dispatch(createApp({ data: app, navigate: navigateToApp }));
  };

  return (
    <Container>
      <Header>
        Create an App
      </Header>
      <Form>
        <Input
          variant='outlined'
          label='Name'
          size='small'
          value={app.name}
          onChange={e => onChange(e, 'name')}
          autoComplete='off'
        />
        <Input
          select
          variant='outlined'
          size='small'
          label='Application Type'
          value={app.type}
          onChange={e => onChange(e, 'type')}
        >
          <MenuItem key='node' value='node'>
            Node.js
          </MenuItem>
          <MenuItem key='react' value='react'>
            React.js
          </MenuItem>
        </Input>
        {app.type === 'node' && (
          <Input
            variant='outlined'
            label='Port'
            size='small'
            type='number'
            value={app.port}
            onChange={e => onChange(e, 'port')}
            autoComplete='off'
          />
        )}
        <Input
          variant='outlined'
          label='Repository'
          size='small'
          value={app.repo}
          onChange={e => onChange(e, 'repo')}
          autoComplete='off'
        />
        <Input
          variant='outlined'
          label='Branch'
          size='small'
          value={app.branch}
          onChange={e => onChange(e, 'branch')}
          autoComplete='off'
        />
        <ButtonContainer>
          <Button
            variant='contained'
            disableElevation
            onClick={onCreateApp}
          >
            Create
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default CreateApp;