# Punk API - Tabs Wireframe

![Beer API Screenshot](https://user-images.githubusercontent.com/113485644/220426526-07264f1c-36cb-48a9-be2e-7ca7dfdcee1b.jpg)

## About the project

#### A React JS app about beers. [Check out the Live Demo Here] (add the github pages here)

*The app was created by* **fetching** *Brewdog's Punk API and storing the object returned in a State.*
```
  let beersApi = 'https://api.punkapi.com/v2/beers?page=2&per_page=80'
  const [data, setData] = useState([])
  
  function Beer (){
    fetch(beersApi)
    .then(response =>  response.json())
    .then(jsonObject => { 
      const beersObj = jsonObject
      setData(beersObj)
    })
    .catch((error) => console.log("Error", error))    
  }    

  useEffect(Beer, []) 
```   

If you are interested you can check it out PUNK API documentation [HERE!](https://punkapi.com/documentation/v2) 

*The Tabs component was created by using* **'react-tabs'**, *which consists of 4 components working together.*
*Here is a basic example of it:*
```
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default () => (
  <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
);
```
[CLICK HERE](https://www.npmjs.com/package/react-tabs) for more information about React-Tab.

## Build With
![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Data Source 
[PUNK API](https://punkapi.com/documentation/v2)       
[React Tabs](https://www.npmjs.com/package/react-tabs)    
[Badges](https://github.com/alexandresanlim/Badges4-README.md-Profile)    
