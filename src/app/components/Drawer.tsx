import React, { useEffect } from 'react';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from '@material-tailwind/react';

const tsFix = {} as any;

export default function DrawerDefault() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up to reset the style when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <React.Fragment>
      <Button {...tsFix} onClick={openDrawer} color="green">
        Filter
      </Button>
      <Drawer {...tsFix} open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography {...tsFix} variant="h5" className="text-gray-700">
            Filter
          </Typography>
          <IconButton
            {...tsFix}
            variant="text"
            className="text-gray-700"
            onClick={closeDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div className="w-full max-w-sm min-w-[200px]">
          <div className="relative">
            <input className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
            <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
              Type Here...
            </label>
          </div>
        </div>

        {/* <Typography {...tsFix} color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography> */}
        <div className="flex gap-2">
          {/* <Button {...tsFix} size="sm" variant="outlined">
            Documentation
          </Button>
          <Button {...tsFix} size="sm">
            Get Started
          </Button> */}
        </div>
      </Drawer>
    </React.Fragment>
  );
}
