import Header from '../../components/profileComponent/Header'
import ProfileBox from '../../components/profileComponent/ProfileBox'
import History from '../../components/profileComponent/History'

import { useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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
                }, 3000)
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
            const response = await fetch('http://localhost:8080/api/v1/auth/logout', {
                method: 'GET',
                credentials: 'include',
            })
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
            <Header />
            <button onClick={(logout)}>Logout</button>
            <ProfileBox />
            <History />
        </div>
    )
}

export default Profile