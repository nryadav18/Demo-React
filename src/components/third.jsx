import React from 'react'
import './third.css'
import Star from "../assets/star.png"
import ARRahman from "../assets/arrahman.jpg"
import SidSriRam from "../assets/sid.jpg"
import Anirudh from "../assets/anirudhimg.jpg"
import Revanth from "../assets/revanth.webp"

function Third() {
    return (
        <>
            <div className="third">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <div className="ttop">
                    <p style={{color:'#48C067',fontSize:'50px'}}>THE TOP ARTISTS</p>
                    <p>Tonight’s concert is a celebration of music, talent, and creativity. It is an opportunity to bring together music lovers from all walks of life to enjoy a diverse and captivating lineup of performances.</p>
                </div>
                <div className="tbot">
                    <div className="tbd">
                        <img src={ARRahman} alt="" />
                        <p style={{fontSize:'40px',textAlign:'center'}}>A R Rahman</p>
                    </div>
                    <div className="tbd">
                        <img src={SidSriRam} alt="" />
                        <p style={{fontSize:'40px',textAlign:'center'}}>Sid SriRam</p>
                    </div>
                    <div className="tbd">
                        <img src={Anirudh} alt="" />
                        <p style={{fontSize:'40px',textAlign:'center'}}>Anirudh</p>
                    </div>
                    <div className="tbd">
                        <img src={Revanth} alt="" />
                        <p style={{fontSize:'40px',textAlign:'center'}}>Revanth</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Third