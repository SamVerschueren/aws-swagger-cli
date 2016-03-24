import test from 'ava';
import execa from 'execa';

test('error', t => {
	t.throws(execa('./cli.js'), /invalid number of arguments provided/);
});

test('invalid action', t => {
	t.throws(execa('./cli.js', ['export', 'swagger.json']), /invalid action 'export'/);
});
