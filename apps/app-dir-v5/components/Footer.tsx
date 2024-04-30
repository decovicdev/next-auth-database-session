"use client";

import { Divider, Link, VStack, Wrap, WrapItem } from "@chakra-ui/react";

import { Body1, Title } from "./typography";
import Container from "./Container";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const footer_links = [
  {
    label: "About",
    links: ["About Us", "Careers", "Press", "Terms & Privacy"],
  },
  {
    label: "Help & Support",
    links: ["Help Center", "Contact Us", "Report a Problem", "FAQ"],
  },
];
const auth_routes = ["/login", "/register"];

export default function Footer() {
  const pathname = usePathname();
  const isAuthPage = auth_routes.includes(pathname);

  if (isAuthPage) return null;

  return (
    <footer>
      <Container py="20">
        <VStack spacing="12" align="stretch">
          <Wrap justify="space-between" align="flex-start" spacing="4">
            <WrapItem>
              <VStack align="flex-start">
                <Logo />
                <Body1 textAlign="left" maxW="368px" color="gray.400">
                  Intuiguide is an intuitive car travel route planning app that
                  combines pre-selected waypoints and user preferences and
                  insights to create unique journeys.
                </Body1>
              </VStack>
            </WrapItem>
            {footer_links.map((footerLink) => (
              <WrapItem key={footerLink.label}>
                <VStack align="flex-start">
                  <Title>{footerLink.label}</Title>
                  {footerLink.links.map((link) => (
                    <Link key={link} href="#" color="gray.400">
                      {link}
                    </Link>
                  ))}
                </VStack>
              </WrapItem>
            ))}
          </Wrap>
          <Divider />
          <Body1 color="gray.400">
            Copyright © 2021 - Intuiguide. All rights reserved
          </Body1>
        </VStack>
      </Container>
    </footer>
  );
}
