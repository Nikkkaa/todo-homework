import React from 'react';
import { observer } from 'mobx-react';
import { Link, useNavigate } from 'react-router-dom';
import sad_cat from 'assets/sad_cat.webp';
import { PATH_LIST } from 'constants/index';
import { PageContainer } from 'components/PageContainer';

function TasksErrorModuleProto() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <PageContainer>
      <h1 className="text-center color-red text-danger"> УПС... Что-то пошло не так! </h1>

      <img src={sad_cat} className="img-fluid rounded" alt="Грустный котик"></img>

      <button className="btn btn-secondary d-block ml-auto w-100 mt-3" onClick={goBack}>
        Вернуться назад
      </button>

      <Link to={PATH_LIST.ROOT} className="btn btn-secondary d-block ml-auto w-100 mt-3">
        Вернутся на главную
      </Link>
    </PageContainer>
  );
}

export const TasksErrorModule = observer(TasksErrorModuleProto);
