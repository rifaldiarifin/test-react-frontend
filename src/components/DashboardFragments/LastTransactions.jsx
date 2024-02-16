import Button from '../Elements/Button'
import Card from '../Fragments/Card'
import ItemLists from '../Fragments/ItemLists'

export default function LastTransactions() {
  return (
    <Card>
      <Card.Header>
        <Card.Title title="Last transactions" />
        <div className="dsp-flex align-itms-center gap-20">
          <Button color="transparent" padding="0" height="30px">
            Newest
          </Button>
          <Button color="transparent" padding="0" height="30px">
            Oldest
          </Button>
        </div>
      </Card.Header>
      <Card.Panel>
        <ItemLists>
          <ItemLists.List
            src="/common/avatar4.webp"
            alt="user profile"
            title="Bessie Cooper"
            description="02 July 2023"
            priceStatus="out"
            price={3000}
          />
          <ItemLists.List
            src="/common/avatar3.webp"
            alt="user profile"
            title="Guy Hawkins"
            description="02 July 2023"
            priceStatus="in"
            price={1970}
          />
          <ItemLists.List
            src="/common/blank_user.webp"
            alt="user profile"
            title="Floyd Miles"
            description="02 July 2023"
            priceStatus="out"
            price={5000}
          />
        </ItemLists>
      </Card.Panel>
    </Card>
  )
}
