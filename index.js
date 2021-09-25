// console.log("hello world")

oppressedWorkers = [
    "Dopey",
    "Sneezy",
    "Happy",
    "Angry",
    "Doc",
    "Lemonjello",
    "Sleepy"
  ];

oppressedWorkers.forEach(function(oppressedWorker) {
    console.log(`${oppressedWorker} wants to form a union!`)
})

// the flexibility may seem good but the fact that it's
// generic means that makes it the least expressive


// By now you should recognize map meands:
// 'create a new Array after transforming each element.'
// You should recognize that reduce means: 
// 'distill a single summarry value from a set of elements.'
// These methods are EXPRESSIVE; their presence in your code tells
// other programmers (and your future self) what you intend to happen.

// best time to use forEach() is when you need to enumerate a collection 
// to cause some sort of 'side-effect'. 