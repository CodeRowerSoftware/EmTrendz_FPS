import EmTrendz_FPS from "../src/EmTrendz_FPS"

/**
 * Dummy test
 */
describe("Dummy test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("EmTrendz_FPS is instantiable", () => {
    expect(new EmTrendz_FPS()).toBeInstanceOf(EmTrendz_FPS)
  })
})
