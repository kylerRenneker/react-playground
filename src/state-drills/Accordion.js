import React, {Component} from 'react';

class Accordion extends Component {
    static defaultProps = {
        sections: [
            {
                title: '',
                content: ''
            }
        ]   
    }

    state = {
        currentSectionIndex: null
    }

    handleButtonClicked(index) {
        this.setState({currentSectionIndex: index})
    }


    renderContent(section, id, currentSectionIndex) {

        return (
            <li key={id}>
                <button onClick={() => this.handleButtonClicked(id)}>{section.title}</button>
                {(currentSectionIndex === id) && <p>{section.content}</p>}
            </li>
        )
        
    }

    render(){
        const { currentSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul>
                {sections.map((section, id) => this.renderContent(section, id, currentSectionIndex))}
            </ul>
        )
    }


}


export default Accordion