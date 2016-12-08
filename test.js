import test from 'ava';
import fn from '.';

test('should handle case 1', t => {
	t.is(fn(1), 'ok');
});

test('should handle case 4', t => {
	t.is(fn(4), 'also ok');
});

test('should handle default case', t => {
	t.is(fn(100), 'why not');
});

// Oops, it seems I forgot to test cases 2 and 3.
// But case 2 already seems handled somehow in the coverage report, odd...
