import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});
