'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { forwardRef } from 'react'

interface MenuItemProps {
  title: string
  url: string
}

const menuItems: MenuItemProps[] = [
  { title: 'Home', url: '/' },
  { title: 'Projects', url: '/design-agency' },
  { title: 'FAQ', url: '/faq' },
  { title: 'Contact', url: '/contact' },
]

interface MenuListProps {
  onItemClick?: () => void
}

export const MenuList = forwardRef<HTMLUListElement, MenuListProps>((props, ref) => {
  const { onItemClick } = props
  const pathname = usePathname()

  const isLinkActive = (url: string) => {
    if (url === '/') return pathname === '/'
    return pathname === url || pathname.startsWith(url + '/')
  }

  return (
    <ul ref={ref} className="menu-list">
      {menuItems.map((item) => (
        <li
          key={item.title}
          className={`menu-list-item menu-list-item-anchor ${isLinkActive(item.url) ? 'active' : ''}`}>
          <Link
            href={item.url}
            onClick={() => onItemClick && onItemClick()}
            className="menu-list-item-text text-[28px] leading-[70px] text-white md:text-[42px] xl:text-[56px] xl:leading-[90px]">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
})

MenuList.displayName = 'MenuList'
