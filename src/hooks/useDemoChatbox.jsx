import { useEffect, useRef, useState } from 'react'

export default function useDemoChatbox() {
  const ref2 = useRef(false)
  const [isLoad, setIsLoad] = useState(false)
  const [clientProfile, _setClientProfile] = useState({
    name: 'Esther Howard',
    profileImg: '/common/avatar2.webp'
  })
  const initChatMessage = [
    {
      message: 'Are you ready?',
      itsMe: true
    },
    {
      message: 'I have prepared everything',
      itsMe: false
    }
  ]
  const [chatMessages, _setChatMessages] = useState(initChatMessage)

  const getData = localStorage.getItem('DEMO_SIMPLE_CHATBOX')

  const setToLocal = (payload) => {
    localStorage.setItem('DEMO_SIMPLE_CHATBOX', JSON.stringify(payload))
  }
  const setClientProfile = ({ name, profileImg }) => {
    _setClientProfile({ name, profileImg })
  }
  const setChatMessages = (payload) => {
    _setChatMessages(payload)
  }

  const sendMessage = (message) => {
    _setChatMessages([...chatMessages, { message, itsMe: true }])
  }

  // get local storage data
  useEffect(() => {
    if (!ref2.current) {
      getData ? setChatMessages(JSON.parse(getData)) : setToLocal(initChatMessage)
      setIsLoad(true)
      return () => (ref2.current = true)
    }
  }, [getData])

  useEffect(() => {
    if (isLoad) {
      setToLocal(chatMessages)
    }
  }, [chatMessages])

  return { clientProfile, chatMessages, sendMessage, setClientProfile, setChatMessages }
}
