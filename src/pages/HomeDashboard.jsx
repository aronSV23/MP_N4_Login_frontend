import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Header } from '../components/Header/Header';
import { UserContext } from '../context/userContext';

export const HomeDashboard = () => {
    const navigate = useNavigate();
    const { userData } = useContext(UserContext)

    return (
        <div className="flex font-NotoSans flex-col py-[27px] px-[72px] w-screen min-h-screen">
            <Header />
            <main className="w-full flex flex-col justify-center content-center items-center">
                <h2 className="pt-2 pb-1 text-[36px] leading-[49.03px] text-center">Personal info</h2>
                <h3 className="pt-1 pb-6 text-[18px] leading-[24.52px] text-center">Basic info, like your name and photo</h3>
                <article className="w-[845.91px] min-h-[580.54px] border-[#E0E0E0] border-[1px] rounded-xl">
                    <section className="flex justify-between py-6 px-10 items-center">
                        <div className="gap-2">
                            <h4 className="text-[24px] leading-[32.69px]">Profile</h4>
                            <p className="text-[13px] leading-[17.71px] text-[#828282]">Some info may be visible to other people</p>
                        </div>
                        <div>
                            <button onClick={() => navigate("/edit")} className="border-[#828282] w-[95.34px] h-[38px] border-[1px] rounded-xl text-[#828282] text-[16px]">
                                Edit
                            </button>
                        </div>
                    </section>
                    <div className="w-full border-[#E0E0E0] border-[1px]"></div>
                    <section className="flex w-full items-center py-2 pl-12 min-h-[80px]">
                        <div className="w-[250px] text-[#BDBDBD] text-[13px] leading-[17.71px]">PHOTO</div>
                        <div>
                            <img src={`http://localhost:3000/uploads/${userData.profile_picture}`} className='w-[72px]' alt="profile picture" />
                        </div>
                    </section>
                    <div className="w-full border-[#E0E0E0] border-[1px]"></div>
                    <section className="flex w-full items-center py-1 pl-12 min-h-[80px]">
                        <div className="w-[250px] text-[#BDBDBD] text-[13px] leading-[17.71px]">NAME</div>
                        <div className="text-[18px] leading-[24.52px] text-[#333333]"><p>{userData.name}</p></div>
                    </section>
                    <div className="w-full border-[#E0E0E0] border-[1px]"></div>
                    <section className="flex w-full items-center py-1 pl-12 min-h-[80px]">
                        <div className="w-[250px] text-[#BDBDBD] text-[13px] leading-[17.71px]">BIO</div>
                        <div className="text-[18px] leading-[24.52px] text-[#333333]"><p>{userData.bio}</p></div>
                    </section>
                    <div className="w-full border-[#E0E0E0] border-[1px]"></div>
                    <section className="flex w-full items-center py-1 pl-12 min-h-[80px]">
                        <div className="w-[250px] text-[#BDBDBD] text-[13px] leading-[17.71px]">PHONE</div>
                        <div className="text-[18px] leading-[24.52px] text-[#333333]"><p>{userData.phone}</p></div>
                    </section>
                    <div className="w-full border-[#E0E0E0] border-[1px]"></div>
                    <section className="flex w-full items-center py-1 pl-12 min-h-[80px]">
                        <div className="w-[250px] text-[#BDBDBD] text-[13px] leading-[17.71px]">EMAIL</div>
                        <div className="text-[18px] leading-[24.52px] text-[#333333]"><p>{userData.email}</p></div>
                    </section>
                    <div className="w-full border-[#E0E0E0] border-[1px]"></div>
                    <section className="flex w-full items-center py-1 pl-12 min-h-[80px]">
                        <div className="w-[250px] text-[#BDBDBD] text-[13px] leading-[17.71px]">PASSWORD</div>
                        <div className="text-[18px] leading-[24.52px] text-[#333333]"><p>************</p></div>
                    </section>
                </article>
                <footer className="pt-2 px-1 pb-12 flex justify-between w-[845.91px] text-[14px] leading-[19.07px] text-[#828282]">
                    <p className="font-normal">created by <span className="underline font-semibold">aronSV</span></p>
                    <p className="font-normal">devChallenges.io</p>
                </footer>
            </main>
        </div>
    )
}
