import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../CSS/downIcon.css'

const DownIcon = () => {
  return (
    <div>
      <div className='downIcon' onClick={toDown}>
        <div className='downIconProg'>
          <FontAwesomeIcon className='downIconProgOne' icon={faAngleDown} size='2x'/>
        </div>
      </div>
      <div className='end'></div>
    </div>
  );
}

export default DownIcon;

window.onscroll = () => {
  downIconShow() ; scrollPercent() ; headerShadow() ; hideAndShowOnScroll() ;
}

function downIconShow(){
    const down = document.querySelector('.downIcon')
  if(window.scrollY > 10){
    down.classList.add('downIconOne')
  } else if(window.scrollY < 10){
    down.classList.remove('downIconOne')
  }
}

function scrollPercent(){
  const down = document.querySelector('.downIcon')
  let T = document.body.scrollTop || document.documentElement.scrollTop
  let H = document.documentElement.scrollHeight - document.documentElement.clientHeight
  let A = (T / H) * 100

  down.style.background = `conic-gradient(#0069aa ${A}% , #c0cfd8 ${A}%)`


  const downIcon = document.querySelector('.downIconProgOne')

  if(A < 50){
    downIcon.style.transform = 'translate(-50% , -50%) rotate(0deg)'
  } else if(A > 50){
    downIcon.style.transform = 'translate(-50% , -50%) rotate(180deg)'
  }

}

function toDown(){
  const end = document.querySelector('.end')

  let T = document.body.scrollTop || document.documentElement.scrollTop
  let H = document.documentElement.scrollHeight - document.documentElement.clientHeight
  let A = (T / H) * 100

  if(A < 50){
    end.scrollIntoView()
  } else if(A > 50){
    document.documentElement.scrollTop = 0
  } 

}


function headerShadow(){
  let header = document.querySelector('.header')
  if(window.scrollY > 10){
    header.classList.add('shadow')
  } else {
    header.classList.remove('shadow')
  }
}

let S = window.scrollY ;

function hideAndShowOnScroll(){
  let header = document.querySelector('.header')
  let menu = document.querySelector('.menu')
  if( S < window.scrollY && S > window.innerHeight){
    header.classList.add('headerHide')
    header.classList.remove('headerShow')
    menu.style.top = '0'
    menu.style.height = '100vh'
    console.log('hide')
  } else {
    header.classList.add('headerShow')
    header.classList.remove('headerHide')
    menu.style.top = '49px'
    menu.style.height = 'calc(100vh - 49px)'
    console.log('show')
  }
  
  S = window.scrollY ;
}