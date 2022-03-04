import React, { useState, useRef, useEffect } from 'react';

import { Img, CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About me</SectionTitle>
      <Img src="/images/vesku.png" />
      <SectionText>
        <p>
          I have a long history with programming. It all started when I got my first Commodore64 when I was 8 years old. I wrote the code examples from the back of the C64 manual and I was super excited about it. Years later I started studying programming in school... and again I was super excited. :)
        </p>
        <p>&nbsp;</p>
        <p>
          Programming has always fascinated me and one of main reasons for this is that you can apply it to so many things (games, multimedia, commerce, communication, embedded systems etc.). 

          During my polytechnic studies, I was very eager to learn programming and due to my interest towards game development and multimedia, I started working on a simple text-based game using C++.

          I also made a Pac-Man styled game using Lingo in Adobe Director, where you could set mines in the path of enemy characters. After that I did some experimenting with vanilla JavaScript, using it to manipulate the DOM dynamically in the browser to control simple sprite graphics. Later on I got into Unity using C#, working on a simple tank game with a top-down view and I also touched base with the basics of 3D physics engines through some tutorials.

          I also fiddled with Raspberry Pi 2 and some electronics components using a solderless breadboard. I installed Raspbian to run the device and used the preinstalled Python runtime to control a simple LED light on the breadboard through the 40-pin GPIO port.
        </p>
        <p>&nbsp;</p>
        <p>
        As I was experimenting with programming during my studies, I realised that I could make some money building websites for small businesses using HTML, CSS and JavaScript. This was a huge turning point in my programming journey. Not only did I learn new technologies again, it also gave me the spark to include web development services in my own business in 2010.

        During the past 12 years, I've been on the path of building web sites and e-commerce solutions for various customers using WordPress, WooCommerce and MySQL. The latest five years I've been diving deep into modern JavaScript frameworks and libraries like Node.js, Express.js, React and all the good stuff related to these.
        </p>
      </SectionText>
      <CarouselContainer ref={carouselRef} onClick={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT -1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
