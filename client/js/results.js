
//navbar
const clientName=document.querySelector('#userConnect');
const signOut=document.querySelector('#signOut')
const Deal=document.querySelector('.Deal');
clientName.innerHTML=localStorage.getItem('username')

//add to favorites-data
const addStarInn=document.querySelector('.addStarInn')
const addSeritaBeach=document.querySelector('.addSeritaBeach')
const addRhodosPalace=document.querySelector('.addRhodosPalace')
const addNovaHotel=document.querySelector('.addNovaHotel')

//remove from favorites
const removeStarInn=document.querySelector('.removeStarInn')
const removeSeritaBeach=document.querySelector('.removeSeritaBeach')
const removeRhodosPalace=document.querySelector('.removeRhodosPalace')
const removeNovaHotel=document.querySelector('.removeNovaHotel')
const favorite=document.querySelector('.favorite')

//add to favorites-by press

addStarInn.addEventListener('click',()=>{
    localStorage.setItem('StarInn','StarInn')
})

addSeritaBeach.addEventListener('click',()=>{
  localStorage.setItem('SeritaBeach','SeritaBeach')
})

addRhodosPalace.addEventListener('click',()=>{
    localStorage.setItem('RhodosPalace','RhodosPalace')
})

addNovaHotel.addEventListener('click',()=>{
  localStorage.setItem('NovaHotel','NovaHotel')
})

//remove from favorites-by press

removeStarInn.addEventListener('click',()=>{
    localStorage.setItem('RemoveStarInn','StarInn')
})

removeSeritaBeach.addEventListener('click',()=>{
  localStorage.setItem('RemoveSeritaBeach','SeritaBeach')
})

removeRhodosPalace.addEventListener('click',()=>{
    localStorage.setItem('RemoveRhodosPalace','RhodosPalace')
})

removeNovaHotel.addEventListener('click',()=>{
  localStorage.setItem('RemoveNovaHotel','NovaHotel')
})