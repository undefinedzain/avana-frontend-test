import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Sidebar/GrandChildMenu.css'

const GrandChildMenu = (props) => {
  const { menu, childMenu, grandChildMenu, grandChildMenuSegment } = props
  const disabledClass = grandChildMenu.isAllowed ? '' : 'disabled'
  const activeClass = grandChildMenuSegment === grandChildMenu.id ? 'active' : ''

  if (grandChildMenu.isShowed) {
    return (
      <li className={`grand-child-menu ${disabledClass} ${activeClass} `}>
        {grandChildMenu.isAllowed ?
          <Link className='grand-child-menu-link text-primary' to={`/${menu.id}/${childMenu.id}/${grandChildMenu.id}`}>{grandChildMenu.id}</Link>
          : <p className='disabled-menu-text'>{grandChildMenu.id}</p>
        }
      </li>
    )
  }

  return null
}

export default GrandChildMenu
