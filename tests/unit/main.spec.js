describe('Main module test',  () => {

  it(`verifies main.js imports successfully`, () => {
    // Import main.js to ensure no runtime errors
    expect(() => import("../../src/main.js")).not.toThrow();
  });

  it(`exports a default function`, async () => {
    // Check that main.js can be imported without errors
    const mainModule = await import("../../src/main.js");
    expect(mainModule).toBeDefined();
  });
});
