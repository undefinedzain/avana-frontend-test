import React from 'react'
import ToggleGrandChildMenu from './ToggleGrandChildMenu'
import '../../styles/Toggler/ChildMenu.css'

const ToggleChildMenu = (props) => {
  const { menu, menuIndex, childMenuIndex, toggleMenu } = props
  let payload = {
    menuIndex : menuIndex, childMenuIndex : childMenuIndex
  }

  return (
    <div className='child-menu-list text-primary'>
      <div className='child-menu-list-toggle-container'>
        <p className='menu-name'>{menu.id}</p>
        <div className='menu-toggler-container'>
          <p>Show / Hide</p>
          <label className="switch">
            <input type="checkbox" checked={menu.isShowed} onChange={(e) => { toggleMenu(e, payload, 'isShowed')} } />
            <span className="slider round"></span>
          </label>
        </div>
        <div className='menu-toggler-container'>
          <p>Allow / Disallow</p>
          <label className="switch">
            <input type="checkbox" checked={menu.isAllowed} onChange={(e) => { toggleMenu(e, payload, 'isAllowed')} } />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      {typeof(menu.childs) !== 'undefined' ?
        <div className='grand-child-menu-list-parent'>
          <br />
          {
            menu.childs.map((grandChildMenu, grandChildMenuIndex) => {
              return (
                <ToggleGrandChildMenu
                  key={grandChildMenuIndex}
                  menuIndex={menuIndex}
                  childMenuIndex={childMenuIndex}
                  grandChildMenuIndex={grandChildMenuIndex}
                  menu={grandChildMenu}
                  toggleMenu={toggleMenu}
                />
              )
            })
          }
        </div>
        : null
      }
    </div>
  )
}

export default ToggleChildMenu
