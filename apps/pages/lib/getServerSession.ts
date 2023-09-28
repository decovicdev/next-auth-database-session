import { getServerSession as _getServerSession } from "next-auth";
import {
  GetServerSidePropsContext,
  NextApiResponse,
  NextApiRequest,
} from "next";

import { authOptionsWrapper } from "@/pages/api/auth/[...nextauth]";

export default async function getServerSession(
  req: GetServerSidePropsContext["req"],
  res: GetServerSidePropsContext["res"]
) {
  return _getServerSession(
    ...authOptionsWrapper(req as NextApiRequest, res as NextApiResponse)
  );
}
