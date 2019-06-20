import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home'
import ArtistList from '../components/ArtistList';

const getRoutes = function() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/artistlist/' component={ArtistList} />
            </Switch>
        </div>
    )
};

export default getRoutes;
