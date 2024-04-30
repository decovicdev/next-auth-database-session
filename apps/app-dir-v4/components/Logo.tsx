import Image from "./Image";
import Link from "./Link";

export default function Logo() {
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
}
