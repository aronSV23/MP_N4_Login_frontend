import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../context/userContext';

export const Options = ({ isActive }) => {
    const { setIsAutenticated } = useContext(UserContext)
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        setIsAutenticated(false)
        navigate("/login")
    }

    return (
        <div className={`${!isActive ? "hidden" : ""} bg-white p-6 absolute w-[188px] h-[174px] border-[1px] border-[#E0E0E0] top-10 right-0 rounded-xl`}>
            <div className="flex flex-col gap-2">
                <button onClick={() => navigate("/")} className="flex items-center gap-2 p-2 bg-[#F2F2F2] w-full rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <h3>My Profile</h3>
                </button>
                <button className="flex items-center gap-2 p-2">
                    <i className="fa-solid fa-user-group"></i>
                    <h3>Group Chat</h3>
                </button>
            </div>
            <div className="w-full border-[#E0E0E0] border-[1px] my-2"></div>
            <button onClick={handleLogOut} className="flex items-center gap-2 p-2 text-[#EB5757]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>
                <h3>Logout</h3>
            </button>
        </div>
    )
}
