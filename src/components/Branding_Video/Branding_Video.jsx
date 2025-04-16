import React from 'react'
import './Branding_Video.css'
const BrandingVideo = ()=>{
    return(
        <div className="bv-wrapper">
        <div className="bv-container">
            <div className="container">
                <video className="bv-video" loop muted autoPlay controls="">
                    <source src='/PocketPal Video.mp4' type='video/mp4'></source>
                </video>
            </div>
        </div>
        </div>
    )   
}

export default BrandingVideo
