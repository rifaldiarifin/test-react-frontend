import { useEffect, useRef, useState } from 'react'

export default function useDemoChatbox() {
  const ref = useRef(false)
  const [clientProfile, _setClientProfile] = useState({
    name: 'Esther Howard',
    profileImg: '/common/avatar2.png'
  })
  const [chatMessages, _setChatMessages] = useState([
    {
      itsMe: true,
      message: 'Are you ready?'
    },
    {
      itsMe: false,
      message: 'I have prepared everything'
    }
  ])

  const getData = localStorage.getItem('DEMO_SIMPLE_CHATBOX')

  const setToLocal = (payload) => {
    localStorage.setItem('DEMO_SIMPLE_CHATBOX', JSON.stringify(payload))
  }
  const setChatMessages = (payload) => {
    _setChatMessages(payload)
  }

  const sendMessage = (message) => {
    _setChatMessages([...chatMessages, { message, itsMe: true }])
  }

  // get local storage data
  useEffect(() => {
    if (!ref.current && getData) {
      setChatMessages(JSON.parse(getData))
    } else {
      setToLocal([])
    }

    return () => (ref.current = true)
  }, [getData])

  useEffect(() => {
    if (ref.current) {
      setToLocal(chatMessages)
    }
  }, [chatMessages])

  return { clientProfile, chatMessages, sendMessage }
}
