

    var languages = [ 
        "AtionScript", 
        "AppleScript", 
        "Asp",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "CSS",
        "Html",
        "C++",
        "C#",
        "C" 
        ];

      

               


$(document).ready(function() {
    $( "#birthday" ).datepicker();
    var cities = ["Charlotte", "New York", "Washington DC"];
    $( "#city" ).autocomplete({ source: cities });
    
    $( "#programmingLanguage" ).autocomplete({ source: languages });
});


   
