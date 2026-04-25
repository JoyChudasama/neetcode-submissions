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

        let left = 0;
        let right = keyVal.timestamps.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (keyVal.timestamps[mid] === timestamp) return keyVal.values[mid];

            if (keyVal.timestamps[mid] > timestamp) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        const lastMid = Math.floor((left + right) / 2);
        return lastMid >= 0 && lastMid < keyVal.values.length ? keyVal.values[lastMid] : '';
    }
}















