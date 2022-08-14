import fruitImg from '../assets/fruit.png';
import vegetableImg from '../assets/vegetable.png';
import meatImg from '../assets/meat.png';
import dairyImg from '../assets/dairy.png';

export const categories = [
    {   
        name: 'fruits',
        src: fruitImg,
        alt: 'fruit'
    },
    {
        name: 'vegetables',
        src: vegetableImg,
        alt: 'vegetable',
    },
    {
        name: 'meat',
        src: meatImg,
        alt: 'meat',
    },
    {
        name: 'dairy',
        src: dairyImg,
        alt: 'dairy',
    },
]

export const mainPages = [
    {
        name : 'Home',
        url : '/'
    },
    {
        name : 'About Us',
        url : '/about-us'
    },
    {
        name : 'Services',
        url : '/services'
    },
    {
        name : 'Blog',
        url : '/blog'
    },
    {
        name : 'Contact Us',
        url : '/contact-us'
    },
]

export const products = [
    {
        id: 1,
        name: 'Banana',
        price: 4.00,
        category: 'fruits',
        img: fruitImg,
        rating: 5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
    },
    {
        id: 2,
        name: 'Chicken',
        price: 4.00,
        category: 'meat',
        img: fruitImg,
        rating: 4.5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
    },
    {
        id: 3,
        name: 'Apple',
        price: 4.00,
        category: 'fruits',
        img: fruitImg,
        rating: 5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
    },
    {
        id: 4,
        name: 'Cabbage',
        price: 4.00,
        category: 'vegetables',
        img: fruitImg,
        rating: 5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
    },
    
    
]