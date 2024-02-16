import * as Feather from 'react-feather'
import Button from '../../Elements/Button'
import InputCheckbox from '../../Elements/InputCheckbox'

export default function ItemCheckbox({ name = null, title, isChecked = false }) {
  return (
    <div className="dsp-flex align-itms-center justify-between bg-second rounded10 pad-10 pad-l-20">
      <div className="dsp-flex align-itms-center gap-10">
        <InputCheckbox label={title} name={name} isChecked={isChecked} />
        <p>{title}</p>
      </div>
      <Button color="classic" height="36px" icon={<Feather.MoreVertical className={Button.IconClass} />} iconOnly />
    </div>
  )
}
