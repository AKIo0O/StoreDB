StoreDB
=======

StoreDB is a [LocalStorage]("http://www.w3schools.com/html5/html5_webstorage.asp") library.

###Installation###

```html
<script src="../StoreDB.js"></script>
```

##Usage##

###Compare###

Now imagine you are designing a database use localstorage include some data as below:

```
username: foo
password: 123456
age: 50
sex: female
telephone: 000-12345678
```

If you use primeval API,you need to code:

```html
<script>
    localStorage.username = foo;
    localStorage.password = 123456;
    localStorage.age = 50;
    localStorage.sex = female;
    localStorage.telephone = 000-12345678;
</script>
```

It is very tedious!

Now if you use StoreDB,you just need to code:
```html
<script>
    var db = new Store();
    var testdb = {
        "username": "foo",
        "password": "123456",
        "age": "50",
        "sex": "female",
        "telephone": "000-12345678"
    }

    db.create(testdb);
</script>
```

As you see,you just need to define a JSON and StoreDB will help you create all the date easily.

#Unfinished#