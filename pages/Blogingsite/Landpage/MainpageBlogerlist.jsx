import Image from 'next/image'
import style from '../../../styles/MainpageBlogerlist.module.css'
import Profilepic from '../../../public/images/Profile_pic.jpeg'
function MainpageBlogerlist({changecontent,data}){
    return (
        <div className="flex-row box blog-container">
                    <div className={style.img}>
                        <Image className="pic-img" src={Profilepic} alt="Bloger User Image"/>
                    </div>
                    <div className="flex-4">
                        <section>
                            <p className="blog-header">{data.title}</p>
                            <p className="blog-date">
                                <span>Publisher Name : {data.publishername}</span> <br/>
                                <span>Publish DATE : {data.publishdate}</span>
                            </p>
                            <p className="blog-body">{data.body}</p>
                            {data.readmore?<button className="blog-button" onClick={()=>{changecontent(data)}}> READ More..</button>:""}
                        </section>
                    </div>
                </div>
    )
}
export default MainpageBlogerlist;