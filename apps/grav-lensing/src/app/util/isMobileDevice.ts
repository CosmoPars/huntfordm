const isMobileDevice = (): boolean => {
  return (
     window.innerWidth < 810
  );
};

export default isMobileDevice;
