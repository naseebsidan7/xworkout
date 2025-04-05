import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImg from '../assets/icons/body-part.png'
import EquipmentImg from '../assets/icons/equipment.png'
import TargetImg from '../assets/icons/target.png'

const Detail = ({ exerciseDetial }) => {
    const { name, bodyPart, equipment, gifUrl, target  } = exerciseDetial

     const extraDetail = [
        {
            icon:BodyPartImg,
            name:bodyPart,
        },
        {
            icon:EquipmentImg,
            name:equipment,
        },
        {
            icon:TargetImg,
            name:target,
        }
     ]

  return (
    <Stack gap='60px' sx={{flexDirection: { lg:'row' }, p:'20px', alignItems:'center'}} flexDirection='column'>
          
           <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
          
           <Stack  sx={{ gap:{lg:'35px', xs:'20px' }}}>
           <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
                {name}
                </Typography>
                    <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
                        Exercises keep you strong.{' '}
                        <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                        of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                        <br /> mood and gain energy.
                </Typography>

              {extraDetail?.map(({ icon, name })=>(
                    <Stack key={name+icon} direction='row' gap='24px' alignItems='center'>
                          <Button sx={{backgroundColor:'#fff2db', borderRadius:'50%', width:'100px', height:'100px'}}>
                             <img src={icon} alt={name} style={{ width:'50px', height:'50px'}} />
                          </Button>
                          <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                              {name}
                          </Typography>
                    </Stack>
              ))}
           </Stack>

    </Stack>
  )
}

export default Detail