import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercies, equipmentExercies }) => {
  return (
    <Box sx={{mt: { lg:'100px', sx:'0' }}}>
          
          <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
            Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
          </Typography>
          <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
                {targetMuscleExercies.length ?
                 <HorizontalScrollbar data={targetMuscleExercies} />
                 : <Loader />
                 }             
          </Stack>

          <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
            Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
          </Typography>
          <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
                {equipmentExercies.length ?
                 <HorizontalScrollbar data={equipmentExercies} />
                 : <Loader />
                 }             
          </Stack>
    </Box>
  )
}

export default SimilarExercises