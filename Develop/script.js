const getCurrentHour = () => {
    return moment().format("h a")
}

$(document).ready(function () {
    $('#currentDay').text(moment().format("dddd, MMMM Do"))

    // when document loads we are going grab all tasks by hour from local storage and populate
    let hourNine = JSON.parse(localStorage.getItem('hour9')) || '';
    let hourTen = JSON.parse(localStorage.getItem('hour10')) || '';
    let hourEleven = JSON.parse(localStorage.getItem('hour11')) || '';
    let hourTwelve = JSON.parse(localStorage.getItem('hour12')) || '';
    let hourOne = JSON.parse(localStorage.getItem('hour1')) || '';
    let hourTwo = JSON.parse(localStorage.getItem('hour2')) || '';
    let hourThree = JSON.parse(localStorage.getItem('hour3')) || '';
    let hourFour = JSON.parse(localStorage.getItem('hour4')) || '';
    let hourFive = JSON.parse(localStorage.getItem('hour5')) || '';

    // Fill in the respective <textarea> tags with the description
    $('.text-area-9').text(hourNine.desc ? hourNine.desc : '')
    $('.text-area-10').text(hourTen.desc ? hourTen.desc : '')
    $('.text-area-11').text(hourEleven.desc ? hourEleven.desc : '')
    $('.text-area-12').text(hourTwelve.desc ? hourTwelve.desc : '')
    $('.text-area-1').text(hourOne.desc ? hourOne.desc : '')
    $('.text-area-2').text(hourTwo.desc ? hourTwo.desc : '')
    $('.text-area-3').text(hourThree.desc ? hourThree.desc : '')
    $('.text-area-4').text(hourFour.desc ? hourFour.desc : '')
    $('.text-area-5').text(hourFive.desc ? hourFive.desc : '')


    const currentHour = moment().hour();
    // loop thru the time slots and grab their hour by the id and compare it to the current hour to determine color.
    $(".time-block").each(function (obj, i) {
        let timeBlockTime = parseInt(i.id.split('hour')[1]);

        console.log(i.id.split('hour')[1])
        switch (true) {
            case timeBlockTime === currentHour:
                $(this).removeClass('past')
                $(this).removeClass('future')
                $(this).addClass('current')
                break
            case timeBlockTime < currentHour:
                $(this).removeClass('current')
                $(this).removeClass('future')
                $(this).addClass('past')
                break
            case timeBlockTime > currentHour:
                $(this).removeClass('present')
                $(this).removeClass('past')
                $(this).addClass('future')
                break
        }
    })



    // adding an event listener for all the save buttons to capture their respective text area .siblings() did not work.
    $(".saveBtn-9").on('click', () => {
        let id = $(this).find('#hour9').attr('id')
        let description = $(this).find('.text-area-9').val().trim()
        console.log(description)
        console.log(id)

        localStorage.setItem(id, JSON.stringify({
            hour: id,
            desc: description
        }))

    })
    $(".saveBtn-10").on('click', () => {
        let id = $(this).find('#hour10').attr('id')
        let description = $(this).find('.text-area-10').val().trim()
        console.log(description)
        console.log(id)

        localStorage.setItem(id, JSON.stringify({
            hour: id,
            desc: description
        }))
    })
    $(".saveBtn-11").on('click', () => {
        let id = $(this).find('#hour11').attr('id')
        let description = $(this).find('.text-area-11').val().trim()
        console.log(description)
        console.log(id)

        localStorage.setItem(id, JSON.stringify({
            hour: id,
            desc: description
        }))
    })
    $(".saveBtn-12").on('click', () => {
        let id = $(this).find('#hour12').attr('id')
        let description = $(this).find('.text-area-12').val().trim()
        console.log(description)
        console.log(id)

        localStorage.setItem(id, JSON.stringify({
            hour: id,
            desc: description
        }))
    })
    $(".saveBtn-1").on('click', () => {
        let id = $(this).find('#hour1').attr('id')
        let description = $(this).find('.text-area-1').val().trim()
        console.log(description)
        console.log(id)

        localStorage.setItem(id, JSON.stringify({
            hour: id,
            desc: description
        }))
    })
    $(".saveBtn-2").on('click', () => {
        let id = $(this).find('#hour2').attr('id')
        let description = $(this).find('.text-area-2').val().trim()
        console.log(description)
        console.log(id)

        localStorage.setItem(id, JSON.stringify({
            hour: id,
            desc: description
        }))
    })
    $(".saveBtn-3").on('click', () => {
        let id = $(this).find('#hour3').attr('id')
        let description = $(this).find('.text-area-3').val().trim()
        console.log(description)
        console.log(id)

        localStorage.setItem(id, JSON.stringify({
            hour: id,
            desc: description
        }))
    })
    $(".saveBtn-4").on('click', () => {
        let id = $(this).find('#hour4').attr('id')
        let description = $(this).find('.text-area-4').val().trim()
        console.log(description)
        console.log(id)

        localStorage.setItem(id, JSON.stringify({
            hour: id,
            desc: description
        }))
    })
    $(".saveBtn-5").on('click', () => {
        let id = $(this).find('#hour5').attr('id')
        let description = $(this).find('.text-area-5').val().trim()
        console.log(description)
        console.log(id)

        localStorage.setItem(id, JSON.stringify({
            hour: id,
            desc: description
        }))
    })

})