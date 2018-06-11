const city = {
  name: 'St.Petersburg',
  coordinates: {
    N: '59.9343°', E: '30.3351°'
  }
}

const { name, coordinates: { N }, coordinates } = city

name
N
coordinates

const langs = [
  { name: 'C++' },
  { name: 'PHP' },
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'C#' },
  { name: 'Ruby' }
]

const {2: JS} = langs

JS