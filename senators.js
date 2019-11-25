const list = [
  {
    state: "Abia",
    senators: [
      {
        name: "Sen. E. Abaribe",
        phone: "08033129452",
        email: "enyiabaribe@yahoo.com",
      },
      {
        name: "Sen. O. Kalu",
        phone: "08034000001",
        email: "okalu@orjikalu.com",
      },
      {
        name: "Sen. T. Orji",
        phone: "07082800000",
        email: "senatortaorji@gmail.com",
      }
    ]
  },
  {
    state: "Adamawa",
    senators: [
      {
        name: "Sen. B. Yaroe",
        phone: "08034050460",
        email: " bdyaroe@gmail.com",
      },
      {
        name: "Sen. I. Abbo",
        phone: "08066285112",
        email: "faradugun@gmail.com",
      },
      {
        name: "Sen. A. Ahmed  ",
        phone: "",
        email: "aishatu.ahmed@nass.gov.ng",
      }
    ]
  },
  {
    state: "Akwa-ibom",
    senators: [
      {
        name: "Sen. B. Akpan",
        phone: "08055555188",
        email: "akpanalbert@hotmail.com",
      },
      {
        name: "Sen. A. Eyakenyi",
        phone: "08035054282",
        email: "konssie@yahoo.com",
      },
      {
        name: "Sen. C. Ekpeyong",
        phone: "08027785234",
        email: "chrisekpesg@yahoo.com",
      }
    ]
  },
  {
    state: "Anambra",
    senators: [
      {
        name: "Sen. I. Ubah",
        phone: "09096655596",
        email: "senatorifeanyiubah@gmail.com",
      },
      {
        name: "Sen. E. Uche",
        phone: "08037620002",
        email: "u.ekwunife@yahoo.com",
      },
      {
        name: "Sen. A. Oduah",
        phone: "08055084340",
        email: "senatorstella@gmail.com",
      }
    ]
  },
  {
    state: "Bauchi",
    senators: [
      {
        name: "Sen. H. Jika",
        phone: "08038666690",
        email: "jikahalliru@gmail.com",
      },
      {
        name: "Sen. A. Bulkachuwa",
        phone: "",
        email: "adamu.bulkachuwa@nass.gov.ng",
      },
      {
        name: "Sen. L. Gamau",
        phone: "",
        email: "lawal.gumau@nass.gov.ng",
      }
    ]
  },
  {
    state: "Bayelsa",
    senators: [
      {
        name: "Sen. O. EWHRUDJAKPO",
        phone: "09031352791",
        email: "ogagadick@gmail.com",
      },
      {
        name: "Sen. D. Diri",
        phone: "08036668698",
        email: "douyediri@gmail.com",
      },
      {
        name: "Sen. D. Wangagra",
        phone: "",
        email: "degi.wangagha@nass.gov.ng",
      }
    ]
  },
  {
    state: "Benue",
    senators: [
      {
        name: "Sen. E. Orker-Jev",
        phone: "",
        email: "emmanuel.orkerjev@nass.gov.ng",
      },
      {
        name: "Sen A. Morro",
        phone: "08068870606",
        email: "abahmoro@yahoo.co",
      }
    ]
  },
  {
    state: "Borno",
    senators: [
      {
        name: "Sen. A. Kyari",
        phone: "",
        email: "abubakar.kyari@nass.gov.ng",
      },
      {
        name: "Sen. K. Shettima",
        phone: "08034459047",
        email: "kashimshettima@gmail.com",
      },
      {
        name: "Sen. M. Ndume",
        phone: "08109480004",
        email: "mohammed.ndume@nass.gov.ng",
      }
    ]
  },
  {
    state: "Cross-river",
    senators: [
      {
        name: "Sen. R. Oko",
        phone: "",
        email: "rose.oko@nass.gov.ng",
      },
      {
        name: "Sen. G. Bassey",
        phone: "08034444555",
        email: "gershombassey@gmail.com",
      },
      {
        name: "Sen. S. Onor",
        phone: "08030998460",
        email: "irunandu@yahoo.com",
      }
    ]
  },
  {
    state: "Delta",
    senators: [
      {
        name: "Sen. O. Omo-Agege",
        phone: "07033399937",
        email: "senator.ovieomoagege@gmail.com",
      },
      {
        name: "Sen. J. Manager",
        phone: "08143103829",
        email: "jamesmanager2013@gmail.com",
      },
      {
        name: "Sen. P. Nwaoboshi",
        phone: "08037200999",
        email: "pnwaoboshi@yahoo.com",
      }
    ]
  },
  {
    state: "Edo",
    senators: [
      {
        name: "Sen. C. Ordia",
        phone: "08038403877",
        email: "engineercliffordordia@gmail.com",
      },
      {
        name: "Sen. F. Alimikhena",
        phone: "08155555884",
        email: "falimikhena@yahoo.com",
      },
      {
        name: "Sen. M. Urhoghide",
        phone: "08033855557",
        email: "matthewurhoghide@yahoo.com",
      }
    ]
  },
  {
    state: "Ekiti",
    senators: [
      {
        name: "Sen. A. Adeyeye",
        phone: "08023051100",
        email: "dadeyeye34@gmail.com",
      },
      {
        name: "Sen. O. Adetumbi",
        phone: "08064487689",
        email: "senator.adetunmbi@gmail.com",
      },
      {
        name: "Sen. M. Bamidele",
        phone: "080911112",
        email: "amicusng@gmail.com",
      }
    ]
  },
  {
    state: "Enugu",
    senators: [
      {
        name: "Sen. C. Nnamani",
        phone: "08022255522",
        email: "ebeanoglobal875@gmail.com",
      },
      {
        name: "Sen. Ikweremadu",
        phone: "08075757000",
        email: "ikeekweremadu@yahoo.com",
      },
      {
        name: "Sen. C. Utazi",
        phone: "",
        email: "chukwuka.utazi@nass.gov.ng",
      }
    ]
  },
  {
    state: "Ebonyi",
    senators: [
      {
        name: "Sen. S. Egwu",
        phone: "08039665848",
        email: "drsamominyiegwu@gmail.com",
      },
      {
        name: "Sen. J. Ogba",
        phone: "08037791346",
        email: "onwaigboasa@yahoo.com",
      },
      {
        name: "Sen. M. Nnachi",
        phone: "08034528595",
        email: "michaelamannachi@gmail.com",
      }
    ]
  },
  {
    state: "Gombe",
    senators: [
      {
        name: "Sen. A. Kilawangs",
        phone: "",
        email: "amos.kilawangs@nass.gov.ng",
      },
      {
        name: "Sen. D. Mohammed",
        phone: "07068686699",
        email: "mdgoje1@gmail.com",
      },
      {
        name: "Sen. S. Alkali",
        phone: "08026032222",
        email: "saidualkali905@gmail.com",
      }
    ]
  },
  {
    state: "Imo",
    senators: [
      {
        name: "Sen. E. Onyewuchi",
        phone: "08032012132 ",
        email: "ezeonyewuchi@gmail.com",
      },
      {
        name: "Sen. R. Okorocha",
        phone: "",
        email: "rochas.okorocha@nass.gov.ng",
      },
      {
        name: "Sen. B. Uwajumogu",
        phone: "",
        email: "benjamin.uwajumogu@nass.gov.ng",
      }
    ]
  },
  {
    state: "Jigawa",
    senators: [
      {
        name: "Sen. D. Sankara",
        phone: "08037032577",
        email: "dsankara@yahoo.co.uk",
      },
      {
        name: "Sen. S. Mohammed",
        phone: "08022902648",
        email: "nakudu@yahoo.com",
      },
      {
        name: "Sen. I. Hadejia",
        phone: "",
        email: "ibrahim.hadejia@nass.gov.ng",
      }
    ]
  },
  {
    state: "Kaduna",
    senators: [
      {
        name: "Sen. S. Kwari",
        phone: "08033019005",
        email: "suleimankwari@yahoo.com",
      },
      {
        name: "Sen. D. La'ah",
        phone: "08118887772",
        email: "laah.danjuma@yahoo.com",
      }
    ]
  },
  {
    state: "Kano",
    senators: [
      {
        name: "Sen. K. Gaya",
        phone: "",
        email: "kabiru.gaya@nass.gov.ng",
      },
      {
        name: "Sen. I. Jibrin",
        phone: "",
        email: "ibrahim.jibrin@nass.gov.ng",
      },
      {
        name: "Sen. I. Shekarau",
        phone: "08099199111",
        email: "ishekarau55@yahoo.com",
      }
    ]
  },
  {
    state: "Kastina",
    senators: [
      {
        name: "Sen. A. Babba-Kaita",
        phone: "",
        email: "ahmad.babba@nass.gov.ng",
      },
      {
        name: "Sen. B. Mandiya",
        phone: "",
        email: "bellom2001@yahoo.com",
      },
      {
        name: "Sen. K. Barkiya",
        phone: "08138360742",
        email: "barkamazadu00@yahoo.com",
      }
    ]
  },
  {
    state: "Kebbi",
    senators: [
      {
        name: "Sen. M. Aliero",
        phone: "07066847000",
        email: "senatoraliero@yahoo.com",
      },
      {
        name: "Sen. Y. Abdullahi",
        phone: "",
        email: "yahaya.abdullahi@nass.gov.ng",
      },
      {
        name: "Sen. B. Na'Allah",
        phone: "",
        email: "bala.naallah@nass.gov.ng",
      }
    ]
  },
  {
    state: "Kogi",
    senators: [
      {
        name: "Sen. J. Isah",
        phone: "08185651909",
        email: "isahj@ymail.com",
      },
      {
        name: "Sen. O. Yakubu",
        phone: "07032642674",
        email: "yakubu.oseni75@yahoo.com",
      }
    ]
  },
  {
    state: "Kwara",
    senators: [
      {
        name: "Sen. A. Yisa",
        phone: "07055221111",
        email: "ylashiru@gmail.com",
      },
      {
        name: "Sen. S. Umar",
        phone: "",
        email: "sadiq.umar@nass.gov.ng",
      },
      {
        name: "Sen. I. 'Olorigbigbe'",
        phone: "08033581695",
        email: "oloridoc@yahoo.com",
      }
    ]
  },
  {
    state: "Lagos",
    senators: [
      {
        name: "Sen. Oluremi Tinubu",
        phone: "08095300251",
        email: "info@oluremitinubu.com",
      },
      {
        name: "Sen. S. Osinowo",
        phone: "08095300251",
        email: "info@oluremitinubu.com",
      },
      {
        name: "Sen. S. Adeola",
        phone: "08074000040",
        email: "adeolaolamilekan2005@yahoo.com",
      }
    ]
  },
  {
    state: "Nasarawa",
    senators: [
      {
        name: "Sen. A. Adamu",
        phone: "",
        email: "abdullahi.adamu@nass.gov.ng",
      },
      {
        name: "Sen. G. Awkashiki",
        phone: "08099321703",
        email: "godiyaakwashiki123@gmail.com",
      },
      {
        name: "Sen. U. Almakura",
        phone: "08077253989",
        email: "tankoalmakura@yahoo.co.uk",
      }
    ]
  },
  {
    state: "Niger",
    senators: [
      {
        name: "SEN. ALIYU ABDULLAHI - THE SPONSOR OF THE BILL",
        phone: "08052046555",
        email: "draliyuabdullahii@gmail.com",
      },
      {
        name: "Sen. M. Bima",
        phone: "08173479797",
        email: "sangibima@gmail.com",
      },
      {
        name: "Sen. M. Musa",
        phone: "08033114615",
        email: "Sani_313@hotmail.com",
      }
    ]
  },
  {
    state: "Ogun",
    senators: [
      {
        name: "Sen. R. Mustapha",
        phone: "08033047403",
        email: "adeoshy@gmail.com",
      },
      {
        name: "Sen. I. Amosun",
        phone: "08033213993",
        email: "amks2@yahoo.com",
      },
      {
        name: "Sen. T. Odebiyi",
        phone: "08036058080",
        email: "toluodebiyi@gmail.com",
      }
    ]
  },
  {
    state: "Ondo",
    senators: [
      {
        name: "Sen. A. Akinyelure",
        phone: "08091707000",
        email: "akinyelure1@yahoo.com",
      },
      {
        name: "Sen. N. Tofowomo",
        phone: "08054546666",
        email: "tofowomo_1960@yahoo.com",
      },
      {
        name: "Sen. R. Boroffic",
        phone: "08176406557",
        email: "rboroffice@yahoo.com",
      }
    ]
  },
  {
    state: "Osun",
    senators: [
      {
        name: "Sen. S. Basiru",
        phone: "08034753343",
        email: "ajibolabasiru@hotmail.com",
      },
      {
        name: "Sen. F. Fadahunsi",
        phone: "08052242211",
        email: "adefadahunsi19@gmail.com",
      },
      {
        name: "Sen. A. Oriolowo",
        phone: "08033565979",
        email: "yemlee12@gmail.com",
      }
    ]
  },
  {
    state: "Oyo",
    senators: [
      {
        name: "Sen. T. Folarin",
        phone: "08033160587",
        email: "teslimkfolarin@yahoo.com",
      },
      {
        name: "Sen. B. Omotayo",
        phone: "08037053375",
        email: "rabab1004@yahoo.com",
      },
      {
        name: "Sen. A. Balogun",
        phone: "08132956057",
        email: "kbalogun7707@gmail.com",
      }
    ]
  },
  {
    state: "Plateau",
    senators: [
      {
        name: "Senator I. Longjan",
        phone: "07044442045",
        email: "talk2longjan@gmail.com",
      },
      {
        name: "Sen. H. Dimka",
        phone: "08033359443",
        email: "dewansamson4@gmail.com",
      },
      {
        name: "Sen. I. Gyang",
        phone: "08097777712",
        email: "dridgyang@gmail.com",
      }
    ]
  },
  {
    state: "Rivers",
    senators: [
      {
        name: "Sen. B. Apiafi",
        phone: "",
        email: "betty.apiafi@nass.gov.ng",
      },
      {
        name: "Sen. G. Sekibo",
        phone: "",
        email: "george.sekibo@nass.gov.ng",
      },
      {
        name: "Sen. B. Mpigi",
        phone: "08037419000",
        email: "mpigib@yahoo.com",
      }
    ]
  }
];
// export default list;