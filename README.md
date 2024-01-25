# My Notes App
### [Live](https://note-app-two-roan.vercel.app/) project

## Overview
This repository contains a simple React application designed for managing notes. The app is comprised of various components that collaboratively offer fundamental note-taking functionality.

## Components
### 1. NoteSubmit
- File: NoteSubmit.js
- Description: Allows users to add new notes through a form with input fields for the note title and description. Submissions trigger the onAddNote function with the note details.
### 2. NoteStatue
- File: NoteStatue.js
- Description: Displays note statistics, including the total number of notes, completed notes, and open (incomplete) notes. A message is displayed if there are no notes.
### 3. NoteList
- File: NoteList.js
- Description: Renders a list of notes based on sorting options. It can sort notes by earliest creation date, latest creation date, or completion status. The sorted notes are displayed using the NoteItem component.
### 4. NoteItem
- File: NoteItem.js
- Description: Represents an individual note with a title, description, delete button, and a checkbox for marking completion. The creation date is also displayed.
### 5. NoteHeader
- File: NoteHeader.js
- Description: Displays the application header, including the title "My Notes" and a dropdown for selecting sorting options. It shows the total number of notes.
### 6. Message
- File: Message.js
- Description: A simple component for displaying messages, utilized in NoteStatue to show a message when there are no notes.
### How to Use
- Clone the repository.
- Install dependencies using npm install.
- Run the app using npm start.
