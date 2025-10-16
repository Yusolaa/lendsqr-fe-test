'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, StarOff, User } from 'lucide-react';
import UserDetailsSkeleton from '@/components/user-details-skeleton';
import './user-details.scss';

interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
  userTier?: number;
  fullName?: string;
  accountBalance?: string;
  accountNumber?: string;
  bankName?: string;
  bvn?: string;
  gender?: string;
  maritalStatus?: string;
  children?: string;
  residence?: string;
  levelOfEducation?: string;
  employmentStatus?: string;
  sector?: string;
  duration?: string;
  officeEmail?: string;
  monthlyIncome?: string;
  loanRepayment: number;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  guarantor?: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
  guarantor2?: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}

const UserDetails = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('general');
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem('selectedUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      router.push('/dashboard/users');
    }
  }, [router]);

  if (!user) {
    return (
      <div className='loading'>
        <UserDetailsSkeleton />
      </div>
    );
  }

  const userTier = 1;
  const maxTier = 3;

  return (
    <div className='user-details-page'>
      {/* Back Button */}
      <button className='back-button' onClick={() => router.back()}>
        <ArrowLeft size={16} />
        Back to Users
      </button>

      {/* Page Header */}
      <div className='page-header'>
        <h1 className='page-title'>User Details</h1>
        <div className='action-buttons'>
          <button className='blacklist-btn'>BLACKLIST USER</button>
          <button className='activate-btn'>ACTIVATE USER</button>
        </div>
      </div>

      {/* User Summary Card */}
      <div className='user-summary-card'>
        <div className='user-info-section'>
          <div className='user-avatar'>
            <User size={40} />
          </div>
          <div className='user-basic-info'>
            <h2 className='user-name'>{user.fullName || user.username}</h2>
            <p className='user-id'>{user.organization}</p>
          </div>
          <div className='divider'></div>
          <div className='user-tier'>
            <p className='tier-label'>User&apos;s Tier</p>
            <div className='tier-stars'>
              {[...Array(maxTier)].map((_, index) =>
                index < userTier ? (
                  <Star key={index} size={16} fill='#E9B200' color='#E9B200' />
                ) : (
                  <StarOff key={index} size={16} color='#E9B200' />
                )
              )}
            </div>
          </div>
          <div className='divider'></div>
          <div className='user-balance'>
            <h3 className='balance-amount'>
              {user.accountBalance || '₦200,000.00'}
            </h3>
            <p className='bank-info'>
              {user.accountNumber || '9912345678'}/
              {user.bankName || 'Providus Bank'}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className='tab-navigation'>
          <button
            className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            General Details
          </button>
          <button
            className={`tab-button ${
              activeTab === 'documents' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('documents')}
          >
            Documents
          </button>
          <button
            className={`tab-button ${activeTab === 'bank' ? 'active' : ''}`}
            onClick={() => setActiveTab('bank')}
          >
            Bank Details
          </button>
          <button
            className={`tab-button ${activeTab === 'loans' ? 'active' : ''}`}
            onClick={() => setActiveTab('loans')}
          >
            Loans
          </button>
          <button
            className={`tab-button ${activeTab === 'savings' ? 'active' : ''}`}
            onClick={() => setActiveTab('savings')}
          >
            Savings
          </button>
          <button
            className={`tab-button ${activeTab === 'app' ? 'active' : ''}`}
            onClick={() => setActiveTab('app')}
          >
            App and System
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'general' && (
        <div className='details-content'>
          {/* Personal Information */}
          <section className='info-section'>
            <h3 className='section-title'>Personal Information</h3>
            <div className='info-grid'>
              <div className='info-item'>
                <p className='info-label'>FULL NAME</p>
                <p className='info-value'>{user.fullName || user.username}</p>
              </div>
              <div className='info-item'>
                <p className='info-label'>PHONE NUMBER</p>
                <p className='info-value'>{user.phoneNumber}</p>
              </div>
              <div className='info-item'>
                <p className='info-label'>EMAIL ADDRESS</p>
                <p className='info-value'>{user.email}</p>
              </div>
              <div className='info-item'>
                <p className='info-label'>BVN</p>
                <p className='info-value'>{user.bvn || '07060780922'}</p>
              </div>
              <div className='info-item'>
                <p className='info-label'>GENDER</p>
                <p className='info-value'>{user.gender || 'Female'}</p>
              </div>
              <div className='info-item'>
                <p className='info-label'>MARITAL STATUS</p>
                <p className='info-value'>{user.maritalStatus || 'Single'}</p>
              </div>
              <div className='info-item'>
                <p className='info-label'>CHILDREN</p>
                <p className='info-value'>{user.children || 'None'}</p>
              </div>
              <div className='info-item'>
                <p className='info-label'>TYPE OF RESIDENCE</p>
                <p className='info-value'>
                  {user.residence || "Parent's Apartment"}
                </p>
              </div>
            </div>
          </section>

          {/* Education and Employment */}
          <section className='info-section'>
            <h3 className='section-title'>Education and Employment</h3>
            <div className='info-grid'>
              <div className='info-item'>
                <p className='info-label'>LEVEL OF EDUCATION</p>
                <p className='info-value'>{user.levelOfEducation || 'B.Sc'}</p>
              </div>
              <div className='info-item'>
                <p className='info-label'>EMPLOYMENT STATUS</p>
                <p className='info-value'>
                  {user.employmentStatus || 'Employed'}
                </p>
              </div>
              <div className='info-item'>
                <p className='info-label'>SECTOR OF EMPLOYMENT</p>
                <p className='info-value'>{user.sector || 'FinTech'}</p>
              </div>
              <div className='info-item'>
                <p className='info-label'>DURATION OF EMPLOYMENT</p>
                <p className='info-value'>{user.duration || '2 years'}</p>
              </div>
              <div className='info-item'>
                <p className='info-label'>OFFICE EMAIL</p>
                <p className='info-value'>
                  {user.officeEmail || 'grace@lendsqr.com'}
                </p>
              </div>
              <div className='info-item'>
                <p className='info-label'>MONTHLY INCOME</p>
                <p className='info-value'>
                  {user.monthlyIncome || '₦200,000.00 - ₦400,000.00'}
                </p>
              </div>
              <div className='info-item'>
                <p className='info-label'>LOAN REPAYMENT</p>
                <p className='info-value'>{user.loanRepayment || '40,000'}</p>
              </div>
            </div>
          </section>

          {/* Socials */}
          <section className='info-section'>
            <h3 className='section-title'>Socials</h3>
            <div className='info-grid'>
              <div className='info-item'>
                <p className='info-label'>TWITTER</p>
                <p className='info-value'>{user.twitter || '@grace_effiom'}</p>
              </div>
              <div className='info-item'>
                <p className='info-label'>FACEBOOK</p>
                <p className='info-value'>{user.facebook || 'Grace Effiom'}</p>
              </div>
              <div className='info-item'>
                <p className='info-label'>INSTAGRAM</p>
                <p className='info-value'>
                  {user.instagram || '@grace_effiom'}
                </p>
              </div>
            </div>
          </section>

          {/* Guarantor */}
          <section className='info-section'>
            <h3 className='section-title'>Guarantor</h3>
            <div className='info-grid'>
              <div className='info-item'>
                <p className='info-label'>FULL NAME</p>
                <p className='info-value'>
                  {user.guarantor?.fullName || 'Debby Ogana'}
                </p>
              </div>
              <div className='info-item'>
                <p className='info-label'>PHONE NUMBER</p>
                <p className='info-value'>
                  {user.guarantor?.phoneNumber || '07060780922'}
                </p>
              </div>
              <div className='info-item'>
                <p className='info-label'>EMAIL ADDRESS</p>
                <p className='info-value'>
                  {user.guarantor?.email || 'debby@gmail.com'}
                </p>
              </div>
              <div className='info-item'>
                <p className='info-label'>RELATIONSHIP</p>
                <p className='info-value'>
                  {user.guarantor?.relationship || 'Sister'}
                </p>
              </div>
            </div>
          </section>

          {/* Second Guarantor */}
          <section className='info-section'>
            <div className='info-grid'>
              <div className='info-item'>
                <p className='info-label'>FULL NAME</p>
                <p className='info-value'>
                  {user.guarantor2?.fullName || 'Debby Ogana'}
                </p>
              </div>
              <div className='info-item'>
                <p className='info-label'>PHONE NUMBER</p>
                <p className='info-value'>
                  {user.guarantor2?.phoneNumber || '07060780922'}
                </p>
              </div>
              <div className='info-item'>
                <p className='info-label'>EMAIL ADDRESS</p>
                <p className='info-value'>
                  {user.guarantor2?.email || 'debby@gmail.com'}
                </p>
              </div>
              <div className='info-item'>
                <p className='info-label'>RELATIONSHIP</p>
                <p className='info-value'>
                  {user.guarantor2?.relationship || 'Sister'}
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab !== 'general' && (
        <div className='details-content'>
          <p className='empty-state'>No {activeTab} information available</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
