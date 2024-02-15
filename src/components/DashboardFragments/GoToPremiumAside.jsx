import Button from '../Elements/Button'
import OutlineCard from '../Fragments/OutlineCard'
import goToPremiumCrown from '../../assets/go-to-premium-crown.svg'

export default function GoToPremiumAside() {
  return (
    <OutlineCard>
      <OutlineCard.Header className="justify-center">
        <OutlineCard.Title2 title="Go to premium" />
      </OutlineCard.Header>
      <OutlineCard.Body className="dsp-flex fl-colm gap-10">
        <img src={goToPremiumCrown} alt="crown" width={90} />
        <p className="font-size-18 font-weg-700">Need more feature?</p>
        <p className="font-size-16 disabled-text-2">Update your account to premium to get more feature</p>
        <Button height="50px" ariaLabel="Go to premium" className="mrgn-t-10">
          Get now
        </Button>
      </OutlineCard.Body>
    </OutlineCard>
  )
}
