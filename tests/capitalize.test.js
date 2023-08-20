import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.js';


assert(capitalize('heello') === 'Hello');
assert(capitalize('') === '');

console.log('Все тесты пройдены!')
