import { Box, Typography } from '@mui/material';
import React from 'react'

const CustomInput = ({ formik, name, type = 'text', Label, required = true }) => {
    const formikTouch = formik.touched as any;
    const formikError = formik.errors as any;

    let fields = formik.getFieldProps(name);

    return (
        <>
            <Box>
                {Label && <Typography>{Label} {required && <span style={{ color: "red" }}>*</span>}</Typography>}

                <input
                    placeholder="Enter here"
                    style={{
                        border: (formikTouch[name] && formikError[name]) ? "1px solid red" : "1px solid gray",
                        borderRadius: "6px",
                        padding: "8px",
                        width: "-webkit-fill-available"
                    }}
                    type={type}
                    name={name}
                    {...fields}
                />

                {formikTouch[name] && formikError[name] && <span style={{ color: "red" }}>{formikError[name]}</span>}

            </Box>
        </>
    )
}

export default CustomInput