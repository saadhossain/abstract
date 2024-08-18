import { useContext } from 'react';
import toast from 'react-hot-toast';
import { DataContext } from '../context/DataContext';

const AddCardModal = () => {
    const { isModalOpen, setIsModalOpen, newCardAdded, setNewCardAdded } = useContext(DataContext);

    // Functionality for Adding New Card
    const handleAddCard = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;

        try {
            // Save new card to the database
            const res = await fetch('http://localhost:5000/cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description }),
            });

            const data = await res.json();
            //Display Message based on response
            if (data.acknowledged) {
                toast.success('Card Added Successfully.');
                form.reset();
                setIsModalOpen(false);
                setNewCardAdded(!newCardAdded);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while adding the card.');
        }
    };

    return (
        <>
            {
                isModalOpen && <div className='w-full min-h-screen flex items-center justify-center absolute py-10 md:py-0 md:fixed left-0 top-0 z-50 bg-gray-900 bg-opacity-60'>
                    <div className='w-11/12 md:w-2/5  flex items-center bg-gray-700 text-white p-5 my-5 md:my-0 rounded-md relative'>
                        <button
                            onClick={() => setIsModalOpen(!isModalOpen)}
                            className='font-bold text-xl absolute top-1 right-2 bg-gray-900 bg-opacity-60 py-1 px-3 rounded-full'>X</button>
                        <form
                            onSubmit={handleAddCard}
                            className="w-full space-y-6"
                        >
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="title" className="block mb-2 text-sm font-semibold">Title</label>
                                    <input type="text" name="title" id="title"
                                        placeholder='Enter the Title'
                                        className='w-full px-3 py-2 rounded-md text-gray-900 bg-gray-300 focus:outline-none'
                                    />
                                </div>
                                <div>
                                    <label htmlFor="description" className="block mb-2 text-sm font-semibold">Description</label>
                                    <textarea name="description" id="description"
                                        className='w-full px-3 py-2 rounded-md text-gray-900 bg-gray-300 focus:outline-none'
                                        placeholder='Write your Description Here...'
                                    ></textarea>
                                </div>
                            </div>
                            <button type="submit"
                                className="w-full flex items-center justify-center px-8 py-3 font-semibold rounded-md bg-black text-white">
                                Add Card
                            </button>
                        </form>
                    </div>
                </div>
            }
        </>
    );
};

export default AddCardModal;