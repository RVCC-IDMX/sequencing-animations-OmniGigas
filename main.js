const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

/* const animation1 = alice1.animate(aliceTumbling, aliceTiming);
const animation2 = alice2.animate(aliceTumbling, aliceTiming);
const animation3 = alice3.animate(aliceTumbling, aliceTiming);
console.log(animation1); */

// alice1.animate(aliceTumbling, aliceTiming).onfinish = function() {
//   alice2.animate(aliceTumbling, aliceTiming).onfinish = function() {
//     alice3.animate(aliceTumbling, aliceTiming);
//   }
// }

// alice1.animate(aliceTumbling, aliceTiming).finished.then(function() {
//   return alice2.animate(aliceTumbling, aliceTiming).finished;
// }).then(function() {
//   return alice3.animate(aliceTumbling, aliceTiming).finished;
// })

async function alice() {
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  await alice3.animate(aliceTumbling, aliceTiming).finished;
}

alice();