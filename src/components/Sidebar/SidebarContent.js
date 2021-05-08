import React from 'react'
import Menu from './Menu'
import '../../styles/Sidebar/Menu.css'

const SidebarContent = (props) => {
  let pathname = window.location.pathname
  let fullUrlSegment = pathname.substr(1)
  let splittedUrlSegment = fullUrlSegment.split('/')
  let menuSegment = splittedUrlSegment.length > 0 ? splittedUrlSegment[0] : ''
  let childMenuSegment = splittedUrlSegment.length > 1 ? splittedUrlSegment[1] : ''
  let grandChildMenuSegment = splittedUrlSegment.length > 2 ? splittedUrlSegment[2] : ''

  const { menus } = props

  return (
    <ul className='main-menu'>
      {
        menus.map((menu, menuIndex) => {
          if (menu.isShowed) {
            return (
              <Menu key={menuIndex} menu={menu} menuSegment={menuSegment} childMenuSegment={childMenuSegment} grandChildMenuSegment={grandChildMenuSegment} />
            )
          }

          return null
        })
      }
    </ul>
  )
}

export default SidebarContent
