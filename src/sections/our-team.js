/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState, useEffect } from 'react';
import { jsx, Box, Container, Image } from 'theme-ui';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
import TeamMember from 'components/cards/team-member';

import avatar1 from 'assets/images/team/member1.png';
import avatar2 from 'assets/images/team/member2.png';
import avatar3 from 'assets/images/team/member3.png';
import avatar4 from 'assets/images/team/member4.png';
import arrowRight from 'assets/images/icons/arrow-right.png';

SwiperCore.use([Navigation, Pagination]);

// {
  //   id: 6,
  //   avatar: avatar2,
  //   name: 'Daisy Morgan',
  //   designation: 'Lead developer',
  //   socialLinks: [
  //     {
  //       name: 'twitter',
  //       link: 'http://twitter.com',
  //     },
  //     {
  //       name: 'dribbble',
  //       link: 'http://dribbble.com',
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   avatar: avatar3,
  //   name: 'Ariyanna Hicks',
  //   designation: 'Experience Designer',
  //   socialLinks: [
  //     {
  //       name: 'twitter',
  //       link: 'http://twitter.com',
  //     },
  //     {
  //       name: 'github',
  //       link: 'http://github.com',
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   avatar: avatar4,
  //   name: 'Yamilet Hooker',
  //   designation: 'User interface designer',
  //   socialLinks: [
  //     {
  //       name: 'twitter',
  //       link: 'http://twitter.com',
  //     },
  //     {
  //       name: 'github',
  //       link: 'http://github.com',
  //     },
  //     {
  //       name: 'dribbble',
  //       link: 'http://dribbble.com',
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   avatar: avatar4,
  //   name: 'Yamilet Hooker',
  //   designation: 'User interface designer',
  //   socialLinks: [
  //     {
  //       name: 'twitter',
  //       link: 'http://twitter.com',
  //     },
  //     {
  //       name: 'github',
  //       link: 'http://github.com',
  //     },
  //     {
  //       name: 'dribbble',
  //       link: 'http://dribbble.com',
  //     },
  //   ],
  // },
const data = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Siddhartha',
    designation: 'Sales executives',
    quote:`"From the moment we engaged with Fuscohire, it was clear that we were in good hands. Their unique approach to finding top talent was refreshing and exceeded our expectations. We were thrilled with the candidate they helped us hire - their skills and personality were a perfect match for our team"`,
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },

  {
    id: 3,
    avatar: avatar3,
    name: 'Rohan saxena',
    designation: 'Software developer',
    quote:`"I had the pleasure of working with Fuscohire to find the perfect mobile app developer for our team. From start to finish, the team  were professional, efficient, and genuinely cared about finding the right fit for our organization. Thanks to their thorough screening process and commitment to understanding our unique needs, we were able to hire an incredibly talented mobile app developer who has since become an invaluable member of our team."`,
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  
  {
    id: 5,
    avatar: avatar1,
    name: 'Shubham',
    designation: 'Math expert',
    quote:`"We were in desperate need of a few math experts for our small startup, but we were struggling to find someone who was a good fit. That's when we turned to Fusco for help. They were able to quickly identify our needs and provide us with several highly qualified math tutors to choose from"`,
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
];

const OurTeam = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });

  const isEnd = swiperRef?.current?.swiper?.isEnd;

  const handlePrev = () => {
    swiperRef?.current?.swiper?.slidePrev();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };
  const handleNext = () => {
    swiperRef?.current?.swiper?.slideNext();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };

  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1601: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container ref={containerRef}>
        <SectionHeading
          sx={styles.heading}
          title="Testimonials"
          description="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents."
        />
      </Container>
      <Box
        sx={{
          ml: currentIndex === 0 ? containerOffset?.left : 0,
          ...styles.teamWrapper,
        }}
      >
        {currentIndex !== 0 && (
          <button
            onClick={handlePrev}
            className="swiper-arrow swiper-arrow-left"
          >
            <Image src={arrowRight} alt="arrow left" />
          </button>
        )}
        {!isEnd && (
          <button
            className="swiper-arrow swiper-arrow-right"
            onClick={handleNext}
          >
            <Image src={arrowRight} alt="arrow right" />
          </button>
        )}

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          watchSlidesVisibility={true}
          slidesPerView={5}
          breakpoints={breakpoints}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <TeamMember member={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default OurTeam;

const styles = {
  section: {
    pt: [11],
    pb: [11, null, null, 12, null, 14],
  },
  heading: {
    p: {
      maxWidth: 500,
      m: '10px auto 0',
    },
  },
  teamWrapper: {
    position: 'relative',
    pl: [6],
    pr: [6, null, null, 0],
    transition: '0.3s ease-in-out 0s',
    '.swiper-arrow': {
      backgroundColor: '#fff',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 40px)',
      transform: 'translateY(-50%)',
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, '100%'],
      },
    },
    '.swiper-arrow-left': {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: 'rotate(180deg)',
        marginLeft: '-4px',
      },
    },
    '.swiper-arrow-right': {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: '-4px',
      },
    },
  },
};
