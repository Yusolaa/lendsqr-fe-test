import React from 'react';
import './user-list-skeleton.scss';

export default function UserListSkeleton() {
  return (
    <div className='skeleton-table'>
      {[...Array(10)].map((_, i) => (
        <div className='skeleton-row' key={i}>
          {[...Array(6)].map((_, j) => (
            <div className='skeleton-cell' key={j}></div>
          ))}
        </div>
      ))}
    </div>
  );
}
