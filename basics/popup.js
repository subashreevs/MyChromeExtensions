document.addEventListener('DOMContentLoaded', function () {

  const bg = chrome.extension.getBackgroundPage()
  Object.keys(bg.covid).forEach(function (url) {
    const div = document.createElement('div')
    div.textContent = `${url}: ${bg.covid[url]}`
    document.body.appendChild(div)
  })

    /*document.querySelector('button').addEventListener('click', onclick, false)
  
    function onclick () {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
        })
    }
  
    function setCount (res) {
        const div = document.createElement('div')
        div.textContent = `${res.count} covid`
        document.body.appendChild(div)
    }*/

}, false)