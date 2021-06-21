import React,{useRef,useEffect,useState} from "react";

const ImageToggleOnScroll=({primaryImg,secindaryImg}) => {
    const imageRef = useRef(null);

    const [isLoading,setIsLOading] = useState(true);
    const [inView,setInView] = useState(false);

    const isInView = () => {
        const react = imageRef.current.getBoundClientRect();
        return react.top >= 0 && react.bottom <=window.innerHeight;
    };
    useEffect(() => { 

        setIsLoading(false);
        setInView(isInView());
        window.addEventListener("scroll", scrollHandler);
        return() => {
            window.removeEventListener("scroll",scrollHandler);
        };

},[]);

const scrollHandler = () => {
    setInView(isInView());
};

return(
    <img src={inView ? secondaryImg : primaryImg}
        alt="" ref={imageRef}
        />
);
};

export default ImageToggleOnScroll;