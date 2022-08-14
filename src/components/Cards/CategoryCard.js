import React from 'react';
import { useNavigate } from 'react-router';
import Card from '../UI/Card';
import './CategoryCard.css';

const CategoryCard = ({src, alt, title}) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/category/${title}`);
    }
    return (
        <Card border className='category-card' onClick={onClickHandler}>
            <div className='category-card__blob'>

            <img src={src} alt={alt}/>
            </div>
            <span>{title}</span>
        </Card>
    )
}

export default CategoryCard