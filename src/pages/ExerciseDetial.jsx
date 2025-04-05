 import React,{ useState, useEffect } from 'react'
 import { useParams } from 'react-router-dom'
 import { Box,  } from '@mui/material'

 import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData'

import Detail from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'

 const ExerciseDetial = () => {
      const [ exerciseDetial, setExerciseDetial] = useState({});
      const [ exerciseVideoes, setExerciseVideos] = useState([]);
      const [ targetMuscleExercies, setTargetMuscleExercies] = useState([]);
      const [ equipmentExercies, setEquipmentExercies] = useState([]);

      const { id } = useParams()
      
      useEffect(()=>{
          const fetchExerciseDetails = async () =>{
                const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
                const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

                const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
                setExerciseDetial(exerciseDetailData)

                const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
                setExerciseVideos(exerciseVideoData.contents)

                const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
                setTargetMuscleExercies(targetMuscleExercisesData)

                const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
                setEquipmentExercies(equipmentExercisesData)
          }    
          
          fetchExerciseDetails()
      },[id])

     

   return (
     <Box>
          <Detail exerciseDetial={exerciseDetial}/>
          <ExerciseVideos exerciseVideoes={exerciseVideoes} name={exerciseDetial.name}/>
          <SimilarExercises targetMuscleExercies={targetMuscleExercies} equipmentExercies={equipmentExercies} />
     </Box>
   )
 }
 
 export default ExerciseDetial