// list of parameters for the request
let key = '6801112-eebb97b4fd98f198e135091f3'
let query = 'recette'
let orientation = 'horizontal'
let type = 'photo'
let category = 'food'
let order = 'lastest'
let lang = 'fr'
let result = '200'

// module to insert images
let insertImage = function (response) {
  response = JSON.parse(response)

  for (let i = 0; i < response.hits.length; i++) {
    let image = `<div class="col-12 col-sm-6 col-md-3">
            <a href="${response.hits[i].largeImageURL}" data-fancybox data-caption=${response.hits[i].tags}">
                <img src="${response.hits[i].previewURL}" alt=${response.hits[i].tags}" class="img-fluid">
            </a>
         </div>`

    $('#galleryRow').append(image)
  }
}

// call the module XMLHttpRequest
const http = new XMLHttpRequest()

// create a new request
let req = `https://pixabay.com/api/?key=${key}&q=${query}&lang=${lang}&orientation=${orientation}&image_type=${type}&category=${category}&order=${order}&per_page=${result}`

http.open('GET', req, true)

http.onload = function (e) {
  if (http.readyState === 4) {
    console.log('OK')
    insertImage(http.responseText)
  } else {
    console.log('Error')
  }
}

http.send()
