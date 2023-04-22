/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Link } from "theme-ui";
import { FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";
import quote from 'assets/images/icons/quote.png';

const TeamMember = ({ member }) => {
  return (
    <Box sx={styles.section}>
      <Flex as="figure" sx={styles.avatar}>
        <Image src={member?.avatar} alt={member?.name} />
      </Flex>
      <Box sx={styles.about}>
        {/* <Heading as="h3">{member?.name}</Heading> */}
        {/* <Text as="p">{member?.designation}</Text> */}
        {/* <Box sx={styles.socialLinks}>
          {member?.socialLinks?.map((social, index) => (
            <Link href={social?.link} key={index}>
              {social?.name === 'twitter' && (
                <FaTwitter size="18px" color="#55ACEE" />
              )}
              {social?.name === 'github' && (
                <FaGithub size="18px" color="#161614" />
              )}
              {social?.name === 'dribbble' && (
                <FaDribbble
                  size="18px"
                  color="#B2215A"
                  style={{ backgroundColor: '#E74D89', borderRadius: 20 }}
                />
              )}
            </Link>
          ))}
        </Box> */}
        <Box as="blockquote">
          {member?.quote}
          <Text as="span" sx={styles.author}>
            {member?.name}, {member?.designation}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamMember;

const styles = {
  avatar: {
    alignItems: "center",
    justifyContent: "center",
  },
  about: {
    mt: [4],
    textAlign: ["center", null, null, "left"],
    h3: {
      color: "heading",
      fontFamily: "body",
      fontSize: [3, null, 17, null, 4],
    },
    p: {
      color: "#7589A1",
      letterSpacing: "-0.2px",
      mt: [2],
    },
    blockquote: {
      fontFamily: 'body',
      fontWeight: 400,
      fontSize: [2, null, null, 3, 4, 2],
      lineHeight: [1.87, null, null, 2.08],
      position: 'relative',
      maxWidth: 360,
      margin: '0px auto',
      pt: ['12px', null, null, '17px', '13px'],
      pl: [35, 35, 35, 10, 11],
      ':before': {
        background: `url(${quote}) no-repeat`,
        content: `''`,
        position: 'absolute',
        width: 60,
        height: 43,
        left: ['-31px', null, null, '-16px', '-7px', 0],
        top: ['1px', '1px', '1px', 0],
        backgroundSize: ['75%', null, null, '100%'],
      },
    },
    span: {
      color: '#7E8896',
      fontFamily: 'body',
      display: 'flex',
      justifyContent:'flex-end',
      fontWeight: 500,
      fontSize: [0, 1, 1, 2],
      lineHeight: 2.5,
      mt: [1, null, null, 3],
    },
  },
  socialLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: ["center", null, null, "left"],
    mt: [3],
    a: {
      display: "inline-flex",
      mr: [2],
    },
  },
};
