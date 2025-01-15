"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useEffect, useState} from 'react';
import {useCartContext} from '@/Utils/Context/Contexts';
import AddressForm from '@/Components/checkoutComponents/AddressForm';
import ReviewForm from '@/Components/checkoutComponents/ReviewForm';
import calculateTotal from '@/Utils/functions/calculateTotal';
import {InfoState} from '@/Utils/Types';
import Btn from '@/Components/Btn/Btn';

const steps = ['Shipping address', 'Review your order'];

function getStepContent(step : number,
    
    handleChange : (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    , info : InfoState, setActiveStep : React.Dispatch < React.SetStateAction < number >>) {
    switch (step) {
        case 0:
            return <AddressForm info={info} handleChange={handleChange}/>;

        case 1:
            return <ReviewForm info={info} setActiveStep={setActiveStep}/>;
        default:
            throw new Error('Unknown step');
    }
}

const theme = createTheme();
const isValidInfo = (info: InfoState): boolean => {
  try {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return Boolean(
      info?.checkbox &&
      info?.checkbox2 &&
      info?.firstName?.trim()?.length >= 2 &&
      info?.lastName?.trim()?.length > 0 &&
      info?.address1?.trim()?.length > 0 &&
      info?.phone?.trim()?.length >= 6 &&
      emailRegex.test(info?.email || '')
    );
  } catch (error) {
    console.error('Validation failed:', error);
    return false;
  }
};
const Checkout : React.FC = () => {
    const [activeStep,
        setActiveStep] = useState < number > (0);
    const [orderNumber,
        setOrderNumber] = useState < string | null > (null);
    const {cart} = useCartContext();

    const [info,
        setInfo] = useState < InfoState > ({
        firstName: '',
        lastName: '',
        city: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        checkbox: true,
        checkbox2: true
    });
    const isValidInformation = isValidInfo(info);

    const handleChange = (e : React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement >) => {
        const {name, value} = e.target;
        setInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    const handleNext = () => {
        if (isValidInfo(info)) {
            setActiveStep((prevStep) => prevStep + 1);
        } else {
            alert('Please fill in all required fields and ensure the email is valid.');
        }
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const saveOrder = async() => {
        if (!cart || !info) {
            console.error('Missing order information or products');
            return;
        }

        const {totalPrice, deliveryCharge} = calculateTotal(cart);
        const orderTotal = Number(totalPrice + deliveryCharge).toFixed(2);

        try {
            const response = await fetch(`/api/save-order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    order: {
                        info,
                        products: cart,
                        totalPrice,
                        orderTotal
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`Failed to save order: ${response.statusText}`);
            }

            const data = await response.json();
            setOrderNumber(data
                ?.orderNumber || null);
        } catch (error) {
            console.error('Error saving order:', error);
        }
    };

    useEffect(() => {
        if (activeStep === steps.length) {
            saveOrder();
        }
    }, [activeStep]);

    return (
        <main>

            <ThemeProvider theme={theme}>

                <Container
                    component="main"
                    maxWidth="md"
                    sx={{
                    mt: 4,
                    mb: 4
                }}>
                    <Paper
                    className='auto'
                        variant="outlined"
                        sx={{
                        maxWidth:'sm',
                        my: {
                            xs: 3,
                            md: 6
                        },
                        p: {
                            xs: 2,
                            md: 3
                        }
                    }}>
                        <Typography component="h1" variant="h4" align="center">
                            Checkout
                        </Typography>
                        <Stepper
                            activeStep={activeStep}
                            sx={{
                            pt: 3,
                            pb: 5
                        }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length
                            ? (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Thank you for your order.
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {`Your order has been recorded! Your order number is ${orderNumber}. We will message you soon, so please stay alert.`}
                                    </Typography>
                                </React.Fragment>
                            )
                            : (
                                <React.Fragment>
                                    {getStepContent(activeStep, handleChange, info, setActiveStep)}
                                    <Box
                                        sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end'
                                    }}>
                                        {activeStep !== 0 && (
                                            <Btn sx={{mt:2,mr:1 ,fontSize:'.85em'}} border onClick={handleBack}>
                                                Back
                                            </Btn>
                                        )}
                                        <Btn type='submit'
                                        sx={{mt:2,fontSize:'.85em'}}
                                        border v2
                                         disabled={!Boolean(isValidInformation)}
                                          onClick={handleNext}>
                                            {activeStep === steps.length - 1
                                                ? 'Place order'
                                                : 'Review Order >'}
                                        </Btn>
                                    </Box>
                                </React.Fragment>
                            )}
                    </Paper>
                </Container>
            </ThemeProvider>
        </main>

    );
}

export default Checkout;