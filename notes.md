# Middleware Notes

# Jargon

Refactoring - changing the way the code is written without changing the functionality (to help make it easier to read or understand).



# Middleware:
    
    2 types
        - normal
        - error handling

    Can come from  different sources:
        - built-in: included with express
        - third party: need to be installed separately
        - custom: you write it
    
    Can be used:
        - globally: it runs on every 'req' to any endpoint
        - locally: is only applied to a specific endpoint or groups of endpoints
    
    middleware can:
        - inspect the 'request' and 'response' objects
        - make changes to the 'req' and 'res' objects
        - move the 'req' or 'res' object to the 'next' middleware in the queue
        - stop the 'req' and send back a 'res' to the client

    * order matters *

