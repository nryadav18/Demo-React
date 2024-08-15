import React from 'react'
import './fourth.css'
import img2 from '../assets/otf2.jpg'
import img3 from '../assets/otf3.jpg'
import img4 from '../assets/otf4.jpg'
import img5 from '../assets/otf5.jpg'
import img6 from '../assets/otf6.jpg'
import img7 from '../assets/otf7.jpg'
import img8 from '../assets/otf8.jpg'
import img9 from '../assets/otf9.jpg'
import img1 from '../assets/otf10.jpg'

function Fourth() {
    return (
        <div className="fourth">
            <div className="ftop">
                <p>SHOP YOUR MERCH</p>
                <p>Dear Music Lover, Allow me to whisk you away, through harmony and rhythm, to a magical evening of music and creativity. <br />
                We are delighted to invite you to the annual concert hosted by RajBrands, where gifted musicians from across the globe.</p>
            </div>
            <div className="fbot">
                <div className="fbcard">
                    <img src={img1} alt="" />
                    <p>Golden Shiny</p>
                    <div className="cbut">View</div>
                </div>
                <div className="fbcard">
                    <img src={img2} alt="" />
                    <p>Thick Black</p>
                    <div className="cbut">View</div>
                </div>
                <div className="fbcard">
                    <img src={img3} alt="" />
                    <p>Shiny Goldy</p>
                    <div className="cbut">View</div>
                </div>
                <div className="fbcard">
                    <img src={img4} alt="" />
                    <p>Dark Blue</p>
                    <div className="cbut">View</div>
                </div>
                <div className="fbcard">
                    <img src={img5} alt="" />
                    <p>Goldy Blue</p>
                    <div className="cbut">View</div>
                </div>
                <div className="fbcard">
                    <img src={img6} alt="" />
                    <p>Crimpson Red</p>
                    <div className="cbut">View</div>
                </div>
                <div className="fbcard">
                    <img src={img7} alt="" />
                    <p>Silver Grey</p>
                    <div className="cbut">View</div>
                </div>
                <div className="fbcard">
                    <img src={img8} alt="" />
                    <p>Light Gold</p>
                    <div className="cbut">View</div>
                </div>
                <div className="fbcard">
                    <img src={img9} alt="" />
                    <p>Matty Black</p>
                    <div className="cbut">View</div>
                </div>
                <div className="fbcard">
                    <img src={img3} alt="" />
                    <p>Gold Matty</p>
                    <div className="cbut">View</div>
                </div>
            </div>
        </div>
    )
}

export default Fourth