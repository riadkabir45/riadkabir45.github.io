import mainIcon from '/prof.jpeg'

function Main() {

  return (
    <div className="page Main" id="Home">
    <div className="flex homeD" >
		<div className="homeText" ><p className="res" >Hi, <i className="bi bi-emoji-smile em0"></i><i className="bi bi-emoji-dizzy em1"></i></p></div>
		<div className="homeText second" ><p>I am Mokaddimul Kabir</p></div>
		<div className="homeText third" ><p>
			CS stundent at Brac University<br/>
			I'm good at automation, software development and linux
		</p></div>
    </div>
    <div className="flex homeL" ><div className="logoBG"><img className="mainLogo" src={mainIcon}/></div></div>
    </div>
  )
}

export default Main
