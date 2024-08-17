import React, { createContext, useState } from 'react';

export const DataContext = createContext();
const DataProvider = ({ children }) => {
    //State to open/close the modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    //manage a state to refetch data after add new card
    const [newCardAdded, setNewCardAdded] = useState(false);

    //Manage a state to store search text
    const [searchText, setSearchText] = useState('');

    const data = { isModalOpen, setIsModalOpen, newCardAdded, setNewCardAdded, searchText, setSearchText };
    return (
        <div>
            <DataContext.Provider value={data}>
                {children}
            </DataContext.Provider>
        </div>
    );
};

export default DataProvider;