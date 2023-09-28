import Image from "./Image";
import Link from "./Link";

interface LogoProps {}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Link href="/">
      <Image
        h={["28px", "52px"]}
        w={["122px", "218px"]}
        src="/images/logo.png"
        alt="logo"
        loading="eager"
      />
    </Link>
  );
};
export default Logo;
