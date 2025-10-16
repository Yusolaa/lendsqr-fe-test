import { FaUsers, FaUserCheck, FaUserTimes, FaPiggyBank } from 'react-icons/fa';
import UserList from '@/components/user-list';
import './users.scss';

export default function UserPage() {
  return (
    <div className='users-page'>
      <h2 className='title'>Users</h2>

      <div className='stats-cards '>
        <div className='card'>
          <FaUsers className='icon purple' />
          <p>USERS</p>
          <h3>2,453</h3>
        </div>
        <div className='card'>
          <FaUserCheck className='icon blue' />
          <p>ACTIVE USERS</p>
          <h3>2,453</h3>
        </div>
        <div className='card'>
          <FaUserTimes className='icon orange' />
          <p>USERS WITH LOANS</p>
          <h3>12,453</h3>
        </div>
        <div className='card'>
          <FaPiggyBank className='icon pink' />
          <p>USERS WITH SAVINGS</p>
          <h3>102,453</h3>
        </div>
      </div>

      <UserList />
    </div>
  );
}
