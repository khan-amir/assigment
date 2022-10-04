const express = require('express');
const app = express()


app.use(express.json());

// assuming this is existing phone number
const customers = [{
    phone_number : "123456789"
    }
    ];

const checkDuplicatePhoneNumber = (user) => {
    const customer_index = customers.findIndex((customer) => customer.phone_number === user.phone_number);
    
    if (customer_index > -1) {
        return 'Phone number already exists.'
    }
    else {
        customers.push(user)
    }
    return customers;
};

app.post('/', (req, res) => {
    
    // get the user phone number from the query paramareter
    const user_number = req.body;

    // condition: if user_number not provided then send the response to ask provide a number;
    //  with status code 400(bad request)
    if (!user_number.phone_number){
        return res.status(400).send('Please provide phone number.')
    }
    
    const result = checkDuplicatePhoneNumber(user_number);
    // return the phone number added with status code 201.
    return res.status(201).send(result)
    
})

app.get('/', (req, res) => {
    res.send('hello api')
})



app.listen(3000, () => console.log('listening on port 3000...'))