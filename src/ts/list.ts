interface Item {
  name: string,
  workOnly: boolean,
}

interface ListItem extends Item {
  id: number,
  completed: boolean,
}

interface List {
  items: ListItem[],
}

const items: Item[] = [
  { name: 'Laptop', workOnly: true },
  { name: 'Charger', workOnly: true },
  { name: 'Hot water bottle', workOnly: false },
  { name: 'Shower toiletries x 5', workOnly: false },
  { name: 'Tea bags', workOnly: false },
  { name: 'Mug/bottle', workOnly: false },
  { name: 'Clothes/underwear', workOnly: false },
  { name: 'Straighteners/charger', workOnly: false },
  { name: 'Perfume', workOnly: false },
  { name: 'Deodorant x 2', workOnly: false },
  { name: 'Hair spray', workOnly: false },
  { name: 'Face cream', workOnly: false },
  { name: 'Face wipes', workOnly: false },
  { name: 'Wipes', workOnly: false },
  { name: 'Mascara', workOnly: false },
  { name: 'Tweezers', workOnly: false },
  { name: 'Tablets (acid/pain/stomach)', workOnly: false },
  { name: 'Hairbrush', workOnly: false },
  { name: 'Sleeping top', workOnly: false },
  { name: 'Toothbrush', workOnly: false },
  { name: 'Toothpaste', workOnly: false },
  { name: 'Sudocrem', workOnly: false },
  { name: 'Carrier bag', workOnly: false },
  { name: 'Cotton buds', workOnly: false },
  { name: 'Ear plugs', workOnly: false },
  { name: 'Work phone', workOnly: true },
  { name: 'Pass', workOnly: true },
  { name: 'Headphones x 2', workOnly: true },
  { name: 'Glasses', workOnly: false },
  { name: 'Purse', workOnly: false },
  { name: 'Phone', workOnly: false },
  { name: 'Phone charger x 2', workOnly: false },
  { name: 'Eye cream', workOnly: false },
  { name: 'Talcum powder', workOnly: false },
  { name: 'Slippers', workOnly: false },
]

function getList (): List {
  return {
    items: items.map((item, index) => {
      return {
        id: index,
        name: item.name,
        workOnly: item.workOnly,
        completed: false,
      }
    }),
  }
}

export { List, getList }
