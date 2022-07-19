import { assert } from 'chai';
import ILinkContainer from '../../src/components/ILinkContainer';
import LinkContainer from '../../src/components/LinkContainer';

describe('ILinkContainer', () => {
    describe('default values', () => {
        it('href should be ""', () => {
            const linkContainer: ILinkContainer = new LinkContainer();
            assert.strictEqual(linkContainer.href, '');
        });
    });
});
