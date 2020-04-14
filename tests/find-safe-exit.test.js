const test = require('tape');
const findSafeExit = require('../src/find-safe-exit');

test('Office without desks is not a valid scenario', t => {
    t.plan(1);
    t.throws(() => {
        const office = [];
        findSafeExit(office);
    }, 'Office without desks');
});

test('Already at safe exit when only 1 desk', t => {
    t.plan(1);
    const row1 = [0];
    const office = [row1];
    const safeExitFound = findSafeExit(office);
    t.true(safeExitFound);
});

test('Safe exit reached when only 1 column of empty desks', t => {
    t.plan(1);
    const row1 = [0];
    const row2 = [0];
    const row3 = [0];
    const office = [row1, row2, row3];
    const safeExitFound = findSafeExit(office);
    t.true(safeExitFound);
});

test('Safe exit blocked when only 1 column of empty desks', t => {
    t.plan(1);
    const row1 = [1]; // blocked
    const row2 = [0];
    const row3 = [0];
    const office = [row1, row2, row3];
    const safeExitFound = findSafeExit(office);
    t.false(safeExitFound);
});

test('Safe exit found using right adjacent column', t => {
    t.plan(1);
    const row1 = [1, 0];
    const row2 = [1, 0];
    const row3 = [0, 0];
    const office = [row1, row2, row3];
    const safeExitFound = findSafeExit(office);
    t.true(safeExitFound);
});

test('Safe exit found using left adjacent column', t => {
    t.plan(1);
    const row1 = [0, 1];
    const row2 = [0, 1];
    const row3 = [0, 0];
    const office = [row1, row2, row3];
    const startCol = 2;
    const safeExitFound = findSafeExit(office, startCol);
    t.true(safeExitFound);
});

test('Safe exit found requiring moving both left and right', t => {
    t.plan(1);
    const row1 = [0, 1, 1];
    const row2 = [0, 0, 0];
    const row3 = [1, 1, 0];
    const row4 = [0, 0, 0];
    const office = [row1, row2, row3, row4];
    const safeExitFound = findSafeExit(office);
    t.true(safeExitFound);
});
