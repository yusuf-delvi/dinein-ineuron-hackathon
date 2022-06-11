import React from 'react';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import styles from '../styles/Menu.module.css';
import Button from '@mui/material/Button';

const MenuItem = () => {
	return <div sx={{ marginTop: '30px' }} >
		<Card className={styles.menuItemContainer}>
			<div className={styles.menuItemsimg}>
			<img src='/pizza.jpg'>
			</img>
			</div>
			
			<div className={styles.menuItemsmain}>
				<h1>
					Cheese Pizza
				</h1>
				<div className={styles.menuItemssub}>
					<h3 >$10.00</h3>
					<Chip sx={{marginLeft:"20px"}} label="Vegan"></Chip>
				</div>
			</div>

			<div className={styles.menuItemBtnContainer}>
			<Button variant="contained">Add to Cart</Button>
			</div>

		</Card>
	</div>;
};

const Menu = () => {
	return (
		<div className={styles.menuContainer}>
			<div>Explore Our Menu</div>
			<MenuItem />
			<MenuItem />
			<MenuItem />
		</div>
	);
};

export default Menu;
