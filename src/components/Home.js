import React , { Component } from 'react';
import Header from '../components/Header';
import Input from './Input';

class Home extends Component{

    render(){
        return(
            <div className="Home">
                <Header />
                <h1>Welcome to Spotisearch</h1>
                <p>Search your favorite songs over spotify, just enter an artist's name in the following
                    search box and enjoy
                </p>
                <Input/>
            </div>
        )
    }
}


export default Home;