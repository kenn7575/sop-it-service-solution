export default class setPageTitle{

  static index(page_name){
    document.title = `Udlånsystem | ${page_name}`;
  }

  static edit(page_name, id){
    document.title = `Udlånsystem | ${page_name} ~ ${id}`;
  }

  static new(page_name){
    document.title = `Udlånsystem | ${page_name} - Ny`;
  }

  static default(){
    document.title = `Udlånsystem`;
  }
}
