import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getLCP(onPerfEntry);
    // Optionally, you can also include the other metrics
    getFCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;