var btn_value = document.querySelector('#club-container');
btn_value.addEventListener('click', getValue)

var favclub = JSON.parse(localStorage.getItem('fav')) || []


function getValue(e) {


    if (e.target != e.currentTarget) {
        var value = e.target.value;
        alert(value)
        e.target.style.background = '#e90052'


        favclub.push(value)
        localStorage.setItem('fav', JSON.stringify(favclub))


    }
    e.stopPropagation()
}

function next() {
    location.assign('prefe.html')

}

var other_club_div = document.getElementById('others')
other_club_div.style.display = 'none'

function otherclub() {
    other_club_div.style.display = 'grid'

}