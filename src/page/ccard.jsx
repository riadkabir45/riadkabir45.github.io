function CCard({children,src}) {

  return (
    <div className="card">
		<img  className="card-img" src={src}/>
		{children}
    </div>
  )
}

export default CCard
