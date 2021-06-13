describe('Main module test',  () => {

  document.body.innerHTML =
    `<div id="app"></div>`;

  it(`import module via require`, async () => {

    await require('../../src/main.js');
    const startButton = document.getElementById('btnStart')
    expect(startButton).toBeTruthy()
  })

})
