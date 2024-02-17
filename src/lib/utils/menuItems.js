import { IconCar } from '@tabler/icons-svelte';

export const SectionName = {
  HERO: 'Hero',
  MEDIA: 'Media',
  CONTRIBUTORS: 'Contributors',
  CONTACT: 'Contact',
  ABOUT: 'About',
}

export const menuItems = [
  {
    ref: `#${SectionName.HERO}`,
    name: 'Welcome',
    icon: IconCar
  },
  {
    ref: `#${SectionName.ABOUT}`,
    name: 'About',
    icon: IconCar
  },
  {
    ref: `#${SectionName.MEDIA}`,
    name: 'Media',
    icon: IconCar
  },
  {
    ref: `#${SectionName.CONTRIBUTORS}`,
    name: 'Contributors',
    icon: IconCar
  },
  {
    ref: `#${SectionName.CONTACT}`,
    name: 'Contact Us',
    icon: IconCar
  },
];
