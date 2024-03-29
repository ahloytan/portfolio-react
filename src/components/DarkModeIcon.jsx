import { useSelector } from 'react-redux';

const DarkModeIcon = () => {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={isDarkMode ? '#fff' : 'none'}
      stroke={isDarkMode ? '#fff' : '#666'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
};

export default DarkModeIcon;
