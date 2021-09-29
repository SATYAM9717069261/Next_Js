import style from '../../../../styles/MainpageBlogerlist.module.css'
function Leftnav({data,selected}) {
    return (
        <div className="flex-row box blog-container">
            <div className="flex-4">
                <section onClick={()=>{selected(data.id)}}>
                    <p className={`blog-header ${style.changefontheader}`}>{data.title}</p>
                    <p className="blog-date">
                        <span>Publish DATE : {data.publishdate} </span>
                        <span className={style.sidemenu}>&raquo;</span>
                    </p>
                </section>
            </div>
        </div>
    )
}
export default Leftnav;