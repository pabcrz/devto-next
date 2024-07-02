import { PrimaryButton, SecondaryButton } from "../ui/Buttons";
import Link from "next/link";
import Image from "next/image";

import search from "../../public/search.svg";
import devto from "../../public/devto.png";

export default function Nav() {
  return (
    <nav className="w-full h-[56px] bg-tertiary flex justify-center shadow-sm">
      <div className="w-full lg:max-w-[1380px] px-2 lg:px-4 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Link href="/">
            <Image src={devto} alt="logo" width={50} height={40} />
          </Link>
          <div className="relative w-[380px]">
            <Link
              href="/search"
              className="px-2 h-[37px] hover:bg-secondary rounded-md absolute bottom-[auto] left-[auto] top-[1px] right-[auto] hidden md:block"
            >
              <Image src={search} alt="search" className="h-full" />
            </Link>
            <input
              type="text"
              className="hidden w-full border p-[6.50px] pl-12 pr-24 border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:border-2 focus:border-primary md:block"
            />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Link
            href="/search"
            className="p-2 hover:bg-secondary rounded-md md:hidden"
          >
            <Image src={search} alt="search" />
          </Link>
          <SecondaryButton styles="hidden" />
          <PrimaryButton styles="" />
        </div>
      </div>
    </nav>
  );
}
