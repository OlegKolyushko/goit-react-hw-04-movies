import React, {Component} from 'react';

const AsyncComponent = loader => {
    return class asyncComponent extends Component{
state = {
    component: null,
}
componentDidMount() {
    loader().then((module) => this.setState({component: module.default}));
}
render() {
    const {component: LoadedCoponent} = this.state;
    return (
        LoadedCoponent && <LoadedCoponent/>
    )
}
    }
};

export default AsyncComponent;