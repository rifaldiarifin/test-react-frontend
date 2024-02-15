import * as Feather from 'react-feather'
import Card from '../Fragments/Card'
import ItemCheckbox from '../Fragments/ItemCheckbox'
import SimpleChatBox from '../Fragments/SimpleChatBox'
import Button from '../Elements/Button'

export default function ListOfItemsToBuyAndChatbox({ clientProfile, chatMessages, sendMessage }) {
  return (
    <Card>
      <Card.GridLayouts templateColms="1fr auto 1fr">
        <div className="dsp-flex fl-colm gap-20 font-size-14">
          <Card.Header>
            <Card.Title title="List of items to buy" />
          </Card.Header>
          <Card.Panel className="dsp-flex fl-colm gap-20">
            <div className="dsp-flex align-itms-center gap-20">
              <div>
                <span className="dsp-block font-size-22 font-weg-600 mrgn-b-4">02:00</span>
                <span className="dsp-block disabled-text-2">Sat. August 12</span>
              </div>
              <Feather.ChevronRight className="disabled-text-2" />
              <div>
                <span className="dsp-block font-size-22 font-weg-600 mrgn-b-4">05:00</span>
                <span className="dsp-block disabled-text-2">Sat. September 12</span>
              </div>
            </div>
            <div className="dsp-flex align-itms-center justify-between">
              <p className="nowrap font-weg-500">
                <span className="disabled-text-2">0/3</span> Shopping list
              </p>
              <Button color="transparent" padding="0" icon={<Feather.Plus width="20px" height="20px" />}>
                Add an item
              </Button>
            </div>
            <div className="dsp-grid gap-14" style={{ '--gd-colm': '1fr 1fr' }}>
              <ItemCheckbox title={'Macbook'} name={'macbook'} isChecked />
              <ItemCheckbox title={'Bicycle'} name={'bicycle'} />
              <ItemCheckbox title={'Motorcycle'} name={'motorcycle'} />
              <ItemCheckbox title={'Iphone 14 pro max'} name={'iphone_14_pro_max'} isChecked />
            </div>
          </Card.Panel>
        </div>
        <Card.SeparatorY />
        <div className="dsp-grid">
          <Card.Header>
            <Card.Title title="Esther Howard" />
          </Card.Header>
          <Card.Panel className="fl-1">
            <SimpleChatBox className="h-100" onCLickSend={sendMessage}>
              {chatMessages && chatMessages?.length > 0 ? (
                <>
                  {chatMessages.map((data, index) => (
                    <SimpleChatBox.Chat
                      key={index}
                      message={data.message}
                      src={data.itsMe ? '/common/avatar1.png' : clientProfile.profileImg}
                      alt={`Chat ${index}`}
                      itsMe={data.itsMe}
                    />
                  ))}
                </>
              ) : chatMessages && chatMessages?.length === 0 ? (
                <p className="font-size-14 disabled-text-2 text-center">No message yet.</p>
              ) : (
                'Load Chat Message...'
              )}
            </SimpleChatBox>
          </Card.Panel>
        </div>
      </Card.GridLayouts>
    </Card>
  )
}
