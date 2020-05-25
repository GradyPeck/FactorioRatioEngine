export class toolkit {

    //round floats that differ from a shorter decimal by a very small amount (ie, errors)
    public static fixFloat(toFix: number): number {
        for (let places = 1; places < 5; places++) {
            let fewPlaces = (Math.round(toFix * 10 ** places)) / (10 ** places);
            //Rounds out differences lesser than the threshold value set in isClose
            if (toolkit.isClose(toFix, fewPlaces)) {
                //console.log(`${fewPlaces} : ${toFix} @ ${places}`);
                return fewPlaces;
            }
        }
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
    public static dec2frac(d: number) : string {
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

    public static factor(nummy: number) : number[] {
        let factors: number[] = [];
        for (let i = 2; i <= nummy; i++) {
            if (nummy % i == 0) factors.push(i);
        }
        return factors;
    }

    /*public static primeFactor(nummy: number) : number[] {
        let factors: number[] = toolkit.factor(nummy);
        let primeFactors: number[] = [];
        for (let facty of factors) {
            if (toolkit.factor(facty).length <= 1) primeFactors.push(facty);
        }
        return primeFactors;
    }*/

    public static primeFactor(nummy: number) : number[] {
        let factors: number[] = [];
        for (let i = 2; i < nummy; i++) {
            if (nummy % i == 0) {
                factors.push(i);
                nummy = nummy / i;
                i--;
            }
        }
        return factors;
    }

}
