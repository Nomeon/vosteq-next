export type MenuLink = {
  name: string;
  href: string;
}

export type MenuSectionProps = {
  title: string;
  href?: string;
  links: MenuLink[];
}

export type AccordionSectionProps = {
  title: string;
  href?: string;
  links: MenuLink[];
}

export type StepCardProps = {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

export type DatoCase = {
  id: string;
  title: string;
  quote: string;
  slug: string;
  contactpersoon: string;
  uitdaging: string;
  achtergrond: string;
  procesaanpak: string;
  bulletOpsteken: string;
  bulletOpleveren: string;
  mainImage: {
    responsiveImage: {
      srcSet: string;
      src: string;
      width: number;
      height: number;
    }
  }
  _status: string;
  _firstPublishedAt: string;
}

export type StepDienstenProps = {
  icon: string;
  title: string;
  description: string;
}