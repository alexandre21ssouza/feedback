import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrap'
})
export class WrapPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
