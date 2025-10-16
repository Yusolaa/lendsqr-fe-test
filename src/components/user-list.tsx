'use client';
import { useEffect, useState, useRef } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { parseISO, format } from 'date-fns';
import { Eye, SlidersHorizontal, UserCheck, UserMinus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import UserListSkeleton from './user-list-skeleton';
import UserFilter from './user-filter';
import './user-list.scss';

interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [showFilter, setShowFilter] = useState(false);
  const usersPerPage = 10;
  const API = process.env.NEXT_PUBLIC_API_URL!;
  const modalRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // Fetch users
  useEffect(() => {
    const cachedUsers = localStorage.getItem('users');
    if (cachedUsers) {
      setUsers(JSON.parse(cachedUsers));
      setLoading(false);
    }

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
        localStorage.setItem('users', JSON.stringify(data));
        console.log('Data refetched');
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
        setLoading(false);
      });
  }, [API]);

  // Close modal on outside click
  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setActiveModal(null);
      }
    };
    document.addEventListener('mousedown', closeModal);
    return () => document.removeEventListener('mousedown', closeModal);
  }, []);

  // Date formatting
  const formatDate = (dateString: string) => {
    if (!dateString) return '—';
    const cleaned = dateString.replace(
      /(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/i,
      '01'
    );
    try {
      const parsed = parseISO(cleaned);
      return format(parsed, 'MMM d, yyyy h:mm a');
    } catch {
      return 'Invalid Date';
    }
  };

  // Handle filter logic
  const handleFilter = (filters: any) => {
    const result = users.filter((u) => {
      return (
        (!filters.organization || u.organization === filters.organization) &&
        (!filters.username ||
          u.username.toLowerCase().includes(filters.username.toLowerCase())) &&
        (!filters.email ||
          u.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (!filters.phoneNumber || u.phoneNumber.includes(filters.phoneNumber)) &&
        (!filters.status || u.status === filters.status)
      );
    });
    setFilteredUsers(result);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setFilteredUsers([]);
    setCurrentPage(1);
  };

  const displayedUsers = filteredUsers.length ? filteredUsers : users;

  // Pagination
  const totalPages = Math.ceil(displayedUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = displayedUsers.slice(indexOfFirstUser, indexOfLastUser);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Navigate to user details
  const viewUserDetails = (user: User) => {
    localStorage.setItem('selectedUser', JSON.stringify(user));
    router.push(`/dashboard/users/${user.id}`);
  };

  if (loading) return <UserListSkeleton />;

  return (
    <div className='table-container'>
      <div className='filter-header'>
        <button
          className='filter-toggle'
          onClick={() => setShowFilter(!showFilter)}
        >
          <SlidersHorizontal size={16} />
          <span>Filter</span>
        </button>
      </div>

      {showFilter && (
        <UserFilter onFilter={handleFilter} onReset={handleReset} />
      )}

      <table className='user-table'>
        <thead>
          <tr>
            <th>ORGANIZATION</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>DATE JOINED</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id} className='data-row'>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td className='trauncate'>{formatDate(user.dateJoined)}</td>
              <td>
                <span className={`status ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
              <td style={{ position: 'relative' }}>
                <BsThreeDotsVertical
                  className='dots'
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModal(activeModal === user.id ? null : user.id);
                  }}
                />
                {activeModal === user.id && (
                  <div ref={modalRef} className='dropdown-modal'>
                    <button onClick={() => viewUserDetails(user)}>
                      <Eye size={15} />
                      View Details
                    </button>
                    <button onClick={() => alert(`Blacklist ${user.username}`)}>
                      <UserMinus size={15} />
                      Blacklist User
                    </button>
                    <button onClick={() => alert(`Activate ${user.username}`)}>
                      <UserCheck size={15} />
                      Activate User
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className='pagination'>
        <p>
          Showing {indexOfFirstUser + 1}–
          {Math.min(indexOfLastUser, displayedUsers.length)} of{' '}
          {displayedUsers.length} users
        </p>

        <div className='page-controls'>
          <button
            className='page-button'
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className='page-button'
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
