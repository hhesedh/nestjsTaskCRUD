import { TaskStatus } from '../task-status.enum';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  readonly status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  readonly search: string;
}
