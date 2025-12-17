// "use client"

// import { navLinks } from '@/constants'
// import { SignedIn, SignedOut, UserButton, useUser,useClerk } from '@clerk/nextjs'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname, useRouter } from 'next/navigation'
// import { Button } from '../ui/button'


// const Sidebar = () => {
//   const pathname = usePathname();
//   const { user } = useUser();
//   const {signOut} = useClerk();
//   const router = useRouter();

//   console.log('Current pathname:', pathname);
//   console.log('Nav links:', navLinks);

//   return (
//     <aside className="hidden h-screen w-72 bg-white p-5 shadow-md shadow-purple-200/50 lg:flex">
//       <div className="flex size-full flex-col gap-4">
//         <Link href="/" className="flex items-center gap-2 md:py-2">
//           <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
//         </Link>

//         <nav className="flex h-full flex-col justify-between md:gap-4">
//           <SignedIn>
//             <ul className="hidden w-full flex-col items-start gap-2 md:flex">
//               {navLinks.slice(0, 6).map((link) => {
//                 const isActive = link.route === pathname

//                 return (
//                   <li 
//                     key={link.route} 
//                     className={`flex w-full items-center justify-center whitespace-nowrap rounded-full transition-all hover:bg-purple-100 hover:shadow-inner group ${
//                       isActive 
//                         ? 'bg-purple-gradient bg-cover text-white' 
//                         : 'text-gray-700'
//                     }`}
//                   >
//                     <Link 
//                       className="flex size-full gap-4 p-4" 
//                       href={link.route}
//                     >
//                       <Image 
//                         src={link.icon}
//                         alt="logo"
//                         width={24}
//                         height={24}
//                         className={isActive ? 'brightness-200' : ''}
//                       />
//                       <span className="font-semibold text-[16px] leading-[140%]">
//                         {link.label}
//                       </span>
//                     </Link>
//                   </li>
//                 )
//               })}
//             </ul>

//             <ul className="hidden w-full flex-col items-start gap-2 md:flex">
//               {navLinks.slice(6).map((link) => {
//                 const isActive = link.route === pathname

//                 return (
//                   <li 
//                     key={link.route} 
//                     className={`flex w-full items-center justify-center whitespace-nowrap rounded-full transition-all hover:bg-purple-100 hover:shadow-inner group ${
//                       isActive 
//                         ? 'bg-purple-gradient bg-cover text-white' 
//                         : 'text-gray-700'
//                     }`}
//                   >
//                     <Link 
//                       className="flex size-full gap-4 p-4" 
//                       href={link.route}
//                     >
//                       <Image 
//                         src={link.icon}
//                         alt="logo"
//                         width={24}
//                         height={24}
//                         className={isActive ? 'brightness-200' : ''}
//                       />
//                       <span className="font-semibold text-[16px] leading-[140%]">
//                         {link.label}
//                       </span>
//                     </Link>
//                   </li>
//                 )
//               })}

//               <li className="flex items-center justify-center cursor-pointer gap-4 p-4">
//                 <UserButton  showName />
//               </li>
//             </ul>
//           </SignedIn>

//           {/* <SignedOut>
//             <Button 
//               asChild 
//               className="flex items-center justify-center gap-3 rounded-full px-6 py-4 focus-visible:ring-offset-0 focus-visible:ring-transparent bg-purple-gradient bg-cover"
//             >
//               <Link href="/sign-in">
//                 <span className="font-semibold text-[16px] leading-[140%]">Login</span>
//               </Link>
//             </Button>
//           </SignedOut> */}

//         <Button 
//           variant="outline" 
//               className="flex items-center justify-center gap-3 rounded-full px-6 py-4 text-amber-400"
//           onClick={async () => {
//             await signOut();
//             router.push('/sign-in');
//           }}
//         >
//           Sign Out
//         </Button>

//         </nav>
//       </div>
//     </aside>
//   )
// }

// export default Sidebar

"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton, useUser, useClerk } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const Sidebar = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/sign-in');
  };

  return (
    <aside className="hidden h-screen w-72 bg-white p-5 shadow-md shadow-purple-200/50 lg:flex">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="flex items-center gap-2 md:py-2">
          <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
        </Link>

        <nav className="flex h-full flex-col justify-between md:gap-4">
          <SignedIn>
            <ul className="hidden w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li
                    key={link.route}
                    className={`flex w-full items-center justify-center whitespace-nowrap rounded-full transition-all hover:bg-purple-100 hover:shadow-inner group ${isActive
                        ? 'bg-purple-gradient bg-cover text-white'
                        : 'text-gray-700'
                      }`}
                  >
                    <Link
                      className="flex size-full gap-4 p-4"
                      href={link.route}
                    >
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={isActive ? 'brightness-200' : ''}
                      />
                      <span className="font-semibold text-[16px] leading-[140%]">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            <ul className="hidden w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li
                    key={link.route}
                    className={`flex w-full items-center justify-center whitespace-nowrap rounded-full transition-all hover:bg-purple-100 hover:shadow-inner group ${isActive
                        ? 'bg-purple-gradient bg-cover text-white'
                        : 'text-gray-700'
                      }`}
                  >
                    <Link
                      className="flex size-full gap-4 p-4"
                      href={link.route}
                    >
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={isActive ? 'brightness-200' : ''}
                      />
                      <span className="font-semibold text-[16px] leading-[140%]">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                )
              })}

              <li className="flex items-center justify-center cursor-pointer gap-4 p-4">
                <UserButton showName />
              </li>

              {/* Sign Out button inside SignedIn wrapper */}
              <li className="mt-4 relative left-5">
                <Button
                  onClick={handleSignOut}
                  className="flex items-center justify-center gap-3 rounded-full px-6 py-4 w-full bg-rose-500 hover:bg-rose-400 text-white"
                >
                  <span className="font-semibold text-[16px] leading-[140%]">Sign Out</span>
                </Button>
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button
              asChild
              className="flex items-center justify-center gap-3 rounded-full px-6 py-4 focus-visible:ring-offset-0 focus-visible:ring-transparent bg-purple-gradient bg-cover"
            >
              <Link href="/sign-in">
                <span className="font-semibold text-[16px] leading-[140%] text-white">Login</span>
              </Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar