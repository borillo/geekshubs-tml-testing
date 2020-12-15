const { range } = require("jest-extended-snapshot");

const { Item, Shop } = require("./gilded-rose");

describe("Gilded Rose", () => {
  it("should update quality", () => {
    expect(doUpdateQuality).toVerifyAllCombinations(
      [
        "foo",
        "Aged Brie",
        "Backstage passes to a TAFKAL80ETC concert",
        "Sulfuras, Hand of Ragnaros",
      ],
      range(-1, 11), // [-1, 0, 2, 6, 10, 11],
      range(0, 50) // [0, 1, 49, 50]
    );
  });

  function doUpdateQuality(name, sellIn, quality) {
    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();
    return items[0];
  }
});
