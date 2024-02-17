import { IconCar } from '@tabler/icons-svelte';

export const Section = {
  Hero: 'Hero',
  Media: 'Media',
  Contributors: 'Contributors',
  Contact: 'Contact',
  About: 'About',
}

export const menuItems = [
  {
    ref: `#${Section.Hero}`,
    name: 'Welcome',
    icon: IconCar
  },
  {
    ref: `#${Section.About}`,
    name: 'About',
    icon: IconCar
  },
  {
    ref: `#${Section.Media}`,
    name: 'Media',
    icon: IconCar
  },
  {
    ref: `#${Section.Contributors}`,
    name: 'Contributors',
    icon: IconCar
  },
  {
    ref: `#${Section.Contact}`,
    name: 'Contact Us',
    icon: IconCar
  },
];
