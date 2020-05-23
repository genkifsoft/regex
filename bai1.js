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