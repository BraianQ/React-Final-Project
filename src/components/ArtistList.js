import React , { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Input from '../components/Input';

class ArtistList extends Component{

    render(){
        return(
            <div>
                <Header />
                <h2>Artist :</h2>
                <p>You are currently searching : "{this.props.artist}"</p>
                <Input />
                <p>Home > Artist</p>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        artist : state.inputArtist
    }
}

export default connect(mapStateToProps, null)(ArtistList);