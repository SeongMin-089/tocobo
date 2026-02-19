import './styles/main.scss'
import Header from './components/Header'
import Hero from './sections/Hero'
import Footer from './components/Footer'
import Follow from './sections/Follow'
import Collection from './sections/Collection'
import SkinCare from './sections/SkinCare'
import Instagram from './sections/instagram'
function App() {

  return (
    <div>
      <Header/>
      <main>
        <section id="hero" className='section'>
          <Hero/>
        </section>

        <section id="follow" className='section'>
          <Follow/>
        </section>

        <section id="collection" className='section'>
          <Collection/>
        </section>

        <section id="skincare" className='section'>
          <SkinCare/>
        </section>

        <section id="instagram" className='section'>
          <Instagram/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default App
