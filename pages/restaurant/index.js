import React from 'react'
import Card from '@mui/material/Card';
import styles from '../../styles/Restaurant.module.css';
import Chip from '@mui/material/Chip';

const Table = () => {
    return (
        
        <Card sx={{}}>
            <span>Table Name</span>
            <Chip label="Booked" />
        </Card>
        )
}

const Restaurant = () => {
    
  return (
    <div>
        <h1>Restaurant</h1>
        <div className={styles.main}>
            <Table />
        <Table />
        <Table />
        <Table />
        </div>
        
    </div>
   
  )
}

export default Restaurant