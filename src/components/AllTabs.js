import React from "react";
import'./AllTabs.css'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const AllTabs = (props) => {

return (
    <div className="allTabs">
        {/* Tabs are third party library */}

        <Tabs>  {/*  DIV  */}
            <TabList className="navTabs">   {/*  UL  */}
                {props.data.map((tab, id) =>
                <Tab key={id}> {tab.name} </Tab> )} {/*  LI  */}
            </TabList>
          
                {props.data.map((tab, id) => 
                <TabPanel  key={id}> 
                    <div className="img">
                        <img src={tab.image_url} className="beerImg" alt="Beer" />
                    </div>
                    <div className="beerInfo">
                        <h2 className="beerName">{tab.name}</h2> 
                        <p className="tagline">{tab.tagline}</p> 
                        <p className="beerContent"><span>Brewed in: </span>{tab.first_brewed}</p> 
                        <p className="beerContent"><span>Yeast: </span>{tab.ingredients.yeast}</p> 
                        <p className="description">{tab.description}</p>    
                        <div className="table">
                            <table className="tableInfo">
                                <thead>
                                    <tr>
                                        <th>PH</th> 
                                        <th>ABV</th> 
                                        <th>IBU</th>
                                        <th>EBC</th>
                                        <th>SRM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{tab.ph}</td>
                                        <td>{tab.abv}</td>
                                        <td>{tab.abv}</td>
                                        <td>{tab.ebc}</td>
                                        <td>{tab.srm}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="tip"><span>Food Pairing: </span>{tab.food_pairing.join(', ')}</p> 
                        <p className="tip"><span>Tips:</span> {tab.brewers_tips}</p> 
                    </div>
                </TabPanel> 
                )} {/*  DIV  */}
        </Tabs>
    </div>
    )     
}
export default AllTabs;