import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

const Link: React.FC<LinkProps> = (props) => {
  let { href, ...rest } = props;

  // href = fixSrcWithBasePath(href);

  return <ChakraLink as={NextLink} href={href} fontWeight={600} {...rest} />;
};

export default Link;
