import Link from "next/link";
import Image from 'next/image'
import style from '../../../../styles/MainpageBlogerlist.module.css'
import Postimage from '../../../../public/images/mqdwglmv.bmp'

function Rightnav() {
    return (
        <div className="flex-row box blog-container blog-detail">
            <div className={style.sidebog}>
                <Image className={style.postimg} src={Postimage} alt="" />
            </div>
            <div className="flex-4">
                <section>
                    <p className="blog-header">TRAVELING IS NOT GOOD IN FOREst</p>
                    <p className="blog-date">
                        <span>Publisher Name : SATYAM MADNAL</span> <br />
                        <span>Publish DATE : 15-SEP-2021 </span>
                    </p>
                    <p className="blog-body">Asansol is a metropolitan city in the Indian state of West Bengal. It is the second largest and most populated city of West Bengal and the 39th largest urban agglomeration in India. Asansol is the district headquarters of Paschim Bardhaman district. According to a 2010 report released by the International
                        Asansol is a metropolitan city in the Indian state of West Bengal. It is the second largest and most populated city of West Bengal and the 39th largest urban agglomeration in India. Asansol is the district headquarters of Paschim Bardhaman district. According to a 2010 report released by the International Institute for Environment and Development, a UK-based policy research non-governmental body,
                        Asansol was ranked 11th among Indian cities and 42nd in the world in its list of 100 fastest-growing cities.[11] Asansol is classNameed as a Y-category city for calculation of HRA (House Rent Allowance) for public servants, making it a Tier-II city.
                        Institute for Environment and Development, a UK-based policy research non-governmental body, Asansol was ranked 11th among Indian cities and 42nd in the world in its list of 100 fastest-growing cities.[11] Asansol is classNameed as a Y-category city for calculation of HRA (House Rent Allowance) for public servants, making it a Tier-II city. </p>
                </section>
            </div>
        </div>

    )
}
export default Rightnav;