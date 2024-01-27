import { useState } from "react";

const useToggle = (isOnState:boolean = false) => {
    const [isOn, setIsOn] = useState<boolean>(isOnState);

    const toogle = () => {
        setIsOn(!isOn);
    }
    
    return [isOn, toogle];
}
export default useToggle;