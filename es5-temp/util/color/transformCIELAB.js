const delta = 0.20689655172413793; // 6÷29
const cielabForwardTransform = (t) => (t > delta ** 3
    ? Math.cbrt(t)
    : (t / (3 * delta ** 2)) + 4 / 29);
const cielabReverseTransform = (t) => (t > delta
    ? t ** 3
    : (3 * delta ** 2) * (t - 4 / 29));
export function fromXYZ(xyz) {
    const transform = cielabForwardTransform;
    const transformedY = transform(xyz[1]);
    return [
        116 * transformedY - 16,
        500 * (transform(xyz[0] / 0.95047) - transformedY),
        200 * (transformedY - transform(xyz[2] / 1.08883))
    ];
}
export function toXYZ(lab) {
    const transform = cielabReverseTransform;
    const Ln = (lab[0] + 16) / 116;
    return [
        transform(Ln + lab[1] / 500) * 0.95047,
        transform(Ln),
        transform(Ln - lab[2] / 200) * 1.08883
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtQ0lFTEFCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvY29sb3IvdHJhbnNmb3JtQ0lFTEFCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sS0FBSyxHQUFHLG1CQUFtQixDQUFBLENBQUMsT0FBTztBQUV6QyxNQUFNLHNCQUFzQixHQUFHLENBQUMsQ0FBUyxFQUFVLEVBQUUsQ0FBQyxDQUNwRCxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUM7SUFDWixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FDcEMsQ0FBQTtBQUVELE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxDQUFTLEVBQVUsRUFBRSxDQUFDLENBQ3BELENBQUMsR0FBRyxLQUFLO0lBQ1AsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQ3BDLENBQUE7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFFLEdBQVE7SUFDL0IsTUFBTSxTQUFTLEdBQUcsc0JBQXNCLENBQUE7SUFDeEMsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRXRDLE9BQU87UUFDTCxHQUFHLEdBQUcsWUFBWSxHQUFHLEVBQUU7UUFDdkIsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxZQUFZLENBQUM7UUFDbEQsR0FBRyxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7S0FDbkQsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsS0FBSyxDQUFFLEdBQVE7SUFDN0IsTUFBTSxTQUFTLEdBQUcsc0JBQXNCLENBQUE7SUFDeEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFBO0lBQzlCLE9BQU87UUFDTCxTQUFTLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFPO1FBQ3RDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDYixTQUFTLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFPO0tBQ3ZDLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgWFlaLCBMQUIgfSBmcm9tICdzcmMvdXRpbC9jb2xvclV0aWxzJ1xuXG5jb25zdCBkZWx0YSA9IDAuMjA2ODk2NTUxNzI0MTM3OTMgLy8gNsO3MjlcblxuY29uc3QgY2llbGFiRm9yd2FyZFRyYW5zZm9ybSA9ICh0OiBudW1iZXIpOiBudW1iZXIgPT4gKFxuICB0ID4gZGVsdGEgKiogM1xuICAgID8gTWF0aC5jYnJ0KHQpXG4gICAgOiAodCAvICgzICogZGVsdGEgKiogMikpICsgNCAvIDI5XG4pXG5cbmNvbnN0IGNpZWxhYlJldmVyc2VUcmFuc2Zvcm0gPSAodDogbnVtYmVyKTogbnVtYmVyID0+IChcbiAgdCA+IGRlbHRhXG4gICAgPyB0ICoqIDNcbiAgICA6ICgzICogZGVsdGEgKiogMikgKiAodCAtIDQgLyAyOSlcbilcblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21YWVogKHh5ejogWFlaKTogTEFCIHtcbiAgY29uc3QgdHJhbnNmb3JtID0gY2llbGFiRm9yd2FyZFRyYW5zZm9ybVxuICBjb25zdCB0cmFuc2Zvcm1lZFkgPSB0cmFuc2Zvcm0oeHl6WzFdKVxuXG4gIHJldHVybiBbXG4gICAgMTE2ICogdHJhbnNmb3JtZWRZIC0gMTYsXG4gICAgNTAwICogKHRyYW5zZm9ybSh4eXpbMF0gLyAwLjk1MDQ3KSAtIHRyYW5zZm9ybWVkWSksXG4gICAgMjAwICogKHRyYW5zZm9ybWVkWSAtIHRyYW5zZm9ybSh4eXpbMl0gLyAxLjA4ODgzKSlcbiAgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9YWVogKGxhYjogTEFCKTogWFlaIHtcbiAgY29uc3QgdHJhbnNmb3JtID0gY2llbGFiUmV2ZXJzZVRyYW5zZm9ybVxuICBjb25zdCBMbiA9IChsYWJbMF0gKyAxNikgLyAxMTZcbiAgcmV0dXJuIFtcbiAgICB0cmFuc2Zvcm0oTG4gKyBsYWJbMV0gLyA1MDApICogMC45NTA0NyxcbiAgICB0cmFuc2Zvcm0oTG4pLFxuICAgIHRyYW5zZm9ybShMbiAtIGxhYlsyXSAvIDIwMCkgKiAxLjA4ODgzXG4gIF1cbn1cbiJdfQ==