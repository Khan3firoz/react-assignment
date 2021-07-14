import React from 'react'
import { Button } from '../Button';
import working from '../../images/illustration-working.svg'
import './HomePage.css';
import { BoosterLink } from '../Boosterlink/BoosterLink';
import SearchComp from '../SerchComp/SearchCopm';
import Footer from '../Footer/Footer';

const HomePage = () => {
    return (
        <>

            <div style={{ height: "100vh ", width: "90vw"}}>
                <div className="homeContainer">
                <div className="mainHeading">
                        <span>More than just shorter links</span>
                        <div className="subHeading">
                        <p>Build your brands recognition and get detailed insights on how you links are perfoming.</p>
                        </div>
                    <button>Get Stated</button>
                </div>
            <div className="workingImg">
                <img src={working} alt=""/>
            </div>

            </div>

            </div>
            <div style={{ height: "100vh", width: "90vw"}}>
                <SearchComp/>
            </div>
            <div style={{width:"90vw"}}>
                <BoosterLink/>
            </div>
            <div style={{width:"90vw"}}>
                <Footer/>
            </div>

        </>
    )
}

export default HomePage
