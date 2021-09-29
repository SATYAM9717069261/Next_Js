import MainpageBlogerlist from "./Landpage/MainpageBlogerlist";
import Leftnav from "./Mainpage/Leftnav/Leftnav";
import Rightnav from "./Mainpage/Rightnav/Rightnav";
import { useState, useEffect } from "react";
import Link from "next/link";
import Customstyle from '../../styles/Blogerlist.module.css'
function Blogers({ data ,filter }) {
    const[selectedusername,setseleectedusername]=useState(null);
    const [pagecontent, setpagecontent] = useState(true);
    // const containerData = {
    //    Mainpagecontent: <MainpageBlogerlist changecontent={changecontent} />
    // }

    // useEffect(() => {
    //   //  containerData.Mainpagecontent = pagecontent ? (<MainpageBlogerlist changecontent={changecontent} />) : ((<Leftnav />, <Rightnav />));
    //     console.log("Change Detected", containerData.Mainpagecontent)
    // }, [pagecontent]);

    function selecteduser(data){
        setpagecontent(false);
        filter(data);
        setseleectedusername(data.publishername);
    }
    function selectpost(data){
        console.log("Selected post ", data);
    }
    return (
        <>
            <div className={`left ${Customstyle.flex}`}>
                <header>BLOGERS</header>
                <div className={`flex-col center blog ${Customstyle.container}`}>
                    {/* containerData.Mainpagecontent */}
                    {pagecontent ?
                        data.map((datavalue) => {
                            return <MainpageBlogerlist key={datavalue.id} data={datavalue} changecontent={selecteduser}  />
                        })
                        : data.map((datavalue) => {
                            return <Leftnav key={datavalue.id} data={datavalue} selected={selectpost} />
                        })
                    }
                </div>
                <div className="pagination">
                    <Link href="#"><a>&laquo;</a></Link>
                    <Link href="#"><a className="selected-page">1</a></Link>
                    <Link href="#"><a>2</a></Link>
                    <Link href="#"><a>&raquo;</a></Link>
                </div>
            </div>

            {
                pagecontent ? "" : 
                    <div className={`right ${Customstyle.flex4}`}>
                        <header>{selectedusername}<small>/Post Header</small></header>
                        <div className={`blog ${Customstyle.blog}`}>
                        {data.map((datavalue) => {
                            return <Rightnav key={datavalue.id} data={datavalue} />
                        })}
                        </div>
                        <div className="flex-row blog-date">
                            <div className={Customstyle.info}>
                                <span >Email:abc@gmail.com</span><br />
                                <span >Contect Number:120-1039-290</span>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
export default Blogers;