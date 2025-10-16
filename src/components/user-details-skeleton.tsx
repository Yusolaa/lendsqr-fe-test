import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './user-details-skeleton.scss';

export default function UserDetailsSkeleton() {
  return (
    <div className='user-details-page'>
      {/* Back Button */}
      <button className='back-button' disabled>
        <ArrowLeft size={16} />
        Back to Users
      </button>

      {/* Page Header */}
      <div className='page-header'>
        <div className='skeleton skeleton-title'></div>
        <div className='action-buttons'>
          <div className='skeleton skeleton-button'></div>
          <div className='skeleton skeleton-button'></div>
        </div>
      </div>

      {/* User Summary Card */}
      <div className='user-summary-card'>
        <div className='user-info-section'>
          <div className='skeleton skeleton-avatar'></div>
          <div className='user-basic-info'>
            <div className='skeleton skeleton-name'></div>
            <div className='skeleton skeleton-text'></div>
          </div>
          <div className='divider'></div>
          <div className='user-tier'>
            <div className='skeleton skeleton-text-small'></div>
            <div className='skeleton skeleton-stars'></div>
          </div>
          <div className='divider'></div>
          <div className='user-balance'>
            <div className='skeleton skeleton-balance'></div>
            <div className='skeleton skeleton-text'></div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className='tab-navigation'>
          {[...Array(6)].map((_, index) => (
            <div key={index} className='skeleton skeleton-tab'></div>
          ))}
        </div>
      </div>

      {/* Tab Content - Skeleton Sections */}
      <div className='details-content'>
        {/* Personal Information Skeleton */}
        <section className='info-section'>
          <div className='skeleton skeleton-section-title'></div>
          <div className='info-grid'>
            {[...Array(8)].map((_, index) => (
              <div key={index} className='info-item'>
                <div className='skeleton skeleton-label'></div>
                <div className='skeleton skeleton-value'></div>
              </div>
            ))}
          </div>
        </section>

        {/* Education and Employment Skeleton */}
        <section className='info-section'>
          <div className='skeleton skeleton-section-title'></div>
          <div className='info-grid'>
            {[...Array(7)].map((_, index) => (
              <div key={index} className='info-item'>
                <div className='skeleton skeleton-label'></div>
                <div className='skeleton skeleton-value'></div>
              </div>
            ))}
          </div>
        </section>

        {/* Socials Skeleton */}
        <section className='info-section'>
          <div className='skeleton skeleton-section-title'></div>
          <div className='info-grid'>
            {[...Array(3)].map((_, index) => (
              <div key={index} className='info-item'>
                <div className='skeleton skeleton-label'></div>
                <div className='skeleton skeleton-value'></div>
              </div>
            ))}
          </div>
        </section>

        {/* Guarantor Skeleton */}
        <section className='info-section'>
          <div className='skeleton skeleton-section-title'></div>
          <div className='info-grid'>
            {[...Array(4)].map((_, index) => (
              <div key={index} className='info-item'>
                <div className='skeleton skeleton-label'></div>
                <div className='skeleton skeleton-value'></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
