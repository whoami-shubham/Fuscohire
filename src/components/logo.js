/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <div style={styles.row}>
      <LogoSvg />
      <b style={styles.title}>Staff2Hire</b>
      </div>
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
  row:{
    display:'flex',
    position:'relative'
  },
  title:{
     position:'absolute',
     left: 35,
     fontSize:'1.7vmax'
  }
};
