import type { TComponentProps } from 'definitions';
import { Home } from 'epics';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

export type TProps = TComponentProps & {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export const Router: React.FC = (): JSX.Element => (<RouterProvider router={router} />);

export default Router;
