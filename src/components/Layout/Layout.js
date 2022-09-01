import React, { Fragment } from 'react';
import TopBar from './TopBar';
import Header from './Header';
import PageTitle from './PageTitle';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <Fragment>
            <TopBar />
            <Header />
            <PageTitle />
            <main>
                {children}
            </main>
            <Footer />
        </Fragment>
    )
}

export default Layout