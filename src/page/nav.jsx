function Nav() {
  return (
    <div className="Nav">
    <div className="navT"><div>Riadkabir45</div></div>
    <div>
		<button className="NavB" onClick={() => document.getElementById('Home').scrollIntoView()} >Home</button>
		<button className="NavB" onClick={() => document.getElementById('About').scrollIntoView()} >About</button>
		<button className="NavB" onClick={() => document.getElementById('Show').scrollIntoView()} >Show</button>
		<button className="NavB" onClick={() => document.getElementById('Contact').scrollIntoView()} >Contact</button>
	</div>
    </div>
  )
}

export default Nav
