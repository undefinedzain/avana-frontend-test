import React from 'react'
import ChildMenu from './ChildMenu'
import '../../styles/Sidebar/Menu.css'
import { Link } from 'react-router-dom'

const Menu = (props) => {
  const { menu, menuSegment, childMenuSegment, grandChildMenuSegment } = props
  const hasChildClass = typeof(menu.childs) !== 'undefined' ? 'has-child' : 'no-child'
  const activeClass = menuSegment === menu.id ? 'active' : ''
  const disabledClass = menu.isAllowed ? '' : 'disabled'

  return (
    <li className={`menu text-primary ${hasChildClass} ${activeClass} ${disabledClass}`}>
      {
        typeof(menu.childs) === 'undefined' ?
          menu.isAllowed ? <Link className='menu-link text-primary' to={'/' + menu.id}>{menu.id}</Link> : <p className='disabled-menu-text'>{menu.id}</p>
        : <div className='menu-has-dropdown-container'>
            <p className='menu-parent-title'>{menu.id}</p>
            <ul className='child-dropdown-menu open'>
              {
                menu.childs.map((childMenu, childMenuIndex) => {
                  if (childMenu.isShowed) {
                    return (
                      <ChildMenu key={childMenuIndex} childMenu={childMenu} menu={menu} childMenuSegment={childMenuSegment} grandChildMenuSegment={grandChildMenuSegment} />
                    )
                  }

                  return null
                })
              }
            </ul>
          </div>
      }
    </li>
  )
}

export default Menu
