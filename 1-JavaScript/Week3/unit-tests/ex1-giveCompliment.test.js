/* eslint-disable hyf/camelcase */
'use strict';
const walk = require('acorn-walk');
const {
  beforeAllHelper,
  findAncestor,
} = require('../../../test-runner/unit-test-helpers');

describe('giveCompliment', () => {
  const state = {};
  let exported, rootNode, giveCompliment;

  beforeAll(() => {
    ({ exported, rootNode } = beforeAllHelper(__filename, {
      parse: true,
    }));
    giveCompliment = exported;

    rootNode &&
      walk.ancestor(rootNode, {
        VariableDeclarator({ id, init }, ancestors) {
          if (id?.name === 'compliments' && init?.type === 'ArrayExpression') {
            state.compliments = init.elements.map((elem) => elem.value);
            const ancestor = findAncestor('FunctionDeclaration', ancestors);
            if (ancestor && ancestor.id.name === 'giveCompliment') {
              state.inScope = true;
            }
          }
        },
      });
  });

  it('should exist and be executable', () => {
    expect(exported).toBeDefined();
  });

  it('should take a single parameter', () => {
    if (!exported) return;
    expect(giveCompliment).toHaveLength(1);
  });

  it('should include a `compliments` array initialized with 10 strings', () => {
    if (!exported) return;
    expect(state.compliments ? '' : 'No such array found').toBe('');
    expect(
      state.compliments.length === 10 ? '' : 'Array is not of length 10'
    ).toBe('');
    const isAllStrings = state.compliments.every(
      (compliment) => typeof compliment === 'string'
    );
    expect(isAllStrings ? '' : 'Not all elements are strings').toBe('');
  });

  it('should give a random compliment: You are `compliment`, `name`!', () => {
    if (!exported) return;
    expect(state.compliments).toBeDefined();

    const name = 'HackYourFuture';

    const spy = jest.spyOn(Math, 'random').mockReturnValue(0);
    const received = giveCompliment(name);

    expect(spy.mock.calls.length > 0 ? '' : 'compliment is not random').toBe(
      ''
    );
    spy.mockRestore();

    const [compliment] = state.compliments;
    expect(received).toBe(`You are ${compliment}, ${name}!`);
  });
});
