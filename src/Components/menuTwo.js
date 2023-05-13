import React from 'react';
import '../CSS/menuTwo.css'
import { NavLink } from 'react-router-dom'

const MenuTwo = () => {
  return (
    <div className='menuTwoDiv'>
      <div className='highlight' onClick={hideMenuTwoDiv}></div>
      <div className='menuTwo'>
        <div className='menuTwoHeader'>فهرس سور القرآن الكريم</div>
        <NavLink to="/001" onClick={toZero}>
          001 - سورة الفاتحة
        </NavLink>
        <NavLink onClick={toZero} to="/002">
          002 - سورة البقرة
        </NavLink>
        <NavLink onClick={toZero} to="/003">
          003 - سورة آل عمران
        </NavLink>
        <NavLink onClick={toZero} to="/004">
          004 - سورة النساء
        </NavLink>
        <NavLink onClick={toZero} to="/005">
          005 - سورة المائدة
        </NavLink>
        <NavLink onClick={toZero} to="/006">
          006 - سورة الأنعام
        </NavLink>
        <NavLink onClick={toZero} to="/007">
          007 - سورة الأعراف
        </NavLink>
        <NavLink onClick={toZero} to="/008">
          008 - سورة الأنفال
        </NavLink>
        <NavLink onClick={toZero} to="/009">
          009 - سورة التوبة
        </NavLink>
        <NavLink onClick={toZero} to="/010">
          010 - سورة يونس
        </NavLink>
        <NavLink onClick={toZero} to="/011">
          011 - سورة هود
        </NavLink>
        <NavLink onClick={toZero} to="/012">
          012 - سورة يوسف
        </NavLink>
        <NavLink onClick={toZero} to="/013">
          013 - سورة الرعد
        </NavLink>
        <NavLink onClick={toZero} to="/014">
          014 - سورة إبراهيم
        </NavLink>
        <NavLink onClick={toZero} to="/015">
          015 - سورة الحجر
        </NavLink>
        <NavLink onClick={toZero} to="/016">
          016 - سورة النحل
        </NavLink>
        <NavLink onClick={toZero} to="/017">
          017 - سورة الإسراء
        </NavLink>
        <NavLink onClick={toZero} to="/018">
          018 - سورة الكهف
        </NavLink>
        <NavLink onClick={toZero} to="/019">
          019 - سورة مريم
        </NavLink>
        <NavLink onClick={toZero} to="/020">
          020 - سورة طه
        </NavLink>
        <NavLink onClick={toZero} to="/021">

        </NavLink>
        <NavLink onClick={toZero} to="/022">

        </NavLink>
        <NavLink onClick={toZero} to="/023">

        </NavLink>
        <NavLink onClick={toZero} to="/024">

        </NavLink>
        <NavLink onClick={toZero} to="/025">

        </NavLink>
        <NavLink onClick={toZero} to="/026">

        </NavLink>
        <NavLink onClick={toZero} to="/027">

        </NavLink>
        <NavLink onClick={toZero} to="/028">

        </NavLink>
        <NavLink onClick={toZero} to="/029">

        </NavLink>
        <NavLink onClick={toZero} to="/030">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>
        <NavLink onClick={toZero} to="/error">

        </NavLink>

      </div>

    </div>
  );
}

export default MenuTwo;

function toZero(){
  document.documentElement.scrollTop = 120
  
  hideMenuTwoDiv() ;
}

function hideMenuTwoDiv(){
  const menuTwoDiv = document.querySelector('.menuTwoDiv')
  const menuTwo = document.querySelector('.menuTwo')
  const highlight = document.querySelector('.highlight')
  const leanThree = document.querySelector('.leanThree')
  const leanTwo = document.querySelector('.leanTwo')

  leanTwo.classList.remove('leanTwoHide')
  leanThree.classList.remove('leanThreeShow')
  menuTwo.classList.add('menuTwoDivHide')
  highlight.classList.add('highlightHide')
  setTimeout(() => {
    menuTwoDiv.classList.remove('menuTwoDivShow')
  }, 300);

  document.body.style.overflow = 'overlay'
}