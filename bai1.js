let regex = /[DT][0-9]+/g;

let data = [
    '500',
    'D300',
    'T4000',
    'T'
]

data.map(str => {
    if (str.match(regex)) {
        console.log(str); 
    }
})

let data1 = [
    'gray',
    'grey',
    'groy',
    'goei',
]
data1.map(str=> {
    if (str.match(/gr[a,e]/g)) {
        console.log(str);
    }
})

let data2 = [
    'this is a dog',
    'this is a doy123',
    'this is a dog213'
];

// /b là đại diện cho ranh giới giữa 1 ký tự \w và 1 ký tự ko phải chữ 
data2.map(str=> {
    if (str.match(/\bdog\b/g)) {
        console.log(str);
    }
})