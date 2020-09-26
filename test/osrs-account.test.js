const { TestScheduler } = require('jest');
const { isExportDeclaration } = require('typescript');
const { add } = require('../lib/index');

// TODO write a real test

test('should output name and age', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});