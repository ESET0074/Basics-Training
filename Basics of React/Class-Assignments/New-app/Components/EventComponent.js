
const dummyjson={
 "first name":"first name",
  "last name":"last name",
  "newjson":{
    "target":"value"
  }

} 

function EventComponent(){

    

    const onChangeHandler = (e)=>{
        if(e.target.value==="Aniket")
        {
        console.log("Yes")
        }
        else{
            console.log("No")
        }

    }
    return(
        <>
        Welcome to Events
        <button onClick={()=>(
            console.log("button clicked")
        )}>click me</button>

        <div style ={{ background: "blue", padding:'50px'}}
        
        onMouseEnter={()=>{console.log("Mouse entered the div")}}
        
        onMouseLeave={()=>{console.log("Mouse left the div")}}>
            this is div
        </div>

        <input type="text" onChange={onChangeHandler}/>
        </>
    )
}

export default EventComponent;