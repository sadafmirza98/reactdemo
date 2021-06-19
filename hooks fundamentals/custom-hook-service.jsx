import {useEffect,useState} from "react"

const useMbileView = () => {
    const[isMobile,setIsMobile] = useState(false);

    useEffect(() => {
        window.addEventListener("resize",(event) =>{
            setIsMobile(window.innerWidth > 768 ? true : false);

        } );
        return() => window.removeEventListener.removeEventListener("resize" , (event)=>{});

    },[])

    return isMobile
}

export default useMobileView;