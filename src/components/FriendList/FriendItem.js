import React from 'react';

import s from './Styles.module.scss';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const statusOnlineClass = isOnline ? s.statusOnline : s.statusOffline;

  return (
    <li key={id} className={s.item}>
      <span className={statusOnlineClass}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
