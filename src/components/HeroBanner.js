import React from 'react'
import { Box  , Typography , Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner1.jpg'

const HeroBanner = () => {
  return (
    <Box sx = {{ mt : {lg : '212px' , xs : '70px'} , ml : { sm : '50px' } }} position="relative"  p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>

        <Typography mb="23px" fontWeight={700} sx={{ fontSize: {lg: '44px' , xs : '40px'} }}  mt="30px" >
            Sweat , Smile , <br /> and Repeat
        </Typography>

        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the most effective exercises
        </Typography>

        <Button variant="contained" color="error" href='#exercises' sx={{backgroundColor : '#ff2625' , padding: '10px' }}>
            Explore Exercises
        </Button>

        <img src={HeroBannerImage} alt='banner' className="hero-banner-img" mt="40px" />
    </Box>
  )
}

export default HeroBanner
