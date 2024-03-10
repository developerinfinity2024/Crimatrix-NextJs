import Link from 'next/link';
import NavbarDesktop from './NavbarDesktop';
import Image from 'next/image';
import NavbarSearch from './NavbarSearch';

const Navbar = () => {

  return (
    <nav className="bg-primary px-4">
      <div className="flex justify-between items-center py-[25.1px] containerMargin">
        <Link href="/" className="text-[24px]">
          <Image
            src="/Images/CrimatrixLogo.svg"
            width={157.42}
            height={38.2}
            alt='Crimatrix Logo'
          />
        </Link>

        {/* Navbar Desktop */}
        <NavbarDesktop />

        {/* navbar CTA container */}
        <article className="flex gap-4 items-center md:order-3">
          <NavbarSearch />
          <div className='flex gap-[14px] items-center'>
            <div className="w-[48px] h-[48px] bg-[#2c3444] cursor-pointer rounded-3xl inline-flex justify-center items-center">
              <Image
                width={24}
                height={24}
                src="/Images/notification.svg"
                alt='Dashboard Notification'
              />
            </div>
            <div className=" bg-[#2c3444] rounded-full cursor-pointer">
              <Image
                width={48}
                height={48}
                src="/Images/User.svg"
                alt='User Icon'
              />
            </div>
          </div>
        </article>
      </div>
    </nav >
  );
};

export default Navbar;
