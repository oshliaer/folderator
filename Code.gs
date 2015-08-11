var CATALOG = 'ID_CATALOG_HERE';
var ACTIVE = 'ID_ACTIVE_FOLDER_HERE';

function doGet(e) {
  var hs = HtmlService.createTemplateFromFile('index');
  return hs.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).setSandboxMode(HtmlService.SandboxMode.IFRAME).getContent();
}

function getFolders(folderName){
  var query = "'" + ACTIVE + "' in parents";
  var folders = DriveApp.searchFolders(query);
  var res = {active:[], catalog:[]};
  while(folders.hasNext()){
    var folder = folders.next();
    var element = {
      name:folder.getName(),
      id:folder.getId()
    }
    res.active.push(element);
  }
  if(folderName){
    query = "'" + CATALOG + "' in parents and title contains '" + folderName + "'";
    var folders = DriveApp.searchFolders(query);
    while(folders.hasNext()){
      var folder = folders.next();
      var element = {
        name:folder.getName(),
        id:folder.getId()
      }
      res.catalog.push(element);
    }
  }
  return res;
}
function getFiles(folder){
  var files = DriveApp.searchFiles("'" + folder.id + "' in parents" );
  var res = [];
  while(files.hasNext()){    
    var file = files.next();
    var element = {
      name:file.getName(),
      id:file.getId(),
      url: file.getUrl(),
      mime : file.getMimeType(),
      parents: getParentsInfo(file.getParents())
    }
    res.push(element);
  }
  return res;
}

function getParentsInfo(parents){
  var res = [];
  while(parents.hasNext()){
    var parent = parents.next();
    res.push(parent.getId());
  }
  return res;
}

function changeParent(p){
  var file = DriveApp.getFileById(p.file.id);
  var parents = getParentsInfo(file.getParents());
  var pos = parents.indexOf(p.parentId);
  if(pos == -1){
    DriveApp.getFolderById(p.parentId).addFile(file);
    parents.push(p.parentId);
  }else{
    DriveApp.getFolderById(p.parentId).removeFile(file);
    parents.splice(pos, 1); 
  }
  return {id: p.file.id, parents: parents}
}
