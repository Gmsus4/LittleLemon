import { IoMdClose, IoMdMenu } from "react-icons/io"
import { NavOptions } from "./NavOptions"
import { useState } from "react"

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onChangeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav aria-label="Main Navigation" className="nav">
          <img src="/Logo.svg" alt="company logo"/>
          <NavOptions />
          {
            !isMenuOpen 
              ? <IoMdMenu size={30} className="iconMenu" onClick={onChangeMenu}/>
              : <IoMdClose size={30} className="iconMenu" onClick={onChangeMenu}/>

          }
      </nav>
      {
        isMenuOpen && 
        (<div className="openMenu">
          <NavOptions />
        </div>)
      }
    </>
  )
}
