import React, {Component} from 'react';
import './App.css';
import apiService from './common/services/ApiService';

class App extends Component {
    click = () => {
        apiService.simpleApi().then((res) => {
           console.log(res);
        }).catch((error) => {
            console.log(error);
        });
    };

    render() {
        return (
            <button className='btn btn-danger' onClick={this.click}>Testing</button>
        );
    }
}

export default App;
