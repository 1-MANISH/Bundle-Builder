
// data
let products = [
        {
                id:1,
                title:"Tie-Dye-Lounge Set",
                price:150,
                image:"assets/images/product-image-1.jpg",
                added:false
        },
        {
                id:2,
                title:"Tie-Dye-Lounge Set",
                price:150,
                image:"assets/images/product-image-2.jpg",
                  added:false
        },
        {
                id:3,
                title:"Tie-Dye-Lounge Set",
                price:150,
                image:"assets/images/product-image-3.jpg",
                  added:false
        },
        {
                id:4,
                title:"Tie-Dye-Lounge Set",
                price:150,
                image:"assets/images/product-image-4.jpg",
                  added:false
        },
         {
                id:5,
                title:"Tie-Dye-Lounge Set",
                price:150,
                image:"assets/images/product-image-5.jpg",
                  added:false
        },
        {
                id:6,
                title:"Tie-Dye-Lounge Set",
                price:150,
                image:"assets/images/product-image-6.jpg",
                  added:false
        },

]
let productBundle = []
let cart = []

//  dom elements
const productGrid = document.getElementById("productGrid")
const selectedItems = document.getElementById("selectedItems")
const progressFill = document.getElementById("progressFill")
const progressText = document.getElementById("progressText")
const discountText = document.getElementById("discount")
const subtotalText = document.getElementById("subtotal")
const checkoutBtn = document.getElementById("checkoutBtn")
const message = document.getElementById("message")

//helper functions

function ShowProducts(products){

        productGrid.innerHTML = ""

        products.forEach((product) => {
                const productCard = document.createElement("div")
                productCard.setAttribute('data-title',product.title)
                productCard.setAttribute('data-price',product.price)
                productCard.classList.add("productCard")

                productCard.innerHTML = `
                        <div class="productImage">
                                <img 
                                        src=${product.image}
                                        alt=${product.title}
                                />
                        </div>
                        <h4>${product.title}</h4>
                        <p>$${product.price}</p>
                        <button class="addToBundleBtn ${product.added ? "addedBundle" : ""}" onClick="addToBundle(${product.id})">
                                <span class="addToBundleText">${product.added ? "Added to bundle" : "Add to Bundle"}</span>
                                <img class="addToBundleIcon"  src="assets/icons/${product.added ? "Check" : "Plus"}.svg" width="24" height="24" alt="Add to Bundle" ></img>
                        </button>
                `

                productGrid.appendChild(productCard)

        })
}

function addToBundle(id){
        let product = products.find((product) => product.id === id)
        if(productBundle.find((product) => product.id === id)) {
                productBundle = productBundle.filter((product) => product.id !== id)
                product.added = false
        }else{
                productBundle.push({...product,quantity:1})
                product.added = true
        }
        ShowProducts(products)
        
        ShowBundle(productBundle)
}

function ShowBundle(productBundle){

        let total =  productBundle.length
        let totalPrice = 0;
        let discountPrice = 0

        selectedItems.innerHTML = ""

        productBundle.forEach((p)=>{
                totalPrice += p.price*p.quantity
                const selectItem = document.createElement("div")
                selectItem.classList.add("selectItem")
                selectItem.innerHTML = `
                <div class="itemImage">
                         <img src=${p.image} alt=${p.title}> 
                </div>
                 <div class="itemDetails">
                          <h4 class="itemTitle">${p.title}</h4>
                         <p class="itemPrice">$${p.price}</p>
                         <div class="addDelete">
                                 <div class="add">
                                        <button onClick="decreaseQuantity(${p.id})">-</button>
                                        <span>${p.quantity}</span>
                                        <button onClick="increaseQuantity(${p.id})">+</button>
                                </div>
                                <div class="delete" onClick="removeFromBundle(${p.id})">
                                         <img src="assets/icons/deleteIcon.svg" width="24" height="24" class="deleteIcon" alt="Delete"/>
                                </div>
                        </div> 
                 </div>
                `
                selectedItems.appendChild(selectItem)
        })

        for(let i = 1 ; i<=3-total;i++){
                const selectItem = document.createElement("div")
                selectItem.classList.add("selectItem")
                selectItem.innerHTML = `
                <div class="itemImage">
                        
                </div>
                 <div class="itemDetails" style="background-color: #eee;">
                        
                 </div>
                `
                 selectedItems.appendChild(selectItem)
        }
        progressText.textContent = `${productBundle.length}/3 items`;

        if(productBundle.length >= 3 ){
                checkoutBtn.disabled = false
                discountPrice = totalPrice * 0.3
                discountText.innerHTML = `-$${discountPrice.toFixed(2)} (30% )`
                checkoutBtn.classList.remove("disabled")
                checkoutBtn.style.backgroundColor = "black"
                checkoutBtn.style.color = "white"
        }else{
                  discountText.innerHTML = `$${discountPrice.toFixed(2)} (30% )`
                checkoutBtn.classList.add("disabled")
                checkoutBtn.disabled = true
                checkoutBtn.style.backgroundColor = "#666"
                checkoutBtn.style.color = "black"

                
               
        }
        const percentage = Math.min((productBundle.length / 3) * 100, 100)
        progressFill.style.width = percentage + "%"
        subtotalText.innerHTML = `$${(totalPrice- discountPrice).toFixed(2)}`

}

function removeFromBundle(id){
        console.log(productBundle);
        productBundle = productBundle.filter((product) => product.id !== id)
        products = products.map((product) => product.id === id ? {...product, added:false} : product)
        ShowProducts(products)
        ShowBundle(productBundle)
}

function checkout(){
        checkoutBtn.innerHTML=""
        checkoutBtn.innerHTML = `
           <span class="addToBundleText"> Added to Cart </span>
                <img src="assets/icons/Check.svg" width="20" height="20"></img>
        `
        setTimeout(() => {
                checkoutBtn.innerHTML = `
                  <span class="addToBundleText">Add 3 items to proceed</span>
                <img src="assets/icons/CaretRight.svg" width="20" height="20"></img>
                `

                message.innerHTML=""
                message.innerHTML = `
                 <p id="msg " class="success"> Successfully ${productBundle.length} items added to cart 👍</p>
                `
                productBundle = []
                products = products.map((product) => ({...product, added:false}))
                ShowBundle(productBundle)
                ShowProducts(products)
        }, 1500)

        setTimeout(() => {
                message.innerHTML=""
        }, 3000)

        
}


function increaseQuantity(id){
        productBundle = productBundle.map((product) => product.id === id ? {...product, quantity:product.quantity+1} : product)
        ShowBundle(productBundle)
}
function decreaseQuantity(id){
        productBundle = productBundle.map((product) =>{
                if(product.id === id && product.quantity > 1){
                        return {...product, quantity:product.quantity-1}
                }
                return product
        })
        ShowBundle(productBundle)
}



ShowProducts(products)
ShowBundle(productBundle)