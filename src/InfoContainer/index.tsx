import React, { useState } from 'react';
import CustomInput from '../utils/customInput.tsx';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

const Index = () => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: { firstName: "", lastName: '' },
        onSubmit: async (values) => {
            // Handle form submission
            setIsSubmit(true)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required().label('First name'),
            lastName: Yup.string().required().label('Last name'),
        })
    });

    const [isSubmit, setIsSubmit] = useState(false)

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", alignItems: 'center' }}>
            <Container maxWidth="md" sx={{ boxShadow: "transparent 0px 0px 0px 4px", p: 2, borderRadius: { xs: "0px", md: "8px" }, background: "white", minHeight: { xs: "100vh", md: "50vh" }, display: "flex", flexDirection: "column" }}>
                <Typography variant='h4' sx={{ pb: 2 }}>My Form</Typography>

                {isSubmit ?
                    <>
                        <Box sx={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                            <Typography >Thanks for submitting the form!</Typography>
                        </Box>
                    </>
                    :
                    <>
                        <Box>

                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <CustomInput formik={formik} name={"firstName"} Label={"First name"} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CustomInput formik={formik} name={"lastName"} Label={"Last name"} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    {/* <CustomInput formik={formik} name={"lastName"} Label={"Last name"} />
                             */}
                                    {<Typography>{"Choose fav Movie "}</Typography>}

                                    <select style={{
                                        width: "-webkit-fill-available",
                                        height: "32px",
                                        borderRadius: "8px"
                                    }}>
                                        <option value="someOption">Some option</option>
                                        <option value="otherOption">Other option</option>
                                    </select>
                                </Grid>


                            </Grid>
                        </Box>

                        <Box sx={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
                            <Button onClick={() => formik.submitForm()} variant="contained">Submit</Button>
                        </Box>

                    </>
                }

            </Container>
        </Box>
    );
}

export default Index;
