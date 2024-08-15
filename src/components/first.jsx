import React from 'react'
import './first.css'
import Anirudh from '../assets/anirudh.jpg'
import GreenBar from '../assets/greenbar.png'
import Star from '../assets/star.png'

function First() {
    return (
        <>
            <div className="first">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={GreenBar} alt="" style={{borderRadius:'50%'}} />
                <img src={GreenBar} alt="" style={{borderRadius:'50%'}} />
                <div className="left">
                    <p className='join'>JOIN THE<br />CONCERT</p>
                    <p className='joinsub'>Dear Music Lover, Allow me to whisk you away, through harmony and rhythm, to a magical evening of music and creativity. We are delighted to invite you to the annual concert hosted by RajBrands, where gifted musicians from across the globe come together to express their passion and raw talent.</p>
                    <div className="but">
                        <div className="but1">Start</div>
                        <div className="but2">Stop</div>
                    </div>
                </div>
                <div className="mid">
                    <img src={Anirudh} alt="" />
                </div>
                <div className="right">
                    <div className="rleft">
                        <div className="bars"></div>
                        <p style={{fontSize : '30px', color: '#48C067'}}>08:12</p>
                        <p>Los Angels, USA</p>
                        <p style={{fontSize : '30px', color: '#48C067'}}>10:12</p>
                        <p>San Fransisco, USA</p>
                        <div className="bars"></div>
                    </div>
                    <div className="rright">
                    <div className="bars"></div>
                        <p style={{fontSize : '30px', color: '#48C067'}}>09:22</p>
                        <p>Los Angels, USA</p>
                        <p style={{fontSize : '30px', color: '#48C067'}}>11:22</p>
                        <p>San Fransisco, USA</p>
                        <div className="bars"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default First