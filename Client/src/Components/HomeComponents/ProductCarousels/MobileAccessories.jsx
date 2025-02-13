import { Heading, Img } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import AddtoCartModal from "../../cartComponents/AddtoCartModal";
import ReactStars from "react-stars";

const data = [
  {
    isNew: true,
    imageURL:
      "https://www.reliancedigital.in/medias/boAt-Rockerz-255-Pro-Active-Bluetooth-Earphones-492912673-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMzcwNHxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaGE3Lzk4MzIxMDEwODUyMTQuanBnfDJkNjAyYzhmNjBmMTIzYTRmZGNjMmJhZWEyY2ZiYzNkYmY3MjM1NjUwODIyOTNjNzg1YzE5MzFkNjc0ZWI2NDg",
    name: "boAt Rockerz 255R Pro in Ear Bluetooth Neckband with Upto 10 Hours Playback, ASAP Charge, IPX5, boAt Signature Sound & Integrated Controls(Active Black)",
    price: 14099.0,
    rating: 5,
    numReviews: 34,
  },
  {
    isNew: false,
    name: "boAt Airdopes 131 RTL Twin Wireless Earbuds with IWP Technology, Bluetooth V5.0, Immersive Audio, Up to 15H Total Playback, Instant Voice Assistant and Type-C Charging",
    imageURL:
      "http://www.mobilechew.in/images/detailed/3/714byO4Kf8L._SL1500_.jpg",
    price: 10099.0,
    rating: 1,
    numReviews: 34,
  },
  {
    isNew: true,
    name: "Apple MME73HN/A 3rd Generation Airpods with Mic and Wireless Charging Case, White",
    imageURL:
      "https://www.reliancedigital.in/medias/Apple-Airpods-492571632-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTQ1NnxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaGU2Lzk4MjU2MDg5OTA3NTAuanBnfGU0MjZmMjM3YjYwMDhkYmUxOWIwYjllNTczODI0YzdjY2EyYTMyYjY5MTQ3ZTE4Y2I2YzEwNGMyN2Q1N2MwMzU",
    price: 87200.0,
    rating: 4,
    numReviews: 34,
  },
  {
    isNew: false,
    name: "Apple MME73HN/A 3rd Generation Airpods with Mic and Wireless Charging Case, White",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2nTjlLMDs0_Bxp9HclmMNzx5txch6qINKA&usqp=CAU",
    price: 56000.0,
    rating: 5,
    numReviews: 34,
  },
  {
    isNew: false,
    name: "Apple MME73HN/A 3rd Generation Airpods with Mic and Wireless Charging Case, White",
    imageURL:
      "https://www.aptronixindia.com/media/catalog/product/cache/e16cc9c2744816b243de32cfba0b1d13/l/p/lpx-clear-6.1_01.jpg",
    price: 34500.0,
    rating: 3,
    numReviews: 34,
  },
  {
    isNew: false,
    name: "Apple MME73HN/A 3rd Generation Airpods with Mic and Wireless Charging Case, White",
    imageURL:
      "https://www.reliancedigital.in/medias/Apple-Airpods-492571632-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTQ1NnxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaGU2Lzk4MjU2MDg5OTA3NTAuanBnfGU0MjZmMjM3YjYwMDhkYmUxOWIwYjllNTczODI0YzdjY2EyYTMyYjY5MTQ3ZTE4Y2I2YzEwNGMyN2Q1N2MwMzU",
    price: 20700.0,
    rating: 5,
    numReviews: 34,
  },
  {
    isNew: false,
    name: "Apple MME73HN/A 3rd Generation Airpods with Mic and Wireless Charging Case, White",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFnOsrPnXAdTlFcZq11cI-g3XBPMcvI1KdA&usqp=CAU",
    price: 18500.0,
    rating: 2,
    numReviews: 34,
  },
];


const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
};
const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="black"
      >
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="black"
      >
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </button>
  ),
};
const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 1,
    },
  },
];
const MobileAccessories = () => {
  return (
    <div style={{ padding: "10px", marginTop: "30px", marginBottom: "30px" }}>
      <Flex textAlign={"left"} alignItems="baseline">
        <Heading textAlign={"left"} fontWeight="normal" padding={"10px"}>
          Mobile Accessories
        </Heading>
        {}
        <span>Special offers</span>
      </Flex>

      <Slide
        slidesToScroll={1}
        slidesToShow={3}
        responsive={responsiveSettings}
      >
        {data.map((el,i) => (
          <Flex
            p={2}
            w="full"
            alignItems="center"
            justifyContent="center"
            className="myDiv"
            key={i}
          >
            <Box
              maxW="md"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
            >
              <Image
                src={el.imageURL}
                alt={`Picture of ${el.name}`}
                roundedTop="lg"
                height={"200px"}
              />

              <Box p="1">
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Box
                    fontSize="lg"
                    as="p"
                    lineHeight="tight"
                    id="userName"
                    margin={1}
                  >
                    {el.name}
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center">
                  <Box fontSize="md">
                    <Box as="span" color={"gray.600"} fontSize="sm" margin={1}>
                      <strike> {`Regular Price: $${el.price * 1.5}.00`}</strike>
                    </Box>
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center" margin={1}>
                  <Box fontSize="md">
                    <Box as="span" color={"gray.600"} fontSize="sm" margin={1}>
                      {`Instant Rebate: $${el.price / 2}.00`}
                    </Box>
                  </Box>
                </Flex>

                <Flex mt="1" justifyContent="center" alignContent="center">
                  <Box fontSize="md" lineHeight="tight" margin={1}>
                    <ReactStars count={el.rating} color1={"#ffd700"} />
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center" margin={1}>
                  <Box fontSize="md">
                    <Box as="span" color={"gray.600"} fontSize="md" margin={1}>
                      {`Price: $${el.price}.00`}
                    </Box>
                  </Box>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignContent="center"
                  margin="4px"
                >
                  <Box fontSize="md">
                    <Box as="span" color={"blue.500"} fontSize="smaller">
                      Get Reward points
                    </Box>
                  </Box>
                </Flex>
                <Box className="hide" margin="auto" width="fit-content">
                  <AddtoCartModal />
                </Box>
              </Box>
            </Box>
          </Flex>
        ))}
      </Slide>
    </div>
  );
};

export default MobileAccessories;
