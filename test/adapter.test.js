// eslint-disable-next-line spaced-comment
/// <reference path="../src/index.d.ts" />

describe('suite', () => {
  it.todo('works');

  describe('nested', () => {
    it('should work', () => {
      console.debug('heylooo');

      console.log('heylooo');

      console.warn('heylooo');

      console.error('heylooo');
      expect(true).toEqual(true);
    });
  });

  it('should work 1', () => {
    const spy = karmaJest.fn();

    spy();
    karmaJest.useFakeTimers();

    let finished = false;
    setTimeout(() => {
      finished = true;
    }, 300);

    expect(true).toEqual(true);

    karmaJest.runAllTimers();

    expect(finished).toEqual(true);

    karmaJest.useRealTimers();
  });

  describe('nested 2', () => {
    it('should work 2', () => {
      // expect(true).toEqual(false);
      expect(`
      asfasffffffffffff
      `).toMatchSnapshot();
    });

    it('should work 3', () => {
      expect(true).toEqual(true);
    });
  });
});

describe('suite 3', () => {
  it('works', (done) => {
    setTimeout(() => {
      done();
    }, 1000);
  });
});

describe('different', () => {
  it('works', (done) => {
    console.log('heylooo');
    setTimeout(() => {
      done();
    }, 4000);
  });
});
