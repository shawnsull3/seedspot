const API_KEY = require('./airtable').API_KEY;

export default function insertToAirTable(companyInfo) {
    var Airtable = require('airtable');
    const base = new Airtable({ apiKey: API_KEY }).base("appM1hP46JiOYkOdO");

    base('Startups').create([
        {
          "fields": {
            "Company Name": companyInfo.company,
            "email": companyInfo.email,
            "Location": companyInfo.location,
            "Company Type": companyInfo.companyType,
            "Company Stage": companyInfo.companyStage,
            "DAU": companyInfo.DAU,
            "MAU": companyInfo.MAU,
            "NPS Score": companyInfo.NPSscore,
            "Week to week growth": companyInfo.week2weekGrowth,
            "K-Value": companyInfo.kValue 
          }
        },
      ], {typecast: true}, function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
}