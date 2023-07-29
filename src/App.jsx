import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Main from './page/main.jsx'
import About from './page/second.jsx'
import Contact from './page/contact.jsx'
import Nav from './page/nav.jsx'
import ShowCase from './page/showcase.jsx'

function App() {

  return (
	<>
		<Nav/>
		<Main/>
		<About/>
		<ShowCase/>
		<Contact/>
    </>
  )
}

export default App
