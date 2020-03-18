import { useContext } from 'react';
import { TopPageDataContext } from 'pages';
import { AboutPageDataContext } from 'pages/about';

export const useTopPageData = () => {
  const pageData = useContext(TopPageDataContext);
  return pageData;
};

export const useAboutPageData = () => {
  const pageData = useContext(AboutPageDataContext);
  return pageData;
};
