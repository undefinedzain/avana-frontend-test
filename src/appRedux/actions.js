import { TOGGLE_MENU } from './actionTypes'

const toggleMenus = menu => ({
  type: TOGGLE_MENU,
  payload: { menu }
})

export default toggleMenus
