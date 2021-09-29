import Body from "./body";
import {useRef,useState} from 'react'
function app() {
    const filter=useRef(null);
    const [Filterarray,setFilterarray]=useState([]);

    function addfilter(filterdata){
        if(filterdata != "") {
            setFilterarray([...Filterarray,filterdata]);
            filter.current.value="";
        } 
    }

    return (
        <>
            <header> This App Created in Next Js </header>
            <div className="flex-row box header">
                <div className="center font-large-space-3" style={{flex:"auto"}}>Bloging Application</div>
                <div className="flex-row-rev center" style={{flex:"auto"}}>
                    <span>
                        <div className="search-box">
                        <button className="btn-search" onClick={()=>addfilter(filter.current.value)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                            <input type="text" className="input-search" placeholder="Type to Search..." ref={filter}/>
                        </div>
                    </span>
                    {
                        Filterarray.map((data)=>{
                            return <span className="box filter" key={data}>{data}</span>        
                        })
                    }
                </div>
            </div>
            <Body filter={Filterarray}/>
        </>
    )
}

export default app;