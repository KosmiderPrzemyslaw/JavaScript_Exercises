$(function () {
    let spinnerValue = $('#spinnerValue');
    console.log(spinnerValue)

    let buttonUp = $('.fa-arrow-circle-up');
    console.log(buttonUp)

    let buttonDown = $('.fa-arrow-circle-down');
    var min = $('.table-striped').find('input #min');
    var max = $('#max');
    var step = $('#step');

    var inputMin = $(min.value)
    console.log(inputMin)


    spinnerValue.value = 0;
    $(buttonUp).on('click', function () {
        spinnerValue.value = (spinnerValue.value += 1);
        spinnerValue.attr('value', spinnerValue.value)

    })

    $(buttonDown).on('click', function () {
        spinnerValue.value = (spinnerValue.value -= 1);
        spinnerValue.attr('value', spinnerValue.value)
    })

    let saveSettings = $('.saveSettings')
    $(saveSettings).on('click', function () {
        // min.attr('value', min.input);
        // max.attr('value', max.input);
        // step.attr('value', step.input);

        console.log(min.value)
    })
})