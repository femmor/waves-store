import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/fontawesome-free-solid"

const Footer = () => {
    return (
        <div>
            <footer className="bck_b_dark">
                <div className="container">
                    <div className="logo">Waves</div>
                    <div className="wrapper">
                        <div className="left">
                            <h2>Contact Information</h2>
                            <div className="business_nfo">
                                <div className="tag">
                                    <FontAwesomeIcon icon={Icons.faCompass} className="icon"/>
                                    <div className="nfo">
                                    <div>Address</div>
                                    <div>Kramer 1234</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon icon={Icons.faPhone} className="icon"/>
                                    <div className="nfo">
                                    <div>Phone</div>
                                    <div>222 222 2222</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon icon={Icons.faClock} className="icon"/>
                                    <div className="nfo">
                                    <div>Working Hours</div>
                                    <div>Mon - Sat / 9am - 8pm</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon icon={Icons.faEnvelope} className="icon"/>
                                    <div className="nfo">
                                    <div>Email</div>
                                    <div>support@waves.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left">
                            <h2>Be the first to know</h2>
                            <div>Get all the latest information on events, sales, offers...</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
