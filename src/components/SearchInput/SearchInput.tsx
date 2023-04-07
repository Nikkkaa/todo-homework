import React, { ChangeEventHandler, MouseEvent } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@material-ui/core';
import { SearchInputProps } from './SearchInput.types';
import { SearchInputWrapper, SearchPanel } from './SearchInput.styles';

export function SearchInput({ onChange, value, onReset }: SearchInputProps) {
  const onSearchInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => onChange(evt.target.value);

  const onResetBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (onReset) onReset();
  };

  return (
    <SearchPanel>
      <SearchInputWrapper
        variant="outlined"
        placeholder="Поиск"
        onChange={onSearchInputChange}
        value={value}
        InputProps={{
          endAdornment: (
            <IconButton onClick={onResetBtnClick}>
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
    </SearchPanel>
  );
}
