import CCard from './ccard.jsx'

function Contact() {

  return (
    <div className="Contact page" id="Contact">
		<div className="subc">
			<button className="bi bi-youtube" onClick={() => location.href='https://www.youtube.com/@codeerza45'}></button>
			<button className="bi bi-github" onClick={() => location.href='https://www.github.com/riadkabir45'}></button>
			<button className="bi bi-facebook" onClick={() => location.href='https://www.facebook.com/erza.scarlet.45'}></button>
		</div>
		<div className="subc">
			<CCard src="/ashik.jpg">Ashik</CCard>
			<CCard src="/samio.jpg">Samio</CCard>
			<CCard src="/rifat.jpg">Rifat</CCard>
			<CCard src="/naimur.png">Naimur</CCard>
			<CCard src="/navana.png">Navana</CCard>
		</div>
    </div>
  )
}

export default Contact
