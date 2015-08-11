# THE FOLDERATOR
The Google Apps Script project for manipulate files in simple structure of folders

## INTRO
Let's imagine we have a structure of folders on Google Drive

 - ACTIVE (There is a list of workflow actions)
   - Work
   - Urgent
   - Completed
   - etc
 - CATALOG (There is a list of folders with the files)
  - Item 1
    - File 1_1
    - File 2_2
  - Item 2
    - File 2_1
    - File 2_2
  - etc

We need to append the file to a folder or folders of ACTIVE. For an example `File 1_1` to `Work`. The Folderator does it.

[![Google Drive. Saving a Document in Multiple Folders ](http://img.youtube.com/vi/znzoyFKKjvA/0.jpg)](http://www.youtube.com/watch?v=znzoyFKKjvA)

## How to use
 - Create a Google Apps Script project
 - Add all of this repo files to the project
 - Replace `ID_CATALOG_HERE` & `ID_ACTIVE_FOLDER_HERE` with your folders  `CATALOG` & `ACTIVE` IDs. Their names don't matter.
 - Deploy for `User accesing the web app` & `Anyone`
 - Share the folders `ACTIVE` & `CATALOG` with your collaborators
  
  
