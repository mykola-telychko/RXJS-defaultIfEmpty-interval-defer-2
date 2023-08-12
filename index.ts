import { defaultIfEmpty } from 'rxjs/operators';
import { empty, of, inteval, defer } from 'rxjs';

//emit 'Observable.empty()!' when empty, else any values from source
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create an observable that generates a random value within a range
const randomValueInRange$ = defer(() => {
  const randomNumber = getRandomInRange(10, 50); // Example range: 10 to 50
  return of(randomNumber);
});

const src$ = of(23, 25, 27);

const example = empty().pipe(defaultIfEmpty('Observable.empty()!'));

const srcInterval = inteval(1000);



// .pipe(defaultIfEmpty('Observable.empty()!'))
//output: 'Observable.empty()!'
const subscribe = example.subscribe((val) => console.log(val));
