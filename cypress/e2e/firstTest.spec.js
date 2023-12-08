/// <reference types="cypress"/>

// const { forEach } = require("cypress/types/lodash")

describe('Test Suite #1', () => {

    beforeEach('Navigate to Main page', ()=> {
        cy.visit('/')
    })
	

	it('Search: Only items that contains keyword, on its name, should be displayed', () => {
        const itemName = 'Tank'
		cy.get('#search'). type(itemName+'{enter}')
		cy.get('.product.name.product-item-name').then(itemNames => {
            cy.wrap(itemNames).should('contain', itemName)
        })
		
	})

    // it('Search', () => {
    //     const itemName = 'TANK'.toLowerCase()
	// 	cy.get('#search'). type(itemName+'{enter}')
	// 	cy.get('.product.name.product-item-name').then(itemNames => {
    //         const itemNamesText = itemNames.text().toLowerCase()
    //         expect(itemNamesText).contain(itemName)
    //     })

    // it.only('Search', () => {
    //     const itemName = 'TANK'.toLowerCase()
	// 	cy.get('#search'). type(itemName+'{enter}')
	// 	cy.get('.product.name.product-item-name').invoke('text').then(itemNames => {
    //         expect(itemNames.toLowerCase()).contain(itemName)
    //     })
    // })

    // it.only('Add Cart Flow', () => {
    //     // cy.get('nav.navigation li.nav-2').trigger()

    //     const cart = {
    //         _items: [
    //         ],
            
    //         get items() {
    //           return this._items;
    //         },
            
    //         addItem: function (name, price, size, color, quantity) {
    //           const item = {
    //             name, 
    //             price, 
    //             size, 
    //             color, 
    //             quantity
    //           };
          
    //           this._items.push(item);
    //         },
    //       };

    //     cy.get('#ui-id-11').click({force: true})
	// 	cy.get('.product.name.product-item-name').eq(0).click()
    //     cy.get('#option-label-size-143-item-169').click()
    //     cy.get('#option-label-color-93-item-57').click()
    //     cy.get('#qty').clear().type('2')
    //     cy.get('#product-addtocart-button').click()

    //     cart.addItem(
    //         cy.get('.product-info-main .page-title-wrapper').invoke('text'),
    //         cy.get('.product-info-main .price').invoke('text'),
    //         cy.get('.product-info-main #option-label-size-143-item-169').invoke('attr', 'option-label'),
    //         cy.get('.product-info-main #option-label-color-93-item-57').invoke('attr', 'option-label'),
    //         cy.get('.product-info-main #qty').invoke('attr', 'value')
    //     )

    //     cy.wait(1500)

    //     const itemName = 'Tank'
	// 	cy.get('#search'). type(itemName+'{enter}')
    //     cy.get('.product-item-info').eq(0).click()
    //     cy.get('#option-label-size-143-item-169').click()
    //     cy.get('#option-label-color-93-item-60').click()
    //     cy.get('#product-addtocart-button').click()


    //     cart.addItem(
    //         cy.get('.product-info-main .page-title-wrapper').invoke('text'),
    //         cy.get('.product-info-main .price').invoke('text'),
    //         cy.get('.product-info-main #option-label-size-143-item-169').invoke('attr', 'option-label'),
    //         cy.get('.product-info-main #option-label-color-93-item-60').invoke('attr', 'option-label'),
    //         cy.get('.product-info-main #qty').invoke('attr', 'value')
    //     )


    //     cy.get('.minicart-wrapper').as('cart').click()
    //     cy.get('@cart').find('.counter-number').should('contain','3')

    //     cy.log(cart.items)
    //     cart.items[0].name.then(text => {
    //         expect(text).to.equal('adsfas')
    //     })
    //     cy.log(cart.items[0].name)
    //     cy.log(cart.items[0].price)
    //     cy.log(cart.items[0].size)
    //     cy.log(cart.items[0].color)
    //     cy.log(cart.items[0].quantity)
	// })

    // it.only('Add Cart Flow', () => {
    //     // cy.get('nav.navigation li.nav-2').trigger()
    //     const tempFile = 'temp.json'
    //     const itemsSentToCart = [{},{}]

    //     //  Search first Item of the "Jacked" category and send to cart
    //     cy.get('#ui-id-11').click({force: true})
	// 	cy.get('.product.name.product-item-name').eq(0).click()
    //     cy.get('#option-label-size-143-item-169').click()
    //     cy.get('#option-label-color-93-item-57').click()
    //     cy.get('#product-addtocart-button').click()

    //    // Log all the specifications of the item sent to cart
    //     cy.get('.product-info-main .page-title-wrapper').invoke('text').then(text => {
    //         itemsSentToCart[0]['title'] = text
    //     })
    //     cy.get('.product-info-main .price').invoke('text').then(text => {
    //         itemsSentToCart[0]['price'] = text
    //     })
    //     cy.get('.product-info-main #option-label-size-143-item-169').invoke('attr', 'option-label').then(text => {
    //         itemsSentToCart[0]['size'] = text
    //     })
    //     cy.get('.product-info-main #option-label-color-93-item-57').invoke('attr', 'option-label').then(text => {
    //         itemsSentToCart[0]['color'] = text
    //     })
    //     cy.get('.product-info-main #qty').invoke('attr', 'value').then(text => {
    //         itemsSentToCart[0]['quantity'] = text
    //     })

    //     // Wait for the server to process the action
    //     cy.wait(1500)

    //     // Search for the "Tank" keyword, find the first displayed item and send that element to cart
    //     const itemName = 'Tank'
	// 	cy.get('#search'). type(itemName+'{enter}')
    //     cy.get('.product-item-info').eq(0).click()
    //     cy.get('#option-label-size-143-item-169').click()
    //     cy.get('#option-label-color-93-item-60').click()
    //     cy.get('#product-addtocart-button').click()


    //     // Log all the specifications of the item sent to cart
    //     cy.get('.product-info-main .page-title-wrapper').invoke('text').then(text => {
    //         itemsSentToCart[1]['title'] = text
    //     })
    //     cy.get('.product-info-main .price').invoke('text').then(text => {
    //         itemsSentToCart[1]['price'] = text
    //     })
    //     cy.get('.product-info-main #option-label-size-143-item-169').invoke('attr', 'option-label').then(text => {
    //         itemsSentToCart[1]['size'] = text
    //     })
    //     cy.get('.product-info-main #option-label-color-93-item-60').invoke('attr', 'option-label').then(text => {
    //         itemsSentToCart[1]['color'] = text
    //     })
    //     cy.get('.product-info-main #qty').invoke('attr', 'value').then(text => {
    //         itemsSentToCart[1]['quantity'] = text
    //     })


    //     cy.writeFile(tempFile, itemsSentToCart)


    //     // Click and confirm the amount of items purchased
    //     cy.get('.minicart-wrapper').as('cart').click()
    //     cy.get('@cart').find('.counter-number').should('contain','2')
 

    //     // Confirm the items sent to cart are the only ones in cart
    //     cy.get('.action.showcart').click()
    //     cy.get('div.block-minicart .product-item-name').invoke('text').then(cartItems => {
    //         cy.readFile(tempFile).then((items) => {
    //             const item1name = items[0].title
    //             const item2name = items[1].title
    //             expect(cartItems.replace(/(\r\n|\n|\r)/gm, "")).contain(item1name.replace(/(\r\n|\n|\r)/gm, ""))
    //             expect(cartItems.replace(/(\r\n|\n|\r)/gm, "")).contain(item2name.replace(/(\r\n|\n|\r)/gm, ""))
    //           })
    //     })

    //     // Delete one item from the cart and confirm its deletion
    //     cy.get('@cart').click()
    //     cy.get('div.block-minicart').find('.product-item').eq(0).find('.secondary').click()
        
    //     cy.wait(500)
    //     cy.get('.action-accept').click()

    //     cy.wait(2000)
    //     cy.get('.action.showcart').click()
    //     cy.get('div.block-minicart .product-item-name').invoke('text').then(cartItems => {
    //         cy.readFile(tempFile).then((items) => {
    //             const item1name = items[0].title
    //             const item2name = items[1].title
    //             expect(cartItems.replace(/(\r\n|\n|\r)/gm, "")).contain(item1name.replace(/(\r\n|\n|\r)/gm, ""))
    //             expect(cartItems.replace(/(\r\n|\n|\r)/gm, "")).not.contain(item2name.replace(/(\r\n|\n|\r)/gm, ""))
    //           })
    //     })

    //     // Confirm the "Proceed to Checkout" button redirects to the payment page
    //     cy.get('@cart').click()
    //     cy.get('#top-cart-btn-checkout').click()

    //     //Confirm the elements to be paid are the ones sent to cart

    //     const itemsToBePaid = []
    //     cy.wait(2000)
    //     cy.get('.block.items-in-cart').click()
    //     cy.get('ol.minicart-items').children().then((child) => {
    //         const selectedItem = {}
    //         cy.wrap(child).as('itemInCart').find('span.toggle').click()
    //         cy.get('@itemInCart').find('.product-item-name').invoke('text').then(text => { selectedItem.title = text })
    //         cy.get('@itemInCart').find('span.value').invoke('text').then(text => { selectedItem.price  = text })
    //         cy.get('@itemInCart').find('.subtotal').invoke('text').then(text => { selectedItem.size  = text })
    //         cy.get('@itemInCart').find('dd.values').first().invoke('text').then(text => { selectedItem.color  = text })
    //         cy.get('@itemInCart').find('dd.values').last().invoke('text').then(text => { selectedItem.quantity  = text })

    //         itemsToBePaid.push(selectedItem);
    //     })

    //     cy.get('#checkout-step-shipping').then(()=>{
    //         let areAllItemsInCart = true
    //         if(itemsSentToCart.length != itemsToBePaid.length) { areAllItemsInCart = false}
    //         else{
    //             itemsSentToCart.forEach( (sentToCart) => {
    //                 let auxCounter = 1
    //                 itemsToBePaid.forEach( (toBePaid, index) => {
    //                     if(sentToCart.title != toBePaid.title){
    //                         cy.log(sentToCart.title != toBePaid.title)
    //                         auxCounter++
    //                         if (auxCounter == itemsToBePaid.length){
    //                             areAllItemsInCart = false
    //                         }
    //                     }
    //                 })
    //             })
    
    //         }
    
    //         expect(areAllItemsInCart).to.be.true
    //     })

    //     // let areAllItemsInCart = true
    //     // if(itemsSentToCart.length != itemsToBePaid.length) { areAllItemsInCart = false}
    //     // else{
    //     //     itemsSentToCart.forEach( (sentToCart) => {
    //     //         let auxCounter = 1
    //     //         itemsToBePaid.forEach( (toBePaid, index) => {
    //     //             if(sentToCart.title != toBePaid.title){
    //     //                 auxCounter++
    //     //                 if (auxCounter == itemsToBePaid.length){
    //     //                     areAllItemsInCart = false
    //     //                 }
    //     //             }
    //     //         })
    //     //     })

    //     // }

    //     // expect(areAllItemsInCart).to.be.true
        

    
	// })


    it.only('Add Cart Flow', () => {
        // cy.get('nav.navigation li.nav-2').trigger()
        const tempFile = 'temp.json'
        const items = [{},{}]

        cy.get('#ui-id-11').click({force: true})
		cy.get('.product.name.product-item-name').eq(0).click()
        cy.get('#option-label-size-143-item-169').click()
        cy.get('#option-label-color-93-item-57').click()
        cy.get('#product-addtocart-button').click()

       
        cy.get('.product-info-main .page-title-wrapper').invoke('text').then(text => {
            items[0]['title'] = text
            items[0]['title'] = items[0]['title'].replace(/(\r\n|\n|\r)/gm, "")
            items[0]['title'] = items[0]['title'].trim()
        })
        cy.get('.product-info-main .price').invoke('text').then(text => {
            items[0]['price'] = text
        })
        cy.get('.product-info-main #option-label-size-143-item-169').invoke('attr', 'option-label').then(text => {
            items[0]['size'] = text
        })
        cy.get('.product-info-main #option-label-color-93-item-57').invoke('attr', 'option-label').then(text => {
            items[0]['color'] = text
        })
        cy.get('.product-info-main #qty').invoke('attr', 'value').then(text => {
            items[0]['quantity'] = text
        })


        cy.wait(1500)

        const itemName = 'Tank'
		cy.get('#search'). type(itemName+'{enter}')
        cy.get('.product-item-info').eq(0).click()
        cy.get('#option-label-size-143-item-169').click()
        cy.get('#option-label-color-93-item-60').click()
        cy.get('#product-addtocart-button').click()

/*
        cy.get('.product-info-main').children().then((child) => {
            cy.wrap(child).as('producInfo').find('span.toggle').click()
            cy.get('@producInfo').find('.page-title-wrapper').invoke('text').then(text => { items[1]['title'] = text })
            cy.get('@producInfo').find('.price').invoke('text').then(text => { items[1]['price'] = text})
            cy.get('@producInfo').find('#option-label-size-143-item-169').invoke('attr', 'option-label').then(text => { items[1]['size'] = text })
            cy.get('@producInfo').find('#option-label-color-93-item-60').invoke('attr', 'option-label').then(text => { items[1]['color'] = text })
            cy.get('@producInfo').find('#qty')text => { items[1]['quantity'] = text })
        })
        */
        cy.get('.product-info-main .page-title-wrapper').invoke('text').then(text => {
            items[1]['title'] = text
            items[1]['title'] = items[1]['title'].replace(/(\r\n|\n|\r)/gm, "")
            items[1]['title'] = items[1]['title'].trim()
        })
        cy.get('.product-info-main .price').invoke('text').then(text => {
            items[1]['price'] = text
        })
        cy.get('.product-info-main #option-label-size-143-item-169').invoke('attr', 'option-label').then(text => {
            items[1]['size'] = text
        })
        cy.get('.product-info-main #option-label-color-93-item-60').invoke('attr', 'option-label').then(text => {
            items[1]['color'] = text
        })
        cy.get('.product-info-main #qty').invoke('attr', 'value').then(text => {
            items[1]['quantity'] = text
        })

        cy.writeFile(tempFile, items)


        cy.get('.minicart-wrapper').as('cart').click()
        cy.get('@cart').find('.counter-number').should('contain','2')
 

        cy.get('.action.showcart').click()
        cy.get('div.block-minicart .product-item-name').invoke('text').then(cartItems => {
            cy.readFile(tempFile).then((items) => {
                const item1name = items[0].title
                const item2name = items[1].title
                expect(cartItems.replace(/(\r\n|\n|\r)/gm, "")).contain(item1name)
                expect(cartItems.replace(/(\r\n|\n|\r)/gm, "")).contain(item2name)
              })
        })

        cy.get('@cart').click()
        cy.get('div.block-minicart').find('.product-item').eq(0).find('.secondary').click()
        
        cy.wait(500)
        cy.get('.action-accept').click()

        cy.wait(1500)
        cy.get('.action.showcart').click()
        cy.get('div.block-minicart .product-item-name').invoke('text').then(cartItems => {
            cy.readFile(tempFile).then((items) => {
                const item1name = items[0].title
                const item2name = items[1].title
                expect(cartItems.replace(/(\r\n|\n|\r)/gm, "")).contain(item1name)
                expect(cartItems.replace(/(\r\n|\n|\r)/gm, "")).not.contain(item2name)
              })
        })

        cy.get('@cart').click()
        cy.get('#top-cart-btn-checkout').click()

        cy.wait(2000)
        cy.get('.block.items-in-cart').click()

        cy.get('ol.minicart-items').children().then((child) => {
            cy.wrap(child).as('itemInCart').find('span.toggle').click()
            cy.get('@itemInCart').find('.product-item-name').invoke('text').then(productTitle => {
                cy.wrap(productTitle).should('contain', items[0].title)
            })
            cy.get('@itemInCart').find('span.value').invoke('text').then(productQuantity => {
                cy.wrap(productQuantity).should('contain', items[0].quantity)
            })
            cy.get('@itemInCart').find('.subtotal').invoke('text').then(productPrice => {
                cy.wrap(productPrice).should('contain', items[0].price)
            })
            cy.get('@itemInCart').find('dd.values').first().invoke('text').then(productSize => {
                cy.wrap(productSize).should('contain', items[0].size)
            })
            cy.get('@itemInCart').find('dd.values').last().invoke('text').then(productColor => {
                cy.wrap(productColor).should('contain', items[0].color)
            })
        })

        cy.get('#checkout-step-shipping').should('exist')
    
	})
})