import React , { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Input from '../components/Input';
import { connectAPI , getArtistList } from '../JS/actions/index';

class ArtistList extends Component{

    componentDidMount(){
        let url = `https://api.spotify.com/v1/`
        const search = `search?q=${this.props.artist}&type=artist`;
        let finalurl = url + search;
        this.props.connectAPI(finalurl , getArtistList);
    }

    render(){        
        const art = this.props.listofartist.map( (item) => item.name)
        return(
            <div>
                <Header />
                <h2>Artist :</h2>
                <p>You are currently searching : "{this.props.artist}"</p>
                <Input />
                <p>Home > Artist</p>
                {art}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        artist : state.inputArtist,
        listofartist : state.artistslist
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        connectAPI: (finalurl, callback) => dispatch(connectAPI(finalurl, callback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList);