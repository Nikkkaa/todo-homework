import { object as yupObject, string as yupString, boolean as yupBoolean } from 'yup';
import { VALIDATION } from 'constants/index';

export const taskEditSchema = yupObject().shape({
  name: yupString().required(VALIDATION.REQUIRED).min(6, 'В этом поле должно быть не менее 6-ти символов!'),
  info: yupString().required(VALIDATION.REQUIRED).min(8, 'В этом поле должно быть не менее 8-ми символов!'),
  isImportant: yupBoolean(),
  isCompleted: yupBoolean(),
});
