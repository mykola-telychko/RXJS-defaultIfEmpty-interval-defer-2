import { defaultIfEmpty, map } from 'rxjs/operators';
import { empty, of, interval, defer } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/conditional/defaultifempty

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create an observable that generates a random value within a range
// const randomValueInRange$ = defer(() => {
//   const randomNumber = getRandomInRange(0, 1);
//   return of(randomNumber);
// });

const randomValueInterval$ = interval(1000).pipe(
  map(() => getRandomInRange(0, 1))
);

//emit 'Observable.empty()!' when empty, else any values from source
const src$ = of(23, 25, 27);
const empt$ = empty().pipe(defaultIfEmpty('Observable.empty()!'));
const arr$ = [src$, empt$];
// const srcInterval = interval(1000);

// const subscribe = example.subscribe((val) => console.log(val));
const subscribe = randomValueInterval$.subscribe((val) => {
  arr$[val]?.subscribe((val) => console.log(val));
});
