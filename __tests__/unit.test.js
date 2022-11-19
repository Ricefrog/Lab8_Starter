// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('310-555-7777 should be a phone number.', () => {
    expect(functions.isPhoneNumber('310-555-7777')).toBe(true);
});

test('(310)555-7777 should be a phone number.', () => {
    expect(functions.isPhoneNumber('(310)555-7777')).toBe(true);
});

test('310-555-777 should not be a phone number.', () => {
    expect(functions.isPhoneNumber('310-555-777')).toBe(false);
});

test('7 should not be a phone number.', () => {
    expect(functions.isPhoneNumber('7')).toBe(false);
});

test('greg@bean.com should be an email.', () => {
    expect(functions.isEmail('greg@bean.com')).toBe(true);
});

test('g1337@g.mail should be an email.', () => {
    expect(functions.isEmail('g1337@g.mal')).toBe(true);
});

test('@loooooooooong.b should not be an email.', () => {
    expect(functions.isEmail('@loooooooooong.b')).toBe(false);
});

test('greg@google.123 should not be an email.', () => {
    expect(functions.isEmail('greg@google.123')).toBe(false);
});

test('demonslayer32 should be a strong password.', () => {
    expect(functions.isStrongPassword('demonslayer32')).toBe(true);
});

test('aaaa should be a strong password.', () => {
    expect(functions.isStrongPassword('aaaa')).toBe(true);
});

test('32demonslayers should not be a strong password.', () => {
    expect(functions.isStrongPassword('32demonslayers')).toBe(false);
});


test('13 should not be a strong password.', () => {
    expect(functions.isStrongPassword('13')).toBe(false);
});

test('12/11/1999 should be a date.', () => {
    expect(functions.isDate('12/11/1999')).toBe(true);
});

test('42/3/0000 should be a date.', () => {
    expect(functions.isDate('42/3/0000')).toBe(true);
});

test('12-11-1999 should not be a date.', () => {
    expect(functions.isDate('12-11-1999')).toBe(false);
});

test('12/11/99 should not be a date.', () => {
    expect(functions.isDate('12/11/99')).toBe(false);
});

test('#ffffff should be a hex color.', () => {
    expect(functions.isHexColor('#ffffff')).toBe(true);
});

test('fff should be a hex color.', () => {
    expect(functions.isHexColor('fff')).toBe(true);
});

test('fffffh should not be a hex color.', () => {
    expect(functions.isHexColor('fffffh')).toBe(false);
});

test('#9999z should not be a hex color.', () => {
    expect(functions.isHexColor('#9999z')).toBe(false);
});