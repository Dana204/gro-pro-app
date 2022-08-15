import React, { Fragment } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './PageTitle.css'

const PageTitle = () => {
    const location = useLocation(); 
    const isHomePage = location.pathname.length > 1? false : true;
    const currentPageTitle = location.pathname.slice(1).replace('-',' ').replace('/', ' | ');
    return (
        <Fragment>
            {
                !isHomePage && (
                    <div className='page-title'>
                        <div className='container'>
                            <h1>{currentPageTitle}</h1>
                            <div className='page-title__breadcrumb'>
                                <Link to=''>Home</Link>
                                <span>{currentPageTitle}</span></div>
                        </div>
                    </div>
                )
            }
        </Fragment>
    )
}

export default PageTitle