import { Route, Routes } from 'react-router-dom';
import App from '../pages/app';
import Apps from '../pages/apps';
import CreateApp from '../pages/create-app';

export default () => {
  return (
    <Routes>
      <Route path='/app/create' element={<CreateApp />} />
      <Route path='/app/:id' element={<App />} />
      <Route path='/' element={<Apps />} />
    </Routes>
  );
};
