import { useState, useMemo, memo } from 'react';

const initialFriends = [
  'Peter Coul',
  'Ivan Petrov',
  'John Smith',
  'Anna Johnson',
  'Maria Rodriguez',
  'Michael Brown',
  'Olivia Hernandez',
  'Emily Davis',
  'Sofia Wilson',
  'David Martinez',
  'William Jones',
  'Elena Kim',
  'Robert Williams',
  'Sophia Lee',
  'Daniel Garcia',
  'Emma Taylor',
  'James Anderson',
  'Christopher Clark',
  'Isabella Moore',
  'Sergey Ivanov',
  'Matthew Wilson',
  'Alice Garcia',
  'Andrew White',
  'Julia Martin',
  'Olga Popova',
  'Nicole Lewis',
  'Thomas Anderson',
  'Mia Davis',
  'Alexander Johnson',
  'Sophie Miller',
  'Joseph Jackson',
  'Ava Harris',
  'Samuel Moore',
  'Lily Martinez',
  'David Anderson',
  'Grace Thompson',
  'Alexander Brown',
  'Zoe Turner',
  'Elijah White',
  'Hannah Wilson',
  'Benjamin Lee',
  'Ella Davis',
  'William Harris',
  'Madison Clark',
  'Liam Garcia',
  'Avery Jackson',
  'Aiden Wilson',
  'Grace Garcia',
  'Daniel Harris',
  'Aria Smith',
  'Oliver Davis',
  'Leah Martinez',
  'Logan Smith',
  'Abigail Wilson',
  'Samuel Johnson',
  'Sofia Jackson',
  'Lucas Turner',
  'Aria Clark',
  'Aiden Harris',
  'Avery Thompson',
  'Ella Wilson',
  'Sophie Turner',
  'Liam Harris',
  'Zoe Davis',
  'Oliver Williams',
  'Madison Turner',
  'Benjamin Davis',
  'Grace Anderson',
  'Elijah Thompson',
  'Ava Turner',
  'Lucas Anderson',
  'Joseph Turner',
  'Hannah Lewis',
  'Abigail Wilson',
  'Logan Harris',
  'Lily Turner',
  'Ella White',
  'Samuel Davis',
  'Mia Smith',
  'Alexander Smith',
  'Sophia Turner',
  'Liam Davis',
  'Emma Thompson',
  'Grace Garcia',
  'Daniel Turner',
  'Zoe Turner',
  'Ella Davis',
  'Aiden Martinez',
  'Sophie Turner',
  'Lucas Harris',
  'Lily White',
  'Avery Turner',
  'Aria Jackson',
  'Oliver Wilson',
  'Alexander Brown',
];

function Friends() {
  const [count, setCount] = useState(0);
  const [friends] = useState(initialFriends);
  const [filter, setFilter] = useState('');

  const visibleFriends = useMemo(() => {
    console.log('Filter friends ' + Date.now());
    return friends.filter(friend => friend.toLowerCase().includes(filter));
  }, [filter, friends]);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <hr />
      <input onChange={e => setFilter(e.target.value)} value={filter} />
      <ul>
        {visibleFriends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

export default memo(Friends);
