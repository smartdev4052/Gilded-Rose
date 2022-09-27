import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it('Aged Brie', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 0)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(1);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(2);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(4);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(6);
  });

  it('Sulfuras, Hand of Ragnaros', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });

  it('Sulfuras, Hand of Ragnaros', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, 80)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(80);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(80);
  });

  it('Backstage passes to a TAFKAL80ETC concert 1', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(21);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(13);
    expect(items[0].quality).toBe(22);
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(25);
    items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(27);
    for(let i = 0; i < 5; i++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(38);
  });

  it('Backstage passes to a TAFKAL80ETC concert 2', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(8);
    expect(items[0].quality).toBe(50);
    for(let i = 0; i < 9; i++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it('Conjured Mana Cake', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 3, 6)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(4);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(2);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it('Normal Goods', () => {
    const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 5, 7)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Elixir of the Mongoose');
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(6);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Elixir of the Mongoose');
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(5);
    for(let i = 0; i < 3; i++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].name).toBe('Elixir of the Mongoose');
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(2);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Elixir of the Mongoose');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
});
