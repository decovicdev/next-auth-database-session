"use client";

import { Link as ChakraLink, LinkProps } from "@chakra-ui/next-js";

const Link: React.FC<LinkProps> = (props) => {
  let { href, ...rest } = props;

  // href = fixSrcWithBasePath(href);

  return <ChakraLink href={href} fontWeight={600} {...rest} />;
};

export default Link;
