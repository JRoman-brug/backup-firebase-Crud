import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
})
export class MyFilterPipe implements PipeTransform {

  transform(items: any[], arg: any): any {
    const resultadoPost: any[] = [];
  

    for (let post of items) {
      if (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultadoPost.push(post);
      }
    }

    return resultadoPost;
  }
}