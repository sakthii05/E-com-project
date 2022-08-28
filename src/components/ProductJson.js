 const ProductObject = [
            {
                'id':1,
                'image':'images/orange-jacket1.png',
                'productName':'Orange Jacket',
                'colour':'Orange',
                'size':'L',
                'percent':0.54,
                'amount':65.99,
                'quantity':1,
                'total':35.63
                
            },
            {
                'id':2,
                'image':'images/shoes1.png',
                'productName':'Colourful Shoes',
                'colour':'Multi',
                'size':'L',
                'percent': 0.54,
                'amount':55.99,
                'quantity':1,
                'total':30.23
                
            },
            {
                'id':3,
                'image':'images/yellow-pant1.png',
                'productName':'Banana Yellow Pants',
                'colour':'Yellow',
                'size':'L',
                'percent':1,
                'amount':44.00,
                'quantity':1,
                'total':44.00
           }]
    
 export const AdditionalService = [
     {
        'id':101,
        'heading':'Extended Care',
        'description':'One year of additional care',
        'charges':10.00,
        'checked':false,
        'includecharges':''
    },
    {
        'id':102,
        'heading':'No Plastic Packaging',
        'description':'Add some tip for earth care',
        'charges':5.00,
        'checked':false,
        'includecharges':''
    },
    {
        'id':103,
        'heading':'Extre Return',
        'description':'30 days more for return',
        'charges':5.00,
        'checked':false,
        'includecharges':''
    },
]

export const delivery =[
   
    {
        'id':201,
        'image':'images/dpd.png',
        'heading':'DPD Deliveries',
        'description':'Expected delivery:',
        'date':'Friday,28',
        'amount':6.50,
        'checked':false
    },
    {
        'id':202,
        'image':'images/fedex-.png',
        'heading':'UPS Deliveries',
        'description':'Expected delivery:',
        'date':'Friday,28',
        'amount':7.50,
        'checked':false
    }, 
    {
        'id':203,
        'image':'images/ups.png',
        'heading':'FedEx Fast Delivery',
        'description':'Expected delivery:',
        'date':'Friday,28',
        'amount':9.50,
        'checked':false
    },
    {
        'id':204,
        'image':'images/Box.png',
        'heading':'Collect in person',
        'description':'Expected delivery:',
        'date':'Thursday,27',
        'amount':'FREE',
        'checked':false
    },        
]
        
export default ProductObject