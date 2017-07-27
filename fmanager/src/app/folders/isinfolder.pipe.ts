
// pipe isinfolder фильтрует массив list_of_folders, оставляя папки или файлы изображений, входящие в родительскую папку parent


import { Pipe, PipeTransform } from '@angular/core';
import { Folder } from '../shared/folder';
 
@Pipe({
    name: 'isinfolder'
})

export class IsInFolder implements PipeTransform {

  myfilter(arr: Folder[], parent: string, type_of_file: string ): Folder[] {
      let array = []; 
      arr.forEach(function(item, i, arr) {
       if ((item.parent_id==parent)&&(item.type_of_file==type_of_file)) array.push(item);
      });
      return array;

  };  

  myfilter2(arr: Folder[], parent: string, type_of_file: string ): void {
      var len=arr.length;
      for(var i = 0; i<len;i++) {
       if ((arr[i].parent_id!=parent)||(arr[i].type_of_file!=type_of_file)) delete arr[i];//arr.splice(i,1);
      };


      
  };

  transform(array: Folder[], parent: string, type_of_file: string ): Folder[] {
    // return array.filter( (x) => {return (x.parent_id == parent) && (x.type_of_file==type_of_file)} );
    array = this.myfilter(array, parent, type_of_file); return array;
  }


  //  transform(array: Folder[], parent: string, type_of_file: string ): Folder[] {
  //      this.myfilter(array, parent, type_of_file);
  //      return array;
  //      //type_of_file -  это "dir" или "img"

  // }





}