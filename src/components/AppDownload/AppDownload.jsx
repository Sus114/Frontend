import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br />Tomato App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="https://www.zomato.com/mobile"/>
                <img src={assets.app_store} alt="https://zomato.onelink.me/xqzv/CTA"/>
            </div>
        </div>
    )
}

export default AppDownload
