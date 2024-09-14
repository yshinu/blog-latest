'use client';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { Input } from '@nextui-org/input';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';


function NavBar() {

  const menuItems = [
    '学习',
    '生活',
    '归档',
  ];
  return (
    <Navbar height={"70px"} maxWidth='xl' isBordered isBlurred className=" w-full">
      <NavbarBrand>
        <Image src={'/icons/logo.png'} alt={'logo'} width={30} height={30} />
        <p className="font-bold text-inherit">你好哈哈</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" className='flex items-center gap-1 text-lg' href="#">
            <Image src={'/icons/xx.svg'} alt={'学习'} width={16} height={16}/>
            学习
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className='flex items-center gap-1 text-lg'>
            <Image src={'/icons/sh.svg'} alt={'生活'} width={16} height={16}/>
            生活
            </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#" className='flex items-center gap-1 text-lg'>
            <Image src={'/icons/gd.svg'} alt={'归档'} width={16} height={16}/>
            归档
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        className="sm:hidden"
      />
      <NavbarContent as="div" className="items-center sm:flex hidden"   justify="end">
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder="搜点什么吧..."
          size="sm"
          startContent={
            <Image
              src={'/icons/search.svg'}
              width={16}
              height={16}
              alt="search"
            />
          }
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2 bg-slate-200">
              <p className="font-semibold">当前登录</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>

            <DropdownItem key="logout" className=" bg-slate-200" >
             <span className=' text-red-300'>登出</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
