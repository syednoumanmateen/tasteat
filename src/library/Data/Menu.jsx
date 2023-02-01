import bg1 from '../../Images/menu/bg1.jpg'
import bg2 from '../../Images/menu/bg2.jpg'
import start from '../../Images/menu/start.jpg'
import start1 from '../../Images/menu/start1.jpg'
import start2 from '../../Images/menu/start2.jpg'
import start3 from '../../Images/menu/start3.jpg'
import start4 from '../../Images/menu/start4.jpg'
import main from '../../Images/menu/main.jpg'
import main1 from '../../Images/menu/main1.jpg'
import main2 from '../../Images/menu/main2.jpg'
import main3 from '../../Images/menu/main3.jpg'
import main4 from '../../Images/menu/main4.jpg'
import desert from '../../Images/menu/desert.jpg'
import desert1 from '../../Images/menu/desert1.jpg'
import desert2 from '../../Images/menu/desert2.jpg'
import desert3 from '../../Images/menu/desert3.jpg'
import desert4 from '../../Images/menu/desert4.jpg'

let menuList = [
  {
    'icon': start,
    'bgIcon': bg1,
    "label": 'Starters',
    "subMenu": [
      {
        "icon": start1,
        "label": "Raw Scallops from Erquy",
        "description": "Shuck the scallop to that used for oysters",
        "value": 40,
        "anime": 'animate__animated animate__fadeInRight animate__delay_1s animate_duration_1s'
      },
      {
        "icon": start2,
        "label": "Spring Roll",
        "description": "Add oil to a hot pan spring onion whites",
        "value": 20,
        "anime": 'animate__animated animate__fadeInRight animate__delay_1.1s animate_duration_1.1s'
      },
      {
        "icon": start3,
        "label": "Fresh Onion Soup",
        "description": "Wheat flour, apple cider vinegar, bread",
        "value": 25,
        "anime": 'animate__animated animate__fadeInRight animate__delay_1.2s animate_duration_1.2s'
      },
      {
        "icon": start4,
        "label": "Tomato Bruschetta",
        "description": "Bread, olive oil, garlic, black pepper",
        "value": 30,
        "anime": 'animate__animated animate__fadeInRight animate__delay_1.3s animate_duration_1.3s'
      }
    ]
  },
  {
    'icon': main,
    'bgIcon': bg2,
    "label": 'Main Dish',
    "subMenu": [
      {
        "icon": main1,
        "label": "Grilled Salmon with Dill Sauce",
        "description": "Brown sugar, salmon fillet, Dijon mustard",
        "value": 40,
        "anime": 'animate__animated animate__fadeInRight animate__delay_1.4s animate_duration_1.4s'
      },
      {
        "icon": main2,
        "label": "Roast Beef with Vegetable",
        "description": "Green beans, rib eye, olive oil, beef",
        "value": 20,
        "anime": 'animate__animated animate__fadeInRight animate__delay_1.5s animate_duration_1.5s'
      },
      {
        "icon": main3,
        "label": "Marrakesh Vegetarian Curry",
        "description": "Sweet potato, eggplant, garbanzo bean",
        "value": 25,
        "anime": 'animate__animated animate__fadeInRight animate__delay_1.6s animate_duration_1.6s'
      },
      {
        "icon": main4,
        "label": "Spicy Vegan Potato Curry",
        "description": "Coconut milk, beans, potatoes, curry powder",
        "value": 35,
        "anime": 'animate__animated animate__fadeInRight animate__delay_1.7s animate_duration_1.7s'
      }
    ]
  },
  {
    'icon': desert,
    "label": 'Dessert',
    "subMenu": [
      {
        "icon": desert1,
        "label": "Apple Pie with Cream",
        "description": "Whipping cream, egg white, cinnamon",
        "value": 15,
        "anime": 'animate__animated animate__fadeInRight animate__delay_1.8s animate_duration_1.8s'
      },
      {
        "icon": desert2,
        "label": "Lemon Meringue Pie",
        "description": "Frozen pie crust, meringue, lemon",
        "value": 30,
        "anime": 'animate__animated animate__fadeInRight animate__delay_1.9s animate_duration_1.9s'
      },
      {
        "icon": desert3,
        "label": "Tender Octopus and Fennel",
        "description": "Lemon, dill, olive oil, fennel seeds",
        "value": 50,
        "anime": 'animate__animated animate__fadeInRight animate__delay_2s animate_duration_2s'
      },
      {
        "icon": desert4,
        "label": "Sea Bass Ceviche",
        "description": "Sea bass fillet, green mango, garlic",
        "value": 30,
        "anime": 'animate__animated animate__fadeInRight animate__delay_2s animate_duration_2s'
      }
    ]
  }
]

export default menuList