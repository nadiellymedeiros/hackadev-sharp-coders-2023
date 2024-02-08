import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moedas',
  standalone: true
})
export class MoedasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
