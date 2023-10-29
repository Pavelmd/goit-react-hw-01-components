import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json'
import { Statistics } from 'components/Statistics/Statistics';
import data from './components/Statistics/data.json';
import { FriendList } from 'components/Friendlist/FriendList';
import friends from './components/Friendlist/friends.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      </App>
  </React.StrictMode>
);