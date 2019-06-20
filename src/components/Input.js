import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getArtist , connectAPI , getArtistList } from '../JS/actions/index';
import { Redirect } from 'react-router-dom';


class Input extends Component{

    constructor(props){
        super(props);
        this.state = {
            moveon: false,
            moveprev : false
        }
    }

    handleChange = (event) => {
        if (event.which === 13){
            this.setState({moveon : true})
            this.props.getArtist(event.target.value);
        }
    }

    componentDidMount(){
        let url = `https://api.spotify.com/v1/`
        const search = `search?q=${this.props.artist}&type=artist`;
        let finalurl = url + search;
        this.props.connectAPI(finalurl , getArtistList);
    }

    render(){
        if (this.state.moveon === true){
            if (this.state.moveprev === false){
                this.setState({moveon:false})}}
        if ( this.state.moveon === true)
           return (
           < Redirect push to='/artistlist/' /> 
           )
        return(
            <input 
                className="inputArt"
                type="text" 
                placeholder="Type the name of your favorite artist"
                onKeyPress={this.handleChange}
            >
            </input>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getArtist : (data) => dispatch(getArtist(data)),
        connectAPI: (finalurl, callback) => dispatch(connectAPI(finalurl, callback))
    }
}

export default connect(null,mapDispatchToProps)(Input);
