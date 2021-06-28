import user from '../../data/user.json';
import friends from '../../data/friends.json';
import statisticalData from '../../data/statistical-data.json';
import transactions from '../../data/transaction.json';

import { Statistics } from '../Statistics/Statistics';
import { Profile } from '../Profile/Profile';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { FriendList } from '../FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
