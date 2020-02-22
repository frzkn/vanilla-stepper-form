document.addEventListener('DOMContentLoaded', () => {
  let $id = document.getElementById.bind(document)
  let $class = document.getElementsByClassName.bind(document)
  let print = console.log.bind(console)

  //Declarations

  let tabs = $class('tab')

  let tab1 = tabs[0]
  let tab2 = tabs[1]
  let tab3 = tabs[2]

  let prevBtn = $class('button-prev')[0]
  let nextBtn = $class('button-next')[0]

  let circles = $class('circle')
  let hrs = $class('hr')
  // Events

  prevBtn.addEventListener('click', () => prevBtnClick())
  nextBtn.addEventListener('click', () => nextBtnClick())

  // Logic
  let ACTIVE_TAB = 0

  tab1.style.display = 'block'
  tab2.style.display = 'none'
  tab3.style.display = 'none'

  prevBtn.style.visibility = 'hidden'

  console.log(tabs.length)

  const renderTabs = () => {
    for (let i = 0; i < tabs.length; i++) {
      if (ACTIVE_TAB == i) {
        tabs[i].style.display = 'block' 
        tabs[i].classList.add('tab-fadeinup')
      }
      else tabs[i].style.display = 'none'

      if (ACTIVE_TAB == 0) prevBtn.style.visibility = 'hidden'
      else prevBtn.style.visibility = 'visible'
    }
  }

  const prevBtnClick = () => {
    if (ACTIVE_TAB == 0) alert('cant go back no more')
    else {
      ACTIVE_TAB--
      renderTabs()
      updateProgressbar()
    }
  }

  const nextBtnClick = () => {
    if (ACTIVE_TAB == 2) alert('Done')
    else {
      ACTIVE_TAB++
      renderTabs()
      updateProgressbar()
    }
  }

  updateProgressbar = () => {
    for (let i = 1; i < 3; i++) circles[i].classList.remove('finished')
    for (let i = 0; i <= ACTIVE_TAB; i++) {
      print('hi')
      circles[i].classList.add('finished')
    }

    for (let i = 0; i <= ACTIVE_TAB - 1; i++) {
      hrs[i].classList.add('finished')
    }
  }
})
