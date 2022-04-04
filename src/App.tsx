import Header from './components/header';
import Router from './routing';
import './App.css';

function App() {
  const renderApp = () => {
    return (
      <div className="App">
        <Header/>
        <div className='App-main'>
          <Router />
        </div>
        {/* <Loading />
        <Message />
        <CreateTicket /> */}
      </div>
    );
  };

  return renderApp();
}

export default App;
