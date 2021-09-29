import Blogers from "./Blogerslist";
import {useState} from 'react'
function Body({filter}){
    const resdata=[{
        id:1,
        publishername:"Satyam",
        publishdate:"15-SEP-2021",
        photourl:"../../../public/images/Profile_pic.jpeg",
        title:"TRAVELING IS NOT GOOD IN FOREst",
        body:`A Small River is Not good dumping wast because its too easy to detect
        where dumping is done. A Small River is Not good dumping wast because its too easy to detect where
        dumping is done`,
        readmore:true
    },
    {
        id:2,
        publishername:"RAMA NUJAN",
        publishdate:"15-SEP-2021",
        photourl:"../../../public/images/Profile_pic.jpeg",
        title:"TRAVELING IS NOT GOOD IN FOREst",
        body:`A Small River is Not good dumping wast because its too easy to detect
        where dumping is done. A Small River is Not good dumping wast because its too easy to detect where
        dumping is done`,
        readmore:true
    }]
    const[blog,setblog]=useState(resdata);
    
    function filterdata(filterdata){
        console.log("Body => ",filterdata)
    }

    return(
        <div className="flex-row" >
            <Blogers data={blog} filter={filterdata} />
        </div>
    )
}
export default Body;