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
        currentSectionIndex: 0
    }

    handleButtonClicked(index) {
        this.setState({currentSectionIndex: index})
    }

    renderButtons() {

        console.log(this.props.sections);
        return this.props.sections.map((section, index) => 
            <li key = {index}>
                <button onClick = {() => this.handleButtonClicked(index)}>{section.title}</button>
                <p>{section.content}</p>
            </li>
        )
    }

    // renderContent() {
    //     const currentSection = this.props.sections[this.state.currentSectionIndex]
    //     return (
            
    //     )
    // }

    render(){
        return (
            <ul>
                {this.renderButtons()}
                {/* {this.renderContent()} */}
            </ul>
        )
    }


}


export default Accordion