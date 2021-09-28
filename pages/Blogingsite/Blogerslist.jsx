import MainpageBlogerlist from "./Landpage/MainpageBlogerlist";
function Blogers(){
    return(
        <div className="left" style={{flex:"1"}}>
            <header>BLOGERS</header>
            <div className="flex-col center blog" style={{height: "34em !important"}}>
                <MainpageBlogerlist/>
                <MainpageBlogerlist/>
                <MainpageBlogerlist/>
            </div>
            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#" className="selected-page">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    )
}
export default Blogers;