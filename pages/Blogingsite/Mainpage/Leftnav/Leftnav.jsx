import style from '../../../../styles/MainpageBlogerlist.module.css'
function Leftnav() {
    return (
        <div className="flex-row box blog-container">
            <div className="flex-4">
                <section>
                    <p className={`blog-header ${style.changefontheader}`}>TRAVELING IS NOT GOOD IN FOREst</p>
                    <p className="blog-date">
                        <span>Publisher Name : SATYAM MADNAL</span> <br />
                        <span>Publish DATE : 15-SEP-2021 </span>
                        <span className={style.sidemenu}>&raquo;</span>
                    </p>
                </section>
            </div>
        </div>
    )
}
export default Leftnav;