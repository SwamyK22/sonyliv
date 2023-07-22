import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from './layouts/DashBoardLayout/DashBoardLayout';
import TVShows from './Screens/TVShows/TVShows';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import SignIn from './Screens/SignIn/SignIn';
import OTP from './Screens/OTP/OTP';
import AdminSignIn from './Screens/AdminSignin/AdminSignIn';
import DashBoard from './Screens/AdminDashboard/DashBoard';
import AdminLayout from './layouts/adminLayout/AdminLayout';
import AddItem from './Screens/AddNewItem/AddItem';
import NewsPage from './Screens/AdminNewsPage/NewsPage';
import SportsPage from './Screens/AdminSportsPage/SportsPage';
import ErrorBoundary from './ErrorBoundary';
import Movies from './Screens/Movies/Movies'
import News from './Screens/News/News'
import Sports from './Screens/Sports/Sports'
import Subscribe from './Screens/SubscribePage/Subscribe';
import Preview from './Screens/PreviewPage/Preview';


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <DashBoardLayout />,
      children: [
        {
          index: true,
          element: <TVShows />
        },
        {
          path: 'signin',
          element: <SignIn />
        },
        {
          path: 'otp',
          element: <OTP />
        },
        {
          path: 'Movies',
          element: <Movies />
        },
        {
          path: 'Tv Shows',
          element: <News />
        },
        {
          path: 'Sports',
          element: <Sports />
        },
        {
          path:'preview',
          element: <Preview />
        }
      ]
    },
    {
      path:'/subscribe',
      element: <Subscribe />
    },
    {
      path: '/admin',
      element: <AdminSignIn />
    },
    {
      path: '/dashboard',
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <DashBoard />
        },
        {
          path:'addItem',
          element:<AddItem />
        },
        {
          path:'newsPage',
          element:<NewsPage />
        },
        {
          path:'sportsPage',
          element:<SportsPage />
        },
      ]
    },
  ]);
  
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <RouterProvider router={router}/>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
