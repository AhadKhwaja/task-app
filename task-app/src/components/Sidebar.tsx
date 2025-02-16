import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaHome, FaChartBar, FaBell, FaHeart, FaWallet, FaSignOutAlt, FaUser } from 'react-icons/fa';

const SidebarContainer = styled.div<{ collapsed: boolean }>`
  width: ${({ collapsed }) => (collapsed ? "60px" : "250px")};
  height: 100vh;
  background: #1e1e2f;
  color: white;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 10px;
  position: relative;
`;

const ToggleButton = styled.div<{ collapsed: boolean }>`
  position: absolute;
  top: 20px;
  right: -20px;
  background: #4a4a6a;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: ${({ collapsed }) => (collapsed ? 'rotate(180deg)' : 'rotate(0)')};
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
`;

const MenuItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background: ${({ active }) => (active ? '#4a4a6a' : 'transparent')};
  transition: background 0.3s ease, transform 0.2s ease;
  &:hover {
    background: #4a4a6a;
    transform: translateX(5px);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: <FaHome /> },
    { name: 'Revenue', icon: <FaChartBar /> },
    { name: 'Notifications', icon: <FaBell /> },
    { name: 'Analytics', icon: <FaChartBar /> },
    { name: 'Likes', icon: <FaHeart /> },
    { name: 'Wallets', icon: <FaWallet /> },
  ];

  return (
    <SidebarContainer collapsed={collapsed}>
      <ToggleButton collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
        <FaChevronLeft />
      </ToggleButton>
      <Logo>{collapsed ? 'CL' : 'Codinglab'}</Logo>
      <UserInfo>
        <FaUser /> {collapsed ? '' : 'Deepthi Thyagaraj'}
      </UserInfo>
      {menuItems.map((item) => (
        <MenuItem key={item.name} active={active === item.name} onClick={() => setActive(item.name)}>
          {item.icon} {collapsed ? '' : item.name}
        </MenuItem>
      ))}
      <MenuItem active={false}>
        <FaSignOutAlt /> {collapsed ? '' : 'Logout'}
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
