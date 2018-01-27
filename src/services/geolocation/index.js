const requestCurrentPosition = (navigator) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(useGeoData);
  }
}

export default requestCurrentPosition
