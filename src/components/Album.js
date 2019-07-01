import React , { Component } from 'react';
import SearchHeader from './SearchHeader';
import { connect } from 'react-redux';
import { getCds } from '../JS/actions/index';
import { Link } from 'react-router-dom';

class Album extends Component{

    componentDidMount(){
        this.props.getCds(this.props.token,this.props.location.state.id);
    }

    render(){

        function runMusic(previewUrl) {
            let audio = new Audio();
            audio.src = previewUrl;
            audio.play();
        }

        let albs = [];
        if (this.props.cd) {
            let data = this.props.cd.map((item) => {
            let id = item.id;
            return(
                <div>
                    <div>
                        <h2 onClick={() => runMusic(item.preview_url)}>{item.name}</h2>
                    </div>
                </div>
        );
      });
      for (let i = 0; i < data.length; i = i + 2) {
        let currentElement = data[i];
        let alb = <div  key={i}>
            {currentElement}
          </div>;
        albs.push(alb);
      }
        return(
            <div>
                <SearchHeader />
                <h1>{this.props.location.state.name}</h1>
                <img src={this.props.location.state.img} alt={"img"} />

                <p> Home > Artists > {this.props.location.state.art} > {this.props.location.state.name}</p>

                {albs}
            </div>
        )    
    }
}
}


const mapStateToProps = state => {
    return {
        album : state.albums,
        token : state.token,
        cd : state.cds
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getCds : (token , data) => dispatch(getCds(token,data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Album);