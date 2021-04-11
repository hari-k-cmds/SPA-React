import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        margin: 'auto',
        padding: '1%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    userTextDetailsContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

export default function UserCard() {
    const classes = useStyles();
    const usersList = useSelector(state => state.usersList)
    const { users } = usersList

    return (
        <Card className={classes.root}>
            {users.avatar?<CardMedia
                className={classes.media}
                image={users.avatar}
                title="User image"
            />: null}
            <CardContent className={classes.userTextDetailsContainer}>
                <Typography variant="body2" color="textSecondary" component="p">
                    ID: {users.id}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                    Name: {users.first_name}
                </Typography>

            </CardContent>
        </Card>
    );
}