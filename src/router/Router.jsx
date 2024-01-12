import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import UserList from '../pages/UserList';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import ProfileDetails from '../pages/ProfileDetails';

    const Router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/users-list',
                    element: <UserList />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path: '/profile',
                    element: <Profile />
                },
                {
                    path: '/profiledetails/:id',
                    element: <ProfileDetails />
                },
            ]
        },
        {
            path: '*',
            element: <NotFound />
        },
    ])

export default Router;