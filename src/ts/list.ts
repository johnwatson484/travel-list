interface ListItem {
  id: number,
  name: string,
  workOnly: boolean,
  completed: boolean,
}

interface List {
  items: ListItem[],
}

function getList (): List {
  return {
    items: [
      { id: 1, name: 'Laptop', workOnly: true, completed: false },
      { id: 2, name: 'Charger', workOnly: true, completed: false },
      { id: 3, name: 'Hot water bottle', workOnly: false, completed: false },
      { id: 4, name: 'Shower toiletries x 5', workOnly: false, completed: false },
      { id: 5, name: 'Tea bags', workOnly: false, completed: false },
      { id: 6, name: 'Mug/bottle', workOnly: false, completed: false },
      { id: 7, name: 'Clothes/underwear', workOnly: false, completed: false },
      { id: 8, name: 'Straighteners/charger', workOnly: false, completed: false },
      { id: 9, name: 'Perfume', workOnly: false, completed: false },
      { id: 10, name: 'Deodorant x 2', workOnly: false, completed: false },
      { id: 11, name: 'Hair spray', workOnly: false, completed: false },
      { id: 12, name: 'Face cream', workOnly: false, completed: false },
      { id: 13, name: 'Face wipes', workOnly: false, completed: false },
      { id: 14, name: 'Wipes', workOnly: false, completed: false },
      { id: 15, name: 'Mascara', workOnly: false, completed: false },
      { id: 16, name: 'Tweezers', workOnly: false, completed: false },
      { id: 17, name: 'Tablets (acid/pain/stomach)', workOnly: false, completed: false },
      { id: 18, name: 'Hairbrush', workOnly: false, completed: false },
      { id: 19, name: 'Sleeping top', workOnly: false, completed: false },
      { id: 20, name: 'Toothbrush', workOnly: false, completed: false },
      { id: 21, name: 'Toothpaste', workOnly: false, completed: false },
      { id: 22, name: 'Sudocrem', workOnly: false, completed: false },
      { id: 23, name: 'Carrier bag', workOnly: false, completed: false },
      { id: 24, name: 'Cotton buds', workOnly: false, completed: false },
      { id: 25, name: 'Ear plugs', workOnly: false, completed: false },
      { id: 26, name: 'Work phone', workOnly: true, completed: false },
      { id: 27, name: 'Pass', workOnly: true, completed: false },
      { id: 28, name: 'Headphones x 2', workOnly: true, completed: false },
      { id: 29, name: 'Glasses', workOnly: false, completed: false },
      { id: 30, name: 'Purse', workOnly: false, completed: false },
      { id: 31, name: 'Phone', workOnly: false, completed: false },
      { id: 32, name: 'Phone charger x 2', workOnly: false, completed: false },
    ],
  }
}

export { List, ListItem, getList }
