import React, { FC } from 'react';
import { Sidebar as SidebarUI } from '@stn-ui/sidebar';
import { SidebarNavigation } from './sidebar-navigation';
import { SidebarUserMenu } from '@/modules/sidebar/components/sidebar-user-menu';

export const Sidebar: FC = () => (
  <SidebarUI footer={<SidebarUserMenu />}>
    <SidebarNavigation />
  </SidebarUI>
);
