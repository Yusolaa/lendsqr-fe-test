import * as React from 'react';
import Image from 'next/image';
import Logo from '@/app/assets/lendsqr.svg';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import {
  Briefcase,
  Home,
  Users,
  UserCheck,
  UsersRound,
  HandCoins,
  PiggyBank,
  HandshakeIcon,
  Wallet,
  FileText,
  ClipboardList,
  Building2,
  CoinsIcon,
  Scroll,
  ChartLine,
  Sliders,
  UserCog,
  Settings,
  LogOut,
  ChevronDown,
} from 'lucide-react';
import './app-sidebar.scss';

const navData = {
  main: [
    {
      title: 'Switch Organization',
      icon: Briefcase,
      url: '#',
      hasDropdown: true,
    },
    {
      title: 'Dashboard',
      icon: Home,
      url: '#',
    },
  ],
  customers: [
    {
      title: 'Users',
      icon: Users,
      url: '#',
      isActive: true,
    },
    {
      title: 'Guarantors',
      icon: UsersRound,
      url: '#',
    },
    {
      title: 'Loans',
      icon: HandCoins,
      url: '#',
    },
    {
      title: 'Decision Models',
      icon: HandshakeIcon,
      url: '#',
    },
    {
      title: 'Savings',
      icon: PiggyBank,
      url: '#',
    },
    {
      title: 'Loan Requests',
      icon: FileText,
      url: '#',
    },
    {
      title: 'Whitelist',
      icon: UserCheck,
      url: '#',
    },
    {
      title: 'Karma',
      icon: UserCog,
      url: '#',
    },
  ],
  businesses: [
    {
      title: 'Organization',
      icon: Briefcase,
      url: '#',
    },
    {
      title: 'Loan Products',
      icon: FileText,
      url: '#',
    },
    {
      title: 'Savings Products',
      icon: Building2,
      url: '#',
    },
    {
      title: 'Fees and Charges',
      icon: CoinsIcon,
      url: '#',
    },
    {
      title: 'Transactions',
      icon: ClipboardList,
      url: '#',
    },
    {
      title: 'Services',
      icon: Settings,
      url: '#',
    },
    {
      title: 'Service Account',
      icon: UserCog,
      url: '#',
    },
    {
      title: 'Settlements',
      icon: Wallet,
      url: '#',
    },
    {
      title: 'Reports',
      icon: ChartLine,
      url: '#',
    },
  ],
  settings: [
    {
      title: 'Preferences',
      icon: Sliders,
      url: '#',
    },
    {
      title: 'Fees and Pricing',
      icon: Scroll,
      url: '#',
    },
    {
      title: 'Audit Logs',
      icon: ClipboardList,
      url: '#',
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className='app-sidebar'>
      <SidebarHeader className='sidebar-header'>
        <Image src={Logo} alt='Lendsqr Logo' width={145} height={30} priority />
      </SidebarHeader>

      <SidebarContent className='sidebar-content'>
        {/* Main Navigation */}
        <SidebarGroup className='sidebar-group'>
          <SidebarMenu className='sidebar-menu'>
            {navData.main.map((item) => (
              <SidebarMenuItem key={item.title} className='sidebar-menu-item'>
                <SidebarMenuButton asChild className='sidebar-menu-button'>
                  <a href={item.url} className='sidebar-link'>
                    <item.icon className='sidebar-icon' />
                    <span className='sidebar-text'>{item.title}</span>
                    {item.hasDropdown && (
                      <ChevronDown className='sidebar-dropdown-icon' />
                    )}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* Customers Section */}
        <SidebarGroup className='sidebar-group'>
          <SidebarGroupLabel className='sidebar-group-label'>
            Customers
          </SidebarGroupLabel>
          <SidebarGroupContent className='sidebar-group-content'>
            <SidebarMenu className='sidebar-menu'>
              {navData.customers.map((item) => (
                <SidebarMenuItem key={item.title} className='sidebar-menu-item'>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className={`sidebar-menu-button ${
                      item.isActive ? 'active' : ''
                    }`}
                  >
                    <a href={item.url} className='sidebar-link'>
                      <item.icon className='sidebar-icon' />
                      <span className='sidebar-text'>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Businesses Section */}
        <SidebarGroup className='sidebar-group'>
          <SidebarGroupLabel className='sidebar-group-label'>
            Businesses
          </SidebarGroupLabel>
          <SidebarGroupContent className='sidebar-group-content'>
            <SidebarMenu className='sidebar-menu'>
              {navData.businesses.map((item) => (
                <SidebarMenuItem key={item.title} className='sidebar-menu-item'>
                  <SidebarMenuButton asChild className='sidebar-menu-button'>
                    <a href={item.url} className='sidebar-link'>
                      <item.icon className='sidebar-icon' />
                      <span className='sidebar-text'>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings Section */}
        <SidebarGroup className='sidebar-group'>
          <SidebarGroupLabel className='sidebar-group-label'>
            Settings
          </SidebarGroupLabel>
          <SidebarGroupContent className='sidebar-group-content'>
            <SidebarMenu className='sidebar-menu'>
              {navData.settings.map((item) => (
                <SidebarMenuItem key={item.title} className='sidebar-menu-item'>
                  <SidebarMenuButton asChild className='sidebar-menu-button'>
                    <a href={item.url} className='sidebar-link'>
                      <item.icon className='sidebar-icon' />
                      <span className='sidebar-text'>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout */}
        <SidebarGroup className='sidebar-group sidebar-logout'>
          <SidebarMenu className='sidebar-menu'>
            <SidebarMenuItem className='sidebar-menu-item'>
              <SidebarMenuButton asChild className='sidebar-menu-button'>
                <a href='#' className='sidebar-link'>
                  <LogOut className='sidebar-icon' />
                  <span className='sidebar-text'>Logout</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
