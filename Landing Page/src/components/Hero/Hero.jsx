import React from 'react'
import './Hero.css'
import { HeroData } from '@/src/utils/data';
const Hero= () =>{
    return(
        <div className="h-wrapper">
            <div className="container">
                <div className="h-container">
                    {/*left side*/}
                    <div className="h-left">
                        <div className="image-row">
                            {
                                HeroData.slice(0,3).map((person, i)=>(
                                    <div className="person-pill" key={i}>
                                        <div className="person-pill-bg">
                                            <img src={person.src} alt={person.src}/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>  
                        
                        <div className="image-row">
                            {
                                HeroData.slice(3,6).map((person, i)=>(
                                    <div className="person-pill" key={i}>
                                        <div className="person-pill-bg">
                                            <img src={person.src} alt={person.src}/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        
                    </div>
                    {/*right side*/}
                    <div className="h-right">
                            <div className="h-title">
                                <span>Redefine How</span>
                                <span>You Save Your</span>
                                <span>Pocket Money</span>
                            </div>
                        <div className="h-desc">
                            PocketPal is a fun expense tracker and subscription manager for the youth!
                        </div>
                        <span className='join-button'>Download the app!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;