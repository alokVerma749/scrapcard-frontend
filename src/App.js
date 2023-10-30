import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Registration from './page/Registration';
import Login from './page/Login';
import Header from './components/Header';
import Hero from './page/Hero';
import Profile from './page/userProfile/Profile';
import Footer from './components/Footer';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/registration",
      element: <Registration />
    },
    {
      path: "/profile",
      element: <Profile />
    },
  ]);

  return (
    <div className="App bg-gradient-to-br from-blue-500 to-blue-900 text-white min-h-screen">
      <Header />
      <RouterProvider router={router}>
        <Hero />
      </RouterProvider>
      <Footer />
    </div>
  );
}

export default App;
