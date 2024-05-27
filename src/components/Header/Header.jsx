import { useState } from "react";
import { Options } from "../Obtions/Options";

export const Header = () => {
    const [isActive, setIsActive] = useState(false)


    const handleIsActive = () => {
        setIsActive(!isActive)
    }

    return (
        <header className=" items-center font-bold flex justify-between">
            <div className="flex items-center content-center gap-3 text-[14px] text-[#F0402C]">
                <i className="fa-solid fa-code"></i>
                <h2 className="text-[#282051]">devchallenges</h2>
            </div>
            <div className="flex items-center content-center gap-4 text-[12px]">
                <img src="./devchallenges.png" className="w-[32px]" alt="Image profile" />
                <h2>Xanthe Neal</h2>
                <div className={`relative`}>
                    <i onClick={handleIsActive} className={`${!isActive ? "rotate-180" : ""}  fa-solid fa-caret-up cursor-pointer scale-150`}></i>
                    <Options isActive={isActive} />
                </div>
            </div>
        </header>
    )
}
