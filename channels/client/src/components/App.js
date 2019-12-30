import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import ChannelCreate from './channels/ChannelCreate';
import ChannelDelete from './channels/ChannelDelete';
import ChannelEdit from './channels/ChannelEdit';
import ChannelList from './channels/ChannelList';
import ChannelShow from './channels/ChannelShow';
import Header from './Header';
import history from '../history';
const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={ChannelList} />
            <Route path='/channels/new' exact component={ChannelCreate} />
            <Route path='/channels/edit/:id' exact component={ChannelEdit} />
            <Route path='/channels/:id' exact component={ChannelShow} />
            <Route
              path='/channels/delete/:id'
              exact
              component={ChannelDelete}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
