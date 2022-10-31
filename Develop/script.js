const getCurrentHour = () => {
    return moment().format("h a")
}


$(document).ready(function () {
    $('#currentDay').text(moment().format("dddd, MMMM Do"))

    // adding an event listener for all the save buttons to capture their respective text area .siblings() did not work.
    $(".saveBtn-9").on('click', () => {
        let description = $(this).find('.text-area-9').val().trim()
        console.log(description)
    })
    $(".saveBtn-10").on('click', () => {
        let description = $(this).find('.text-area-10').val().trim()
        console.log(description)
    })
    $(".saveBtn-11").on('click', () => {
        let description = $(this).find('.text-area-11').val().trim()
        console.log(description)
    })
    $(".saveBtn-12").on('click', () => {
        let description = $(this).find('.text-area-12').val().trim()
        console.log(description)
    })
    $(".saveBtn-1").on('click', () => {
        let description = $(this).find('.text-area-1').val().trim()
        console.log(description)
    })
    $(".saveBtn-2").on('click', () => {
        let description = $(this).find('.text-area-2').val().trim()
        console.log(description)
    })
    $(".saveBtn-3").on('click', () => {
        let description = $(this).find('.text-area-3').val().trim()
        console.log(description)
    })
    $(".saveBtn-4").on('click', () => {
        let description = $(this).find('.text-area-4').val().trim()
        console.log(description)
    })
    $(".saveBtn-5").on('click', () => {
        let description = $(this).find('.text-area-5').val().trim()
        console.log(description)
    })

})