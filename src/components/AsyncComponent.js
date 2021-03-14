import react, { Component } from 'react';


//Higher Order Component
export default function asyncComponent(importComponents){
    class AsyncComponent extends Component {
        constructor(props){
            super(props);
            this.state = {
                component: null
            }
        }

        async componentDidMount(){
            const {default: component} = await importComponents();
            this.setState({
                component: component
            })
        }

        render(){
            const Component = this.state.component;
            return Component ? <Component {...this.props}/> : null;
        }
    }
    
    return AsyncComponent;
}
