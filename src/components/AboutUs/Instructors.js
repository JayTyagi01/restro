import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Instructors = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const instructorsData = [
   {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Rajesh Kumar ",
      profession: "Head Chef",
    },
    {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Nehal Singh",
      profession: "General Manager",
    },
    {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Ajay Sharma",
      profession: "Head Of Operation",
    },
    {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Priyanka Sharon",
      profession: "Pastry Chef",
    },
    {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Sanjay Sharma",
      profession: "Head Sommelier",
    },

    {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Anesh Murthy ",
      profession: " Head Waiter",
    },
    {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Vikrant Verma",
      profession: "Head Bartender",
    },
    {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Meera Joshi ",
      profession: "Marketing Director",
    },
    {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Rajesh Malhotra ",
      profession: "Head of South Indian Cuisine",
    },
    {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Preeti Rao ",
      profession: "Head of North Indian Cuisine",
    },
    {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Sukirti Menon",
      profession: "Head of Italian Cuisine",
    },
    {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Mayank Chatterjee",
      profession: "Head of Desserts",
    },
    {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Rajesh Malhotra ",
      profession: "Head of South Indian Cuisine",
    },
    {
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1696503306~exp=1696503906~hmac=8550b080767500db131d59e82d2ccde1695278b8fd36aafa288355616ac3ea06",
      name: "Ramesh Krishnan",
      profession: "- Head of Beverage Program",
    },
  ];
  return (
    <div className="flex justify-center items-center ">
      <div className="m-4 my-12 w-[90%]">
        <h1 className="text-4xl text-center m-2 p-2 mt-8 font-extrabold text-black">
          Our Passionate Individuals
        </h1>
        <p className="col-md-12 text-center">Meet the passionate individuals who bring culinary creativity, exceptional service, and a shared love for food to your dining experience. Learn more about the faces behind the flavors that make your visit memorable.</p>
        
        <Carousel
          className=""
          responsive={responsive}
          swipeable={true}
          showDots={true}
        >
          {instructorsData.map((instructors, index) => (
            <>
              <div className="m-3">
                <div className="hover:bg-gradient-to-b from-gray-500 to-gray-800 h-64 w-full relative hover:transition-all duration-1000 ease-out overflow-hidden">
                  <img
                    className="object-cover h-full w-full rounded-md absolute mix-blend-overlay"
                    src={instructors.img}
                    alt="instructor"
                  />
                  <div className="h-full flex justify-center items-end"></div>
                </div>
                <div className="text-center p-2">
                  <div className="text-primary font-bold">
                    {instructors.name}
                  </div>
                  <div>{instructors.profession}</div>
                </div>
              </div>
            </>
          ))}
        </Carousel>
        {/* <div className='text-center my-6'>
              <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>
                  Load More Comments!!
              </div>
          </div> */}
      </div>
    </div>
  );
};

export default Instructors;
