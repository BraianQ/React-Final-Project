import React , { Component} from 'react';
import logo from '../assets/logo.png'
import '../routes/mainView/mainView'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getArtist } from '../JS/actions/index';
import { withRouter } from 'react-router';

class SearchHeader extends Component{
    
    handleChange = (event) => {
        if (event.which === 13){
            this.props.getArtist(event.target.value);
            this.props.history.push('/artistlist');
        }
    }

    render(){
    return(
        <div className="Header">
            <Link className="link" to='/'><h1 className="tittlespori">Spotisearch</h1></Link>
            <img src={logo} className="main-view__logo" alt="logo" />
            <input 
            className="SearchH" 
            placeholder="Search for another artist"
            onKeyPress={this.handleChange}></input>
        </div>
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArtist : data => dispatch(getArtist(data)),
    }
}

export default withRouter(connect(null,mapDispatchToProps)(SearchHeader));