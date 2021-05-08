import React from 'react'
import ToggleChildMenu from './ToggleChildMenu'
import '../../styles/Toggler/Menu.css'

const ToggleMenu = (props) => {
  const { menu, menuIndex, toggleMenu } = props
  let payload = { menuIndex: menuIndex }

  return (
    <div className='menu-list text-primary' key={menuIndex}>
      <div className='menu-list-toggle-container'>
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
        <div>
          <br />
          {
            menu.childs.map((childMenu, childMenuIndex) => {
              return (
                <ToggleChildMenu
                  key={childMenuIndex}
                  menuIndex={menuIndex}
                  menu={childMenu}
                  childMenuIndex={childMenuIndex}
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

export default ToggleMenu
