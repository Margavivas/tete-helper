
//trigers function
const singOut = () =>{
alert("hello you are singout")
}

function ListHeader({listName}) {
    return (
      <div className="list-header">
        <h1>{listName}</h1>
        <div className="button-container">
            <button className="create">ADD NEW</button>
            <button className="singout" onClick={singOut}> SINGOUT</button>
        </div>
      </div>
    )
  }
  
  export default ListHeader
  