import React from 'react'
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from '@material-ui/core'
import {useFormik} from "formik";
import {connect, useSelector} from "react-redux";
import {loginTC} from "../../app/authReducer";
import {AppRootStateType} from "../../app/store";
import {Redirect} from 'react-router-dom';

const Login = (props: any) => {

    const isLoggedIn = useSelector<AppRootStateType>((state) => state.auth.isLoggedIn)


    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values: FormikErrorType) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (values.password && values.password.length < 4) {
                errors.password = 'Legth of password is incorrect'
            } else if (!values.password) {
                errors.password = 'Required'
            }
            return errors;
        },
        onSubmit: values => {
            props.loginTC(values.email, values.password, values.rememberMe)
            formik.resetForm()
        },
    })
    if (isLoggedIn) {
        return <Redirect to={'/'}/>
    }


    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}>here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            type="email"
                            {...formik.getFieldProps('email')}
                        />
                        {
                            formik.touched.email &&
                            formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null
                        }


                        <TextField
                            label="Password"
                            margin="normal"
                            type="password"
                            {...formik.getFieldProps('password')}

                        />
                        {formik.touched.password && formik.errors.password ?
                            <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox
                                {...formik.getFieldProps('rememberMe')}
                            />}

                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}


export default connect(null, {loginTC})(Login)
