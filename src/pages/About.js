import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';
import AboutHeader from '../components/AboutHeader';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const items = [
  {
    id: 1,
    altText: 'Slide 1',
  },
  {
    id: 2,
    altText: 'Slide 2',
  },
  {
    id: 3,
    altText: 'Slide 3',
  }
];

const About = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className='custom-tag'
        tag='div'
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
      </CarouselItem>
    );
  });

  return (
    <Router>
      <AboutHeader />
      <div className="container">
        <div className="row mt-1">
          <div className="col mt-1">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>About</BreadcrumbItem>
              </Breadcrumb>
              <h2 className="text-center">About East West</h2>
          </div>
        </div>
        <div>
          <style>
            {
              `.custom-tag {
                  max-width: 100%;
                  height: 500px;
                  background: black;
                }`
            }
          </style>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
            <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
          </Carousel>
        </div>
        <h1 className="text-center mt-5">Founded in 1982</h1>
        <h5 className="text-center">A family owned business</h5>
        <p className="text-center">East West was founded by Jim Eastly Sr and Harold West, Kenneth Gerst acquired this business in 1985. He passed away on March 17, 2017 and is survived by his four children and eight grandchildren. Ken's son, Gary Gerst, apprenticed with East West in 1987 and eventually took over the business when Ken retired. Gary currently runs the business with his wife, Stacy. Gary and Stacy operate the business out of Castle Shannon, Pennsylvania.</p>
      </div>
    </Router>
  );
}

export default About;