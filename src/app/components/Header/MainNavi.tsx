import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';
import Modal from '../Modal';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Mietwerkstatt', href: '/rental' },
  { name: 'Autoteile', href: '/shop' },
  { name: 'Autoschrottplatz', href: '/carsdismanting' },
  { name: 'Kontakte', href: '/#contacts' },
  { name: 'Impressum', href: '/information' },
];

export default function Navi() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // Manage modal open state

  const openModal = () => {
    setMobileMenuOpen(false); // Close mobile menu
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <nav className="flex items-center justify-between p-4 lg:px-8 bg-gray-200">
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="-mx-3 block rounded-lg px-3 py-2 text-xl italic font-bold leading-7 text-gray-700">
            I-MOTORS
          </span>
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
            className={`text-lg font-medium leading-6 text-gray-800 hover:text-green-500 transition-all duration-300 ${
              pathname === item.href ? 'text-green-500 underline' : ''
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <button
          onClick={openModal}
          className="text-lg font-semibold leading-6 text-gray-700 hover:text-green-500 transition-all duration-300"
        >
          Anmelden <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-gray-200 px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/"
              className="-m-1.5 p-1.5"
            >
              <span className="text-xl font-bold leading-7 text-gray-700">
                I-MOTORS
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-10 w-10" />
            </button>
          </div>
          <div className="mt-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                onClick={() => setMobileMenuOpen(false)}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
            <div className="py-6">
              <button
                onClick={openModal}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold text-gray-900"
              >
                Anmelden <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Modal for log in/sign up */}
      <Modal triggerOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
}
