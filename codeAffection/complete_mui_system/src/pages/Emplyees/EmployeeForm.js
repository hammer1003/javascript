import React from 'react'
import { Grid } from '@material-ui/core';
import {useForm, Form} from '../../components/useForm';
import Controls from '../../components/controls/Controls'
import * as employeeService from '../../service/employeeService'

const genderItem = [
    {id:'male', title: 'Male'},
    {id:'female', title: 'Female'},
    {id:'other', title: 'Other'}
]

const initialFValues = {
    id: 0,
    fullname: '',
    email: '',
    mobile: '',
    city: '',
    gender: '',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
}

const EmployeeForm = () => {
    const {values, setValues, handleInputChange} = useForm(initialFValues)

    return (
        <Form>
            <Grid container >
                <Grid item xs={6}>
                    <Controls.Input 
                        name='fullname'
                        label="Full Name"
                        value={values.fullname}
                        onChange={handleInputChange}
                    />
                    <Controls.Input 
                        name='email'
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    <Controls.Input 
                        name='mobile'
                        label="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                    <Controls.Input 
                        name='city'
                        label="City"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup 
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItem}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollect()}
                    />
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />

                    <Controls.CheckBox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button type="submit" text="submit"/>
                        <Controls.Button color="default" text="reset"/>
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm;
