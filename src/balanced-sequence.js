/**
 * Determines whether values can be arranged so that
 * every adjacent pair has the same sum.
 *
 * @param {number[]} values
 * @returns {boolean}
 */
function canCreateBalancedSequence(values) {
    if (!Array.isArray(values) || values.length < 2) {
        return false;
    }

    const frequencies = new Map();

    // Count the frequency of each distinct value.
    for (const value of values) {
        frequencies.set(
            value,
            (frequencies.get(value) || 0) + 1
        );
    }

    const distinctValues = [...frequencies.values()];

    // A single distinct value always creates a valid sequence.
    if (distinctValues.length === 1) {
        return true;
    }

    // More than two distinct values cannot satisfy the condition.
    if (distinctValues.length > 2) {
        return false;
    }

    // Two frequencies must differ by at most one.
    return Math.abs(
        distinctValues[0] - distinctValues[1]
    ) <= 1;
}

module.exports = { canCreateBalancedSequence };
