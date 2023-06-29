import React, { useState } from "react";
import styles from "./App.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { AiOutlineDown } from "react-icons/ai";
import Links from "./Links";

const App = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [activeIndex, setActiveIndex] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

  const handleAccordionToggle = (index) => {
    if (activeIndex.includes(index)) {
      setActiveIndex(activeIndex.filter((item) => item !== index));
    } else {
      setActiveIndex((prevIndex) => [...prevIndex, index]);
    }
  };

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setShowMenu(!showMenu);
  };

  const handleCancel = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setShowMenu(!showMenu);
  };

  const handleSectionToggle = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
    setActiveIndex([]);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>LoGo</h1>
        </div>

        <nav className={styles.desktopMenu}>
          <ul className={styles.menu}>
            <li
              onClick={() => handleSectionToggle("home")}
              className={activeSection === "home" ? styles.active : ""}
            >
              Home
            </li>
            <li
              onClick={() => handleSectionToggle("about")}
              className={activeSection === "about" ? styles.active : ""}
            >
              About
            </li>
            <li
              onClick={() => handleSectionToggle("services")}
              className={activeSection === "services" ? styles.active : ""}
            >
              Services
            </li>
            <li
              onClick={() => handleSectionToggle("contact")}
              className={activeSection === "contact" ? styles.active : ""}
            >
              Contact
            </li>
          </ul>
        </nav>
        {showMenu ? (
          <GiHamburgerMenu
            className={styles.menubtn}
            onClick={handleMenuToggle}
          />
        ) : (
          <ImCross className={styles.cancelbtn} onClick={handleCancel} />
        )}
      </header>

      {activeSection === "home" && <Links link="Home" style="#F5EEF8" />}
      {activeSection === "about" && <Links link="About" style="#A9CCE3" />}
      {activeSection === "services" && <Links link="services" style="#FAD7A0 " />}
      {activeSection === "contact" && <Links link="contact" style="#F4F6F7" />}

      {isMobileMenuOpen ? (
        <nav className={styles.desktopMenu1}>
          <ul className={styles.menu1}>
            <li
              className={styles.link}
              onClick={() => handleAccordionToggle(0)}
            >
              Home <AiOutlineDown />
            </li>

            {activeIndex.includes(0) && (
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            )}
            <li
              className={styles.link}
              onClick={() => handleAccordionToggle(1)}
            >
              About <AiOutlineDown />
            </li>
            {activeIndex.includes(1) && (
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            )}
            <li
              className={styles.link}
              onClick={() => handleAccordionToggle(2)}
            >
              Services <AiOutlineDown />
            </li>
            {activeIndex.includes(2) && (
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            )}
            <li
              className={styles.link}
              onClick={() => handleAccordionToggle(3)}
            >
              Contact <AiOutlineDown />
            </li>
            {activeIndex.includes(3) && (
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            )}
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default App;
