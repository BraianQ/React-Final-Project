import React , { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { getArtistList , getArtist} from '../JS/actions/index';

class ArtistList extends Component{

    componentDidMount(){
        if (this.props.artist !== '')
            this.props.getArtistList(this.props.token,this.props.artist);
    }

    componentWillUpdate(prevProps){
        if (this.props.artist !== prevProps.artist)
            this.props.getArtistList(this.props.token,prevProps.artist);
    }

    handleChange = (event) => {
        if (event.which === 13){
            this.props.getArtist(event.target.value);
        }
    }

    render(){
    let data;
    let arts = [];
    if (this.props.listofid) {
        data= this.props.listofid.map((item) => {
        let artist = this.props.listofartist[item];
        let alt = `Image of ${artist.name}`
        let id = artist.id;
        return(
            <div className="Artist">
                <div className="ArtistTitle">
                    <Link to={{pathname : '/artist' , state:{ id: id ,}}}>
                        <h2>{artist.name}</h2>
                    </Link>
                </div>
                <div>
                    <img className="ArtistImg" src={artist.img} alt={alt}/>
                </div>
            </div>
        );
      });
      for (let i = 0; i < data.length; i = i + 2) {
        let currentElement = data[i];
        let art = <div className="ArtistContainer"  key={i}>
            {currentElement}
          </div>;
        arts.push(art);
      }
    }
        return(
            <div>
                <Header />
                <h2>Artist :</h2>
                <p>You are currently searching : "{this.props.artist}"</p>
                <input 
                className="inputArt"
                onKeyPress={this.handleChange}
                placeholder="Type the name of your favorite artist"></input>
                <p>Home > Artist</p>
                {arts}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listofid : state.artistsids,
        artist : state.inputArtist,
        listofartist : state.artistslist,
        token : state.token
    }
}
const mapDispatchToProps = ( dispatch ) =>{
    return {
        getArtist : data => dispatch(getArtist(data)),
        getArtistList: (token , art) => dispatch(getArtistList(token,art))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ArtistList);