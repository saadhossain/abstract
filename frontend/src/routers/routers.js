import { createBrowserRouter } from 'react-router-dom';
import CardDetails from '../components/CardDetails';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cards/:title',
                loader: ({ params }) => fetch(`http://localhost:5000/cards/${params.title}`),
                element: <CardDetails />
            },
        ]
    }
]);