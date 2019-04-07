$(document).ready(function(){
    $('#add-attendee').on('submit', function(event){
        event.preventDefault();
        var meetingId = $(this).data('meetingid');

        var newAttendee = {
            name: $('#add-attendee [name=attendee]').val().trim(),
            onList: 1,
            signedIn: 0,
            MeetingId: meetingId
        }
        
        $('#add-attendee [name=attendee]').val('');

        $.ajax('/api/signins', {
            method: 'POST',
            data: newAttendee
        }).then(function(){
            location.reload();
        });
    });

    $(document).on('click', '.quick-update', function(){
        var itemToUpdate = $(this).data('type');
        var id = $(this).data('id');    
        var updatedAttendee = {}; 

        switch (itemToUpdate){
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

    $(document).on('click', '.update', function(){
        $('#update').modal('show');
        var id = $(this).data('id');     
        getUpdates(id);
    });
    
    function getUpdates(idWhere){
        $('#saveChanges').on('click', function(dataToSend){
            dataToSend = {};
            var updatedName = $('#newName').val().trim();
            var onList = $('input[name=onlist]:checked').val();
            var present = $('input[name=present]:checked').val();
    
            if (onList === undefined || present === undefined){
                alert('Please select one of the choices or close.');
            } else if (!updatedName){
                dataToSend.onList = parseInt(onList);
                dataToSend.signedIn = parseInt(present);
            } else {
                dataToSend.name = updatedName;
                dataToSend.onList = parseInt(onList);
                dataToSend.signedIn = parseInt(present);
            }

            console.log(dataToSend);
            $.ajax('/api/signins/' + idWhere, {
                method: 'PUT',
                data: dataToSend
            }).then(function(){
                location.reload();
            });
        });
    }
    
    $(document).on('click', '.btn-delete', function(){
        var deleteAttendee = confirm('Are you sure you want to delete this attendee?');
        var id = $(this).data('id');
        console.log(deleteAttendee);
        if (deleteAttendee) {
            $.ajax('/api/signins/' + id, {
                method: 'DELETE'
            }).then(function(){
                location.reload();
            });
        }
    });

    $('#add-text').on('click', function(e){
        e.preventDefault();
        var meetingId = $(this).data('meetingid');

        var newNote = {
            text: $('#text').val(),
            MeetingId: meetingId
        }

        $.ajax('/api/notes', {
            method: 'POST',
            data: newNote
        }).then(function(){
            location.reload();
        });
    });

    $('#add-meeting').on('submit', function(e){
        e.preventDefault();
        var desc = $("#add-meeting [name=meeting]").val().trim();
        console.log(desc);

        var newMeeting = {
            description: desc
        }

        $.ajax('/api/meetings', {
            method: 'POST',
            data: newMeeting
        }).then(function(){
            location.reload();
        });
    });
});