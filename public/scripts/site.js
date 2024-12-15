(async () => {

    // add menu items to the webpage

    const menu = document.getElementById("menu-items");

    try {
        const response = await fetch('/api/v1/food-truck/menu');
        const menuItems = await response.json();

        menuItems.forEach(item => {
            const menuItemsDiv = document.createElement('div');
            menuItemsDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>Price: $${item.price}</p>
                <img src="${item.url}" alt="${item.name}" width="300" />
            `;
            menu.appendChild(menuItemsDiv);
        });
    } catch (error) {
        console.error('Error fetching menu items:', error);
    }





    // add events to the webpage

    const events = document.getElementById("event-list");

    try {
        const response = await fetch('/api/v1/food-truck/events');
        const eventsList = await response.json();

        eventsList.forEach(item => {    

            const eventsDiv = document.createElement('div');
            eventsDiv.innerHTML = `
                <h3><a href="/event/${item._id}">${item.name}</a></h3>
                <p>${item.location}</p>
                <p>${item.date}</p>
                <p>${item.time}</p>
            `;
            events.appendChild(eventsDiv);
        });
    } catch (error) {
        console.error('Error fetching events:', error);
    }





    


    // add new menu items
    // try{
    //     document.getElementById('add-menu-item').addEventListener('submit', async () => {
    //         const newMenuItem = {
    //             name: document.getElementById('menu-item-name').value, 
    //             description: document.getElementById('menu-item-description').value, 
    //             price: parse(document.getElementById('menu-item-price').value), 
    //             url: document.getElementById('menu-item-url').value
    //         }
    //         await fetch('api/v1/food-truck/menu', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(newMenuItem)
    //         })
    //     })
        
    // }catch(ex){
    //     console.log(ex)
    // }


    // add new events



    

})();