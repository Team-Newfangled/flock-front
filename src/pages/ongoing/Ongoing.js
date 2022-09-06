import React from "react";
import '../../styles/Ongoing.scss';
import Header from '../../components/header/Header.js';
import Chat from "../../components/common/chat/Chat";

const Ongoing = () => {
    return(
        <>
            <Header/>
            <Chat/>
            <div className="Ongoningiteam">
                <div className="Ongoning myOngoning">
                    <img alt="user" src={require('../../images/userimg.svg').default}/>
                    <div>
                        <p>나</p>
                    </div>
                </div>
                <div className="Ongoning">
                    <img alt="user" src={require('../../images/userimg.svg').default}/>
                    <div>
                        <p>나</p>
                    </div>
                </div>
            </div>
        </>
    )}

export default Ongoing;