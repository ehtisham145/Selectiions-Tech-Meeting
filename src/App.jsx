import TopBar from './components/TopBar.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import JoinForm from './components/JoinForm.jsx'
import Badges from './components/Badges.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <TopBar />
      <div id="landing-page">
        <Header />
        <Hero />
        <JoinForm />
        <Badges />
        <Footer />
      </div>
    </>
  )
}
