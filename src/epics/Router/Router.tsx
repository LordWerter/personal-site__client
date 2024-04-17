import type { ComponentProps } from 'types';
import { Home } from 'epics';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export interface Props extends ComponentProps {}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
]);

export const Router: React.FC = (): JSX.Element => (
    <RouterProvider router={router} />
);

export default Router;
