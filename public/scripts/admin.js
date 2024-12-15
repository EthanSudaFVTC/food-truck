// add new menu items
(async () => {
document.getElementById('add-menu-item').addEventListener('submit', async (e) => {
    e.preventDefault() // prevents page from not showing error
    const newMenuItem = {
        name: document.getElementById('menu-item-name').value, 
        description: document.getElementById('menu-item-description').value, 
        price: document.getElementById('menu-item-price').value, 
        url: document.getElementById('menu-item-url').value
    }
    fetch('api/v1/food-truck/menu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMenuItem)
    })
})

})()
