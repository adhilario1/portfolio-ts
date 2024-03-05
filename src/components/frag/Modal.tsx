import React, { ReactElement, useState } from "react";

import './../css/Modal.css'
import { Post } from "../../models/Post";
import useWindowDimensions from "../code/WindowDimensions";

interface Props {
    className?: string;
    post?: Post;
    breakpoint?:number;
    //onClose: Function;
}

const Modal = ({className, post, breakpoint}: Props) => {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    

    if(modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    const {height, width} = useWindowDimensions();

    var modalClassname = "modal-content";
    if (breakpoint && (height && width < breakpoint )) {
        modalClassname="modal-content-fullscreen";
    }
    
    
    
    function contentType(thumbnail: boolean = false, type: string | undefined):ReactElement {
        var t_bool = thumbnail? "thumbnail" : "";

        if (type===undefined) return (<></>)
        if (type==="image") {
            //setImage(true);
            return (<img className={`image ${t_bool}`} src={post?.url}></img>);
            
        } else if (type==="yt") {
            //setYT(true);
            return (<iframe className={`video ${t_bool}`} width="auto" height="auto" src={post?.url} title="YouTube video player" /*frameborder="0"*/ allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>);
        } else if (type==="video"){
            var fileExt = post?.url.split('.').pop();
            //setVideo(true);
            return (
            <video>
                <source className={`image ${t_bool}`} src={post?.url} type={`video/${fileExt}`}/>
                Browser does not support HTML video
            </video>)
        }
        else return(<></>)
    }


    return (
        <>
        <div className={`open-modal ${className}`} onClick={toggleModal}> 
            {contentType(true, post?.type)}
            <div className="cover"></div>
        </div>
        {modal && (
            <div className="modal-container">
                <div onClick={toggleModal} className="overlay" />
                <div className={`${modalClassname}`}>
                    <button className="close-modal" onClick={toggleModal}>[X]</button>
                    <div className="secondary-label">
                        <h2>{post?.title}</h2>
                    </div>
                    <div className="viewport-body">
                        {contentType(false, post?.type)}
                        
                    </div>
                    <div className="description">
                        {post?.description}
                    </div>
                </div>
            </div>
        )}
        </>
    )
}



export default Modal;