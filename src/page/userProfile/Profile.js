import ProfileBox from '../../components/profileComponent/ProfileBox'
import History from '../../components/profileComponent/History'
import Hero from '../../components/profileComponent/Hero';

import { useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    useEffect(() => {
        fetchData();
    }, [])

    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/user/userinfo', {
                method: 'GET',
                headers: {
                    // 'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            // Toasts
            if (response.status === 200) {
                toast.success('Welcome onBoard', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                toast.warn('You are not authorised, please login', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    navigate("/login");
                }, 1000)
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    const logout = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/auth/logout', { withCredentials: true })
            console.log(response);
            if (response.status === 200) {
                toast.success('Logged out', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            setTimeout(() => {
                navigate("/");
            }, 1000)
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div>
            <ToastContainer />
            <div className='flex flex-col md:flex-row justify-evenly items-center md:items-start space-y-5 md:space-y-5 '>
                <History />
                <ProfileBox />
            </div>
            <Hero />
            <button onClick={(logout)} className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-red-500 rounded text-lg">Logout</button>
        </div>
    )
}

export default Profile