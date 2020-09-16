import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import statistics from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const App = () => (
  <>
    <Profile {...user} />

    <Statistics title={'Upload stats'} statistics={statistics} />

    <FriendList friends={friends} />

    <TransactionHistory transactions={transactions} />
  </>
);

export default App;
