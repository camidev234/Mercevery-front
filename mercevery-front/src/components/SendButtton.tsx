import { useEffect, useState } from "react";
import { ButtonProps } from "../types/button"

export const SendButton :React.FC<ButtonProps> = ({textToShow, hasErrors, textWhenIsClicked}) => {
    const [btnWasClicked, setBtnWasClicked] = useState<boolean>(false);

    useEffect(() => {
        if(hasErrors) {
            setBtnWasClicked(false);
        } else {
            setBtnWasClicked(true);
        }
    }, [hasErrors])

    return (
        <button type="submit" disabled={btnWasClicked} className="flex w-full justify-center rounded-md bg-zinc-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {
                btnWasClicked ? (
                    <div className="w-full h-full flex justify-center items-center gap-2">
                        <div className="spinner"></div>
                        <span>{textWhenIsClicked}</span>
                    </div>
                ) : textToShow
            }
        </button>
    )
}