
$(document).ready(function(){
    let body = $(document).body
    let pushUps = document.querySelector('#pushups')
    let pullUps = document.querySelector('#pullups')
    let chest = document.querySelector('#chest')

    $(pushUps).hide()
    $(pullUps).hide()


    $(chest).on("click", function selectChest(){
        console.log('button clicked!')
        $("#select-focus").html("Chest")
        $(pushUps).show()
        $(pullUps).show()
    })

    $(pushUps).on("click", function addPushups(){
        console.log('button clicked!')
        $(pushUps).hide(1000).appendTo('#main-card').show(1000)
    })

    $(pullUps).on("click", function addPullups(){
        console.log('button clicked!')
        $(pullUps).hide(1000).appendTo('#main-card').show(1000)
    })
    

    

})