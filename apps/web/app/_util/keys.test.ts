import { keys } from './keys';

describe('keys', () => {
  it('객체를 매개변수로 입력하면 키를 반환해야 한다', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = keys(obj);
    expect(result).toEqual(['a', 'b', 'c']);
  });

  it('객체의 키 타입에 맞는 Union 타입 배열을 반환해야 한다', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = keys(obj);
    expectTypeOf(result).toEqualTypeOf<Array<'a' | 'b' | 'c'>>();
  });

  it('빈 객체에 대해 빈 배열을 반환해야 한다', () => {
    const obj = {};
    const result = keys(obj);
    expect(result).toEqual([]);
  });

  it('중첩된 객체의 최상위 키만 반환해야 한다', () => {
    const obj = { a: 1, b: { c: 2, d: 3 }, e: 4 };
    const result = keys(obj);
    expect(result).toEqual(['a', 'b', 'e']);
    expectTypeOf(result).toEqualTypeOf<Array<'a' | 'b' | 'e'>>();
  });
});
