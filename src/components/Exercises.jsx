import React,{ useState, useEffect } from 'react'
import  Pagination  from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import { exerciseOptions, fetchData  } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader'

const Exercises = ({ exercises,setExercises, bodyPart }) => {
  
    const [ currentPage, setCurrentPage ] = useState(1)
    const [errorMessage, setErrorMessage] = useState('')
    const exercisesPerPage = 9;

    useEffect(()=>{

      const fetchExercisesData = async () => {
        let exercisesData = []
      
        try {
          if (bodyPart === 'all') {
            exercisesData = await fetchData(
              'https://exercisedb.p.rapidapi.com/exercises?limit=10000&offset=0',
              exerciseOptions
            )
          } else {
            exercisesData = await fetchData(
              `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10000&offset=0`,
              exerciseOptions
            )
          }
      
          if (Array.isArray(exercisesData)) {
            setExercises(exercisesData)
            setErrorMessage('')
          } else {
            console.error('API returned non-array response:', exercisesData)
            setErrorMessage(
              exercisesData?.message || 'Unexpected response from the API.'
            )
            setExercises([]) // fallback to empty array to prevent crashing
          }
        } catch (error) {
          console.error('Failed to fetch exercises:', error)
          setErrorMessage(error.message || 'Failed to fetch exercises.')
          setExercises([]) // fallback
        }
      }
      
      fetchExercisesData()

    },[bodyPart])

    
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises =  exercises?.slice( indexOfFirstExercise, indexOfLastExercise )

     
    const paginate =(e, value)=>{
         setCurrentPage(value)
         window.scrollTo({ top:1800, behavior:'smooth'})
    }
  
    // 👉 Error Message
    if (errorMessage) {
      return (
        <Box sx={{ mt: '50px', p: '20px', textAlign: 'center' }} id='exercises'>
          <Typography variant="h6" color="error" fontWeight="bold">
            {errorMessage.split('.')[0]}
          </Typography>

          <Typography variant="body1" mt={2}>
            Please try again later or upgrade your plan if you're using a free API tier.
          </Typography>
        </Box>
      )
    }

  // 👉 Loader while no error and no data yet
  if (!currentExercises.length) {
    return <Loader />
  }
  
  return (
    <Box id='exercises' sx={{
        mt:{lg:'100px'},
    }} mt='50px' p='20px'>
         <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>

        <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}}
                flexWrap='wrap'  justifyContent='center'
          >
             { currentExercises.map((exercise, index)=>(
                   <ExerciseCard key={index} exercise={exercise}/> 
             ))}
        </Stack>
        <Stack sx={{ mt: { lg: '114px', xs: '70px' } }}  alignItems='center'>
               {exercises.length > 9 && (
                <Pagination 
                  color='standard'
                  shape='rounded'
                  defaultPage={1} 
                  count={Math.ceil(exercises.length/ exercisesPerPage )}
                  page={currentPage}
                  onChange={paginate}
                  size='large'
                  />

               )}
        </Stack>
    </Box>
  )
}

export default Exercises