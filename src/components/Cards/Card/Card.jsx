import React from 'react';
import {Card, Typography, Grid,CardContent} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Card.module.css';


export default function CardComponent ({className, cardTitle, value, cardSubtitle, lastUpdate}){
    return(
        <Grid item xs={12} md={3} className={`${styles.card} ${className}`} component={Card}  >
                <CardContent>
                    <Typography className={styles.title} color='textSecondary' gutterBottom>
                        {cardTitle}
                    </Typography>
                    <Typography variant='h5' component='h2' gutterBottom>
                        <CountUp start={0} end={value} duration={2.75} separator="," />
                    </Typography>
                    <Typography variant='body2' className='actionHover' gutterBottom>
                       {cardSubtitle}
                    </Typography>
                    <Typography color='textSecondary' gutterBottom>
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                </CardContent>
            
        
        </Grid>
    )
}