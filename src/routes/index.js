import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home'
import ArtistList from '../components/ArtistList';
import Artist from '../components/Artist';
import  Album  from '../components/Album';

const getRoutes = function() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/artistlist/' component={ArtistList} />
                <Route exact path='/artist/' component={Artist} />
                <Route exact path='/album/' component={Album} />
            </Switch>
        </div>
    )
};

export default getRoutes;
