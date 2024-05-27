import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from 'react-router';
import { Header } from "../components/Header/Header";
import { UserContext } from "../context/userContext";


export const EditProfile = () => {
    const navigate = useNavigate();
    
  const { editUserData } = useContext(UserContext)

  const editMutation = useMutation({
    mutationFn: editUserData,
    onSuccess: () => navigate('/'),
    onError: (error) => alert(error.response.data.message),
  });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('----------------------')
    const formData = new FormData(e.target);
    
    const file = e.target.profilePicture.files[0]

    formData.append('profilePicture', file);
        const data = {};
        formData.forEach((value, key) => {
            if (value && value != 'undefined') {
            data[key] = value;
            }
        });

    editMutation.mutate(formData);
  };

    return (
        <div className="flex font-NotoSans flex-col py-[27px] px-[72px] w-screen min-h-screen">
            <Header />
            <main className="w-full flex flex-col justify-center content-center items-center">
                <div className="w-[845.91px]">
                    <button onClick={() => navigate("/")} className="flex text-[#2D9CDB] font-normal text-[18px] leading-[24.52px] items-center gap-2 py-7">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        Back
                    </button>
                </div>
                <section className="w-[845.91px] min-h-[580.54px] border-[#E0E0E0] border-[1px] rounded-xl px-11 py-2">
                    <div className="flex flex-col gap-1 py-8">
                        <h2 className="font-normal text-[24px] leading-[32.69px]">Change Info</h2>
                        <p className="text-[#828282] font-medium text-[13px] leading-[17.71px]">Changes will be reflected to every services</p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 pb-8">
                        <label htmlFor="profilePicture" className="flex items-center gap-4 cursor-pointer">
                            <div className="relative">
                                <img src="./defaultProfilePicture.jpg" className="w-[72px]" alt="Image profile" />
                                <i className="fa-solid fa-camera absolute scale-150 text-white right-5 top-5"></i>
                            </div>
                            <h3 className="text-[#828282] font-medium text-[13px] leading-[17.71px]">CHANGE PHOTO</h3>
                            <input id="profilePicture"
                                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-red-400  hover:file:bg-red-100 cursor-pointer file:cursor-pointer"
                                type="file" />
                        </label>
                        <label htmlFor="name" className="flex flex-col gap-2">
                            <h4 className="text-[13px] leading-[17.71px] text-[#4F4F4F]" >Name</h4>
                            <input id="name" name="name" type="text" placeholder="Enter your name..."
                                className="text-[12px] leading-[17px] text-[#4F4F4F] placeholder:text-[13px] placeholder:leading-[17.71px] w-[416.93px] border-[1px] border-[#828282] rounded-lg h-[52px] p-6" />
                        </label>
                        <label htmlFor="bio" className="flex flex-col gap-2">
                            <h4 className="text-[13px] leading-[17.71px] text-[#4F4F4F]" >Bio</h4>
                            <textarea name="bio" id="bio" type="text" placeholder="Enter your bio..."
                                className="text-[12px] leading-[17px] text-[#4F4F4F] h-[91.58px] placeholder:text-[13px] placeholder:leading-[17.71px] w-[416.93px] border-[1px] border-[#828282] rounded-lg p-6" ></textarea>
                        </label>
                        <label htmlFor="phone" className="flex flex-col gap-2">
                            <h4 className="text-[13px] leading-[17.71px] text-[#4F4F4F]" >Phone</h4>
                            <input type="tel" id="phone" name="phone" title="Ingrese un numero telefono de minimo 9 digitos" pattern="[0-9]{9,}" placeholder="Enter your phone..."
                                className="text-[12px] leading-[17px] text-[#4F4F4F] placeholder:text-[13px] placeholder:leading-[17.71px] w-[416.93px] border-[1px] border-[#828282] rounded-lg h-[52px] p-6" />
                        </label>
                        <label htmlFor="email" className="flex flex-col gap-2">
                            <h4 className="text-[13px] leading-[17.71px] text-[#4F4F4F]" >Email</h4>
                            <input id="email" name="email" type="email" title="Ingrese un correo valido (@)" placeholder="Enter your email..."
                                className="text-[12px] leading-[17px] text-[#4F4F4F] placeholder:text-[13px] placeholder:leading-[17.71px] w-[416.93px] border-[1px] border-[#828282] rounded-lg h-[52px] p-6" />
                        </label>
                        <label htmlFor="password" className="flex flex-col gap-2">
                            <h4 className="text-[13px] leading-[17.71px] text-[#4F4F4F]" >Password</h4>
                            <input 
                            id="password" name="password" 
                            type="password" pattern="(?=.*[A-Z]).{8,}"
                            title="La contraseña debe tener al menos una letra mayúscula y un mínimo de 8 caracteres."
                            placeholder="Enter your password..."
                            className="text-[12px] leading-[17px] text-[#4F4F4F] placeholder:text-[13px] placeholder:leading-[17.71px] w-[416.93px] border-[1px] border-[#828282] rounded-lg h-[52px] p-6" />
                        </label>
                        <button type="submit" className="w-[82px] h-[38px] bg-[#2F80ED] text-[16px] leading-[21.79px] text-white rounded-lg hover:bg-[#1161c9] ">Save</button>
                    </form>
                </section>
                <footer className="pt-2 px-1 pb-12 flex justify-between w-[845.91px] text-[14px] leading-[19.07px] text-[#828282]">
                    <p className="font-normal">created by <span className="underline font-semibold">aronSV</span></p>
                    <p className="font-normal">devChallenges.io</p>
                </footer>
            </main>
        </div>
    )
}
