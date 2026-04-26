import { footerSocialLinks } from './../../../data';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 py-12'>
      <div className='w-[80%] mx-auto'>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand / Logo */}
          <a href="#home" className='text-xl font-bold text-indigo-700'>
            {"<Dev/>"}
          </a>

          {/* Social Links */}
          <div className='flex items-center gap-4'>
            {footerSocialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.label}
                className='w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors'
              >
                <link.icon className='w-5 h-5' />
              </a>
            ))}
          </div>

          {/* Made with love */}
          <p className='flex items-center gap-1 text-sm text-muted-foreground'>
            Made with{' '}
            <Heart className='w-4 h-4 text-destructive fill-destructive inline-block' />
            {' '}by <span className='font-medium text-gray-700 dark:text-gray-300 ml-1'>Ayasha Khatun</span>
          </p>
        </div>

        {/* Copyright */}
        <div className='mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center'>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} <span className='font-medium text-gray-700 dark:text-gray-300'>Ayasha Khatun</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
