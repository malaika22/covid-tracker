import React from 'react'
import Grid from '@material-ui/core/Grid'
import CardComponent from '../Cards/Card/Card'
import styles from  './Cards.module.css'

export default function Cards ({data}){
    if(data){
        return(
            <Grid container spacing={3}  justify='center' alignItems='center' className={styles.cardContainer} >
            <CardComponent 
                className={styles.infected}
                cardTitle="Infected"
                value={data.confirmed.value}
                cardSubtitle="Number of infected from Covid19"
                lastUpdate={data.lastUpdate}
             />
             <CardComponent
                className={styles.recovered}
                cardTitle="Recovered"
                value={data.recovered.value}
                cardSubtitle="Number of Recoveries from Covid19"
                lastUpdate={data.lastUpdate}
            />
            <CardComponent 
            className={styles.deaths}
            cardTitle='Deaths'
            value={data.deaths.value}
            cardSubtitle="Number of Deaths from Covid19"
            lastUpdate={data.lastUpdate}
            />
    
           
            </Grid>

        )
              
    }
    else{
        return 'loading...'
    }
    
      
        
   
}