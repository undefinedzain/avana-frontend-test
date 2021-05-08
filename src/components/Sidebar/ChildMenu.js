import React from 'react'
import GrandChildMenu from './GrandChildMenu'
import '../../styles/Sidebar/ChildMenu.css'
import { Link } from 'react-router-dom'

const ChildMenu = (props) => {
  const { menu, childMenu, childMenuSegment, grandChildMenuSegment } = props
  const activeClass = childMenuSegment === childMenu.id ? 'active' : ''
  const hasChildClass = typeof(childMenu.childs) === 'undefined' ? 'no-child' : 'has-child'
  const disabledClass = childMenu.isAllowed ? '' : 'disabled'

  if (childMenu.isShowed) {
    return (
      <li className={`child-menu ${activeClass} ${hasChildClass} ${disabledClass}`}>
        {typeof(childMenu.childs) === 'undefined' ?
          childMenu.isAllowed ? <Link className='child-menu-link text-primary' to={`/${menu.id}/${childMenu.id}`}>{childMenu.id}</Link>
          : <p className='disabled-menu-text'>{childMenu.id}</p>
        :
          <div className='child-menu-has-dropdown-container'>
            <p className='child-menu-parent-title'>{childMenu.id}</p>
            <ul className='grand-child-dropdown-menu open'>
              {childMenu.childs.map((grandChildMenu, grandChildMenuIndex) => {
                return (
                  <GrandChildMenu
                    key={grandChildMenuIndex}
                    grandChildMenu={grandChildMenu}
                    menu={menu}
                    childMenu={childMenu}
                    grandChildMenuSegment={grandChildMenuSegment}
                  />
                )
              })}
            </ul>
          </div>
        }
      </li>
    )
  }

  return null
}

export default ChildMenu
