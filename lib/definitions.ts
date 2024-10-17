export type MenuLink = {
  name: string;
  href: string;
}

export type MenuSectionProps = {
  title: string;
  links: MenuLink[];
}

export type AccordionSectionProps = {
  title: string;
  links: MenuLink[];
}

export type StepCardProps = {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}