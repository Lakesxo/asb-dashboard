import './App.css';
import Header from './Header';
import Main from './Main';
import Metrics from './Metrics';
import Navigator from './Navigator'

function App() {
  return (
    <div>
      <Header />
      <Navigator />
      <Metrics />
      <Main />
    </div>
  );
}

export default App;