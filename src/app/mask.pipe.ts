import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.length > 3) {
      return value.substr(0, 3) + '***';
    } else {
      return '***';
    }
  }

}
