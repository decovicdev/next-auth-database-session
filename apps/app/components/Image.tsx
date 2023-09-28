import { ImageProps, Image as ChakraImage } from "@chakra-ui/react";

const Image: React.FC<ImageProps> = (props) => {
  let { w, h, loading = "lazy", ...rest } = props;

  if (typeof w === "number") {
    w = `${w}px`;
  }
  if (typeof h === "number") {
    h = `${h}px`;
  }

  return <ChakraImage loading={loading} {...rest} w={w} h={h} />;
};
export default Image;
