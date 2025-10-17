import { Search, Bell, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import './dash-header.scss';

interface HeaderProps {
  userName?: string;
  userAvatar?: string;
}

export function HeaderComponent({
  userName = 'Lendsqr',
  userAvatar,
}: HeaderProps) {
  return (
    <header className='app-header'>
      <div className='header-content'>
        <form className='search-bar'>
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
          <a href='#' className='docs-link'>
            Docs
          </a>
          <button className='notification-button'>
            <Bell className='bell-icon' />
          </button>
          <div className='user-profile'>
            <div className='user-avatar'>
              {userAvatar ? (
                <Image
                  src={userAvatar}
                  alt={userName}
                  width={30}
                  height={30}
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
