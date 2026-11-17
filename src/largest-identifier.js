/**
 * Arranges numeric fragments to create the largest
 * possible concatenated identifier.
 *
 * @param {number[]} fragments
 * @returns {string}
 */
function createLargestIdentifier(fragments) {
    if (!Array.isArray(fragments)) {
        throw new TypeError('Expected an array of numbers.');
    }

    if (fragments.some(
        value => !Number.isSafeInteger(value) || value < 0
    )) {
        throw new TypeError(
            'All fragments must be non-negative safe integers.'
        );
    }

    // Convert numbers to strings before sorting.
    const orderedFragments = fragments.map(String);

    // Greedy comparison: choose the order producing
    // the larger concatenated result.
    orderedFragments.sort((first, second) => {
        const firstOrder = first + second;
        const secondOrder = second + first;

        if (firstOrder > secondOrder) return -1;
        if (firstOrder < secondOrder) return 1;

        return 0;
    });

    const identifier = orderedFragments.join('');

    // Handle identifiers consisting entirely of zeros.
    if (identifier === '' || identifier[0] === '0') {
        return identifier === '' ? '' : '0';
    }

    return identifier;
}

module.exports = { createLargestIdentifier };
