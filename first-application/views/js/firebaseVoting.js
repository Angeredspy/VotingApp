function addRestaurant(){
    var database = firebase.database()
    var restaurantRef = database.ref('/restaurants')
    var restaurantInput = document.getElementById('addRestaurant')
    
    var restaurantName = restaurantInput.value
    restaurantInput.value = ''                       
    
    return restaurantRef.push({
        name: restaurantName,
        votes: 0
    })
        .then(function(){
            window.location.reload() // Reloads the data, then issues another get request which reloads the reference
        })
        .catch(function(error){
            console.log(error)
        })
}

function upvote(key){
    console.log(key)
    var database = firebase.database()
    var user = firebase.auth().currentUser
    var userId = user.uid 
    var displayName = user.displayName
    
   // var restaurantVotesRef = database.ref('/restaurants/' + key +'/votes'+ userId)
    var restaurantVotesRef = database.ref('/restaurants')
                                    .child(key)
                                    .child('/votes')
                                    .child(userId)
         restaurantVotesRef.set(displayName)  
                            .then(function(){
                                window.location.reload()
                            }) 
                            .catch(function(error){
                                console.log(error)
                            })
}

function downvote(key){
    console.log(key)
    var database = firebase.database()
    var user = firebase.auth().currentUser
    var userId = user.uid 
    var displayName = user.displayName
    
   // var restaurantVotesRef = database.ref('/restaurants/' + key +'/votes'+ userId)
    var restaurantVotesRef = database.ref('/restaurants')
                                    .child(key)
                                    .child('/votes')
                                    .child(userId)
                                    .remove()
                                    .then(function(){
                                        window.location.reload()
                                    })
                                    .catch(function(error){
                                        console.log(error)
                                    })
                  //restaurantVotesRef.push(userId)  
}