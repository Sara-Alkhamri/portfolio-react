import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import MobileNav from '../MobileNav';

import { StyledContent } from './styles';

const Layout =({ user, childern }) => {
    return (
        <>
        <MobileNav />
        <Sidebar />
        <StyledContent>
            <Header user={user} />
            <div>{childern}</div>
        </StyledContent>
        </>
    );
};

export default Layout;
