const page = document.body.querySelector('main')
const servicesContent = page.querySelector('.services > article')
const servicesTitles = Array.from(servicesContent.querySelectorAll('& > ul:first-child li'))
const servicesDescriptions = Array.from(servicesContent.querySelectorAll('& > ul:last-child li'))

servicesTitles[0].classList.add('selected')
servicesDescriptions[0].classList.add('selected')

servicesTitles.forEach((title, titleIdx) => {
  function onServiceTitleSelected() {
    for (let i = 0; i < servicesTitles.length; ++i) {
      servicesTitles[i].classList.remove('selected')
      servicesDescriptions[i].classList.remove('selected')
    }
    servicesTitles[titleIdx].classList.add('selected')
    servicesDescriptions[titleIdx].classList.add('selected')
  }

  title.onclick = onServiceTitleSelected
  title.onkeypress = ev => {
    if (ev.key === 'Enter' || ev.code === 'Enter')
      onServiceTitleSelected()
  }
})
