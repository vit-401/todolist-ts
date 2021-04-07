import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {connect, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {setAppErrorAC} from "../../app/app-reduser";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

function ErrorSnackbar(props: any) {
    const [open, setOpen] = React.useState(true)
    const error = useSelector((state: AppRootStateType) => {
        return state.app.error
    })

    const handleClose = () => {
        setTimeout(() => {
            props.setAppErrorAC(null)
        }, 3)
    }

    return (
        <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {props.errorMessage}
            </Alert>
        </Snackbar>
    )
}
const mapStateToProps = (state:any)=>({
    errorMessage: state.app.error
})
export default connect(mapStateToProps, {setAppErrorAC})(ErrorSnackbar)
