import React from 'react';
import './EsaLink.scss';
import img from '../../assests/img/esalink.webp';
import global from '../../assests/img/global.svg'
function EsaLink () {
    return (
        <>
            <div className='navbar'>
                <div className='bg-gradient-esalink'>
                    <div className='topbar'>
                        <div className='left'><h2>EsaLink </h2><span>DATA INTEGRATION</span></div>  
                        <div className='mid'>
                            <div className='mid-col-1'>
                                ELECTRONIC INVOICING 2024
                            </div>
                            <div className='mid-col-2'>
                                <li>Expertise</li>
                                <li>Solutions</li>
                                <li>Services</li>
                                <li>Blog</li>
                            </div>
                        </div>
                        <div className='right'>
                            <li>CONNEXION TMA</li>
                            <li>GET A DEMO</li>
                            <select>
                                <option>FN</option>
                                <option>En</option>
                                <option>T</option>
                            </select>
                        </div>                      
                    </div>

                    <div className='row'>
                        <div className='row-col-1'>
                            <div className='iso-img'>
                                <img src= {img}/>
                            </div>
                            <div className='content'>
                                <span>
                                    Dematerilaization
                                </span>
                                <span>
                                    at the service of your business
                                </span>
                                <h3>
                                    EsaLink supports you in the digitalization of your B2B flows
                                </h3>
                            </div>
                            <div className='bottom'>
                                <li>Find your EDI solution</li>
                                <li>Switch to electronic invoicing</li>
                            </div>
                        </div>
                        <div className='row-col-2'>
                            <img src={global} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EsaLink;