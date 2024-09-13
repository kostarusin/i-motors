'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import clsx from 'clsx';
// import {
//   WrenchScrewdriverIcon,
//   HomeIcon,
//   ShoppingCartIcon,
//   PhoneIcon,
//   InformationCircleIcon,
// } from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Mietwerkstatt', href: '/rental' },
  { name: 'Autoteile', href: '/shop' },
  { name: 'Kontakte', href: '/contacts' },
  { name: 'Impressum', href: '/information' },
];

export default function Navi() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav
      aria-label="Global"
      className="flex items-center justify-between p-4 lg:px-8"
    >
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="-mx-3 block rounded-lg px-3 py-2 text-xl font-bold leading-7 text-gray-900">
            I-MOTORS
          </span>
          {/* <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-10 w-10" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={clsx('text-lg font-semibold leading-6 text-gray-900', {
              'text-yellow-600 underline': pathname === item.href,
            })}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-lg font-semibold leading-6 text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        transition
        className="lg:hidden transition duration-300 ease-out data-[closed]:opacity-0"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-50 " />
        <DialogPanel
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto
         bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">I-MOTORS</span>
              {/* <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                /> */}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-10 w-10" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
    // <nav className="flex justify-between gap-6">
    //   {links.map((link) => {
    //     const LinkIcon = link.icon;
    //     return (
    //       <Link
    //         key={link.name}
    //         href={link.href}
    //         className={clsx(
    //           'flex h-[24px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 shadow-sm md:flex-none md:justify-start md:p-2 md:px-3',
    //           {
    //             'bg-sky-100 text-blue-600 shadow-md': pathname === link.href,
    //           }
    //         )}
    //       >
    //         <LinkIcon className="w-4" />
    //         <p className="hidden md:block">{link.name}</p>
    //       </Link>
    //     );
    //   })}
    // </nav>
  );
}
