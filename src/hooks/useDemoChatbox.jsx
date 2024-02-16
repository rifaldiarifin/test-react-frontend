import { useEffect, useRef, useState } from 'react'

export default function useDemoChatbox() {
  const ref = useRef(false)
  const [clientProfile, _setClientProfile] = useState({
    name: 'Esther Howard',
    profileImg: '/common/avatar2.png'
  })
  const initChatMessage = [
    {
      itsMe: true,
      message: 'Are you ready?'
    },
    {
      itsMe: false,
      message: 'I have prepared everything'
    }
  ]
  const [chatMessages, _setChatMessages] = useState([])

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
    console.log('load outside', ref.current)
    if (!ref.current) {
      getData ? setChatMessages(JSON.parse(getData)) : setToLocal(initChatMessage)

      console.log('load inside', ref.current)
      return () => (ref.current = true)
    }
  }, [getData])

  useEffect(() => {
    console.log('hahahha outside', ref.current)
    if (ref.current) {
      console.log('hahahha inside', ref.current)
      setToLocal(chatMessages)
    }
  }, [chatMessages, ref])

  return { clientProfile, chatMessages, sendMessage, setClientProfile }
}
