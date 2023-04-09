import React from 'react';
import { observer } from 'mobx-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import sad_cat from 'assets/sad_cat.webp';
import { PATH_LIST } from 'constants/index';
import { ButtonStyled, PageContainer } from 'components/index';

function TasksErrorModuleProto() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <PageContainer>
      <Stack spacing={2} justifyContent="center" textAlign="center">
        <Typography variant="h4" align="center" mb={2} color="error">
          УПС... Что-то пошло не так!
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="center">
          <img src={sad_cat} width="600px" alt="Грустный котик" />
        </Box>

        <ButtonStyled variant="contained" color="primary" onClick={goBack}>
          Вернуться назад
        </ButtonStyled>

        <Button fullWidth={true} component={Link} to={PATH_LIST.ROOT} variant="contained" color="info">
          Вернуться на главную
        </Button>
      </Stack>
    </PageContainer>
  );
}

export const TasksErrorModule = observer(TasksErrorModuleProto);
