import React , { Component } from 'react';
import Header from '../components/Header';
import { obtainToken , getArtist } from '../JS/actions/index';
import { connect } from 'react-redux';

class Home extends Component{

    componentDidMount(){
        let token = "BQA33Y-gL5MDgyhipSdZW02uDsPWke1F_x9IoBBIyfnZ7_wCBLuYtrHcPaLdDpZCO2g9ldlsEwbdf7NDUJXsVNTiy4ptaSZ0LrWaxs1pEZpoglYt4RZsGHfyRZ-DbNqNP2-ycC4PxfJDwBD0U2YBUvxjazBEqV9nMWcui5E8VXhruZ1NZ4mg";
        this.props.obtainToken(token);
    }

    handleChange = (event) => {
        if (event.which === 13){
            this.props.getArtist(event.target.value);
            this.props.history.push('/artistlist');
        }
    }

    render(){
        return(
            <div className="Home">
                <Header />
                <h1>Welcome to Spotisearch</h1>
                <p>Search your favorite songs over spotify, just enter an artist's name in the following
                    search box and enjoy
                </p>
                <input 
                className="inputArt"
                onKeyPress={this.handleChange}
                placeholder="Type the name of your favorite artist"></input>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        obtainToken : data => dispatch(obtainToken(data)),
        getArtist : data => dispatch(getArtist(data)),
    }
}

export default connect(null, mapDispatchToProps)(Home);