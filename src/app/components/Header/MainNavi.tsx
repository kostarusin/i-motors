'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import clsx from 'clsx';
import {
  WrenchScrewdriverIcon,
  HomeIcon,
  ShoppingCartIcon,
  PhoneIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Mietwerkstatt', href: '/rental', icon: WrenchScrewdriverIcon },
  { name: 'Autoteile', href: '/shop', icon: ShoppingCartIcon },
  { name: 'Kontakte', href: '/contacts', icon: PhoneIcon },
  { name: 'Impressum', href: '/information', icon: InformationCircleIcon },
];

export default function Navi() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between gap-6">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={Link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-4" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
