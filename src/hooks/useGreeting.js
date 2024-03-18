const useGreeting = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours > 4 && hours < 12) {
    return "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    return "Good Afternoon";
  } else if (hours >= 17 && hours < 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
};
export default useGreeting;
