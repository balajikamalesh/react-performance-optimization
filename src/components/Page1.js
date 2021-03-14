import logo from '../logo.svg';
import '../App.css';

const Page1 = ({onRouteChange}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button className="disabled">Page1</button>
      <button onClick={() => onRouteChange('page2')}>Page2</button>
      <button onClick={() => onRouteChange('page3')}>Page3</button>     
    </div>
  );
}

export default Page1;
