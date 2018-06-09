console.log('Array.reduce')

var data = [1,1,3]

var reducer = (accum, item) => {
  return accum + item
}

var initValue = 0

var total = data.reduce(reducer, initValue)

console.log(total)


var votes = [
  'angular',
  'angular',
  'react',
  'react',
  'react',
  'angular',
  'ember',
  'react',
  'vanilla'
]

var initValue = {}

var reducer = (tally, vote) => {
  if (!tally[vote]) {
    tally[vote] = 1
  } else {
    ++tally[vote]
  }

  return tally
}

console.log(votes.reduce(reducer, initValue))


var data = [1, 2, 3]
var doubled = data.reduce((acc, value) => {
  acc.push('!' + value * 2)
  return acc
}, [])

var doubleMapped = data.map(item => '!' + item * 2)

console.log(doubled);
console.log(doubleMapped);

var data = [1,2,3,4,5,6,8]

var evens = data.reduce((acc, number) => {
  if (number % 2 === 0) acc.push(number)
  return acc
}, [])

var evensFiltered = data.filter(item => item % 2 === 0)

console.log(evens);
console.log(evensFiltered);

var data = [[1,2,3], [4,5,6], [7,8,9]]

var flattenedData = data.reduce((acc,value) => {
  return acc.concat(value)
}, [])

console.log(flattenedData);

var input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
]

var stars = input.reduce((acc, value) => {
  value.cast.forEach((star) => {
    if (acc.indexOf(star) === -1) {
      acc.push(star)
    }
  })
  return acc
}, [])

console.log(stars)

var data = [1,2,3,4,'5']

var sum = data.reduceRight((acc, value, index) => {
  console.log(index)
  
  return acc + value
}, 0)

console.log(sum)


var increment = input => input + 1
var decrement = input => input - 1
var double = input => input * 2
var halve = input => input / 2

var initial_value = 1

var pipeline = [
  increment,
  increment,
  double,
  increment,
  increment,
  decrement,
  halve
]

var final_value = pipeline.reduce((acc, fn) => {
  return fn(acc)
}, initial_value)

console.log(final_value);

var luke = {
  name: "luke skywalker",
  jedi: true,
  parents: {
    father: {
      jedi: true
    },
    mother: {
      jedi: false
    }
  }
}

var han = {
  name: "han solo",
  jedi: false,
  parents: {
    father: {
      jedi: false
    },
    mother: {
      jedi: false
    }
  }
}

var anakin = {
  name: "anakin skywalker",
  jedi: true,
  parents: {
    mother: {
      jedi: false
    }
  }
}

var characters = [luke, han, anakin]

// characters.forEach(char => {
//   console.log(char.name + "'s father was a jedi: " + char.parents.father.jedi)
// })

var fatherWasJedi = character => {
  var path = "parents.father.jedi"
  return path.split('.').reduce((obj, field) => {
    if (obj) {
      return obj[field]
    }
    return false
  }, character)
}

var jediFathers = characters.reduce((acc, val) => {
  acc[val.name] = fatherWasJedi(val)
  return acc
},{})

console.log(jediFathers);


