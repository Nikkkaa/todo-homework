import { FiltersTypeEntity } from 'domains/Task.entity';

export interface FilterStatusProps {
  selectTypeTask: FiltersTypeEntity;
  onChange: (filterStatus: FiltersTypeEntity) => void;
  disabled?: boolean;
}
