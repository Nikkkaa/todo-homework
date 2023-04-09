import { FiltersTypeEntity } from 'domains/index';

export interface FilterStatusProps {
  selectTypeTask: FiltersTypeEntity;
  onChange: (filterStatus: FiltersTypeEntity) => void;
  disabled?: boolean;
}
