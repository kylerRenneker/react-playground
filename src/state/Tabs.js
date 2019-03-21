import React, {Component} from 'react';

class Tabs extends Component {
    static defaultProps = { tabs: [] };

    state = {
        currentTabIndex: 0
    }

    handleButtonClick(index) {
       this.setState({currentTabIndex: index})
    }

    renderButtons() {
        return this.props.tabs.map((tab, index) => 
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {tab.name}
            </button>
        )
    }
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        console.log(this.props.tabs)
        return (
           <div className='content'>
                {currentTab.content}
           </div>
        )
    }
    render(){
        return(
        <div>
            {this.renderButtons()}
            {!!this.props.tabs.length && this.renderContent()}
        </div> 
        )       
    }
}





// const Tabs = (props) => {
//     console.log(props.tabs)
    
//     function renderButtons() {
//         return props.tabs.map((tab, index) => 
//             <button key={index}>
//                 {tab.name}
//             </button>
//         )
//     }

//     function renderContent(){
//         const currentTab = props.tabs[0]
//         console.log(props.tabs)
//         return (
//            <div className='content'>
//                 {currentTab.content}
//            </div>
//         )
//     }

//     return (
//         <div>
//             {renderButtons()}
//             {props.tabs.length && renderContent()}
//         </div>
//     )
// }

export default Tabs