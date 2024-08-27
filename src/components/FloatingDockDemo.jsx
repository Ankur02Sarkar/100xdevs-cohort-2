import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandCodesandbox,
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconRobot,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import logoDark from "@/app/assets/logo-dark.png";
import { Input } from "./ui/input";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Classx Website",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://harkirat.classx.co.in/",
    },
    {
      title: "Github Repo",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Ankur02Sarkar/100xdevs-cohort-2",
    },
    {
      title: "Daily Code",
      icon: (
        <IconRobot className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://projects.100xdevs.com/",
    },
    {
      title: "Cohort 3",
      icon: (
        <IconBrandCodesandbox className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://app.100xdevs.com/courses/13",
    },
  ];
  return (
    <div className="flex items-center justify-center absolute bottom-0 w-full flex-col">
      <Input />
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
