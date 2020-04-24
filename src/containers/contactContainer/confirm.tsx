import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import { contactStatus } from 'store/contact/reducers';
import { useContactActions, useContactState } from 'hooks/useContact';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { ButtonListStyle } from 'components/ButtonList';
import { DescriptionList } from 'components/ContactComponents';

export const ConfirmContainer: React.FC = () => {
  const { fetchPost, editPostData, contactClear } = useContactActions();
  const contactState = useContactState();
  const { name, email, message, status } = contactState;
  const onSubmit = () => fetchPost(contactState);
  const editPost = () => editPostData();
  const fromClear = () => contactClear();

  const descriptionItems = [
    { definition: 'Name', description: name },
    { definition: 'Email', description: email },
    { definition: 'Message', description: message },
  ];

  return (
    <>
      <DescriptionList descriptionItems={descriptionItems} />
      <ButtonListStyle>
        {status === contactStatus.success ? (
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
