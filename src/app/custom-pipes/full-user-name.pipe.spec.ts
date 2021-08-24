import { FullUserNamePipe } from './full-user-name.pipe';

describe('FullUserNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FullUserNamePipe();
    expect(pipe).toBeTruthy();
  });
});
