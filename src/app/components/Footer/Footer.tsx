import React from 'react';
import {
  PhoneIcon,
  BuildingOfficeIcon,
  AtSymbolIcon,
  ChatBubbleLeftRightIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6">
      <div className="container mx-auto">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Google Maps */}
          <div>
            <h3 className="text-2xl font-semibold text-green-500 mb-8">
              Finden Sie uns
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d172.82321330511527!2d7.1998530948368735!3d51.58942097523948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sde!4v1727884524997!5m2!1sen!2sde"
              width="100%"
              height="250"
              className="border-0"
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div id="contacts">
            <h3 className="text-2xl font-semibold text-center md:text-left text-green-500 mb-8">
              Kontakte
            </h3>
            <ul>
              <li className="pb-4 text-lg  transition-colors duration-300 hover:text-yellow-400">
                <a
                  href="https://www.google.com/maps?q=Kärntener%20Str.%2043,%2045659%20Recklinghausen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex justify-center md:justify-start"
                >
                  <BuildingOfficeIcon aria-hidden="true" className="h-6 w-6" />
                  <span className="pl-4">
                    Kärntener Str. 43, 45659 Recklinghausen
                  </span>
                </a>
              </li>
              <li className="pb-4 text-lg transition-colors duration-300 hover:text-yellow-400">
                <a
                  href="tel:+491782362609"
                  className="flex justify-center md:justify-start"
                >
                  <PhoneIcon aria-hidden="true" className="h-6 w-6" />
                  <span className="pl-4">+49 178 236-26-09</span>
                </a>
              </li>

              <li className="pb-4 text-lg transition-colors duration-300 hover:text-yellow-400">
                <a
                  href="https://wa.me/491782362609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center md:justify-start"
                >
                  {' '}
                  <ChatBubbleLeftRightIcon
                    aria-hidden="true"
                    className="h-6 w-6"
                  />
                  <span className="pl-4">WhatsApp</span>
                </a>
              </li>
              <li className="pb-4 text-lg transition-colors duration-300 hover:text-yellow-400">
                <a
                  href="mailto:info@i-motors-werk.de"
                  className="flex justify-center md:justify-start"
                >
                  <AtSymbolIcon aria-hidden="true" className="h-6 w-6" />
                  <span className="pl-4">info@i-motors-werk.de</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-2xl font-semibold text-center md:text-left text-green-500 mb-8">
              Folgen Sie uns
            </h3>
            <ul>
              <li className="pb-4 text-lg transition-colors duration-300 hover:text-yellow-400">
                <a
                  href="https://www.kleinanzeigen.de/s-anzeige/hobbywerkstatt-kfz-mietwerkstatt-hebebuehne-kran-reparatur/2379287664-280-1988"
                  target="_blank"
                  className="flex justify-center md:justify-start"
                >
                  <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
                  <span className="pl-4">Kleinanzeigen</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; 2024 i-MOTORS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
