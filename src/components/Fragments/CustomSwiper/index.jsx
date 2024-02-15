import { useRef, useState } from 'react'
import * as Feather from 'react-feather'
import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import styles from './customSwiper.module.css'

const CustomSwiper = ({ children }) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [swiperNav, _setSwiperNav] = useState({
    isBeginning: null,
    isEnd: null
  })

  const setSwiperNav = (isBeginning, isEnd) => {
    swiperNav.isBeginning !== isBeginning && swiperNav.isEnd !== isEnd ? _setSwiperNav({ isBeginning, isEnd }) : null
  }

  return (
    <div className="post-reltv mrgn-x-10">
      <Swiper
        modules={[Navigation]}
        className="h-100"
        spaceBetween="20px"
        slidesPerView="auto"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
          setSwiperNav(swiper.isBeginning, swiper.isEnd)
        }}
        onSliderMove={(swiper) => {
          setSwiperNav(swiper.isBeginning, swiper.isEnd)
        }}
      >
        {children}
      </Swiper>
      <button type="button" className={styles.swiper_prev} ref={prevRef}>
        <Feather.ChevronLeft width="22px" height="22px" className={styles.swiper_prev__icon} />
      </button>
      <button type="button" className={styles.swiper_next} ref={nextRef}>
        <Feather.ChevronRight width="22px" height="22px" className={styles.swiper_prev__icon} />
      </button>
    </div>
  )
}

export default CustomSwiper
