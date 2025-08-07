
import { getAllMenus } from '../database.js'
const menus = await getAllMenus()

const meals = ['breakfast', 'lunch', 'snacks', 'dinner']

function formatDate(dateString) {
  const dateObj = new Date(dateString);

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];

  const weekday = weekdays[dateObj.getDay()];
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];

  return `${weekday}, ${getOrdinal(day)} ${month}`;
}

function getOrdinal(n) {
  if (n > 3 && n < 21) return n + 'th';
  switch (n % 10) {
    case 1: return n + "st";
    case 2: return n + "nd";
    case 3: return n + "rd";
    default: return n + "th";
  }
}



//sort menus from new to old
const sortedDates = Object.keys(menus).sort().reverse() // ascending

//get last few days Meny        no of days
const recentmenus = sortedDates.slice(-5)//.map(date => menus[date])
recentmenus.forEach((date) => {
  //date
  const dateContainer = document.createElement('div');
  dateContainer.classList.add('date-container')
  const formattedDate = formatDate(date);
  dateContainer.innerHTML = `<h3>${formattedDate}</h3>`

  document.body.appendChild(dateContainer)
  meals.forEach(meal => {
    const headingContainer = document.createElement('div');

    let html = ''
    html += `<h4>${meal.toUpperCase()}</h4>`
    headingContainer.innerHTML = html
    html = ''

    const dayContainer = document.createElement('div');
    dayContainer.classList.add('day-container');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container')

    const voteContainer = document.createElement('div');
    voteContainer.classList.add('votes-container')

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container')

    
    const mealItems = menus[date].bluespring[meal]
    if (!mealItems) return;
    mealItems.forEach((item, index) => {
      html += `<p><span style='font-weight: bold; color: rgb(0, 43, 34);'>${index+1} </span>${item}</p>`
    });
    itemContainer.innerHTML = html;
    menuContainer.appendChild(headingContainer)
    menuContainer.appendChild(itemContainer)
    dayContainer.appendChild(menuContainer)
    dayContainer.appendChild(voteContainer)
    document.body.appendChild(dayContainer)
  })


});