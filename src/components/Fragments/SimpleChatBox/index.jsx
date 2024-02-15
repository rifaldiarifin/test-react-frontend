import * as Feather from 'react-feather'
import { predictClass } from '../../../utils/predictClass'
import Button from '../../Elements/Button'
import styles from './simpleChatBox.module.css'
import { useRef } from 'react'

const SimpleChatBox = ({ children, className = null, onCLickSend = () => {} }) => {
  const textArea = useRef(null)
  const chatBody = useRef(null)
  const handleSendMessage = () => {
    if (textArea.current.value.length === 0) return
    onCLickSend(textArea.current.value)
    textArea.current.value = ''
    setTimeout(() => {
      chatBody.current.scrollTo(0, chatBody.current.children[0].clientHeight)
    }, 50)
  }

  return (
    <div className={`${styles.simple_chat_box}${predictClass(() => className, className)}`}>
      <div className={styles.simple_chat_box__chats} ref={chatBody}>
        <div className={styles.simple_chat_box__chats__div}>{children}</div>
      </div>
      <div className={styles.simple_chat_box__actions}>
        <textarea
          name="chatbox"
          id="chatbox"
          placeholder="Type your message"
          className={`${styles.simple_chat_box__actions__textarea}`}
          ref={textArea}
        ></textarea>
        <div className={styles.simple_chat_box__actions__footer}>
          <div className="dsp-flex align-itms-center gap-10">
            <Button
              color="transparent"
              className="full-rounded"
              height="22px"
              icon={<Feather.Smile className={Button.IconClass} />}
              iconOnly
              ariaLabel="emoticon"
            />
            <Button
              color="transparent"
              className="full-rounded"
              height="22px"
              icon={<Feather.Link className={Button.IconClass} />}
              iconOnly
              ariaLabel="insert file"
            />
          </div>
          <Button height="34px" padding="14px" onClick={handleSendMessage} className="rounded6">
            Send now
          </Button>
        </div>
      </div>
    </div>
  )
}

const Chat = ({ message = '', src, alt = '', itsMe = true }) => {
  return (
    <div className={`${styles.simple_chat_box__chats__chat}${predictClass(() => itsMe, styles.chat_me)}`}>
      <img src={src} alt={alt} className={styles.simple_chat_box__chats__chat__userimg}></img>
      <div className={`${styles.simple_chat_box__chats__chat__message}${predictClass(() => itsMe, styles.message_me)}`}>
        <p>{message}</p>
      </div>
    </div>
  )
}

SimpleChatBox.Chat = Chat

export default SimpleChatBox
