import React from 'react';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ComputerIcon from '@mui/icons-material/Computer';
import GroupIcon from '@mui/icons-material/Group';
import './style.css';
import {useT} from '../../../custom/hooks/useT';

const Section3Home = () => {

    const { t, lang } = useT();

    return (
        <section className=' statistikaHomeSection w-100 text-white'>
            <div className='row main-title text-center bgsta'>
                <div className='col'>
                    <h1 className='mb-4 mt-4 text-white'>{t(`Statistics.${lang}`)}</h1>
                </div>
            </div>
            <div className="container">
                <div className='row sta pt-4 pb-4'>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='sta-item text-center'>
                            <BrowserUpdatedIcon sx={{ fontSize: "60px", marginBottom: "20px" }} />
                            <div className='sta-number-text'>
                                <h3>50</h3>
                                <p>Quis aliquet in a enim ipsum non sodales.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='sta-item text-center'>
                            <GroupIcon sx={{ fontSize: "60px", marginBottom: "20px" }} />
                            <div className='sta-number-text'>
                                <h3>23</h3>
                                <p>Quis aliquet in a enim ipsum non sodales.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='sta-item text-center'>
                            <ComputerIcon sx={{ fontSize: "60px", marginBottom: "20px" }} />
                            <div className='sta-number-text'>
                                <h3>36</h3>
                                <p>Quis aliquet in a enim ipsum non sodales.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='sta-item text-center'>
                            <BusinessCenterIcon sx={{ fontSize: "60px", marginBottom: "20px" }} />
                            <div className='sta-number-text'>
                                <h3>290</h3>
                                <p>Quis aliquet in a enim ipsum non sodales.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Section3Home;
