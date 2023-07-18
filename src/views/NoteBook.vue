<template>
    <div class="container section-padding">
        <div class="notebook">
        <h1>নো<span>ট বু</span>ক</h1>
        <div class="note-save-button">
          <textarea v-model="note" placeholder="আপনার নোট এখানে লিখুন !" required></textarea>
          <!-- Add a span element to show the required message -->
         <span v-if="requiredMessage" class="required">{{ requiredMessage }}</span>
          <button type="submit" @click="saveNote" class="btn btn-primary float-end">Save</button>
        </div>
            <div v-for="(savedNote, index) in savedNotes" :key="savedNote.id" class="saved-note">
                
                <p>{{ savedNote.content }}</p>

                <!-- Move the buttons to the saved notes -->

                <div class="buttons">
                    <button @click="editNote(savedNote.id)" class="btn btn-warning">Edit</button>
                    <button @click="deleteNote(savedNote.id)" class="btn btn-danger">Delete</button>
                    <button @click="updateNote(savedNote.id)" class="btn btn-success">Update</button>
                    <!-- Add a copy button to copy the note content -->
                    <!-- Use the copyStatus property to change the button text -->
                    <button @click="copyNote(savedNote.id)" class="btn btn-info">{{ copyStatus[savedNote.id] }} </button> 
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      title: "My Notebook",
      note: "",
      savedNotes: [],
      requiredMessage: "",
      // Add a copyStatus property to store the copy status of each note
      copyStatus: {},
    };
  },
  mounted() {
    // Load the notes from the local storage
    this.savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    // Initialize the copy status of each note to "Copy"
    this.savedNotes.forEach((savedNote) => {
      this.copyStatus[savedNote.id] = "Copy";
    });
  },
  methods: {
    saveNote() {
      // Check if the textarea is not empty
      if (this.note) {
        // Create a new note object with a unique id and the content
        const newNote = {
          id: Date.now(),
          content: this.note,
        };
        // Add the new note to the saved notes array
        this.savedNotes.push(newNote);
        // Save the notes array to the local storage
        localStorage.setItem("notes", JSON.stringify(this.savedNotes));
        // Clear the note and the required message
        this.note = "";
        this.requiredMessage = "";
        // Set the copy status of the new note to "Copy"
        this.copyStatus[newNote.id] = "Copy";
      } else {
        // Set the required message
        this.requiredMessage = "নোট সংযুক্ত করার পূর্বে কিছু লিখুন !";
      }
    },
    editNote(noteId) {
      // Find the note to edit by its id
      const noteToEdit = this.savedNotes.find(
        (savedNote) => savedNote.id === noteId
      );
      // Load the note content to the textarea
      this.note = noteToEdit.content;
    },
    deleteNote(noteId) {
      // Filter out the note to delete by its id
      this.savedNotes = this.savedNotes.filter(
        (savedNote) => savedNote.id !== noteId
      );
      // Save the updated notes array to the local storage
      localStorage.setItem("notes", JSON.stringify(this.savedNotes));
      // Delete the copy status of the deleted note
      delete this.copyStatus[noteId];
    },
    updateNote(noteId) {
      // Find the index of the note to update by its id
      const indexToUpdate = this.savedNotes.findIndex(
        (savedNote) => savedNote.id === noteId
      );
      // Check if the textarea is not empty
      if (this.note) {
        // Update the note content in the saved notes array
        this.savedNotes[indexToUpdate].content = this.note;
        // Save the updated notes array to the local storage
        localStorage.setItem("notes", JSON.stringify(this.savedNotes));
        // Clear the note and the required message
        this.note = "";
        this.requiredMessage = "";
        // Reset the copy status of the updated note to "Copy"
        this.copyStatus[noteId] = "Copy";
      }
    },
    copyNote(noteId) {
      // Find the note to copy by its id
      const noteToCopy = this.savedNotes.find(
        (savedNote) => savedNote.id === noteId
      );
      // Copy the note content to the clipboard using the navigator.clipboard API
      navigator.clipboard.writeText(noteToCopy.content).then(
        () => {
          // Change the copy status of the copied note to "Copied"
          this.copyStatus[noteId] = "Copied";
        },
        (error) => {
          alert("Copy failed: " + error);
        }
      );
    },
  },
};
  </script>
  
  <style scoped>
  .container{
    max-width: 800px;
    margin: auto;
    padding: 50px 0;
  }
  .section-padding{
    padding: 20px;
  }
  .notebook {
    width: 100%;
    margin-bottom: 50px;
  }
  
  .notebook h1 {
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .notebook span{
    color: crimson;
  }
  
  .notebook textarea {
    margin-bottom: 10px;
    padding: 15px 15px;
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 200px;
  }
  textarea:focus{
    outline: none;
  }
  .notebook .saved-note {
    margin-top: 20px;
    border: 1px dashed #116A7B;
    padding: 10px;
    background: #fff;
  }
  .note-save-button {
      margin-bottom: 55px;
  }
  
  .notebook .saved-note h2 {
    color: green;
  }
  
  .notebook .buttons {
    display: flex;
    justify-content: space-between;
  }



   /* Responsive for Mobile View */
  
   @media only screen and (max-width: 667px){
    .section-padding{
        padding: 20px 10px;
    }
   }




  </style>