import React from 'react'
import './Accordion.css'

export default class Accordion extends React.Component {

    state = {
        currentIndex: null,

    }

    static defaultProps = {
        sections: []
    };

    handleButtonClick(index) {
        this.setState({
            currentIndex: index
        })
        console.log('button clicked', index)
    }

    renderContent() {
        const currentTab = this.props.sections[this.state.currentIndex]
        console.log(currentTab)
        if (this.state.currentIndex !== null) {
            return (
                <p>{currentTab.content}</p>
            )
        }
    }

    render() {
        return (
            <ul>
                {this.props.sections.map((section, index) => (
                    <li key={index} className='Accordion__item'>
                        <button onClick={() => this.handleButtonClick(index)}>{section.title}</button>
                        {this.state.currentIndex === index && this.renderContent()}
                    </li>
                ))}
            </ul>
        )
    }
}