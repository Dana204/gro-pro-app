import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

import Card from '../UI/Card';
import Button from '../UI/Button';

const CategoryCard = ({src, alt, name}) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/category/${name}`);
    }

    return (
        <Card border className='category-card' onClick={onClickHandler}>
            <div><Link to='/'>{name}</Link></div>
            {/* <div><Link to='/'>View All</Link></div> */}
            {/* <div><Link to='/'>View {name}</Link></div> */}
            <img src={src} alt={alt}/>
            {/* <span>View All</span> */}
            {/* <Button label='View More' to='/' primary/> */}
            {/* <span>{name}</span> */}
        </Card>
    )
}

export default CategoryCard