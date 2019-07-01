import React , { Component } from 'react';
import Header from './SearchHeader';
import { connect } from 'react-redux';
import { getAlbumList } from '../JS/actions';
import { Link } from 'react-router-dom';
import '../routes/mainView/mainView.css'

class Artist extends Component{

    componentDidMount(){
        this.props.getAlbumList(this.props.token,this.props.location.state.id);
    }

    render(){
        let albs = [];
        if (this.props.album) {
            let data = this.props.album.map((item) => {
            let alt = `Image of ${item.name}`
            let id = item.id;
            return(
                <div className="Alb" >
                    <div>
                        <Link to={{pathname : '/album' , state:{ id: id , name : item.name , img:item.img , art:this.props.artists[this.props.location.state.id].name}}}>
                        <h2 >{item.name}</h2>
                        </Link>
                    </div>
                    <div>
                        <img className="ArtistImg" src={item.img} alt={alt}/>
                    </div>
                </div>
        );
      });
      for (let i = 0; i < data.length; i = i + 2) {
        let currentElement = data[i];
        let alb = <div className="AlbumContainer"  key={i}>
            {currentElement}
          </div>;
        albs.push(alb);
      }
    }
        return(
            <div className="Album">
                <Header />
                <h1>{this.props.artists[this.props.location.state.id].name}</h1>
                <img src={this.props.artists[this.props.location.state.id].img} alt="img" />
                <h2>{this.props.artists[this.props.location.state.id].genre}</h2>

                <p> Home > Artists > {this.props.artists[this.props.location.state.id].name} </p>

                {albs}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        artists : state.artistslist,
        token : state.token,
        album : state.albums
    }
}

const mapDispatchToProps = ( dispatch ) =>{
    return {
        getAlbumList : (token, data)=> dispatch(getAlbumList(token,data))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Artist);