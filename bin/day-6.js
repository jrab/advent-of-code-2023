let raceData;
const distanceTraveled = (buttonDownTimeMs, raceTime) => {
    const totalMillimetersPerSecond = buttonDownTimeMs;
    const timeLeft = raceTime - buttonDownTimeMs;
    return totalMillimetersPerSecond * timeLeft;
};
const loadRaceData = (list) => {
    const listArray = list.split('\n');
    const re = /([0-9]+)/ig;
    const [timeArray, distanceArray] = listArray;
    const timeList = timeArray.match(re);
    const distanceList = distanceArray.match(re);
    return timeList.map((time, index) => {
        return {
            time: parseInt(time, 10),
            recordDistance: parseInt(distanceList[index], 10)
        };
    });
};
const getTotalWaysToBeatRecord = (raceData) => {
    let totalMultiple = 1;
    raceData.forEach((data) => {
        let totalCount = 0;
        const { time, recordDistance } = data;
        for (let i = 0; i <= time; i++) {
            const distance = distanceTraveled(i, time);
            if (distance > recordDistance) {
                totalCount++;
            }
        }
        totalMultiple *= totalCount;
    });
    return totalMultiple;
};
const raceRawData = `Time:        61677571
Distance:   430103613071150`;
raceData = loadRaceData(raceRawData);
console.log(
// raceData
getTotalWaysToBeatRecord(raceData));
//# sourceMappingURL=day-6.js.map