import React from 'react';
class TheDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = { dateTime : new Date() };
        // console.log(constructor);
    }
    componentDidMount() {
        // console.log('componentDidMount')
        this.interval = setInterval(() => {
            this.setState({dateTime: new Date()})
            // console.log('setInterval')
        }, 1000)
    }

    compenentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        // console.log('render')
        return <div>{this.state.dateTime.toLocaleString()}</div>  
    }
}

export default TheDate