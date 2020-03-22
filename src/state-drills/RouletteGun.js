import React from 'react';

export default class RouletteGun extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }

    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
      }

    handlePullTrigger = () => {
        // const bullets = this.props.bulletInChamber
        this.setState({
             spinningTheChamber: true
        })
        setTimeout(() => {
            console.log('trigger pulled')
            const chamberNum = Math.ceil(Math.random()* this.props.bulletInChamber)
            console.log(chamberNum)

            this.setState({
                chamber:chamberNum,
                spinningTheChamber: false
            })
            console.log(this.props.bulletInChamber)

        }, 2000);
    
        // console.log(this.props.bulletInChamber)
        // if (Math.random()*bullets < 1) {
        //     this.setState()
        // }

    }

    renderDisplay() {
        if (this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...';
        } else if (this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!'
        } else {
            return `you're safe`
        }
    }
    render() {


        

        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handlePullTrigger}>Pull the trigger</button>
            </div>
        )
    }
}