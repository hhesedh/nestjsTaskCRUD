import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE
  ];

  transform(value: string) {
    const formattedValue = value.toUpperCase();

    if (!this.isStatusValid(formattedValue)) {
      throw new BadRequestException(`${formattedValue} is an invalid status`);
    }

    return formattedValue;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
