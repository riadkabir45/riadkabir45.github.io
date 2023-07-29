function CCard({children}) {

  return (
    <div className="showcard">
		<img  className="mx-auto d-block p-5 rounded" width="80%" src={children}/>
    </div>
  )
}

export default CCard
