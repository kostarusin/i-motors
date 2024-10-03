import React from 'react';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12" id="contacts">
      <div className="container mx-auto">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Google Maps */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
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
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Kontakte
            </h3>
            <p>
              <strong></strong>Kärntener Str. 43, 45659 Recklinghausen
            </p>
            <p>
              <strong></strong> +49 1782362609
            </p>
            <p>
              <strong></strong> info@i-motors-werk.de
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Folgen Sie uns
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href="https://www.kleinanzeigen.de/s-anzeige/hobbywerkstatt-kfz-mietwerkstatt-hebebuehne-kran-reparatur/2379287664-280-1988"
                  target="_blank"
                  className="text-yellow-400 hover:text-yellow-500"
                >
                  Kleinanzeigen
                </a>
              </li>
              {/* <li className="mb-2">
                <a href="#" className="text-yellow-400 hover:text-yellow-500">
                  WhattsApp
                </a>
              </li> */}
              {/* <li className="mb-2">
                <a href="#" className="text-yellow-400 hover:text-yellow-500">
                  Instagram
                </a>
              </li> */}
              {/* <li className="mb-2">
                <a href="#" className="text-yellow-400 hover:text-yellow-500">
                  LinkedIn
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; 2024 I-MOTORS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
