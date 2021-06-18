import React from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/bw/Speaker.jpg"
                                    secondaryImg="/static/Speaker.jpg" alt=""/>
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/static/bw/Speaker.jpg"
                                    secondaryImg="/static/Speaker.jpg" alt=""/>
        </div>
    );
};

export default ImageChangeOnMouseOver;