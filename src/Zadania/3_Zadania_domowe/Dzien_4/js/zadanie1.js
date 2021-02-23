$(function () {
    let spinnerValue = $('#spinnerValue');
    console.log(spinnerValue)

    let buttonUp = $('.fa-arrow-circle-up');
    console.log(buttonUp)

    let buttonDown = $('.fa-arrow-circle-down');
    let min = $('#min');
    let max = $('#max');
    let step = $('#step')


    console.log(buttonDown)
    console.log(min)
    console.log(max)

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
        min.attr('value', min.value);
        max.attr('value', max.value);
        step.attr('value', step.value);
    })
})