class TimeMap {
    constructor() {
        // {
        //   key:{
        //      timestamps: [], 
        //      values: [],
        //   }
        // }
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            const keyVal = this.keyStore.get(key);
            keyVal['timestamps'].push(timestamp);
            keyVal['values'].push(value);
        } else {
            this.keyStore.set(key, {
                'timestamps': [timestamp],
                'values': [value],
            })
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        
        if (!this.keyStore.has(key)) return '';

        const keyVal = this.keyStore.get(key);
        const timestamps = keyVal.timestamps;

        // most recent timestamp for that key is less than or equal to the given timestamp
        let left = 0;
        let right = timestamps.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if(timestamps[mid] === timestamp) return keyVal.values[mid];
            
            if(timestamps[mid] > timestamp){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }

        const lastMid = Math.floor((left + right) / 2);

        return lastMid >= 0 && lastMid < keyVal.values.length ? keyVal.values[lastMid] : '';
    }
}

[
    "set", ["test", "one", 10],
    "set", ["test", "two", 20],
    "set", ["test", "three", 30],
    "get", ["test", 15],
    "get", ["test", 25],
    "get", ["test", 35]
]















