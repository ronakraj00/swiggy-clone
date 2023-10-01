import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [isOnline, SetIsOnline] = useState(true);

    function handalOnline() {
        SetIsOnline(true);
    }
    function handalOffline() {
        SetIsOnline(false);
    }

    useEffect(() => {
        window.addEventListener("online", handalOnline);
        window.addEventListener("offline", handalOffline);
        return () => {
            window.removeEventListener("online", handalOnline);
            window.removeEventListener("offline", handalOffline);
        };
    });

    return isOnline;
};

export default useOnlineStatus;