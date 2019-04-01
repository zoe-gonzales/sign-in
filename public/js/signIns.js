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
});