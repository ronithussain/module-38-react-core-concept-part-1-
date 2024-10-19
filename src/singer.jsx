export default function Singer({singer}){
    console.log(singer)
    return(
        <div className="student">
            <h3>Id:{singer.id} Singer: {singer.name} age: {singer.age}</h3>
        </div>
    )
}