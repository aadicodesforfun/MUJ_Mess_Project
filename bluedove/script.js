import { getAllMenus } from '../database.js'
const menus = await getAllMenus()

const meals = ['breakfast', 'lunch']

//sort menus from new to old
const sortedDates = Object.keys(menus).sort().reverse() // ascending

//get last few days Meny        no of days
const recentmenus = sortedDates.slice(-5)//.map(date => menus[date])
recentmenus.forEach((date) => {
  document.body.append(date)
  meals.forEach(meal => {
    let html = ''
    html += meal

    const dayContainer = document.createElement('div');
    dayContainer.classList.add('day-container');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container')

    const voteContainer = document.createElement('div');
    voteContainer.classList.add('votes-container')



    
    const mealItems = menus[date].bluedove[meal]
    if (!mealItems) return;
    mealItems.forEach(item => {
      console.log(item)
      html += `<p>${item}</p>`
    });
    menuContainer.innerHTML = html;
    dayContainer.appendChild(menuContainer)
    dayContainer.appendChild(voteContainer)
    document.body.appendChild(dayContainer)
  })


});