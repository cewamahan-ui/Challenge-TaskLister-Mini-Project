document.addEventListener('DOMContentLoaded', function() {
    
    // Grab the form element
    const taskForm = document.getElementById('create-task-form');
    
    // Handle form submission
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();  // prevent page reload
        
        // Get user input
        const taskInputField = document.getElementById('new-task-description');
        const taskDescription = taskInputField.value.trim(); // trim whitespace just in case
        
        // Basic validation - can't add empty tasks
        if (!taskDescription) {
            alert('Please enter a task description!');
            return;
        }
        
        // Add the task
        createNewTask(taskDescription);
        
        // Reset input
        taskInputField.value = '';
        taskInputField.focus(); // handy for quick task entry
    });
    
    // Function to create and add new task
    function createNewTask(description) {
        const taskContainer = document.getElementById('tasks');
        
        // Create list item
        const taskItem = document.createElement('li');
        taskItem.textContent = description;
        
        // Create delete button - I like having this option
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Delete';
        removeButton.style.marginLeft = '10px'; // quick spacing
        
        // Delete functionality
        removeButton.addEventListener('click', function() {
            // Could add confirmation dialog here if needed
            taskItem.remove();
        });
        
        // Append button to task
        taskItem.appendChild(removeButton);
        
        // Add to the list
        taskContainer.appendChild(taskItem);
    }
    
    // Note: Consider adding localStorage to persist tasks
    
});