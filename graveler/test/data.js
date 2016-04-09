module.exports = {
  urls: {
    "/api/countries": [
      {
        id: 1,
        name: "China"
      }
    ],
    "/api/user/login": {
        id: 1,
        name: "China",
        target:"/index"
      },
    "/index": 
      {
        _USER_:{
            name: "test"
        }
      },
    "/platforms/supplier": 
      {
        _USER_:{
            name: "test",
            roles: ["resource","competitive"]
        }
      },        
  },
  comps: {
    "admins/qualification_info": {
      oldValues: {
        "finance-country": "China",
        "finance-opening-bank": "中国人民很行"
      }
    } 
  }
}
