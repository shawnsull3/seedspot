export const firmListAlgorithm = (userInfo, investors) => {
    const strategic_PMV_key = { // pre-money-valuation
        '1-5M': 'Field 6',
        '5-10M': 'Field 7',
        '10-15M': 'Field 8',
        '15-20M': 'Field 9',
        '20-30M': 'Field 10',
        '30-40M': 'Field 11',
        '40-60M': 'Field 12',
        '60-100M': 'Field 13',
        '100M+': 'Field 14',
    }
    const optimistic_PMV_key = {
        '1-5M': 'Field 20',
        '5-10M': 'Field 21',
        '10-15M': 'Field 22',
        '15-20M': 'Field 23',
        '20-30M': 'Field 24',
        '30-40M': 'Field 25',
        '40-60M': 'Field 26',
        '60-100M': 'Field 27',
        '100M+': 'Field 28',
    }
    const strategicPMV = strategic_PMV_key[userInfo.preMoneyValuation];
    const optimisticPMV = optimistic_PMV_key[userInfo.preMoneyValuation];
    const userCats = Object.keys(userInfo.userCats);
    const fitFirms1 = [];
    let fitFirms2 = [];
    let fitFirms3 = [];

    // building fitFirm arrays
    for (let i = 0; i < investors.length; i++) {
        if (investors[i]['VC Firm Name'] === 'VC Firm Name') {
            continue;
        }
        // product investment type
        if ((userInfo.hardware && investors[i]['Field 17']) || (userInfo.software && investors[i]['Field 18']) || (userInfo.nonTech && investors[i]['Field 19'])) {
            // custoemr type investment 
            if ((userInfo.b2b && investors[i]['Field 15']) || (userInfo.b2c && investors[i]['Field 16'])) {
                fitFirms1.push(investors[i]);

                // pre-money valuation
                if (investors[i][strategicPMV]) {
                    fitFirms2.push(investors[i]);
                }
            }
        }
    }
    
    const scoreAndSort = (firmArray) => {
        for (let i = 0; i < firmArray.length; i++) {
            firmArray[i].score = 0;
            if (firmArray[i].leads) {
                firmArray[i].score += 20;
            }
    
            userCats.forEach( category => {
                if (firmArray[i][category]) {
                    firmArray[i].score += 5;
                }
            })
        }
        return firmArray.sort(function(a, b) {return b.score - a.score});
    }

    fitFirms2 = scoreAndSort(fitFirms2);

    // if less than 30 look at optimistic firms
    if (fitFirms2.length < 30) {
        for (let i = 0; i < fitFirms1.length; i++) {
            if (fitFirms1[i][optimisticPMV]) {
                fitFirms3.push(investors[i]);
            }
        }
        fitFirms3 = scoreAndSort(fitFirms3);
        fitFirms2 = fitFirms2.concat(fitFirms3.slice(0,(30 - fitFirms2.length)));
    }

    return fitFirms2.slice(0, 30);
}

export default firmListAlgorithm;
