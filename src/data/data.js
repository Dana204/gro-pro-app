import cabbageImg from '../assets/cabbage.png';
import milkImg from '../assets/milk.png';
import paprikaImg from '../assets/paprika.png';

import orangeImg from '../assets/orange.png';
import bananaImg from '../assets/banana.png';
import passionImg from '../assets/passion.png';

import pancakeImg from '../assets/pancakes.jpg';
import avocadoToastImg from '../assets/avocado-toast.jpg';
import smoothieBowlImg from '../assets/smoothie-bowl.jpg';
import omeletteImg from '../assets/omelette.jpg';
import chickenAsparagusImg from '../assets/chicken-asparagus.jpg';
import steakImg from '../assets/steak.jpg';
import salmonImg from '../assets/salmon.jpg';
import quesadillaImg from '../assets/quesadilla.jpg';
import berryFruitCakeImg from '../assets/berry-fruit-cake.jpg';
import ojImg from '../assets/oj.jpg';



export const categories = [
    {   
        name: 'breakfast',
        src: pancakeImg,
        alt: 'breakfast'
    },
    {
        name: 'lunch',
        src: quesadillaImg,
        alt: 'lunch',
    },
    {
        name: 'dinner',
        src: salmonImg,
        alt: 'dinner',
    },
    {
        name: 'dessert',
        src: berryFruitCakeImg,
        alt: 'dessert',
    },
    {
        name: 'beverages',
        src: ojImg,
        alt: 'beverages',
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
        name: 'Pancakes',
        price: 4.00,
        category: 'breakfast',
        img: pancakeImg,
        rating: 5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
        ingredients: 'Sumptuous, filling, and temptingly healthy, our Biona Organic.',
    },
    {
        id: 2,
        name: 'Avocado Toast',
        price: 4.00,
        category: 'breakfast',
        img: avocadoToastImg,
        rating: 4.5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
        ingredients: 'Sumptuous, filling, and temptingly healthy, our Biona Organic.',
    },
    {
        id: 3,
        name: 'smoothie Bowl',
        price: 4.00,
        category: 'breakfast',
        img: smoothieBowlImg,
        rating: 4.5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
        ingredients: 'Sumptuous, filling, and temptingly healthy, our Biona Organic.',
    },
    {
        id: 4,
        name: 'omelette',
        price: 4.00,
        category: 'breakfast',
        img: omeletteImg,
        rating: 4.5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
        ingredients: 'Sumptuous, filling, and temptingly healthy, our Biona Organic.',
    },
    {
        id: 5,
        name: 'Chicken Asparagus',
        price: 4.00,
        category: 'dinner',
        img: chickenAsparagusImg,
        rating: 4.5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
        ingredients: 'Sumptuous, filling, and temptingly healthy, our Biona Organic.',
    },
    {
        id: 6,
        name: 'Steak',
        price: 4.00,
        category: 'dinner',
        img: steakImg,
        rating: 4.5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
        ingredients: 'Sumptuous, filling, and temptingly healthy, our Biona Organic.',
    },
    {
        id: 7,
        name: 'Salmon',
        price: 4.00,
        category: 'dinner',
        img: salmonImg,
        rating: 4.5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
        ingredients: 'Sumptuous, filling, and temptingly healthy, our Biona Organic.',
    },
    {
        id: 8,
        name: 'Quesadilla',
        price: 4.00,
        category: 'lunch',
        img: quesadillaImg,
        rating: 4.5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
        ingredients: 'Sumptuous, filling, and temptingly healthy, our Biona Organic.',
    },
    {
        id: 9,
        name: 'Berry Fruit Cake',
        price: 4.00,
        category: 'dessert',
        img: berryFruitCakeImg,
        rating: 4.5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
        ingredients: 'Sumptuous, filling, and temptingly healthy, our Biona Organic.',
    },
    {
        id: 10,
        name: 'Orange Juice',
        price: 4.00,
        category: 'dessert',
        img: ojImg,
        rating: 4.5,
        description: 'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
        ingredients: 'Sumptuous, filling, and temptingly healthy, our Biona Organic.',
    },
    
    
    
    
]