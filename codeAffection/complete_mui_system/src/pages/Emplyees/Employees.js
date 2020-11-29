import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../components/PageHeader'
import { Paper, makeStyles } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone'

const useStyles = makeStyles(theme =>({
    pageContent:{
        magin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const Employee = () => {
    const classes = useStyles()

    return (
        <>
            <PageHeader 
                title="New Employee"
                subtitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm />
            </Paper>
        </>
    )
}

export default Employee;