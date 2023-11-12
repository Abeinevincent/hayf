import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider, { Settings } from "react-slick";
import Image1 from "../../../assets/images/IMG1.jpeg";
// import Image2 from "../../../assets/images/IMG2.jpeg";
// import Image3 from "../../../assets/images/IMG3.jpeg";
// import Image4 from "../../../assets/images/IMG4.jpeg";
import Image2 from "../../../assets/images/IMG5.jpeg";
import Image3 from "../../../assets/images/IMG6.jpeg";
import Image4 from "../../../assets/images/IMG7.jpeg";
// import Image4 from "../../../assets/images/IMG4.jpeg";

interface CustomSliderSettings extends Settings {
  style?: React.CSSProperties;
}

const settings: CustomSliderSettings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  style: {
    overflow: "hidden",
  },
};

export default function Carousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const cards = [
    Image1,
    "https://img.freepik.com/free-photo/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme_627829-6007.jpg?w=996&t=st=1699364055~exp=1699364655~hmac=0badf039f7ae0848d45cfafb390dd8c535e81fc55d29fcb3bfbce2bdcde4085c",
    "https://img.freepik.com/free-photo/students-studying-together-medium-shot_23-2148913227.jpg?w=996&t=st=1699364135~exp=1699364735~hmac=cbf6ee10e105c0b490d217cc1c140bdfcdeee837a30a47559bb228ae47f96b97",
    "https://img.freepik.com/premium-photo/transaction-market-place-while-customer-wears-face-mask-prevent-himself-outbreak-society_216356-1206.jpg?w=996",
  ];

  return (
    <Box position="relative" height="600px" width="full" overflow="hidden">
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      <Slider {...settings} ref={(slider: Slider | null) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height="6xl"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
