export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  degradeSellIn(item: Item): Item {
    if (item.name !== 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }
    return item;
  }

  degradeQuality(item: Item): Item {
    if (item.name === 'Sulfuras, Hand of Ragnaros') {
      return item;
    }
    if (item.name === 'Aged Brie') {
      item.quality = Math.min(50, item.quality + 1 + (item.sellIn >= 0 ? 0 : 1));
      return item;
    }
    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      item.quality = Math.min(50, item.quality + 1);
      if (item.sellIn < 0) {
        item.quality = 0;
      } else {
        item.quality = Math.min(50, item.quality + Math.max(0, Math.floor((14 - item.sellIn) / 5)));
      }
      return item;
    }
    if(item.name === 'Conjured Mana Cake') {
      item.quality = Math.max(0, item.quality - (item.sellIn < 0 ? 4 : 2));
      return item;
    }
    item.quality = Math.max(0, item.quality - (item.sellIn < 0 ? 2 : 1));
    return item;
  }

  updateQuality() {
    return this.items.map((item: Item): Item => {
      let newItem: Item = this.degradeSellIn(item);
      return this.degradeQuality(newItem);
    });
  }
}
