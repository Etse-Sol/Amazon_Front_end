import React from 'react'
import {categoryInfo} from "./CatagoryFullinfo"

import classes from "./catagory.module.css"
import CatagoryCard from './CatagoryCard';
function Catagory() {
  return (
    <div>
      <section className={classes.Catagory_container}>
        {
        categoryInfo.map((infos,i)=>
          
          
           < CatagoryCard data = {infos}/>
        )
        }
        </section>
        {/* {console.log(categoryInfo)} */}
    </div>
  );
}

export default Catagory
