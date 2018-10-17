$(document).ready(function () {

    $('#welcomeModal').modal('show');

    $("form[name='quiz']").submit(function (e) {
        e.preventDefault();
    }).validate({
        rules: {
            fieldRevolution: {
                required: true
            },
            threeActivities: {
                required: true
            },
            publishDate: {
                required: true
            },
            moleculeChores: {
                required: true
            },
            additionalBenefit: {
                required: true
            }
        },
        messages: {
            fieldRevolution: {
                required: "Please select a scientific field"
            },
            threeActivities: {
                required: "Please select true or false"
            },
            publishDate: {
                required: "Please select a date"
            },
            moleculeChores: {
                required: "Please select a molecule"
            },
            additionalBenefit: {
                required: "Please select an additional benefit"
            },
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parents(".form-group"));
        },
        submitHandler: function (e) {
            let score = 0;
            const question1 = $("input[name='fieldRevolution']:checked").val();
            if (question1 == 'Biology') {
                score++;
            }
            const question2 = $("input[name='threeActivities']:checked").val();
            if (question2 == 'True') {
                score++;
            }
            const question3 = $("input[name='publishDate']:checked").val();
            if (question3 == '1953') {
                score++;
            }
            const question4 = $("input[name='moleculeChores']:checked").val();
            if (question4 == 'Proteins') {
                score++;
            }
            const question5 = $("input[name='additionalBenefit']:checked").val();
            if (question5 == 'Medicine') {
                score++;
            }
            const formGroups = document.getElementsByClassName("form-group");
            if (formGroups)
                $("p#quizScore").text('You got ' + score + ' out of 5 correct');

            $('#quizModal').modal('show');
            e.preventDefault();
        }
    });
});