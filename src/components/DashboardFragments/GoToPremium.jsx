import Button from '../Elements/Button'
import Card from '../Fragments/Card'
import goToPremiumCrown from '../../assets/go-to-premium-crown.svg'

export default function GoToPremium() {
  return (
    <Card>
      <Card.Header className="justify-center">
        <Card.Title2 title="Go to premium" />
      </Card.Header>
      <Card.Panel className="dsp-flex fl-colm gap-10">
        <img src={goToPremiumCrown} alt="crown" width={90} />
        <p className="font-size-18 font-weg-700">Need more feature?</p>
        <p className="font-size-16 disabled-text-2">Update your account to premium to get more feature</p>
        <Button height="50px" ariaLabel="Go to premium" className="mrgn-t-10">
          Get now
        </Button>
      </Card.Panel>
    </Card>
  )
}
