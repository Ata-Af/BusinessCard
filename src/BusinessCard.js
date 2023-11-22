import React from "react";
import { ReactDOM } from "react";

export default function Bcard () {
    return(
        <div className="cardBody">
            <img className="userPic" src="/businessCard/AtaAminifar.png" width={317} height={317}/>
            <h1 className="h1_1">Ata Aminifar</h1>
            <h1 className="h1_2">Frontend Developer</h1>
            <h1 className="h1_3">AtaAmnifar.website</h1>
            <div className="buttonsGrid">
                <a href="ataaminifar.public@gmail.com" target="_blank">
                    <button>
                        <img src="/businessCard/buttonsLogo/Mail.png" width={19} height={19}/>
                        <h1>Email</h1>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/ata-aminifar-605572164/" target="_blank">
                    <button>
                        <img src="/businessCard/buttonsLogo/Linkedin.png" width={19} height={19}/>
                        <h1>LinkedIn</h1>
                    </button>
                </a>
            </div>
            <div className="aboutGrid">
                <h1>About</h1>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h1>Interests</h1>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <div className="footerGrid">
                <div></div>
                <a href="ataaminifar.public@gmail.com" target="_blank"><img src="/businessCard/Gmail.png"/></a>
                <a href="https://github.com/Ata-Af" target="_blank"><img src="/businessCard/Github.png"/></a>
                <a href="https://instagram.com/ata_aminifar" target="_blank"><img src="/businessCard/Instagram.png"/></a>
                <a href="" target="_blank"><img src="/businessCard/Whatsapp.png"/></a>
            </div>
        </div>
    )
}