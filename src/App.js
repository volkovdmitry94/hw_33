import './App.css';
import React, {Component} from 'react';

const friends = [
    'friend1', 'friend2', 'friend3', 'friend4', 'friend5', 'friend6', 'friend7', 'friend8', 'friend9'
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {src: null};
    }

    handleChange = (event) => {
        if (this.state.src) {
            this.setState({...this.state, src: null});
        } else {
            this.setState({...this.state, src: event.target.src});
        }
    }

    renderLarge() {
        return (
            <div className='picture' onClick={this.handleChange}>
                <img className='pictureLarge' src={this.state.src} alt='friend'/>
            </div>
        );
    }

    renderSmall() {
        return (
            <div className='picture' onClick={this.handleChange}>
                {friends.map((item, index) =>
                    <img className='pictureSmall' key={index} src={require(`./images/${item}.jpg`)} alt={item}/>)}
            </div>
        );
    }

    render() {
        return (this.state.src) ? this.renderLarge() : this.renderSmall();
    }
}

export default App;
