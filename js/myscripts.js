$(document).ready(function(){
    $('#myTab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
      });

    $('#student-form').css("display", "none");

});

function showEmployee(){
    document.getElementById('employee-form').style.display='block';
    document.getElementById('student-form').style.display='none';
}

function showStudent(){
    document.getElementById('student-form').style.display='block';
    document.getElementById('employee-form').style.display='none';
}


