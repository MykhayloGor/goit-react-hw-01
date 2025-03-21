import clsx from 'clsx';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
    <ul className={s.friendsList}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <FriendListItem 
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

