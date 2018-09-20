function getT(tag, number) {
    return document.getElementsByTagName(tag)[number];
}

function getC(Class, number) {
    return document.getElementsByClassName(Class)[number];
}

function getId(id) {
    return document.getElementById(id);
}

/*--------------- menu ---------------*/

for (var i = 0; i <= 3; i++) {
    getC('nav__item', i).onclick = function () {
        var cl = '';
        for (var i = 0; i < this.innerHTML.length; i++) {
            if (this.innerHTML[i] == ' ') {
                break;
            }
            cl += this.innerHTML[i];
        }
        for (var i = 0; i <= 3; i++) {
            getC('page', i).style.display = 'none';
        }
        getC(cl, 0).style.display = 'flex';
        getC('nav__item_active', 0).className = 'nav__item';
        this.className = 'nav__item_active';

        getC('wrapper_2', 0).style.height = getT('body', 0).clientHeight + 'px';
    }
}

/*--------------- bikes array ---------------*/

var bikes = [
    {
        name: "Viper E124 G7",
        price: 129.99,
        wheel: 20,
        color: "black",
        year: 2017,
        country: "Germany",
        img: "img/bc0.png"
    }, {
        name: "Whale t1234",
        price: 159.99,
        wheel: 24,
        color: "red",
        year: 2016,
        country: "USA",
        img: "img/bc1.png"
    }, {
        name: "GN-PRO U78",
        price: 199.99,
        wheel: 24,
        color: "orange",
        year: 2017,
        country: "France",
        img: "img/bc2.png"
    }, {
        name: "Rainbow W12",
        price: 299.99,
        wheel: 22,
        color: "colored",
        year: 2015,
        country: "Germany",
        img: "img/bc3.png"
    }, {
        name: "The Shark j200-m",
        price: 99.99,
        wheel: 20,
        color: "brown",
        year: 2016,
        country: "USA",
        img: "img/bc4.png"
    }, {
        name: "Your wheels Q8901",
        price: 189.99,
        wheel: 22,
        color: "red",
        year: 2015,
        country: "France",
        img: "img/bc5.png"
    }, {
        name: "Viper PRO 12w",
        price: 79.99,
        wheel: 20,
        color: "grey",
        year: 2017,
        country: "Germany",
        img: "img/bc6.png"
    }, {
        name: "Whale j12",
        price: 235.99,
        wheel: 24,
        color: "colored",
        year: 2016,
        country: "USA",
        img: "img/bc7.png"
    }, {
        name: "Whale j01-G",
        price: 289.99,
        wheel: 24,
        color: "grey",
        year: 2017,
        country: "France",
        img: "img/bc8.png"
    }, {
        name: "Rainbow L900",
        price: 145.55,
        wheel: 22,
        color: "colored",
        year: 2015,
        country: "Germany",
        img: "img/bc9.png"
    }, {
        name: "The Shark j221-m",
        price: 119.99,
        wheel: 20,
        color: "black",
        year: 2016,
        country: "USA",
        img: "img/bc10.png"
    }, {
        name: "Your wheels Q900",
        price: 189.99,
        wheel: 22,
        color: "black",
        year: 2015,
        country: "France",
        img: "img/bc11.png"
    }, {
        name: "Rainbow W15-mini",
        price: 199.99,
        wheel: 22,
        color: "colored",
        year: 2015,
        country: "Germany",
        img: "img/bc12.png"
    }, {
        name: "Your wheels Q989-nb",
        price: 99.99,
        wheel: 20,
        color: "grey",
        year: 2016,
        country: "USA",
        img: "img/bc13.png"
    }
]

var bikes_copy = bikes;

/*--------------- apply filters ---------------*/

var f = document.forms.filter;

getC('general__aside-apply', 0).onclick = function () {
    bikes = bikes_copy;
    var newBikes = [];

    // ----- price ----- //

    var checkTo = true;
    if (f[1].value == '') {
        f[1].value = 9999;
        checkTo = false;
    }
    for (i in bikes) {
        if (bikes[i].price >= f[0].value && bikes[i].price <= f[1].value) {
            newBikes.push(bikes[i]);
        }
    }
    if (checkTo == false) {
        f[1].value = '';
        checkTo = true;
    }
    bikes = newBikes;

    // ----- size ----- //

    var wheel = []
    for (var i = 2; i <= 4; i++) {
        if (f[i].checked == true) {
            wheel.push(f[i].name);
        }
    }
    if (wheel.length > 0) {
        newBikes = [];
        for (var i in bikes) {
            if (wheel.includes(String(bikes[i].wheel)) == true) {
                newBikes.push(bikes[i]);
            }
        }
    }
    bikes = newBikes;

    // ----- color ----- //

    var color = []
    for (var i = 5; i <= 10; i++) {
        if (f[i].checked == true) {
            color.push(f[i].name);
        }
    }
    if (color.length > 0) {
        newBikes = [];
        for (var i in bikes) {
            if (color.includes(bikes[i].color) == true) {
                newBikes.push(bikes[i]);
            }
        }
    }
    bikes = newBikes;

    // ----- year ----- //

    var year = []
    for (var i = 11; i <= 13; i++) {
        if (f[i].checked == true) {
            year.push(f[i].name);
        }
    }
    if (year.length > 0) {
        newBikes = [];
        for (var i in bikes) {
            if (year.includes(String(bikes[i].year)) == true) {
                newBikes.push(bikes[i]);
            }
        }
    }
    bikes = newBikes;

    // ----- country ----- //

    var country = []
    for (var i = 14; i <= 16; i++) {
        if (f[i].checked == true) {
            country.push(f[i].name);
        }
    }
    if (country.length > 0) {
        newBikes = [];
        for (var i in bikes) {
            if (country.includes(bikes[i].country) == true) {
                newBikes.push(bikes[i]);
            }
        }
    }
    bikes = newBikes;

    // ----- *** ----- //

    if (getC('general__top', 0).style.display == 'none') {
        getC('general__info', 0).style.display = 'none';
        getC('general__top', 0).style.display = 'block';
    }

    var newCount = Math.ceil(bikes.length / 4);

    if (newCount == 0) {
        alert('unfortunately, we have no bicycle with this parameters :(');
        getC('general__aside-reset', 0).click();
        newCount = Math.ceil(bikes_copy.length / 4)
    } else if (newCount < count) {
        for (var i = count; i > newCount; i--) {
            getC('pageNumber', i - 2).style.display = 'none';
        }
    } else if (newCount > count) {
        for (var i = count + 1; i <= newCount; i++) {
            getC('pageNumber', i - 2).style.display = 'block';
        }
    }

    count = newCount;

    getId('general__page-changer1').click();
}

/*--------------- reset filters ---------------*/

getC('general__aside-reset', 0).onclick = function () {
    f[0].value = '';
    f[1].value = '';
    for (var i = 2; i < f.length - 2; i++) {
        if (f[i].checked == true) {
            f[i].checked = false;
        }
    }
    getC('general__aside-apply', 0).click();
}

/*--------------- pages ---------------*/

var count = Math.ceil(bikes.length / 4);

for (var i = 2; i <= count; i++) {
    var page_num = document.createElement('li');
    var page_move = getId('general__page-move');
    page_num.innerHTML = '<a id="general__page-changer' + i + '" href="#">' + i + '</a>';
    page_num.className = 'pageNumber';
    var par = page_move.parentNode;
    par.insertBefore(page_num, page_move);
}

for (var i = 1; i <= count; i++) {
    getId('general__page-changer' + i).onclick = function () {
        for (var i = 1; i <= count; i++) {
            getId('general__page-changer' + i).style.textDecoration = 'none';
            getId('general__page-changer' + i).style.fontWeight = 'normal';
        }
        this.style.textDecoration = 'underline';
        this.style.fontWeight = 'bold';
        for (var img = 0; img <= 3; img++) {
            getC('general__img', img).src = '';
            getC('general__name', img).innerHTML = '';
            getC('general__price', img).innerHTML = '';
        }
        var cof = (this.innerHTML - 1) * 4;
        for (var img = 0; img <= 3; img++) {
            if (cof + img < bikes.length) {
                getC('general__img', img).src = bikes[cof + img].img;
                getC('general__name', img).innerHTML = bikes[cof + img].name;
                getC('general__price', img).innerHTML = bikes[cof + img].price + ' $';
            }
        }
    }
}

window.onload = function () {
    getId('general__page-changer1').click();
}

getId('general__page-changer_b').onclick = function () {
    for (var i = 1; i <= count; i++) {
        var btn = getId('general__page-changer' + i);
        if (btn.innerHTML > 1 && btn.style.textDecoration == 'underline') {
            getId('general__page-changer' + (i - 1)).click();
        }
    }
}

getId('general__page-changer_f').onclick = function () {
    for (var i = count; i >= 1; i--) {
        var btn = getId('general__page-changer' + i);
        if (btn.innerHTML < count && btn.style.textDecoration == 'underline') {
            getId('general__page-changer' + (i + 1)).click();
        }
    }
}

/*--------------- full info ---------------*/

for (var i = 0; i <= 3; i++) {
    getC('general__name', i).onclick = function () {
        getC('general__top', 0).style.display = 'none';
        getC('general__info', 0).style.display = 'flex';
        for (var i in bikes) {
            if (bikes[i].name == this.innerHTML) {
                getC('general__info-img', 0).src = bikes[i].img;
                getC('general__info-name', 0).innerHTML = bikes[i].name;
                getC('general__info-price', 0).innerHTML = bikes[i].price + ' $';
                getC('general__info-wheel', 0).innerHTML = bikes[i].wheel + '"';
                getC('general__info-color', 0).innerHTML = bikes[i].color;
                getC('general__info-year', 0).innerHTML = bikes[i].year;
                getC('general__info-country', 0).innerHTML = bikes[i].country;
            }
        }
    }
}

getC('general__close', 0).onclick = function () {
    getC('general__top', 0).style.display = 'block';
    getC('general__info', 0).style.display = 'none';
}

/*--------------- search ---------------*/

var search = document.forms.search;

for (var i = 0; i < bikes_copy.length; i++) {
    var search__point = document.createElement('li');
    search__point.className = 'search__point';
    getC('search__points', 0).appendChild(search__point);
}

getC('search__btn', 0).onclick = function () {
    for (var i = 0; i < bikes_copy.length; i++) {
        getC('search__point', i).innerHTML = '';
    }
    if (search[0].value == '') {
        alert('fill up the field, please');
    } else {
        for (var i in bikes_copy) {
            if (((bikes_copy[i].name.toLowerCase()).includes(search[0].value.toLowerCase())) == true) {
                for (var iv = 0; iv < bikes_copy.length; iv++) {
                    if (getC('search__point', iv).innerHTML == '') {
                        getC('search__point', iv).innerHTML = bikes_copy[i].name;
                        break;
                    }
                }
            }
        }
        if (getC('search__point', 0).innerHTML == '') {
            alert('unfortunately, the search has given no results');
            search[0].value = '';
        }
    }
}

getC('search-reset__btn', 0).onclick = function () {
    for (var i = 0; i < bikes_copy.length; i++) {
        if (getC('search__point', i).innerHTML == '') {
            break;
        }
        getC('search__point', i).innerHTML = '';
        search[0].value = ''
    }
}

for (var i = 0; i < bikes_copy.length; i++) {
    getC('search__point', i).onclick = function () {
        getC('search__main', 0).style.display = 'none';
        getC('general__info', 1).style.display = 'flex';
        for (var i in bikes_copy) {
            if (bikes_copy[i].name == this.innerHTML) {
                getC('general__info-img', 1).src = bikes_copy[i].img;
                getC('general__info-name', 1).innerHTML = bikes_copy[i].name;
                getC('general__info-price', 1).innerHTML = bikes_copy[i].price + ' $';
                getC('general__info-wheel', 1).innerHTML = bikes_copy[i].wheel + '"';
                getC('general__info-color', 1).innerHTML = bikes_copy[i].color;
                getC('general__info-year', 1).innerHTML = bikes_copy[i].year;
                getC('general__info-country', 1).innerHTML = bikes_copy[i].country;
            }
        }
    }
}

getC('general__close', 1).onclick = function () {
    getC('search__main', 0).style.display = 'block';
    getC('general__info', 1).style.display = 'none';
}

/*--------------- users ---------------*/

var users = [
    {
        login: 'qwe',
        pass: 'qwe',
        name: 'Jack',
        sname: 'Smith',
        sex: 'male',
        age: 25,
        country: 'Ireland'
    }
]

/*--------------- enter ---------------*/

var enter = document.forms.enter

for (var i = 0; i <= 1; i++) {
    getC('header__sign', i).onmousedown = function () {
        this.style.width = '56px';
        this.style.height = '21px';
        this.style.fontSize = '12px';
        this.style.marginLeft = '2px';
        this.style.marginRight = '2px';
    };
    getC('header__sign', i).onmouseout = function () {
        this.style.width = '60px';
        this.style.height = '25px';
        this.style.fontSize = '13px';
        this.style.marginLeft = '';
        this.style.marginRight = '';
    };
    getC('header__sign', i).onmouseup = function () {
        this.style.width = '60px';
        this.style.height = '25px';
        this.style.fontSize = '13px';
        this.style.marginLeft = '';
        this.style.marginRight = '';
    };
}

getId('header__sign_in').onclick = function () {
    if (enter[0].value == 0 || enter[1].value == 0) {
        alert('please, fill up the fields');
    } else {
        for (var i in users) {
            if (users[i].login == enter[0].value && users[i].pass == enter[1].value) {
                getC('header__sign_in', 0).style.display = 'none';
                getC('header__user-info', 0).style.display = 'flex';
                getId('header__user-name').innerHTML = users[i].name + ' ' + users[i].sname;
                getC('info__user-name', 0).innerHTML = users[i].name + ' ' + users[i].sname;
                getC('info__user-age', 0).innerHTML = users[i].age + ' y.o.';
                getC('info__user-sex', 0).innerHTML = users[i].sex;
                getC('info__user-country', 0).innerHTML = users[i].country;
                enter[0].value = '';
                enter[1].value = '';
                check = true;
            }
        }
        if (getC('header__sign_in', 0).style.display != 'none') {
            alert('wrong login or password!');
            enter[0].value = '';
            enter[1].value = '';
        }
    }
}

getId('header__full-info').onclick = function () {
    getC('fullInfo', 0).style.display = 'block';
    getC('wrapper_2', 0).style.display = 'block';
}

getC('reg__close', 0).onclick = function () {
    getC('fullInfo', 0).style.display = 'none';
    getC('wrapper_2', 0).style.display = 'none';
}

getId('header__exit').onclick = function () {
    getC('header__user-info', 0).style.display = 'none';
    getC('header__sign_in', 0).style.display = 'block';
}

/*---------------  ---------------*/
/*---------------  ---------------*/
/*--------------- register ---------------*/

var reg = document.forms.reg

getC('wrapper_2', 0).style.height = getT('body', 0).clientHeight + 'px';

getId('header__sign_up').onclick = function () {
    getC('addNewUser', 0).style.display = 'block';
    getC('wrapper_2', 0).style.display = 'block';
}

getC('reg__close', 1).onclick = function () {
    getC('addNewUser', 0).style.display = 'none';
    getC('wrapper_2', 0).style.display = 'none';
    for (i = 0; i <= 7; i++) {
        if (document.forms.reg[i].type == 'radio') {
            document.forms.reg[i].checked = false;
        } else {
            document.forms.reg[i].value = ''
        }

    }
}

getC('wrapper_2', 0).onmousedown = function () {
    getC('reg__close', 0).click();
    getC('reg__close', 1).click();
}

function user() {
    this.login = login;
    this.pass = pass;
    this.name = name;
    this.sname = sname;
    this.age = age;
    this.sex = sex;
    this.country = country;
}

getC('reg__register', 0).onclick = function () {
    login = reg[0].value
    pass = reg[1].value
    name = reg[2].value
    sname = reg[3].value
    age = reg[4].value
    country = reg[5].value
    if (reg[6].checked == true) {
        sex = reg[6].title
    } else if (reg[7].checked == true) {
        sex = reg[7].title
    } else {
        sex = ''
    }

    if (login == '' || pass == '' || name == '' || sname == '') {
        alert('fill up the required fields, please');
        return;
    }

    var check = true;

    for (var i in users) {
        if (users[i].login == login) {
            alert('this login is already taken. please, choose another one');
            check = false;
        }
    }

    if (check == false) {
        return;
    }

    var x = new user(login, pass, name, sname, age, sex, country)
    users.push(x)

    for (i = 0; i <= 7; i++) {
        if (document.forms.reg[i].type == 'radio') {
            document.forms.reg[i].checked = false;
        } else {
            document.forms.reg[i].value = ''
        }

    }
    getC('reg__close', 1).click()
}

/*--------------- random color ---------------*/

getId('randomColor').onclick = function () {
    getC('about__main', 0).style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')'
}

getId('randomColor').onmouseover = function () {
    this.style.color = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')'
}

/*---------------  ---------------*/
/*---------------  ---------------*/
/*---------------  ---------------*/
