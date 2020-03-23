import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { PostData } from 'store/pages/contact/reducers';
import { useContactActions, useContactState } from 'hooks/store/useContact';
import { ButtonListStyle } from 'components/commons/layout/buttons/styles';
import { VerticalItemsMarginStyle } from 'components/commons/layout/verticalItemsMargin/styles';

const FormContainer: React.FC = () => {
  const { setPostData } = useContactActions();
  const contactState = useContactState();
  const { name, email, message } = contactState;
  const { register, handleSubmit, errors } = useForm<PostData>({
    defaultValues: {
      name,
      email,
      message,
    },
  });

  const onSubmit = data => {
    setPostData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VerticalItemsMarginStyle>
        <TextField
          name="name"
          label="Name *"
          placeholder="Osaka Taro"
          inputRef={register({ required: '必須' })}
          helperText={errors.name?.message}
          error={!!errors.name}
          fullWidth
        />
        <TextField
          name="email"
          label="E-mail *"
          placeholder="mail@example.com"
          inputRef={register({
            required: '必須',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: '有効なメールアドレスではありません',
            },
          })}
          helperText={errors.email?.message}
          error={!!errors.email}
          fullWidth
        />
        <TextField
          name="message"
          placeholder="Message"
          multiline
          inputRef={register({ required: '必須' })}
          label="Message *"
          helperText={errors.message?.message}
          error={!!errors.message}
          fullWidth
          rows="4"
        />
      </VerticalItemsMarginStyle>
      <ButtonListStyle>
        <Button
          type="submit"
          disabled={!!Object.keys(errors).length}
          startIcon={<NavigateNextIcon />}
        >
          Next
        </Button>
      </ButtonListStyle>
    </form>
  );
};

export default FormContainer;
