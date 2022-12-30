import { images } from "@/assets";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
// components
import Slide from "@/components/Hero/Slide";
// styles 
import "swiper/css";
import "swiper/css/navigation";

export default function Hero() {
    return (
        <>
            <div className="mb-6 text-center md:text-left px-1">
                <h2 className="title mb-1">
                    Explore
                </h2>
                <span className="text-xl text-gray-500">
                    What are you gonna watch today?
                </span>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                modules={[Autoplay]}
                className="mySwiper rounded-md  sm:w-full"
            >
                {images.map(item => (
                    <SwiperSlide key={item.mal_id} className='group'>
                        <Slide item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}