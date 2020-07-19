import React from 'react';
import { Typography } from '@material-ui/core';
import { VerticalItemsMarginStyle } from 'components/VerticalItemsMargin';

type DescriptionItem = {
  definition: string;
  description: string;
};

type Props = {
  descriptionItems: DescriptionItem[];
};

export const DescriptionList: React.FC<Props> = ({ descriptionItems }) => (
  <VerticalItemsMarginStyle>
    {descriptionItems.map((item, index) => {
      const { definition, description } = item;
      return (
        <dl key={index}>
          <Typography variant="body2" gutterBottom component="dt">
            {definition}
          </Typography>
          <Typography variant="body1" component="dd">
            {description}
          </Typography>
        </dl>
      );
    })}
  </VerticalItemsMarginStyle>
);
