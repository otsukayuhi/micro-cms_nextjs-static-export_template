import { useContext } from 'react';
import { TopPageDataContext } from 'pages';

export const useTopPageData = () => {
  const pageData = useContext(TopPageDataContext);
  return pageData;
};
