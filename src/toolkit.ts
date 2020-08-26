export class toolkit {

    //round floats that differ from a shorter decimal by a very small amount (ie, errors)
    // public static fixFloat(toFix: number): number {
    //     for (let places = 1; places < 5; places++) {
    //         let fewPlaces = (Math.round(toFix * 10 ** places)) / (10 ** places);
    //         //Rounds out differences lesser than the threshold value set in isClose
    //         if (toolkit.isClose(toFix, fewPlaces)) {
    //             //console.log(`${fewPlaces} : ${toFix} @ ${places}`);
    //             return fewPlaces;
    //         }
    //     }
    //     return toFix;
    // }
    public static fixFloat(toFix: number): number {
        let wordfloat: string = toFix.toFixed(5);
        toFix = parseFloat(wordfloat);
        return toFix;
    }

    //convert simple fractions to mixed number form - for display only
    /*replaced by dec2frac
    public static fractionalize(toFix: number): string {
        let leftSide = Math.trunc(toFix);
        for (let i = 2; i <= 1000; i++) {
            for (let z = 1; z <= 999; z++) {
                if (z >= i) { break; }
                if (toolkit.isClose(toFix - leftSide, z / i)) {
                    if (leftSide == 0) {
                        return `${z}/${i}`;
                    }
                    else {
                        return `${leftSide} + ${z}/${i}`;
                    }
                }
            }
        }
        return String(toFix);
    }*/

    //convert all decimals to fractions
    public static dec2frac(d: number): string {
        let df: number = 1;
        let top: number = 1;
        let bot: number = 1;

        let lefty: number = Math.trunc(d);
        d = d - lefty;
        if (d == 0) return String(lefty);

        //adds a margin of tolerance to handle floating point errors
        while (!toolkit.isClose(d, df)) {
            bot++
            if (df < d) top++;
            df = top / bot;
        }
        if (lefty) return `${lefty} + ${top}/${bot}`;
        else return `${top}/${bot}`
    }

    //this function largely exists so I can automatically use the same arbitrary threshold consistently
    public static isClose(num1: number, num2: number): boolean {
        //threshold is the arbitrary number of significant digits to check
        let threshold: number = 0.0000001;
        if (Math.abs(num1 - num2) < threshold) {
            return true;
        }
        else {
            return false;
        }
    }

    //currently unused. Lists all valid factors excluding 1. 
    public static factor(nummy: number): number[] {
        let factors: number[] = [];
        for (let i = 2; i <= nummy; i++) {
            if (nummy % i == 0) factors.push(i);
        }
        return factors;
    }

    //Prime factorization (including duplicates)
    public static primeFactor(nummy: number): Object {
        let factors: Object = new Object();
        for (let i = 2; i <= nummy; i++) {
            if (nummy % i == 0) {
                if(factors.hasOwnProperty(i)) factors[i] = factors[i] + 1;
                else factors[i] = 1;
                nummy = nummy / i;
                i--;
            }
        }
        return factors;
    }

    public static refine(neededheavy: number, neededlight: number, neededgas: number): {Refineries: number, LC: number, GC: number}{
        let LCcap = 30;
        let GCcap = 20;

        let standardRatios = { heavy: 25, light: 45, gas: 55 }

        let RforHeavy = neededheavy / standardRatios.heavy;
        let RforLight = (neededlight + toolkit.HasL(neededheavy)) / (standardRatios.light + toolkit.HasL(standardRatios.heavy));
        let RforGas = (neededgas + toolkit.HasG(neededheavy) + toolkit.LasG(neededlight)) / (standardRatios.gas + toolkit.HasG(standardRatios.heavy) + toolkit.LasG(standardRatios.light));
        let R;

        if (RforHeavy > RforLight && RforHeavy > RforGas) {
            console.log("Heavy dominant - R=" + RforHeavy);
            R = RforHeavy;
        }
        else if (RforLight > RforGas && RforLight > RforHeavy) {
            console.log("Light dominant - R=" + RforLight);
            R = RforLight;
        }
        else {
            console.log("Gas dominant - R=" + RforGas);
            R = RforGas;
        }

        let YofH = R * standardRatios.heavy;
        let YofL = R * standardRatios.light;
        let YofG = R * standardRatios.gas;
        neededheavy = neededheavy - YofH;
        neededlight = neededlight - YofL;
        neededgas = neededgas - YofG;

        console.log(`needed after R - H: ${neededheavy} L: ${neededlight} G: ${neededgas}`)

        let Cracktogas = 0;
        let Cracktolight = 0;

        if (neededgas > 0) {
            Cracktogas = neededgas / GCcap;
            neededlight = neededlight + (neededgas * 1.5);
        }
        if (neededlight > 0) {
            Cracktolight = neededlight / LCcap;
        }

        console.log("Cracking - G: " + Cracktogas + " L: " + Cracktolight);

        return {Refineries: R, LC: Cracktolight, GC: Cracktogas}
    }

    public static HasL (H: number) {
        return H/(4/3);
    }
    
    public static HasG (H: number) {
        return H/(2);
    }
    
    public static LasG (L: number) {
        return L/(1.5);
    }

}
