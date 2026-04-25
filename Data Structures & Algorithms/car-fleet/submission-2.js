class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = []
        for (let i = 0; i < position.length; i++) {
            cars.push({ 'p': position[i], 's': speed[i] });
        }
        cars.sort((a, b) => b.p - a.p);

        let fleet = 1;
        let prevTime = (target - cars[0].p) / cars[0].s;
        for (let i = 1; i < cars.length; i++) {
            let currTime = (target - cars[i].p) / cars[i].s;
            if (currTime > prevTime) {
                fleet+=1;
                prevTime = currTime;
            }
        }

        return fleet;
    }
}
