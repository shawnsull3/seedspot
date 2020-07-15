let userInfo = {
    preMoneyValuation: '10-15M',
    b2b: true,
    b2c: true,
    hardware: false,
    software: true,
    nonTech: true,
    userCats: {'Field 44': "x", 'Field 45': "x", 'Field 49': "x", 'Field 86': "x"},
}

const firmListAlgorithm = (userInfo, investors) => {
    const preMoneyObj = {
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
    const preMoneyVal = preMoneyObj[userInfo.preMoneyValuation];
    const userCats = Object.keys(userInfo.userCats);
    const fitFirms1 = [];
    const fitFirms2 = [];

    // building fitfirm arrays
    for (let i = 0; i < investors.length; i++) {
        // product investment type
        if ((userInfo.hardware && investors[i]['Field 17']) || (userInfo.software && investors[i]['Field 18']) || (userInfo.nonTech && investors[i]['Field 19'])) {
            // custoemr type investment 
            if ((userInfo.b2b && investors[i]['Field 15']) || (userInfo.b2c && investors[i]['Field 16'])) {
                fitFirms1.push(investors[i]);
                console.log(investors[i]['VC Firm Name'])
                console.log(preMoneyVal)
                console.log(investors[i][preMoneyVal]);

                // pre-money valuation
                if (investors[i][preMoneyVal]) {
                    fitFirms2.push(investors[i]);
                }
            }
        }
    }

    // scoring fitfirms2
    for (let i = 0; i < fitFirms2.length; i++) {
        fitFirms2[i].score = 0;
        if (fitFirms2[i].leads) {
            fitFirms2[i].score += 20;
        }

        userCats.forEach( category => {
            if (fitFirms2[i][category]) {
                fitFirms2[i].score += 5;
            }
        })
        console.log('score',fitFirms2[i].score)
    }

    fitFirms2.sort(function(a, b) {return b.score - a.score});
    return fitFirms2.slice(0, 30);
}

let investors = [
    {
      'VC Firm Name': 'Material Impact',
      teir: '4',
      location: 'Boston, MA',
      website: 'http://materialimpact.com/',
      leads: 'x',
      'Field 8': 'x',
      'Field 9': 'x',
      'Field 15': 'x',
      'Field 16': 'x',
      'Field 18': 'x',
      'Field 19': 'x',
      'Field 21': 'x',
      'Field 24': 'x',
      'Field 29': 'x',
      'Field 30': 'x',
      'Field 31': 'x',
      'Field 32': 'x',
      'Field 33': 'x',
      'Field 49': 'x',
      'Field 52': 'x',
      'Field 85': 'x',
      'Field 95': 'x',
      'Field 99': 'x',
      'Field 116': 'x',
      'Field 117': 'x',
      'Field 122': 'x'
    },
    {
      'VC Firm Name': 'Sands Capital Ventures',
      teir: '4',
      location: 'Arlington, VA',
      website: 'https://sandscapitalventures.com/',
      leads: 'x',
      'Field 8': 'x',
      'Field 11': 'x',
      'Field 12': 'x',
      'Field 13': 'x',
      'Field 14': 'x',
      'Field 15': 'x',
      'Field 16': 'x',
      'Field 17': 'x',
      'Field 18': 'x',
      'Field 22': 'x',
      'Field 23': 'x',
      'Field 24': 'x',
      'Field 29': 'x',
      'Field 30': 'x',
      'Field 31': 'x',
      'Field 32': 'x',
      'Field 44': 'x',
      'Field 45': 'x',
      'Field 52': 'x',
      'Field 66': 'x',
      'Field 75': 'x',
      'Field 96': 'x',
      'Field 109': 'x',
      'Field 117': 'x',
      'Field 122': 'x'
    },
    {
      'VC Firm Name': 'Underdog Ventures',
      teir: '4',
      location: 'Brighton, VT',
      website: 'www.underdogventures.com',
    //   leads: 'x',
      'Strategic - The Primary Focus Areas for the Firm': 'x',
      'Field 8': 'x',
      'Field 15': 'x',
      'Field 18': 'x',
      'Field 83': 'x',
      'Field 86': 'x',
      'Field 122': 'x'
    }
  ];

  firmListAlgorithm(userInfo, investors);

// export default firmListAlgorithm;