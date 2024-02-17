import { IconCar } from '@tabler/icons-svelte';

export const SectionName = {
  Hero: 'Hero',
  Media: 'Media',
  Contributors: 'Contributors',
  Contact: 'Contact',
  About: 'About',
}

export const menuItems = [
  {
    ref: `#${SectionName.Hero}`,
    name: 'Welcome',
    icon: IconCar
  },
  {
    ref: `#${SectionName.About}`,
    name: 'About',
    icon: IconCar
  },
  {
    ref: `#${SectionName.Media}`,
    name: 'Media',
    icon: IconCar
  },
  {
    ref: `#${SectionName.Contributors}`,
    name: 'Contributors',
    icon: IconCar
  },
  {
    ref: `#${SectionName.Contact}`,
    name: 'Contact Us',
    icon: IconCar
  },
];
