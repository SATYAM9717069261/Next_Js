import Image from 'next/image'
import Profilepic from '../../../public/images/Profile_pic.jpeg'
function MainpageBlogerlist(changecontent){
    return (
        <div className="flex-row box blog-container">
                    <div style= {{flex: "1" ,textAlign: "center"}}>
                        {/* <Image className="pic-img" src={Profilepic} alt="Bloger User Image"/> */}
                    </div>
                    <div className="flex-4">
                        <section>
                            <p className="blog-header">TRAVELING IS NOT GOOD IN FOREst</p>
                            <p className="blog-date">
                                <span>Publisher Name : SATYAM MADNAL</span> <br/>
                                <span>Publish DATE : 15-SEP-2021 </span>
                            </p>
                            <p className="blog-body">A Small River is Not good dumping wast because its too easy to detect
                                where dumping is done. A Small River is Not good dumping wast because its too easy to detect where
                                dumping is done.</p>
                            <button className="blog-button" onClick={changecontent}> READ More..</button>
                        </section>
                    </div>
                </div>
    )
}
export default MainpageBlogerlist;