import React from 'react';
import { AppSidebar } from '@/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { HeaderComponent } from '@/components/dash-header';
import './layout.scss';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='dashboard'>
      <SidebarProvider>
        <AppSidebar className='sidebar' />
        <SidebarInset className='sidebar-inset'>
          <header>
            <SidebarTrigger className='sidebar-trigger' />
            <HeaderComponent />
          </header>

          <div className='content'>
            <div className='main-section'>{children}</div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
