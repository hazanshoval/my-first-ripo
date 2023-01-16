//navbar
const clientName=document.querySelector('#userConnect');
clientName.innerHTML=localStorage.getItem('username');

//remove from favorites
const removeStarInn=document.querySelector('.removeStarInn')
const removeSeritaBeach=document.querySelector('.removeSeritaBeach')
const removeRhodosPalace=document.querySelector('.removeRhodosPalace')
const removeNovaHotel=document.querySelector('.removeNovaHotel')


//add to favorite function
function AddToFavorite(addToFavorites){
    if(localStorage.getItem(`${addToFavorites}`)){
        const hotelName=localStorage.getItem(`${addToFavorites}`)
        document.querySelector(`.${hotelName}`).style.display="flex"
    }}
//use add to favorite function
    AddToFavorite("StarInn")
    AddToFavorite("SeritaBeach")
    AddToFavorite("RhodosPalace")
    AddToFavorite("NovaHotel")


//remove from favorites-by press

removeStarInn.addEventListener('click',()=>{
    localStorage.setItem('RemoveStarInn','StarInn')
    location.reload()
    
})

removeSeritaBeach.addEventListener('click',()=>{
  localStorage.setItem('RemoveSeritaBeach','SeritaBeach')
  location.reload()
})

removeRhodosPalace.addEventListener('click',()=>{
    localStorage.setItem('RemoveRhodosPalace','RhodosPalace')
    location.reload()
})

removeNovaHotel.addEventListener('click',()=>{
  localStorage.setItem('RemoveNovaHotel','NovaHotel')
  location.reload()
})


//remove from favorite function
function RemoveFromFavorite(addToFavorites,removeFromFavorute){
    if(localStorage.getItem(`${removeFromFavorute}`)){
        const hotelName=localStorage.getItem(`${addToFavorites}`)
        document.querySelector(`.${hotelName}`).style.display="none"
        localStorage.removeItem(`${removeFromFavorute}`)
        localStorage.removeItem(`${addToFavorites}`)
    }}

 //use add to favorite function
 RemoveFromFavorite("StarInn","RemoveStarInn")
 RemoveFromFavorite("SeritaBeach","RemoveSeritaBeach")
 RemoveFromFavorite("RhodosPalace","RemoveRhodosPalace")
 RemoveFromFavorite("NovaHotel","RemoveNovaHotel")
