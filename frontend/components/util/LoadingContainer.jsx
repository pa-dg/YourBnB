import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
// import loaderGif from '../../../app/assets/images/loader/loader.jpg';

const LoadingContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const intervalID = setTimeout(() => setIsLoading(false), 5000);

    return () => clearTimeout(intervalID);
  }, []);

  const styles = {
    color: '#ff385c',
    padding: 50,
  }
  
  return (
    <div className="loading-container">
      <CircularProgress size={100} style={styles}/>
    </div>
  );
}

export default LoadingContainer;