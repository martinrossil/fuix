import { assert } from 'chai';
import ILinkContainer from './ILinkContainer';
import LinkContainer from './LinkContainer';

describe('ILinkContainer', () => {
    describe('default values', () => {
        it('href should be ""', () => {
            const linkContainer: ILinkContainer = new LinkContainer();
            assert.strictEqual(linkContainer.href, '');
        });
    });
});
