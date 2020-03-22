import React from 'react';

export default class Bomb extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState({
                count: this.state.count +1
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    render() {
        console.log(this.state.count)
        let bombStatus;
        if (this.state.count < 8) {
            if (this.state.count % 2 === 0) {
                bombStatus = 'tick'
            } else {
                bombStatus = 'tock'
            }
        } else {
            bombStatus = 'BOMB!!!'
        }

      
        return (
            <div>
                <p>{bombStatus}</p>
            </div>
        )
    }
}