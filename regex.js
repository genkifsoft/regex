class regex {
    constructor() {

    }

    setData() {
        let arrayData = [
            '090 123 2323',
            '123-123-0902',
            '123.23.123'
        ]

        return arrayData;
    }

    mapData() {
        let data = this.setData();
        return data.map(str => {
            return str.replace(/[- .]/g, '');
        });
    }

    printData() {
        let map = this.mapData();

        console.log(map);
    }
}

module.exports = regex;