import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Router from './routing';
import './App.css';

function App() {
  const renderApp = () => {
    return (
      <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
        <div className="App">
          <Header/>
          <div className='App-main'>
            <Router />
          </div>
          {/* <Loading />
          <Message />
          <CreateTicket /> */}
        </div>
      </BrowserRouter>
    );
  };

  return renderApp();
}

export default App;
