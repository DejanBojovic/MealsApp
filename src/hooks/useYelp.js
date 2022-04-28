import {useState} from 'react';
import yelp from '../api/yelp';

const useYelp = () => {
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  const searchApi = async searchTerm => {
    setError(null);
    setResults([]);
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });

      setResults(res.data.businesses);
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return {results, error, searchApi};
};

export default useYelp;
