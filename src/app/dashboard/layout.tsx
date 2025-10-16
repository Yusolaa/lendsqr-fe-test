'use client';
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
        {/* Sidebar Navigation */}
        <AppSidebar className='sidebar' />

        {/* Main Content Area */}
        <SidebarInset className='sidebar-inset'>
          {/* Header */}
          <header className='dashboard-header'>
            <SidebarTrigger className='sidebar-trigger' />
            <HeaderComponent />
          </header>

          {/* Dashboard Content */}
          <main className='dashboard-content'>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
