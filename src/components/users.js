import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../store/actions/userAction'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import UserCard from './userCard'
import Loading from './loading'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    formControl: {
        height: 30,
        width: '90%'
    },
    formControlButton: {
        height: 30,
        width: '60%'
    },
    formControlLabel: {
        textAlign: 'left',
        marginLeft: '5%'
    },
    formControlButtonContainer: {
        lineHeight: '65px'
    },
    container: {
        marginTop: theme.spacing(5),
        flexGrow: 1,
    },
}));



const Users = () => {
    const dispatch = useDispatch()
    const usersList = useSelector(state => state.usersList)
    const { loading, error, users } = usersList
    const [userId, setUserId] = useState(1);
    const classes = useStyles();
    const [department, setDepartment] = React.useState('');
    const departments = ['Department 1', 'Department 2', 'Department 3', 'Department 4', 'Department 5']
    const handleChange = (event) => {
        setDepartment(event.target.value);
    };


    const handleChangeUserId = (event) => {
        setUserId(event.target.value);
    };

    const getDetails = (id) => {
        dispatch(getUsers(userId))
    };


    const clearDetails = (event) => {
        setUserId('');
        setDepartment('');
        dispatch({
            type: 'GET_USERS',
            payload: [],
            loading: false
        })
    };

    return (
        <>
            <div className={classes.container}>
                <Grid container spacing={0}>

                    <Grid item xs={3}>
                        <div className={classes.formControlLabel}>Departments:</div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                className={classes.formControl}
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={department}
                                onChange={handleChange}
                                
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {departments.map((department, index) => <MenuItem key={department} value={department}>{department}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.formControlLabel}> Employee Id:</div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                className={classes.formControl}
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={userId}
                                onChange={handleChangeUserId}
                                role="form">
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {Array.apply(null, { length: 10 }).map((e, i) => (
                                    <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.formControlButtonContainer}>
                            <Button variant="contained" color="primary" className={classes.formControlButton} disabled={!userId} onClick={() => getDetails(userId)}>GetDetails </Button>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.formControlButtonContainer}>
                            <Button variant="contained" color="secondary" className={classes.formControlButton} disabled={!(userId || department)} onClick={() => clearDetails()}>Clear </Button>
                        </div>
                    </Grid>
                </Grid>
                {loading ? <Loading /> : error ? error.message : users.id ? <UserCard /> : null}
            </div>
        </>
    )
}

export default Users