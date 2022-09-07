import React, { Fragment } from 'react';
import { useLocation } from 'react-router';
import TopBar from './TopBar';
import Header from './Header';
import PageTitle from './PageTitle';
import Footer from './Footer';

const Layout = ({children}) => {
    const location = useLocation(); 
    const isHomePage = location.pathname.length > 1? false : true;
    return (
        <Fragment>
            <TopBar />
            <Header />
            { !isHomePage && <PageTitle location={location}/>}
            <main style={{ padding: !isHomePage ? '3em 0':'0'}}>
                {children}
            </main>
            <Footer />
        </Fragment>
    )
}

export default Layout