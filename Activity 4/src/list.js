import ListChild from "./listChild";

function list(){
    // const l = ['Apple','Banana','Grapes']
    const li = [
        {id:1,name:'Aadhi',age:18},
        {id:2,name:'Magi',age:18},
        {id:3,name:'Felix',age:18}
    ]
    return(
        <div> 
            {/* <h1>{l[0]}</h1>
            <h1>{l[1]}</h1>
            <h1>{l[2]}</h1> */}
            {/* {l.map(x => <h1>{x}</h1>)} */}
            {/* {li.map(x => <h1 key={x.id}>{x.id}{x.name}{x.age}</h1>)} */}
            {li.map(item=> <ListChild key = {item.id} lItems={item}/> )}
        </div>
    );
}
export default list;