const getPath = require('./get-path');

describe('#get-path test', () => {
  document.body.innerHTML = `
<div class='container'>
    <ul>
        <li>
            <div class='li-element'>Test</div>
        </li>
        <li>
            <div class='li-element'>Test 1</div>
            <div class='li-element'>Test 12</div>
            <div class='li-element'>Test 323</div>
            <div class='li-element'>Test 555</div>
        </li>
        <li>
            <div class='li-element'>Test 2</div>
        </li>
    </ul>
    <div id='divId'>
        <div>
            <div>
              <div>
                <div>
                  <div>
                      <div></div>
                  </div>
                </div>
                <div></div>
              </div>
              <div></div>
            </div>
            <div></div>
        </div>
        <div></div>
    </div>
</div>
<div></div>`;

  it('get container', () => {
    const queryOne = document.querySelector('div.container');

    const path = getPath(queryOne);

    const queryAll = document.querySelectorAll(path);

    expect([...queryAll]).toEqual([queryOne]);
  });


  it('get ul', () => {
    const queryOne = document.querySelector('div.container ul');

    const path = getPath(queryOne);

    const queryAll = document.querySelectorAll(path);

    expect([...queryAll]).toEqual([queryOne]);
  });

  it('get first li', () => {
    const queryOne = document.querySelector('div.container ul li:first-child');

    const path = getPath(queryOne);

    const queryAll = document.querySelectorAll(path);

    expect([...queryAll]).toEqual([queryOne]);
  });

  it('get second li', () => {
    const queryOne = document.querySelector('div.container ul li:nth-child(2)');

    const path = getPath(queryOne);

    const queryAll = document.querySelectorAll(path);

    expect([...queryAll]).toEqual([queryOne]);
  });

  it('get div with id element path', () => {
    const queryOne = document.querySelector('#divId');

    const path = getPath(queryOne);

    const queryAll = document.querySelectorAll(path);

    expect([...queryAll]).toEqual([queryOne]);
  });

  it('get div inner div with id', () => {
    const queryOne = document.querySelector('#divId div');

    const path = getPath(queryOne);

    const queryAll = document.querySelectorAll(path);

    expect([...queryAll]).toEqual([queryOne]);
  });

  it('get very deep div', () => {
    const queryOne = document.querySelector('#divId div div div div div div');

    const path = getPath(queryOne);

    const queryAll = document.querySelectorAll(path);

    expect([...queryAll]).toEqual([queryOne]);
  });

  it('get last li-element', () => {
    const queryOne = document.querySelector('div.container ul li:nth-child(2) .li-element:last-child');

    const path = getPath(queryOne);

    const queryAll = document.querySelectorAll(path);

    expect([...queryAll]).toEqual([queryOne]);
  });

  it('get not exist element', () => {
    const queryOne = document.querySelector('.selector-which-not-exist');

    try {
      const path = getPath(queryOne)
      // Fail test if above expression doesn't throw anything.
      expect(!!path).toBe(false);
    } catch (e) {
      expect(e.message).toBe('Invalid argument. Argument of getPath function must be HTMLElement');
    }
  });

  it('test broken element', () => {
    const queryOne = document.querySelector('div.container');

    try {
      const path = getPath({ ...queryOne })
      // Fail test if above expression doesn't throw anything.
      expect(!!path).toBe(false);
    } catch (e) {
      expect(e.message).toBe('Invalid argument. Argument of getPath function must be HTMLElement');
    }
  });
});
