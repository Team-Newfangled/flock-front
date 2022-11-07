import React, { useState } from "react";
import '../../styles/Ongoing.scss';
import Header from '../../components/header/Header.js';
import Chat from "../../components/common/chat/Chat";
import Nouislider from "nouislider-react";

import "nouislider/distribute/nouislider.css";

const Ongoing = () => {
    const [value, setValue] = useState([0, 0, 0])
    const [members, setMembers] = useState(["이윤성", "김건호", "이원준"])
    const [isRender, setRender] = useState(false);

    const displayvalue = (idx, event) => {
        const temp = value
        temp[idx] = parseInt(event[0])
        setValue(temp)
        setRender(prev => !prev)
    }

    return(
        <>
            <Header/>
            <Chat/>

            <div className="Ongoningiteam">
                {
                    members.map((member,idx) => {
                        console.log("member: ", member)
                        console.log("idx: ", idx)
                        return (
                        <div className="Ongoning" key={idx}>
                            <img alt="user" src={require('../../images/userimg.svg').default}/>
                            <div className="nouislider">
                        <p className="nouislider-p">{member}</p>
                        <div className="nouislider-1">
                            <Nouislider
                                start={value[idx]}
                                    range={{
                                    min: 0,
                                    max: 100
                                }}
                                connect onChange={(e) => displayvalue(idx, e)} 
                            />
                            <p className="nouislider-2">진행도 : {value[idx]}%</p>
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