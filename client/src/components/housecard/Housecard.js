import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

const HouseCard = (props) => {
	const classes = useStyles();

	return (
		<Card className={classes.root} id="card">
			<CardActionArea>
				<CardMedia className={classes.media} image={props.image} alt={props.name} id="image" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						<p>{props.name}</p>
						<p>Rooms from {props.price}</p>
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						<p>{props.description}</p>
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Message(Coming soon in version 2)<span>😅</span>
				</Button>
				<Button size="small" color="primary">
					Share(Coming soon in version 2)<span>😅</span>
				</Button>
			</CardActions>
		</Card>
	);
};

export default HouseCard;
