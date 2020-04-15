import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { ButtonListStyle } from 'components/ButtonList';
import { VerticalItemsMarginStyle } from 'components/VerticalItemsMargin';
import { ContactStatus } from 'store/contact/reducers';
import { useContactActions, useContactState } from 'hooks/useContact';

export const ConfirmContainer: React.FC = () => {
  const { fetchPost, editPostData, contactClear } = useContactActions();
  const contactState = useContactState();
  const { name, email, message, status } = contactState;
  const onSubmit = () => fetchPost(contactState);
  const editPost = () => editPostData();
  const fromClear = () => contactClear();

  return (
    <>
      <VerticalItemsMarginStyle>
        <dl>
          <dt>
            <Typography variant="body2" gutterBottom>
              Name
            </Typography>
          </dt>
          <dd>
            <Typography variant="body1">{name}</Typography>
          </dd>
        </dl>
        <dl>
          <dt>
            <Typography variant="body2" gutterBottom>
              E-mail
            </Typography>
          </dt>
          <dd>
            <Typography variant="body1">{email}</Typography>
          </dd>
        </dl>
        <dl>
          <dt>
            <Typography variant="body2" gutterBottom>
              Message
            </Typography>
          </dt>
          <dd>
            <Typography variant="body1">{message}</Typography>
          </dd>
        </dl>
      </VerticalItemsMarginStyle>
      <ButtonListStyle>
        {status === ContactStatus.success ? (
          <>
            <li>
              <Button startIcon={<ClearIcon />} onClick={fromClear}>
                clear
              </Button>
            </li>
            <li>
              <Link href="/">
                <a>
                  <Button startIcon={<NavigateNextIcon />} component={'span'}>
                    top
                  </Button>
                </a>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Button
                color="primary"
                startIcon={<SendIcon />}
                onClick={onSubmit}
              >
                send
              </Button>
            </li>
            <li>
              <Button startIcon={<EditIcon />} onClick={editPost}>
                Edit
              </Button>
            </li>
          </>
        )}
      </ButtonListStyle>
    </>
  );
};
