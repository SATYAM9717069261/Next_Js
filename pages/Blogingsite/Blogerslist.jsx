import MainpageBlogerlist from "./Landpage/MainpageBlogerlist";
import Leftnav from "./Mainpage/Leftnav/Leftnav";
import Rightnav from "./Mainpage/Rightnav/Rightnav";
import { useState, useEffect } from "react"
import Link from "next/link"


function Blogers() {
    const [pagecontent, setpagecontent] = useState(true);
    useEffect(() => {
        containerData.Mainpagecontent = (<Leftnav />, <Rightnav />)
    }, [pagecontent]);
    function changecontent() {
        setpagecontent(fasle);
    }
    const containerData = {
        Mainpagecontent: <MainpageBlogerlist changecontent={changecontent} />
    }
    return (
        <div className="left" style={{ flex: "1" }}>
            <header>BLOGERS</header>
            <div className="flex-col center blog" style={pagecontent ? (customstyle.containerHeight) : ""} >
                {containerData.Mainpagecontent}
            </div>
            <div className="pagination">
                <Link><a>&laquo;</a></Link>
                <Link><a className="selected-page">1</a></Link>
                <Link><a>2</a></Link>
                <Link><a>3</a></Link>
                <Link><a>&raquo;</a></Link>
            </div>
        </div>
    )
}
const customstyle = {
    containerHeight: { height: "34em !important" }
}
export default Blogers;