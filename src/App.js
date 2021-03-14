import react, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Page1 from './components/Page1';

class App extends react.Component {
  constructor(){
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  }
  
  onRouteChange = (route) => {
    if(route === 'page1'){
      this.setState({route: route});
    } else if(route === 'page2'){
      import('./components/Page2').then(page2 => {
        this.setState({route: route, component: page2.default});
      })
    } else if(route === 'page3'){
      import('./components/Page3').then(page3 => {
        this.setState({route: route, component: page3.default});
      })
    }
  }

  render(){
    if(this.state.route === 'page1'){
      return <Page1 onRouteChange={this.onRouteChange}/>;
    } else {
      return <this.state.component onRouteChange={this.onRouteChange}/>
    }
  }
}

export default App;
