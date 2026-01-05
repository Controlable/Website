import Hero from './Hero'
import CTASection from './CTASection'
import {
  ValueDelivered,
  Mission,
  PlatformBuilding,
  HowItWorks,
  Differentiation,
  WhoFor,
  Team
} from './ContentSections'

function LandingPage() {
  return (
    <>
      <Hero />
      <ValueDelivered />
      <Mission />
      <PlatformBuilding />
      <HowItWorks />
      <Differentiation />
      <WhoFor />
      <Team />
      <CTASection />
    </>
  )
}

export default LandingPage
