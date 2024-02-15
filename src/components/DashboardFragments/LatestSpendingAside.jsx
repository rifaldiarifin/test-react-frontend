import * as Feather from 'react-feather'
import Button from '../Elements/Button'
import ItemInfo from '../Fragments/ItemInfo'
import Hyperlink from '../Elements/Hyperlink'
import OutlineCard from '../Fragments/OutlineCard'

export default function LatestSpendingAside() {
  return (
    <OutlineCard>
      <OutlineCard.Header>
        <OutlineCard.Title title="Latest spending" />
        <Button
          color="transparent"
          height="36px"
          icon={<Feather.MoreVertical className={Button.IconClass} />}
          iconOnly
        />
      </OutlineCard.Header>
      <OutlineCard.Body>
        <ItemInfo>
          <ItemInfo.Item
            src="/common/avatar2.png"
            alt="user profile"
            title="Online store"
            description="May 30,2023 at 08:00 pm"
          />
          <ItemInfo.Item
            src="/common/avatar3.png"
            alt="user profile"
            title="Pay the hospital"
            description="May 28,2023 at 10:00 pm"
          />
          <ItemInfo.Item
            src="/common/avatar4.png"
            alt="user profile"
            title="Tickets"
            description="May 10,2023 at 12:00 pm"
          />
        </ItemInfo>
        <div className="dsp-flex justify-center mrgn-t-20">
          <Hyperlink ariaLabel="view all spending">
            View all
            <Feather.ArrowRight className={Hyperlink.IconClass} />
          </Hyperlink>
        </div>
      </OutlineCard.Body>
    </OutlineCard>
  )
}
