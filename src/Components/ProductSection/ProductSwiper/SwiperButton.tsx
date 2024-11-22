"use client"

import {Button} from '@mui/material';
import {IoIosArrowRoundForward} from "react-icons/io";
import {IoIosArrowRoundBack} from "react-icons/io";

const SwiperButton = ({direction, onClick} : {
    direction: string,
    onClick: () => any
}) => {
    return (
        <Button
            className='white  bg-black'
            sx={{
            backgroundColor: 'rgba(0,0,0,0.9)',
            color: 'white',
            minWidth: '30px',
            width: '30px !important',
            height: '30px !important',
            borderRadius: '50%',
            zIndex: 10,
            '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)'
            }
        }}
            onClick={onClick}>
            {direction === 'left'
                ? <IoIosArrowRoundBack fontSize='1.2em' size={34}/>
                : <IoIosArrowRoundForward fontSize='1.2em' size={34}/>}
        </Button>
    );
};

export default SwiperButton;
