import React, {Component} from 'react';
import './App.css';
import apiService from './common/services/ApiService';
import Headers from './component/Header/Header';
import Login from "./component/Authentication/Login/Login";

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


           <Headers />
        );
    }
}

export default App;
