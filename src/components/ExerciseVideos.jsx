import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

const ExerciseVideos = ({ exerciseVideoes, name }) => {
  // Ensure `exerciseVideoes` is an array, else default to an empty array
  const videos = Array.isArray(exerciseVideoes) ? exerciseVideoes.slice(0, 3) : [];

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>

      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { md: '40px',lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {videos.length > 0 ? (
          videos.map((item, index) => {
            const videoId = item?.video?.videoId;
            const thumbnail = item?.video?.thumbnails?.[0]?.url; // Ensure thumbnails exist

            if (!videoId || !thumbnail) return null; // Skip if videoId or thumbnail is missing

            return (
              <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img style={{ borderTopLeftRadius: '20px' }} src={thumbnail} alt={item?.video?.title || "Exercise Video"} />

                <Box>
                  <Typography sx={{ fontSize: { lg: '22px', xs: '18px' } }} fontWeight={600} color="#000">
                    {item.video.title}
                  </Typography>
                  <Typography fontSize="14px" color="#000">
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
            );
          })
        ) : (
          <Typography variant="h6" color="gray">
            No exercise videos available.
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
