# Meeting Manager

### Overview
This is a Node.js app designed to help manage meetings for clubs, small organizations, or personal needs. The app allows for the following functionalities:
* Adding new meetings
* Adding, editing, and deleting attendees
* Adding notes associated with that specific meeting

### Tools used
Node, Express, MySQL, Sequelize, Handlebars, Bootstrap, custom CSS, jQuery, Subtle Patterns and Font Awesome for additional styling

### Getting started
Navigate to the app's [homepage](https://meeting-manager-app.herokuapp.com/).

![Meeting Manager Home](./images/home.png)

Add a meeting - this description can be anything you like and will be used to identify the meeting.

<img src="./images/add-meeting.png" alt="add meeting" title="add meeting" width="400" />

Once added, the meeting will be listed under previous meetings.

<img src="./images/meeting-added.png" alt="meeting added" title="meeting added" width="400" />

Clicking on the meeting will navigate to that meeting's page. If it's new, all sections will be blank.

![Meeting Page](./images/meeting.png)

Add attendees to the meeting. This automatically adds them to a list with a status of "awaiting attendee."

<img src="./images/add-attendee.png" alt="add attendee" title="add attendee" width="400" />

<img src="./images/attendee-added.png" alt="attendee added" title="attendee added" width="300" />

Clicking the icons marks the attendee as present or absent.

<img src="./images/status.png" alt="attendee status changed" title="attendee status changed" width="300" />

Clicking the pencil displays options to update attendees. If nothing is entered for the name input, no changes will be made to the person's name. The other two inputs are required.

<img src="./images/update.png" alt="update attendee status" title="update attendee status" width="500" />

Add notes/to-do items associated with the current meeting. <br>
✔️ - Simply crosses out the to do as completed. Clicking again removes this in case the items still needs to be done. <br>
✏️ - Enables editing of note content. <br>
✖️ - Deletes notes upon user confirmation. <br>

<img src="./images/add-note.png" alt="add note" title="add note" width="400" />

<img src="./images/note-added.png" alt="note added" title="note added" width="350" />

### Future updates
The following will be added to expand the app's functionality:
* Ability to edit and delete meetings