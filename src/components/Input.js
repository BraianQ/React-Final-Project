import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getArtist } from '../JS/actions/index';
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

    changeState = () => {
        this.setState({moveon:false});
    }

    render(){
        if (this.state.moveon === true){
            if (this.state.moveprev === false){
                this.changeState()}}
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
    }
}

export default connect(null,mapDispatchToProps)(Input);
