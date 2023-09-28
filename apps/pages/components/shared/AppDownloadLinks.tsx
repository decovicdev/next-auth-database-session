import { HStack } from "@chakra-ui/react";

import Image from "./Image";
import Link from "./Link";

interface AppDownloadLinksProps {}

const AppDownloadLinks: React.FC<AppDownloadLinksProps> = (props) => {
  return (
    <HStack spacing="4">
      <Link
        href="https://apps.apple.com/us/app/id1524098983"
        draggable={false}
        isExternal
      >
        <Image src="/images/app-store.png" alt="App store" draggable={false} />
      </Link>
      <Link
        href="https://play.google.com/store/apps/details?id=com.intuiguide.app"
        draggable={false}
        isExternal
      >
        <Image
          src="/images/google-play.png"
          alt="Google play"
          draggable={false}
        />
      </Link>
    </HStack>
  );
};
export default AppDownloadLinks;
