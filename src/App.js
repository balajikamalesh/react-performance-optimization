import React, { Suspense } from 'react';
import react from 'react';
import './App.css';

import Page1 from './components/Page1';

const Page2Lazy = React.lazy(() => import('./components/Page2'));
const Page3Lazy = React.lazy(() => import('./components/Page3'));

class App extends react.Component {
  constructor(){
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  }
  
  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render(){
    if(this.state.route === 'page1'){
      return <Page1 onRouteChange={this.onRouteChange}/>
    } else if(this.state.route === 'page2') {
      return <Suspense fallback={<div>Loading....</div>}>
          <Page2Lazy onRouteChange={this.onRouteChange}/>
        </Suspense>
    } else if(this.state.route === 'page3'){
      return <Suspense fallback={<div>Loading....</div>}>
        <Page3Lazy onRouteChange={this.onRouteChange}/>
      </Suspense>
    }
  }
}

export default App;
