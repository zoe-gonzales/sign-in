$(document).ready(function(){
    $('#add-attendee').on('submit', function(event){
        event.preventDefault();

        var newAttendee = {
            name: $('#add-attendee [name=attendee]').val().trim(),
            onList: 1,
            signedIn: 0
        }

        $.ajax('/api/signins', {
            method: 'POST',
            data: newAttendee
        }).then(function(){
            location.reload();
        });

    });

    $(document).on('click', '.update', function(){
        var itemToUpdate = $(this).data('type');

        var id = $(this).data('id');

        var updatedAttendee = {};

        switch (itemToUpdate){
            case 'editName':
                // updatedAttendee.name = $(this)
            break;
            case 'present':
                updatedAttendee.signedIn = 1;
            break;
            case 'absent':
                updatedAttendee.onList = 0;
            break;
        }

        $.ajax('/api/signins/' + id, {
            method: 'PUT',
            data: updatedAttendee
        }).then(function(){
            location.reload();
        });
        
    });
});