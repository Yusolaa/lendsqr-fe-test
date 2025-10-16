'use client';
import { useState } from 'react';
import './user-filter.scss';

interface Filter {
  onFilter: (filters: any) => void;
  onReset: () => void;
}

export default function UserFilter({ onFilter, onReset }: Filter) {
  const [filters, setFilters] = useState({
    organization: '',
    username: '',
    email: '',
    date: '',
    phoneNumber: '',
    status: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilter = () => onFilter(filters);
  const handleReset = () => {
    setFilters({
      organization: '',
      username: '',
      email: '',
      date: '',
      phoneNumber: '',
      status: '',
    });
    onReset();
  };

  return (
    <div className='filter-panel'>
      <div className='filter-field'>
        <label>Organization</label>
        <select
          name='organization'
          value={filters.organization}
          onChange={handleChange}
        >
          <option value=''>Select</option>
          <option value='Lendsqr'>Lendsqr</option>
          <option value='Paystack'>Paystack</option>
          <option value='Flutterwave'>Flutterwave</option>
          <option value='Ironun'>Ironun</option>
          <option value='Techify'>Techify</option>
        </select>
      </div>

      <div className='filter-field'>
        <label>Username</label>
        <input
          type='text'
          name='username'
          value={filters.username}
          onChange={handleChange}
          placeholder='User'
        />
      </div>

      <div className='filter-field'>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={filters.email}
          onChange={handleChange}
          placeholder='Email'
        />
      </div>

      <div className='filter-field'>
        <label>Date</label>
        <input
          type='date'
          name='date'
          value={filters.date}
          onChange={handleChange}
        />
      </div>

      <div className='filter-field'>
        <label>Phone Number</label>
        <input
          type='text'
          name='phoneNumber'
          value={filters.phoneNumber}
          onChange={handleChange}
          placeholder='Phone Number'
        />
      </div>

      <div className='filter-field'>
        <label>Status</label>
        <select name='status' value={filters.status} onChange={handleChange}>
          <option value=''>Select</option>
          <option value='Active'>Active</option>
          <option value='Inactive'>Inactive</option>
          <option value='Pending'>Pending</option>
          <option value='Blacklisted'>Blacklisted</option>
        </select>
      </div>

      <div className='filter-actions'>
        <button className='reset-btn' onClick={handleReset}>
          Reset
        </button>
        <button className='filter-btn' onClick={handleFilter}>
          Filter
        </button>
      </div>
    </div>
  );
}
