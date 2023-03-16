import { Outlet } from 'react-router-dom';
import React from 'react';
import Navibar from '../components/UI/Navibar';

class MainLayout extends React.Component {
  render() {
    return (
      <>
        <Navibar />
        <Outlet />
      </>
    );
  }
}

export default MainLayout;
