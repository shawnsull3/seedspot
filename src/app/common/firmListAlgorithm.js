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
        '100+M': 'Field 14',
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
        '100+M': 'Field 28',
    }
    const strategicPMV = strategic_PMV_key[userInfo.preMoneyValuation];
    const optimisticPMV = optimistic_PMV_key[userInfo.preMoneyValuation];
    const userCats = Object.keys(userInfo.userCats);
    const fitFirms1 = [];
    let fitFirms2 = [];
    let fitFirms3 = [];

    var t0 = performance.now() 
    // building fitfirm arrays
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
    
    var t1 = performance.now() 
    console.log("algorithm took " + (t1 - t0) + " milliseconds.")

    return fitFirms2.slice(0, 30);
}

export default firmListAlgorithm;

// let userInfo = {
//     preMoneyValuation: '10-15M',
//     b2b: true,
//     b2c: true,
//     hardware: false,
//     software: true,
//     nonTech: true,
//     userCats: {'Field 44': "x", 'Field 45': "x", 'Field 49': "x", 'Field 86': "x"},
// }
// let investors = [
//     {
//       'VC Firm Name': 'Material Impact',
//       teir: '4',
//       location: 'Boston, MA',
//       website: 'http://materialimpact.com/',
//       leads: 'x',
//       'Field 8': 'x',
//       'Field 9': 'x',
//       'Field 15': 'x',
//       'Field 16': 'x',
//       'Field 18': 'x',
//       'Field 19': 'x',
//       'Field 21': 'x',
//       'Field 24': 'x',
//       'Field 29': 'x',
//       'Field 30': 'x',
//       'Field 31': 'x',
//       'Field 32': 'x',
//       'Field 33': 'x',
//       'Field 49': 'x',
//       'Field 52': 'x',
//       'Field 85': 'x',
//       'Field 95': 'x',
//       'Field 99': 'x',
//       'Field 116': 'x',
//       'Field 117': 'x',
//       'Field 122': 'x'
//     },
//     {
//       'VC Firm Name': 'Sands Capital Ventures',
//       teir: '4',
//       location: 'Arlington, VA',
//       website: 'https://sandscapitalventures.com/',
//       leads: 'x',
//       'Field 8': 'x',
//       'Field 11': 'x',
//       'Field 12': 'x',
//       'Field 13': 'x',
//       'Field 14': 'x',
//       'Field 15': 'x',
//       'Field 16': 'x',
//       'Field 17': 'x',
//       'Field 18': 'x',
//       'Field 22': 'x',
//       'Field 23': 'x',
//       'Field 24': 'x',
//       'Field 29': 'x',
//       'Field 30': 'x',
//       'Field 31': 'x',
//       'Field 32': 'x',
//       'Field 44': 'x',
//       'Field 45': 'x',
//       'Field 52': 'x',
//       'Field 66': 'x',
//       'Field 75': 'x',
//       'Field 96': 'x',
//       'Field 109': 'x',
//       'Field 117': 'x',
//       'Field 122': 'x'
//     },
//     {
//       'VC Firm Name': 'Underdog Ventures',
//       teir: '4',
//       location: 'Brighton, VT',
//       website: 'www.underdogventures.com',
//     //   leads: 'x',
//       'Strategic - The Primary Focus Areas for the Firm': 'x',
//       'Field 8': 'x',
//       'Field 15': 'x',
//       'Field 18': 'x',
//       'Field 83': 'x',
//       'Field 86': 'x',
//       'Field 122': 'x'
//     }
//   ];

//   firmListAlgorithm(userInfo, investors);
