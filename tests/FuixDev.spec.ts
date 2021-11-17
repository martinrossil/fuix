import { assert } from 'chai';
import { describe, it, afterEach } from 'mocha';
import FuixDev from '../src/FuixDev';

describe('Cover FuixDev', () => {
    describe('default values', () => {
        afterEach(() => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            document.body.style.fontFamily = '';
        });
        it('bodyBackgroundColor should be "#000d1a" (rgb(0, 13, 26))', () => {
            const fuixDev: FuixDev = new FuixDev();
            assert.strictEqual(fuixDev.bodyBackgroundColor, 'rgb(0, 13, 26)');
        });
        it('bodyColor should be "#a3b8cc" (rgb(163, 184, 204))', () => {
            const fuixDev: FuixDev = new FuixDev();
            assert.strictEqual(fuixDev.bodyColor, 'rgb(163, 184, 204)');
        });
        it('bodyFontFamily should be "Eurostile"', () => {
            const fuixDev: FuixDev = new FuixDev();
            assert.strictEqual(fuixDev.bodyFontFamily, 'Eurostile');
        });
    });
});
