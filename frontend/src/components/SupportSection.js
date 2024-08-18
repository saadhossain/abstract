import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import Card from './Card';
import Loading from './Loading';

const SupportSection = () => {
    const { newCardAdded, searchText } = useContext(DataContext);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getCards = async () => {
            setLoading(true);
            try {
                const res = await fetch('http://localhost:5000/cards');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setCards(data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            } finally {
                setLoading(false);
            }
        };
        getCards();
    }, [newCardAdded]);

    //Filter Cards based on search text and Display them
    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchText.toLowerCase()) ||
        card.description.toLowerCase().includes(searchText.toLowerCase())
    );
    //Display loading spiner while loading data
    if (loading) {
        return <Loading />;
    }
    return (
        <div className='w-11/12 md:w-8/12 max-w-[1440px] mx-auto my-12 md:my-24 grid md:grid-cols-2 gap-5 md:gap-10'>
            {
                filteredCards.map((card) => <Card key={card._id} card={card} />)
            }
        </div>
    );
};

export default SupportSection;