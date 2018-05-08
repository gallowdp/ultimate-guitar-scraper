const ugs = require('../lib/index')

ugs.search({
  query: 'Wish You Were Here',
  page: 1,
  type: ['Tab', 'Chords', 'Guitar Pro'],
  minRating: 4
}, (error, tabs, response, body) => {
  if (error) {
    console.log(error)
  } else {
    console.log(tabs)
  }
})
