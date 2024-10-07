import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useEffect, useState } from 'react';

interface ModalProps {
  triggerOpen: boolean; // Modal visibility will be controlled externally
  onClose: () => void; // Close callback to trigger from inside the modal
}

export default function Modal({ triggerOpen, onClose }: ModalProps) {
  const [isOpen, setIsOpen] = useState(triggerOpen);

  // Synchronize the modal's open state with the prop passed from the parent
  useEffect(() => {
    setIsOpen(triggerOpen);
  }, [triggerOpen]);

  function close() {
    setIsOpen(false);
    onClose(); // Call the external onClose handler to sync state with parent
  }

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="w-full max-w-4xl min-h-7 rounded-xl bg-white/5 p-6 backdrop-blur-xl duration-300 ease-out">
              <DialogTitle as="h3" className="text-lg font-medium text-white">
                Anmelden <span aria-hidden="true">&rarr;</span>
              </DialogTitle>

              <form className="mt-4 space-y-4">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-md font-medium text-white"
                  >
                    E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full h-10 pl-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white"
                  >
                    Passwort
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full h-10 pl-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-white"
                  >
                    Passwort bestätigen
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="mt-1 block w-full h-10 pl-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {/* Submit and Cancel Buttons */}
                <div className="flex items-center justify-end gap-4">
                  <Button
                    type="button"
                    className="bg-gray-700 py-2 px-4 rounded-md text-white hover:bg-gray-600"
                    onClick={close}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-green-600 py-2 px-4 rounded-md text-white hover:bg-green-500"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
