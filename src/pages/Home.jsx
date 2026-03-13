import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedListings from '../components/FeaturedListings'
import NewInUtrecht from '../components/NewInUtrecht'
import Events from '../components/Events'
import PartnerCTA from '../components/PartnerCTA'
import CommunityStats from '../components/CommunityStats'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <FeaturedListings />
      <NewInUtrecht />
      <Events />
      <PartnerCTA />
      <CommunityStats />
      <Footer />
    </>
  )
}
