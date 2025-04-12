import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";
import { allProducts } from "../api/fakeStore";
import { useEffect, useState } from "react";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 400px;
`;

const SliderContainer = styled.div`
  width: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DIV = styled.div`
  position: relative;
  width: 100%;
  height: 20em;
`;

const SlideContent = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const SlideTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SlideDescription = styled.p`
  font-size: 1.25rem;
`;

const Sliders = () => {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await allProducts({ limit: 3 });
      setSlides(response.data);
    };
    fetchData();
  }, []);
  return (
    <SliderContainer>
      <StyledSwiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <DIV>
              <SlideImage src={slide.image} alt={slide.title} />
              <SlideContent>
                <SlideTitle>{slide.title}</SlideTitle>
                <SlideDescription>{slide.description}</SlideDescription>
              </SlideContent>
            </DIV>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </SliderContainer>
  );
};

export default Sliders;
