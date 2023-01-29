import { Swiper } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Navigation, Pagination } from 'swiper';
import { memo } from 'react';

const Slides = (props) => {

  let pagination;
  if (props.clickable) {
    pagination = { clickable: true }
  }

  if (props.dynamicBullets) {
    pagination = { dynamicBullets: true }
  }

  if (props.type) {
    pagination = { type: 'props.type' }
  }

  return (
    < Swiper
      grid={{
        rows: props.rows
      }
      }
      slidesPerColumn={props.slidesPerColumn}
      modules={[Pagination, Navigation, Keyboard]}
      spaceBetween={props.spaceBetween}
      slidesPerView={props.slidesPerView}
      navigation={props.navigation}
      // pagination={{ clickable: props.clickable, dynamicBullets: props.dynamicBullets, type: props.type }}
      pagination={pagination}
      scrollbar={{ draggable: props.draggable }}
      effect={props.effect}
      direction={props.direction}
      centeredSlides={props.centeredSlides}
      cssMode={props.cssMode}
      mousewheel={{ enabled: props.mousewheel }}
      keyboard={{ enabled: props.keyboard }}
      freeMode={props.freeMode}
      grabCursor={props.grabCursor}
      loop={props.loop}
      loopFillGroupWithBlank={props.loopFillGroupWithBlank}
      slidesPerGroupSkip={props.slidesPerGroupSkip}
      autoplay={{
        delay: props.delay,
        disableOnInteraction: props.disableOnInteraction,
      }}
      thumbs={{ swiper: props.thumbs }}
      lazy={props.lazy}
      zoom={props.zoom}
      autoHeight={props.autoHeight}
      rewind={props.rewind}
      className="mySwiper"
    >
      {props.children}
    </Swiper >
  );
};

export default memo(Slides)