import Validator from '../app';

test('standard username', () => {
  const username = 'john';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('uppercase', () => {
  const username = 'DAVID';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('camelcase', () => {
  const username = 'PartyMaker';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('snake case', () => {
  const username = 'LoLoLoLo';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('first capital letter', () => {
  const username = 'Boo';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('last capital letter', () => {
  const username = 'tratatA';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('with numbers', () => {
  const username = 'Garry1James2Potter';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('with dash', () => {
  const username = 'Hermione-Granger';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('with underscore', () => {
  const username = 'Ivan_Ivanych';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('numbers starting', () => {
  const username = '12Peter';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('numbers ending', () => {
  const username = 'Noname66';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('four numbers in a row', () => {
  const username = 'Agent0007Jnr';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('dash starting', () => {
  const username = '-Pie';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('dash ending', () => {
  const username = 'whoiswho-';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('underscore starting', () => {
  const username = '_Dambledore';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('underscore ending', () => {
  const username = 'YOda_';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('cyrillic', () => {
  const username = 'я_петя';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('other symbols', () => {
  const username = 'Whynot?';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('other symbols', () => {
  const username = 'A&vot&tak';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});
