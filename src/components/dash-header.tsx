import { Search, Bell, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import './dash-header.scss';

interface HeaderProps {
  userName?: string;
  userAvatar?: string;
}

export function Header({ userName = 'Adedeji', userAvatar }: HeaderProps) {
  return (
    <header className='app-header'>
      <div className='header-content'>
        {/* Search Form */}
        <form className='search-form'>
          <div className='search-wrapper'>
            <input
              type='search'
              placeholder='Search for anything'
              className='search-input'
            />
            <button type='submit' className='search-button'>
              <Search className='search-icon' />
            </button>
          </div>
        </form>

        {/* Right Side Actions */}
        <div className='header-actions'>
          {/* Docs Link */}
          <a href='#' className='docs-link'>
            Docs
          </a>

          {/* Notification Bell */}
          <button className='notification-button'>
            <Bell className='bell-icon' />
          </button>

          {/* User Profile */}
          <div className='user-profile'>
            <div className='user-avatar'>
              {userAvatar ? (
                <Image
                  src={userAvatar}
                  alt={userName}
                  width={40}
                  height={40}
                  className='avatar-image'
                />
              ) : (
                <div className='avatar-placeholder'>
                  {userName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <span className='user-name'>{userName}</span>
            <ChevronDown className='dropdown-icon' />
          </div>
        </div>
      </div>
    </header>
  );
}
