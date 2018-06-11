// add(2)(5) => 7

const add = (x, y) => {

  if (typeof(y) === 'number') return x + y

  return y => x + y
} 

console.log( add(2)(5) )
console.log( add(2,5) )

//*

const A = (...args) => {

  const curriedAdd = (...args2) => A(...args, ...args2)

  curriedAdd.value = args.reduce((total, current) => total + current, 0)
  
  return curriedAdd
}

console.log( A(2)(3)(1)(5).value );

/**/

console.log('42');
