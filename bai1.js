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