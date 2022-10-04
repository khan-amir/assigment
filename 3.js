const customers = [{
    email : "anurag11@yopmail.com" ,
    name : "anurag"
    },
    {
    email : "sameer11@yopmail.com" ,
    name : "sameer"
    },
    {
    email : "ravi11@yopmail.com" ,
    name : "ravi"
    },
    {
    email : "akash11@yopmail.com" ,
    name : "akash"
    },
    {
    email : "anjali11@yopmail.com" ,
    name : "anjai"
    },
    {
    email : "santosh11@yopmail.com" ,
    name : "santosh"
    },
    ]

new_customer = {
        email : "santosh11@yopmail.com" ,
        name : "new santosh udpate"
        }

const result = (user) => {
    const customer_index = customers.findIndex((customer) => customer.email === user.email);
    
    if (customer_index > -1) {
        customers[customer_index].name = user.name;
    }
    else {
        customers.push(user)
    }
    return customers;
};


console.log('result', result(new_customer));