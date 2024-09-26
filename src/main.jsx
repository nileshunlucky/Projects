import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store } from './Redux/store.js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage.jsx';
import ProductDetails from './ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/product',
        element:<ProductDetails/>
      },
      {
        path:'*',
        element:<ErrorPage/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);