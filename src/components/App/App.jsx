import user from 'data/user.json';
import friends from 'data/friends.json';
import statisticalData from 'data/data.json';
import transactions from 'data/transaction.json';

import { Container } from 'components/Container/Container';
import { Statistics } from 'components/Statistics/Statistics';
import { Profile } from 'components/Profile/Profile';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { FriendList } from 'components/FriendList/FriendList';

export const App = () => {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
