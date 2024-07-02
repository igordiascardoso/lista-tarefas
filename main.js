$(document).ready(function() {

    $('#add-task-btn').click(function() {
        $('#task-form').slideToggle();
    });

    $('#task-form').on('submit', function(e) {
        e.preventDefault();
        const taskName = $('#task').val().trim();

        if (taskName !== '') {
            const newTask = $(`<li>${taskName}</li>`);
            $('#task-list').append(newTask);
            $('#task').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

});
