// list of parameters for the request
let key = '6801112-eebb97b4fd98f198e135091f3'
let query = 'recette'
let orientation = 'horizontal'
let type = 'photo'
let category = 'food'
let order = 'lastest'
let lang = 'fr'

// call the module XMLHttpRequest
const http = new XMLHttpRequest()

// create a new request
let req = `https://pixabay.com/api/?key=${key}&q=${query}&lang=${lang}&orientation=${orientation}$image_type=${type}&category=${category}&order=${order}`

http.open('GET', req, true)

http.onload = function (e) {
  if (http.readyState === 4) {
    console.log('OK')
  } else {
    console.log('Error')
  }
}

http.send()
