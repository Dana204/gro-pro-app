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
        <Card border className='category-card slide-up' onClick={onClickHandler}>
            <div>{name}</div>
            <img src={src} alt={alt}/>
        </Card>
    )
}

export default CategoryCard