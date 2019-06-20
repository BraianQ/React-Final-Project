import React, { Component } from 'react';

class HomeView extends Component {
    render() {
        return (
            <article className="home-view">
                <h1>Welcome to Spotisearch</h1>
                <p>Search your favorite songs over spotify, just enter an artist's name in the following
                    search box and enjoy
                </p>
                <input type="text" placeholder="Type the name of your favorite artist"></input>
            </article>
        );
    }
}

export default HomeView;
