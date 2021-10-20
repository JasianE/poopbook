async function acceptRequest(user, friend){
    const userFriend = {
        user: user.username, 
        friend: friend
    } 
    try{
        const request = await fetch('https://glacial-tor-90347.herokuapp.com/add', {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(userFriend)
        })
        const data = request.json()
        console.log(data)
    } catch(err){
        alert(err)
    }
}

export default acceptRequest