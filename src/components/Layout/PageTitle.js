import React from 'react';
import { Link } from 'react-router-dom';
import './PageTitle.css'

const PageTitle = ({location}) => {
    const currentPageTitle = location.pathname.slice(1).replace('-',' ').replace('/', ' | ');
    return (
        <div className='page-title'>
            <div className='container'>
                <h1>{currentPageTitle}</h1>
                <div className='page-title__breadcrumb'>
                    <Link to=''>Home</Link>
                   <span>{currentPageTitle}</span>
                </div>
            </div>
        </div>
    )
}

export default PageTitle