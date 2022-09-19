import React, { useState } from "react";
import '../../styles/Ongoing.scss';
import Header from '../../components/header/Header.js';
import Chat from "../../components/common/chat/Chat";
import Nouislider from "nouislider-react";

import "nouislider/distribute/nouislider.css";

const Ongoing = () => {
    const [value, setValue] = useState([0, 0])
    const [members, setMembers] = useState(["이윤성", "김건호"])
    const handleClick = () => {
      setValue(0);
    };
    const displayvalue = (idx, event) => {
        console.log(event, idx)
        console.log(value)
        const temp = [...value]
        temp[idx] = event[idx]
        setValue(temp)
    }
    return(
        <>
            <Header/>
            <Chat/>

            <div className="Ongoningiteam">
                {/* <div className="Ongoning myOngoning">
                    <img alt="user" src={require('../../images/userimg.svg').default}/>
                    <div className="nouislider">
                        <p className="nouislider-p">나</p>
                        <div className="nouislider-1">
                            <Nouislider
                                start={value[0]}
                                    range={{
                                    min: 0,
                                    max: 100
                                }}
                                connect onChange={displayvalue} 
                            />
                            <p className="nouislider-2">진행도 : {value[0]}%</p>
                        </div>  
                    </div>
                </div> */}
                {
                    members.map((member,idx) => {
                        return (
                        <div className="Ongoning" key={idx}>
                            <img alt="user" src={require('../../images/userimg.svg').default}/>
                            <div className="nouislider">
                        <p className="nouislider-p">나</p>
                        <div className="nouislider-1">
                            <Nouislider
                                start={value[idx]}
                                    range={{
                                    min: 0,
                                    max: 100
                                }}
                                connect onChange={(e) => displayvalue(idx, e)} 
                            />
                            <p className="nouislider-2">진행도 : {value[0]}%</p>
                        </div>  
                    </div>
                        </div>
                        )
                    })
                }   
            </div>
        </>
    )}

export default Ongoing;