import React, { useState } from "react";
import '../../styles/Ongoing.scss';
import Header from '../../components/header/Header.js';
import Chat from "../../components/common/chat/Chat";
import Nouislider from "nouislider-react";

import "nouislider/distribute/nouislider.css";

const Ongoing = () => {
    const [value, setValue] = useState(0);

    const handleClick = () => {
      setValue(0);
    };

    return(
        <>
            <Header/>
            <Chat/>
            <div className="Ongoningiteam">
                <div className="Ongoning myOngoning">
                    <img alt="user" src={require('../../images/userimg.svg').default}/>
                    <div className="nouislider">
                        <p>나</p>
                        <div className="nouislider">
                            <Nouislider
                                start={value}
                                range={{
                                    min: 0,
                                    max: 100
                                }}
                                connect
                            />
                        </div>  
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