import Navbar from './Components/Navbar'
import Main from './Components/Main'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import ContactUs from './Components/ContactUs'
export default function Home() {
  return (
    <div className='mx-auto'>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactUs/>
    </div>
  )
}
