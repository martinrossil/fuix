import { assert } from 'chai';
import { setViewport } from '@web/test-runner-commands';
import TestComponent from './TestComponent';

it('when test() is called with "Hello, the return value should be "Hello World"', () => {
    const testComponent: TestComponent = new TestComponent();
    document.body.appendChild(testComponent);
    assert.strictEqual(testComponent.test('Hello'), 'Hello World')
    testComponent.remove();
});

it('when testComponent.twenty = 20, testComponent.twenty should be 20', () => {
    const testComponent: TestComponent = new TestComponent();
    document.body.appendChild(testComponent);
    testComponent.twenty = 20;
    assert.strictEqual(testComponent.twenty, 20);
    testComponent.remove();
});

it('given testComponent.nums === "one", when testComponent.nums = "two", testComponent.nums should be "two"', () => {
    const testComponent: TestComponent = new TestComponent();
    document.body.appendChild(testComponent);
    testComponent.nums = 'two';
    assert.strictEqual(testComponent.nums, 'two');
    testComponent.remove();
});

it('given testComponent.nums === "one", when testComponent.nums = "one", testComponent.nums should be "one"', () => {
    const testComponent: TestComponent = new TestComponent();
    document.body.appendChild(testComponent);
    testComponent.nums = 'one';
    assert.strictEqual(testComponent.nums, 'one');
    testComponent.remove();
});

it('viewport testing 1024', async () => {
    const testComponent: TestComponent = new TestComponent();
    document.body.style.margin = '0';
    document.body.appendChild(testComponent);
    await new Promise(resolve => setTimeout(resolve, 900));
    await setViewport({ width: 1024, height: 768 });
    const rect = testComponent.getBoundingClientRect();
    await new Promise(resolve => setTimeout(resolve, 900));
    assert.strictEqual(rect.width, 1024);
    testComponent.remove();
});
