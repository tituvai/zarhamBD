import Slider from "react-slick";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import shirt from "/src/assets/shirt.jpg";
import Heading from "../common/Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrivArrow";

const CustomerReview = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };

  const reviews = [
    {
      name: "Tanvir",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cumque error minima natus temporibus commodi.",
    },
    {
      name: "Rafi",
      text: "Totam nostrum doloremque blanditiis laboriosam perferendis ad aspernatur, vero pariatur voluptates officia accusamus",
    },
    {
      name: "Nusrat",
      text: "Totam nostrum doloremque blanditiis laboriosam perferendis ad aspernatur, vero pariatur voluptates officia accusamus.",
    },
    {
      name: "Sadia",
      text: "Totam nostrum doloremque blanditiis laboriosam perferendis ad aspernatur, vero pariatur voluptates officia accusamus.",
    },
  ];

  return (
    <div className="pb-8 pt-12 bg-lightBg">
      <Container>
        <Heading
          className="text-3xl md:text-4xl text-darkText font-semibold text-center pb-10"
          text="Customer Reviews"
          as="h3"
        />

        <Slider {...settings} className="mx-2">
          {reviews.map((review, index) => (
            <div key={index} className="px-2">
              <div className="bg-darkText p-4 md:p-5 rounded-xl shadow-md">
                <Flex className="flex-col lg:flex-row gap-4">
                  <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
                    <Image
                      className="w-[180px] h-[220px] md:w-[200px] md:h-[250px] border-4 border-accent rounded-2xl object-cover"
                      imgSrc={shirt}
                      imgAlt="shirt"
                    />
                  </div>

                  <div className="w-full lg:w-[49%] flex flex-col justify-center">
                    <Heading
                      className="text-base md:text-xl text-lightText font-bold"
                      text="Your Voice"
                      as="h3"
                    />
                    <Heading
                      className="text-xl md:text-2xl text-accent font-bold uppercase pb-2"
                      text="Matters"
                      as="h3"
                    />
                    <div className="bg-white rounded p-3">
                      <p className="text-sm md:text-base text-darkText font-medium">
                        {review.text}
                      </p>
                    </div>
                    <div className="pt-3">
                      <Heading
                        className="text-sm md:text-base font-semibold text-white bg-accent inline px-3 py-1 rounded-tr-xl rounded-bl-xl"
                        text={review.name}
                        as="h5"
                      />
                    </div>
                  </div>
                </Flex>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default CustomerReview;
