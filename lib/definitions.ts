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

export type DatoCase = {
  id: string;
  title: string;
  quote: string;
  slug: string;
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