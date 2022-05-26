




   
    document.getElementById('submit').addEventListener('click',() => {
        fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.display').innerHTML = `<p id="text">${data.activity}</p>
                                                            <p id="text1">${data.type}</p>                                    `
            

        }

        )
    }
    
    
    )
    
 