const suggestionMaster = [
    "Laptop",
    "Mobile",
    "Phone"
];

export default function UseEffectComponent()
{
    const[recommnedation, setRecommendation]=useState([])
    const[search, setSearch]=useState("");

    useEffect(()=>{
        setRecommnedatino(suggestionMaster.filter((elem)=>{return elem.includes(search)}))
    },[search])

    return(
        <div>
            <input value={search} onChange={(e)=>setSearch(e.target.value)}/>
            {
                recommnedation.map((elemnet,index)=><div key={index}>{index}. {element}</div>)
            }
        </div>
    )
}