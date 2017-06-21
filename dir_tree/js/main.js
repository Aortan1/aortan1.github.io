

$(document).ready (function(){

    
    
   (function tree(){ // построение дерева в левом окне
         
 
        if(localStorage.getItem("list_of_folders")) list_of_folders = JSON.parse(localStorage.getItem("list_of_folders"));

        list_of_folders.forEach(function(item, i, arr) { // внесение каталогов в дерево левого окна
            if (item.id == "dir0")  $("#div_for_cloning .folder").clone().attr("id",item.id).attr("data-name",item.name).attr("data-parent",item.parent_id).appendTo("#tree_window").find("details.dir>summary.dir_name").first().html(item.name).closest("details.dir").find("input.rename").attr("value", item.name); else 
            if(item.type_of_file == "dir")
            $("#div_for_cloning .folder").clone().attr("id",item.id).attr("data-name",item.name).attr("data-parent",item.parent_id).appendTo($("#tree_window").find("#"+item.parent_id+">details.dir")).find("details.dir>summary.dir_name").first().html(item.name).closest("details.dir").find("input.rename").attr("value", item.name);

        });

        list_of_folders.forEach(function(item, i, arr) { // внесение файлов изображений в дерево левого окна 

            if (item.type_of_file == "img") $("#div_for_cloning .image#img0").clone().attr("id",item.id).attr("data-name",item.name).attr("data-parent",item.parent_id).appendTo($("#tree_window").find("#"+item.parent_id+">details.dir")).find(".img_name").html(item.name).closest(".sel").find("input.rename").attr("value", item.name);
        
        });

        //select_folder("img13");

   })();

   
    $('body').on('click', 'summary.dir_name,.image,.rename', function () { //выделение папки или файла дерева по клику


        //Убираем выделение с выделенной ранее папки
        var SelFolder = $("body").find("[selected_folder]");
        var id_sel_folder, sel_src, Subwi;
        $(SelFolder).removeClass("selected_folder").removeAttr("selected_folder");
        $("#subwindow .subw_inner_place").css("background", "none");

        //Выделяем кликнутую папку
        SelFolder = $(this).closest(".sel");         
        $(SelFolder).addClass("selected_folder").attr("selected_folder","true");

        //Добавляем элементы в правое окно .subwindow, визуализируя папки, содержащиеся в выделенной в дереве директории
        
        add_elements_in_subwindow($(SelFolder).attr("id"));
        $("#subw_folder_name").html($(SelFolder).attr("data-name")); // вставка имени папки/файла в заголовок правого окна
        

        if (SelFolder.hasClass("image")) {
                list_of_folders.forEach(function(item, i, arr) { // поиск выделенного файла изображения
                if (item.name==SelFolder.attr("data-name")) sel_src=item.path+item.name0;
                });

        Subwi = $("#subwindow .subw_inner_place");
        Subwi.css("background", "url('"+sel_src+"') no-repeat 50% 35%"); // просмотр изображения в правом окне
        }

    });

    $('body').on("click",'.delete_dir', function () {fun_deleteDir(this);});  // активация кнопки .delete_dir удаления каталога/файла

    

});



    var id_current, folder, im;
    const path1 = "http://aortan1.github.io/webcoder/tem/"; // путь к файлам изображений
 
    if(!id_current) id_current = -1;

    //localStorage.setItem("list_of_folders",JSON.stringify('')); // обнуление локального хранилища 
    folder = {id:"dir"+(++id_current), name:"ROOT FOLDER", parent_id: ""};
    x = JSON.parse(localStorage.getItem("list_of_folders"));
    

    function img_size(path,name,with_or_heigth){ // функция определения истинных размеров изображения (width или height)
        var img = document.createElement('img');
        img.src=path+name;
        img.alt='';
        img.onload = setInterval(function(){consol.log(img.width);}, 200);        
        if (with_or_heigth=="width") return img.width; else return img.height;
    }

    if (!x.length) // создание исходного массива дерева каталогов и файлов изображений
    {  
        list_of_folders = [folder, 
        {id: "dirx1", name:"Видео", parent_id: "dir0", type_of_file: "dir"}, 
        {id: "dirx2", name:"Музыка", parent_id: "dir0", type_of_file: "dir"},
        {id: "dirx3", name:"Документы", parent_id: "dir0", type_of_file: "dir"},
        {id: "dirx4", name:"Изображения", parent_id: "dir0", type_of_file: "dir"}, 
        {id: "dirx5", name:"Фильмы", parent_id: "dirx1", type_of_file: "dir"},
        {id: "dirx6", name:"Клипы", parent_id: "dirx1", type_of_file: "dir"},
        {id: "dirx7", name:"Girls", parent_id: "dirx4", type_of_file: "dir"},
        {id: "dirx8", name:"Cars", parent_id: "dirx4", type_of_file: "dir"},
        {id: "img1", name:"s-photo1.jpg", parent_id: "dirx7", type_of_file: "img", path: path1},
        {id: "img2", name:"s-photo2.jpg", parent_id: "dirx7", type_of_file: "img", path: path1},
        {id: "img3", name:"s-photo3.jpg", parent_id: "dirx7", type_of_file: "img", path: path1},
        {id: "img4", name:"s-photo4.jpg", parent_id: "dirx7", type_of_file: "img", path: path1},
        {id: "img5", name:"s-photo5.jpg", parent_id: "dirx7", type_of_file: "img", path: path1},
        {id: "img6", name:"s-photo6.jpg", parent_id: "dirx7", type_of_file: "img", path: path1},
        {id: "img7", name:"s-photo7.jpg", parent_id: "dirx7", type_of_file: "img", path: path1},
        {id: "img8", name:"s-photo8.jpg", parent_id: "dirx7", type_of_file: "img", path: path1},
        {id: "img9", name:"cars01.jpg", parent_id: "dirx8", type_of_file: "img", path: path1},
        {id: "img10", name:"cars02.jpg", parent_id: "dirx8", type_of_file: "img", path: path1},
        {id: "img11", name:"cars03.jpg", parent_id: "dirx8", type_of_file: "img", path: path1},
        {id: "img12", name:"cars04.jpg", parent_id: "dirx8", type_of_file: "img", path: path1},
        {id: "img13", name:"cars05.jpg", parent_id: "dirx8", type_of_file: "img", path: path1}
 
        ];
        list_of_folders.forEach(function(item, i, arr) { // добавление размеров в объекты изображений


        if (item.type_of_file == "img") { // определение параметров файлов изображений
        im = new Image();  item.name0 = item.name;
        im.src = item.path+item.name0;   
        item.width = img_size(item.path, item.name, "width");
        item.height = img_size(item.path, item.name, "height");
        }

        }); 
           } 
    // else list_of_folders = JSON.parse(localStorage.getItem("list_of_folders"));
    localStorage.setItem("list_of_folders",JSON.stringify(list_of_folders)); // сохранение массива дерева в лок.хранилище





function open_tree_till(id){ // ф-я, раскрывающая дерево каталогов до файла/папки id и его содержимого

            var El = $("#"+id); 
            var parent = El.attr("data-parent"); 
            $("#"+id+" > details.dir").attr("open","true");
            if (parent) {
                var Parent = $("#"+parent);
                open_tree_till(parent)
            } else return false;  
}

function select_folder(id){
        //Убираем выделение с выделенной ранее папки
        var SelFolder = $("body").find("[selected_folder]");
        var id_sel_folder, sel_src, Subwi;
        $(SelFolder).removeClass("selected_folder").removeAttr("selected_folder");
        $("#subwindow .subw_inner_place").css("background", "none");

        //Выделяем кликнутую папку
        SelFolder = $("#"+id);         
        $(SelFolder).addClass("selected_folder").attr("selected_folder","true");
        open_tree_till(id);

        //Добавляем элементы в правое окно .subwindow, визуализируя папки, содержащиеся в выделенной в дереве директории
        
        add_elements_in_subwindow($(SelFolder).attr("id"));
        $("#subw_folder_name").html($(SelFolder).attr("data-name")); // вставка имени папки/файла в заголовок правого окна
        

        if (SelFolder.hasClass("image")) {
                list_of_folders.forEach(function(item, i, arr) { // поиск выделенного файла изображения
                if (item.name==SelFolder.attr("data-name")) sel_src=item.path+item.name0;
                });

        Subwi = $("#subwindow .subw_inner_place");
        Subwi.css("background", "url('"+sel_src+"') no-repeat 50% 35%"); // просмотр изображения в правом окне
        }

}


function fun_seachFile(form){
    var search_name = new RegExp(form.searchfile.value, "i");
    var id;
    list_of_folders.forEach(function(item, i, arr) {
       //if (item.name==search_name) id = item.id;
       if (search_name.test(item.name) && !id) id = item.id;
    }); 

    if (id) select_folder(id);
    //form.searchfile.value = "";
    return false;

}






function fun_deleteDir(thi) {   // ф-я удаления директорий и файлов из массива и DOM-дерева
        var doDelete;
        var id_del_folder = $(thi).closest('.sel').attr ("id");
        var id_del_folder_parent = $(thi).closest('.sel').parent().closest('.folder').attr ("id");
        var name_del_folder = $(thi).closest('.sel').attr ("data-name");
        var ob;
        if ($(thi).closest('.sel').hasClass("folder")) ob="папку";
        if ($(thi).closest('.sel').hasClass("image")) ob="файл";   

        if (id_del_folder=="dir0") alert ("Запрещено удалять корневую папку.")
         else {
                doDelete = confirm("Вы уверены, что хотите удалить "+ob+" "+name_del_folder+" ?");
                if (doDelete) {
                    list_of_folders.forEach(function(item, i, arr) { // проверка существования имени папки в каталоге
                    if (item.id==id_del_folder) {arr[i]="";}
                    });
                    $(thi).closest('.sel').remove();
                    $("#subw_folder_name").html("");
                    localStorage.setItem("list_of_folders",JSON.stringify(list_of_folders));

                    }
              }
 
}



function new_folder(name, parent_id) { // ф-я создания объекта папки
    this.__proto__ = folder;
    this.id = "dir"+(++id_current);
    this.name = name;
    this.parent_id = parent_id;
    this.type_of_file = "dir";
}



 function add_elements_in_subwindow(folder_id){ // ф-я отображения содержимого папки в правом окне subwindow
        $("#subwindow .subw_inner_place").html(""); // очищаем окно
        list_of_folders.forEach(function(item, i, arr) { // добавление списка папок выделенного каталога в правое окно
        if ( item.parent_id == folder_id && item.type_of_file == "dir") {
              $("#div_for_cloning .file.file_dir").clone().attr("data-name",item.name).attr("data-parent", item.parent_id).appendTo("#subwindow .subw_inner_place").find(".file_name").first().html(item.name);
           }
        });
        list_of_folders.forEach(function(item, i, arr) { // добавление списка изображений выделенного каталога в правое окно
        if ( item.parent_id == folder_id && item.type_of_file == "img") {
              $("#div_for_cloning .file.file_img").clone().attr("data-name",item.name).attr("data-parent", item.parent_id).appendTo("#subwindow .subw_inner_place").find(".file_name").first().html(item.name).parent().find("a.a-img").attr("href", item.path+item.name0 ).find("img").attr("src", item.path+item.name0);
              var Img = $("#subwindow .file_img[data-name='"+item.name+"']");
              Img.find(".file_size").html(item.width+" x "+item.height);

           }
        });
        return false;
}

function fun_renameFile(form) { // ф-я переименования каталогов и файлов изображений
 var new_name = form.rename.value;
 var name=$(form).closest(".sel").attr("data-name");
 var parent=$(form).closest(".sel").attr("data-parent");

 if (checking(new_name, parent)) {alert ("Такое имя в каталоге уже существует."); form.rename.value=name; return false;}

 $("[data-name='"+name+"']>details.dir>.in").filter("[data-parent='"+parent+"']>details.dir>.in").html(new_name).focus().closest(".sel").attr("data-name",new_name);
 $("[data-name='"+name+"']>.in").filter("[data-parent='"+parent+"']>.in").html(new_name).focus().closest(".sel").attr("data-name",new_name);
 $("#subw_folder_name").html(new_name);
    function rename_names(d_name) {
            name_is_already_exist=false;
            list_of_folders.forEach(function(item, i, arr) { // проверка существования имени New folder
            //if (item.parent_id==parent && item.name==d_name) item.name=new_name; 
            if (item.parent_id==parent && item.name==d_name) item.name=new_name;
            });
            //return false;
        };
    rename_names(name);

localStorage.setItem("list_of_folders",JSON.stringify(list_of_folders));
return false;
};    



function checking(name, parent) { // проверка существования папки с предложенным именем в текущем каталоге
            var name_is_already_exist=false;
            list_of_folders.forEach(function(item, i, arr) { 
            if (item.parent_id==parent && item.name==name) name_is_already_exist=true; 
            });
            return name_is_already_exist;
        };




function fun_createDir(form) { // ф-я создания новой папки и добавления в массив и в DOM-дерево 
    var dir_name = form.dir_name.value;
    var dir_parent_id = $(form).closest(".folder").attr("id");//id в виде "dir0"
    var p_name = "Новая папка";


    if (checking(dir_name, dir_parent_id)) {alert ("Папка с таким именем уже существует."); return false;}

    if (dir_name=="") {
        dir_name = p_name;
        var is_name = checking(dir_name);
        var n_new=2;
        while (is_name){
            dir_name=p_name+" ("+ n_new++ +")"; is_name=checking(dir_name);        
            }
    }
    var folder = new new_folder(dir_name, dir_parent_id);

    list_of_folders.push(folder); // добавление новой папки в массив
    
    add_elements_in_subwindow(dir_parent_id); // добавление новой папки в правое окно

    $("#div_for_cloning .folder").clone().attr("id", folder.id).attr("data-name",dir_name).attr("data-parent",dir_parent_id).appendTo($(form).closest('.sel').find("details.dir").first()).find("summary.dir_name").html(dir_name).closest(".sel").find("input.rename").attr("value", dir_name);
    form.dir_name.value="";
    localStorage.setItem("list_of_folders",JSON.stringify(list_of_folders));
    //localStorage.setItem("id_current", id_current);

    return false;
}



function print_r(arr, level) {
    var print_red_text = "";
    if(!level) level = 0;
    var level_padding = "";
    for(var j=0; j<level+1; j++) level_padding += "    ";
    if(typeof(arr) == 'object') {
        for(var item in arr) {
            var value = arr[item];
            if(typeof(value) == 'object') {
                print_red_text += level_padding + "'" + item + "' :\n";
                print_red_text += print_r(value,level+1);
        } 
            else 
                print_red_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
        }
    } 

    else  print_red_text = "===>"+arr+"<===("+typeof(arr)+")";
    return print_red_text;
}

