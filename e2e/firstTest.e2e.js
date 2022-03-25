describe("Meus primeiros testes", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("Check register new skill", async () => {
    const inputNewSkill = await element(by.id("input-new"));
    const buttonAdd = await element(by.id("button-add"));
    const flatListSkills = await element(by.id("flat-list-skills"));

    await inputNewSkill.tap();
    await inputNewSkill.typeText("Yza");
    await buttonAdd.tap();

    //if (flatListSkills) await flatListSkills.tap();

    expect(element(by.id("flat-list-skills")).toBeVisible());
  });
});
