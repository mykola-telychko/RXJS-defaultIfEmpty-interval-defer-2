import { defaultIfEmpty, map } from 'rxjs/operators';
import { empty, of, interval, defer } from 'rxjs';

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create an observable that generates a random value within a range
// const randomValueInRange$ = defer(() => {
//   const randomNumber = getRandomInRange(0, 1); // Example range: 10 to 50
//   return of(randomNumber);
// });

const randomValueInterval$ = interval(1000).pipe(
  map(() => getRandomInRange(0, 1)) // Example range: 10 to 50
);

//emit 'Observable.empty()!' when empty, else any values from source
const src$ = of(23, 25, 27);
const empt = empty().pipe(defaultIfEmpty('Observable.empty()!'));
const srcInterval = interval(1000);

const arr$ = of([src$, empt]);

// .pipe(defaultIfEmpty('Observable.empty()!'))
//output: 'Observable.empty()!'
// const subscribe = example.subscribe((val) => console.log(val));
const subscribe = randomValueInterval$.subscribe((val) => {
  console.log(arr$[val]);
  // arr$
});
