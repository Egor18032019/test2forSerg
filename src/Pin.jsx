import PropTypes from "prop-types";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Pin = (props) => {
    const classes = useStyles();

    const { place } = props;
    const setLike = () => {
        console.log("place.like=true")
    }
    
    if (place) {
        const { attributes, relationships } = place;
        const { address } = attributes;
        return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {attributes.type}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {attributes.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Площадь: {attributes.area + attributes.unit}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Адрес:
                        <br />
                        <span>{address.city} </span>
                        <span>{address.street} </span>
                        <span>{address.house} </span>
                        <span>{address.room} </span>
                    </Typography>
                    <Typography variant="body2" component="p">
                        Контактное лицо:
                        <br />
                        <span>{relationships.attributes.last_name} </span>
                        <span>{relationships.attributes.first_name} </span>
                        <span>{relationships.attributes.middle_name} </span>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={setLike}
                        size="small">добавить значок Like</Button>
                </CardActions>
            </Card>
        )
    }
    else {
        return "Ошибка загрузки";
    }
}

Pin.propTypes = {
    place: PropTypes.shape({
        type: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        attributes: PropTypes.object.isRequired,
        relationships: PropTypes.object.isRequired,

    }),
};

export default Pin;
