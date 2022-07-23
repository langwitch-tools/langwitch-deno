import { engine } from "./csvs.ts";

export default await engine(
    `ID,Name,Macroarea,Latitude,Longitude,Glottocode,ISO639P3code,Family,Subfamily,Genus,GenusIcon,ISO_codes,Samples_100,Samples_200,Country_ID,Source
aab,Arapesh (Abu),Papunesia,-3.45,142.95,abua1245,aah,Torricelli,,Kombio-Arapesh,c51CC56,aah,false,false,PG,Nekitel-1985
aar,Aari,Africa,6,36.5833333333,aari1239,aiw,Afro-Asiatic,Omotic,South Omotic,c708033,aiw,false,false,ET,Hayward-1990a
aba,Abau,Papunesia,-4,141.25,abau1245,aau,Sepik,,Abau,c807433,aau,false,false,PG,Bailey-1975
abb,Arabic (Chadian),Africa,13.8333333333,20.8333333333,chad1249,shu,Afro-Asiatic,,Semitic,cB3CC51,shu,false,false,TD,Abu-Absi-1995
abd,Abidji,Africa,5.66666666667,-4.58333333333,abid1235,abi,Niger-Congo,Kwa,Agneby,c523380,abi,false,false,CI,
abe,Arabic (Beirut),Eurasia,33.9166666667,35.5,nort3139,apc,Afro-Asiatic,,Semitic,cB3CC51,apc,false,false,LB,Abdul-Karim-1979
abh,Arabic (Bahrain),Eurasia,26,50.5,baha1259,abv,Afro-Asiatic,,Semitic,cB3CC51,abv,false,false,BH,
abi,Abipón,South America,-29,-61,abip1241,axb,Guaicuruan,,Abipon,c805E33,axb,false,true,AR,Bybee-et-al-1994 Dobrizhoffer-1902 Najlis-1966
abk,Abkhaz,Eurasia,43.0833333333,41,abkh1244,abk,Northwest Caucasian,,Northwest Caucasian,c5851CC,abk,true,true,GE,Bybee-et-al-1994 Gecadze-1979 Hewitt-1979 Hewitt-1987 Hewitt-1989a Hewitt-1989d Hewitt-and-Khiba-1979 Lomtatidze-1967b Lomtatidze-1996 Spruyt-1986
abm,Alabama,North America,32.3333333333,-87.4166666667,alab1237,akz,Muskogean,,Muskogean,c9251CC,akz,false,false,US,Lupardus-1982 Rand-1968 Sylestine-et-al-1993 Sylestine-et-al-nd
abn,Arabana,Australia,-28.25,136.25,arab1267,ard,Pama-Nyungan,,Central Pama-Nyungan,c335F80,ard,false,false,AU,Hercus-1994
abo,Arbore,Africa,5,36.75,arbo1245,arv,Afro-Asiatic,Cushitic,Lowland East Cushitic,c803353,arv,false,false,ET,Hayward-1984
abu,Abun,Papunesia,-0.5,132.5,abun1252,kgr,,,,c807D33,kgr,false,false,ID,Berry-1995a Berry-1995b Berry-and-Berry-1999
abv,Abui,Papunesia,-8.25,124.666666667,abui1241,abz,Greater West Bomberai,Timor-Alor-Pantar,Alor-Pantar,c608033,abz,false,false,ID,Kratochvil-2007
abw,Abenaki (Western),North America,44,-72.25,west2630,abe,Algic,,Algonquian,c758033,abe,false,false,CA US,Day-1994 Day-1995
abz,Abaza,Eurasia,44,42,abaz1241,abq,Northwest Caucasian,,Northwest Caucasian,c5851CC,abq,false,false,RU,Anonymous-1956 Genko-1995 Lomtatidze-and-Klychev-1989 OHerin-2001
ace,Acehnese,Eurasia,5.5,95.5,achi1257,ace,Austronesian,,Malayo-Sumbawan,cCC7D51,ace,false,false,ID,Aboe-Bakar-et-al-1985 Cowan-1981 Durie-1985 Durie-1995 Durie-et-al-1994 van-Langen-1889
acg,Achagua,South America,4.41666666667,-72.25,acha1250,aca,Arawakan,,Japura-Colombia,c9A51CC,aca,false,false,CO,Aikhenvald-2007b Huber-and-Reed-1992 Melendez-1989 Wilson-and-Levinsohn-1992
ach,Aché,South America,-25.25,-55.1666666667,ache1246,guq,Tupian,,Maweti-Guarani,cCC6351,guq,false,false,PY,Susnik-1974
aci,Achí,North America,15.1666666667,-90.5,achi1256,acr,Mayan,,Mayan,cA951CC,acr,false,false,GT,Lopez-and-Iboy-1992
acl,Acholi,Africa,3,32.6666666667,acol1236,ach,Eastern Sudanic,Nilotic,Western Nilotic,cCC6E51,ach,false,false,UG SS,Crazzolara-1938 Crazzolara-1955 Stolz-1996
acm,Achumawi,North America,41.5,-121,achu1247,acv,Hokan,Palaihnihan,Achumawi,cBDCC51,acv,false,false,US,Olmsted-1964 Olmsted-1966 Olmsted-1977 de-Angulo-and-Freeland-1931
acn,Achang,Eurasia,25,98.5,acha1249,acn,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,acn,false,false,CN MM,Dai-and-Cui-1985
aco,Acoma,North America,34.9166666667,-107.583333333,west2632,kjq,Keresan,,Keresan,c803363,kjq,true,true,US,Maring-1967 Miller-1965 Miller-1966 Nichols-1992 Spencer-1946
acu,Achuar,South America,-2.66667,-76,achu1248,acu,Jivaroan,,Jivaroan,c80334E,acu,false,false,PE,Fast-and-Fast-1981 Wise-1978
ada,Adamorobe Sign Language,Africa,5.83333333333,-0.166666666667,adam1238,ads,other,,Sign Languages,c515CCC,ads,false,false,GH,Frishberg-1987
adg,Adang,Papunesia,-8.2,124,adan1251,adn,Greater West Bomberai,Timor-Alor-Pantar,Alor-Pantar,c608033,adn,false,false,ID,Haan-2001
adi,Adioukrou,Africa,5.41666666667,-4.58333333333,adio1239,adj,Niger-Congo,Kwa,Agneby,c523380,adj,false,false,CI,Herault-1978
adk,Andoke,South America,-0.666666666667,-72,ando1256,ano,,,,cC1CC51,ano,false,false,CO,Aikhenvald-and-Dixon-1999 Landaburu-1979
adn,Adynyamathanha,Australia,-30.5,139.5,adny1235,adt,Pama-Nyungan,,Central Pama-Nyungan,c335F80,adt,false,false,AU,Schebeck-1974
adt,Adyghe (Temirgoy),Eurasia,45.2166666667,39.7,adyg1241,ady,Northwest Caucasian,,Northwest Caucasian,c5851CC,ady,false,false,RU,Kumaxov-1971 Rogava-and-Kerasheva-1966
ady,Adyghe (Abzakh),Eurasia,45.2333333333,40.5833333333,adyg1241,ady,Northwest Caucasian,,Northwest Caucasian,c5851CC,ady,false,false,RU,Paris-1989
adz,Adzera,Papunesia,-6.25,146.25,adze1240,adz,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,adz,false,false,PG,Holzknecht-1973 Holzknecht-1986
aea,Aleut (Eastern),North America,54.75,-164,aleu1260,ale,Eskimo-Aleut,,Aleut,c804733,ale,false,false,US,Bergsland-1956 Bergsland-1959 Bergsland-1994 Cho-et-al-1997 Golovko-2001 Jacobson-1944 Menovshchikov-1968 Rozelle-1997
aeg,Arabic (Egyptian),Africa,30,31,egyp1253,arz,Afro-Asiatic,,Semitic,cB3CC51,arz,true,true,EG,Abdel-Massih-et-al-1979 Brustad-2000 Eisele-1999 Gary-and-Gamal-Eldin-1982 Kennedy-1960 Malherbe-and-Rosenberg-1996 McCarthy-1979a McCarthy-1979b Mitchell-1956 Mitchell-1962 Mitchell-and-Al-Hassan-1994 Moravcsik-1978 Tomiche-1964 Wise-1975
ael,Arabic (Eastern Libyan),Africa,32,22,liby1240,ayl,Afro-Asiatic,,Semitic,cB3CC51,ayl,false,false,LY,Owens-1984
afr,Afrikaans,Africa,-31,22,afri1274,afr,Indo-European,,Germanic,c803433,afr,false,false,ZA,Dahl-1985 Donaldson-1993 Malherbe-and-Rosenberg-1996 Potgieter-and-Potgieter-1932 Raidt-1991 den-Besten-1996
aga,Agarabi,Papunesia,-6.16666666667,146,agar1252,agd,Trans-New Guinea,Kainantu-Goroka,Gauwa,cB151CC,agd,false,false,PG,Goddard-1967 Goddard-1976 Goddard-1980
agb,Leggbó,Africa,6,8,legb1242,agb,Niger-Congo,Benue-Congo,Upper Cross,cCC51A2,agb,false,false,NG,
agc,Agta (Central),Papunesia,17.9666666667,121.833333333,cent2084,agt,Austronesian,,Greater Central Philippine,cCC8E51,agt,false,false,PH,Healey-1960
agd,Agta (Dupaningan),Papunesia,18,122.083333333,dupa1235,duo,Austronesian,,Greater Central Philippine,cCC8E51,duo,false,false,PH,Robinson-2008
agh,Aghem,Africa,6.66666666667,10,aghe1239,agq,Niger-Congo,Benue-Congo,Wide Grassfields,c7D3380,agq,false,false,CM,Anderson-1979 Hyman-1979 Watters-1979
agl,Aghul,Eurasia,41.75,47.6666666667,aghu1253,agx,Nakh-Daghestanian,Daghestanian,Lezgic,c8051CC,agx,false,false,RU,Boguslavskaja-1989 Magometov-1970 Merdanova-and-Daniel-2001 von-Erckert-1895
agm,Angami,Eurasia,25.6666666667,94.5,anga1288,njm,Sino-Tibetan,Tibeto-Burman,Angami-Pochuri,c803A33,njm,false,false,IN,Giridhar-1980 Grierson-1904 Subbarao-and-Murthy-2000 Subbarao-et-al-2000
ago,Angolar,Africa,0.25,6.5,ango1258,aoa,other,,Creoles and Pidgins,c333D80,aoa,false,false,ST,Lorenzino-1998 Maurer-1995
agr,Aguaruna,South America,-5,-78,agua1253,agr,Jivaroan,,Jivaroan,c80334E,agr,false,false,PE,Larsen-1963 Larson-1966 Wise-1999
agt,Anguthimri,Australia,-12.3333333333,141.833333333,angu1242,awg,Pama-Nyungan,,Northern Pama-Nyungan,c336680,awg,false,false,AU,Crowley-1981
agu,Aguacatec,North America,15.4166666667,-91.3333333333,agua1252,agu,Mayan,,Mayan,cA951CC,agu,false,false,GT,McArthur-and-McArthur-1956 McArthur-and-McArthur-1966
agw,Alagwa,Africa,-5.5,35.75,alag1248,wbj,Afro-Asiatic,Cushitic,Southern Cushitic,c688033,wbj,false,false,TZ,Mous-nd
aho,Arapaho,North America,40,-103,arap1274,arp,Algic,,Algonquian,c758033,arp,false,false,US,Salzmann-1956 Salzmann-1967
ahs,Arabic (Bani-Hassan),Africa,20,-10,hass1238,mey,Afro-Asiatic,,Semitic,cB3CC51,mey,false,false,MR,Irshied-and-Kenstowicz-1984
aht,Ahtna,North America,62,-145,ahte1237,aht,Na-Dene,,Athapaskan,c8C51CC,aht,false,false,US,Kari-1990
ahu,Aghu,Papunesia,-6.16666666667,140.166666667,aghu1255,ahh,Trans-New Guinea,Awyu-Ok,Awju,c51CC65,ahh,false,false,ID,Drabbe-1957
aik,Aikaná,South America,-12.6666666667,-60.6666666667,aika1237,tba,,,,c803C33,tba,false,false,BR,Aikhenvald-and-Dixon-1999 Hanke-1956
ain,Ainu,Eurasia,43,143,ainu1240,ain,,,,cB6CC51,ain,false,true,JP,Alpatov-et-al-2007 Dettmer-1989 Nichols-1992 Patrie-1982 Refsing-1986 Shibatani-1990 Simeon-1969 Tamura-1988 Tamura-2000
aiz,Aizi,Africa,5.25,-4.5,apro1235,ahp,Niger-Congo,,Kru,c6F51CC,ahp,false,false,CI,Herault-1971
aja,Aja,Africa,7.33333333333,25.6666666667,ajas1235,aja,Central Sudanic,,Kresh,cB751CC,aja,false,false,CF SS,Santandrea-1976
ajg,Ajagbe,Africa,7,1.75,ajab1235,ajg,Niger-Congo,Kwa,Gbe,c805333,ajg,false,false,BJ TG,Tchitchi-1984
aji,Ajië,Papunesia,-21.3333333333,165.5,ajie1238,aji,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,aji,false,false,NC,Lichtenberk-1978
aka,Aka,Africa,2.66666666667,16.25,yaka1272,axk,Niger-Congo,Benue-Congo,Bantu,cC3CC51,axk,false,false,CF CG,Cloarec-Heiss-and-Thomas-1978
akb,Aka-Biada,Eurasia,11.6666666667,92.5,akab1249,abj,Great Andamanese,,Great Andamanese,c804233,abj,false,false,IN,Portman-1887b
akc,Aka-Cari,Eurasia,13.5,93,akac1240,aci,Great Andamanese,,Great Andamanese,c804233,aci,false,false,IN,Portman-1887b
akh,Akha,Eurasia,21.8333333333,99.8333333333,akha1245,ahk,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,ahk,false,false,CN TH MM,Dellinger-1969 Hansson-2003 Thurgood-1986
akk,Aka-Kede,Eurasia,12.75,92.75,akak1252,akx,Great Andamanese,,Great Andamanese,c804233,akx,false,false,IN,Portman-1887b
akl,Aklanon,Papunesia,11.5833333333,122.333333333,akla1241,akl,Austronesian,,Greater Central Philippine,cCC8E51,akl,false,false,PH,Chai-1971
akm,Arakanese (Marma),Eurasia,21.5,92.5,marm1234,rmz,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,rmz,false,false,BD MM,
akn,Akan,Africa,6.5,-1.25,akan1250,aka,Niger-Congo,Kwa,Tano,c806233,aka,false,false,GH,Balmer-and-Grant-1929 Christaller-1875 Dahl-1985 Dolphyne-1988 Ladefoged-1964 Obeng-2001 Redden-et-al-1963 Saah-and-Eze-1997 Schachter-and-Fromkin-1968 Stewart-1967 Welmers-1946
ako,Arabic (Kormakiti),Eurasia,35.25,33.5,cypr1248,acy,Afro-Asiatic,,Semitic,cB3CC51,acy,false,false,CY,
akr,Arikara,North America,45.5,-100.5,arik1262,ari,Caddoan,,Northern Caddoan,c805A33,ari,false,false,US,Merlan-1975 Parks-1986
akw,Akawaio,South America,6,-59.5,akaw1239,ake,Cariban,,Cariban,cCC9251,ake,false,false,GY,Edwards-1978 Stefanowitsch-2002
ala,Alamblak,Papunesia,-4.66666666667,143.333333333,alam1246,amp,Sepik,,Sepik Hill,c51C4CC,amp,true,true,PG,Bruce-1984 Nichols-1992
alb,Albanian,Eurasia,41,20,,sqi,Indo-European,,Albanian,cCC5166,sqi,false,false,RS AL,Buchholz-and-Fiedler-1987 Camaj-1969 Camaj-1984 Friedman-1986 Hetzer-1991 Kacori-1979 Mann-1977 Maxwell-1979 Newmark-1957 Newmark-et-al-1982
alc,Allentiac,South America,-31,-68,alle1238,,Huarpe,,Huarpe,cCC5951,,false,false,AR,Adelaar-2004
ald,Alladian,Africa,5.16666666667,-4.33333333333,alla1248,ald,Niger-Congo,Kwa,Avikam-Alladian,c3C3380,ald,false,false,CI,Dumestre-and-Duponchel-1971 Duponchel-1971
ale,Aleut,North America,54,-166,aleu1260,ale,Eskimo-Aleut,,Aleut,c804733,ale,false,false,US,Bergsland-1994 Bergsland-1997 Menovshchikov-1968
alg,Algonquin,North America,46,-77,algo1255,alq,Algic,,Algonquian,c758033,alq,false,false,CA,Lemoine-1911
alk,Arop-Lokep,Papunesia,-5.38333333333,147.05,arop1243,apr,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,apr,false,false,PG,DJernes-2002
all,Ala'ala,Papunesia,-8.91666666667,146.75,lala1268,nrz,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,nrz,false,false,PG,Clunn-and-Kolia-1977 Lanyon-Orgill-1943 Ross-2002d Symonds-1989
aln,Alune,Papunesia,-3,128.333333333,alun1238,alp,Austronesian,,Central Malayo-Polynesian,c807633,alp,false,false,ID,Makaruku-et-al-1997 Niggemeyer-1951 Taguchi-and-Taguchi-1990
als,Alsea,North America,44.6666666667,-123.916666667,alse1251,aes,Oregon Coast,,Alsea,c333680,aes,false,false,US,Buckley-1987 Buckley-1989 Frachtenberg-1920
alt,Alsatian,Eurasia,48.5,7.5,swis1247,gsw,Indo-European,,Germanic,c803433,gsw,false,false,FR,Malherbe-and-Rosenberg-1996
alu,Alutor,Eurasia,61,165,alut1245,alr,Chukotko-Kamchatkan,,Northern Chukotko-Kamchatkan,cCC8451,alr,false,false,RU,Kibrik-et-al-2000 Skorik-1986
alw,Alawa,Australia,-15.1666666667,134.25,alaw1244,alh,Mangarrayi-Maran,,Mara,c5176CC,alh,false,false,AU,Dahl-1985 Sharpe-1972
alx,Alas,Papunesia,3.66666666667,97.8333333333,bata1292,btz,Austronesian,,Northwest Sumatra-Barrier Islands,cCC7751,btz,false,false,ID,Akbar-et-al-1985
aly,Alyawarra,Australia,-22.5,135,alya1239,aly,Pama-Nyungan,,Central Pama-Nyungan,c335F80,aly,false,false,AU,Bybee-et-al-1994 Fabricius-1998 Stolz-1996 Yallop-1977 Yallop-1992
ama,Amara,Papunesia,-5.66666666667,148.5,amar1272,aie,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,aie,false,false,PG,Thurston-1996
amb,Ambulas,Papunesia,-3.83333333333,143,ambu1247,abt,Sepik,,Ndu,c6B8033,abt,false,false,PG,Laycock-1965a Nichols-1992 Wilson-1980
amc,Amahuaca,South America,-10.5,-72.5,amah1246,amc,Pano-Tacanan,,Panoan,c334F80,amc,false,false,BR PE,Hyde-1980 Osborn-1948 Russell-1975 Sparing-Chavez-1998
amd,Amdo,Eurasia,35,100,amdo1237,adx,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,adx,false,false,CN,Sun-1993
ame,Amele,Papunesia,-5.25,145.583333333,amel1241,aey,Trans-New Guinea,Madang,Mabuso,cCC5197,aey,true,true,PG,Nichols-1992 Roberts-1987 Roberts-1990 Roberts-1993
amh,Amharic,Africa,10,38,amha1245,amh,Afro-Asiatic,,Semitic,cB3CC51,amh,false,false,ET,Bentolila-and-Shimelis-1998 Cohen-1936 Cotterell-1964 Cowley-et-al-1976 Dahl-1985 Devens-2001a Dillmann-and-Bezold-1907 Hartmann-1980 Hayward-and-Hayward-1999 Hudson-1997 Leslau-1966 Leslau-1968a Leslau-1976 Leslau-1995 Leslau-1997b Malherbe-and-Rosenberg-1996 Nichols-1992 Titov-1991
ami,Amis,Papunesia,23.3333333333,121.333333333,amis1246,ami,Austronesian,,East Formosan,cCC5163,ami,false,false,TW,Wu-2006
amk,Amarakaeri,South America,-12.5,-70.5,amar1274,amr,Harakmbet,,Harakmbet,c803D33,amr,false,false,PE,Derbyshire-and-Payne-1990 Helberg-Chavez-1984 Wise-1978
aml,Ambae (Lolovoli Northeast),Papunesia,-15.4166666667,167.883333333,east2443,omb,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,omb,false,false,VU,Hyslop-2001
amm,Ama,Papunesia,-4.21666666667,141.616666667,amap1240,amm,Left May,,Left May,cCC51C2,amm,false,false,PG,
amn,Amanab,Papunesia,-3.58333333333,141.25,aman1265,amn,Border,,Border,cCC9E51,amn,false,false,PG,Minch-1992
amo,Amo,Africa,10.3333333333,8.66666666667,amoo1242,amo,Niger-Congo,Benue-Congo,Central Kainji,c803374,amo,false,false,NG,Anderson-1980 Di-Luzio-1972
amp,Arrernte (Mparntwe),Australia,-24,136,east2379,aer,Pama-Nyungan,,Central Pama-Nyungan,c335F80,aer,false,false,AU,Henderson-1994 Henderson-and-Dobson-1999 Raimy-2000 Wilkins-1989
amq,Ambai,Papunesia,-1.83333333333,136.5,amba1265,amk,Austronesian,Eastern Malayo-Polynesian,South Halmahera - West New Guinea,c807433,amk,false,false,ID,Silzer-1983
amr,Arabic (Moroccan),Africa,34,-6,moro1292,ary,Afro-Asiatic,,Semitic,cB3CC51,ary,false,false,MA,Abdel-Massih-1973 Caubet-1993 Harrell-1962 Harrell-and-Sobelman-1966 Harrell-et-al-1965 Heath-1997 Maas-1999 Marcais-1977
ams,Arabic (Modern Standard),Eurasia,25,42,stan1318,arb,Afro-Asiatic,,Semitic,cB3CC51,arb,false,false,KW SO SY OM QA EG TN MA LY KM JO LB ER YE SA IQ PS DZ AE BH SD IL,Cowan-1958 Haywood-and-Nahmad-1965 Nasr-1967
amt,Amdo (Themchen),Eurasia,38,98,amdo1237,adx,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,adx,false,false,NP,Haller-2004
amu,Amuesha,South America,-10.5,-75.4166666667,yane1238,ame,Arawakan,,Yanesha',cCC5157,ame,false,false,PE,Duff-Tripp-1997 Fast-1953 Wise-1958 Wise-1978 Wise-1986 Wise-1990
amx,Anamuxra,Papunesia,-4.66666666667,145,anam1248,imi,Trans-New Guinea,Madang,Joseshstaal,c5159CC,imi,false,false,PG,Ingram-2001
amz,Amuzgo,North America,16.8333333333,-98,guer1243,amu,Oto-Manguean,,Amuzgoan,c516DCC,amu,false,false,MX,Bauernschmidt-1965 Longacre-1966
ana,Araona,South America,-12.3333333333,-67.75,arao1248,aro,Pano-Tacanan,,Tacanan,c338056,aro,false,true,BO,Gonzalez-1997 Pitman-1980 de-Pitman-1981
anc,Angas,Africa,9.5,9.5,ngas1240,anc,Afro-Asiatic,Chadic,West Chadic,cADCC51,anc,false,false,NG,Burquest-1971 Burquest-1973 Burquest-1986
ane,Anêm,Papunesia,-5.58333333333,149.083333333,anem1249,anz,,,,c7A8033,anz,false,false,PG,Thurston-1982
ang,Anggor,Papunesia,-3.75,141.166666667,ango1254,agg,Senagi,,Senagi,c337780,agg,false,false,PG,Litteral-1972 Litteral-1980
ani,//Ani,Africa,-18.9166666667,21.9166666667,anii1246,hnh,Khoe-Kwadi,,Khoe-Kwadi,c803362,hnh,false,false,BW,Heine-1999a Vossen-1986 Vossen-1997
anj,Anejom,Papunesia,-20.2,169.8,anei1239,aty,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,aty,false,false,VU,Lynch-1982a Lynch-2000
anl,Arabic (North Levantine Spoken),Eurasia,33.75,36,nort3139,apc,Afro-Asiatic,,Semitic,cB3CC51,apc,false,false,LB,Mitchell-and-Al-Hassan-1994
ann,Anindilyakwa,Australia,-14,136.5,anin1240,aoi,Gunwinyguan,,Anindilyakwa,c51BBCC,aoi,false,false,AU,Groote-Eylandt-Linguistics-1993 Leeding-1989
ano,Anong,Eurasia,27.3333333333,98.75,nung1282,nun,Sino-Tibetan,Tibeto-Burman,Nungish,c338073,nun,false,false,CN MM,Sun-1988
ant,Angaataha,Papunesia,-7.21666666667,146.25,anga1290,agm,Trans-New Guinea,,Angaataha,c763380,agm,false,false,PG,Huisman-1973 Huisman-and-Lloyd-1981 Huisman-et-al-1981
anu,Anufo,Africa,10.0833333333,0.25,anuf1239,cko,Niger-Congo,Kwa,Tano,c806233,cko,false,false,TG BJ GH,Smye-2004 Stanford-and-Stanford-1970
anx,Andi,Eurasia,42.75,46.25,andi1255,ani,Nakh-Daghestanian,Daghestanian,Avar-Andic-Tsezic,c7B51CC,ani,false,false,RU,Cercvadze-1967
any,Anywa,Africa,8,33.5,anua1242,anu,Eastern Sudanic,Nilotic,Western Nilotic,cCC6E51,anu,false,false,ET SS,Lusted-1976 Reh-1996
ao,Ao,Eurasia,26.5833333333,94.6666666667,aona1235,njo,Sino-Tibetan,Tibeto-Burman,Central Naga,c803350,njo,false,false,IN,Clark-1893 Coupe-1999 Coupe-2007 Gowda-1972 Gowda-1975 Gurubasave-1975 Mills-1926
aoj,Mufian,Papunesia,-3.5,143,mufi1238,aoj,Torricelli,,Kombio-Arapesh,c51CC56,aoj,false,false,PG,Alungum-et-al-1978 Wilson-2008
apa,Arabic (Palestinian),Eurasia,32,35.25,sout3123,ajp,Afro-Asiatic,,Semitic,cB3CC51,ajp,false,false,PS,Abu-Salim-1980 Abu-Salim-1982 Brahme-1973 Brahme-1974 Kenstowicz-and-Abdul-Karim-1980 Shahin-1995
apc,Apache (Chiricahua),North America,33.25,-108,mesc1238,apm,Na-Dene,,Athapaskan,c8C51CC,apm,false,false,US,Breuninger-et-al-1982 Hoijer-1946a
ape,Ampeeli,Papunesia,-6.75,146.083333333,safe1240,apz,Trans-New Guinea,,Nuclear Angan,c5187CC,apz,false,false,PG,
api,Apinayé,South America,-5.5,-48,apin1244,apn,Macro-Ge,Je,Je Setentrional,c807033,apn,false,false,BR,Burgess-and-Ham-1968 Callow-1962 Ham-et-al-1979 Martius-1863
apj,Apache (Jicarilla),North America,36.5833333333,-104,jica1244,apj,Na-Dene,,Athapaskan,c8C51CC,apj,false,false,US,Jung-2002 Mersol-1977
apk,A-Pucikwar,Eurasia,12.1666666667,92.8333333333,apuc1241,apq,Great Andamanese,,Great Andamanese,c804233,apq,false,false,IN,Portman-1887b
apl,Apalaí,South America,0,-54,apal1257,apy,Cariban,,Cariban,cCC9251,apy,false,false,BR,Koehn-and-Koehn-1986
apt,Apatani,Eurasia,27.5,93.75,apat1240,apt,Sino-Tibetan,Tibeto-Burman,Tani,c51CCBE,apt,false,false,IN,Abraham-1985
apu,Apurinã,South America,-9,-67,apur1254,apu,Arawakan,,Purus,cCC5A51,apu,true,true,BR,Derbyshire-and-Payne-1990 Facundes-2000 Pickering-1977 Polak-1894
apw,Apache (Western),North America,33.75,-110,west2615,apw,Na-Dene,,Athapaskan,c8C51CC,apw,false,false,US,Edgerton-1963 Perry-et-al-nd
ara,Lokono,South America,5.5,-55.1666666667,araw1276,arw,Arawakan,,Antillean Arawakan,cC8CC51,arw,false,false,SR,Bennett-1989 Pet-1979 Pet-1987 Taylor-1969a
arb,Arabela,South America,-2,-75.1666666667,arab1268,arl,Zaparoan,,Zaparoan,cCC9951,arl,false,false,PE,Derbyshire-and-Payne-1990 Rich-1963 Rich-1999 Wise-1999
arc,Archi,Eurasia,42,46.8333333333,arch1244,aqc,Nakh-Daghestanian,Daghestanian,Lezgic,c8051CC,aqc,false,false,RU,Corbett-1991 Kibrik-1975 Kibrik-1994a Kibrik-et-al-1977 Kodzasov-1977 Kodzasov-1999a
ard,Arandai,Papunesia,-2.08333333333,133,aran1237,jbj,South Bird's Head,,South Bird's Head Proper,c728033,jbj,false,false,ID,Voorhoeve-1985
arg,Arabic (Gulf),Eurasia,26,49,gulf1241,afb,Afro-Asiatic,,Semitic,cB3CC51,afb,false,false,KW OM QA IR SA IQ BH,Holes-1990 Qafisheh-1977
arh,Arabic (Hijazi),Eurasia,26,38,hija1235,acw,Afro-Asiatic,,Semitic,cB3CC51,acw,false,false,SA,Al-Mozainy-1981
ari,Aribwatsa,Papunesia,-6.71666666667,147,arib1241,laz,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,laz,false,false,PG,Holzknecht-1997a
arj,Arabic (Kuwaiti),Eurasia,29.5,47.5,gulf1241,afb,Afro-Asiatic,,Semitic,cB3CC51,afb,false,false,KW,
ark,Araki,Papunesia,-15.6666666667,166.916666667,arak1252,akr,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,akr,false,false,VU,Francois-2002
arl,Arabic (Lebanese),Eurasia,34,36,nort3139,apc,Afro-Asiatic,,Semitic,cB3CC51,apc,false,false,LB,Kenstowicz-and-Abdul-Karim-1980 McCarus-1992
arm,Armenian (Eastern),Eurasia,40,45,nucl1235,hye,Indo-European,,Armenian,c80333F,hye,false,true,AM,Abeghian-1936 Allen-1950 Fairbanks-1958 Garibjan-1976 Garibjan-and-Garibjan-1970 Greppin-2001 Gulian-1957 Gulian-1990 Gureghian-and-Gureghian-1999 Kozintseva-1995 Kozintseva-1999 Kozintseva-2001 Malherbe-and-Rosenberg-1996 Minassian-1980 Nichols-1992 Stevick-1955 Tumanjan-1966
arn,Arabic (Borno Nigerian),Africa,8.58333333333,12.4166666667,chad1249,shu,Afro-Asiatic,,Semitic,cB3CC51,shu,false,false,NG,Owens-1993
aro,Arosi,Papunesia,-10.25,161.333333333,aros1241,aia,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,aia,false,false,SB,Capell-1971 Fox-1978 Lynch-and-Horoi-2002
arp,Arapesh (Mountain),Papunesia,-3.46666666667,143.166666667,buki1249,ape,Torricelli,,Kombio-Arapesh,c51CC56,ape,true,true,PG,Aronoff-1994 Conrad-and-Wogiga-1991 Dobrin-1998 Fortune-1940 Fortune-1942 Fraser-and-Corbett-1997 Gerstner-1963
arq,Arabic (Iraqi),Eurasia,33,44,meso1252,acm,Afro-Asiatic,,Semitic,cB3CC51,acm,false,false,IQ,Erwin-1963
arr,Arrernte,Australia,-24,134,,,Pama-Nyungan,,Central Pama-Nyungan,c335F80,aer are,false,false,AU,Stolz-1996
ars,Arabic (San'ani),Eurasia,16,44,sana1295,ayn,Afro-Asiatic,,Semitic,cB3CC51,ayn,false,false,YE,Watson-1993
arv,Arabic (Negev),Eurasia,30.5,34.75,sout3123,ajp,Afro-Asiatic,,Semitic,cB3CC51,ajp,false,false,IL,Blanc-1971
arw,Armenian (Western),Eurasia,38.5,43.5,homs1234,hyw,Indo-European,,Armenian,c80333F,hyw,false,false,TR,Donabedian-1996 Greppin-2001 Gulian-1965 Sakayan-2000 Yacoubian-nd
arx,'Are'are,Papunesia,-9.25,161.166666667,area1240,alu,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,alu,false,false,SB,Geerts-1970
arz,Armenian (Iranian),Eurasia,32.6666666667,51.6666666667,nucl1235,hye,Indo-European,,Armenian,c80333F,hye,false,false,IR,
ash,Adyghe (Shapsugh),Eurasia,45,38.75,adyg1241,ady,Northwest Caucasian,,Northwest Caucasian,c5851CC,ady,false,false,RU,Smeets-1984
asl,American Sign Language,North America,39,-78,amer1248,ase,other,,Sign Languages,c515CCC,ase,false,false,CA US,Baker-Shenk-and-Cokely-1996 Deuchar-1987 Fischer-2003
asm,Asmat,Papunesia,-5.5,138.5,cent2117,cns,Asmat-Kamrau Bay,,Asmat-Kamrau Bay,cCCA851,cns,true,true,ID,Drabbe-1959a Drabbe-1959c Drabbe-1963 Voorhoeve-1965 Voorhoeve-1980
aso,Altai (Southern),Eurasia,51,87,sout2694,alt,Altaic,,Turkic,c778033,alt,false,false,RU,Baskakov-1966c Baskakov-1997a Dyrenkova-1940
ass,Assamese,Eurasia,26,93,assa1263,asm,Indo-European,,Indic,cCC5351,asm,false,false,IN,Goswami-1970 Goswami-and-Tamuli-2003 Malherbe-and-Rosenberg-1996
ast,Asturian,Eurasia,43.25,-6,astu1245,ast,Indo-European,,Romance,cCC5154,ast,false,false,ES,
asu,Asuriní,South America,-3.5,-49.5,toca1235,asu,Tupian,,Maweti-Guarani,cCC6351,asu,false,false,BR,Harrison-1970
asy,Arabic (Syrian),Eurasia,34,38,nort3139,apc,Afro-Asiatic,,Semitic,cB3CC51,apc,false,false,SY,Cowell-1964 McCarthy-1980
ata,Atayal,Papunesia,24.5,121.333333333,atay1247,tay,Austronesian,,Atayalic,c806B33,tay,false,false,TW,Egerod-1965 Egerod-1966a Egerod-1966b Egerod-1980 Rau-1992
atb,Aralle-Tabulahan,Papunesia,-2.75,119.25,aral1243,atq,Austronesian,,South Sulawesi,cCC6B51,atq,false,false,ID,McKenzie-1991
atc,Atchin,Papunesia,-16,167.333333333,urip1239,upv,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,upv,false,false,VU,Bybee-et-al-1994 Capell-and-Layard-1980
ath,Athpare,Eurasia,27,87.3333333333,athp1241,aph,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,aph,false,false,NP,Ebert-1997b Noonan-2003c
ati,Atikamekw,North America,48,-74,atik1240,atj,Algic,,Algonquian,c758033,atj,false,false,CA,Beland-1978
atk,Atakapa,North America,30,-93.5,atak1252,aqp,,,,cC7CC51,aqp,false,false,US,Gatschet-and-Swanton-1932 Nichols-1992 Swanton-1929
atm,Atacameño,South America,-23,-69,kunz1244,kuz,Kunza,,Kunza,cCC51AB,kuz,false,false,CL BO AR,Adelaar-2004
atq,Alutiiq,North America,57,-157,paci1278,ems,Eskimo-Aleut,,Eskimo,cCC7351,ems,false,false,US,Krauss-1985 Leer-1985a Leer-1985b Leer-1991a
ats,Atsugewi,North America,40.75,-121,atsu1245,atw,Hokan,Palaihnihan,Atsugewi,c336A80,atw,false,false,US,Olmsted-1958 Olmsted-1984 Walters-1977
atu,Arabic (Tunisian),Africa,36.75,10.25,tuni1259,aeb,Afro-Asiatic,,Semitic,cB3CC51,aeb,false,false,TN,Dahl-1985
au,Au,Papunesia,-3.58333333333,142.083333333,auuu1241,avt,Torricelli,,Central Wapei,cCCCA51,avt,false,false,PG,Scorza-1985
aul,Aulua,Papunesia,-16.3333333333,167.666666667,aulu1238,aul,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,aul,false,false,VU,
aus,Auslan,Australia,-30,145,aust1271,asf,other,,Sign Languages,c515CCC,asf,false,false,AU,
auy,Auyana,Papunesia,-6.5,145.75,awiy1238,auy,Trans-New Guinea,Kainantu-Goroka,Gauwa,cB151CC,auy,false,false,PG,McKaughan-and-Marks-1973
ava,Avar,Eurasia,42.5,46.5,avar1256,ava,Nakh-Daghestanian,Daghestanian,Avar-Andic-Tsezic,c7B51CC,ava,false,false,AZ RU,Bokarev-1949a Bokarev-1949b Charachidze-1981 Kalinina-1993 Kazenin-1993 Kodzasov-1999a Madieva-1967 Madieva-1980 Zhirkov-1936 von-Erckert-1895
avk,Avikam,Africa,5.16666666667,-5.5,avik1243,avi,Niger-Congo,Kwa,Avikam-Alladian,c3C3380,avi,false,false,CI,Schang-1995
avo,Avokaya,Africa,4.66666666667,30,avok1242,avu,Central Sudanic,,Moru-Ma'di,cAC51CC,avu,false,false,CD SS,Kilpatrick-1981 Kilpatrick-1984
avt,Avatime,Africa,6.83333333333,0.416666666667,avat1244,avn,Niger-Congo,Kwa,Ka-Togo,c603380,avn,false,false,GH,Schuh-1995
awa,Awa,Papunesia,-6.66666666667,145.75,awap1236,awb,Trans-New Guinea,Kainantu-Goroka,Gauwa,cB151CC,awb,false,false,PG,Loving-1973 Loving-and-Loving-1973 Loving-and-Loving-1975 Loving-and-McKaughan-1973 McKaughan-1973 McKaughan-and-Loving-1973
awd,Awadhi,Eurasia,27.5,81.5,awad1243,awa,Indo-European,,Indic,cCC5351,awa,false,false,IN NP,Saksena-1971
awe,Arrernte (Western),Australia,-24,132.5,west2441,are,Pama-Nyungan,,Central Pama-Nyungan,c335F80,are,false,false,AU,Strehlow-1942 Strehlow-1944
awi,Aekyom,Papunesia,-5.75,141.416666667,aeky1238,awi,Kamula-Elevala,,Elevala,c806C33,awi,false,false,PG,Horowitz-2008 Voorhoeve-1975
awk,Akwa,Africa,0.0,16.5,akwa1248,akw,Niger-Congo,Benue-Congo,Bantu,cC3CC51,akw,false,false,CG,Aksenova-and-Toporova-2002
awn,Awngi,Africa,10.8333333333,36.6666666667,awng1244,awn,Afro-Asiatic,Cushitic,Central Cushitic,c6E8033,awn,false,false,ET,Bybee-et-al-1994 Hetzron-1969 Hetzron-1976 Hetzron-1997
awp,Awa Pit,South America,1.5,-78.25,awac1239,kwi,Barbacoan,,Barbacoan,cCCA451,kwi,false,true,EC CO,Curnow-1997 Huber-and-Reed-1992 Obando-Ordonez-1992
awt,Awtuw,Papunesia,-3.58333333333,142,awtu1239,kmn,Sepik,,Ram,c337A80,kmn,false,false,PG,Feldman-1986 Nichols-1992
awy,Awyi,Papunesia,-2.91666666667,140.583333333,awyi1241,auw,Border,,Border,cCC9E51,auw,false,false,ID,Voorhoeve-1971
axv,Akhvakh,Eurasia,42.3333333333,46.3333333333,akhv1239,akv,Nakh-Daghestanian,Daghestanian,Avar-Andic-Tsezic,c7B51CC,akv,false,false,RU,Boguslavskaja-1989 Gudava-1964
ayi,Anyi,Africa,7,-3.5,anyi1245,any,Niger-Congo,Kwa,Tano,c806233,any,false,false,CI,Retord-1981
aym,Aymara (Central),South America,-17,-69,cent2142,ayr,Aymaran,,Aymaran,cCCA951,ayr,false,true,CL BO PE,De-Torres-Rubio-1966 Deza-Galindo-1992 Ebbing-1965 Grondin-1973 Hardman-1986 Hardman-2001 Hardman-de-Bautista-1974 Hardman-de-Bautista-et-al-1988 Martin-1969 Wexler-1967 de-Lucca-1983
ayn,Aynu,Eurasia,39.5,76,ainu1251,aib,Altaic,,Turkic,c778033,aib,false,false,CN,Hayasi-et-al-1999
ayo,Ayomán,South America,11,-69,ayom1234,,Jirajaran,,Jirajaran,cCC5177,,false,false,VR,Adelaar-2004 Oramas-1915
ayr,Ayoreo,South America,-20.25,-59.25,ayor1240,ayo,Zamucoan,,Zamucoan,c806033,ayo,false,false,PY,Adelaar-2004 Susnik-1963
ayw,Ayiwo,Papunesia,-10.3333333333,166.25,ayiw1239,nfl,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,nfl,false,false,SB,Wurm-1981 Wurm-et-al-1985
aze,Azerbaijani,Eurasia,40.5,48.5,,,Altaic,,Turkic,c778033,azb azj,false,false,AZ IR,Achundova-1971 Agazade-1967 Dahl-1985 Gadzhieva-1966 Householder-and-Lofti-1965 Malherbe-and-Rosenberg-1996 Schonig-1998c Shiraliev-1997
azi,Azari (Iranian),Eurasia,37.5,47,sout2697,azb,Altaic,,Turkic,c778033,azb,false,false,IR IQ,Dehghani-2000
baa,Barai,Papunesia,-9.33333333333,148.083333333,nucl1630,bbb,Trans-New Guinea,,Koiarian,c3B8033,bbb,false,false,PG,Olson-1973 Olson-1975 Olson-1979
bab,Babungo,Africa,6.11666666667,10.4166666667,veng1238,bav,Niger-Congo,Benue-Congo,Wide Grassfields,c7D3380,bav,false,false,CM,Schaub-1985
bac,Bachamal,Australia,-13.1666666667,130.166666667,wadj1254,wdj,Wandjiginy,,Wandjiginy,c51CC9E,wdj,false,false,AU,Ford-1990
bad,Bade,Africa,12.8333333333,10.5,bade1248,bde,Afro-Asiatic,Chadic,West Chadic,cADCC51,bde,false,false,NG,Schuh-1977
bae,Baré,South America,1,-67,bare1276,bae,Arawakan,,Japura-Colombia,c9A51CC,bae,false,false,BR VR,Aikhenvald-1996 Aikhenvald-1999 Aikhenvald-2007b Chaffanjon-1889
baf,Bafut,Africa,6.25,9.91666666667,bafu1246,bfd,Niger-Congo,Benue-Congo,Wide Grassfields,c7D3380,bfd,false,false,CM,Chumbow-and-Tamanji-1994
bag,Bagirmi,Africa,11.6666666667,16,bagi1246,bmi,Central Sudanic,,Bongo-Bagirmi,c643380,bmi,true,true,TD,Gaden-1909 Stevenson-1969
bah,Xiriana,South America,2.66666666666667,-62.5,xiri1243,xir,Arawakan,,Negro-Roraima+Q284,c803357,xir,false,false,BR,Ramirez-1992 Stolz-1996
bai,Bai,Eurasia,26,100,cent2004,bca,Sino-Tibetan,Tibeto-Burman,Macro-Bai,c334D80,bca,false,false,CN,Dell-1981 Fitzgerald-1941 Wiersma-2003 Xu-and-Zhao-1984
baj,Bajau (Sama),Papunesia,-4.33333333333,123,indo1317,bdl,Austronesian,,Sama-Bajaw,cCCBD51,bdl,false,false,ID,Donohue-1996 Verheijen-1986
bak,Baka (in Cameroon),Africa,2.58333333333,13.5833333333,baka1272,bkc,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,bkc,false,false,CM,Kilian-Hatz-1989 Kilian-Hatz-1995
bal,Balinese,Papunesia,-8.33333333333,115.25,bali1278,ban,Austronesian,,Malayo-Sumbawan,cCC7D51,ban,false,false,ID,Barber-1977 Clynes-1995b Clynes-nd Kersten-1948 Sugiarto-1993 Ward-1973
bam,Bambara,Africa,12.5,-7.5,bamb1269,bam,Mande,,Western Mande,c6751CC,bam,false,true,ML,Anonymous-1990 Bailleul-1981 Bird-and-Kante-1976 Bird-and-Kante-1977 Bird-et-al-1977 Brauner-1974 Campbell-2000 Kastenholz-1989 Kastenholz-1998 Malherbe-and-Rosenberg-1996 Vydrine-2007
ban,Bana,Africa,10.4166666667,13.5833333333,bana1305,bcw,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,bcw,false,false,CM,Hofmann-1990
bao,Bao'an,Eurasia,35.75,102.833333333333,bona1250,peh,Altaic,,Mongolic,cBECC51,peh,false,false,CN,Todaeva-1997a Wu-2003
baq,Baure,South America,-13.0833333333,-64.1666666667,baur1253,brg,Arawakan,,Bolivia-Parana,c803533,brg,false,false,BO,Baptista-and-Wallin-1967
bar,Bari,Africa,5,31.6666666667,bari1284,bfa,Eastern Sudanic,Nilotic,Eastern Nilotic,c807E33,bfa,false,false,SS,Bybee-et-al-1994 Mitterrutzner-1867 Spagnolo-1933 Stolz-1996
bas,Basaá,Africa,3.91666666667,10.5,basa1284,bas,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bas,false,false,CM,Hyman-2003 Schurle-1912
bat,Batak,Papunesia,10.25,119.083333333,bata1301,bya,Austronesian,,Greater Central Philippine,cCC8E51,bya,false,false,PH,Llamzon-1978
bau,Bau,Papunesia,-5.25,145.616666667,bauu1244,bbd,Trans-New Guinea,Madang,Mabuso,cCC5197,bbd,false,false,PG,ZGraggen-1969
baw,Bawm,Eurasia,22.5,92.25,bawm1236,bgr,Sino-Tibetan,Tibeto-Burman,Kuki-Chin,c51CCB8,bgr,false,true,BD IN MM,Reichle-1981
bbf,Bobo Madaré (Northern),Africa,12.4166666666667,-4.3333333333333,,bbo,Mande,,Western Mande,c6751CC,bbo,false,false,BF,Bris-and-Prost-1981 Morse-1976 Prost-1983
bbl,Babole,Africa,1.08333333333,17.25,dibo1245,bvx,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bvx,false,false,CG,Leitch-1994
bbm,Bambam,Papunesia,-3.08333333333,119.083333333,bamb1270,ptu,Austronesian,,South Sulawesi,cCC6B51,ptu,false,false,ID,Campbell-1991
bbu,Barambu,Africa,3.5,27,bara1361,brm,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,brm,false,false,CD,Santandrea-1965b Tucker-and-Bryan-1966
bbw,Bininj Gun-Wok,Australia,-12.5,133.75,gunw1252,gup,Gunwinyguan,,Marne,c61CC51,gup,false,false,AU,Evans-1997 Evans-2003 Evans-2004 Evans-et-al-2002 Oates-1964a
bca,Bandjalang (Casino),Australia,-28.9166666667,153,band1339,bdy,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,bdy,false,false,AU,Crowley-1978
bch,Berber (Chaouia),Africa,35,7,tach1249,shy,Afro-Asiatic,,Berber,cAACC51,shy,false,false,DZ,Penchoen-1973a
bco,Bella Coola,North America,52.5,-126.666666667,bell1243,blc,Salishan,,Bella Coola,c337380,blc,false,false,CA,Davis-and-Saunders-1978 Davis-and-Saunders-1980 Davis-and-Saunders-1997 Nater-1984 Newman-1933 Newman-1947 Newman-1969
bdc,Berbice Dutch Creole,South America,5.33333333333,-58,berb1259,brc,other,,Creoles and Pidgins,c333D80,brc,false,false,GY,Kouwenberg-1994
bdg,Badaga,Eurasia,11.6666666667,76.75,bada1257,bfq,Dravidian,,Dravidian,cB7CC51,bfq,false,false,IN,Hockings-and-Pilot-Raichoor-1992
bdk,Budukh,Eurasia,41.1666666667,48.4166666667,budu1248,bdk,Nakh-Daghestanian,Daghestanian,Lezgic,c8051CC,bdk,false,false,AZ,Alekseev-1994a
bdm,Badimaya,Australia,-27.6666666667,118,badi1246,bia,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,bia,false,false,AU,Dunn-1988
bdu,Budu,Africa,2,28,budu1250,buu,Niger-Congo,Benue-Congo,Bantu,cC3CC51,buu,false,false,CD,Asangama-1983
bdw,Baham,Papunesia,-3.16666666667,132.666666667,baha1258,bdw,Greater West Bomberai,,West Bomberai,cC6CC51,bdw,false,false,ID,Flassy-et-al-1984
beb,Benabena,Papunesia,-6.16666666667,145.5,bena1264,bef,Trans-New Guinea,Kainantu-Goroka,Siane-Yagaria,c55CC51,bef,false,false,PG,Young-1971
bec,Bengali (Chittagong),Eurasia,22.3333333333,91.8333333333,chit1275,ctg,Indo-European,,Indic,cCC5351,ctg,false,false,BD,Ucida-1970
bee,Beembe,Africa,-3.91666666667,14.0833333333,beem1239,beq,Niger-Congo,Benue-Congo,Bantu,cC3CC51,beq,false,false,CG,Jacquot-1962 Jacquot-1981
beg,Begak-Ida'an,Papunesia,5.25,118.833333333,idaa1241,dbj,Austronesian,,North Borneo,c804E33,dbj,false,false,MY,
bej,Beja,Africa,18,36,beja1238,bej,Afro-Asiatic,Cushitic,Beja,c6A8033,bej,false,true,ER SD,Almkvist-1881 Dahl-1984 Dahl-1985 Hudson-1964 Hudson-1974 Hudson-1976b Reinisch-1893 Rossini-1912
bel,Belhare,Eurasia,26.9666666667,87.3,belh1239,byw,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,byw,false,false,NP,Bickel-1996 Bickel-2001 Bickel-2003 Bickel-and-Nichols-2007
bem,Bemba,Africa,-10,28.25,bemb1257,bem,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bem,false,false,CD,Hoch-1960 Sharman-1963 Sims-1959 van-Sambeek-1955
ben,Bengali,Eurasia,24,90,beng1280,ben,Indo-European,,Indic,cCC5351,ben,false,false,BD IN,Abbi-1992 Bykova-1981 Dahl-1985 Dasgupta-2003 Dimock-1965 Ferguson-1972 Ferguson-and-Chowdhury-1960 Klaiman-1990 Malherbe-and-Rosenberg-1996 Radice-1994
beo,Beothuk,North America,48,-57,beot1247,bue,,,,cCCA151,bue,false,false,CA,Hewson-1978
ber,Berta,Africa,10.3333333333,34.6666666667,bert1248,wti,,,,c333980,wti,false,false,ET SD,Andersen-1995 Triulzi-et-al-1976a Triulzi-et-al-1976b Tucker-and-Bryan-1966
bet,Bété,Africa,6.25,-6.25,dalo1238,bev,Niger-Congo,,Kru,c6F51CC,bev,false,false,CI,Koopman-1984 Werle-and-Gbalehi-1976
bez,Bezhta,Eurasia,42.0833333333,46.1666666667,bezh1248,kap,Nakh-Daghestanian,Daghestanian,Avar-Andic-Tsezic,c7B51CC,kap,false,false,RU,Boguslavskaja-1989 Bokarev-1959 Bokarev-1967a Kibrik-1981 Madieva-1965 van-den-Berg-2000
bfd,Biafada,Africa,11.4166666667,-15.1666666667,biaf1240,bif,Niger-Congo,North-Central Atlantic,Jaad,c688033,bif,false,false,GW,Wilson-1993
bfg,Berber (Figuig),Africa,32.5,-1.5,tazn1238,grr,Afro-Asiatic,,Berber,cAACC51,grr,false,false,MA,Kossmann-1997 Naumann-2000
bfi,Bafia,Africa,5,11.1666666667,bafi1243,ksf,Niger-Congo,Benue-Congo,Bantu,cC3CC51,ksf,false,false,CM,Guarisma-1967 Guarisma-1973
bga,Benga,Africa,1.16666666667,9.41666666667,beng1282,bng,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bng,false,false,GQ GA,Mackey-and-Nassau-1892
bgg,Banggai,Papunesia,-1.41666666667,123.166666667,bang1368,bgz,Austronesian,,Celebic,c803F33,bgz,false,false,ID,van-den-Bergh-1953
bgi,Bagri,Eurasia,29.5833333333,74.3333333333,bagr1243,bgq,Indo-European,,Indic,cCC5351,bgq,false,false,IN,Gusain-2000
bgl,Buglere,North America,8.5,-81.25,bugl1243,sab,Chibchan,,Guaymiic,c51CC81,sab,false,false,PA,
bgm,Bangime,Africa,14.9166666667,-3.83333333333,bang1363,dba,,,,c806633,dba,false,false,ML,Blench-2005
bgn,Bugun,Eurasia,27.5,92.5833333333,bugu1246,bgg,Sino-Tibetan,Tibeto-Burman,Kho-Bwa,c51CC87,bgg,false,false,IN,Dondrup-1990
bgo,Bongo,Africa,7.5,28.5,bong1285,bot,Central Sudanic,,Bongo-Bagirmi,c643380,bot,false,false,SS,Santandrea-1963
bgr,Bagiro,Africa,4.33333333333,20.5833333333,furu1242,fuu,Central Sudanic,,Bongo-Bagirmi,c643380,fuu,false,false,CF CD,Boyeldieu-2000
bgs,Baga Sitemu,Africa,10.5,-14.5,baga1272,bsp,Niger-Congo,Mel,Northern Mel,c807B33,bsp,false,false,GN,Ganong-1998
bgv,Bagvalal,Eurasia,42.5833333333,46.1666666667,bagv1239,kva,Nakh-Daghestanian,Daghestanian,Avar-Andic-Tsezic,c7B51CC,kva,false,false,RU,Daniel-2001 Gudava-1964 Kibrik-2001 Kodzasov-1999a
bgz,Banggi,Papunesia,7.25,117.166666667,bong1289,bdg,Austronesian,,North Borneo,c804E33,bdg,false,false,MY,Boutin-1988
bhi,Bhili,Eurasia,22,73,bhil1251,bhb,Indo-European,,Indic,cCC5351,bhb,false,false,IN,
bhn,Bahinemo,Papunesia,-4.58333333333,142.833333333,bahi1254,bjh,Sepik,,Sepik Hill,c51C4CC,bjh,false,false,PG,
bho,Bhojpuri,Eurasia,26,84,bhoj1244,bho,Indo-European,,Indic,cCC5351,bho,false,false,IN,Shukla-1981 Trammell-1971 Verma-2003a
bhu,Bhumij,Eurasia,21.3333333333,86.5,mund1320,unr,Austro-Asiatic,,Munda,c807D33,unr,false,false,IN,Ramaswami-1992
bia,Bila,Africa,1,28.75,bila1255,bip,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bip,false,false,CD,Kutsch-Lojenga-2003 Meinhof-1938-39
bid,Bidiya,Africa,11.9166666667,18.75,bidi1241,bid,Afro-Asiatic,Chadic,East Chadic,cA7CC51,bid,false,false,TD,Alio-1986
big,Binga,Africa,8,25,bing1248,yul,Central Sudanic,,Bongo-Bagirmi,c643380,yul,false,false,CF SS,Santandrea-1956
bii,Biri,Australia,-20.5,146.5,biri1256,bzr,Pama-Nyungan,,Northern Pama-Nyungan,c336680,bzr,false,false,AU,Terrill-1998
bik,Biak,Papunesia,-1,136,biak1248,bhw,Austronesian,Eastern Malayo-Polynesian,South Halmahera - West New Guinea,c807433,bhw,false,false,ID,Van-Hasselt-1905 van-den-Heuvel-2006
bil,Bilua,Papunesia,-7.75,156.666666667,bilu1245,blb,Solomons East Papuan,,Bilua,c51CC9B,blb,false,false,SB,Obata-2003
bim,Bima,Papunesia,-8.5,118.5,bima1247,bhp,Austronesian,,Central Malayo-Polynesian,c807633,bhp,false,false,ID,Verheijen-1982
bin,Binandere,Papunesia,-8.25,148,bina1277,bhg,Trans-New Guinea,Greater Binanderean,Binanderean,c64CC51,bhg,false,false,PG,Wilson-1996
bio,Nai,Papunesia,-3.71666666667,141.266666667,naii1241,bio,Kwomtari,,Kwomtari,cCC51BC,bio,false,false,PG,Hamlin-1998
biq,Bilaan (Koronadal),Papunesia,6,125.333333333,,bpr,Austronesian,,Bilic,cCC8251,bpr,false,false,PH,Llamzon-1978
bir,Birom,Africa,9.66666666667,8.83333333333,bero1242,bom,Niger-Congo,Benue-Congo,Benue-Congo Plateau,cB1CC51,bom,false,false,NG,Bouquiaux-1970 Wolff-1959
bis,Bisa,Africa,11.5,-0.5,biss1248,bib,Mande,,Eastern Mande,c403380,bib,false,false,BF GH,Naden-1973 Prost-1950 Stolz-1996
bit,Biatah,Papunesia,1.25,110,biat1246,bth,Austronesian,,Land Dayak,c806A33,bth,false,false,MY ID,Omar-1983
biu,Bisu,Eurasia,19.75,100,bisu1246,,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,bzi lwm,false,false,TH,Nishida-1973 Shixuan-2001
bjs,Sama (Southern),Papunesia,4.5,118.5,sout2918,ssb,Austronesian,,Sama-Bajaw,cCCBD51,ssb,false,false,MY PH,Omar-1983
bka,Baka (in South Sudan),Africa,4.83333333333,29.25,baka1274,bdh,Central Sudanic,,Bongo-Bagirmi,c643380,bdh,false,false,SS,Santandrea-1976 Tucker-and-Bryan-1966
bkb,Betta Kurumba,Eurasia,11.5,76.75,bett1235,xub,Dravidian,,Dravidian,cB7CC51,xub,false,false,IN,Coelho-2003
bkd,Binukid,Papunesia,8.25,124.833333333,binu1244,bkd,Austronesian,,Greater Central Philippine,cCC8E51,bkd,false,false,PH,Llamzon-1978 Otanes-and-Wrigglesworth-1992 Reid-1971
bki,Bakairí,South America,-14,-55,baka1277,bkq,Cariban,,Cariban,cCC9251,bkq,false,false,BR,Wheatley-1969 Wheatley-1973
bkl,Bikol,Papunesia,13.3333333333,123.5,cent2087,bcl,Austronesian,,Greater Central Philippine,cCC8E51,bcl,false,false,PH,Mintz-1971a Mintz-1971b Mintz-1973 Mintz-2001 Mintz-and-Del-Rosario-Britanico-1985 Stolz-1996
bkn,Bakundu,Africa,4.83333333333,9.33333333333,orok1266,bdu,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bdu,false,false,CM,Ittmann-1971
bkr,Batak (Karo),Papunesia,3.25,98.25,bata1293,btx,Austronesian,,Northwest Sumatra-Barrier Islands,cCC7751,btx,false,true,ID,Joustra-1901 Neumann-1922 Woollams-1996
bkt,Brokskat,Eurasia,35.3333333333,76.5,brok1247,bkk,Indo-European,,Indic,cCC5351,bkk,false,false,PK IN,Ramaswami-1982 Sharma-1998
bku,Bakueri,Africa,4.25,9.25,mokp1239,bri,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bri,false,false,CM,Kagaya-1992
bla,Blackfoot,North America,50,-112.666666667,siks1238,bla,Algic,,Algonquian,c758033,bla,false,false,CA US,Frantz-1971 Frantz-1991 Frantz-and-Russell-1989 Frantz-and-Russell-1995 Taylor-1969b Uhlenbeck-1938
blc,Baluchi,Eurasia,28,62,west2368,bgn,Indo-European,,Iranian,c803335,bgn,false,false,PK AF IR,Bybee-et-al-1994 Elfenbein-1997b Gilbertson-1923 Malherbe-and-Rosenberg-1996
ble,Baoulé,Africa,7,-5,baou1238,bci,Niger-Congo,Kwa,Tano,c806233,bci,false,false,CI,Ahoua-1996 Carteron-1972 Gross-1967
blg,Balangao,Papunesia,17.1666666667,121.166666667,bala1310,blw,Austronesian,,Northern Luzon,c805533,blw,false,false,PH,Shetler-1976
blj,Baale,Africa,6.5,34.5,kaci1244,koe,Eastern Sudanic,Surmic,South Surmic,c806933,koe,false,false,SS,Yigezu-and-Dimmendaal-1998
blk,Balantak,Papunesia,-0.833333333333,123.25,bala1315,blz,Austronesian,,Celebic,c803F33,blz,false,false,ID,Busenitz-and-Busenitz-1991
bln,Bilin,Africa,15.75,38.5,bili1260,byn,Afro-Asiatic,Cushitic,Central Cushitic,c6E8033,byn,false,false,ER,Hetzron-1976 Palmer-1958 Palmer-1965 Reinisch-1882 Tucker-and-Bryan-1966
blq,Bole,Africa,11.3333333333,11.25,nucl1695,bol,Afro-Asiatic,Chadic,West Chadic,cADCC51,bol,false,false,NG,Frajzyngier-1987 Gimba-2000
blr,Belorussian,Eurasia,54,28,bela1254,bel,Indo-European,,Slavic,c803338,bel,false,false,BY,Birillo-et-al-1966 Malherbe-and-Rosenberg-1996 Mayo-1993 Pashkevich-1978 Ushkevich-and-Zezulin-1992
blt,Balti,Eurasia,35,76,balt1258,bft,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,bft,false,false,PK IN,Read-1934 Sprigg-2002
blu,Bena-Lulua,Africa,-6,21,luba1249,lua,Niger-Congo,Benue-Congo,Bantu,cC3CC51,lua,false,false,CD,DeClercq-1897
blx,Biloxi,North America,30.5,-88.6666666667,bilo1248,bll,Siouan,,Ohio Valley Siouan,cCC9151,bll,false,false,US,Dorsey-and-Swanton-1912 Einaudi-1976
bly,Palyku,Australia,-22,120,nija1241,nad,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,nad,false,false,AU,
blz,Balanta,Africa,12.25,-15.3333333333,bala1300,,Niger-Congo,North-Central Atlantic,Balanta,c805733,bjt ble,false,false,GW SN,Fudemann-1999 Wilson-1961b
bma,Berber (Middle Atlas),Africa,33,-5,cent2194,tzm,Afro-Asiatic,,Berber,cAACC51,tzm,true,true,MA,Abdel-Massih-1971 Johnson-1966 Malherbe-and-Rosenberg-1996 Moravcsik-1978 Penchoen-1973a Penchoen-1973b Quitout-1997 Willms-1972
bmb,Bimoba,Africa,10.5,0,bimo1239,bim,Niger-Congo,Gur,Oti-Volta,cCCB351,bim,false,false,GH,Jacobs-1970
bmn,Bamun,Africa,5.5,10.9166666667,bamu1253,bax,Niger-Congo,Benue-Congo,Wide Grassfields,c7D3380,bax,false,false,CM,
bmr,Burum,Papunesia,-6.5,147.333333333,buru1306,bmu,Trans-New Guinea,Finisterre-Huon,Huon,c804C33,bmu,false,false,PG,Gasaway-1997
bmz,Berber (Mzab),Africa,32.5,3.5,tumz1238,mzb,Afro-Asiatic,,Berber,cAACC51,mzb,false,false,DZ,Lounis-1897
bna,Banawá,South America,-7,-65,bana1307,jaa,Arauan,,Arauan,cC4CC51,jaa,false,false,BR,Buller-and-Buller-1986
bnb,Bunuba,Australia,-17.75,125.75,buna1275,bck,Bunuban,,Bunuban,c33805F,bck,false,false,AU,Rumsey-2000
bnd,Bandi,Africa,8.08333333333,-10.25,band1352,bza,Mande,,Western Mande,c6751CC,bza,false,false,LR,
bng,Qaqet,Papunesia,-4.58333333333,152,qaqe1238,byx,Baining,,Baining,cCCA651,byx,false,false,PG,Bybee-et-al-1994 Parker-and-Parker-1974
bni,Bini,Africa,6.41666666667,5.83333333333,bini1246,bin,Niger-Congo,Benue-Congo,Edoid,c3B3380,bin,false,false,NG,Dunn-1968
bnj,Bandjalang,Australia,-28.75,153,band1339,bdy,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,bdy,false,false,AU,Crowley-1978 Dahl-1985 Fabricius-1998 Lynch-1998 Sharpe-1999
bnk,Bankon,Africa,4.41666666667,9.58333333333,bank1256,abb,Niger-Congo,Benue-Congo,Wide Grassfields,c7D3380,abb,false,false,CM,Spellenberg-1969
bnl,Banggarla,Australia,-32,137,bang1339,bjb,Pama-Nyungan,,Central Pama-Nyungan,c335F80,bjb,false,false,AU,Schurmann-1844
bnm,Binumarien,Papunesia,-6.28333333333,146.083333333,binu1245,bjr,Trans-New Guinea,Kainantu-Goroka,Tairora,cA651CC,bjr,false,false,PG,Oatridge-et-al-1973
bnn,Banoni,Papunesia,-6.41666666667,155.25,bann1247,bcm,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,bcm,false,false,PG,Lincoln-1976 Lynch-and-Ross-2002
bno,Waimaha,South America,0.333333333333,-70.25,waim1255,bao,Tucanoan,,Tucanoan,c6FCC51,bao,false,false,CO,Huber-and-Reed-1992 Stolte-and-Stolte-1971
bnq,Beng,Africa,7.83333333333,-4.25,beng1286,nhb,Mande,,Eastern Mande,c403380,nhb,false,false,CI,Gottlieb-and-Murphy-1995
bnr,Bilinarra,Australia,-16,131.666666667,bili1250,nbj,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,nbj,false,false,AU,Nordlinger-1990
bnt,Bantik,Papunesia,1.41666666667,124.75,bant1286,bnq,Austronesian,,Sangiric,c804333,bnq,false,false,ID,Sneddon-1984
bnu,Bularnu,Australia,-21,138,bula1255,,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,,false,false,AU,Breen-1980
bnv,Baniva,South America,5.26,-67.56,bani1254,bvv,Arawakan,,Alto-Orinoco,c334A80,bvv,false,false,,Aikhenvald-1998 Tavera-Acosta-1907
bnw,Baniwa,South America,2.66666666667,-66.8333333333,bani1255,bwi,Arawakan,,Japura-Colombia,c9A51CC,bwi,false,false,BR VR,Aikhenvald-1998 Aikhenvald-2007b Tavera-Acosta-1907
boa,Boazi (Kuni),Papunesia,-7,141.333333333,kuni1265,kvg,Trans-New Guinea,Anim,Boazi,c51CC93,kvg,false,false,PG,Boelaars-1950 Drabbe-1954
bob,Bobangi,Africa,-1.33333333333,17.3333333333,bang1354,bni,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bni,false,false,CD,Bokamba-1975 Whitehead-1899
bod,Bodo,Eurasia,26.8333333333,92,bodo1269,brx,Sino-Tibetan,Tibeto-Burman,Brahmaputran,c6C51CC,brx,false,false,IN,Bhat-1968 Bhattacharya-1977 Subbarao-and-Murthy-2000 Subbarao-et-al-2000
boi,Boiken,Papunesia,-3.5,143.5,boik1241,bzf,Sepik,,Ndu,c6B8033,bzf,false,false,PG,Laycock-1965a
boj,Bori,Eurasia,28.3333333333,94.75,bori1243,adi,Sino-Tibetan,Tibeto-Burman,Tani,c51CCBE,adi,false,false,IN,Megu-1988
bok,Boko,Africa,10.5,3.5,boko1266,bqc,Mande,,Eastern Mande,c403380,bqc,false,false,NG BJ,Jones-1998b
bol,Bolia,Africa,-1.25,18.3333333333,boli1255,bli,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bli,false,false,CD,Mamet-1960
bon,Bongu,Papunesia,-5.5,145.916666667,bong1291,bpu,Trans-New Guinea,Madang,Rai Coast,c51CCC1,bpu,false,false,PG,Bybee-et-al-1994 Hanke-1909
boq,Bokar,Eurasia,28.5,94.6666666667,boka1249,,Sino-Tibetan,Tibeto-Burman,Tani,c51CCBE,,false,false,IN,Megu-1990
bor,Bora,South America,-2.16666666667,-72.3333333333,bora1263,boa,Boran,,Boran,cCC5651,boa,false,false,CO PE,Aschmann-1993 Derbyshire-and-Payne-1990 Thiesen-1996 Wise-1978
bos,Bosnian,Eurasia,43,18,bosn1245,bos,Indo-European,,Slavic,c803338,bos,false,false,BA,
bou,Berber (Wargla),Africa,31.9166666667,5.33333333333,taga1278,oua,Afro-Asiatic,,Berber,cAACC51,oua,false,false,DZ,Quitout-1997
boz,Bozo (Tigemaxo),Africa,15,-4,tiey1235,boz,Mande,,Western Mande,c6751CC,boz,false,false,ML,Blecke-1996
bpa,Bura-Pabir,Africa,10.5,12.25,bura1292,bwr,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,bwr,false,false,NG,Gil-1982
bpb,Bahnar,Eurasia,13.8333333333,108.333333333,bahn1262,bdq,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,bdq,false,false,VN,Banker-et-al-1979
bqb,Basque (Bidasoa Valley),Eurasia,43,-3.83333333333,basq1248,eus,Basque,,Basque,c806433,eus,false,false,ES,Hualde-1999
bqg,Basque (Gernica),Eurasia,43.3333333333,-3,basq1248,eus,Basque,,Basque,c806433,eus,false,false,ES,Hualde-1999
bqh,Basque (Hondarribia),Eurasia,42.5,-3,basq1248,eus,Basque,,Basque,c806433,eus,false,false,ES,Hualde-1999
bqi,Basque (Basaburua and Imoz),Eurasia,43,-1.66666666667,basq1248,eus,Basque,,Basque,c806433,eus,false,false,ES,Hualde-1999 Ibarra-1994
bql,Basque (Lekeitio),Eurasia,43,-2.5,basq1248,eus,Basque,,Basque,c806433,eus,false,false,ES,Hualde-1999
bqn,Basque (Northern High Navarrese),Eurasia,43.3333333333,-2.5,basq1248,eus,Basque,,Basque,c806433,eus,false,false,ES,Hualde-1999 Ibarra-1994
bqo,Basque (Oñati),Eurasia,42.5,-3.5,basq1248,eus,Basque,,Basque,c806433,eus,false,false,ES,Hualde-1999
bqr,Basque (Roncalese),Eurasia,43,-2,basq1248,eus,Basque,,Basque,c806433,eus,false,false,ES,Hualde-1999
bqs,Basque (Sakana),Eurasia,42.5,-2,basq1248,eus,Basque,,Basque,c806433,eus,false,false,ES,Hualde-1991 Hualde-1999
bqz,Basque (Zeberio),Eurasia,42,-3,basq1248,eus,Basque,,Basque,c806433,eus,false,false,ES,Hualde-1999
bra,Brao,Eurasia,14.1666666667,107.5,lave1249,brb,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,brb,false,false,VN,Keller-1976
brb,Bariba,Africa,10,2.5,baat1238,bba,Niger-Congo,Gur,Baatonum,c333880,bba,false,false,NG BJ,Welmers-1952a
brc,Boruca,North America,8.83333333333,-83.25,boru1252,brn,Chibchan,,Western Isthumus Chibchan,cCCBF51,brn,false,false,CR,Arroyo-1972
brd,Bardi,Australia,-16.5833333333,122.916666667,bard1255,bcj,Nyulnyulan,,Nyulnyulan,cCCBB51,bcj,false,false,AU,Metcalfe-1971
bre,Breton,Eurasia,48,-3,bret1244,bre,Indo-European,,Celtic,c80333C,bre,false,false,FR,Bothorel-1982 Delaporte-1986 Malherbe-and-Rosenberg-1996 Press-1986 Schapansky-2000 Stephens-1993 Ternes-1970 Ternes-1992 Timm-1991 Wmffre-1998
brf,Berber (Rif),Africa,34.5,-4,tari1263,rif,Afro-Asiatic,,Berber,cAACC51,rif,false,false,MA DZ,Kossmann-2000
brh,Brahui,Eurasia,28.5,67,brah1256,brh,Dravidian,,Dravidian,cB7CC51,brh,false,true,PK,Andronov-1971 Andronov-1980 Andronov-2001 Bray-1909 Bray-1986 De-Armond-1975 Elfenbein-1997c Elfenbein-1998 Emeneau-1937 Emeneau-1962 Rai-1985 Steever-1998a
bri,Bribri,North America,9.41666666667,-83,brib1243,bzd,Chibchan,,Western Isthumus Chibchan,cCCBF51,bzd,false,true,CR,Arroyo-1972 Constenla-Umana-and-Margery-Pena-1979 Constenla-Umana-et-al-1979 Constenla-Umana-et-al-1998 Lehmann-1920 Margery-Pena-1982 Margery-Pena-1996 Pittier-de-Fabrega-1898 Schlablach-and-Levinsohn-1983 Wilson-et-al-1982 Yasugi-1995
brj,Burji,Africa,5.5,37.8333333333,burj1242,bji,Afro-Asiatic,Cushitic,Lowland East Cushitic,c803353,bji,false,false,ET,Hudson-1976c Sasse-1982
brk,Berik,Papunesia,-2.25,138.833333333,beri1254,bkl,Tor-Kwerba,,Tor-Orya,cCC515D,bkl,false,false,ID,Thimbwat-et-al-1979
brl,Baragaunle,Eurasia,28.8333333333,83.8333333333,lowa1242,loy,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,loy,false,false,NP,Kretschmar-1995 Noonan-2003c
brm,Burmese,Eurasia,21,96,nucl1310,mya,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,mya,true,true,MM,Bernot-1980 Bradley-1995 Bybee-et-al-1994 Cornyn-1944 Cornyn-and-Roop-1968 Cornyn-and-Roop-1987 Esche-et-al-1988 Lehman-2001 Malherbe-and-Rosenberg-1996 Maun-Maun-Ngun-et-al-1963 Mazo-1978 Njun-et-al-1963 Okell-1969 Okell-1994 Richter-1983 Soe-1999 Stewart-1955 Watkins-2001 Wheatley-1982
brn,Burunge,Africa,-5.33333333333,36,buru1320,bds,Afro-Asiatic,Cushitic,Southern Cushitic,c688033,bds,false,false,TZ,Kiessling-1994
bro,Broken,Australia,-10.1666666667,143,torr1261,tcs,other,,Creoles and Pidgins,c333D80,tcs,false,false,AU,Shnukal-1988
brp,Barupu,Papunesia,-3.08333333333,142.083333333,wara1302,wra,Skou,,Warapu,c51CCA7,wra,false,false,PG,Corris-2005
brq,Bera,Africa,1.5,30.03,bera1259,brf,Niger-Congo,Benue-Congo,Bantu,cC3CC51,brf,false,false,,Meinhof-1938-39
brr,Bororo,South America,-16,-57,boro1282,bor,Bororoan,,Bororoan,c693380,bor,false,false,BR,Crowell-1979 Huestis-1963 Rodrigues-1999b
brs,Barasano,South America,-0.166666666667,-70.6666666667,bara1380,bsn,Tucanoan,,Tucanoan,c6FCC51,bsn,true,true,CO,Barasana-1974 Garcia-and-Sanchez-1975 Huber-and-Reed-1992 Jones-and-Jones-1991 Smith-1973 Smith-and-Smith-1971
bru,Bru (Eastern),Eurasia,17.3333333333,106,east2332,bru,Austro-Asiatic,Mon-Khmer,Katuic,cCCC351,bru,false,false,LA,Miller-and-Nuan-1974
brw,Bru (Western),Eurasia,16.75,104.75,west2397,brv,Austro-Asiatic,Mon-Khmer,Katuic,cCCC351,brv,false,false,LA,Thongkum-1979
bry,Baruya,Papunesia,-6.91666666667,145.916666667,baru1267,byr,Trans-New Guinea,,Nuclear Angan,c5187CC,byr,false,false,PG,Lloyd-1969 Lloyd-1989 Lloyd-1992
brz,Birri,Africa,5.5,25.1666666667,birr1240,bvq,Central Sudanic,,Birri,cCC8051,bvq,false,false,CF,Santandrea-1966
bse,Berber (Ayt Seghrouchen Middle Atlas),Africa,33.3333333333,-4.66666666667,tari1263,rif,Afro-Asiatic,,Berber,cAACC51,rif,false,false,MA,Bentolila-1981
bsh,Bushoong,Africa,-4.5,21.5,bush1247,buf,Niger-Congo,Benue-Congo,Bantu,cC3CC51,buf,false,false,CD,Edmiston-1932
bsi,Berber (Siwa),Africa,29.1666666667,25.5,siwi1239,siz,Afro-Asiatic,,Berber,cAACC51,siz,false,false,EG,Basset-1890 Laoust-1931 Vycichl-1991
bsk,Bashkir,Eurasia,53,58,bash1264,bak,Altaic,,Turkic,c778033,bak,false,false,RU,Berta-1998 Dmitriev-1948 Grammatika-1981 Juldashev-1966 Juldashev-1997 Poppe-1964 Psjanchin-2000a Psjanchin-2000b
bsl,British Sign Language,Eurasia,52,-1,brit1235,bfi,other,,Sign Languages,c515CCC,bfi,false,false,GB,Deuchar-1987 Sutton-Spence-and-Woll-1999
bsm,Bislama,Papunesia,-16,168,bisl1239,bis,other,,Creoles and Pidgins,c333D80,bis,false,false,VU,Guy-1974b Tryon-1987
bso,Basque (Souletin),Eurasia,43.5,-1.5,basq1250,eus,Basque,,Basque,c806433,eus,false,false,FR,Hualde-1993 Hualde-1999 Hualde-nd
bsq,Basque,Eurasia,43,-3,basq1248,eus,,,,c806433,eus,true,true,FR ES,Allieres-1979 Arotcarena-1976 Aulestia-and-White-1992 Azkue-1906 Bybee-et-al-1994 Eguzkitza-1987 Everaert-2000 Hualde-and-Ortiz-de-Urbina-2003 Ithurry-1895 King-1993b Kuhnel-1999 Lafitte-1944 Lafitte-1962 Malherbe-and-Rosenberg-1996 Mejias-Bikandi-1999 Ndiaye-1970 Nichols-1992 Rebuschi-1984 Saltarelli-et-al-1988 Trask-1995 Trask-1997 Trask-2001 Urbina-1989 Van-Eys-1883 Zuniga-and-Fernandez-2019
bsr,Basari,Africa,12.6666666667,-13,bass1258,bsc,Niger-Congo,North-Central Atlantic,Tenda,c568033,bsc,false,false,SN GN,Ferry-1968 Ferry-1981
bth,Bathari,Eurasia,18,56,bath1244,bhm,Afro-Asiatic,,Semitic,cB3CC51,bhm,false,false,OM,Lonnet-and-Simeone-Senelle-1997
bti,Betoi,South America,7.16666666667,-71.25,beto1236,,,,,c806233,,false,false,CO VR,Zamponi-2003b
btk,Bontok,Papunesia,17.0833333333,120.916666667,cent2292,lbk,Austronesian,,Northern Luzon,c805533,lbk,false,false,PH,Llamzon-1978 Reid-1976 Seidenadel-1909 Waterman-1932
bto,Batak (Toba),Papunesia,2.5,99,bata1289,bbc,Austronesian,,Northwest Sumatra-Barrier Islands,cCC7751,bbc,false,false,ID,Adelaar-1995b Cumming-1984 Meerwaldt-1904 Nababan-1981 Percival-1981 van-der-Tuuk-1864 van-der-Tuuk-1971
bua,Burarra,Australia,-12.25,134.583333333,bura1267,bvr,Mangrida,,Burarran,c33806E,bvr,false,false,AU,Fabricius-1998 Glasgow-1981 Glasgow-1984 Glasgow-1994 Glasgow-and-Garner-1980 Glasgow-and-Glasgow-1967
bub,Bubi,Africa,3.5,8.66666666667,bube1242,bvb,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bvb,false,false,GQ,Abad-1928
bud,Buduma,Africa,13.5,14.5,budu1265,bdm,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,bdm,false,false,NG TD CM,Awagana-2001 Lukas-and-Nachtigal-1939
bug,Bugis,Papunesia,-4,120,bugi1244,bug,Austronesian,,South Sulawesi,cCC6B51,bug,false,false,ID,Abas-and-Grimes-1995 Matthes-1875 Samsuri-1965 Sirk-1975 Sirk-1979 Sirk-1983
bui,Buli (in Indonesia),Papunesia,1,128.5,buli1255,bzq,Austronesian,Eastern Malayo-Polynesian,South Halmahera - West New Guinea,c807433,bzq,false,false,ID,Bybee-et-al-1994 Maan-1951
buj,Bujeba,Africa,3,10.1666666667,kwas1243,nmg,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nmg,false,false,GQ CM,Gonzalez-Echegaray-1960
buk,Bukusu,Africa,0.75,34.6666666667,buku1249,bxk,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bxk,false,false,KE,Austen-1974
bul,Bulgarian,Eurasia,42.5,25,bulg1262,bul,Indo-European,,Slavic,c803338,bul,false,false,BG,Aronson-1968 Beaulieux-1950 Beaulieux-and-Mladenov-1933 Bidwell-1968 Dahl-1985 Dyer-1992 Feuillet-1995 Friedman-1986 Haspelmath-1997 Hubenova-et-al-1968 Klagstad-1958 Malherbe-and-Rosenberg-1996 Penchev-2007 Scatton-1984 Scatton-1993 Stojanov-1964 Ternes-and-Vladimirova-Buhtz-1999
bum,Buma,Papunesia,-11.6333333333,166.833333333,tean1237,tkw,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tkw,false,false,SB,Tryon-2002
bun,Buin,Papunesia,-6.75,155.75,tere1278,buo,South Bougainville,,South Bougainville,c8351CC,buo,false,false,PG,Grisward-and-Kieta-1910
bur,Burushaski,Eurasia,36.5,74.5,buru1296,bsk,,,,c805F33,bsk,true,true,PK,Anderson-1997b Berger-1974 Berger-1998 Klimov-1970 Klimov-and-Edelman-1970 Lorimer-1935 Malherbe-and-Rosenberg-1996 Morgenstierne-1945 Morin-and-Tiffou-1988 Tiffou-and-Pesot-1989
bus,Busa,Africa,9.66666666667,4,busa1253,bqp,Mande,,Eastern Mande,c403380,bqp,false,false,NG,Jones-1998b Wedekind-1972
but,Buriat,Eurasia,52,108,mong1330,bxm,Altaic,,Mongolic,cBECC51,bxm,false,false,CN RU MN,Anonymous-1954 Bybee-et-al-1994 Cydenbambaev-and-Imechenov-1962 Darbeeva-1997 Kuzmenkov-et-al-2007 Poppe-1960 Sanzheev-et-al-1962 Skribnik-1988 Skribnik-2003
buu,Buru,Papunesia,-3.5,126.5,buru1303,mhs,Austronesian,,Central Malayo-Polynesian,c807633,mhs,false,false,ID,Grimes-1991 Grimes-1995 Hendriks-1897
buw,Bulu,Africa,3,11,bulu1251,bum,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bum,false,false,CM,Alexandre-1966 Bates-1904
buy,Buli (in Ghana),Africa,10.5,-1.25,buli1254,bwu,Niger-Congo,Gur,Oti-Volta,cCCB351,bwu,false,false,GH,Kroger-1992
bvi,Bali-Vitu,Papunesia,-4.9,149.116666667,bali1280,,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,bbn wiv,false,false,PG,Ross-2002c
bwa,Bandjalang (Waalubal),Australia,-29.0833333333,152.583333333,band1339,bdy,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,bdy,false,false,AU,Crowley-1978
bwc,Bajau (West Coast),Papunesia,6.33333333333,116.333333333,west2560,bdr,Austronesian,,Sama-Bajaw,cCCBD51,bdr,false,false,MY,Miller-2007
bxj,Bayungu,Australia,-23,114,bayu1240,bxj,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,bxj,false,false,AU,
bya,Byansi,Eurasia,30.1666666667,80.5,byan1241,bee,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,bee,false,false,IN,Trivedi-1991
bys,Bayso,Africa,6.25,37.75,bais1246,bsw,Afro-Asiatic,Cushitic,Lowland East Cushitic,c803353,bsw,false,false,ET,Corbett-and-Hayward-1987
byu,Bandjalang (Yugumbir),Australia,-27.9166666667,153,band1339,bdy,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,bdy,false,false,AU,Cunningham-1969 Sharpe-1998
bzi,Bauzi,Papunesia,-2.5,137.5,bauz1241,bvz,Geelvink Bay,,Geelvink Bay,c333F80,bvz,false,false,ID,Briley-1997 Kuleti-1980
cab,Cabécar,North America,9.75,-83.4166666667,cabe1245,cjp,Chibchan,,Western Isthumus Chibchan,cCCBF51,cjp,false,false,CR,Margery-Pena-1989
cac,Cacua,South America,1.08333333333,-70,cacu1241,cbv,Cacua-Nukak,,Cacua-Nukak,cCC9851,cbv,false,false,CO,Anderton-1989 Cathcart-1979 Huber-and-Reed-1992
cad,Caddo,North America,33.3333333333,-93.5,cadd1256,cad,Caddoan,,Caddo,c358033,cad,false,false,US,Chafe-1976 Chafe-1979
cah,Cahuilla,North America,33.5,-116.25,cahu1264,chl,Uto-Aztecan,,Northern Uto-Aztecan,c803633,chl,false,true,US,Bright-1965b Fuchs-1970 Langacker-1976 Sauvel-and-Munro-1981 Seiler-1957 Seiler-1965 Seiler-1967 Seiler-1972 Seiler-1977 Seiler-1997 Seiler-and-Hioki-1979
cai,Chai,Africa,5.33333333333,35.3333333333,suri1267,suq,Eastern Sudanic,Surmic,South Surmic,c806933,suq,false,false,ET SS,Last-and-Lucassen-1998
cak,Cakchiquel,North America,14.5,-91,kaqc1270,cak,Mayan,,Mayan,cA951CC,cak,false,false,GT,Brinton-1884 Garcia-Matzar-and-Rodriguez-Guajan-1997 Garcia-Matzar-et-al-1992 Macario-et-al-1998 Townsend-1961
cam,Camsá,South America,1.16666666667,-77,cams1241,kbh,,,,cCC9551,kbh,false,false,CO,Adelaar-2004 Fabre-2002 Howard-1967 Howard-1972 Huber-and-Reed-1992 Mongui-Sanchez-1981
can,Candoshi,South America,-4.16666666667,-77,cand1248,cbu,,,,c805B33,cbu,false,false,PE,Anderson-and-Wise-1963 Cox-1957
cap,Capanahua,South America,-7,-74,capa1241,kaq,Pano-Tacanan,,Panoan,c334F80,kaq,false,false,PE,Derbyshire-and-Payne-1990 Loos-1969 Safir-1979 Wise-1978
car,Carib,South America,5.5,-56,gali1262,car,Cariban,,Cariban,cCC9251,car,false,true,SR,Derbyshire-1999 Gildea-1992 Gildea-1994 Hoff-1968 Hoff-1978 Hoff-1986 Martius-1863 Mosonyi-et-al-2000b Peasgood-1972
cas,Cashibo,South America,-8.5,-75.5,cash1251,cbr,Pano-Tacanan,,Panoan,c334F80,cbr,false,false,PE,Abreu-1914 Shell-1950 Wise-1978
cat,Catio,South America,7.16666666667,-76.3333333333,embe1260,cto,Choco,,Choco,cCC8751,cto,false,false,CO,Huber-and-Reed-1992
cav,Cavineña,South America,-13.3333333333,-66.5,cavi1250,cav,Pano-Tacanan,,Tacanan,c338056,cav,false,false,BO,Aikhenvald-and-Dixon-1999 Camp-1985 Guillaume-2004 Key-1963b Key-1968
cax,Campa (Axininca),South America,-12,-74,asha1243,,Arawakan,,Pre-Andine Arawakan,cCC5451,cni cpc,false,false,PE,Dirks-1953 Kindberg-1980 Payne-1981 Read-and-Payne-1986 Wise-1986
cay,Cayapa,South America,0.666666666667,-79,chac1249,cbi,Barbacoan,,Barbacoan,cCCA451,cbi,false,false,EC,Abrahamson-1962 Lindskoog-and-Brend-1962 Lindskoog-and-Lindskoog-1964 Vittadello-1988
cba,Chumash (Barbareño),North America,34.5,-120.25,barb1263,boi,Chumash,,Chumash,cCC8151,boi,false,false,US,Beeler-1976 Beeler-nd Kroeber-1904 Wash-2001
cbo,Chácobo,South America,-12.1666666667,-66.75,chac1251,cao,Pano-Tacanan,,Panoan,c334F80,cao,false,false,BO,Bybee-et-al-1994 Prost-1962 Prost-1967
cch,Chocho,North America,17.6666666667,-97.4166666667,choc1279,coz,Oto-Manguean,,Popolocan,c5173CC,coz,false,false,MX,Ruiz-de-Bravo-Ahuja-1977 Veerman-Leichsenring-2000
cck,Chickasaw,North America,34,-88,chic1270,cic,Muskogean,,Muskogean,c9251CC,cic,false,false,US,Gordon-et-al-2000 Munro-and-Willmond-1994 Munro-et-al-2002 Shopen-1985
ccm,Chinantec (Comaltepec),North America,17.5833333333,-96.4166666667,coma1246,cco,Oto-Manguean,,Chinantecan,c5168CC,cco,false,false,MX,Anderson-1989 Anderson-et-al-1990
cco,Chasta Costa,North America,42.6666666667,-124,tutu1242,tuu,Na-Dene,,Athapaskan,c8C51CC,tuu,false,false,US,Sapir-1914
ccp,Cocopa,North America,32.3333333333,-115,coco1261,coc,Hokan,,Yuman,cCC6151,coc,false,false,MX US,Crawford-1966 Crawford-1989 Stolz-1996
cct,Choctaw,North America,32.25,-88.5,choc1276,cho,Muskogean,,Muskogean,c9251CC,cho,false,false,US,Broadwell-1986 Broadwell-1987 Byington-1915 Davies-1981c Davies-1984 Davies-1986 Munro-and-Ulrich-1984 Nichols-1992 Nicklas-1974 Nicklas-1975 Nicklas-1979 Ulrich-1986 Yegerlehner-and-Voegelin-1957
cde,Carib (De'kwana),South America,5.5,-65,maqu1238,mch,Cariban,,Cariban,cCC9251,mch,false,false,VR,Hall-1988
cea,Cree (Swampy),North America,56,-90,swam1239,csw,Algic,,Algonquian,c758033,csw,false,false,CA,Ellis-1975 Ellis-1983 Hive-1948 LeClaire-and-Cardinal-1998
ceb,Cebuano,Papunesia,10,124,cebu1242,ceb,Austronesian,,Greater Central Philippine,cCC8E51,ceb,false,false,PH,Cabonce-1983 Dahl-1985 Malherbe-and-Rosenberg-1996 Shryrock-1993 Wolff-1966 Wolff-1967
cec,Chicomuceltec,North America,15.5,-92.25,chic1271,cob,Mayan,,Mayan,cA951CC,cob,false,false,MX,Sapper-1912
cem,Cèmuhî,Papunesia,-20.8333333333,165.166666667,cemu1238,cam,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,cam,false,false,NC,Lynch-2002c Rivierre-1980 Ross-1998
cga,Chaga,Africa,-3,37,moch1256,old,Niger-Congo,Benue-Congo,Bantu,cC3CC51,old,false,false,TZ,Raum-1909
cha,Chamorro,Papunesia,13.45,144.75,cham1312,cha,Austronesian,,Chamorro,cCCC051,cha,true,true,GU,Chung-1983 Chung-1998 Cooreman-1982 Cooreman-1988 Costenoble-1940 Malherbe-and-Rosenberg-1996 Nichols-1992 Safford-1903-1905 Seiden-1960 Topping-1973 Topping-1980a Topping-1980b Topping-et-al-1975 Witucki-1974
chb,Chambri,Papunesia,-4.16666666667,143.083333333,cham1313,can,Lower Sepik-Ramu,,Lower Sepik,cCC51C8,can,false,false,PG,Laycock-and-Zgraggen-1975
chc,Chechen,Eurasia,43.25,45.8333333333,chec1245,che,Nakh-Daghestanian,,Nakh,c4D3380,che,false,false,RU,Aliroev-1997 Desheriev-1967 Digaev-et-al-2002 Jakovlev-1940 Jeschull-2004 Nichols-1992 Nichols-1994a Nichols-1997a
chd,Chaudangsi,Eurasia,30,80.25,chau1259,cdn,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,cdn,false,false,IN,Sharma-1989a
che,Cherokee,North America,35.5,-83.5,cher1273,chr,Iroquoian,,Southern Iroquoian,c803343,chr,false,false,US,Bender-and-Harris-1946 Cook-1979 Feeling-1975 Foley-1980 Holmes-and-Smith-1976 Lindsey-and-Scancarelli-1985 Reyburn-1954a Scancarelli-1986 Scancarelli-1987 Walker-1975b
chg,Chang,Eurasia,26.3333333333,94.75,chan1313,nbc,Sino-Tibetan,Tibeto-Burman,Brahmaputran,c6C51CC,nbc,false,false,IN MM,Hutton-1987
chh,Chaha,Africa,8.112935,37.93267,seba1251,sgw,Afro-Asiatic,,Semitic,cB3CC51,sgw,false,false,ET,Leslau-1950 Leslau-1997a Rose-nd
chi,Chimariko,North America,41,-123,chim1301,cid,Hokan,,Chimariko,cCC5E51,cid,false,false,US,Dixon-1910 Nichols-1992 Powell-1877
chj,Chuj,North America,15.9166666667,-91.5833333333,chuj1250,cac,Mayan,,Mayan,cA951CC,cac,false,false,GT,Buenrostros-1991 Diego-1998 Hopkins-1967
chk,Chukchi,Eurasia,67,-173,chuk1273,ckt,Chukotko-Kamchatkan,,Northern Chukotko-Kamchatkan,cCC8451,ckt,true,true,RU,Bogoras-1922 Dunn-1999 Kampfe-and-Volodin-1995 Kozinsky-et-al-1988 Krause-1980 Nedjalkov-1994a Nedjalkov-2007a Nichols-1992 Skorik-1961 Skorik-1961-1977 Skorik-1968 Volodin-and-Skorik-1996
chl,Chehalis (Upper),North America,46.5833333333,-123,uppe1439,cjh,Salishan,,Tsamosan,c51B8CC,cjh,false,false,US,Kinkade-1963 Kinkade-1976 Kinkade-1991
chm,Chamalal,Eurasia,42.55,46.05,cham1309,cji,Nakh-Daghestanian,Daghestanian,Avar-Andic-Tsezic,c7B51CC,cji,false,false,RU,Boguslavskaja-1989 Gudava-1964 Magomedova-1985
chn,Chantyal,Eurasia,28.5833333333,83.4166666667,chan1310,chx,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,chx,false,false,NP,Noonan-2003b Noonan-2003c Noonan-and-Bhulanja-1999
cho,Chontal (Highland),North America,16.25,-95.75,high1242,chd,Hokan,,Tequistlatecan,c338044,chd,false,false,MX,Turner-and-Turner-1971 Waterhouse-1962
chp,Chipewyan,North America,59,-106,chip1261,chp,Na-Dene,,Athapaskan,c8C51CC,chp,false,false,CA,Carter-1979 Elford-and-Elford-1981 Li-1932 Li-1933 Li-1946 Richardson-1968
chq,Chinantec (Quiotepec),North America,17.5833333333,-96.6666666667,quio1240,chq,Oto-Manguean,,Chinantecan,c5168CC,chq,false,false,MX,Robbins-1961 Robbins-1968
chr,Chrau,Eurasia,10.75,107.5,chra1242,crw,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,crw,false,false,VN,Jaken-and-Thomas-1974 Thomas-1966 Thomas-1971 Thomas-and-Luc-1966
chs,Chin (Siyin),Eurasia,23.8333333333,94,siyi1240,csy,Sino-Tibetan,Tibeto-Burman,Kuki-Chin,c51CCB8,csy,false,false,MM,Naylor-1925
cht,Chatino (Nopala),North America,16.0833333333,-97.1666666667,nopa1235,cya,Oto-Manguean,,Zapotecan,c5162CC,cya,false,false,MX,McKaughan-1954
chu,Nivacle,South America,-23.5,-60.5,niva1238,cag,Matacoan,,Matacoan,cB451CC,cag,false,false,PY,Hunt-1915 Stell-1972
chv,Chuvash,Eurasia,55.5,47.5,chuv1255,chv,Altaic,,Turkic,c778033,chv,false,false,RU,Andreev-1966 Andreev-1992 Andreev-1997 Benzing-1965 Clark-1998a Krueger-1961 Kruger-1961
chw,Cham (Western),Eurasia,12,105.5,west2650,cja,Austronesian,,Malayo-Sumbawan,cCC7D51,cja,false,false,KH,Baumgartner-1998 Blood-1967 Edmondson-and-Gregerson-1993 Friberg-1978
chx,Chontal (Huamelultec Oaxaca),North America,16,-95.75,lowl1260,clo,Hokan,,Tequistlatecan,c338044,clo,false,false,MX,Nichols-1992 Waterhouse-1949 Waterhouse-1962 Waterhouse-1967
chy,Chayahuita,South America,-5.5,-77,chay1248,cbt,Cahuapanan,,Cahuapanan,c805D33,cbt,false,false,PE,Derbyshire-and-Payne-1990 Hart-1988
cic,Chichewa,Africa,-14,34,nyan1308,nya,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nya,false,false,MZ MW ZM ZW,Bentley-and-Kulemeka-2001 Corbett-and-Mtenje-1987 Malherbe-and-Rosenberg-1996 Mateene-1980 Mchombo-2004 Price-1966
cil,CiLuba,Africa,-6,22,luba1249,lua,Niger-Congo,Benue-Congo,Bantu,cC3CC51,lua,false,false,CD,Willems-1943 de-Schryver-1999
cin,Chumash (Ineseño),North America,34.6666666667,-120.25,ines1240,inz,Chumash,,Chumash,cCC8151,inz,false,false,US,Applegate-1972 Applegate-1992 Nichols-1992
cjo,Chichimeca-Jonaz,North America,21.6666666667,-100.5,chic1272,pei,Oto-Manguean,,Chichimec,c334B80,pei,false,false,MX,Lastra-de-Suarez-1984 Nichols-1992 de-Angulo-1932
ckh,Cheke Holo,Papunesia,-8.33333333333,159.666666667,chek1238,mrn,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mrn,false,false,SB,White-1988
ckl,Chinook (Lower),North America,46.25,-123.5,chin1286,chh,Penutian,,Chinookan,c335680,chh,false,false,US,Boas-1911b
cku,Chinook (Upper),North America,45.62,-121.16,wasc1239,wac,Penutian,,Chinookan,c335680,wac,false,false,US,Boas-1911b Dyk-1933 Hymes-1955 Nichols-1992 Silverstein-1976 Silverstein-1978
cla,Clallam,North America,48.0833333333,-123.75,clal1241,clm,Salishan,,Central Salish,c51ADCC,clm,false,false,US,Fleisher-1976 Thompson-and-Thompson-1971 Thompson-et-al-1974
clc,Colac,Australia,-38.3333333333,143.5,cola1237,,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,,false,false,AU,Blake-et-al-1998b
cld,Chaldean (Modern),Eurasia,36,43,chal1275,cld,Afro-Asiatic,,Semitic,cB3CC51,cld,false,false,IQ,Sara-1974
cle,Chinantec (Lealao),North America,17.3333333333,-95.9166666667,leal1235,cle,Oto-Manguean,,Chinantecan,c5168CC,cle,false,true,MX,Key-1965 Rupp-1989 Rupp-1990 Rupp-and-Rupp-1996 Yasugi-1995
cln,Cholón,South America,-8,-77.5,,cht,Hobitu-Cholon,,Hobitu-Cholon,c338038,cht,false,false,PE,Adelaar-2004 Alexander-Bakkerus-2005
cly,Chulym,Eurasia,54.3333333333,89.6666666667,chul1246,clw,Altaic,,Turkic,c778033,clw,false,false,RU,Birjukovich-1997
cma,Chimila,South America,10,-74,chim1309,cbg,Chibchan,,Chimila,c805633,cbg,false,false,CO,Huber-and-Reed-1992
cmc,Comecrudo,North America,25.8333333333,-99,come1251,xcm,Hokan,,Comecrudan,c804D33,xcm,false,false,MX,Swanton-1940
cme,Cham (Eastern),Eurasia,11.3333333333,108.5,east2563,cjm,Austronesian,,Malayo-Sumbawan,cCC7D51,cjm,false,false,VN,Alieva-and-Bui-Khanh-The-1999 Aymonier-1889 Malherbe-and-Rosenberg-1996
cmh,Chemehuevi,North America,34.3333333333,-115.166666667,chem1251,ute,Uto-Aztecan,,Northern Uto-Aztecan,c803633,ute,false,false,US,Press-1975 Press-1979 Stolz-1996
cmk,Chemakum,North America,48.0833333333,-122.916666667,chim1310,xch,Chimakuan,,Chimakuan,cCC8A51,xch,false,false,US,Andrade-1953 Swadesh-1955
cml,Camling,Eurasia,27,86.6666666667,caml1239,rab,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,rab,false,false,NP,Ebert-1997a Ebert-2003
cmn,Comanche,North America,33.5,-101.5,coma1245,com,Uto-Aztecan,,Northern Uto-Aztecan,c803633,com,false,true,US,Canonge-1958 Charney-1993 Osborn-and-Smalley-1949 Riggs-1949 Robinson-and-Armagost-1990 Wistrand-Robinson-and-Armagost-1990
cmr,Chin (Mara),Eurasia,23,93.1666666667,mara1382,mrh,Sino-Tibetan,Tibeto-Burman,Kuki-Chin,c51CCB8,mrh,false,false,IN MM,Lorrain-1951 Savidge-1908
cmx,Comox,North America,50.1666666667,-125,como1259,coo,Salishan,,Central Salish,c51ADCC,coo,false,false,CA,Hagege-1981 Harris-1981b Harris-1981c
cmy,Chontal Maya,North America,18.1666666667,-92.5833333333,taba1266,chf,Mayan,,Mayan,cA951CC,chf,false,false,MX,Keller-1959 Keller-and-Luciano-G-1997 Knowles-1984
cnl,Canela,South America,-7,-45,ramk1239,ram,Macro-Ge,Je,Je Setentrional,c807033,ram,true,true,BR,Abreu-1931 Nichols-1992 Popjes-and-Popjes-1986 Rodrigues-1999b
cnm,Canamarí,South America,-6.5,-68.5,kana1291,knm,Katukinan,,Katukinan,cCC5194,knm,false,false,BR,Groth-1988a
cnt,Cantonese,Eurasia,23,113,yuec1235,yue,Sino-Tibetan,,Chinese,c51CCC9,yue,false,false,CN,Bybee-et-al-1994 Cheung-1983 Huang-1970 Killingley-1982 Malherbe-and-Rosenberg-1996 Matthews-1997 Matthews-and-Yip-1994 Zee-1999
coa,Coahuilteco,North America,28,-100,coah1252,xcw,Coahuiltecan,,Coahuiltecan,c804F33,xcw,false,false,MX,Troike-1967 Troike-1996
coc,Cocama,South America,-5,-74.5,coca1259,cod,Tupian,,Maweti-Guarani,cCC6351,cod,false,false,PE,Bybee-et-al-1994 Faust-1971 Faust-1972
coe,Coeur d'Alene,North America,47.25,-116.5,coeu1236,crd,Salishan,,Interior Salish,c51B2CC,crd,false,false,US,Doak-1997 Reichard-1933-1938 Reichard-1959
cof,Cofán,South America,0.166666666667,-77.1666666667,cofa1242,con,,,,cCC7E51,con,false,false,EC CO,Borman-1962 Borman-1976
cog,Cogui,South America,11,-73.8333333333,cogu1240,kog,Chibchan,,Arhuacic,c33804A,kog,false,false,CO,Celedon-1886 Preuss-1926
coi,Chortí,North America,14.8333333333,-89.25,chor1273,caa,Mayan,,Mayan,cA951CC,caa,false,false,GT HN,Lubeck-and-Cowie-1989 Perez-Martinez-1994
col,Chol,North America,17.75,-92.5,chol1282,ctu,Mayan,,Mayan,cA951CC,ctu,false,false,MX,Aulie-and-Aulie-1978 Schumann-1973 Warkentin-and-Scott-1980
com,Comorian,Africa,-12,44,maor1244,swb,Niger-Congo,Benue-Congo,Bantu,cC3CC51,swb,false,false,KM YT,Malherbe-and-Rosenberg-1996 Saleh-1989
coo,Coos (Hanis),North America,43.5,-124.166666667,coos1249,csz,Oregon Coast,,Coosan,c5251CC,csz,false,true,US,Frachtenberg-1910 Frachtenberg-1913 Frachtenberg-1922a Nichols-1992 Pierce-1971 Stolz-1996 Zenk-1990
cop,Coptic,Africa,26,32,copt1239,cop,Afro-Asiatic,,Egyptian-Coptic,cB0CC51,cop,false,false,EG,Lambdin-1983 Layton-2000 Mallon-1956 Plisch-1999 Plumley-1948 Shisha-Halevy-1988
cor,Cora,North America,22.1666666667,-104.833333333,elna1235,crn,Uto-Aztecan,,Corachol,c668033,crn,false,false,MX,Casad-1984 Casad-1985 Langacker-1976 McMahon-1959 McMahon-1967
cos,Rumsien,North America,36.8333333333333,-121.75,,,Penutian,Utian,Costanoan,c518ACC,,false,false,US,Kroeber-1904
cpa,Campa Pajonal Asheninca,South America,-10.6666666667,-74.25,ashe1273,cjo,Arawakan,,Pre-Andine Arawakan,cCC5451,cjo,false,false,PE,Pike-and-Kindberg-1956 Wise-1978
cpl,Chinantec (Palantla),North America,18.8333333333,-96.75,pala1351,cpa,Oto-Manguean,,Chinantecan,c5168CC,cpa,false,false,MX,Bybee-et-al-1994 Merrifield-1968
cpn,Chepang,Eurasia,27.6666666667,84.75,chep1245,cdm,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,cdm,false,false,NP,Bybee-et-al-1994 Caughley-1982 Noonan-2003c
cpw,Chippewa (Red Lake and Pillager),North America,48,-95,chip1241,ciw,Algic,,Algonquian,c758033,ciw,false,false,US,Schuster-1970
cpy,Chipaya,South America,-18.75,-67.8333333333,chip1262,cap,Uru-Chipaya,,Uru-Chipaya,c9DCC51,cap,false,false,BO,Cerron-Palomino-2006
cqt,Chiquitano,South America,-17.5,-60,chiq1248,cax,,,,c33803F,cax,false,false,BO,Adam-and-Henry-1880 Adelaar-2004 Tavera-Acosta-1907
cre,Cree (Plains),North America,54,-110,plai1258,crk,Algic,,Algonquian,c758033,crk,true,true,CA,Ahenakew-and-Wolfart-1983 Ahenakew-and-Wolfart-1992 Anderson-1975 Dahlstrom-1991 Hive-1948 LeClaire-and-Cardinal-1998 Nichols-1992 Okimasis-and-Ratt-1999 Russell-1999 Vinay-1992 Wolfart-1973 Wolfart-1996 Wolfart-and-Ahenakew-1993 Wolfart-and-Ahenakew-1998 Wolfart-and-Carroll-1981
crg,Chiriguano,South America,-23.6666666667,-64.3333333333,east2555,gui,Tupian,,Maweti-Guarani,cCC6351,gui,false,false,PY BO AR,Dietrich-1986 Romano-and-Cattunar-1916
crh,Chru,Eurasia,11.5,108.5,chru1239,cje,Austronesian,,Malayo-Sumbawan,cCC7D51,cje,false,false,VN,Fuller-et-al-1974
cri,Crimean Tatar,Eurasia,45,34.0833333333,crim1257,crh,Altaic,,Turkic,c778033,crh,false,false,UZ,Izidinova-1997 Jankowski-1992 Sevortjan-1966
crj,Carijona,South America,1,-73,cari1279,cbd,Cariban,,Cariban,cCC9251,cbd,false,false,CO,Durbin-and-Seijas-1972 Huber-and-Reed-1992 Robayo-1989
crk,Creek,North America,34,-85,cree1270,mus,Muskogean,,Muskogean,c9251CC,mus,false,false,US,Haas-1977 Martin-and-Mauldin-2000
crl,Carolinian,Papunesia,15.2,145.75,caro1242,cal,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,cal,false,false,MP,Jackson-and-Marck-1991
crn,Cornish,Eurasia,50.3333333333,-5,corn1251,cor,Indo-European,,Celtic,c80333C,cor,false,false,GB,George-1993 Jenner-1904 Nance-1978 Pool-1958 Thomas-1992b
cro,Crow,North America,47,-108,crow1244,cro,Siouan,,Missouri River Siouan,c338078,cro,false,false,US,Lowie-1941 Reed-1975
crp,Carapana,South America,0.833333333333,-70.75,cara1272,cbc,Tucanoan,,Tucanoan,c6FCC51,cbc,false,false,CO BR,Huber-and-Reed-1992 Metzger-1981
crq,Carrier,North America,53.75,-123.5,carr1249,crx,Na-Dene,,Athapaskan,c8C51CC,crx,false,false,CA,Antoine-et-al-1974 Morice-1932
crt,Chorote,South America,-22.5,-62.5,chor1274,,Matacoan,,Matacoan,cB451CC,crq crt,false,false,PY BO AR,Gerzenstein-1978 Gerzenstein-1983 Hunt-1915
csc,Chinantec (Sochiapan),North America,17.75,-96.6666666667,soch1239,cso,Oto-Manguean,,Chinantecan,c5168CC,cso,false,false,MX,Foris-1973
csf,Chinantec (San Felipe Usila),North America,17.9166666667,-96.5,usil1237,cuc,Oto-Manguean,,Chinantecan,c5168CC,cuc,false,false,MX,Skinner-and-Skinner-2000
csh,Cashinahua,South America,-10.5,-71.8333333333,cash1254,cbs,Pano-Tacanan,,Panoan,c334F80,cbs,false,false,BR PE,Camargo-2007 Camargo-Bigot-1992 Cromack-1968 Montag-1981
csk,Diola-Kasa,Africa,12.5,-16.75,jola1262,csk,Niger-Congo,North-Central Atlantic,Jola,c51C1CC,csk,false,false,,Wintz-1909
csl,Chinese Sign Language,Eurasia,35,115,chin1283,csl,other,,Sign Languages,c515CCC,csl,false,false,CN,Yang-and-Fischer-2002
cso,Chatino (Sierra Occidental),North America,16.25,-97.3333333333,west2644,ctp,Oto-Manguean,,Zapotecan,c5162CC,ctp,false,false,MX,Pride-1965
ctc,Cuicatec,North America,17.8333333333,-96.8333333333,cuic1234,,Oto-Manguean,Mixtecan,Cuicatec,c683380,cut cux,false,false,MX,Anderson-and-Roque-1983
cte,Chinantec (Tepetotutla),North America,17.8333333333,-96.5,tepe1279,cnt,Oto-Manguean,,Chinantecan,c5168CC,cnt,false,false,MX,Westley-1991
cti,Chin (Tiddim),Eurasia,23.3333333333,93.6666666667,tedi1235,ctd,Sino-Tibetan,Tibeto-Burman,Kuki-Chin,c51CCB8,ctd,false,false,MM,Henderson-1965
ctl,Catalan,Eurasia,41.75,2,stan1289,cat,Indo-European,,Romance,cCC5154,cat,false,false,ES,Ammann-nd Carbonell-and-Llisteri-1999 Diaz-Insense-2001 Fabra-1897 Fabra-1956 Gulsoy-1982 Haspelmath-1997 Hualde-1992 Malherbe-and-Rosenberg-1996 Mascaro-1978 Roca-1999 Sabater-and-Freixinet-1990 Wheeler-1979 Wheeler-1988b Wheeler-et-al-1999
ctm,Chitimacha,North America,29.6666666667,-91,chit1248,ctm,,,,c805433,ctm,false,false,US,Nichols-1992 Swadesh-1934 Swadesh-1946b Swanton-1919
ctt,Chatino (Tataltepec),North America,16.1666666667,-97.5833333333,tata1258,cta,Oto-Manguean,,Zapotecan,c5162CC,cta,false,false,MX,Pride-and-Pride-1970
ctw,Catawba,North America,35.5,-80.5,cata1286,chc,Siouan,,Catawban,c51CC6A,chc,false,false,US,Shea-1984 Voorhis-2003
cua,Cua,Eurasia,15.25,108.5,cuaa1241,cua,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,cua,false,false,VN,Burton-1969 Dinh-Do-et-al-1974
cub,Cubeo,South America,1.33333333333,-70.5,cube1242,cub,Tucanoan,,Tucanoan,c6FCC51,cub,false,false,CO,Morse-and-Maxwell-1999a Morse-and-Maxwell-1999b Orozco-and-Concha-D-1986 Salser-1971
cuc,Cuica,South America,9,-70.5,timo1237,,Timote-Cuica,,Timote-Cuica,c338041,,false,false,VR,Adelaar-2004
cui,Cuiba,South America,6.5,-70,cuib1242,cui,Guahiban,,Guahiban,cCC6751,cui,false,false,CO,Aikhenvald-and-Dixon-1999 Berg-and-Kerr-1973 Huber-and-Reed-1992 Mosonyi-et-al-2000c
cul,Culina,South America,-6,-70.5,culi1244,cul,Arauan,,Arauan,cC4CC51,cul,false,false,BR PE,Derbyshire-and-Payne-1990
cum,Chumburung,Africa,7.75,0.25,chum1261,ncu,Niger-Congo,Kwa,Tano,c806233,ncu,false,false,GH,
cup,Cupeño,North America,33.1666666667,-116.5,cupe1243,cup,Uto-Aztecan,,Northern Uto-Aztecan,c803633,cup,false,false,US,Hill-2005 Langacker-1976 Munro-1990
cur,Curripaco,South America,2.5,-68.5,curr1243,kpc,Arawakan,,Japura-Colombia,c9A51CC,kpc,false,false,CO,Huber-and-Reed-1992
cut,Cuitlatec,North America,17.5,-101,cuit1236,cuy,,,,cCC7B51,cuy,false,false,MX,Hendrichs-Perez-1946
cuu,Chuukese,Papunesia,7.33333333333,151.75,chuu1238,chk,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,chk,false,false,FM,Bybee-et-al-1994 Dyen-1965 Goodenough-and-Sugita-1976 Goodenough-and-Sugita-1990 Lynch-1998
cvc,Chavacano,Papunesia,7,122.083333333,chav1241,cbk,other,,Creoles and Pidgins,c333D80,cbk,false,false,PH,
cve,Chuave,Papunesia,-6.11666666667,145.116666667,chua1250,cjv,Trans-New Guinea,,Chimbu-Wahgi,c51CC7C,cjv,false,false,PG,Thurman-1970
cwe,Columbia-Wenatchi,North America,47.5,-120,colu1241,col,Salishan,,Interior Salish,c51B2CC,col,false,false,US,Kinkade-1982
cya,Chatino (Yaitepec),North America,16.25,-97.25,west2644,ctp,Oto-Manguean,,Zapotecan,c5162CC,ctp,false,false,MX,Rasch-2002 Upson-and-Longacre-1965
cyg,Cayuga,North America,42.75,-76.75,cayu1261,cay,Iroquoian,,Northern Iroquoian,cCC516B,cay,false,false,US,Chafe-1977 Foster-1982 Mithun-1988a
cyn,Cheyenne,North America,47,-95,chey1247,chy,Algic,,Algonquian,c758033,chy,false,false,US,Bybee-et-al-1994 Petter-1915
cyv,Cayuvava,South America,-13.5,-65.5,cayu1262,cyb,,,,c805933,cyb,false,true,BO,Aikhenvald-and-Dixon-1999 Key-1961 Key-1963a Key-1967 Key-and-Key-1967 Nichols-1992
cze,Czech,Eurasia,50,15,czec1258,ces,Indo-European,,Slavic,c803338,ces,false,false,CZ,Harkins-1953 Jakobson-1926 Kabesch-1975 Lee-and-Lee-1986 Malherbe-and-Rosenberg-1996 Poldaufem-1971 Short-1993a Short-1993b Sova-1962
daa,Da'a,Papunesia,-1,119.583333333,daak1235,kzf,Austronesian,,Celebic,c803F33,kzf,false,false,ID,Barr-1995 Barr-and-Barr-1988
dab,Daba,Africa,10.1666666667,13.75,,dbq,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,dbq,false,false,CM,Mouchet-1966
dad,Dadibi,Papunesia,-6.55,144.583333333,dadi1250,mps,Teberan-Pawaian,,Teberan,c338048,mps,false,false,PG,MacDonald-1973
dag,Daga,Papunesia,-10,149.333333333,daga1275,dgz,Trans-New Guinea,,Dagan,c804B33,dgz,true,true,PG,Murane-1974 Murane-and-Murane-1972
dah,Dahalo,Africa,-2.33333333333,40.5,daha1245,dal,Afro-Asiatic,Cushitic,Dahalo,cCC5185,dal,false,false,KE,Maddieson-et-al-1993 Nurse-1986 Tosco-1991 Tucker-et-al-1977
dak,Dakota,North America,45,-93.5,dako1258,dak,Siouan,,Mississippi Valley Siouan,c7A8033,dak,false,false,US,Shaw-1985a Shaw-1985b WarCloud-1971
dam,Damana,South America,11,-73.5,mala1522,mbp,Chibchan,,Arhuacic,c33804A,mbp,false,false,CO,Huber-and-Reed-1992 Stolz-1996 Trillos-Amaya-1999a
dan,Dan,Africa,7.5,-8,dann1241,dnj,Mande,,Eastern Mande,c403380,dnj,false,false,CI GN LR,Bearth-and-Zemp-1967 Doneux-1968
dar,Darai,Eurasia,24,84,dara1250,dry,Indo-European,,Indic,cCC5351,dry,false,false,NP,Kotapish-and-Kotapish-1973 Kotapish-and-Kotapish-1975
dat,Datooga,Africa,-4.33333333333,35.3333333333,dato1239,tcc,Eastern Sudanic,Nilotic,Southern Nilotic,c807733,tcc,false,false,TZ,
daw,Dâw,South America,-0.25,-67.0833333333,daww1239,kwa,Nadahup,,Nadahup,c573380,kwa,false,false,BR,Martins-1994
day,Day,Africa,8.75,17.8333333333,dayy1236,dai,Niger-Congo,Adamawa-Ubangi,Day,c408033,dai,false,false,TD,Nougayrol-1977 Nougayrol-1979
dbd,Dabida,Africa,-4,38.6666666667,tait1250,dav,Niger-Congo,Benue-Congo,Bantu,cC3CC51,dav,false,false,KE,Rjabova-2000
dbr,Dutch (Brabantic),Eurasia,50.75,4.5,dutc1256,nld,Indo-European,,Germanic,c803433,nld,false,false,BE,
dca,Dumagat (Casiguran),Papunesia,16.3333333333,122,casi1235,dgc,Austronesian,,Northern Luzon,c805533,dgc,false,false,PH,Headland-and-Headland-1974
dda,Dhuwal (Dätiwuy),Australia,-12.1666666667,136.25,dhuw1249,duj,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,duj,false,false,AU,Ganambarr-1999
ddf,Daju (Dar Fur),Africa,12.25,25.25,darf1239,daj,Eastern Sudanic,,Daju,c473380,daj,false,false,SD,Thelwall-1981 Tucker-and-Bryan-1966
ddj,Dadjriwalé,Africa,5.25,-5.66666666667,godi1239,god,Niger-Congo,,Kru,c6F51CC,god,false,false,CI,Gode-2008
dds,Donno So,Africa,14.3333333333,-3.58333333333,donn1239,dds,Dogon,,Dogon,c515FCC,dds,false,false,BF ML,Kervran-and-Prost-1969
def,Defaka,Africa,4.58333333333,7.5,defa1248,afn,Ijoid,,Ijoid,c334280,afn,false,false,NG,Jenewari-1983
deg,Degema,Africa,4.75,6.75,dege1246,deg,Niger-Congo,Benue-Congo,Edoid,c3B3380,deg,false,false,NG,Kari-1997 Kari-2001
den,Dení,South America,-6,-67,deni1241,dny,Arauan,,Arauan,cC4CC51,dny,false,false,BR,Derbyshire-1986 Derbyshire-and-Payne-1990
der,Dla (Proper),Papunesia,-3.58333333333,141,dera1245,kbv,Senagi,,Senagi,c337780,kbv,false,false,ID PG,Voorhoeve-1971
des,Desano,South America,0.833333333333,-69.8333333333,desa1247,des,Tucanoan,,Tucanoan,c6FCC51,des,false,false,CO BR,Huber-and-Reed-1992 Miller-1999 Stolz-1996
det,Deti,Africa,-20.5,24.5,shua1254,shg,Khoe-Kwadi,,Khoe-Kwadi,c803362,shg,false,false,BW,Vossen-1997
deu,Deuri,Eurasia,26,90.25,deor1238,der,Sino-Tibetan,Tibeto-Burman,Brahmaputran,c6C51CC,der,false,false,IN,Brown-1895 Goswami-1994 Jacquesson-2005
dga,Dagaare,Africa,10.5,-2.66666666667,sout2789,dga,Niger-Congo,Gur,Oti-Volta,cCCB351,dga,false,false,BF GH,Bodomo-1997 Bodomo-2000 Bodomo-2001 Nakuma-1998
dgb,Dagbani,Africa,9.58333333333,-0.5,dagb1246,dag,Niger-Congo,Gur,Oti-Volta,cCCB351,dag,false,false,GH,Fisch-1912 Olawsky-1999 Wilson-and-Bendor-Samuel-1969
dge,Deutsche Gebärdensprache,Eurasia,52,11,germ1281,gsg,other,,Sign Languages,c515CCC,gsg,false,false,DE,
dgi,Dogri,Eurasia,33,75,dogr1250,dgo,Indo-European,,Indic,cCC5351,dgo,false,false,IN,Abbi-1992
dgo,Dongo,Africa,3,30,dong1290,doo,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,doo,false,false,CD,Tucker-and-Bryan-1966
dgr,Dagur,Eurasia,48,124,daur1238,dta,Altaic,,Mongolic,cBECC51,dta,false,false,CN,Bao-1982 Martin-1961 Stolz-1996 Todaeva-1986 Todaeva-1997b Wu-1996
dgx,Degexit'an,North America,62,-160,dege1248,ing,Na-Dene,,Athapaskan,c8C51CC,ing,false,false,US,Kari-1978
dha,Dhaasanac,Africa,4.66666666667,36.3333333333,daas1238,dsh,Afro-Asiatic,Cushitic,Lowland East Cushitic,c803353,dsh,false,false,ET,Tosco-2001
dhb,Dharumbal,Australia,-22.75,150.5,dhar1248,xgm,Pama-Nyungan,,Northern Pama-Nyungan,c336680,xgm,false,false,AU,Terrill-2002
dhi,Dhivehi,Eurasia,4.16666666667,73.5,dhiv1236,div,Indo-European,,Indic,cCC5351,div,false,false,MV,Cain-and-Gair-2000 Fritz-2002
dhl,Dhalandji,Australia,-22.08,115,dhal1245,dhl,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,dhl,false,false,AU,
dhm,Dhimal,Eurasia,26.6666666667,87.75,dhim1246,dhi,Sino-Tibetan,Tibeto-Burman,Dhimalic,c805933,dhi,false,false,NP,Cooper-1999
dhr,Dhargari,Australia,-23.75,114.916666667,dhar1247,dhr,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,dhr,false,false,AU,Klokeid-1969
dhu,Dhurga,Australia,-35.6666666667,150,dhur1239,dhu,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,dhu,false,false,AU,Eades-1976
dhw,Dharawal,Australia,-34.5,150.5,thur1254,tbh,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,tbh,false,false,AU,Eades-1976
did,Didinga,Africa,4.5,33.5,didi1258,did,Eastern Sudanic,Surmic,South Surmic,c806933,did,false,false,SS,Odden-1983 Rosato-1980 Tucker-and-Bryan-1966
die,Diegueño (Mesa Grande),North America,32.6666666667,-116.166666667,kumi1248,dih,Hokan,,Yuman,cCC6151,dih,false,false,MX US,Couro-and-Hutcheson-1973 Couro-and-Langdon-1975 Gorbet-1976 Gorbet-1998 Langdon-1970
dig,Digaro,Eurasia,28.4166666667,96,diga1241,mhu,Sino-Tibetan,Tibeto-Burman,Digaroan,c33807A,mhu,false,false,IN,North-East-Frontier-Agency-1963 Sastry-1984
dim,Dime,Africa,6.16666666667,36.25,dime1235,dim,Afro-Asiatic,Omotic,South Omotic,c708033,dim,false,false,ET,Fleming-1990
din,Dinka,Africa,8.5,28,dink1262,din,Eastern Sudanic,Nilotic,Western Nilotic,cCC6E51,din,false,false,SS,Andersen-1987 Andersen-1991 Malherbe-and-Rosenberg-1996 Malou-1988 Nebel-1948 Tucker-1981 Tucker-and-Bryan-1966
dio,Diola-Fogny,Africa,13,-16.25,jola1263,dyo,Niger-Congo,North-Central Atlantic,Jola,c51C1CC,dyo,false,true,GM SN,Malherbe-and-Rosenberg-1996 Sapir-1965
diy,Diyari,Australia,-28,139,dier1241,dif,Pama-Nyungan,,Central Pama-Nyungan,c335F80,dif,false,false,AU,Austin-1978 Austin-1981 Austin-1999 Mushin-1995
diz,Dizi,Africa,6.16666666667,36.5,dizi1235,mdx,Afro-Asiatic,Omotic,Dizoid,c80333E,mdx,false,false,ET,Allan-1976b Nichols-1992
dja,Djabugay,Australia,-16.75,145.583333333,dyaa1242,dyy,Pama-Nyungan,,Northern Pama-Nyungan,c336680,dyy,false,false,AU,Patz-1991
dji,Djingili,Australia,-17.75,134,djin1251,jig,Mirndi,,Djingili,c51B0CC,jig,false,false,AU,Chadwick-1975 Fabricius-1998 Nichols-1992 Pensalfini-1997
djm,Djambarrpuyngu,Australia,-12.1666666667,135.5,djam1256,djr,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,djr,false,false,AU,Buchanan-1978 Wilkinson-1991
djn,Djinang,Australia,-12.3333333333,134.833333333,djin1253,dji,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,dji,false,false,AU,Waters-1989
djp,Djapu,Australia,-12.6666666667,136,djap1238,duj,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,duj,false,false,AU,Fabricius-1998 Morphy-1983 Mushin-1995 Rose-et-al-1982
djr,Djaru,Australia,-18.75,128,jaru1254,ddj,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,ddj,false,false,AU,Fabricius-1998 Tsunoda-1981 Tsunoda-1995 Tsunoda-2007b
dli,Dutch (Limburg),Eurasia,51,5.5,dutc1256,nld,Indo-European,,Germanic,c803433,nld,false,false,BE,
dlm,Dla (Menggwa),Papunesia,-3.55,141.033333333,dera1245,kbv,Senagi,,Senagi,c337780,kbv,false,false,PG,de-Sousa-2006
dma,Duma,Africa,-0.95,13,duma1253,dma,Niger-Congo,Benue-Congo,Bantu,cC3CC51,dma,false,false,GA,Adam-1954
dmi,Dumi,Eurasia,27.25,86.6666666667,dumi1241,dus,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,dus,false,false,NP,van-Driem-1993
dmk,Domaaki,Eurasia,36.1666666667,74,doma1260,dmk,Indo-European,,Indic,cCC5351,dmk,false,false,PK,Lorimer-1939
dms,Dimasa,Eurasia,25.5,93,dima1251,dis,Sino-Tibetan,Tibeto-Burman,Brahmaputran,c6C51CC,dis,false,false,IN,Dundas-1908
dng,Ding,Africa,-4.33333333333,19.5,ding1239,diz,Niger-Congo,Benue-Congo,Bantu,cC3CC51,diz,false,false,CD,Mertens-1934
dni,Dani (Lower Grand Valley),Papunesia,-4.33333333333,138.833333333,lowe1415,dni,Trans-New Guinea,,Dani,c378033,dni,true,true,ID,Bromley-1961 Bromley-1981 Fahner-1979 van-der-Stap-1966
dnw,Dangaléat (Western),Africa,12.1666666667,18.3333333333,dang1274,daa,Afro-Asiatic,Chadic,East Chadic,cA7CC51,daa,false,false,TD,Fedry-1977
dob,Dobel,Papunesia,-6.25,134.666666667,dobe1238,kvo,Austronesian,,Central Malayo-Polynesian,c807633,kvo,false,false,ID,Hughes-1995 Hughes-2000 Hughes-and-Hughes-1990
dok,Bwele,Africa,3.216666667,19.28333333,bwel1238,ngc,Niger-Congo,Benue-Congo,Bantu,cC3CC51,ngc,false,false,CD,Twilingiyimana-1984
dol,Dolgan,Eurasia,71.25,98,dolg1241,dlg,Altaic,,Turkic,c778033,dlg,false,false,RU,Ubrjatova-1985
dom,Domari,Eurasia,32,35,doma1258,rmt,Indo-European,,Indic,cCC5351,rmt,false,false,JO IR IL,Macalister-1914
don,Dong (Southern),Eurasia,27,109,sout2741,kmc,Tai-Kadai,,Kam-Tai,c51CC8A,kmc,false,false,CN,Long-and-Zheng-1998 Zheng-and-Quan-1988
dou,Doutai,Papunesia,-3.33333333333,138.166666667,dout1240,tds,Lakes Plain,,East Tariku,c80335E,tds,false,false,ID,McAllister-and-McAllister-1991
doy,Doyayo,Africa,8.66666666667,13.0833333333,doya1240,dow,Niger-Congo,Adamawa-Ubangi,Samba-Duru,c72CC51,dow,false,false,CM,Wiering-1974 Wiering-1994 Wiering-and-Wiering-1994
dre,Drehu,Papunesia,-21,167.25,dehu1237,dhv,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,dhv,false,true,NC,Moyse-Faurie-1983 Nichols-1992 Tryon-1967a Tryon-1967c Tryon-1967d
drg,Dargwa,Eurasia,42.25,47.4166666667,darg1241,dar,Nakh-Daghestanian,Daghestanian,Dargwic,c803341,dar,false,false,RU,Abdullaev-1967 Abdullaev-1971 Isaev-2004 Talibov-1985 van-den-Berg-2001 van-den-Berg-2004
dri,Dari,Eurasia,35,66,dari1249,prs,Indo-European,,Iranian,c803335,prs,false,false,AF,Mueller-1980
drm,Darma,Eurasia,30,79.75,darm1243,drd,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,drd,false,false,IN,Sharma-1989a
dsh,Danish,Eurasia,56,10,dani1285,dan,Indo-European,,Germanic,c803433,dan,false,false,DK,Allan-et-al-1995 Bredsdorff-1958 Diderichsen-1979 Glyn-and-Gade-1981 Haberland-1994 Koefoed-1958 Nielsen-1975 Rischel-1970 Rischel-1972 Rischel-1982 Staff-of-Editions-Berlitz-1974
dts,Toro So,Africa,14.4166666667,-3.25,toro1252,dts,Dogon,,Dogon,c515FCC,dts,false,false,BF ML,Bendor-Samuel-et-al-1989 Calame-Griaule-1968 Plungian-1995
dua,Duala,Africa,4,9.41666666667,dual1243,dua,Niger-Congo,Benue-Congo,Bantu,cC3CC51,dua,false,false,CM,Biloa-1993 Ittmann-1939 Ittmann-1978 Malherbe-and-Rosenberg-1996 Meinhof-1912
dug,Dullay (Gollango),Africa,5.5,37.25,gaww1239,gwd,Afro-Asiatic,Cushitic,Lowland East Cushitic,c803353,gwd,false,false,ET,Amborn-et-al-1980 Stolz-1996
duk,Duka,Africa,11.1666666667,5.08333333333,huns1239,dud,Niger-Congo,Benue-Congo,Central Kainji,c803374,dud,false,false,NG,Bendor-Samuel-et-al-1973
dul,Dulong,Eurasia,28,98.3333333333,drun1238,duu,Sino-Tibetan,Tibeto-Burman,Nungish,c338073,duu,false,false,CN,LaPolla-2003a Sun-1982
dum,Dumo,Papunesia,-2.68333333333,141.3,vani1248,vam,Skou,,Western Skou,c51CCAD,vam,false,false,PG,Nichols-1992 Ross-1980
dun,Duna,Papunesia,-5.5,142.5,duna1248,duc,Duna-Bogaya,,Duna,c52CC51,duc,false,false,PG,Voorhoeve-1975
dut,Dutch,Eurasia,52.5,6,dutc1256,nld,Indo-European,,Germanic,c803433,nld,false,false,NL,Dik-1985 Donaldson-1981 Donaldson-1987 Donaldson-1997b Haeseryn-et-al-1997 Haspelmath-1997 Kager-1989 Koolhoven-1968 Malherbe-and-Rosenberg-1996 Shetter-1958 Trommelen-and-Zonneveld-1999a van-Wely-1951 van-der-Hulst-1984
duz,Dutch (Zeeuws),Eurasia,51.5,3.75,zeeu1238,zea,Indo-European,,Germanic,c803433,zea,false,false,NL BE,
dyi,Dyirbal,Australia,-17.8333333333,145.583333333,dyir1250,dbl,Pama-Nyungan,,Northern Pama-Nyungan,c336680,dbl,false,false,AU,Dixon-1972 Dryer-1990 Nichols-1992 Terrill-1997
dym,Dyimini,Africa,8.41666666667,-4.41666666667,djim1235,dyi,Niger-Congo,,Senufo,c338034,dyi,false,false,CI,
dyu,Dyula,Africa,9.83333333333,-4.66666666667,dyul1238,dyu,Mande,,Western Mande,c6751CC,dyu,false,false,BF ML CI,
ebi,Ebira,Africa,8.16666666667,7,ebir1243,igb,Niger-Congo,Benue-Congo,Nupoid,c423380,igb,false,false,NG,Adive-1989
edo,Edolo,Papunesia,-6.16666666667,142.666666667,edol1239,etr,Trans-New Guinea,,Bosavi,c806133,etr,false,false,PG,Gossner-1994
efi,Efik,Africa,4.91666666667,8.5,efik1245,efi,Niger-Congo,Benue-Congo,Lower Cross,c335C80,efi,false,false,NG,Cook-1969a Goldie-1964 Stolz-1996 Urua-1997 Welmers-1968a
ega,Ega,Africa,5.5,-5.5,egaa1242,ega,Niger-Congo,,Ega,c33803B,ega,false,false,CI,Connell-et-al-2002 Richard-1983
egn,Engenni,Africa,5.16666666667,6.38333333333,enge1239,enn,Niger-Congo,Benue-Congo,Edoid,c3B3380,enn,false,false,NG,Bybee-et-al-1994 Thomas-1978
eip,Eipo,Papunesia,-4.33333333333,140.083333333,eipo1242,eip,Trans-New Guinea,,Mek,c428033,eip,false,false,ID,Heeschen-1998
eja,Ejagham,Africa,5.41666666667,8.66666666667,ejag1239,etu,Niger-Congo,Benue-Congo,Ekoid-Mbe,cCC9C51,etu,false,false,NG CM,Watters-1981
eka,Ekari,Papunesia,-3.83333333333,135.5,ekar1243,ekg,Trans-New Guinea,,Paniai Lakes,c33804D,ekg,false,true,ID,Boelaars-1950 Doble-1960 Doble-1962 Doble-1987 Drabbe-1952 Steltenpool-1969 Steltenpool-and-van-der-Stap-1950
eko,Ekoti,Africa,-16.5,39.5,koti1238,eko,Niger-Congo,Benue-Congo,Bantu,cC3CC51,eko,false,false,MZ,Schadeberg-and-Mucanheia-2000
els,Elseng,Papunesia,-3,140.5,else1239,mrf,Morwap,,Morwap,c9D51CC,mrf,false,false,ID,Burung-2000
emb,Emberá (Northern),South America,6.83333333333,-77.1666666667,nort2972,emp,Choco,,Choco,cCC8751,emp,false,false,CO PA,Huber-and-Reed-1992 Loewen-1958 Loewen-1963 Mortensen-1999
emc,Embera Chami,South America,5,-76,embe1262,cmi,Choco,,Choco,cCC8751,cmi,false,false,CO,Aguirre-Licht-1999
eme,Émérillon,South America,3.16666666667,-52.4166666667,emer1243,eme,Tupian,,Maweti-Guarani,cCC6351,eme,false,false,GF,Rose-2003b
eml,Embaloh,Papunesia,1.16666666667,112.333333333,emba1238,emb,Austronesian,,South Sulawesi,cCC6B51,emb,false,false,ID,Adelaar-1995c
emm,Emmi,Australia,-13.5,130,amii1238,amy,Western Daly,,Wagaydy,c51CCC7,amy,false,false,AU,Ford-1998
ena,Enga,Papunesia,-5.5,143.666666667,enga1252,enq,Trans-New Guinea,,Enga_Kewa-Huli,c803348,enq,false,false,PG,Lang-1973 Stolz-1996
ene,Enets,Eurasia,67.5,86.5,enet1250,,Uralic,,Samoyedic,c578033,enf enh,false,false,RU,Kunnap-1999a Tereshchenko-1966b Tereshchenko-1966d
eng,English,Eurasia,52,0,stan1293,eng,Indo-European,,Germanic,c803433,eng,true,true,IE GB,Dahl-1985 Erickson-2001 Gimson-1970 Leech-and-Svartvik-1994 Moulton-1962 Quirk-et-al-1972 Quirk-et-al-1985 Trommelen-and-Zonneveld-1999b
eno,Enggano,Papunesia,-5.41666666667,102.25,engg1245,eno,Austronesian,,Enggano,c804A33,eno,false,false,ID,Kahler-1940 Kohler-1939
eny,Enya,Africa,-0.5,25.25,enya1247,gey,Niger-Congo,Benue-Congo,Bantu,cC3CC51,gey,false,false,CD,Spa-1973
epe,Epena Pedee,South America,3,-77,epen1239,sja,Choco,,Choco,cCC8751,sja,false,true,CO,Harms-1984 Harms-1985 Harms-1994
erk,Efate (South),Papunesia,-17.75,168.416666667,sout2856,erk,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,erk,false,false,VU,Thieberger-2004
err,Erromangan,Papunesia,-18.8333333333,169.166666667,siee1239,erg,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,erg,false,false,VU,Crowley-1998a
ese,Ese Ejja,South America,-11,-66,esee1248,ese,Pano-Tacanan,,Tacanan,c338056,ese,false,false,BO PE,Chavarria-1980 Firestone-1955 Key-1968 Shoemaker-and-Shoemaker-1967
esm,Esmeraldeño,South America,0.333333333333,-79.8333333333,atac1235,,Tacame,,Tacame,c51CC90,,false,false,EC,Adelaar-2004
ess,Esselen,North America,36.25,-121.75,esse1238,esq,,,,c804633,esq,false,false,US,Kroeber-1904 Shaul-1995
est,Estonian,Eurasia,59,26,esto1258,ekk,Uralic,Finno-Ugric,Finnic,c5B8033,ekk,false,false,EE,Eek-1975 Hint-1973 Kask-1966 Laanest-1982 Lehiste-1972 Malherbe-and-Rosenberg-1996 Oinas-1966 Tauli-1973 Tauli-1983 Valmet-et-al-1981 Viitso-1998 de-Sivers-1969
ets,Etsako,Africa,7.25,6.5,yekh1238,ets,Niger-Congo,Benue-Congo,Edoid,c3B3380,ets,false,false,NG,Elimelech-1978
eud,Eudeve,North America,29.1666666667,-109.666666667,eude1234,,Uto-Aztecan,,Opata-Eudeve,c51CC5F,,false,false,MX,Pennington-1981 Shaul-1991
eve,Evenki,Eurasia,56,125,even1259,evn,Altaic,,Tungusic,c798033,evn,false,true,RU,Bulatova-and-Grenoble-1999 Cincius-1975 Grenoble-2000 Ikegami-1975 Konstantinova-1968 Nedjalkov-1994b Nedjalkov-1997 Nedjalkov-and-Nedjalkov-2007a Sunik-1993
evn,Even,Eurasia,68,130,even1260,eve,Altaic,,Tungusic,c798033,eve,false,false,RU,Benzing-1955 Cincius-and-Rises-1952 Malchukov-1995 Malchukov-2001 Malchukov-2007 Novikova-1960 Novikova-1966 Novikova-1997
ewa,Ewe (Anlo),Africa,6,1,angl1262,ewe,Niger-Congo,Kwa,Tano,c806233,ewe,false,false,GH,Lewis-1985
ewe,Ewe,Africa,6.33333333333,0.416666666667,ewee1241,ewe,Niger-Congo,Kwa,Tano,c806233,ewe,false,true,TG GH,Agbodjo-and-Litvinov-2001 Ameka-1991 Ameka-1994 Ameka-2001 Duthie-1996 Malherbe-and-Rosenberg-1996 Pasch-1995 Rongier-1988 Schadeberg-1985 Warburton-et-al-1968 Westermann-1907 Westermann-1930 Westermann-1945 Westermann-1961
ewo,Ewondo,Africa,4,12,ewon1239,ewo,Niger-Congo,Benue-Congo,Bantu,cC3CC51,ewo,false,false,CM,Abega-1970 Malherbe-and-Rosenberg-1996 Nekes-1913 Nnomo-and-Mbezele-1982 Redden-1979
eya,Eyak,North America,60.5,-145,eyak1241,eya,Na-Dene,,Eyak,c8651CC,eya,false,false,US,Kinkade-2001 Krauss-1965 Krauss-1980
far,Faroese,Eurasia,62,-7,faro1244,fao,Indo-European,,Germanic,c803433,fao,false,false,DK,Andreasen-and-Dahl-1998 Arnason-1999 Barnes-1994 Barnes-and-Weyhe-1994 Lockwood-1955
fas,Fasu,Papunesia,-6.58333333333,143.333333333,fasu1242,faa,Trans-New Guinea,Kutubuan,Fasu,c5ECC51,faa,false,false,PG,Loeweke-and-May-1964 Loeweke-and-May-1980
fbf,Fula (Burkina Faso),Africa,14,0,west2454,fuh,Niger-Congo,North-Central Atlantic,Peul-Serer,c89CC51,fuh,false,false,BF,
fea,Frisian (Eastern),Eurasia,53.5833333333,7.5,east2288,frs,Indo-European,,Germanic,c803433,frs,false,false,DE,Fort-2001
fef,Fe'fe',Africa,5.25,10.1666666667,fefe1239,fmp,Niger-Congo,Benue-Congo,Wide Grassfields,c7D3380,fmp,false,false,CM,Hyman-1972
fgu,Fula (Guinean),Africa,11.5,-12.5,pula1262,fuf,Niger-Congo,North-Central Atlantic,Peul-Serer,c89CC51,fuf,false,false,GN,Koval-1979
fij,Fijian,Papunesia,-17.8333333333,178,fiji1243,fij,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,fij,true,true,FJ,Capell-1973 Churchward-1941 Churchward-1973 Dixon-1988 Milner-1972 Schutz-1985
fin,Finnish,Eurasia,62,25,finn1318,fin,Uralic,Finno-Ugric,Finnic,c5B8033,fin,true,true,FI,Dahl-1985 Fromm-1982 Fromm-and-Sadeniemi-1956 Hakulinen-and-Karlsson-1979 Harms-1964 Haspelmath-1997 Jeliseev-1993 Kangasniemi-1992 Karlsson-1978 Karlsson-1982 Karlsson-1983 Karlsson-1999 Karlsson-2000 Laanest-1982 Laury-1995 Lehtinen-1970 Mitchell-2001 Neuvonen-1935 Sulkala-and-Karjalainen-1992 Whitney-1973 Wiik-1965 Wuolle-1967
fio,Fiote,Africa,-5.5,14,koon1244,kng,Niger-Congo,Benue-Congo,Bantu,cC3CC51,kng,false,false,CD,
fiw,Fijian (Wayan),Papunesia,-17,177.3,west2519,wyy,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,wyy,false,false,FJ,
fli,Ful (Liptako),Africa,13.5,0.5,lipt1238,fuh,Niger-Congo,North-Central Atlantic,Peul-Serer,c89CC51,fuh,false,false,BF,De-Wolf-1995
fma,Pulaar,Africa,16.5,-13.75,pula1263,fuc,Niger-Congo,North-Central Atlantic,Peul-Serer,c89CC51,fuc,false,false,MR,Niang-1997
fni,Fulfulde (Nigerian),Africa,10.25,11.25,nige1253,fuv,Niger-Congo,North-Central Atlantic,Peul-Serer,c89CC51,fuv,false,false,NG,Arnott-1970 Jungraithmayr-and-Abu-Manga-1989 McIntosh-1984
fno,Frisian (North),Eurasia,54.5,9,nort2626,frr,Indo-European,,Germanic,c803433,frr,false,false,DE,Wilts-1999
foe,Foe,Papunesia,-6.5,143.5,foii1241,foi,Trans-New Guinea,Kutubuan,Foe,cCC51AE,foi,false,false,PG,Rule-1977
fon,Fongbe,Africa,6.41666666667,2.16666666667,fonn1241,fon,Niger-Congo,Kwa,Tano,c806233,fon,false,false,BJ,Hoftmann-1993 Lefebvre-and-Brousseau-2002
for,Fore,Papunesia,-6.75,145.5,fore1270,for,Trans-New Guinea,Kainantu-Goroka,Fore-Gimi,cCC9751,for,false,false,PG,Nicholson-and-Nicholson-1962 Scott-1973 Scott-1978 Scott-1980
fox,Fox,North America,43,-83,mesk1242,sac,Algic,,Algonquian,c758033,sac,false,false,US,Bloomfield-1933 Goddard-1994a Jones-and-Michelson-1911
fqs,Momu,Papunesia,-3,141.583333333,fass1245,fqs,Baibai-Fas,,Baibai-Fas,c648033,fqs,false,false,PG,Blake-2007
frd,Fordata,Papunesia,-6.75,131.5,ford1242,frd,Austronesian,,Central Malayo-Polynesian,c807633,frd,false,false,ID,Drabbe-1926a Elath-et-al-1990
fre,French,Eurasia,48,2,stan1290,fra,Indo-European,,Romance,cCC5154,fra,true,true,CH FR,Byrne-et-al-1986 Dahl-1985 Dell-1984 Dubois-et-al-1955 Fougeron-and-Smith-1999 Fox-2001 Guentcheva-and-Riviere-2007 Harris-1988 Harris-1997 Haspelmath-1997 Judge-and-Healey-1985 LHuillier-1999 Lausberg-1972 Roca-1999 Sten-1963 Weinrich-1982 van-Oostendorp-1995
fri,Frisian,Eurasia,53,5,west2354,fry,Indo-European,,Germanic,c803433,fry,false,false,NL DE,Hoekstra-and-Tiersma-1994 Tiersma-1985
frw,Frisian (Western),Eurasia,53,6,west2354,fry,Indo-European,,Germanic,c803433,fry,false,false,NL,Bangma-1992 Tiersma-1985
fsl,Finnish Sign Language,Eurasia,62,26,finn1310,fse,other,,Sign Languages,c515CCC,fse,false,false,FI,Savolainen-2003
fua,Fulfulde (Adamawa),Africa,9.16666666667,13.5,adam1253,fub,Niger-Congo,North-Central Atlantic,Peul-Serer,c89CC51,fub,false,false,CM,Arnott-1970 De-Wolf-1995 Labatut-1973 Stennes-1961 Stennes-1967 Taylor-1953
fue,Futuna (East),Papunesia,-14.3333333333,-178.166666667,east2447,fud,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,fud,false,false,WF,Moyse-Faurie-1999 Moyse-Faurie-2007
ful,Fulniô,South America,-8,-37.5,fuln1247,fun,,,,c335480,fun,false,false,BR,Lapenda-1968
fum,Fulfulde (Maasina),Africa,15,-5,maas1239,ffm,Niger-Congo,North-Central Atlantic,Peul-Serer,c89CC51,ffm,false,false,ML,Breedveld-1995
fur,Fur,Africa,13.5,25,furr1244,fvr,,,,cCC51CA,fvr,false,true,SD,Beaton-1968 Jakobi-1990 Nichols-1992 Tucker-and-Bryan-1966
fus,Fula (Senegal),Africa,15,-14,pula1263,fuc,Niger-Congo,North-Central Atlantic,Peul-Serer,c89CC51,fuc,false,false,SN,Labouret-1952 Niang-1997
fut,Futuna-Aniwa,Papunesia,-19.5333333333,170.216666667,futu1245,fut,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,fut,false,false,VU,Capell-1958 Capell-1984a Dougherty-1983 Nichols-1992
fuz,Fuzhou,Eurasia,26,119.5,mind1253,cdo,Sino-Tibetan,,Chinese,c51CCC9,cdo,false,false,CN MY TH,Chan-1985 Chen-and-Norman-1965 Hanyu-1960 Norman-1988
fye,Fyem,Africa,9.58333333333,9.33333333333,fyam1238,pym,Niger-Congo,Benue-Congo,Benue-Congo Plateau,cB1CC51,pym,false,false,NG,Nettle-1998
ga,Gã,Africa,5.66666666667,-0.166666666667,gaaa1244,gaa,Niger-Congo,Kwa,Ga-Dangme,c7D8033,gaa,false,false,GH,Ablorh-Odjidja-1968 Berry-nd Kropp-1987
gaa,Gaagudju,Australia,-12.5833333333,132.833333333,gaga1251,gbu,,,,c338051,gbu,false,false,AU,Harvey-1992 Harvey-2002
gad,Gade,Africa,8.66666666667,7.41666666667,gade1242,ged,Niger-Congo,Benue-Congo,Nupoid,c423380,ged,false,false,NG,Sterk-1990 Sterk-1994
gae,Gaelic (Scots),Eurasia,57,-4,scot1245,gla,Indo-European,,Celtic,c80333C,gla,false,false,GB,Calder-1923 Calder-1980 Calder-1990 Dorian-1978 Gillies-1993 MacAulay-1992b Mackinnon-1971 Mackinnon-1977 Maclennan-1979
gag,Gagauz,Eurasia,46.3333333333,28.6666666667,gaga1249,gag,Altaic,,Turkic,c778033,gag,false,false,MD,Menz-2000 Pokrovskaja-1964 Pokrovskaja-1966 Pokrovskaja-1978 Pokrovskaja-1997
gah,Gahuku,Papunesia,-6,145.416666667,alek1238,gah,Trans-New Guinea,Kainantu-Goroka,Gahuku,c338046,gah,false,false,PG,Deibler-1976
gal,Galo,Eurasia,28.1666666667,94.6666666667,galo1242,adl,Sino-Tibetan,Tibeto-Burman,Tani,c51CCBE,adl,false,false,IN,Das-Gupta-1963
gam,Gamo,Africa,6.66666666667,37.25,gamo1243,gmv,Afro-Asiatic,Omotic,Ta-Ne-Omotic,cCC5751,gmv,false,false,ET,Hompo-1990 Taylor-1994
gan,Great Andamanese,Eurasia,12,92.6666666667,apuc1241,apq,,,,c804233,apq,false,false,IN,Basu-1955 Man-1885 Radcliffe-Brown-1948 Yadav-nd
gap,Gapapaiwa,Papunesia,-9.75,149.833333333,gapa1238,pwg,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,pwg,false,false,PG,McGuckin-2002 McGuckin-and-McGuckin-1992
gar,Garo,Eurasia,25.6666666667,90.5,garo1247,grt,Sino-Tibetan,Tibeto-Burman,Brahmaputran,c6C51CC,grt,false,true,IN,Burling-1961 Burling-2003
gau,German (Upper Austrian),Eurasia,47,14,bava1246,bar,Indo-European,,Germanic,c803433,bar,false,false,AT,
gav,Gavião,South America,-10.6666666667,-62,gavi1246,gvo,Tupian,,Monde,c4D8033,gvo,false,false,BR,Moore-1984 Rodrigues-1999a
gay,Gayo,Papunesia,4.5,97.5,gayo1244,gay,Austronesian,,Northwest Sumatra-Barrier Islands,cCC7751,gay,false,false,ID,Hazeu-1907
gba,German (Bavarian),Eurasia,49,11.5,bava1246,bar,Indo-European,,Germanic,c803433,bar,false,false,DE AT,
gbb,Gbeya Bossangoa,Africa,6.66666666667,17.5,gbay1287,gbp,Niger-Congo,,Gbaya-Manza-Ngbaka,c803336,gbp,false,false,CF,Monino-and-Roulon-1972 Nichols-1992 Samarin-1966 Stolz-1996
gbc,Guinea Bissau Crioulo,Africa,12,-15,uppe1455,pov,other,,Creoles and Pidgins,c333D80,pov,false,false,GW,Scantamburlo-1981
gbe,German (Bern),Eurasia,47,7.41666666667,swis1247,gsw,Indo-European,,Germanic,c803433,gsw,false,false,CH,
gbk,Gbaya (Northwest),Africa,6,15,nort2775,gya,Niger-Congo,,Gbaya-Manza-Ngbaka,c803336,gya,false,false,CF CM,Monino-and-Roulon-1972 Roulon-1975 Roulon-Doko-1995 Tucker-and-Bryan-1966
gbl,German (Berlin),Eurasia,52.5,13.3333333333,stan1295,deu,Indo-European,,Germanic,c803433,deu,false,false,DE,
gbs,Gbaya (Southwest),Africa,4.7,14.96,sout2785,gso,Niger-Congo,,Gbaya-Manza-Ngbaka,c803336,gso,false,false,,Tucker-and-Bryan-1966
gcy,Greek (Cypriot),Eurasia,34.75,33,cypr1245,ell,Indo-European,,Greek,cCC515A,ell,false,false,CY,
gdb,Gutob,Eurasia,19,83.6666666667,bodo1267,gbj,Austro-Asiatic,,Munda,c807D33,gbj,false,false,IN,Subba-Rao-and-Patnaik-1992
gdf,Guduf,Africa,11.2333333333,13.8,gudu1252,gdf,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,gdf,false,false,NG CM,
gdi,Godié,Africa,5.41666666667,-5.83333333333,godi1239,god,Niger-Congo,,Kru,c6F51CC,god,false,false,CI,Marchese-1986a Marchese-1988
gdk,Gadaba (Kondekor),Eurasia,18.75,83.5,pott1240,gdb,Dravidian,,Dravidian,cB7CC51,gdb,false,false,IN,Bhaskararao-1998
gdl,Guadeloupe Creole,North America,16.25,-61.5,guad1242,gcf,other,,Creoles and Pidgins,c333D80,gcf,false,false,GP,Malherbe-and-Rosenberg-1996
gdr,Gidar,Africa,10,14,gida1247,gid,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,gid,false,false,CM,Frajzyngier-1996
gds,Gadsup,Papunesia,-6.25,146,gads1258,gaj,Trans-New Guinea,Kainantu-Goroka,Gauwa,cB151CC,gaj,false,false,PG,Frantz-1973 Frantz-and-Frantz-1966 Frantz-and-McKaughan-1973 McKaughan-1973a
gel,Gela,Papunesia,-9.08333333333,160.25,gela1263,nlg,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,nlg,false,false,SB,Crowley-2002a
geo,Georgian,Eurasia,42,44,nucl1302,kat,Kartvelian,,Kartvelian,c80335C,kat,true,true,GE,Aronson-1982 Aronson-1991 Boeder-2000 Cherchi-1999 Chikobava-1967 Dahl-1985 Fahnrich-1987 Harris-1981a Harris-1991a Hewitt-1995 Malherbe-and-Rosenberg-1996 Neisser-1953 Robins-and-Waterson-1952 Rudenko-1972 Selmer-1935 Torikashvili-1992 Tschenkeli-1958 Vogt-1938 Vogt-1958 Vogt-1971
ger,German,Eurasia,52,10,stan1295,deu,Indo-European,,Germanic,c803433,deu,true,true,CH DE AT,Borgert-and-Nyhan-1975 Breul-1906 Curme-1922 Dahl-1985 Duden-1998 Durrell-1992 Esau-1973 Harbert-1977 Jessen-1999 Kohler-1999 Lederer-1969 Lide-and-Magnusson-1970 Moulton-1962 Palmer-1986 Wangler-1972 Wiemer-and-Nedjalkov-2007 Zifonun-et-al-1997
gfr,Guianese French Creole,South America,5,-53,guia1246,gcr,other,,Creoles and Pidgins,c333D80,gcr,false,false,GF,
ggd,Gugadj,Australia,-18.5,140.5,guga1239,ggd,Pama-Nyungan,,Northern Pama-Nyungan,c336680,ggd,false,false,AU,
ggu,Gureng Gureng,Australia,-25.25,151,gure1255,gnr,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,gnr,false,false,AU,Brasch-1975
gha,German (Hannover),Eurasia,52.4166666667,9.66666666667,stan1295,deu,Indo-European,,Germanic,c803433,deu,false,false,DE,
ghb,Guahibo,South America,5,-69,guah1255,guh,Guahiban,,Guahiban,cCC6751,guh,false,false,CO,Huber-and-Reed-1992 Kondo-and-Kondo-1967 Queixalos-2000
gho,Ghotuo,Africa,7.08333333333,5.75,ghot1243,aaa,Niger-Congo,Benue-Congo,Edoid,c3B3380,aaa,false,false,NG,
ghr,Bunan,Eurasia,32.5,77,gahr1239,bfu,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,bfu,false,false,IN,Sharma-1989b
gid,Gidabal,Australia,-28.4166666667,152.416666667,cond1242,gih,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,gih,false,false,AU,Geytenbeek-and-Geytenbeek-1971
gil,Gilaki,Eurasia,37.3333333333,50,gila1241,glk,Indo-European,,Iranian,c803335,glk,false,false,IR,Christensen-1930
gim,Gimira,Africa,7,35.75,benc1235,bcq,Afro-Asiatic,Omotic,Ta-Ne-Omotic,cCC5751,bcq,false,false,ET,Breeze-1986 Breeze-1990
gir,Gula Iro,Africa,10.25,19.4166666667,gula1265,glj,Niger-Congo,Adamawa-Ubangi,Bua,c67CC51,glj,false,false,TD,Pairault-1969
git,Gitksan,North America,55.3333333333,-127.75,gitx1241,git,Tsimshianic,,Tsimshianic,c336180,git,false,false,CA,Hindle-and-Rigsby-1973 Rigsby-1986
giz,Giziga,Africa,10.3333333333,14.1666666667,nort3047,gis,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,gis,false,false,CM,Frajzyngier-1996 Lukas-1970
gji,Gurindji,Australia,-17.6666666667,130.666666667,guri1247,gue,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,gue,false,false,AU,
gjj,Guajajara,South America,-5,-46,guaj1255,gub,Tupian,,Maweti-Guarani,cCC6351,gub,false,false,BR,Abreu-1931 Bendor-Samuel-1972
gku,Gününa Küne,South America,-41,-67,puel1244,pue,Chonan,,Puelche,c805233,pue,false,false,AR,Adelaar-2004 Barbara-1879 Casamiquela-1983
gla,Gelao,Eurasia,22.9166666667,105.5,qaua1234,gqu,Tai-Kadai,,Kadai,c338053,gqu,false,false,VN,Edmondson-2008 He-1981 He-1983
glc,Galician,Eurasia,43,-8,gali1258,glg,Indo-European,,Romance,cCC5154,glg,false,false,ES,Carballo-Calero-1979 Perez-Bouza-1996
gll,Galela,Papunesia,2.41666666667,128.333333333,gale1259,gbi,North Halmaheran,,North Halmaheran,c807933,gbi,false,false,ID,Ipol-et-al-1989 Shelden-1990 van-Baarda-1891 van-Baarda-1908
gln,Golin,Papunesia,-6.33333333333,144.75,goli1247,gvf,Trans-New Guinea,,Chimbu-Wahgi,c51CC7C,gvf,false,false,PG,Bunn-1974
glp,Gaalpu,Australia,-12.6666666667,136.75,dhan1270,dhg,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,dhg,false,false,AU,Wood-1978
gma,German (Mansfeldisch),Eurasia,51.5833333333,11.5,stan1295,deu,Indo-European,,Germanic,c803433,deu,false,false,DE,
gmb,Guambiano,South America,2.5,-76.6666666667,guam1248,gum,Barbacoan,,Barbacoan,cCCA451,gum,false,false,CO,Branks-and-Branks-1973 Caudmont-1954 Huber-and-Reed-1992
gml,Gamilaraay,Australia,-29.8333333333,149.5,gami1243,kld,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,kld,false,false,AU,Austin-and-Nathan-1998
gmt,Gumatj,Australia,-12.5,135.5,guma1253,gnn,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,gnn,false,false,AU,
gmw,Gumawana,Papunesia,-9.25,150.833333333,guma1254,gvs,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,gvs,false,false,PG,Olson-1988 Olson-1992
gmz,Gumuz,Africa,12.5,35.8333333333,gumu1244,guk,,,,cCC51B3,guk,false,false,ET SD,Bender-1979 Uzar-1989
gna,Guana,South America,-22,-58,guan1268,gva,Mascoian,,Mascoian,c713380,gva,false,false,PY,Martius-1863
gnb,Gunbalang,Australia,-12,134,kunb1251,wlg,Gunwinyguan,,Marne,c61CC51,wlg,false,false,AU,Coleman-1982 Harris-1969b
gnd,Ga'anda,Africa,10.3333333333,12.5833333333,gaan1243,gqa,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,gqa,false,false,NG,Newman-1971
gnn,Gunin,Australia,-14.25,126.666666667,kwin1241,gww,Worrorran,,Worrorran,c51CCBB,gww,false,false,AU,McGregor-1993
gno,Guanano,South America,0.833333333333,-69.5,guan1269,gvc,Tucanoan,,Tucanoan,c6FCC51,gvc,false,false,CO BR,Huber-and-Reed-1992 Waltz-1979
gny,Gunya,Australia,-26.5,146.5,guny1241,gyy,Pama-Nyungan,,Northern Pama-Nyungan,c336680,gyy,false,false,AU,Breen-1981a
goa,Goajiro,South America,12,-72,wayu1243,guc,Arawakan,,Guajiro-Paraujano,cCCA251,guc,false,false,CO VR,Celedon-1878 Ehrman-1972a Holmer-1949a Holmer-1949b Holmer-1949c Holmer-1949d Jusayu-1975 Jusayu-1977 Jusayu-and-Olza-Zubiri-1977 Mansen-1967 Olza-Zubiri-and-Jusayu-1978 Olza-Zubiri-and-Jusayu-1985 Wise-1990
god,Godoberi,Eurasia,42.6666666667,46.0833333333,ghod1238,gdo,Nakh-Daghestanian,Daghestanian,Avar-Andic-Tsezic,c7B51CC,gdo,false,false,RU,Gudava-1964 Kazenin-1994 Kibrik-1996 Kodzasov-1999a Saidova-1973
goe,Goemai,Africa,8.66666666667,9.75,goem1240,ank,Afro-Asiatic,Chadic,West Chadic,cADCC51,ank,false,false,NG,Hellwig-2003
gog,Gogodala,Papunesia,-8.08333333333,142.833333333,gogo1265,ggw,Trans-New Guinea,Gogodala-Suki,Gogodala,cCC6D51,ggw,false,false,PG,Voorhoeve-1975
goj,Gojri,Eurasia,32.75,76.25,guja1253,gju,Indo-European,,Indic,cCC5351,gju,false,false,IN,Sharma-1982b
gok,Gokana,Africa,4.58333333333,7.33333333333,goka1239,gkn,Niger-Congo,Benue-Congo,Ogonoid,cBD51CC,gkn,false,false,NG,
gol,Gola,Africa,7.25,-10.8333333333,gola1255,gol,Niger-Congo,Mel,Gola,c4B8033,gol,false,false,SL LR,Koroma-1994 Westermann-1921a
gon,Gondi,Eurasia,19,81,,gno,Dravidian,,Dravidian,cB7CC51,gno,false,false,IN,Lincoln-1969 Stolz-1996 Subrahmanyam-1968
goo,Gooniyandi,Australia,-18.3333333333,126.333333333,goon1238,gni,Bunuban,,Bunuban,c33805F,gni,true,true,AU,McGregor-1990 McGregor-1992b McGregor-1997 McGregor-1999
gor,Gorowa,Africa,-4.5,36.5,goro1270,gow,Afro-Asiatic,Cushitic,Southern Cushitic,c688033,gow,false,false,TZ,Seidel-1900
gos,German (Ostschweiz),Eurasia,47.4166666667,9.25,swis1247,gsw,Indo-European,,Germanic,c803433,gsw,false,false,CH,
gpz,German (Appenzell),Eurasia,47.3333333333,9.33333333333,swis1247,gsw,Indo-European,,Germanic,c803433,gsw,false,false,CH,
grb,Grebo,Africa,5,-8,sout2826,grj,Niger-Congo,,Kru,c6F51CC,grj,true,true,LR,Corbett-1991 Innes-1966 Innes-1967a Marchese-1988 Sapir-1931
gre,Greenlandic (East),Eurasia,65,-40,tunu1234,kal,Eskimo-Aleut,,Eskimo,cCC7351,kal,false,false,GL,Robbe-and-Dorais-1986a
grf,Garífuna,North America,15.6666666667,-88,gari1256,cab,Arawakan,,Antillean Arawakan,cC8CC51,cab,false,false,GT BZ HN,Bybee-et-al-1994 Stolz-1996 Taylor-1955 Taylor-1956a Taylor-1956b Taylor-1958 Taylor-1977
grg,Gurr-goni,Australia,-12.25,134.416666667,gura1252,gge,Mangrida,,Burarran,c33806E,gge,false,false,AU,Green-1995
grj,Guarijío,North America,27.75,-108.666666667,huar1255,var,Uto-Aztecan,,Tarahumaran,cAFCC51,var,false,false,MX,Miller-1993 Miller-1996a
grk,Greek (Modern),Eurasia,39,22,mode1248,ell,Indo-European,,Greek,cCC515A,ell,true,true,GR,Bergman-1968 Christiades-1980 Dahl-1985 Drachman-and-Malikouti-Drachman-1999 Everaert-2000 Haberland-and-Macrakis-1992 Haspelmath-1997 Hedin-1995 Holton-et-al-1997 Householder-et-al-1964 Joseph-1998 Joseph-and-Philippaki-Warburton-1987 Mackridge-1985 Malherbe-and-Rosenberg-1996 Malikouti-Drachman-and-Drachman-1981 Palmer-1986 Ruge-1986 Sofroniou-1962
grm,Gurma,Africa,12.25,1,gour1243,gux,Niger-Congo,Gur,Oti-Volta,cCCB351,gux,false,false,BF,Swanson-1985 Tersis-1967
grn,Gurenne,Africa,10.8333333333,-0.916666666667,fare1241,gur,Niger-Congo,Gur,Oti-Volta,cCCB351,gur,false,false,GH,Rapp-1966
gro,Guro,Africa,7,-6,guro1248,goa,Mande,,Eastern Mande,c403380,goa,false,false,CI,
grp,German (Ripuarian),Eurasia,51,7,kols1241,ksh,Indo-European,,Germanic,c803433,ksh,false,false,BE,
grr,Garrwa,Australia,-17.0833333333,137.166666667,gara1269,wrk,Garrwan,,Garrwan,c335880,wrk,false,false,AU,Furby-1972 Furby-1974 Furby-and-Furby-1977 Mushin-2005 Nichols-1992
grs,Garus,Papunesia,-4.95,145.666666667,garu1246,gyb,Trans-New Guinea,Madang,Mabuso,cCC5197,gyb,false,false,PG,ZGraggen-1969
grt,Gorontalo,Papunesia,0.5,122,goro1259,gor,Austronesian,,Greater Central Philippine,cCC8E51,gor,false,false,ID,Padeta-1977
grw,Greenlandic (West),Eurasia,64,-51,kala1399,kal,Eskimo-Aleut,,Eskimo,cCC7351,kal,true,true,GL,Dahl-1985 Fortescue-1984 Fortescue-2007 Rischel-1974 Schultz-Lorentzen-1945 Vakhtin-1997 Woodbury-1977
gsl,Greek Sign Language,Eurasia,38.5,22,gree1271,gss,other,,Sign Languages,c515CCC,gss,false,false,GR,
gso,Greenlandic (South),Eurasia,60,-44,kala1399,kal,Eskimo-Aleut,,Eskimo,cCC7351,kal,false,false,GL,Swadesh-1946a
gtg,German (Thurgau),Eurasia,47.5833333333,9.16666666667,swis1247,gsw,Indo-European,,Germanic,c803433,gsw,false,false,CH,
gth,German (Thuringian),Eurasia,51,11,stan1295,deu,Indo-European,,Germanic,c803433,deu,false,false,DE,
gti,German (Timisoara),Eurasia,45.75,21.25,stan1295,deu,Indo-European,,Germanic,c803433,deu,false,false,RO,
gto,Guató,South America,-17,-58,guat1253,gta,,,,cAF51CC,gta,false,false,BR,Martius-1863 Rodrigues-1999b
gua,Guaraní,South America,-26,-56,para1311,gug,Tupian,,Maweti-Guarani,cCC6351,gug,true,true,PY,Ayala-1993 Bridgeman-1961 Dahl-1985 Gregores-and-Suarez-1967 Guasch-1976 Guasch-1996 Guasch-and-Ortiz-1986 Jensen-1998 Krivoshein-de-Canese-1983 Lunt-1973 Malherbe-and-Rosenberg-1996 Nichols-1992 Rosbottom-1965 Rosbottom-1967 Rosbottom-1968 Uldall-1956
gud,Gude,Africa,10.4166666667,13.4166666667,gude1246,gde,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,gde,false,false,NG CM,Frajzyngier-1997 Hoskison-1983
gue,Guere,Africa,6.66666666667,-7.75,guer1240,,Niger-Congo,,Kru,c6F51CC,gxx wec,false,false,CI,
guf,Gupapuyngu,Australia,-12,136,gupa1247,guf,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,guf,false,false,AU,
gug,Gugada,Australia,-30,134,koka1244,ktd,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,ktd,false,false,AU,Bybee-et-al-1994 Peile-1971 Platt-1972
guh,Guhu-Samane,Papunesia,-8,147.333333333,guhu1244,ghs,Trans-New Guinea,Greater Binanderean,Guhu-Samane,c803365,ghs,false,false,PG,Richert-1975
guj,Gujarati,Eurasia,23,72,guja1252,guj,Indo-European,,Indic,cCC5351,guj,false,false,IN,Cardona-1965 Cardona-and-Suthar-2003 Malherbe-and-Rosenberg-1996 Mistry-1997 Mistry-2000 Nair-1987 Patel-nd Saveljeva-1965
gul,Gula (in Central African Republic),Africa,9.5,22.5,gula1266,kcm,Central Sudanic,,Bongo-Bagirmi,c643380,kcm,false,false,CF,Nougayrol-1999
gum,Gumbaynggir,Australia,-30.1666666667,152.5,kumb1268,kgs,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,kgs,false,false,AU,Eades-1977 Eades-1979 Fabricius-1998 Smythe-1948
gun,Gunu,Africa,4.58333333333,11.25,nugu1242,yas,Niger-Congo,Benue-Congo,Bantu,cC3CC51,yas,false,false,CM,
guq,Guaque,South America,1,-72.0833333333,cari1279,cbd,Cariban,,Cariban,cCC9251,cbd,false,false,CO,Durbin-and-Seijas-1972
gur,Gurung,Eurasia,28.3333333333,84.3333333333,guru1261,,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,ggn gvr,false,false,NP,Glover-1974 Matisoff-1997
gus,Gusii,Africa,-0.75,34.8333333333,gusi1247,guz,Niger-Congo,Benue-Congo,Bantu,cC3CC51,guz,false,false,KE,Cammenga-2002
guu,Guugu Yimidhirr,Australia,-15,144.833333333,gugu1255,kky,Pama-Nyungan,,Northern Pama-Nyungan,c336680,kky,false,false,AU,Haviland-1979 de-Zwaan-1969
guw,Gungbe,Africa,6.5,2.5,gunn1250,guw,Niger-Congo,Kwa,Tano,c806233,guw,false,false,BJ,Hazoume-1979
gvi,German (Viennese),Eurasia,48.1666666667,16.3333333333,bava1246,bar,Indo-European,,Germanic,c803433,bar,false,false,AT,
gwa,Gwari,Africa,9.5,7,,gbr,Niger-Congo,Benue-Congo,Nupoid,c423380,gbr,false,false,NG,Hyman-and-Magaji-1970
gwe,German (Westphalian),Eurasia,52,7.5,west2356,wep,Indo-European,,Germanic,c803433,wep,false,false,DE,
gwo,Gworok,Africa,9.91666666667,8.16666666667,tyap1238,kcg,Niger-Congo,Benue-Congo,Benue-Congo Plateau,cB1CC51,kcg,false,false,NG,Adwiraah-1989
gyb,Guayabero,South America,2.83333333333,-72,guay1257,guo,Guahiban,,Guahiban,cCC6751,guo,false,false,CO,Huber-and-Reed-1992
gyc,Gyarong (Cogtse),Eurasia,31.5,102,situ1238,jya,Sino-Tibetan,Tibeto-Burman,rGyalrong,c33806C,jya,false,false,CN,Lin-1993 Nagano-2003
gzu,German (Zurich),Eurasia,47.4166666667,8.5,swis1247,gsw,Indo-European,,Germanic,c803433,gsw,false,false,CH,
had,Hadza,Africa,-3.75,35.1666666667,hadz1240,hts,,,,c803E33,hts,false,false,TZ,Sands-et-al-1996 Tucker-et-al-1977
hai,Haida,North America,53,-132,haid1248,hai,,,,cCC6451,hai,false,true,CA US,Eastman-1979 Enrico-1986 Enrico-2003 Harrison-1895 Lawrence-1977 Levine-1977 Sapir-1923 Stolz-1996 Swanton-1905 Swanton-1911a Swanton-1911b de-la-Grasserie-1902
hak,Hakka,Eurasia,25,116,hakk1236,hak,Sino-Tibetan,,Chinese,c51CCC9,hak,false,false,CN,Hashimoto-1973
hal,Halia,Papunesia,-5.25,154.666666667,hali1244,hla,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,hla,false,false,PG,Allen-and-Allen-1965 Allen-and-Allen-1987 Bybee-et-al-1994
ham,Hamtai,Papunesia,-7.5,146.25,hamt1247,hmt,Trans-New Guinea,,Nuclear Angan,c5187CC,hmt,false,true,PG,Healey-1981 Oates-and-Oates-1968
han,Hani,Eurasia,23,103,hani1248,hni,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,hni,false,false,CN,Lewis-and-Bibo-1996 Li-1990
har,Haruai,Papunesia,-5.08333333333,144.166666667,haru1245,tmd,Piawi,,Piawi,cCC9451,tmd,false,false,PG,Comrie-1999
hat,Hatam,Papunesia,-1,134,hata1243,had,Hatim-Mansim,,Hatim-Mansim,cCCC251,had,false,false,ID,Reesink-1996 Reesink-1999
hau,Hausa,Africa,12,7,haus1257,hau,Afro-Asiatic,Chadic,West Chadic,cADCC51,hau,true,true,NG NE,Abdoulaye-2004 Abraham-1941 Cowan-and-Schuh-1976 Dobronravin-and-Smirnova-2001 Haspelmath-1997 Howeidy-1959 Jungraithmayr-and-Mohlig-1976 Kraft-1963 Kraft-and-Kirk-Greene-1973 Kraft-and-Kraft-1973 Malherbe-and-Rosenberg-1996 Migeod-1914 Newman-1979 Newman-1990 Newman-2000 Newman-and-Schuh-1974 Nichols-1992 Robinson-1942 Sapir-1949 Schuh-and-Bagari-1999 Schuh-and-Yalwa-1999 Shcheglov-1970 Smirnova-1982 Wolff-1993
hav,Havasupai,North America,35.75,-112.5,hava1248,yuf,Hokan,,Yuman,cCC6151,yuf,false,false,US,Yegerlehner-and-Voegelin-1957
haw,Hawaiian,Papunesia,19.5833333333,-155.5,hawa1245,haw,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,haw,false,false,US,Alexander-1968 Alexander-1977 Dahl-1985 Elbert-and-Keala-1961 Elbert-and-Pukui-1979 Hawkins-1982 Pukui-and-Elbert-1965 Pukui-and-Elbert-1971 Schutz-1981
hay,Hayu,Eurasia,27.25,86,wayu1241,vay,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,vay,false,false,NP,Michailovsky-1981 Michailovsky-1988 Michailovsky-2003
hba,Hebrew (Modern Ashkenazic),Eurasia,31.75,35.1666666667,hebr1245,heb,Afro-Asiatic,,Semitic,cB3CC51,heb,false,false,IL,Bolozky-1978 Bolozky-1997
hcr,Haitian Creole,North America,19,-72.5,hait1244,hat,other,,Creoles and Pidgins,c333D80,hat,false,false,HT,DAns-1968 Hall-1953 Sylvain-1979
hdi,Hdi,Africa,11.8666666667,13.7166666667,hdii1240,xed,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,xed,false,false,NG CM,Frajzyngier-and-Shay-2002
heb,Hebrew (Modern),Eurasia,31.5,34.8333333333,hebr1245,heb,Afro-Asiatic,,Semitic,cB3CC51,heb,true,true,IL,Aikhenvald-1990 Bergman-1968 Berman-1976 Berman-1978 Berman-1997 Bolozky-1982 Bolozky-1997 Chayen-1973 Dahl-1985 Devens-2001b Glinert-1989 Glinert-1991 Glinert-1994 Kopelovich-1982 Malherbe-and-Rosenberg-1996 Malygina-2001 Rosen-1962 Rosen-1979 Schwarzwald-2001 Simon-1979
heh,Hehe,Africa,-8,36,hehe1240,heh,Niger-Congo,Benue-Congo,Bantu,cC3CC51,heh,false,false,TZ,Velten-1899a
hei,Heiltsuk,North America,52,-127.5,heil1246,hei,Wakashan,,Northern Wakashan,cB4CC51,hei,false,false,CA,Rath-1981
hem,Hemba,Africa,-6.25,27.1666666667,hemb1242,hem,Niger-Congo,Benue-Congo,Bantu,cC3CC51,hem,false,false,CD,Vandermeiren-1912
her,Herero,Africa,-20.5833333333,19,here1253,her,Niger-Congo,Benue-Congo,Bantu,cC3CC51,her,false,false,NA BW,Meinhof-1909 Viehe-1897
hhu,Hanga Hundi,Papunesia,-3.83333333333,142.916666667,hang1263,wos,Sepik,,Ndu,c6B8033,wos,false,false,PG,Wendel-1993
hia,Hianacoto,South America,0.833333333333,-71,cari1279,cbd,Cariban,,Cariban,cCC9251,cbd,false,false,CO,Durbin-and-Seijas-1972
hid,Hidatsa,North America,47,-102.5,hida1246,hid,Siouan,,Missouri River Siouan,c338078,hid,false,false,US,Matthews-1874 Matthews-1965 Robinett-1955 Yegerlehner-and-Voegelin-1957
hil,Hiligaynon,Papunesia,10.25,123,hili1240,hil,Austronesian,,Greater Central Philippine,cCC8E51,hil,false,false,PH,Ibelgaufts-and-Ibelgaufts-1999 Llamzon-1978 Titrud-1978 Wolfenden-1975 Zorc-2001
hin,Hindi,Eurasia,25,77,hind1269,hin,Indo-European,,Indic,cCC5351,hin,true,true,IN,Abbi-1992 Butt-1994 Dahl-1985 Davison-2000 Emeneau-1980 Fairbanks-1981 Gil-1994b Harley-1944 Haspelmath-1997 Kachru-1980 Kelkar-1968 Malherbe-and-Rosenberg-1996 McGregor-1972 McGregor-1977 McGregor-1992a McGregor-1995 Ohala-1983 Ohala-1999 Sandahl-2000 Sharma-and-Vermeer-1963 Snell-and-Weightman-1989 Tikkanen-1991
hix,Hixkaryana,South America,-1,-59,hixk1239,hix,Cariban,,Cariban,cCC9251,hix,true,true,BR,Derbyshire-1979 Derbyshire-1985 Derbyshire-and-Payne-1990 Nichols-1992
hks,Hong Kong Sign Language,Eurasia,22.5,114,hong1241,hks,other,,Sign Languages,c515CCC,hks,false,false,CN,Tang-2003
hlb,Halbi,Eurasia,21,81,halb1244,hlb,Indo-European,,Indic,cCC5351,hlb,false,false,IN,
hli,Halkomelem (Island),North America,49.2,-123,halk1245,hur,Salishan,,Central Salish,c51ADCC,hur,false,false,CA,Gerdts-1988a Gerdts-1988b Gerdts-and-Hukari-2005
hln,Halang,Eurasia,14.5,107.5,hala1252,hal,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,hal,false,false,VN,Cooper-and-Cooper-1966
hlp,Hualapai,North America,35.5,-113.75,hava1248,yuf,Hokan,,Yuman,cCC6151,yuf,false,false,US,Redden-1966 Redden-1976 Watahomigie-et-al-1982 Watahomigie-et-al-2001
hlu,Halkomelem (Upriver),North America,49.25,-121.916666667,halk1245,hur,Salishan,,Central Salish,c51ADCC,hur,false,false,CA,Galloway-1993 Gerdts-1988a
hma,Hmar,Eurasia,24.1666666667,93,hmar1241,hmr,Sino-Tibetan,Tibeto-Burman,Kuki-Chin,c51CCB8,hmr,false,false,IN,Dutta-Baruah-and-Bapui-1996
hmb,Huambisa,South America,-4,-78,huam1247,hub,Jivaroan,,Jivaroan,c80334E,hub,false,false,PE,Jakway-1987
hmd,Hmong Daw,Eurasia,26,105,hmon1333,mww,Hmong-Mien,,Hmongic,c8F51CC,mww,false,false,CN VN,Mottin-1978 Xiong-et-al-nd
hmi,Huitoto (Minica),South America,-0.333333333333,-74,mini1256,hto,Witotoan,,Witoto,cCC6851,hto,false,true,CO,Aschmann-1993 Huber-and-Reed-1992 Minor-et-al-1982 Wise-1999
hmo,Hmong Njua,Eurasia,28,105,hmon1264,hnj,Hmong-Mien,,Hmongic,c8F51CC,hnj,true,true,CN,Bisang-1991 Bisang-1992 Harriehausen-1988 Harriehausen-1990 Lyman-1974 Lyman-1979 Purnell-1972 Smalley-1976 Wang-1983 Wang-1985
hmr,Hamer,Africa,5,36.5,hame1242,amf,Afro-Asiatic,Omotic,South Omotic,c708033,amf,false,false,ET,Lydall-1976
hmu,Huitoto (Muinane),South America,-2.41666666667,-71,nupo1240,hux,Witotoan,,Witoto,cCC6851,hux,false,false,PE,Minor-1956 Minor-and-Minor-1971 Minor-et-al-1982
hna,Mina,Africa,10.3333333333,13.8333333333,mina1276,hna,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,hna,false,false,CM,Frajzyngier-and-Johnston-2005
hnd,Hunde,Africa,-1.16666666667,28.8333333333,hund1239,hke,Niger-Congo,Benue-Congo,Bantu,cC3CC51,hke,false,false,CD,Kahombo-1992
hnk,Hinuq,Eurasia,42.1666666667,46,hinu1240,gin,Nakh-Daghestanian,Daghestanian,Avar-Andic-Tsezic,c7B51CC,gin,false,false,RU,Bokarev-1959
hnn,Hanunóo,Papunesia,12.3333333333,121.25,hanu1241,hnn,Austronesian,,Greater Central Philippine,cCC8E51,hnn,false,false,PH,Conklin-1953 Llamzon-1978
hno,Haida (Northern),North America,54,-132.5,nort2938,hdn,Haida,,Haida,cCC6451,hdn,false,false,CA,Enrico-1991
ho,Ho,Eurasia,22,86,hooo1248,hoc,Austro-Asiatic,,Munda,c807D33,hoc,false,false,IN,Deeney-1975 Stolz-1996
hoa,Hoava,Papunesia,-8.08333333333,157.5,hoav1238,hoa,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,hoa,false,false,SB,Davis-2003
hok,Min (Southern),Eurasia,25,118,minn1241,nan,Sino-Tibetan,,Chinese,c51CCC9,nan,false,false,TW CN,Hanyu-1960 Norman-1988 Ramsey-1987
hol,Holoholo,Africa,-5.16666666667,29.9166666667,holo1240,hoo,Niger-Congo,Benue-Congo,Bantu,cC3CC51,hoo,false,false,TZ,Coupez-1955
hop,Hopi,North America,36,-110,hopi1249,hop,Uto-Aztecan,,Northern Uto-Aztecan,c803633,hop,false,false,US,Gipper-1972 Hopi-Project-1998 Jeanne-1978 Kalectaca-1978 Key-1965 Kluckhohn-and-MacLeish-1955 Langacker-1976 Langacker-1977 Seaman-1985 Seaman-1996 Voegelin-1956 Whorf-1935 Whorf-1946a
hpd,Hup,South America,0.166666666667,-69.25,hupd1244,jup,Nadahup,,Nadahup,c573380,jup,false,false,CO BR,Epps-2008 Erickson-and-Erickson-1993 Giacone-1955 Huber-and-Reed-1992 Moore-and-Franklin-1979
hre,Hre,Eurasia,14.6666666667,108.666666667,hree1244,hre,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,hre,false,false,VN,Trebilco-et-al-1974
hrr,Harari,Africa,9.25,42.1666666667,hara1271,har,Afro-Asiatic,,Semitic,cB3CC51,har,false,false,ET,Rose-nd
hrs,Harsusi,Eurasia,20,56.5,hars1241,hss,Afro-Asiatic,,Semitic,cB3CC51,hss,false,false,OM,Johnstone-1977 Lonnet-and-Simeone-Senelle-1997
hsl,Haisla,North America,54,-128.75,hais1244,has,Wakashan,,Northern Wakashan,cB4CC51,has,false,false,CA,Bach-1996
htc,Huastec,North America,22.0833333333,-99.3333333333,huas1242,hus,Mayan,,Mayan,cA951CC,hus,false,false,MX,Edmonson-1988 Larsen-1955 Larsen-and-Pike-1949 McQuown-1984 Peralta-1984
hua,Hua,Papunesia,-6.33333333333,145.333333333,huaa1250,ygr,Trans-New Guinea,Kainantu-Goroka,Siane-Yagaria,c55CC51,ygr,false,false,PG,Haiman-1980 Nichols-1992 Stolz-1996
huc,=|Hoan,Africa,-25.5,25,hoaa1235,huc,Kxa,,=|Hoan,cCC519C,huc,false,false,BW,Anonymous-6
hui,Huichol,North America,22,-104,huic1243,hch,Uto-Aztecan,,Corachol,c668033,hch,false,false,MX,Comrie-1982 Gomez-1999 Grimes-1964 Grimes-1981 Langacker-1976 Stolz-1996
hum,Huitoto (Murui),South America,-1,-73.5,muru1274,huu,Witotoan,,Witoto,cCC6851,huu,false,false,CO BR PE,Aschmann-1993 Burtch-1983 Burtch-and-Wise-1968 Minor-et-al-1982 Petersen-de-Pineros-1994
hun,Hungarian,Eurasia,47,20,hung1274,hun,Uralic,Finno-Ugric,Ugric,c8CCC51,hun,false,true,HU,Banhidi-et-al-1965 Banhidi-et-al-1975 Beckwith-1992 Benko-and-Imre-1972 Biermann-1985 Biro-et-al-1965 Dahl-1985 Gil-1994a Ginter-and-Tarnoi-1991 Hall-1944 Haspelmath-1997 Hetzron-2001 Kenesei-et-al-1998 Kerek-1971 Keresztes-1992 Kiefer-1967 Lotz-1988 Majtinskaja-1976 Malherbe-and-Rosenberg-1996 Moravcsik-1997 Olsson-1992 Schaap-1980 Szende-1999 Szinnyei-1912 Tompa-1968 de-Groot-1994
hup,Hupa,North America,41.0833333333,-123.666666667,hupa1239,hup,Na-Dene,,Athapaskan,c8C51CC,hup,false,false,US,Anonymous-1983b Goddard-1903 Goddard-1911 Golla-1970 Golla-1996 Gordon-1996 Sapir-and-Golla-2001 Stolz-1996 Woodward-1964
hve,Huave (San Mateo del Mar),North America,16.2166666667,-95,sanm1287,huv,Huavean,,Huavean,c803533,huv,false,false,MX,Matthews-1972 Stairs-Kreger-and-Scharfe-de-Stairs-1981 Stairs-and-Hollenbach-1969 Stairs-and-Hollenbach-1981 Stolz-1996 Suarez-1975
hwc,Hawaiian Creole,North America,21.5,-158,hawa1247,hwc,other,,Creoles and Pidgins,c333D80,hwc,false,false,US,Simonson-1986 Velupillai-2003
hwr,Hawrami,Eurasia,35.75,45.5,gura1251,hac,Indo-European,,Iranian,c803335,hac,false,false,IQ,MacKenzie-1966
hya,Haya,Africa,-2,31.5,haya1250,hay,Niger-Congo,Benue-Congo,Bantu,cC3CC51,hay,false,false,TZ,Bennett-1977 Byarushengo-1977 Lehman-1977 Trithart-1977
hyo,Hyow,Eurasia,22.0833333333,92.4166666667,asho1236,csh,Sino-Tibetan,Tibeto-Burman,Kuki-Chin,c51CCB8,csh,false,false,BD,
hzb,Hunzib,Eurasia,42.1666666667,46.25,hunz1247,huz,Nakh-Daghestanian,Daghestanian,Avar-Andic-Tsezic,c7B51CC,huz,false,true,RU,van-den-Berg-1995
iaa,Iaai,Papunesia,-20.4166666667,166.583333333,iaai1238,iai,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,iai,false,false,NC,Haudricourt-1971 Maddieson-and-Anderson-1995 Ozanne-Rivierre-1976 Tryon-1968
iat,Iatmul,Papunesia,-4.25,143.25,iatm1242,ian,Sepik,,Ndu,c6B8033,ian,false,false,PG,Staalsen-1972
iau,Iau,Papunesia,-3.16666666667,137.5,iauu1242,tmu,Lakes Plain,,Central Tariku,cCCB951,tmu,false,false,ID,Bateman-1986
iba,Iban,Papunesia,2,112,iban1264,iba,Austronesian,,Malayo-Sumbawan,cCC7D51,iba,false,false,MY,Omar-1981 Scott-1957
ibi,Ibibio,Africa,5.25,7.83333333333,ibib1240,ibb,Niger-Congo,Benue-Congo,Lower Cross,c335C80,ibb,false,false,NG,Kaufman-1972
ibn,Ibanag,Papunesia,17.5,121.666666667,iban1267,ibg,Austronesian,,Northern Luzon,c805533,ibg,false,false,PH,Llamzon-1978
ice,Icelandic,Eurasia,65,-17,icel1247,isl,Indo-European,,Germanic,c803433,isl,false,false,IS,Arnasonar-1980 Einarsson-1945 Einarsson-1949 Glendening-1966 Haspelmath-1997 Jonsson-1927 Kress-1982 Malherbe-and-Rosenberg-1996 Maling-and-Zaenen-1990 Petursson-1978 Thrainsson-1994
ics,Icelandic Sign Language,Eurasia,65,-18,icel1236,icl,other,,Sign Languages,c515CCC,icl,false,false,IS,
idn,Iduna,Papunesia,-9.33333333333,150.25,idun1242,viv,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,viv,false,false,PG,Huckett-1974
ido,Idoma,Africa,6.91666666667,7.5,idom1241,idu,Niger-Congo,Benue-Congo,Idomoid,c3E3380,idu,false,false,NG,Abraham-1951
idu,Idu,Eurasia,29.3333333333,95.8333333333,idum1241,clk,Sino-Tibetan,Tibeto-Burman,Digaroan,c33807A,clk,false,false,IN,Pulu-1978
ifi,Italian (Fiorentino),Eurasia,43.75,11.25,ital1282,ita,Indo-European,,Romance,cCC5154,ita,false,false,IT,
ifm,Ifumu,Africa,-3.66666666667,15.3333333333,teke1274,ifm,Niger-Congo,Benue-Congo,Bantu,cC3CC51,ifm,false,false,CG,Calloch-1911 Makouta-Mboukou-1977
ifu,Ifugao (Batad),Papunesia,16.8333333333,121.083333333,bata1298,ifb,Austronesian,,Northern Luzon,c805533,ifb,false,false,PH,Newell-1993 Newell-and-Bonog-Poligon-1993 Reid-1971
iga,Inga,South America,1,-77,inga1252,inb,Quechuan,,Quechuan,c336880,inb,false,false,CO,Levinsohn-1976 Stolz-1996
igb,Igbo,Africa,6,7.33333333333,nucl1417,ibo,Niger-Congo,Benue-Congo,Igboid,c453380,ibo,false,true,NG,Adams-1932 Carrell-1970 Dunstan-1969 Echeruo-1998 Emenanjo-1978 Fixman-1975 Green-and-Igwe-1963 Igwe-and-Green-1979 Ikekeonwu-1999 Onukawa-1999 Onumajuru-1985 Saah-and-Eze-1997 Ward-1936 Welmers-1970 Welmers-1973 Welmers-and-Welmers-1968
ige,Igede,Africa,7,8.16666666667,iged1239,ige,Niger-Congo,Benue-Congo,Idomoid,c3E3380,ige,false,false,NG,Bergman-1981
ign,Ignaciano,South America,-15.1666666667,-65.4166666667,igna1246,ign,Arawakan,,Bolivia-Parana,c803533,ign,false,false,BO,Ott-and-Ott-1967a Ott-and-Ott-1967b Wise-1990
igs,Ingessana,Africa,11.5,34,gaam1241,tbi,Eastern Sudanic,,Eastern Jebel,c9551CC,tbi,false,false,SD,Bender-1989 Crewe-1975 Tucker-and-Bryan-1966
iha,Iha,Papunesia,-2.91666666667,132.25,ihaa1241,ihp,Greater West Bomberai,,West Bomberai,cC6CC51,ihp,false,false,ID,Voorhoeve-1975
iir,Indonesian (Papuan),Papunesia,-2.5,140.666666667,papu1250,pmy,Austronesian,,Malayo-Sumbawan,cCC7D51,pmy,false,false,ID,
ijo,Ijo (Kolokuma),Africa,4.91666666667,5.66666666667,izon1238,ijc,Ijoid,,Ijoid,c334280,ijc,false,false,NG,Williamson-1965
ik,Ik,Africa,3.75,34.1666666667,ikkk1242,ikx,Eastern Sudanic,,Kuliak,c7251CC,ikx,false,false,UG,Heine-1975b Heine-1993 Serzisko-1989 Serzisko-1992 Tucker-1971 Tucker-1972 Tucker-1973 Tucker-and-Bryan-1966
ika,Ika,South America,10.6666666667,-73.75,arhu1242,arh,Chibchan,,Arhuacic,c33804A,arh,false,true,CO,Frank-1985 Frank-1990 Huber-and-Reed-1992 Tracy-and-Tracy-1973
ila,Ila,Africa,-15.5833333333,26.5,ilaa1246,ilb,Niger-Congo,Benue-Congo,Bantu,cC3CC51,ilb,false,false,ZM ZW,Smith-1907 Stolz-1996
ill,Illinois,North America,40,-90,miam1252,mia,Algic,,Algonquian,c758033,mia,false,false,US,White-and-White-1990
ilo,Ilocano,Papunesia,16,121,ilok1237,ilo,Austronesian,,Northern Luzon,c805533,ilo,false,false,PH,Constantino-1971 Lopez-1928 Rubino-1998b Rubino-2000
imo,Imonda,Papunesia,-3.33333333333,141.166666667,imon1245,imn,Border,,Border,cCC9E51,imn,true,true,PG,Seiler-1985
ina,Inanwatan,Papunesia,-2.08333333333,132.083333333,suab1238,szp,South Bird's Head,,Inanwatan,cACCC51,szp,false,false,ID,de-Vries-1996
ind,Indonesian,Papunesia,0,106,stin1234,ind,Austronesian,,Malayo-Sumbawan,cCC7D51,ind,true,true,ID,Alwi-et-al-1998 Chung-1976 Dahl-1985 Danusugondo-1975 Echols-and-Shadily-1961 Echols-and-Shadily-1963 Echols-and-Shadily-1990 Halim-1974 Kahler-1965 Krause-1994 Macdonald-1976 Malherbe-and-Rosenberg-1996 Mintz-1994 Ogloblin-and-Nedjalkov-2007 Pino-and-Wittermans-1955 Roels-Sianturi-et-al-1990 Salim-2001 Samsuri-1971 Sarumpaet-and-Mackie-1966 Sneddon-1996 Sneddon-1996a Sneddon-1996b Steinhauer-2001 Teselkin-and-Alieva-1960
ing,Ingush,Eurasia,43.1666666667,45.0833333333,ingu1240,inh,Nakh-Daghestanian,,Nakh,c4D3380,inh,false,true,RU,Dolakova-1967 Guerin-1998 Handel-and-Nichols-2000 Malherbe-and-Rosenberg-1996 Nichols-1984 Nichols-1994b
inj,Indonesian (Jakarta),Papunesia,-6.16666666667,106.75,cjin1234,ind,Austronesian,,Malayo-Sumbawan,cCC7D51,ind,false,false,ID,
inn,Innamincka,Australia,-27.75,140.75,yand1253,ynd,Pama-Nyungan,,Central Pama-Nyungan,c335F80,ynd,false,false,AU,Breen-2004
inr,Inuktitut (Aivilingmiutut),North America,63,-92,cari1277,ike,Eskimo-Aleut,,Eskimo,cCC7351,ike,false,false,CA,Denny-1982
ins,Inuktitut (Salluit),North America,62,-76,east2534,ike,Eskimo-Aleut,,Eskimo,cCC7351,ike,false,false,CA,
inu,Iñupiaq,North America,67,-161,nort2943,esi,Eskimo-Aleut,,Eskimo,cCC7351,esi,false,false,US,Webster-and-Zibell-1970 Webster-and-Zibell-nd
ipi,Indo-Pakistani Sign Language (Indian dialects),Eurasia,24,80,indi1237,ins,other,,Sign Languages,c515CCC,ins,false,false,IN,
ipk,Indo-Pakistani Sign Language (Karachi dialect),Eurasia,28,68,paki1242,pks,other,,Sign Languages,c515CCC,pks,false,false,PK,
iql,Inuktitut (Quebec-Labrador),North America,62,-73,east2534,ike,Eskimo-Aleut,,Eskimo,cCC7351,ike,false,false,CA,Schneider-1985 Smith-1975a
iqu,Iquito,South America,-3.25,-74,iqui1243,iqu,Zaparoan,,Zaparoan,cCC9951,iqu,false,false,PE,Eastman-and-Eastman-1963
ird,Irish (Donegal),Eurasia,55,-8,iris1253,gle,Indo-European,,Celtic,c80333C,gle,false,false,IE,Ni-Chasaide-1999 O-Dochartaigh-1992
iri,Irish,Eurasia,53,-8,iris1253,gle,Indo-European,,Celtic,c80333C,gle,false,true,IE,Bammesberger-1982 Bammesberger-1983 Caoimhin-P-ODonnaile-pc-cited-in-Gil-1994 Dillon-and-O-Croinin-1961 Doyle-2001 Haspelmath-1997 Lewis-and-Pedersen-1961 Lucas-1979 MacEoin-1993 Malherbe-and-Rosenberg-1996 McCloskey-1979 McCloskey-2001 Ni-Chasaide-1999 O-Dochartaigh-1992 O-Siadhail-1989 Siochfhradha-1958 Stenson-1981
irm,Irish (Munster),Eurasia,52.5,-9,iris1253,gle,Indo-European,,Celtic,c80333C,gle,false,false,IE,Dillon-1961 O-Siadhail-1989
irq,Iraqw,Africa,-4,35.5,iraq1241,irk,Afro-Asiatic,Cushitic,Southern Cushitic,c688033,irk,false,true,TZ,Banti-1997 Maghway-1995 Mous-1992 Mous-1993 Mous-2004 Nordbustad-1988 Tucker-and-Bryan-1966 Whiteley-1958
irr,Irarutu,Papunesia,-3,133.5,irar1238,irh,Austronesian,Eastern Malayo-Polynesian,South Halmahera - West New Guinea,c807433,irh,false,false,ID,Matsumura-1991a Matsumura-1991b Voorhoeve-1989 Voorhoeve-1995
irs,Irish Sign Language,Eurasia,53.5,-7.5,iris1235,isg,other,,Sign Languages,c515CCC,isg,false,false,IE,
irx,Iranxe,South America,-13,-58,iran1263,irn,,,,cCC6051,irn,false,false,BR,Meader-1967
isa,I'saka,Papunesia,-2.83333333333,141.283333333,kris1246,ksi,Skou,,Krisa,c338065,ksi,false,false,PG,Donohue-and-San-Roque-2002
ise,Isekiri,Africa,5.66666666667,5.5,isek1239,its,Niger-Congo,Benue-Congo,Defoid,c6451CC,its,false,false,NG,Dahl-1985
ish,Ishkashimi,Eurasia,37,72,ishk1246,isk,Indo-European,,Iranian,c803335,isk,false,false,AF TJ,Paxalina-1959
isi,Isirawa,Papunesia,-1.83333333333,138.5,isir1237,srl,Tor-Kwerba,,Isirawa,c6CCC51,srl,false,false,ID,Oguri-1985
isl,International Sign,North America,40,-170,inte1259,ils,other,,Sign Languages,c515CCC,ils,false,false,,Webb-and-Supalla-1994
isn,Isnag,Papunesia,18.25,121,isna1241,isd,Austronesian,,Northern Luzon,c805533,isd,false,false,PH,
iso,Isoko,Africa,5.5,6.25,isok1239,iso,Niger-Congo,Benue-Congo,Edoid,c3B3380,iso,false,false,NG,Donwa-1982
iss,Israeli Sign Language,Eurasia,32,34.8333333333,isra1236,isr,other,,Sign Languages,c515CCC,isr,false,false,IL,Meir-2003
ita,Italian,Eurasia,43,12,ital1282,ita,Indo-European,,Romance,cCC5154,ita,false,false,CH IT,Bertinetto-1981 Haspelmath-1997 Lausberg-1972 Lepschy-1978 Lepschy-and-Lepschy-1988 Maiden-and-Robustelli-2000 Malagoli-1946 Malherbe-and-Rosenberg-1996 Muljacic-1972 Renzi-1988 Repetti-2001 Roca-1999 Saltarelli-1970 Sauer-1891 Schwarze-1988 Vincent-1988 Vogel-and-Scalise-1982 Wessely-nd
itb,Italian (Bologna),Eurasia,44.5,11.3333333333,emil1241,egl,Indo-European,,Romance,cCC5154,egl,false,false,IT,
ite,Itelmen,Eurasia,57,157.5,itel1242,itl,Chukotko-Kamchatkan,,Southern Chukotko-Kamchatkan,c805033,itl,false,false,RU,Georg-and-Volodin-1999 Volodin-1976 Volodin-1997 Volodin-2007 Volodin-and-Zhukova-1968
itg,Italian (Genoa),Eurasia,44.4166666667,8.95,ligu1248,lij,Indo-European,,Romance,cCC5154,lij,false,false,IT,
itn,Italian (Napolitanian),Eurasia,40.9166666667,14.25,neap1235,nap,Indo-European,,Romance,cCC5154,nap,false,false,IT,Macleod-1992
ito,Itonama,South America,-12.8333333333,-64.3333333333,iton1250,ito,,,,c803347,ito,false,false,BO,Aikhenvald-and-Dixon-1999 Camp-and-Liccardi-1967 Liccardi-and-Grimes-1968
itu,Italian (Turinese),Eurasia,45,7.66666666667,piem1238,pms,Indo-European,,Romance,cCC5154,pms,false,false,IT,
itw,Itawis,Papunesia,17.75,121.5,itaw1240,itv,Austronesian,,Northern Luzon,c805533,itv,false,false,PH,Tharp-and-Natividad-1976
itz,Itzaj,North America,17,-89.8333333333,itza1241,itz,Mayan,,Mayan,cA951CC,itz,false,false,GT,Hofling-1991 Hofling-2000 Hofling-and-Tesucun-1997
iva,Ivatan,Papunesia,20.5,122,ibat1238,ivb,Austronesian,,Batanic,c805133,ivb,false,false,PH,Cottle-and-Cottle-1958 Heye-and-Hidalgo-1967 Hidalgo-and-Hidalgo-1971 Llamzon-1978
iwa,Iwaidja,Australia,-11.5,132.666666667,iwai1244,ibd,Iwaidjan,,Iwaidjan,c807333,ibd,false,false,AU,Capell-1962b
iwm,Iwam,Papunesia,-4.33333333333,142,iwam1256,iwm,Sepik,,Iwamic,c5170CC,iwm,false,false,PG,Conrad-1971 Laycock-1965b
ixc,Ixcatec,North America,17.8333333333,-97.1666666667,ixca1245,ixc,Oto-Manguean,,Popolocan,c5173CC,ixc,false,false,MX,Fernandez-de-Miranda-1961
ixi,Ixil,North America,15.5,-91,ixil1251,ixl,Mayan,,Mayan,cA951CC,ixl,false,false,GT,Elliot-1960 Kaufman-1969 Kaufman-1974 Poma-and-Cruz-1996
izh,Izhor,Eurasia,59,29,ingr1248,izh,Uralic,Finno-Ugric,Finnic,c5B8033,izh,false,false,RU,Laanest-1982
izi,Izi,Africa,6.33333333333,8,izie1238,izz,Niger-Congo,Benue-Congo,Igboid,c453380,izz,false,false,NG,Meier-et-al-1975
jab,Jabêm,Papunesia,-6.58333333333,147.783333333,yabe1254,jae,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,jae,false,false,PG,Dempwolff-1939 Ross-2002e Zahn-1940
jad,Jad,Eurasia,30.8333333333,79,jadd1243,jda,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,jda,false,false,IN,Sharma-1989c
jah,Jahai,Eurasia,5.75,101.5,jeha1242,jhi,Austro-Asiatic,Mon-Khmer,Aslian,c7E8033,jhi,false,false,MY,Burenhult-2000
jak,Jakaltek,North America,15.6666666667,-91.6666666667,,jac,Mayan,,Mayan,cA951CC,jac,true,true,GT,Campbell-et-al-1988 Craig-1977 Craig-1986 Day-1973 Day-1977 Grinevald-nd Suarez-1983b Van-Valin-1981
jam,Jaminjung,Australia,-15.0833333333,130.5,djam1255,djd,Mirndi,,Jaminjungan,c51A4CC,djd,false,false,AU,Schultze-Berndt-2000
jaq,Jaqaru,South America,-13,-76,jaqa1244,jqr,Aymaran,,Aymaran,cCCA951,jqr,false,false,PE,Hardman-1966 Hardman-1983 Hardman-1986 Hardman-2000 Nichols-1992
jar,Izere,Africa,9.5,8.6666667,izer1241,izr,Niger-Congo,Benue-Congo,Benue-Congo Plateau,cB1CC51,izr,false,false,NG,Lukas-and-Willms-1961
jav,Javanese,Papunesia,-7,111,java1254,jav,Austronesian,,Javanese,cCCAC51,jav,false,false,ID,Dahl-1985 Dudas-1976 Fagan-1988 Herrfurth-1964 Horne-1961 Noordenbos-1941 Oglobin-2001 Prijohoetomo-1937 Ras-1985 Robson-1992 Sugiarto-1993 Uhlenbeck-1963 Walbeehm-1915
jbt,Jabutí,South America,-12.25,-62.25,djeo1235,jbt,Macro-Ge,,Jabutí,cCC5171,jbt,false,false,BR,Aikhenvald-and-Dixon-1999
jcr,Jamaican Creole,North America,18.1666666667,-77.25,jama1262,jam,other,,Creoles and Pidgins,c333D80,jam,false,false,JM,Bailey-1966
jeb,Jebero,South America,-5.41666666667,-76.5,jebe1250,jeb,Cahuapanan,,Cahuapanan,c805D33,jeb,false,false,PE,Bendor-Samuel-1961b Wise-1999
jeh,Jeh,Eurasia,15.1666666667,107.833333333,jehh1245,jeh,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,jeh,false,false,VN LA,Cohen-1966 Gradin-1966 Gradin-and-Gradin-1979
jel,Jeli,Africa,9.5,-5.66666666667,jeri1242,jek,Mande,,Western Mande,c6751CC,jek,false,false,CI,Trobs-1998
jem,Jemez,North America,35.8333333333,-107,jeme1245,tow,Kiowa-Tanoan,,Kiowa-Tanoan,cCC519F,tow,false,false,US,Yumitani-1998
jia,Jiarong,Eurasia,31.5,102,jiar1239,jya,Sino-Tibetan,Tibeto-Burman,rGyalrong,c33806C,jya,false,false,CN,
jib,Jibbali,Eurasia,17.5,55,sheh1240,shv,Afro-Asiatic,,Semitic,cB3CC51,shv,false,false,OM,Lonnet-and-Simeone-Senelle-1997
jin,Jino,Eurasia,22,101,jino1236,jiu,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,jiu,false,false,CN,Gai-1986
jiv,Jivaro,South America,-2.5,-78,shua1257,jiv,Jivaroan,,Jivaroan,c80334E,jiv,false,false,EC,Beasley-and-Pike-1957 Beuchat-and-Rivet-1909 Bybee-et-al-1994 Ghinassi-1938 Nichols-1992 Pellizzaro-1969 Turner-1958
jlu,Luwo,Africa,8,28,luwo1239,lwo,Eastern Sudanic,Nilotic,Western Nilotic,cCC6E51,lwo,false,false,SS,Buth-1981
jmm,Jamamadi,South America,-7.5,-67,east2800,jaa,Arauan,,Arauan,cC4CC51,jaa,false,false,BR,Derbyshire-1986 Derbyshire-and-Payne-1990
jmo,Jur Mödö,Africa,6,30,jurm1239,bex,Central Sudanic,,Bongo-Bagirmi,c643380,bex,false,false,SS,Persson-1981 Persson-and-Persson-1991
jms,Jamsay,Africa,14.4166666667,-2.5,jams1239,djm,Dogon,,Dogon,c515FCC,djm,false,false,ML,Heath-2008
jng,Jingpho,Eurasia,25.4166666667,97,kach1280,kac,Sino-Tibetan,Tibeto-Burman,Brahmaputran,c6C51CC,kac,false,false,MM,Dai-and-Diehl-2003 Hertz-1917 Liu-1964
joh,Johari,Eurasia,30.6666666667,80,rang1266,rgk,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,rgk,false,false,IN,Sharma-1989a
jom,Jomang,Africa,10.5833333333,30.5,talo1250,tlo,Kordofanian,,Talodi,c333B80,tlo,false,false,SD,Schadeberg-1981a
jpn,Japanese,Eurasia,37,140,nucl1643,jpn,,,,c80334A,jpn,true,true,JP,Alpatov-2001 Alpatov-and-Nedjalkov-2007 Bloch-1950 Dahl-1985 Downing-1996 Fukushima-1991 Gil-1991 Hinds-1986 Johnson-1994 Jorden-1963 Kaiser-et-al-2001 Kim-1991 Kuno-1973 Lewin-et-al-1983 Malherbe-and-Rosenberg-1996 Martin-1952 Martin-1975 Martin-1991a Okada-1999 Sansom-1995 Shibatani-1990 Takahashi-1938 Tsujimura-1995 Vance-2001
jpr,Japreria,South America,10.5,-73,japr1238,jru,Cariban,,Cariban,cCC9251,jru,false,false,VR,Durbin-and-Seijas-1972
jrn,Juruna,South America,-5,-54.5,juru1256,jur,Tupian,,Maweti-Guarani,cCC6351,jur,false,false,BR,Rodrigues-1999a
jrw,Jarawa (in Andamans),Eurasia,12,92.5833333333,jara1245,anq,South Andamanese,,South Andamanese,c33805D,anq,false,false,IN,Kumar-2003
jug,Jugli,Eurasia,27.5,96.3333333333,jogl1236,nst,Sino-Tibetan,Tibeto-Burman,Brahmaputran,c6C51CC,nst,false,false,IN,Rekhung-1988a
juh,Ju|'hoan,Africa,-19,21,juho1239,ktz,Kxa,,Ju-Kung,cCC5191,ktz,false,true,AO NA BW,Bybee-et-al-1994 Dickens-1992 Dickens-1994 Dickens-nd Guldemann-2000 Nichols-1992 Snyman-1970 Snyman-1975 Stolz-1996
juk,Jukun,Africa,6.91666666667,10.4166666667,juku1254,jbu,Niger-Congo,Benue-Congo,Jukunoid,cCC5174,jbu,false,false,NG,Shimuzu-1980 Welmers-1968b
jum,Júma,South America,-7.5,-64,juma1249,jua,Tupian,,Maweti-Guarani,cCC6351,jua,false,false,BR,Abramson-1968
jun,Juang,Eurasia,21.3333333333,86,juan1238,jun,Austro-Asiatic,,Munda,c807D33,jun,false,false,IN,Matson-1964 Patnaik-and-Subbarao-2000
jur,Jurchen,Eurasia,47,130,jurc1239,juc,Altaic,,Tungusic,c798033,juc,false,false,CN,Hang-et-al-1989 Pevnov-1997
jva,Karajá,South America,-10,-50.3333333333,kara1500,kpj,Macro-Ge,,Karajá,cC051CC,kpj,false,false,BR,Maia-1998 Martius-1863 Rodrigues-1999b Wiesemann-1986a
jwr,Jarawara,South America,-7.5,-65.5,jara1276,jaa,Arauan,,Arauan,cC4CC51,jaa,false,false,BR,Dixon-2003
kaa,Karó (Arára),South America,-10.3333333333,-62,karo1305,arr,Tupian,,Ramarama,c7BCC51,arr,false,false,BR,Gabas-1999
kab,Kabardian,Eurasia,43.5,43.5,kaba1278,kbd,Northwest Caucasian,,Northwest Caucasian,c5851CC,kbd,false,false,RU,Abitov-et-al-1957 Anonymous-1970 Colarusso-1989 Colarusso-1992 Kardanov-and-Bicoev-1955 Kazenin-2007 Kuipers-1960 Kumaxov-1971
kac,Kachari,Eurasia,26.5,91,kach1279,xac,Sino-Tibetan,Tibeto-Burman,Brahmaputran,c6C51CC,xac,false,false,IN,Endle-1884
kad,Kadugli,Africa,11,29.6666666667,kadu1257,xtc,Kadu,,Kadugli,cCC517D,xtc,false,false,SD,Abdalla-1969 Abdalla-1973 Matsushita-1984 Matsushita-1986 Tucker-and-Bryan-1966
kae,Kaki Ae,Papunesia,-8,145.833333333,kaki1249,tbd,Tate,,Tate,cCC7551,tbd,false,false,PG,Clifton-1997
kag,Komering,Papunesia,-3.16666666667,104.916666667,kome1238,kge,Austronesian,,Lampungic,cCCAF51,kge,false,false,ID,Gani-et-al-1986
kai,Kaian,Papunesia,-4.08333333333,144.75,kaia1245,kct,Lower Sepik-Ramu,Ramu,Lower Ramu,cC651CC,kct,false,false,PG,ZGraggen-1969
kaj,Kaure,Papunesia,-3.41666666667,140.083333333,kaur1271,bpp,,,,c803360,bpp,false,false,ID,Dommel-and-Dommel-1991
kak,Kamano-Kafe,Papunesia,-6.25,145.666666667,kama1370,kbq,Trans-New Guinea,Kainantu-Goroka,Siane-Yagaria,c55CC51,kbq,false,false,PG,
kal,Kalami,Eurasia,35.5,72.5,kala1373,gwc,Indo-European,,Indic,cCC5351,gwc,false,false,PK,Baart-1997
kam,Kambera,Papunesia,-9.83333333333,120.166666667,kamb1299,xbr,Austronesian,,Central Malayo-Polynesian,c807633,xbr,false,false,ID,Klamer-1994 Klamer-1998
kan,Kana,Africa,4.75,7.41666666667,khan1278,ogo,Niger-Congo,Benue-Congo,Ogonoid,cBD51CC,ogo,false,false,NG,Ikoro-1994 Ikoro-1996
kao,Karao,Papunesia,16.5,120.833333333,kara1487,kyj,Austronesian,,Northern Luzon,c805533,kyj,false,false,PH,Brainard-1997
kap,Kela (Apoze),Papunesia,-7.41666666667,147.083333333,kela1255,kcl,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,kcl,false,false,PG,Collier-and-Collier-1975
kaq,Kaurna,Australia,-34.25,138.5,kaur1267,zku,Pama-Nyungan,,Central Pama-Nyungan,c335F80,zku,false,false,AU,Amery-and-Simpson-1999
kar,Kara (in Central African Republic),Africa,10,23,kara1482,kah,Central Sudanic,,Bongo-Bagirmi,c643380,kah,false,false,CF,Boyeldieu-1987 Santandrea-1970
kas,Kashmiri,Eurasia,34,76,kash1277,kas,Indo-European,,Indic,cCC5351,kas,false,false,PK IN,Abbi-1992 Bhat-1987 Grierson-1919 Grierson-1973 Kelkar-and-Trisal-1964 Wali-and-Koul-1997 Wali-et-al-2000 Zakharin-1974 Zakharin-and-Edelman-1971 Zaxarjin-1981
kat,Kâte,Papunesia,-6.5,147.75,kate1253,kmg,Trans-New Guinea,Finisterre-Huon,Huon,c804C33,kmg,false,false,PG,Flierl-and-Strauss-1977 Nichols-1992 Pilhofer-1933 Schneuker-1962
kau,Kaulong,Papunesia,-6.16666666667,149.666666667,kaul1240,pss,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,pss,false,false,PG,Ross-2002i
kaw,Kaiwá,South America,-23,-55,kaiw1246,kgk,Tupian,,Maweti-Guarani,cCC6351,kgk,false,false,PY BR,Bridgeman-1961
kay,Kayardild,Australia,-17.05,139.5,kaya1319,gyd,Tangkic,,Tangkic,c51CCA4,gyd,true,true,AU,Evans-1985 Evans-1995 Keen-1969
kaz,Kazakh,Eurasia,50,70,kaza1248,kaz,Altaic,,Turkic,c778033,kaz,false,false,KZ,Balakajev-et-al-1962 Haspelmath-1997 Kajdarov-1997 Kenesbaev-and-Karasheva-1966 Kirchner-1998a Malherbe-and-Rosenberg-1996 Shnitnikov-1966
kba,Kamba,Africa,-1.5,38,kamb1297,kam,Niger-Congo,Benue-Congo,Bantu,cC3CC51,kam,false,false,KE,Whiteley-and-Muli-1962
kbi,Kabui,Eurasia,24.8333333333,94,inpu1234,nbu,Sino-Tibetan,Tibeto-Burman,Zemeic,c519ECC,nbu,false,false,IN,Abbi-1992
kbl,Kabyle,Africa,36.5,5,kaby1243,kab,Afro-Asiatic,,Berber,cAACC51,kab,false,false,DZ,Chaker-1983 Hamouma-nd Hanoteau-1906 Malherbe-and-Rosenberg-1996 Naumann-2000
kbo,Kambot,Papunesia,-4.25,144.133333333,apma1241,kbx,Lower Sepik-Ramu,Ramu,Botin,c7F3380,kbx,false,false,PG,Laycock-and-Zgraggen-1975
kbr,Kayan (Baram),Papunesia,3.5,114.5,bara1370,kys,Austronesian,,North Borneo,c804E33,kys,false,false,MY,Omar-1983
kbt,Kabatei,Eurasia,36.75,49.4166666667,kaba1276,xkp,Indo-European,,Iranian,c803335,xkp,false,false,IR,Stilo-2005
kbu,Kanembu,Africa,14,15,kane1243,kbl,Saharan,Saharan,Western Saharan,cC351CC,kbl,false,false,NG TD NE,Lukas-1931
kbw,Karen (Bwe),Eurasia,19.5,97,bwek1238,bwe,Sino-Tibetan,Tibeto-Burman,Karen,c51CCC4,bwe,false,false,MM,Henderson-1997
kby,Kabiyé,Africa,9.66666666667,1.16666666667,kabi1261,kbp,Niger-Congo,Gur,Grusi,c448033,kbp,false,false,TG,Lebikaza-1999
kch,Koyra Chiini,Africa,17,-3,koyr1240,khq,Songhay,,Songhay,c803370,khq,false,false,ML,Hacquard-and-Dupuis-1897 Heath-1999b Kendall-1971
kda,Konda,Eurasia,19.5,83,kond1295,kfc,Dravidian,,Dravidian,cB7CC51,kfc,false,false,IN,Emeneau-1980 Gil-1994b Krishnamurti-and-Benham-1998
kdg,Karipuna (Panoan),South America,-10,-65,kari1312,,Pano-Tacanan,,Panoan,c334F80,,false,false,BR,Martius-1863
kdw,Kadiwéu,South America,-20,-57,kadi1248,kbc,Guaicuruan,,Kadiwéu,c80334C,kbc,false,false,BR,Sandalo-1997
kdz,Kadazan,Papunesia,5.91666666667,117.166666667,coas1294,kzj,Austronesian,,North Borneo,c804E33,kzj,false,false,MY,Antonissen-1958 Hurlbut-1988
kea,Kanjobal (Eastern),North America,15.3333333333,-91.6666666667,qanj1241,kjb,Mayan,,Mayan,cA951CC,kjb,false,false,GT,Diego-Antonio-et-al-1996
ked,Kedang,Papunesia,-8.25,123.75,keda1252,ksx,Austronesian,,Central Malayo-Polynesian,c807633,ksx,false,false,ID,Korner-1985 Samely-1991
kef,Kefa,Africa,7.25,36.25,kafa1242,kbr,Afro-Asiatic,Omotic,Ta-Ne-Omotic,cCC5751,kbr,false,false,ET,Cerulli-1951 Fleming-1976
kei,Kei,Papunesia,-5.83333333333,132.916666667,keii1239,kei,Austronesian,,Central Malayo-Polynesian,c807633,kei,false,false,ID,Geurtjens-1921
kek,K'ekchí,North America,16,-89.8333333333,kekc1242,kek,Mayan,,Mayan,cA951CC,kek,false,false,GT,Eachus-and-Carlson-1966 Freeze-1975 Haeseriju-1966 Juarez-et-al-1997 Tzul-and-Tzimaj-Cacao-1997
kel,Kele,Papunesia,-2.08333333333,147.083333333,kele1258,sbc,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,sbc,false,false,PG,Ross-2002k
kem,Kemant,Africa,12.6666666667,37.4166666667,qima1242,ahg,Afro-Asiatic,Cushitic,Central Cushitic,c6E8033,ahg,false,false,ET,Appleyard-1975 Appleyard-1984 Rossini-1912
ken,Kenga,Africa,12,18,keng1240,kyq,Central Sudanic,,Bongo-Bagirmi,c643380,kyq,false,false,TD,Vandame-1968
keo,Keo,Papunesia,-8.83333333333,121.25,keoo1238,xxk,Austronesian,,Central Malayo-Polynesian,c807633,xxk,false,false,ID,Baird-2001
ker,Kera,Africa,9.83333333333,15.0833333333,kera1255,ker,Afro-Asiatic,Chadic,East Chadic,cA7CC51,ker,false,true,TD,Ebert-1976 Ebert-1979
ket,Ket,Eurasia,64,87,kett1243,ket,Yeniseian,,Yeniseian,cCCAB51,ket,false,true,RU,Castren-1858 Comrie-1980 Corbett-1991 Donner-1955 Dulzon-1968 Feev-1998 Krejnovich-1961 Krejnovich-1968a Krejnovich-1968b Vajda-2000 Vall-and-Kanakin-1985 Vall-and-Kanakin-1988 Vall-and-Kanakin-1990 Verner-1999 Werner-1995 Werner-1997a Werner-1997b
keu,Kenyah (Uma' Lung),Papunesia,3,115.833333333,umal1238,keu,Austronesian,,North Borneo,c804E33,keu,false,false,ID,
kew,Kewa,Papunesia,-6.5,143.833333333,kewa1250,kew,Trans-New Guinea,,Enga_Kewa-Huli,c803348,kew,true,true,PG,Franklin-1964 Franklin-1967 Franklin-1971 Franklin-and-Franklin-1962 Franklin-and-Franklin-1978 Nichols-1992
kfc,Kriol (Fitzroy Crossing),Australia,-18.1666666667,125.583333333,krio1252,rop,other,,Creoles and Pidgins,c333D80,rop,false,false,AU,Dahl-1985
kfe,Koromfe,Africa,14.25,-0.916666666667,koro1298,kfz,Niger-Congo,Gur,Koromfe,cA6CC51,kfz,false,true,BF ML,Rennison-1986 Rennison-1997
kfy,Kirghiz (Fu-Yu),Eurasia,47.75,124.416666667,kirg1245,kir,Altaic,,Turkic,c778033,kir,false,false,CN,Tenishev-1997d
kga,Kinga,Africa,-9,34,nucl1379,zga,Niger-Congo,Benue-Congo,Bantu,cC3CC51,zga,false,false,TZ,Wolff-1905
kgi,Konyagi,Africa,12.5,-13.25,wame1240,cou,Niger-Congo,North-Central Atlantic,Tenda,c568033,cou,false,false,ML GN,Santos-1977
kgl,Umbu Ungu,Papunesia,-6,144,umbu1258,ubu,Trans-New Guinea,,Chimbu-Wahgi,c51CC7C,ubu,false,false,PG,Blowers-1970
kgm,Kagoma,Africa,9.25,8.16666666667,kago1247,kdm,Niger-Congo,Benue-Congo,Benue-Congo Plateau,cB1CC51,kdm,false,false,NG,Hagen-1988
kgr,Kagulu,Africa,-6.33333333333,37,kagu1239,kki,Niger-Congo,Benue-Congo,Bantu,cC3CC51,kki,false,false,TZ,Last-1886
kgt,Kangiryuarmiut,North America,68.3333333333,-133.75,copp1244,ikt,Eskimo-Aleut,,Eskimo,cCC7351,ikt,false,false,CA,Lowe-1983
kgu,Kalkatungu,Australia,-21,139.5,kalk1246,ktg,Pama-Nyungan,,Northern Pama-Nyungan,c336680,ktg,false,false,AU,Blake-1969 Blake-1979b
kgy,Kyirong,Eurasia,28.4166666667,85.3333333333,kyer1238,kgy,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,kgy,false,false,CN,Huber-2005
kgz,Kirghiz,Eurasia,42,75,kirg1245,kir,Altaic,,Turkic,c778033,kir,false,false,KG,Hebert-and-Poppe-1963 Herbert-and-Poppe-1963 Junusaliev-1966 Kirchner-1998b Nedjalkov-2007b Oruzbaeva-1997
kha,Khalkha,Eurasia,47,105,halh1238,khk,Altaic,,Mongolic,cBECC51,khk,true,true,MN,Beffa-and-Hamayon-1975 Binnick-1979 Binnick-2001 Chinggaltai-1952 Hamayon-et-al-1975 Hangin-1968 Jakhtonova-1997 Kuzmenkov-2001 Kuzmenkov-et-al-2007 Luvsanvandan-1964 Malherbe-and-Rosenberg-1996 Nichols-1992 Orlovskaja-1961 Poppe-1937 Poppe-1951 Poppe-1954 Poppe-1970 Poppe-1991 Sanzheev-1959 Sanzheev-and-Todaeva-1993 Sanzheyev-1973 Street-1963 Svantesson-1985 Svantesson-1991 Svantesson-2003 Vietze-1969 Vietze-1988
khd,Kham (Dege),Eurasia,31.8333333333,98.5833333333,kham1282,khg,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,khg,false,false,CN,Hasler-1999
khg,Khaling,Eurasia,27.5,86.6666666667,khal1275,klr,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,klr,false,false,CN IN NP,Toba-1984 Toba-and-Toba-1975
khi,Khinalug,Eurasia,41.1666666667,48.0833333333,khin1240,kjj,Nakh-Daghestanian,Daghestanian,Khinalug,cCC5D51,kjj,false,false,AZ,Kibrik-1994b
khk,Khakas,Eurasia,53,90,khak1248,kjh,Altaic,,Turkic,c778033,kjh,false,false,RU,Anderson-1998 Anonymous-1961 Baskakov-1975 Baskakov-and-Inkizekova-Grekyl-1953 Karpov-1966 Schonig-1998a
khl,Khalaj,Eurasia,35,50,turk1303,klj,Altaic,,Turkic,c778033,klj,false,false,IR,Doerfer-1988 Kiral-2000 Stolz-1996
khm,Khmer,Eurasia,12.5,105,cent1989,khm,Austro-Asiatic,Mon-Khmer,Khmer,cCCC651,khm,false,true,KH,Campbell-2000 Comrie-and-Horie-1995 Ehrman-1970 Ehrman-1972b Gorgoniev-1961 Gorgoniev-1966 Gorgoniyev-1966 Griffith-1991 Headley-2001 Henderson-1952 Huffman-1967 Huffman-1970a Huffman-1970b Jacob-1968 Malherbe-and-Rosenberg-1996 Nacaskul-1978 Noss-et-al-1966 Sean-et-al-2000 Smyth-1995 Spatar-2001
khn,Khün,Eurasia,21,100,khun1259,kkh,Tai-Kadai,,Kam-Tai,c51CC8A,kkh,false,false,MM,Petsuk-1978
kho,Nama,Africa,-25.5,18,nama1264,naq,Khoe-Kwadi,,Khoe-Kwadi,c803362,naq,true,true,NA,Bohm-1985 Hagman-1973 Hagman-1977 Ladefoged-and-Traill-1984 Nichols-1992 Rust-1965 Stolz-1996 Vossen-1997
khr,Kharia,Eurasia,22.5,84.3333333333,khar1287,khr,Austro-Asiatic,,Munda,c807D33,khr,false,false,IN,Abbi-1992 Biligiri-1965 Pinnow-1959 Pinnow-1965
khs,Khasi,Eurasia,25.5,92,khas1269,kha,Austro-Asiatic,Mon-Khmer,Khasian,c807A33,kha,false,true,IN,Nagaraja-1985 Rabel-1961 Rabel-Heymann-1977 Roberts-1995 Singh-1906
khu,Khumi,Eurasia,21.9166666667,92.4166666667,khum1248,cnk,Sino-Tibetan,Tibeto-Burman,Kuki-Chin,c51CCB8,cnk,false,false,MM,
khv,Khwarshi,Eurasia,42.25,46.1666666667,khva1239,khv,Nakh-Daghestanian,Daghestanian,Avar-Andic-Tsezic,c7B51CC,khv,false,false,RU,Bokarev-1959
khw,Khowar,Eurasia,36,72,khow1242,khw,Indo-European,,Indic,cCC5351,khw,false,false,PK,Bashir-1989 Bashir-2000
kic,Kickapoo,North America,42.25,-84,kick1244,kic,Algic,,Algonquian,c758033,kic,false,false,US,Voorhis-1974 Voorhis-1988
kie,Kire,Papunesia,-4.25,144.75,kire1240,geb,Lower Sepik-Ramu,Ramu,Mikarew,c7B3380,geb,false,false,PG,Stanhope-1972
kij,Kitja,Australia,-17.5,127.75,kitj1240,gia,Jarrakan,,Jarrakan,c51CC98,gia,false,false,AU,
kik,Kikuyu,Africa,-0.75,36.75,kiku1240,kik,Niger-Congo,Benue-Congo,Bantu,cC3CC51,kik,false,false,KE,Barlow-1960 Dahl-1985 Malherbe-and-Rosenberg-1996 Mugane-1997 Njogu-2001a
kil,Kiluba,Africa,-8,26,luba1250,lub,Niger-Congo,Benue-Congo,Bantu,cC3CC51,lub,false,false,CD,Beckett-1951 DeClercq-1929 Munyarugero-1975
kim,Kimaghama,Papunesia,-8,138.5,kima1246,kig,Kolopom,,Kolopom,cCC51A5,kig,false,false,ID,Boelaars-1950 Drabbe-1949
kin,Kinyarwanda,Africa,-2,30,kiny1244,kin,Niger-Congo,Benue-Congo,Bantu,cC3CC51,kin,false,false,RW,Dryer-1983 Dubnova-1979 Gasarabwe-1992 Hurel-1959 Kimenyi-1980 Malherbe-and-Rosenberg-1996 Stolz-1996 Wilkins-and-Kimenyi-1975
kio,Kiowa,North America,37,-99,kiow1266,kio,Kiowa-Tanoan,,Kiowa-Tanoan,cCC519F,kio,true,true,US,Harrington-1928 McKenzie-and-Harrington-1948 Nichols-1992 Sivertsen-1956 Watkins-1980 Watkins-1984 Watkins-and-McKenzie-1984
kiq,Kalmyk (Issyk-Kul),Eurasia,42.4166666667,78.3333333333,kalm1243,xal,Altaic,,Mongolic,cBECC51,xal,false,false,KG,Tenishev-1997a
kir,Kirma,Africa,10.25,-4.83333333333,cerm1238,cme,Niger-Congo,Gur,Kirma-Tyurama,cCC7A51,cme,false,false,BF,Prost-1964b
kis,Kisi,Africa,8.83333333333,-10.1666666667,kiss1245,kss,Niger-Congo,Mel,Southern Mel,c334680,kss,false,false,SL GN LR,Childs-1991 Childs-1995 Childs-2000
kit,Kitsai,North America,31.8333333333,-96.5,kits1249,kii,Caddoan,,Northern Caddoan,c805A33,kii,false,false,US,Bucca-and-Lesser-1969
kiu,Kui (in Indonesia),Papunesia,-8.43333333333,124.55,kuii1253,kvd,Greater West Bomberai,Timor-Alor-Pantar,Alor-Pantar,c608033,kvd,false,false,ID,
kiw,Kiwai (Southern),Papunesia,-8,143.5,sout2949,kjd,Trans-New Guinea,,Kiwaian,c803367,kjd,false,false,PG,Nichols-1992 Ray-1933 Wurm-1977
kje,Koreguaje,South America,1,-75.5,kore1283,coe,Tucanoan,,Tucanoan,c6FCC51,coe,false,false,CO,Cook-and-Criswell-1993 Huber-and-Reed-1992
kji,Kurmanji,Eurasia,38,42,nort2641,kmr,Indo-European,,Iranian,c803335,kmr,false,false,TR,Bakaev-1966 Bulut-2000 Cukerman-1962 Dahl-1985 Lescot-and-Khan-1986 Malherbe-and-Rosenberg-1996
kjn,Kunjen,Australia,-16.5,142.5,kunj1245,kjn,Pama-Nyungan,,Northern Pama-Nyungan,c336680,kjn,false,false,AU,Hamilton-1998 Sommer-1969
kjo,Konjo,Papunesia,-5.46666666667,120.333333333,coas1295,kjc,Austronesian,,South Sulawesi,cCC6B51,kjc,false,false,ID,Friberg-1995 Friberg-1996 Friberg-and-Friberg-1989
kjr,Koorete,Africa,5.83333333333,37.8333333333,koor1239,kqy,Afro-Asiatic,Omotic,Ta-Ne-Omotic,cCC5751,kqy,false,false,ET,Hayward-1982
kkb,Konkomba,Africa,10,0.0833333333333,konk1269,xon,Niger-Congo,Gur,Oti-Volta,cCCB351,xon,false,false,TG GH,
kkl,Kata Kolok,Papunesia,-8.25,115.166666667,beng1239,bqy,other,,Sign Languages,c515CCC,bqy,false,false,ID,Branson-et-al-1996
kkn,Konkani,Eurasia,15.25,74,konk1267,knn,Indo-European,,Indic,cCC5351,knn,false,false,IN,Gajendragadkar-1970 Gruere-and-Sardessai-1998 Madtha-1984 Major-1979 Malherbe-and-Rosenberg-1996 Miranda-2003
kko,Koranko,Africa,9.33333333333,-11.25,kura1250,knk,Mande,,Western Mande,c6751CC,knk,false,false,SL GN,Kastenholz-1987
kkp,Karakalpak,Eurasia,43,60,kara1467,kaa,Altaic,,Turkic,c778033,kaa,false,false,UZ,Baskakov-1958 Baskakov-1966b Baskakov-1997b Wurm-1951
kkq,Kuikúro,South America,-12.4166666667,-53.0833333333,kuik1246,kui,Cariban,,Cariban,cCC9251,kui,false,false,BR,Franchetto-2002 Franchetto-2004
kkr,Kirikiri,Papunesia,-3,137.166666667,kiri1256,kiy,Lakes Plain,,West Tariku,c528033,kiy,false,false,ID,
kkt,Kokota,Papunesia,-8,159.133333333,koko1269,kkk,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,kkk,false,false,SB,Palmer-2002
kku,Korku,Eurasia,22.5,78.5,kork1243,kfq,Austro-Asiatic,,Munda,c807D33,kfq,false,false,IN,Drake-1903 Nagaraja-1999
kkv,Lusi,Papunesia,-5.58333333333,149.666666667,lusi1240,khl,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,khl,false,false,PG,Counts-1969 Thurston-1994
kkw,Karankawa,North America,28,-97,kara1289,zkk,,,,c803355,zkk,false,false,US,Gatschet-1891a Swanton-1940
kky,Kankanay,Papunesia,16.75,120.583333333,kank1243,kne,Austronesian,,Northern Luzon,c805533,kne,false,false,PH,Vanoverbergh-1931
kkz,Kokni,Eurasia,20.75,73.5,kukn1238,kex,Indo-European,,Indic,cCC5351,kex,false,false,IN,
kla,Klao,Africa,4.75,-8.75,klao1243,klu,Niger-Congo,,Kru,c6F51CC,klu,false,false,LR,Rickard-1970 Singler-1979
klb,Kilba,Africa,10.3333333333,13.1666666667,huba1236,hbb,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,hbb,false,false,NG,Schuh-1983
klg,Kulung,Eurasia,27.5,87,kulu1253,kle,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,kle,false,false,NP,Tolsma-1999
klh,Kalasha,Eurasia,35,72,kala1372,kls,Indo-European,,Indic,cCC5351,kls,false,false,PK,Bashir-1989
kli,Kaili,Papunesia,-1.16666666667,120,ledo1238,lew,Austronesian,,Celebic,c803F33,lew,false,false,ID,Esser-1934
klk,Koh,Africa,8,15.5,kuoo1238,xuo,Niger-Congo,Adamawa-Ubangi,Mbumic,c7ECC51,xuo,false,false,TD CM,Glidden-1985
kll,Kaluli,Papunesia,-6.5,142.75,kalu1248,bco,Trans-New Guinea,,Bosavi,c806133,bco,false,false,PG,Schieffelin-and-Feld-1998
klm,Klamath,North America,42.5,-121.5,klam1254,kla,Penutian,,Klamath-Modoc,c519BCC,kla,false,false,US,Barker-1963a Barker-1963b Barker-1964 Gatschet-1890 Kinkade-2001 Rude-1988c Stegnij-2001
kln,Kolana,Papunesia,-8.25,125.116666667,wers1238,kvw,Greater West Bomberai,Timor-Alor-Pantar,Alor-Pantar,c608033,kvw,false,false,ID,
klp,Kalapuya,North America,44.5,-123,kala1400,kyl,Kalapuyan,,Kalapuyan,c803351,kyl,false,false,US,Berman-1990 Kinkade-2001
klq,Kalam,Papunesia,-5.25,144.583333333,kala1397,kmh,Trans-New Guinea,Madang,Kalam-Kobon,c804833,kmh,false,false,PG,Pawley-1966 Pawley-1994
klr,Koluri,Eurasia,37,48,shah1254,shm,Indo-European,,Iranian,c803335,shm,false,false,IR,Stilo-2005
kls,Kalispel,North America,48,-117,kali1308,fla,Salishan,,Interior Salish,c51B2CC,fla,false,false,US,Giorda-1877 Speck-1980 Thomason-and-Everett-1993 Vogt-1940
klt,Kelabit,Papunesia,3.66666666667,115.416666667,kela1258,kzi,Austronesian,,North Borneo,c804E33,kzi,false,false,MY,Omar-1983
klv,Kilivila,Papunesia,-8.5,151.083333333,kili1267,kij,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,kij,false,true,PG,Senft-1952 Senft-1986
klw,Kiliwa,North America,31.3333333333,-115.666666667,kili1268,klb,Hokan,,Yuman,cCC6151,klb,false,false,MX,Mixco-1971 Mixco-1985 Mixco-2000
kly,Kala Lagaw Ya,Papunesia,-10.1166666667,142.116666667,kala1377,mwp,Pama-Nyungan,,Northern Pama-Nyungan,c336680,mwp,false,false,AU,Bani-and-Klokeid-1972 Comrie-1981a Kennedy-1981 Wurm-1972a
klz,Kalanga,Africa,-20.5,27.5,kala1384,kck,Niger-Congo,Benue-Congo,Bantu,cC3CC51,kck,false,false,BW ZW,Mathangwane-1999
kma,Kamaiurá,South America,-12.0833333333,-52.5833333333,kama1373,kay,Tupian,,Maweti-Guarani,cCC6351,kay,false,false,BR,Everett-and-Seki-1986 Seki-1990 Seki-2000
kmb,Kombai,Papunesia,-5.58333333333,140,ndei1235,,Trans-New Guinea,Awyu-Ok,Ndeiram,c51AACC,tyn wng,false,false,ID,de-Vries-1989 de-Vries-1993
kmh,Kham,Eurasia,28.5,82.75,west2420,kjl,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,kjl,false,false,NP,Noonan-2003c Watters-1973 Watters-1998 Watters-2002 Watters-and-Watters-1973
kmi,Kami,Africa,-6.75,38,kami1256,kcu,Niger-Congo,Benue-Congo,Bantu,cC3CC51,kcu,false,false,TZ,Velten-1899b
kmj,Karimojong,Africa,3,34.1666666667,kara1483,kdj,Eastern Sudanic,Nilotic,Eastern Nilotic,c807E33,kdj,false,false,UG,Novelli-1985
kmk,Kalmyk,Eurasia,44,83,kalm1244,xal,Altaic,,Mongolic,cBECC51,xal,false,false,CN RU MN,Benzing-1985 Grammatika-1983 Purbeev-1997 Ramstedt-1935 Street-1959 Todaeva-1968 Zwick-1854
kmn,Kuman,Papunesia,-5.91666666667,145,kuma1280,kue,Trans-New Guinea,,Chimbu-Wahgi,c51CC7C,kue,false,false,PG,Trefry-1969
kmo,Koiali (Mountain),Papunesia,-9,147.5,moun1252,kpx,Trans-New Guinea,,Koiarian,c3B8033,kpx,false,false,PG,Garland-and-Garland-1975
kmp,Kunimaipa,Papunesia,-8,146.833333333,kuni1267,kup,Trans-New Guinea,,Goilalan,c58CC51,kup,false,false,PG,Geary-1977 Pence-1966
kmr,Kamoro,Papunesia,-4.33333333333,136,kamo1255,kgq,Asmat-Kamrau Bay,,Asmat-Kamrau Bay,cCCA851,kgq,false,false,ID,Boelaars-1950
kms,Kamass,Eurasia,52,92,kama1351,xas,Uralic,,Samoyedic,c578033,xas,false,false,RU,Joki-1944 Kunnap-1999b Simoncsics-1998
kmt,Kemtuik,Papunesia,-2.66666666667,140.333333333,kemt1242,kmt,Nimboran,,Nimboran,c5E51CC,kmt,false,false,ID,
kmu,Khmu',Eurasia,21,102,khmu1256,kjg,Austro-Asiatic,Mon-Khmer,Khmuic,c5BCC51,kjg,false,true,LA,Dahl-1985 Premsirat-1991 Premsrirat-1987 Smalley-1961 Svantesson-1983
kmw,Kamu,Australia,-13.5833333333,130.833333333,kamu1258,xmu,Eastern Daly,,Eastern Daly,c338058,xmu,false,false,AU,Harvey-1990
kmz,Kamasau,Papunesia,-3.91666666667,143.666666667,kama1367,kms,Torricelli,,Marienberg,c51CC5C,kms,false,false,PG,Sanders-and-Sanders-1994
kna,Karitiâna,South America,-9.5,-64,kari1311,ktn,Tupian,,Arikem,c508033,ktn,false,false,BR,Storto-1999
knb,Kanum (Bädi),Papunesia,-8.83333333333,140.75,badi1247,khd,Yam,,Kanum,c598033,khd,false,false,ID,Boelaars-1950
knc,Kugu Nganhcara,Australia,-14.4166666667,142,kuku1280,uwa,Pama-Nyungan,,Northern Pama-Nyungan,c336680,uwa,false,false,AU,Smith-and-Johnson-2000
knd,Kannada,Eurasia,14,76,nucl1305,kan,Dravidian,,Dravidian,cB7CC51,kan,true,true,IN,Abbi-1992 Amritavalli-2000 Bhat-1978 Bright-1958 Emeneau-1980 Gil-1994b Haspelmath-1995 Haspelmath-1997 Jensen-1969 Schiffman-1983 Sridhar-1990 Steever-1998a Steever-1998b Upadhyaya-1972
kng,Kaingang,South America,-26,-52,kain1272,kgp,Macro-Ge,Je,Je Meridional,c83CC51,kgp,false,false,BR,Henry-1935 Henry-1948 Kindell-1972 Stolz-1996 Tempski-1986 Wiesemann-1972 Wiesemann-1986a
kni,Konni,Africa,10.25,-1.58333333333,konn1242,kma,Niger-Congo,Gur,Oti-Volta,cCCB351,kma,false,false,GH,Cahill-1999
knk,Kanakuru,Africa,10,12,dera1248,kna,Afro-Asiatic,Chadic,West Chadic,cADCC51,kna,false,false,NG,Bybee-et-al-1994 Newman-1974
knm,Kunama,Africa,14.5,37,kuna1268,kun,,,,c803369,kun,false,true,ET ER,Bender-1983a Bender-1983b Bender-1996 Bohm-1984 Reinisch-1881 Thompson-1983 Thompson-1989b Tucker-and-Bryan-1966
knn,Kinnauri,Eurasia,31.5,78,kinn1249,kfk,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,kfk,false,false,IN,Sharma-1988
kno,Kanoê,South America,-13.25,-61,kano1245,kxo,Kapixana,,Kapixana,cCC5182,kxo,false,false,BR,Bacelar-2004
knp,Kanum (Ngkâlmpw),Papunesia,-8.66666666667,140.916666667,ngka1235,kcd,Yam,,Kanum,c598033,kcd,false,false,ID,
knq,Kriol (Ngukurr),Australia,-14.8333333333,135,krio1252,rop,other,,Creoles and Pidgins,c333D80,rop,false,false,AU,
knr,Kanuri,Africa,12,13,cent2050,knc,Saharan,Saharan,Western Saharan,cC351CC,knc,false,true,NG TD NE SD,Awobuluyi-1971 Bybee-et-al-1994 Cyffer-1974 Cyffer-1978 Cyffer-1991 Cyffer-1994 Cyffer-1998 Cyffer-and-Hutchison-1990 Hutchison-1976 Hutchison-1981 Lukas-1937 Moravcsik-1978
knu,Konua,Papunesia,-5.83333333333,154.833333333,rapo1238,kyx,West Bougainville,,West Bougainville,c7F8033,kyx,false,false,PG,Muller-1954 Nichols-1992
knw,Konkow,North America,39.5,-121.5,nort2951,mjd,Penutian,,Maiduan,c5184CC,mjd,false,false,US,Ultan-1967
knz,Kham (Tibetan) (Nangchen),Eurasia,32.5,96.5,kham1282,khg,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,khg,false,false,CN,Causemann-1989
koa,Koasati,North America,34.8333333333,-85.1666666667,koas1236,cku,Muskogean,,Muskogean,c9251CC,cku,true,true,US,Haas-1944 Kimball-1991 Kimball-1994 Rising-1992
kob,Kobon,Papunesia,-5.16666666667,144.333333333,kobo1249,kpw,Trans-New Guinea,Madang,Kalam-Kobon,c804833,kpw,false,true,PG,Davies-1980 Davies-1981a Davies-1981b Davies-1989b Nichols-1992
kod,Kodava,Eurasia,12.1666666667,76.8333333333,koda1255,kfa,Dravidian,,Dravidian,cB7CC51,kfa,false,false,IN,Abbi-1992 Ebert-1996
koe,Koegu,Africa,7,36.0833333333,kweg1241,xwg,Eastern Sudanic,Surmic,South Surmic,c806933,xwg,false,false,ET,Hieda-1998
koh,Kohumono,Africa,6,8.11666666667,kohu1244,bcs,Niger-Congo,Benue-Congo,Upper Cross,cCC51A2,bcs,false,false,NG,Cook-1969b
koi,Koiari,Papunesia,-9.5,147.333333333,gras1249,kbk,Trans-New Guinea,,Koiarian,c3B8033,kbk,false,false,PG,Dutton-1969 Dutton-1992 Dutton-1996
kok,Kokborok,Eurasia,24.3333333333,92.5,kokb1239,trp,Sino-Tibetan,Tibeto-Burman,Brahmaputran,c6C51CC,trp,false,false,IN,Karapurkar-1976 Pai-1976 Pushpa-1976
kol,Kolami,Eurasia,20,78.5,nort2699,kfb,Dravidian,,Dravidian,cB7CC51,kfb,false,false,IN,Emeneau-1955 McNair-and-McNair-1973 Subrahmanyam-1998
kom,Komo,Africa,8.75,33.75,komo1258,xom,Koman,,Koman,c803377,xom,false,false,ET SS,Tucker-and-Bryan-1956 Tucker-and-Bryan-1966
kon,Kongo,Africa,-5,15,koon1244,kng,Niger-Congo,Benue-Congo,Bantu,cC3CC51,kng,false,true,CD,Bentley-1887 Bentley-1895 Carrie-1890 Carter-1973 Carter-and-Makoondekwa-1987 Lumwamu-1973 Ngalasso-1993
koo,Kola,Papunesia,-5.5,134.5,kola1285,kvv,Austronesian,,Central Malayo-Polynesian,c807633,kvv,false,false,ID,Spaelti-1997 Takata-and-Takata-1991 Takata-and-Takata-1992
kop,Komi-Permyak,Eurasia,59.5,54.5,komi1269,koi,Uralic,Finno-Ugric,Permic,c98CC51,koi,false,false,RU,Austerlitz-1964 Itkonen-1955 Lytkin-1961 Lytkin-1966a Riese-1998 Tepljashina-and-Lytkin-1976
kor,Korean,Eurasia,37.5,128,kore1280,kor,,,,c80336B,kor,true,true,KR KP,Chang-1996 Cho-1967 Gil-1991 Kim-1972 Kim-1986 Lee-1989 Lee-1991 Lee-1999 Lee-and-Ramsey-2000 Lizotte-1983 Malherbe-and-Rosenberg-1996 Martin-1951 Martin-1954 Martin-and-Lee-1969 Ramstedt-1968 Sohn-1994 Sohn-1999 Song-1988 Underwood-1954 Wymann-1996
kos,Kosraean,Papunesia,5.3,163,kosr1238,kos,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,kos,false,false,FM,Lee-1975 Lee-1976
kot,Kota,Eurasia,11.5,77.1666666667,kota1263,kfe,Dravidian,,Dravidian,cB7CC51,kfe,false,false,IN,Emeneau-1944 Nichols-1992
kou,Kom,Africa,6.25,10.3333333333,komc1235,bkm,Niger-Congo,Benue-Congo,Wide Grassfields,c7D3380,bkm,false,false,CM,
kow,Ko (Winye),Africa,11.8666666667,-2.91666666667,winy1241,kst,Niger-Congo,Gur,Grusi,c448033,kst,false,false,BF,
koy,Koya,Eurasia,17.5,81.3333333333,koya1251,kff,Dravidian,,Dravidian,cB7CC51,kff,false,false,IN,Stolz-1996 Tyler-1969
kpa,Kpan,Africa,7.58333333333,10.1666666667,kpan1246,kpk,Niger-Congo,Benue-Congo,Jukunoid,cCC5174,kpk,false,false,NG,Shimizu-1971
kpe,Kpelle,Africa,7,-10,libe1247,xpe,Mande,,Western Mande,c6751CC,xpe,false,false,LR,Casthelain-and-Lassort-1952 Hyman-1973 Welmers-1962 Welmers-1973 Westermann-1969 Westermann-and-Melzian-1930
kpm,Kapampangan,Papunesia,15.3333333333,120.5,pamp1243,pam,Austronesian,,Central Luzon,cCC8851,pam,false,false,PH,Forman-1971 Kitano-2001 Mirikitani-1972 Mithun-1994
kpn,Kapingamarangi,Papunesia,1.05,154.75,kapi1249,kpg,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,kpg,false,false,FM,Lieber-and-Dikepa-1974
kpo,Kposo,Africa,7.5,0.833333333333,ikpo1238,kpo,Niger-Congo,Kwa,Ka-Togo,c603380,kpo,false,false,TG,Wolf-1981
kpw,Karen (Pwo),Eurasia,13,99.1666666667,pwoe1235,kjp,Sino-Tibetan,Tibeto-Burman,Karen,c51CCC4,kjp,false,false,CN MM,Kato-2003
kqq,Krenak,South America,-15.5,-41,kren1239,kqq,Macro-Ge,,Aimore,c80336C,kqq,false,false,BR,Seki-2004
kra,Kara (in Papua New Guinea),Papunesia,-2.83333333333,151.116666667,kara1486,leu,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,leu,false,false,PG,Schlie-and-Schlie-1993
krb,Kiribati,Papunesia,1.33333333333,173,gilb1244,gil,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,gil,false,true,KI,Cowell-1951 Groves-et-al-1985 Harrison-and-Jackson-1984
krc,Karachay-Balkar,Eurasia,43.5,42,kara1465,krc,Altaic,,Turkic,c778033,krc,false,false,RU,Chechenov-and-Akhmatov-1997 Comrie-1998 Karacaevo-Cerkesskij-Institut-1956 Nedjalkov-and-Nedjalkov-2007c Seegmiller-1996 Xabichev-1966
krd,Kurdish (Central),Eurasia,36,44,cent1972,ckb,Indo-European,,Iranian,c803335,ckb,false,false,IR IQ,Abdulla-and-McCarus-1967 Akrawy-1982 Blau-1980 Cabolov-1997 Ejjubi-and-Smirnova-1968 Fattah-1997 McCarus-1956 McCarus-1958 McCarus-1997
kre,Kresh,Africa,8.5,24.5,gbay1288,krs,Central Sudanic,,Kresh,cB751CC,krs,false,false,SS,Brown-1994 Santandrea-1976 Tucker-and-Bryan-1966
krf,Korafe,Papunesia,-9.05,149.083333333,kora1294,kpr,Trans-New Guinea,Greater Binanderean,Binanderean,c64CC51,kpr,false,false,PG,Farr-1999
krg,Karanga,Africa,-20,31,shon1251,sna,Niger-Congo,Benue-Congo,Bantu,cC3CC51,sna,false,false,ZW,Marconnes-1931
krh,Krahô,South America,-8,-48,krah1246,xra,Macro-Ge,Je,Je Setentrional,c807033,xra,false,false,BR,Shell-1952
kri,Kipea,South America,-10,-37,kari1255,kzw,Kariri,,Kariri,cCC5188,kzw,false,false,BR,Adam-1897 Larsen-1984 Rodrigues-1999b
krj,Karadjeri,Australia,-19,122,kara1476,gbd,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,gbd,false,false,AU,Capell-1962b
krk,Karok,North America,41.6666666667,-123,karo1304,kyh,Hokan,,Karok,cCC518E,kyh,true,true,US,Bright-1957 Bright-1977 Bybee-et-al-1994 Harrington-1931 Macaulay-1992a Mithun-1999 Nichols-1992 Rose-nd
krl,Karelian,Eurasia,64,32,kare1335,krl,Uralic,Finno-Ugric,Finnic,c5B8033,krl,false,false,RU,Laanest-1982 Leskinen-1984 Raun-1964b Rjagoev-1993
krm,Karaim,Eurasia,54.6666666667,24.9166666667,kara1464,kdr,Altaic,,Turkic,c778033,kdr,false,false,UA LT,Kowalski-1929 Musaev-1966 Musaev-1997
krn,Korana,Africa,-29.5,20.5,kora1292,kqz,Khoe-Kwadi,,Khoe-Kwadi,c803362,kqz,false,false,ZA,Donwa-Ifode-1990 Maingard-1962 Meinhof-1930
kro,Krongo,Africa,10.5,30,kron1241,kgo,Kadu,,Kadugli,cCC517D,kgo,true,true,SD,Bybee-et-al-1994 Reh-1983 Reh-1985
krq,Kerek,Eurasia,62.25,175,kere1280,krk,Chukotko-Kamchatkan,,Northern Chukotko-Kamchatkan,cCC8451,krk,false,false,RU,Skorik-1968b Skorik-1986 Volodin-2001
krr,Kairiru,Papunesia,-3.33333333333,143.583333333,kair1263,kxa,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,kxa,false,false,PG,Ross-2002a Wivell-1981
krt,Karata,Eurasia,42.5833333333,46.3333333333,kara1474,kpt,Nakh-Daghestanian,Daghestanian,Avar-Andic-Tsezic,c7B51CC,kpt,false,false,RU,Gudava-1964 Magomedbekova-1971
krw,Korowai,Papunesia,-5.25,140,koro1312,khe,Trans-New Guinea,Awyu-Ok,Becking-Dawi,c804133,khe,false,false,ID,van-Enk-and-de-Vries-1997
kry,Koryak,Eurasia,61,167,kory1246,kpy,Chukotko-Kamchatkan,,Northern Chukotko-Kamchatkan,cCC8451,kpy,false,false,RU,Bogoras-1917 Skorik-1986 Stolz-1996 Zhukova-1967 Zhukova-1968b Zhukova-1972 Zhukova-1980 Zukova-1967
krz,Kryz,Eurasia,41.0833333333,48,kryt1240,kry,Nakh-Daghestanian,Daghestanian,Lezgic,c8051CC,kry,false,false,AZ,Authier-2004 Saadiev-1994
ksa,Keresan (Santa Ana),North America,35.4166666667,-106.666666667,east1472,kee,Keresan,,Keresan,c803363,kee,false,false,US,Davis-1960 Davis-1964
kse,Koyraboro Senni,Africa,16,0,koyr1242,ses,Songhay,,Songhay,c803370,ses,true,true,ML NE,Heath-1999a Malherbe-and-Rosenberg-1996 Prost-1956 Williamson-1967
ksg,Karen (Sgaw),Eurasia,18,97,sgaw1245,ksw,Sino-Tibetan,Tibeto-Burman,Karen,c51CCC4,ksw,false,false,MM,Jones-1961 Malherbe-and-Rosenberg-1996
ksh,Kashaya,North America,38.6666666667,-123.333333333,kash1280,kju,Hokan,,Pomoan,c803733,kju,false,false,US,Buckley-1994 Oswalt-1961 Oswalt-1986 Oswalt-1988
ksi,Ksingmul,Eurasia,21.0833333333,104,puoc1238,puo,Austro-Asiatic,Mon-Khmer,Khmuic,c5BCC51,puo,false,false,VN LA,Pogibenko-and-Buy-1990
ksl,Kenyan Sign Language,Africa,0,38,keny1241,xki,other,,Sign Languages,c515CCC,xki,false,false,KE,Akach-1991
ksm,Kasem,Africa,11.25,-1.25,kase1253,xsm,Niger-Congo,Gur,Grusi,c448033,xsm,false,false,BF,Bonvini-1988 Cremer-1924
ksn,Kasong,Eurasia,12.75,102.116666667,chon1284,cog,Austro-Asiatic,Mon-Khmer,Pearic,c807F33,cog,false,false,TH,Sunee-2003
ksp,Kosop,Africa,9.91666666667,15.9166666667,kimm1246,kia,Niger-Congo,Adamawa-Ubangi,Kim,c478033,kia,false,false,TD,Lafarge-1977
ksr,Kisar,Papunesia,-8.08333333333,127.116666667,kisa1266,kje,Austronesian,,Central Malayo-Polynesian,c807633,kje,false,false,ID,Christensen-and-Christensen-1992 Christensen-et-al-1991
kss,Kisi (Southern),Africa,8.5,-10.25,sout2778,kss,Niger-Congo,Mel,Southern Mel,c334680,kss,false,false,GN LR,Childs-1995
ksu,Kashubian,Eurasia,54,18,kash1274,csb,Indo-European,,Slavic,c803338,csb,false,false,PL,Lorentz-1971
kta,Koita,Papunesia,-9.33333333333,147.083333333,koit1244,kqi,Trans-New Guinea,,Koiarian,c3B8033,kqi,false,false,PG,Dutton-1975
ktb,Kituba,Africa,-5,17.5,kitu1246,ktu,other,,Creoles and Pidgins,c333D80,ktu,false,false,CD,Swift-and-Zola-1963
ktc,Katcha,Africa,10.8333333333,29.6666666667,katc1250,xtc,Kadu,,Kadugli,cCC517D,xtc,false,false,SD,Stevenson-1957 Tucker-and-Bryan-1966
kte,Kete,Africa,-7,22.8333333333,kete1252,kcv,Niger-Congo,Benue-Congo,Bantu,cC3CC51,kcv,false,false,CD,Kamba-Muzenga-1980
kth,Kutchin,North America,67,-146,gwic1235,gwi,Na-Dene,,Athapaskan,c8C51CC,gwi,false,false,CA US,Ritter-1976
kti,"Kati (in West Papua, Indonesia)",Papunesia,-5.75,140.916666667,sout2940,kts,Trans-New Guinea,Awyu-Ok,Ok,c3E8033,kts,false,false,ID,Boelaars-1950
ktk,Kotoko,Africa,11.3333333333,15.3333333333,afad1236,aal,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,aal,false,false,CF,Bouny-1977
ktl,Katla,Africa,11.8333333333,29.3333333333,katl1237,kcr,Kordofanian,,Katla-Tima,c5B51CC,kcr,false,false,SD,Tucker-and-Bryan-1956 Tucker-and-Bryan-1966
ktm,Kathlamet,North America,46.14,-123.4,kath1253,,Penutian,,Chinookan,c335680,,false,false,,Hymes-1955
ktn,Ketengban,Papunesia,-4.5,140.5,kete1254,xte,Trans-New Guinea,,Mek,c428033,xte,false,false,ID,Sims-and-Sims-1982
kto,Kato,North America,39.6666666667,-123.666666667,kato1244,ktw,Na-Dene,,Athapaskan,c8C51CC,ktw,false,false,US,Goddard-1912
ktp,Ketapang,Eurasia,-2.75,111.1666667,mala1480,xdy,Austronesian,,Malayo-Sumbawan,cCC7D51,xdy,false,false,ID,
ktt,Kott,Eurasia,57,94,kott1239,,Yeniseian,,Yeniseian,cCCAB51,,false,false,RU,Werner-1997b
ktu,Katu,Eurasia,15.8333333333,107.583333333,nucl1297,,Austro-Asiatic,Mon-Khmer,Katuic,cCCC351,ktv kuf,false,false,VN LA,Costello-1969 Costello-1971
kty,Khanty,Eurasia,65,65,khan1273,kca,Uralic,Finno-Ugric,Ugric,c8CCC51,kca,false,false,RU,Abondolo-1998 Collinder-1957 Filchenko-2007 Gulya-1966 Honti-1988 Nikolaeva-1999 Redei-1965 Stolz-1996 Tereshkin-1966
ktz,Kati (in Afghanistan),Eurasia,35.5,70,kati1270,bsh,Indo-European,,Nuristani,cCC516E,bsh,false,false,PK AF,Grjunberg-1980
kua,Kualan,Papunesia,-0.416666666667,110.416666667,sema1269,sdm,Austronesian,,Land Dayak,c806A33,sdm,false,false,ID,
kug,Kunming,Eurasia,25,102.75,mand1415,cmn,Sino-Tibetan,,Chinese,c51CCC9,cmn,false,false,CN,Gui-2000
kui,Kui (in India),Eurasia,20,83.5,kuii1252,kxu,Dravidian,,Dravidian,cB7CC51,kxu,false,false,IN,Bybee-et-al-1994 Winfield-1928
kuk,Kukú,Africa,5.83333333333,31.6666666667,bari1284,bfa,Eastern Sudanic,Nilotic,Western Nilotic,cCC6E51,bfa,false,false,SS,Cohen-2000
kul,Kullo,Africa,6.75,37.0833333333,dawr1236,dwr,Afro-Asiatic,Omotic,Ta-Ne-Omotic,cCC5751,dwr,false,false,ET,Allan-1976a Moreno-1938
kum,Kumauni,Eurasia,30,80,kuma1273,kfy,Indo-European,,Indic,cCC5351,kfy,false,false,IN,Apte-and-Pattanayak-1967
kun,Kuna,South America,8,-77.3333333333,bord1248,kvn,Chibchan,,Kuna,cCC8C51,kvn,false,false,CO PA,Baptista-and-Wallin-1974 Erice-1985 Gianelli-2001 Holmer-1947 Holmer-1952 Sherzer-1983
kuo,Kuot,Papunesia,-3.05,151.5,kuot1243,kto,,,,c80336E,kto,false,false,PG,Chung-and-Chung-1996 Lindstrom-2002
kuq,Kumyk,Eurasia,43,47.3333333333,kumy1244,kum,Altaic,,Turkic,c778033,kum,false,false,RU,Bammatov-1960 Gadzhiaxmedov-2000 Institut-Imeni-Gamzata-Cadasy-1960 Levitskaja-1997
kur,Kurukh,Eurasia,22.8333333333,85.5,kuru1302,kru,Dravidian,,Dravidian,cB7CC51,kru,false,false,IN,Abbi-1992 Hahn-1900 Pfeiffer-1972 Pinnow-1964 Vesper-1968
kus,Kusunda,Eurasia,28,84.6666666667,kusu1250,kgg,,,,cCC51B0,kgg,false,false,NP,Reinhard-and-Toba-1970
kut,Kutenai,North America,49.5,-116,kute1249,kut,,,,c803372,kut,true,true,CA US,Boas-1927 Canestrelli-1927 Canestrelli-and-Boas-1927 Dryer-1996 Dryer-2001 Dryer-2002 Garvin-1948a Garvin-1948b Garvin-1948c Haugen-1956 Morgan-1991 Nichols-1992
kuu,Kuuku Ya'u,Australia,-12.5833333333,143.083333333,kuuk1238,kuy,Pama-Nyungan,,Northern Pama-Nyungan,c336680,kuy,false,false,AU,Thompson-1976b Thompson-1988
kuv,Kuvi,Eurasia,18.75,82.6666666667,kuvi1243,kxv,Dravidian,,Dravidian,cB7CC51,kxv,false,false,IN,Israel-1979 Krishnamurti-1969 Reddy-1979
kuy,Kutai,Papunesia,-0.333333333333,116.666666667,teng1267,vkt,Austronesian,,Malayo-Sumbawan,cCC7D51,vkt,false,false,ID,Fudiat-Suryadikara-et-al-1984
kuz,Kulamanen,Papunesia,7.75,125,mati1250,mbt,Austronesian,,Greater Central Philippine,cCC8E51,mbt,false,false,PH,Dubois-1976 Meiklejohn-and-Meiklejohn-1958
kwa,Kwaio,Papunesia,-8.95,161,kwai1243,kwd,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,kwd,false,false,SB,Keesing-1975 Keesing-1985
kwb,Kwerba,Papunesia,-2.25,138.5,nucl1595,kwe,Tor-Kwerba,,Kwerba,c803375,kwe,false,false,ID,Silzer-1976
kwe,Kanjobal (Western),North America,15.8333333333,-91.8333333333,west2635,knj,Mayan,,Mayan,cA951CC,knj,false,false,GT,Andres-et-al-1996 Stolz-1996 Zavala-1992
kwk,Kwakw'ala,North America,51,-127,kwak1269,kwk,Wakashan,,Northern Wakashan,cB4CC51,kwk,false,false,CA,Anderson-1984 Bach-1975 Boas-1900 Boas-1911a Boas-1947 Boas-and-Hunt-1905 Grubb-1977 Levine-1984 Newman-1950
kwm,Kwami,Africa,10.4166666667,11,kwaa1269,ksq,Afro-Asiatic,Chadic,West Chadic,cADCC51,ksq,false,false,NG,Leger-1994
kwn,Kwangali,Africa,-18,19.5,kwan1273,kwn,Niger-Congo,Benue-Congo,Bantu,cC3CC51,kwn,false,false,AO NA,Dammann-1957
kwo,Kwoma,Papunesia,-4.16666666667,142.75,kwom1262,kmo,Sepik,,Nukuma,cA0CC51,kmo,false,false,PG,Bowden-1997a Kooyers-1974 Kooyers-et-al-1971
kwr,Kwamera,Papunesia,-19.5833333333,169.416666667,kwam1252,tnk,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tnk,false,false,VU,Lindstrom-1986 Lindstrom-and-Lynch-1994
kws,Kawaiisu,North America,36,-117.5,kawa1283,xaw,Uto-Aztecan,,Northern Uto-Aztecan,c803633,xaw,false,false,US,Langacker-1976 Zigmond-et-al-1990-1991
kwt,Kwomtari,Papunesia,-3.5,141.5,nucl1593,kwo,,,,cCC51BC,kwo,false,false,PG,Spencer-2008
kwy,Iwoyo,Africa,-5.5,12.25,yomb1244,yom,Niger-Congo,Benue-Congo,Bantu,cC3CC51,yom,false,false,AO,Mingas-1994
kwz,Kwaza,South America,-12.5833333333,-60.6666666667,kwaz1243,xwa,,,,cCC51B6,xwa,false,false,BR,Aikhenvald-and-Dixon-1999 van-der-Voort-2000 van-der-Voort-2002 van-der-Voort-2004
kxo,Kxoe,Africa,-17.5,22.5,kxoe1243,xuu,Khoe-Kwadi,,Khoe-Kwadi,c803362,xuu,false,false,AO NA,Bohm-1985 Kohler-1981 Schladt-1998
kya,Kuku-Yalanji,Australia,-16,145,kuku1273,gvn,Pama-Nyungan,,Northern Pama-Nyungan,c336680,gvn,false,false,AU,Bybee-et-al-1994 Hershberger-1964b Hershberger-1979 Oates-1964b Oates-and-Oates-1964 Patz-2002 Wurm-1972a
kyg,Kenyang,Africa,5.66666666667,9.5,keny1279,ken,Niger-Congo,Benue-Congo,Mamfe,c805033,ken,false,false,CM,Ittmann-1935
kyk,Kyaka,Papunesia,-5.55,144.083333333,kyak1244,kyc,Trans-New Guinea,,Enga_Kewa-Huli,c803348,kyc,false,false,PG,Draper-and-Draper-2002
kyl,Kayah Li (Eastern),Eurasia,19,97.5,east2342,eky,Sino-Tibetan,Tibeto-Burman,Karen,c51CCC4,eky,false,true,TH MM,Solnit-1986 Solnit-1997
kym,Krymchak,Eurasia,45,34.25,krym1236,jct,Altaic,,Turkic,c778033,jct,false,false,UA,Rebi-et-al-1997
kyn,Koyukon,North America,65,-155,koyu1237,koy,Na-Dene,,Athapaskan,c8C51CC,koy,false,false,US,Chapman-1914 Henry-1969 Thompson-1989a
kyo,Kanyok,Africa,-7.33333333333,23.5833333333,kany1247,kny,Niger-Congo,Benue-Congo,Bantu,cC3CC51,kny,false,false,CD,Mukash-Kalel-1982 Stappers-1986b
kyp,Kayapó,South America,-9,-52,kaya1330,txu,Macro-Ge,Je,Je Setentrional,c807033,txu,false,false,BR,Maria-1914 Thomson-and-Stout-1974a Thomson-and-Stout-1974b Wiesemann-1986a
kyq,Kyuquot,North America,50.1666666667,-127.166666667,nuuc1236,nuk,Wakashan,,Southern Wakashan,c718033,nuk,false,false,CA,Rose-1981 Sapir-and-Swadesh-1939
kyr,Karkar-Yuri,Papunesia,-3.75,141.083333333,kark1258,yuj,Pauwasi,,Eastern Pauwasi,c803359,yuj,false,false,PG,Rigden-nd-a
kyt,Kaytej,Australia,-21,134,kayt1238,gbb,Pama-Nyungan,,Central Pama-Nyungan,c335F80,gbb,false,false,AU,
kyz,Kayabí,South America,-11,-55.5,kaya1329,kyz,Tupian,,Maweti-Guarani,cCC6351,kyz,false,false,BR,Dobson-1973 Dobson-1997 Dobson-2005 Gomes-2007
kzy,Komi-Zyrian,Eurasia,65,55,komi1268,kpv,Uralic,Finno-Ugric,Permic,c98CC51,kpv,false,false,RU,Bubrix-1949 Collinder-1957 Hausenberg-1998 Leinonen-2000 Lytkin-1966b Nichols-1992 Redei-1978 Tepljashina-and-Lytkin-1976 Zhilina-and-Baraksanov-1971
laa,Laal,Africa,10,17.6666666667,laal1242,gdm,,,,c803379,gdm,false,false,TD,Boyeldieu-1977 Boyeldieu-1982
lab,Labu,Papunesia,-6.75,146.916666667,labu1248,lbu,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,lbu,false,false,PG,Siegel-1984
lac,Lacandón,North America,17,-91.5,laca1243,lac,Mayan,,Mayan,cA951CC,lac,false,false,MX,Bruce-1968
lad,Ladakhi,Eurasia,34,78,lada1244,lbj,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,lbj,false,true,IN,Francke-1979 Grierson-1909 Koshal-1979 Malherbe-and-Rosenberg-1996
laf,Lafofa,Africa,10.25,31.25,lafo1243,laf,Kordofanian,,Lafofa,c5153CC,laf,false,false,SD,Stevenson-1957 Tucker-and-Bryan-1966
lag,Lagwan,Africa,11.5,14.8333333333,lagw1237,kot,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,kot,false,false,CM,Lukas-1936
lah,Lahu,Eurasia,20,98.1666666667,lahu1253,lhu,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,lhu,false,false,CN TH MM,Bybee-et-al-1994 Matisoff-1973 Matisoff-1988 Stolz-1996
lai,Lai,Eurasia,22.6666666667,93.6666666667,haka1240,cnh,Sino-Tibetan,Tibeto-Burman,Kuki-Chin,c51CCB8,cnh,false,false,MM,Bybee-et-al-1994 Hay-Neave-1953 Peterson-1999 Peterson-2003 Peterson-and-VanBik-2004
lak,Lak,Eurasia,42.1666666667,47.1666666667,lakk1252,lbe,Nakh-Daghestanian,Daghestanian,Lak,c7851CC,lbe,false,true,RU,Anderson-1997a Boguslavskaja-1989 Corbett-1991 Helmbrecht-1996 Khajdakov-1966b Klimov-and-Alekseev-1980 Murkelinskij-1967 Stolz-1996 Xajdakov-1963 Xajdakov-1966 Xajdakov-1980a Xajdakov-1980b Xajdakov-2001 Zhirkov-1955
lal,Lalo,Eurasia,25,100.25,xish1235,ywt,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,ywt,false,false,CN,Bjorverud-1998
lam,Lamé,Africa,9,14.5,peve1243,lme,Afro-Asiatic,Chadic,Masa,c718033,lme,false,false,TD CM,Sachnine-1982 Venberg-1975
lan,Lango,Africa,2.16666666667,33,lang1324,laj,Eastern Sudanic,Nilotic,Western Nilotic,cCC6E51,laj,true,true,UG,Noonan-1992 Okello-1975
lao,Lao,Eurasia,18,103,laoo1244,lao,Tai-Kadai,,Kam-Tai,c51CC8A,lao,false,false,LA TH,Bybee-et-al-1994 Hospitalier-1937 Malherbe-and-Rosenberg-1996 Marcus-1970 Morev-et-al-1979 Yates-and-Sayisthsena-1970
lar,Laragia,Australia,-12.6666666667,130.833333333,lara1258,lrg,Darwin Region,,Laragiya,c6F3380,lrg,false,false,AU,Capell-1984b
lat,Latvian,Eurasia,57,24,latv1249,lav,Indo-European,,Baltic,cCC5160,lav,false,true,LV,Bielenstein-1863 Budina-Lazdina-1966 Eckert-et-al-1994 Eckert-et-al-1998 Ekblom-1933 Endzelin-1922 Fennell-and-Gelsen-1980 Grabis-1965 Haspelmath-1997 Holst-2001 Holvoet-2001 Lazdina-1966 Malherbe-and-Rosenberg-1996 Markus-1987 Markus-1991 Mathiassen-1997 Nau-1998
lau,Lau,Papunesia,-9.58333333333,161.5,lauu1247,llu,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,llu,false,false,SB,Fox-1974
lav,Lavukaleve,Papunesia,-9.08333333333,159.2,lavu1241,lvk,Solomons East Papuan,,Lavukaleve,c51CCA1,lvk,true,true,SB,Terrill-1999 Terrill-2001b Terrill-2004
laz,Laz,Eurasia,41.5,41.5,lazz1240,lzz,Kartvelian,,Kartvelian,c80335C,lzz,false,false,GE TR,Dirr-1928 Holisky-1991b Kutscher-2001 Kutscher-et-al-1995 Liu-1995 Mattissen-1995 Stolz-1996
lbu,Lunda,Africa,-10.6666666667,24,lund1266,lun,Niger-Congo,Benue-Congo,Bantu,cC3CC51,lun,false,false,CD,Givon-and-Kawasha-1999 Kawasha-2003
lch,Lachi,Eurasia,22.6666666667,104.833333333,lach1248,lbt,Tai-Kadai,,Kadai,c338053,lbt,false,false,VN,
lcr,Lesser Antillean French Creole,North America,15,-61.1666666667,,,other,,Creoles and Pidgins,c333D80,acf gcf,false,false,MQ GY GD TT DM LC GP,Holm-1988
lda,Luganda,Africa,0.5,32.1666666667,gand1255,lug,Niger-Congo,Benue-Congo,Bantu,cC3CC51,lug,false,false,UG,Ashton-et-al-1954 Cole-1967 Malherbe-and-Rosenberg-1996 Welmers-1973
ldn,Ladin,Eurasia,46.5833333333,11.9166666667,ladi1250,lld,Indo-European,,Romance,cCC5154,lld,false,false,IT,Alton-1968
ldo,Londo,Africa,5,9.16666666667,orok1266,bdu,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bdu,false,false,CM,Kuperus-1985
ldu,Lendu,Africa,2,30.5,lend1245,led,Central Sudanic,,Lendu,c723380,led,false,false,CD,Tucker-1967 Tucker-and-Bryan-1966
leb,Lebeo,Africa,1.75,25,ngel1238,agh,Niger-Congo,Benue-Congo,Bantu,cC3CC51,agh,false,false,CD,Gerard-1924
lec,Leko,South America,-15,-67.9166666667,leco1242,lec,,,,c80337D,lec,false,false,BO,van-de-Kerke-2002
leg,Lega,Africa,-2.83333333333,27.1666666667,,lea,Niger-Congo,Benue-Congo,Bantu,cC3CC51,lea,false,false,CD,Botne-1995 Botne-2003 Meeussen-1971
lel,Lele,Africa,9.08333333333,15.5833333333,lele1276,lln,Afro-Asiatic,Chadic,East Chadic,cA7CC51,lln,false,false,TD,Frajzyngier-1996 Frajzyngier-2001
len,Lenakel,Papunesia,-19.45,169.25,lena1238,tnl,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tnl,false,false,VU,Lynch-1974 Lynch-1977 Lynch-1978
lep,Lepcha,Eurasia,27.1666666667,88.5,lepc1244,lep,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,lep,false,true,BT IN NP,Grierson-1909 Ju-1996 Mainwaring-1876 Mainwaring-1898 Mainwaring-1971 Plaisier-2003
les,Lese,Africa,2,29,lese1243,les,Central Sudanic,,Mangbutu-Efe,c6B3380,les,false,false,CD,Vorbichler-1965
let,Leti,Papunesia,-8.2,127.666666667,leti1246,lti,Austronesian,,Central Malayo-Polynesian,c807633,lti,false,false,ID,van-Engelenhoven-1995
lew,Lewo,Papunesia,-16.75,168.333333333,lewo1242,lww,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,lww,false,false,VU,Early-1994a Early-1994b
lez,Lezgian,Eurasia,41.6666666667,47.8333333333,lezg1247,lez,Nakh-Daghestanian,Daghestanian,Lezgic,c8051CC,lez,true,true,AZ RU,Gadzhiev-1963 Haspelmath-1993 Haspelmath-1997 Kodzasov-1990a Kodzasov-1999a
lga,Luangiua,Papunesia,-5.33333333333,159.416666667,onto1237,ojv,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,ojv,false,false,SB,Stolz-1996
lge,Low German,Eurasia,53,10,nort2627,nds,Indo-European,,Germanic,c803433,nds,false,false,DE,Lindow-et-al-1998
lgh,Lughat al-Isharat al-Lubnaniya,Eurasia,34,35.8333333333,jord1238,jos,other,,Sign Languages,c515CCC,jos,false,false,LB,
lgi,Langi,Africa,-4.5,36,lang1320,lag,Niger-Congo,Benue-Congo,Bantu,cC3CC51,lag,false,false,TZ,Seidel-1898
lgp,Língua Gestual Portuguesa,Eurasia,40,-8,port1277,psr,other,,Sign Languages,c515CCC,psr,false,false,PT,Amaral-et-al-1994
lgt,Logoti,Africa,3.5,30,logo1259,log,Central Sudanic,,Moru-Ma'di,cAC51CC,log,false,false,CD,Madragule-1986 Tucker-1967 Tucker-and-Bryan-1966
lgu,Longgu,Papunesia,-9.75,160.666666667,long1395,lgu,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,lgu,false,false,SB,Hill-1994 Hill-2002
lha,Laha,Eurasia,21.5833333333,103.916666667,laha1250,lha,Tai-Kadai,,Kadai,c338053,lha,false,false,VN,Solntseva-and-Xoang-1986
lho,Lhomi,Eurasia,27.6666666667,87.4166666667,lhom1239,lhm,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,lhm,false,false,NP,Vesalainen-and-Vesalainen-1980
lic,Hlai (Baoding),Eurasia,19,109.5,hlai1239,lic,Tai-Kadai,,Hlai,c51CC84,lic,false,false,CN,Ostapirat-2008
lii,Lingua Italiana dei Segni,Eurasia,42,13,ital1275,ise,other,,Sign Languages,c515CCC,ise,false,false,IT,Celo-1996 Radutzky-et-al-1992
lil,Lillooet,North America,50.75,-122,lill1248,lil,Salishan,,Interior Salish,c51B2CC,lil,false,false,CA,Matthewson-1998 Mithun-1999 van-Eijk-1985 van-Eijk-1997
lim,Limbu,Eurasia,27.1666666667,87.75,limb1266,lif,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,lif,false,false,BT IN NP,Noonan-2003c Weidert-and-Subba-1985 van-Driem-1987
lin,Lingala,Africa,2,18.5,ling1263,lin,Niger-Congo,Benue-Congo,Bantu,cC3CC51,lin,false,false,CD,Malherbe-and-Rosenberg-1996 Meeuwis-1998 Toporova-1973
lis,Lisu,Eurasia,26,98,lisu1250,lis,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,lis,false,false,CN MM,Bradley-1994 Bradley-2003 Hope-1974
lit,Lithuanian,Eurasia,55,24,lith1251,lit,Indo-European,,Baltic,cCC5160,lit,false,false,LT,Ambrazas-1997 Ambrazas-et-al-1966 Augustitis-1964 Baravykas-1967 Dambriunas-et-al-1966 Eckert-et-al-1994 Eckert-et-al-1998 Geniusiene-2007 Girdenis-1985 Haspelmath-1997 Leskien-1919 Malherbe-and-Rosenberg-1996 Mathiassen-1996 Otrebski-1958-1965 Senn-1966 Young-1991
liv,Liv,Eurasia,56.8333333333,24,livv1244,liv,Uralic,Finno-Ugric,Finnic,c5B8033,liv,false,false,LV,Laanest-1982 Sjogren-1861
lje,Lauje,Papunesia,-0.5,120,lauj1238,law,Austronesian,,Celebic,c803F33,law,false,false,ID,Himmelmann-1991
lkk,Lakkia,Eurasia,24.0833333333,110.166666667,lakk1238,lbc,Tai-Kadai,,Kadai,c338053,lbc,false,false,CN,Haudricourt-1967 Solnit-1988
lkt,Lakhota,North America,43.8333333333,-101.833333333,lako1247,lkt,Siouan,,Mississippi Valley Siouan,c7A8033,lkt,true,true,US,Berg-1981 Boas-and-Deloria-1941 Boas-and-Swanton-1911 Buechel-1939 Carter-1974 Faltz-1995 Ingham-2001 Levin-1964 Riggs-1893 Rood-2001 Rood-and-Taylor-1996 Russell-1999 Van-Valin-1977
lla,Lamu-Lamu,Australia,-14.8333333333,144.5,lamu1254,lby,Pama-Nyungan,,Northern Pama-Nyungan,c336680,lby,false,false,AU,Laycock-1971
llm,Lelemi,Africa,7.33333333333,0.5,lele1264,lef,Niger-Congo,Kwa,Na-Togo,c51CCB5,lef,false,false,GH,Hoftmann-1971
lma,Loma,Africa,8,-9.5,loma1260,lom,Mande,,Western Mande,c6751CC,lom,false,false,GN LR,
lmb,Lamba,Africa,-13,28,lamb1271,lam,Niger-Congo,Benue-Congo,Bantu,cC3CC51,lam,false,false,CD ZM,Doke-1922
lmg,Lamang,Africa,11.25,13.5833333333,lama1288,hia,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,hia,false,false,NG,Wolff-1983
lmh,Lamaholot,Papunesia,-8.25,122.916666667,lama1277,slp,Austronesian,,Central Malayo-Polynesian,c807633,slp,false,false,ID,Arndt-1937 Nishiyama-and-Kelen-2007
lml,Limilngan,Australia,-12.5,131.916666667,nucl1327,lmc,Darwin Region,,Limilngan,c807133,lmc,false,false,AU,Harvey-2001
lmn,Lamani,Eurasia,17,77,lamb1269,lmn,Indo-European,,Indic,cCC5351,lmn,false,false,IN,Trail-1970
lmp,Lampung,Papunesia,-5,105,lamp1243,ljp,Austronesian,,Lampungic,cCCAF51,ljp,false,false,ID,Junaiyah-1985 Walker-1975a Walker-1976
lmu,Lamen,Papunesia,-16.5833333333,168.166666667,lame1260,lmu,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,lmu,false,false,VU,Early-2002b
lnd,Linda,Africa,6.5,20.75,band1344,liy,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,liy,false,false,CF,Cloarec-Heiss-1986 Cloarec-Heiss-1995 Tisserant-1930
lng,Lengua,South America,-22.5,-59,leng1262,enx,Mascoian,,Mascoian,c713380,enx,false,false,PY,Susnik-1977
lnj,Linngithig,Australia,-12.5,142.83,leni1238,lnj,Pama-Nyungan,,Northern Pama-Nyungan,c336680,lnj,false,false,AU,
lno,Ladino,Eurasia,40,33,ladi1251,lad,Indo-European,,Romance,cCC5154,lad,false,false,TR IL,Hetzer-2001 Varol-1998
lns,Lamnso',Africa,6.16666666667,10.75,lamn1239,lns,Niger-Congo,Benue-Congo,Wide Grassfields,c7D3380,lns,false,false,CM,
lnw,Lonwolwol,Papunesia,-16.2166666667,168,lonw1238,crc,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,crc,false,false,VU,Paton-1971 Paton-1973
lob,Lobi,Africa,10.5,-3.25,lobi1245,lob,Niger-Congo,Gur,Lobiri-Jaane,c443380,lob,false,false,BF CI,Becuwe-1982 Kambou-2000
lok,Loko,Africa,9.33333333333,-12.0833333333,loko1255,lok,Mande,,Western Mande,c6751CC,lok,false,false,SL,Innes-1964
lon,Loniu,Papunesia,-2.06666666667,147.333333333,loni1238,los,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,los,false,false,PG,Hamel-1985 Hamel-1994
lot,Lotha,Eurasia,26.5,94.25,loth1237,njh,Sino-Tibetan,Tibeto-Burman,Central Naga,c803350,njh,false,false,IN,Acharya-1983
lou,Lou,Papunesia,-2.38333333333,147.316666667,louu1245,loj,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,loj,false,false,PG,Stutzman-1997
lov,Loven,Eurasia,15,106.333333333,lave1248,lbo,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,lbo,false,false,LA,
loz,Lozi,Africa,-17.8333333333,26,lozi1239,loz,Niger-Congo,Benue-Congo,Bantu,cC3CC51,loz,false,false,ZM,Gowlett-1967 Mwisiya-1977
lrd,Lardil,Australia,-16.5,139.333333333,lard1243,lbz,Tangkic,,Tangkic,c51CCA4,lbz,false,false,AU,Evans-1995 Klokeid-1976
lrk,Larike,Papunesia,-3.75,127.916666667,lari1255,alo,Austronesian,,Central Malayo-Polynesian,c807633,alo,false,false,ID,Laidig-1992 Laidig-1993 Laidig-and-Laidig-1991 Laidig-and-Laidig-1995
lsa,Lengua de Señas Argentina,South America,-34,-63,arge1236,aed,other,,Sign Languages,c515CCC,aed,false,false,AR,Veinberg-1993 Veinberg-nd
lsb,Língua de Sinais Brasileira,South America,-15,-48,braz1236,bzs,other,,Sign Languages,c515CCC,bzs,false,false,BR,
lse,Lengua de Señas Española,Eurasia,40,-3,span1263,ssp,other,,Sign Languages,c515CCC,ssp,false,false,ES,
lsf,Langue des Signes Française,Eurasia,47,3,fren1243,fsl,other,,Sign Languages,c515CCC,fsl,false,false,FR,Moody-et-al-1983 Moody-et-al-1986
lsq,Langue des Signes Québecoise,North America,48,-75,queb1245,fcs,other,,Sign Languages,c515CCC,fcs,false,false,CA,Berthiaume-and-Rinfret-2000 Dubuisson-et-al-1999
lu,Lü,Eurasia,22,100.666666667,luuu1242,khb,Tai-Kadai,,Kam-Tai,c51CC8A,khb,false,false,CN LA MM,Li-1964 Morev-1978
lua,Lua,Africa,9.75,17.75,niel1243,nie,Niger-Congo,Adamawa-Ubangi,Bua,c67CC51,nie,false,false,TD,Boyeldieu-1985
luc,Lucazi,Africa,-14,20,luch1239,lch,Niger-Congo,Benue-Congo,Bantu,cC3CC51,lch,false,false,AO,Fleisch-2001
lud,Lun Dayeh,Papunesia,4,115.916666667,lund1271,lnd,Austronesian,,North Borneo,c804E33,lnd,false,false,ID,Omar-1983
lug,Lugbara,Africa,3.08333333333,30.9166666667,lugb1240,lgg,Central Sudanic,,Moru-Ma'di,cAC51CC,lgg,false,false,CD UG,Anderson-1986 Barr-1965 Crazzolara-1960 Nichols-1992 Stolz-1996 Tucker-and-Bryan-1966
lui,Luiseño,North America,33.3333333333,-117.166666667,luis1253,lui,Uto-Aztecan,,Northern Uto-Aztecan,c803633,lui,false,false,US,Akmajian-et-al-1979 Bright-1965a Bright-1968 Hyde-1971 Kroeber-and-Grace-1960 Langacker-1976 Malecot-1963a Malecot-1963b Munro-1976a Munro-1990 Nichols-1992 Stolz-1996
lul,Lule,South America,-28,-64,lule1238,ule,,,,c783380,ule,false,false,AR,Adelaar-2004
lum,Lummi,North America,48.7,-122.666666667,stra1244,str,Salishan,,Central Salish,c51ADCC,str,false,false,US,Thompson-et-al-1974
lun,Lungchang,Eurasia,27.5,96.4166666667,lung1248,nst,Sino-Tibetan,Tibeto-Burman,Brahmaputran,c6C51CC,nst,false,false,IN,Rekhung-1988b
luo,Luo,Africa,-0.5,34.75,luok1236,luo,Eastern Sudanic,Nilotic,Western Nilotic,cCC6E51,luo,false,false,KE TZ,Creider-1994 Gregersen-1961 Malherbe-and-Rosenberg-1996 Okombo-1997 Omondi-1982 Stafford-1967 Tucker-1994 Tucker-and-Bryan-1966
lur,Luri,Eurasia,33.5,48.5,nort2645,lrc,Indo-European,,Iranian,c803335,lrc,false,false,IR,
lus,Lushootseed,North America,48,-122,lush1252,lut,Salishan,,Central Salish,c51ADCC,lut,false,false,US,Bates-et-al-1994 Urbanczyk-1996
luv,Luvale,Africa,-12,22,luva1239,lue,Niger-Congo,Benue-Congo,Bantu,cC3CC51,lue,true,true,AO,Horton-1949 White-1949
lux,Luxemburgeois,Eurasia,49.8333333333,6.16666666667,luxe1241,ltz,Indo-European,,Germanic,c803433,ltz,false,false,LU,Malherbe-and-Rosenberg-1996
luy,Luyia,Africa,0.416666666667,34.5,luyi1234,luy,Niger-Congo,Benue-Congo,Bantu,cC3CC51,luy,false,false,KE,Appleby-1961
lye,Lyele,Africa,12.5,-2.66666666667,lyel1241,lee,Niger-Congo,Gur,Grusi,c448033,lee,false,false,BF,Showalter-1986
ma,Ma,Africa,3.5,28,made1252,msj,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,msj,false,false,CD,Tucker-and-Bryan-1966
maa,Maasai,Africa,-3,36,masa1300,mas,Eastern Sudanic,Nilotic,Southern Nilotic,c807733,mas,false,false,KE TZ,Hollis-1905 Konig-1993 Mol-1995 Nichols-1992 Tucker-and-Bryan-1966 Tucker-and-Mpaayei-1955
mab,Maba,Africa,13.75,20.8333333333,maba1277,mde,Maban,,Maban,c80337E,mde,false,true,TD,Lukas-1933 Trenga-1947 Tucker-and-Bryan-1966
mac,Macushi,South America,4,-60,macu1259,mbc,Cariban,,Cariban,cCC9251,mbc,false,false,GY BR VR,Abbott-1991 Carson-1982 Hawkins-1950 Williams-1932
mad,Ma'di,Africa,3.25,31.5,madi1260,mhi,Central Sudanic,,Moru-Ma'di,cAC51CC,mhi,false,false,UG SS,Blackings-and-Fabb-2003 Molinaro-1925 Tucker-1967 Tucker-and-Bryan-1966
mae,Mae,Papunesia,-16,167.25,emae1237,mmw,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mmw,false,false,VU,Capell-1962a
mag,Magar,Eurasia,28,83,east2352,mgp,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,mgp,false,false,NP,Shepherd-and-Shepherd-1973
mah,Mari (Hill),Eurasia,57,58,west2392,mrj,Uralic,Finno-Ugric,Mari,c92CC51,mrj,false,false,RU,Alhoniemi-1993 Itkonen-1955 Kangasmaa-Minn-1998 Kovedjaeva-1966b
mai,Maithili,Eurasia,26,86,mait1250,mai,Indo-European,,Indic,cCC5351,mai,false,false,IN NP,Bybee-et-al-1994 Davis-1973a Davis-1984 Grierson-1903 Jha-1958 Yadav-1984 Yadav-1996 Yadav-2003
maj,Majang,Africa,6.75,35,maja1242,mpe,Eastern Sudanic,Surmic,Majang,c338071,mpe,false,false,ET,Bender-1983b Unseth-1989 Unseth-1991
mak,Makah,North America,48.3333333333,-124.666666667,maka1318,myh,Wakashan,,Southern Wakashan,c718033,myh,true,true,US,Davidson-2002 Jacobsen-1979 Jacobsen-1986 Jacobsen-1999
mal,Malagasy,Africa,-20,47,plat1254,plt,Austronesian,,Barito,c807833,plt,true,true,MG,Bennett-1986 Builles-1998 Comrie-1981b Dahl-1951 Dahl-1952 Dez-1980a Dez-1980b Dez-1990 Domenichini-Ramiaramanana-1977 Dyen-1971b Ferrand-1903 Kartashova-1993 Keenan-1976 Keenan-2000 Korneev-1966 Malherbe-and-Rosenberg-1996 Manaster-Ramer-1995 Paginton-1970 Rabenilaina-1983 Rajaonarimanana-1995 Rajemisa-Raolison-1969 Rajomarimanana-and-Verin-1997 Randriamasimanana-1986 Randriambeloma-1985 Rasoloson-1997 Rasoloson-and-Rubino-2004 Richardson-1885
mam,Mam,North America,15,-91.8333333333,mamm1241,mam,Mayan,,Mayan,cA951CC,mam,false,false,GT,Collins-1994 Dudley-and-Peck-1966 England-1983 Kaufman-1969 Rojas-Ramirez-et-al-1992
man,Mano,Africa,7,-9,mann1248,mev,Mande,,Eastern Mande,c403380,mev,false,false,GN LR,Becker-Donner-1965 Bybee-et-al-1994
mao,Maori,Papunesia,-40,176,maor1246,mri,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mri,false,true,NZ,Bauer-1981 Bauer-1982b Bauer-1993 Biggs-1994 Dahl-1985 Harlow-1996 Hohepa-1967 Ngata-nd Polinsky-2001 Rere-1965 Williams-1971
map,Mapudungun,South America,-38,-72,mapu1245,arn,Araucanian,,Araucanian,c7C8033,arn,true,true,CL,Augusta-1903 Calendino-1987 De-Augusta-1903 Echeverria-and-Contreras-1965 Nichols-1992 Salas-1984 Salas-1991 Salas-1992 Smeets-1989 Suarez-1959 Zuniga-2000 de-Moesbach-1962
mar,Maricopa,North America,33.1666666667,-113.166666667,mari1440,mrc,Hokan,,Yuman,cCC6151,mrc,true,true,US,Gordon-1986
mas,Masa,Africa,10.5,15.5,masa1322,mcn,Afro-Asiatic,Chadic,Masa,c718033,mcn,false,false,TD CM,Caitucoli-1986 Melis-1999
mau,Maung,Australia,-11.9166666667,133.5,maun1240,mph,Iwaidjan,,Iwaidjan,c807333,mph,true,true,AU,Bybee-et-al-1994 Capell-and-Hinch-1970 Curnow-1999 Donohue-1998 Evans-2000 Nichols-1992
mav,Maring,Papunesia,-5.5,144.666666667,mari1435,mbw,Trans-New Guinea,,Chimbu-Wahgi,c51CC7C,mbw,false,false,PG,
maw,Maninka (Western),Africa,13,-11,west2500,mlq,Mande,,Western Mande,c6751CC,mlq,false,false,ML,Creissels-1983 Delafosse-1929 Friedlander-1992 Tokarskaja-1964
max,Maxakalí,South America,-18,-40,maxa1247,mbl,Macro-Ge,,Maxakalian,c33805C,mbl,false,false,BR,Gudschinsky-et-al-1970 Popovich-1986 Popovich-and-Popovich-2005 Rodrigues-1999b
may,Maybrat,Papunesia,-1.33333333333,132.5,maib1239,ayz,,,,cCCC851,ayz,true,true,ID,Brown-1990 Dol-1999 Reesink-1996
maz,Mazahua,North America,19.4166666667,-99.9166666667,maza1293,maz,Oto-Manguean,,Otomian,c334480,maz,false,false,MX,Spotts-1953 Stewart-and-Stewart-1954
mba,Mba,Africa,1,25,mbaa1245,mfc,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,mfc,false,false,CD,Pasch-1986 Tucker-and-Bryan-1966
mbb,Mbabaram,Australia,-17.1666666667,145,mbab1239,vmb,Pama-Nyungan,,Northern Pama-Nyungan,c336680,vmb,false,false,AU,Dixon-1966a Dixon-1966b Dixon-1970 Dixon-1991b
mbe,Mbere,Africa,-0.5,14,mber1257,mdt,Niger-Congo,Benue-Congo,Bantu,cC3CC51,mdt,false,false,CG GA,Adam-1954
mbg,Mbugu,Africa,-4.33333333333,38.1666666667,mbug1240,mhd,Afro-Asiatic,Cushitic,Southern Cushitic,c688033,mhd,false,false,TZ,
mbi,Mbili,Africa,6.11666666667,10.2,bamb1266,baw,Niger-Congo,Benue-Congo,Bantu,cC3CC51,baw,false,false,CM,Ayuninjam-1998
mbl,Mbole,Africa,-0.666666666667,24.6666666667,mbol1247,mdq,Niger-Congo,Benue-Congo,Bantu,cC3CC51,mdq,false,false,CD,De-Rop-1971
mbm,Mbum,Africa,7.75,13.1666666667,mbum1254,mdd,Niger-Congo,Adamawa-Ubangi,Mbumic,c7ECC51,mdd,false,false,CF TD CM,Hagege-1970
mbo,Monumbo,Papunesia,-4.25,145,nucl1458,mxk,Bogia,,Bogia,c33806A,mxk,false,false,PG,Vormann-and-Scharfenberger-1914
mbr,Mbara,Africa,11,15.4166666667,mbar1260,mpk,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,mpk,false,false,TD,Tourneux-et-al-1986
mbt,Mangbetu,Africa,2.5,26.5,mang1394,mdj,Central Sudanic,,Mangbetu,cA051CC,mdj,false,false,CD,Larochette-1958 Tucker-and-Bryan-1966 Vekens-1928
mbu,Manambu,Papunesia,-4.25,142.833333333,mana1298,mle,Sepik,,Ndu,c6B8033,mle,false,false,PG,
mby,Mbay,Africa,8.25,17.5,mbay1241,myb,Central Sudanic,,Bongo-Bagirmi,c643380,myb,false,false,TD,Caprile-1977b Fortier-1971 Keegan-1996 Keegan-1997
mbz,Mbe',Africa,6.28333333333,11.0833333333,mbee1250,mtk,Niger-Congo,Benue-Congo,Bantu,cC3CC51,mtk,false,false,CM,
mca,Maca,South America,-25,-57.5,maca1260,mca,Matacoan,,Matacoan,cB451CC,mca,false,false,PY,Hunt-1915
mcc,Mochica,South America,-7.5,-79.3333333333,moch1259,omc,,,,c338054,omc,false,false,PE,Adelaar-2004
mcd,Macedonian,Eurasia,41.6666666667,21.75,mace1250,mkd,Indo-European,,Slavic,c803338,mkd,false,false,MK,De-Bray-1980b Foulon-Hristova-1997 Friedman-1993 Groen-1977 Lunt-1952
mce,Mískito Coast English Creole,North America,16.25,-88.8333333333,nica1252,bzk,other,,Creoles and Pidgins,c333D80,bzk,false,false,BZ,Holm-1988
mcf,Michif,North America,52,-100.166666667,mich1243,crg,Algic,,Algonquian,c758033,crg,false,false,CA,Bakker-1997
mcg,Macaguán,South America,6.5,-71.3333333333,maca1259,mbn,Guahiban,,Guahiban,cCC6751,mbn,false,false,CO,Huber-and-Reed-1992
mch,Machiguenga,South America,-12,-72.6666666667,mach1267,mcb,Arawakan,,Pre-Andine Arawakan,cCC5451,mcb,false,false,PE,Snell-and-Wise-1963 de-Snell-1974
mcn,Macuna,South America,-0.333333333333,-70.1666666667,macu1260,myy,Tucanoan,,Tucanoan,c6FCC51,myy,false,false,CO BR,Huber-and-Reed-1992
mco,Mixe (Coatlán),North America,16.9166666667,-95.6666666667,coat1238,mco,Mixe-Zoque,,Mixe-Zoque,cA351CC,mco,false,false,MX,Noordsy-and-Hoogshagen-1993 Van-Haitsma-and-Van-Haitsma-1976
mcr,Mauritian Creole,Africa,-20.3333333333,57.5,mori1278,mfe,other,,Creoles and Pidgins,c333D80,mfe,false,false,MU,Baker-1972
mcs,Miwok (Central Sierra),North America,38,-120.333333333,cent2140,csm,Penutian,Utian,Miwok,c335D80,csm,false,false,US,Freeland-1951 Freeland-and-Broadbent-1960 Hamp-1966
mcv,Mocoví,South America,-28,-60.5,moco1246,moc,Guaicuruan,,Qom,cCC8551,moc,false,false,AR,Flury-1951 Grondona-1998
mda,Mada (in Cameroon),Africa,10.8333333333,14.1666666667,mada1293,mxu,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,mxu,false,false,CM,Barreteau-and-Brunet-2000
mdb,Mudburra,Australia,-17.3333333333,132.083333333,mudb1240,dmw,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,dmw,false,false,AU,
mde,Mende,Africa,7.83333333333,-11.5,mend1266,men,Mande,,Western Mande,c6751CC,men,false,false,SL,Aginsky-1935 Innes-1971
mdg,Mundang,Africa,9.66666666667,14.5,mund1325,mua,Niger-Congo,Adamawa-Ubangi,Mbumic,c7ECC51,mua,false,false,TD,Elders-2000
mdk,Mandinka,Africa,13,-15.6666666667,mand1436,mnk,Mande,,Western Mande,c6751CC,mnk,false,false,ML SN GN,Creissels-1983 Hamlyn-1935 Nichols-1992 Rowlands-1959
mdl,Matngele,Australia,-13.8333333333,130.416666667,madn1237,zml,Eastern Daly,,Eastern Daly,c338058,zml,false,false,AU,Tryon-1974
mdm,Madimadi,Australia,-34.5,143.5,west2443,dmd,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,dmd,false,false,AU,Hercus-1969a Hercus-1986a
mdn,Mandan,North America,46.5,-102.5,mand1446,mhq,Siouan,,Mandan,c803E33,mhq,false,false,US,Carter-1991 Kennard-1936 Mixco-1997
mdo,Mbodomo,Africa,4.5,15.5,gbay1281,gmm,Niger-Congo,,Gbaya-Manza-Ngbaka,c803336,gmm,false,false,CF,Boyd-1997
mdr,Madurese,Papunesia,-7,113.5,nucl1460,mad,Austronesian,,Malayo-Sumbawan,cCC7D51,mad,false,false,ID,Davies-1999 Stevens-1968 Stevens-1994 Sugiarto-1993
mds,Manadonese,Papunesia,1.5,124.833333333,mala1481,xmm,Austronesian,,Malayo-Sumbawan,cCC7D51,xmm,false,false,ID,Wantalangi-1993 den-Besten-2001
mdu,Mündü,Africa,4.5,30,mund1326,muh,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,muh,false,false,CD SS,
mdw,Mbosi,Africa,-1.25,15.5,mbos1242,mdw,Niger-Congo,Benue-Congo,Bantu,cC3CC51,mdw,false,false,CG,Amboulou-1998
mdz,Mada (in Nigeria),Africa,8.75,8.25,mada1282,mda,Niger-Congo,Benue-Congo,Benue-Congo Plateau,cB1CC51,mda,false,false,NG,Price-1989
mea,Meyah,Papunesia,-1.16666666667,133.5,meya1236,mej,East Bird's Head,,East Bird's Head,cCC7851,mej,false,false,ID,Gravelle-2002 Gravelle-2004 Gravelle-and-Gravelle-1991
meb,Melayu Betawi,Papunesia,-6.5,107,beta1252,bew,other,,Creoles and Pidgins,c333D80,bew,false,false,ID,Ikranegara-1980 Wallace-1976
mee,Me'en,Africa,5,37,meen1242,mym,Eastern Sudanic,Surmic,South Surmic,c806933,mym,false,false,ET,Will-1989
meh,Mehri,Eurasia,17,51.5,mehr1241,gdq,Afro-Asiatic,,Semitic,cB3CC51,gdq,false,false,YE OM,Bauer-1991 Lonnet-and-Simeone-Senelle-1997 Simeone-Senelle-1997 Wagner-1953
mei,Meithei,Eurasia,24.75,94,mani1292,mni,Sino-Tibetan,Tibeto-Burman,Manipuri,c80337B,mni,true,true,IN,Abbi-1992 Bhat-1991 Bhat-and-Ningomba-1997 Chelliah-1997 Grierson-1904
mek,Mekens,South America,-12.5,-61.5,saki1248,skf,Tupian,,Tupari,c75CC51,skf,false,false,BR,Galucio-2001
mel,Melanau,Papunesia,2.5,111.5,cent2101,mel,Austronesian,,North Borneo,c804E33,mel,false,false,MY,Omar-1983
mem,Manem,Papunesia,-3,140.833333333,mane1266,jet,Border,,Border,cCC9E51,jet,false,false,ID PG,Voorhoeve-1975
men,Menomini,North America,45.5,-88.3333333333,meno1252,mez,Algic,,Algonquian,c758033,mez,false,false,US,Bloomfield-1962 Miner-1975 Pesetsky-1979
mer,Meryam Mir,Papunesia,-9.91666666667,144.083333333,meri1244,ulk,Eastern Trans-Fly,,Eastern Trans-Fly,c8FCC51,ulk,false,false,AU,Passi-and-Piper-1999 Piper-1989
mey,Menya,Papunesia,-7.25,146,meny1245,mcr,Trans-New Guinea,,Nuclear Angan,c5187CC,mcr,false,false,PG,Whitehead-2005
mga,Mondunga,Africa,2.25,21.5,ndun1249,ndt,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,ndt,false,false,CD,De-Boeck-1952 Tucker-and-Bryan-1966
mgd,Mongondow,Papunesia,0.666666666667,124,mong1342,mog,Austronesian,,Greater Central Philippine,cCC8E51,mog,false,false,ID,Dunnebier-1929
mgg,Mangghuer,Eurasia,36,102,tuuu1240,mjg,Altaic,,Mongolic,cBECC51,mjg,false,false,CN,De-Smedt-and-Mostaert-1964 Slater-2003 Stolz-1996 Todaeva-1973 Todaeva-1997a
mgh,Magahi,Eurasia,23.5,85.5,maga1260,mag,Indo-European,,Indic,cCC5351,mag,false,false,IN,Verma-2003b
mgi,Magi,Papunesia,-10.3333333333,149.333333333,mail1248,mgu,Trans-New Guinea,,Mailuan,c69CC51,mgu,false,false,PG,Thomson-1975a
mgk,Mungaka,Africa,5.91666666667,10,mung1266,mhk,Niger-Congo,Benue-Congo,Bantu,cC3CC51,mhk,false,false,CM,Tischhauser-1992
mgl,Mingrelian,Eurasia,42.5,42,ming1252,xmf,Kartvelian,,Kartvelian,c80335C,xmf,false,false,GE,Harris-1991
mgn,Magindanao,Papunesia,6.83333333333,124.5,magu1243,mdh,Austronesian,,Greater Central Philippine,cCC8E51,mdh,false,false,PH,Llamzon-1978
mgo,Mongo,Africa,0,21,mong1338,lol,Niger-Congo,Benue-Congo,Bantu,cC3CC51,lol,false,false,CD,Hulstaert-1965 Hulstaert-1966
mgq,Mango,Africa,8.75,17,mang1398,mge,Central Sudanic,,Bongo-Bagirmi,c643380,mge,false,false,TD,Khamis-1983
mgu,Musgu,Africa,10.8333333333,14.9166666667,musg1254,mug,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,mug,false,false,TD CM,Meyer-Bahlburg-1972 Tourneaux-1978
mhc,Mahican,North America,42.6666666667,-73.5,mohe1244,xpq,Algic,,Algonquian,c758033,xpq,false,false,US,Masthay-1991
mhi,Marathi,Eurasia,19,76,mara1378,mar,Indo-European,,Indic,cCC5351,mar,false,false,IN,Abbi-1992 Berntsen-1975 Emeneau-1980 Gil-1994b Malherbe-and-Rosenberg-1996 Pandharipande-1997 Stolz-1996 Wali-2000
mhk,Mehek,Papunesia,-3.75,142.5,mehe1243,nux,Sepik,,Tama Sepik,c337E80,nux,false,false,PG,Laycock-and-Zgraggen-1975
mhl,Miri (Hill):,Eurasia,27.9166666667,93.8333333333,misi1242,mrg,Sino-Tibetan,Tibeto-Burman,Tani,c51CCBE,mrg,false,false,IN,Simon-1976
mhm,Mah Meri,Eurasia,2.83333333333,101.5,besi1244,mhe,Austro-Asiatic,Mon-Khmer,Aslian,c7E8033,mhe,false,false,MY,
mhu,Mbalanhu,Africa,-17.5,15,mbal1255,lnb,Niger-Congo,Benue-Congo,Bantu,cC3CC51,lnb,false,false,NA,Fourie-1993
mic,Micmac,North America,45,-63,mikm1235,mic,Algic,,Algonquian,c758033,mic,false,false,CA,DeBlois-and-Metallic-1984 Hewson-and-Francis-1990
mid,Midob,Africa,15.0833333333,26.25,mido1240,mei,Eastern Sudanic,,Nubian,c8951CC,mei,false,false,SD,Thelwall-1983 Werner-1993
mie,Mien,Eurasia,25,111,iumi1238,ium,Hmong-Mien,,Mienic,c6151CC,ium,false,false,CN,Court-1985 Mao-and-Tsu-yao-1972 Mao-et-al-1982 Purnell-1965
mig,Migama,Africa,12.1666666667,19.8333333333,miga1249,mmy,Afro-Asiatic,Chadic,East Chadic,cA7CC51,mmy,false,false,TD,Jungraithmayr-and-Adams-1992
mii,Miisiirii,Africa,13.5,22,miis1236,,Eastern Sudanic,,Taman,c4E3380,,false,false,TD SD,Edgar-1989
mij,Miju,Eurasia,29,96,miju1243,mxj,Sino-Tibetan,Tibeto-Burman,Kman-Meyor,c353380,mxj,false,false,IN,Boro-1978 Das-Gupta-1977
mik,Mikir,Eurasia,26.3333333333,93.5,karb1241,mjw,Sino-Tibetan,Tibeto-Burman,Karbic,c806533,mjw,false,false,IN,Grussner-1978 Jeyapaul-1987 Konwar-2001
mil,Milang,Eurasia,28.5,95.25,mila1245,,Sino-Tibetan,Tibeto-Burman,Tani,c51CCBE,,false,false,IN,Tayeng-1976
min,Minangkabau,Papunesia,-1,101,mina1268,min,Austronesian,,Malayo-Sumbawan,cCC7D51,min,false,false,ID,Adelaar-1995a Moussay-1981 van-der-Toorn-1899
mir,Miriwung,Australia,-15.6666666667,129,miri1266,mep,Jarrakan,,Jarrakan,c51CC98,mep,false,false,AU,Kofod-1978
mis,Miskito,North America,14,-83.6666666667,misk1235,miq,Misumalpan,,Misumalpan,c663380,miq,false,false,NI,Adam-1891 Anonymous-1985 CIDCA-1985 Conzemius-1929 Hale-1994 Heath-and-Marx-1961 Nichols-1992 Thaeler-and-Thaeler-nd
mit,Mituku,Africa,-1.66666666667,25.5,mitu1240,zmq,Niger-Congo,Benue-Congo,Bantu,cC3CC51,zmq,false,false,CD,Stappers-1973
miy,Miya,Africa,10.9166666667,9.66666666667,miya1266,mkf,Afro-Asiatic,Chadic,West Chadic,cADCC51,mkf,false,false,NG,Schuh-1998
miz,Mizo,Eurasia,23.1666666667,92.8333333333,lush1249,lus,Sino-Tibetan,Tibeto-Burman,Kuki-Chin,c51CCB8,lus,false,false,BD IN,Chhangte-1989 Lorrain-and-Savidge-1898 Lorrain-and-Savidge-1984 Murthy-and-Subbarao-2000
mja,Mixtec (Jamiltepec),North America,16.25,-97.8333333333,jami1235,mxt,Oto-Manguean,Mixtecan,Mixtec,c338080,mxt,false,false,MX,Johnson-1988
mjc,Mixtec (San Juan Colorado),North America,16.5,-98,sanj1281,mjc,Oto-Manguean,Mixtecan,Mixtec,c338080,mjc,false,false,MX,Campbell-et-al-1986
mjk,Manjaku,Africa,12,-16.25,mand1419,mfv,Niger-Congo,North-Central Atlantic,Manjaku,c9ACC51,mfv,false,false,GW,Buis-1990
mka,Mauka,Africa,8.33333333333,-7.5,maho1249,mxx,Mande,,Western Mande,c6751CC,mxx,false,false,CI,Ebermann-1986a
mkb,Miwok (Bodega),North America,38.3333333333,-123,coas1301,csi,Penutian,Utian,Miwok,c335D80,csi,false,false,US,Callaghan-1970
mkd,Makonde,Africa,-11,40,mako1251,kde,Niger-Congo,Benue-Congo,Bantu,cC3CC51,kde,false,false,MZ TZ,Harries-1940
mke,Mekeo,Papunesia,-8.33333333333,146.5,meke1243,mek,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mek,false,false,PG,Jones-1998a
mkg,Mandinka (Gambian),Africa,13.4166666667,-16,mand1436,mnk,Mande,,Western Mande,c6751CC,mnk,false,false,GM,Rowlands-1959
mkh,Mongol (Khamnigan),Eurasia,49,117,kham1281,,Altaic,,Mongolic,cBECC51,,false,false,CN MN,Janhunen-2003
mki,Mikasuki,North America,32,-85,mika1239,mik,Muskogean,,Muskogean,c9251CC,mik,false,false,US,Boynton-1982
mkj,Makasae,Papunesia,-8.66666666667,126.5,maka1316,mkz,Greater West Bomberai,Timor-Alor-Pantar,East Timor,c51B5CC,mkz,false,false,TL,Huber-2008
mkl,Maklew,Papunesia,-7.66666666667,139.416666667,makl1246,mgf,Bulaka River,,Bulaka River,cCC9B51,mgf,false,false,ID,Boelaars-1950
mkn,Mankanya,Africa,12.0833333333,-15.9166666667,mank1251,knf,Niger-Congo,North-Central Atlantic,Manjaku,c9ACC51,knf,false,false,GW,Trifkovic-1969
mko,Mokilko,Africa,11.9166666667,18.0833333333,muku1242,moz,Afro-Asiatic,Chadic,East Chadic,cA7CC51,moz,false,false,TD,Jungraithmayr-1990
mkq,Mankon,Africa,6,10.1666666667,ngem1255,nge,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nge,false,false,CM,Leroy-2003
mkr,Mikarew,Papunesia,-4.41666666667,144.916666667,arua1260,msy,Lower Sepik-Ramu,Ramu,Mikarew,c7B3380,msy,false,false,PG,ZGraggen-1969
mks,Makassar,Papunesia,-5.41666666667,119.583333333,maka1311,mak,Austronesian,,South Sulawesi,cCC6B51,mak,false,false,ID,Arsyad-et-al-1987 Basri-1999 Manyambeang-et-al-1996
mku,Maranungku,Australia,-13.6666666667,130,mara1386,zmr,Western Daly,,Wagaydy,c51CCC7,zmr,false,true,AU,Fabricius-1998 Tryon-1970b
mkw,Máku,South America,0.416666666667,-69.8333333333,maku1246,xak,,,,cBA51CC,xak,false,false,BR,Aikhenvald-and-Dixon-1999
mkz,Makaa,Africa,3.41666666667,12.25,maka1304,mcp,Niger-Congo,Benue-Congo,Bantu,cC3CC51,mcp,false,false,CM,Heath-2003
mla,Mambila,Africa,6.75,11.5,,,Niger-Congo,Benue-Congo,Mambiloid,cCC8B51,mcu mzk,false,false,NG CM,Connell-2000 Meyer-1940 Perrin-and-Hill-1969
mlc,Malacca Creole,Eurasia,2.2,102.25,mala1533,mcm,other,,Creoles and Pidgins,c333D80,mcm,false,false,MY,Baxter-1988
mle,Maale,Africa,6,36.9166666667,male1284,mdy,Afro-Asiatic,Omotic,Ta-Ne-Omotic,cCC5751,mdy,false,false,ET,Amha-2001
mlg,Malgwa,Africa,11.5,13.75,malg1251,,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,,false,false,NG,Lohr-2002
mli,Mali,Papunesia,-4.83333333333,152.25,mali1284,gcc,Baining,,Baining,cCCA651,gcc,false,false,PG,Stebbins-2002
mlk,Malakmalak,Australia,-13.4166666667,130.416666667,mull1237,mpb,Northern Daly,,Northern Daly,c5181CC,mpb,false,false,AU,Birk-1975 Birk-1976 Mushin-1995 Nichols-1992 Tryon-1974
mll,Molala,North America,44.5,-122.5,mola1238,mbe,Penutian,,Molala,c5196CC,mbe,false,false,US,Kinkade-2001
mlm,Mlabri (Minor),Eurasia,18.5,101,mlab1235,mra,Austro-Asiatic,Mon-Khmer,Khmuic,c5BCC51,mra,false,false,TH,Rischel-1995
mlt,Maltese,Eurasia,35.9166666667,14.4166666667,malt1254,mlt,Afro-Asiatic,,Semitic,cB3CC51,mlt,false,false,MT,Aquilina-1959 Borg-1997 Borg-and-Azzopardi-Alexander-1997 Comrie-1989 Corbett-2000 Dahl-1985 French-1978 Haspelmath-1997 Malherbe-and-Rosenberg-1996 Schabert-1976 Sutcliffe-1936
mlu,Maleu,Papunesia,-5.71666666667,148.416666667,male1289,mgl,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mgl,false,false,PG,Haywood-1996
mly,Malay,Eurasia,3,102,stan1306,zsm,Austronesian,,Malayo-Sumbawan,cCC7D51,zsm,false,false,MY,Dodds-1980 Lewis-1947 Winstedt-1927
mma,Mandaic (Modern),Eurasia,31,48.5,nucl1706,mid,Afro-Asiatic,,Semitic,cB3CC51,mid,false,false,IR IQ,Malone-1997
mmb,Mangap-Mbula,Papunesia,-5.66666666667,148.083333333,mbul1263,mna,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mna,false,false,PG,Bugenhagen-1995 Ross-1998
mme,Mari (Meadow),Eurasia,57,48,east2328,mhr,Uralic,Finno-Ugric,Mari,c92CC51,mhr,false,false,RU,Collinder-1957 Gruzov-1960 Itkonen-1955 Kangasmaa-Minn-1998 Kovedjaeva-1966 Kovedjaeva-1976 Moisio-1992 Pengitov-et-al-1961 Ristinen-1960 Sebeok-and-Ingemann-1961 Timofeeva-1961
mmi,Mambai,Africa,9.66666666667,14,mamb1294,mcs,Niger-Congo,Adamawa-Ubangi,Mbumic,c7ECC51,mcs,false,false,TD,Eguchi-1971
mmn,Mamanwa,Papunesia,9.41666666667,125.5,mama1275,mmn,Austronesian,,Greater Central Philippine,cCC8E51,mmn,false,false,PH,Miller-and-Miller-1976
mmo,Mordvin (Moksha),Eurasia,54,44,moks1248,mdf,Uralic,Finno-Ugric,Mordvin,c5F8033,mdf,false,false,RU,Cygankin-and-Dabaev-1975 Feoktistov-1966 Itkonen-1955 Koljadenkov-1959 Paasonen-1909 Raun-1964a Zavodova-and-Koljadenkov-1964
mmp,Mampruli,Africa,10.3333333333,-0.666666666667,mamp1244,maw,Niger-Congo,Gur,Oti-Volta,cCCB351,maw,false,false,TG GH,
mms,Mamasa,Papunesia,-3.08333333333,119.666666667,mama1276,mqj,Austronesian,,South Sulawesi,cCC6B51,mqj,false,false,ID,Matti-1991
mmu,Malay (Ulu Muar),Eurasia,2.66666666667,102.5,nege1240,zmi,Austronesian,,Malayo-Sumbawan,cCC7D51,zmi,false,false,MY,Hendon-1966
mmv,Mamvu,Africa,3.25,29,mamv1243,mdi,Central Sudanic,,Mangbutu-Efe,c6B3380,mdi,false,false,CD,Tucker-and-Bryan-1966 Vorbichler-1971
mmw,Mambwe,Africa,-9.08333333333,31.1666666667,mamb1296,mgr,Niger-Congo,Benue-Congo,Bantu,cC3CC51,mgr,false,false,ZM TZ,London-Missionary-Society-1962
mna,Muna,Papunesia,-5,122.5,muna1247,mnb,Austronesian,,Celebic,c803F33,mnb,false,false,ID,van-den-Berg-1989a van-den-Berg-1989b
mnc,Manchu,Eurasia,49.5,127.5,manc1252,mnc,Altaic,,Tungusic,c798033,mnc,false,false,CN,Adam-1873 Austin-1962 Doerfer-1962 Gorelova-2002 Haenisch-1961 Haenisch-1986 Pashkov-1963 Roth-Li-2000 Shimunek-2001
mnd,Mandarin,Eurasia,34,110,mand1415,cmn,Sino-Tibetan,,Chinese,c51CCC9,cmn,true,true,CN,Bisang-1991 Bisang-1992 Chao-1968 Chappell-1994 Cheng-1973a Dahl-1985 Dow-1972 Hanyu-1960 Henne-et-al-1977 Hoa-et-al-2007 Hole-1998 Huang-1954 Li-and-Thompson-1976 Li-and-Thompson-1981 Lin-2001 Malherbe-and-Rosenberg-1996 Norman-1988 Stolz-1996 Wiedenhof-1994 Zhu-2001
mne,Maidu (Northeast),North America,40,-120.666666667,nort2952,nmu,Penutian,,Maiduan,c5184CC,nmu,false,false,US,Bybee-et-al-1994 Dixon-1911 Dixon-1912 Nichols-1992 Robbins-1991 Shipley-1956 Shipley-1963 Shipley-1964 Shipley-1990 Stolz-1996
mng,Manggarai,Papunesia,-8.5,120.333333333,mang1405,mqy,Austronesian,,Central Malayo-Polynesian,c807633,mqy,false,false,ID,Burger-1946 Semiun-1993 Verheijen-and-Grimes-1995
mni,Moni,Papunesia,-3.66666666667,137,moni1261,mnz,Trans-New Guinea,,Paniai Lakes,c33804D,mnz,false,false,ID,Boelaars-1950
mnj,Mantjiltjara,Australia,-22.6666666667,125.083333333,many1256,mpj,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,mpj,false,false,AU,Marsh-1969
mnk,Maninka,Africa,10.5,-9.5,east2426,emk,Mande,,Western Mande,c6751CC,emk,false,false,SL GN,
mnm,Manam,Papunesia,-4,145,mana1295,mva,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mva,false,false,PG,Chaski-1985 Gregersen-1976 Lichtenberk-1983
mno,Mono (in United States),North America,38,-119,mono1275,mnr,Uto-Aztecan,,Northern Uto-Aztecan,c803633,mnr,false,false,US,Langacker-1976 Norris-1986
mnr,Mandar,Papunesia,-3.41666666667,119.083333333,mand1442,mdr,Austronesian,,South Sulawesi,cCC6B51,mdr,false,false,ID,Muthalib-et-al-1992
mns,Mansi,Eurasia,62,62,mans1258,mns,Uralic,Finno-Ugric,Ugric,c8CCC51,mns,false,false,RU,Collinder-1957 Guja-1976 Honti-1988 Kalman-1965 Kalman-1976 Keresztes-1998 Kuzakova-1994 Lako-1957 Murphy-1968 Rombandeeva-1966 Rombandeeva-1973
mnt,Mentawai,Papunesia,-1.5,99,ment1249,mwv,Austronesian,,Northwest Sumatra-Barrier Islands,cCC7751,mwv,false,false,ID,Morris-1900 Syamsir-et-al-1985
mnu,Mun,Eurasia,19,110,kimm1245,mji,Hmong-Mien,,Mienic,c6151CC,mji,false,false,CN,Shintari-and-Yang-1990
mnv,Minaveha,Papunesia,-9.6,150.466666667,mina1269,mvn,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mvn,false,false,PG,Lovell-1994
mnx,Manx,Eurasia,54.1666666667,-4.5,manx1243,glv,Indo-European,,Celtic,c80333C,glv,false,false,GB,Broderick-1984 Broderick-1993 Thomson-1992
mny,Margany,Australia,-27,144.5,marg1253,zmc,Pama-Nyungan,,Northern Pama-Nyungan,c336680,zmc,false,false,AU,Breen-1981a Fabricius-1998
mnz,Munzombo,Africa,3,18.4166666667,monz1249,moj,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,moj,false,false,CG,Boyi-1983
moa,Mono-Alu,Papunesia,-7.05,155.75,mono1273,mte,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mte,false,false,SB,Fagan-1986 Stolz-1996
moc,Moca,Africa,7.58333333333,35.5,shek1244,moy,Afro-Asiatic,Omotic,Ta-Ne-Omotic,cCC5751,moy,false,false,ET,Leslau-1959
moe,Mordvin (Erzya),Eurasia,53,45.5,erzy1239,myv,Uralic,Finno-Ugric,Mordvin,c5F8033,myv,false,false,KZ RU,Cygankin-2000 Feoktistov-1966b Honti-1997 Paasonen-1909 Wiedemann-1865 Zaicz-1998
mof,Mofu-Gudur,Africa,10.5,14,mofu1248,mif,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,mif,false,false,CM,Barreteau-1988
mog,Moghol,Eurasia,35,62,mogh1245,mhj,Altaic,,Mongolic,cBECC51,mhj,false,false,AF,Kuzmenkov-1997 Weiers-1971 Weiers-1972 Weiers-1975 Weiers-2003
moh,Mohawk,North America,43.5,-74.25,moha1258,moh,Iroquoian,,Northern Iroquoian,cCC516B,moh,false,false,CA US,Baker-1996 Bonvillain-1973 Maracle-1992 Michelson-1988 Mithun-1986 Mithun-1988a Postal-1963
moj,Mojave,North America,34.6666666667,-114.583333333,moha1256,mov,Hokan,,Yuman,cCC6151,mov,false,false,US,Munro-1976b Munro-and-Brown-1976
mok,Mokilese,Papunesia,6.66666666667,159.75,moki1238,mkj,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mkj,false,false,FM,Harrison-1973 Harrison-1976 Harrison-and-Albert-1976 Harrison-and-Albert-1977 Stolz-1996
mol,Moldavian,Eurasia,47,29,mold1248,ron,Indo-European,,Romance,cCC5154,ron,false,false,MD,Gajdarzi-and-Baskakov-1973
mom,Mombum,Papunesia,-8.25,138.75,nucl1452,mso,,,,c623380,mso,false,false,ID,Boelaars-1950
mon,Mon,Eurasia,14.8333333333,100.5,monn1252,mnw,Austro-Asiatic,Mon-Khmer,Monic,cCCCC51,mnw,false,false,TH MM,Albaugh-et-al-2001 Bauer-1982a Haswell-1901
moo,Mooré,Africa,12.8333333333,-1.25,moss1236,mos,Niger-Congo,Gur,Oti-Volta,cCCB351,mos,false,false,BF,Canu-1974 Froger-1923 Lehr-et-al-1966 Nikiema-2001
mop,Mopan,North America,16.5833333333,-88.6666666667,mopa1243,mop,Mayan,,Mayan,cA951CC,mop,false,false,BZ,Ulrich-and-Ulrich-1976 Ulrich-et-al-1986
mor,Mor,Papunesia,-2.95,135.75,morm1235,mhz,Austronesian,Eastern Malayo-Polynesian,South Halmahera - West New Guinea,c807433,mhz,false,false,ID,Laycock-1978
mos,Mosetén,South America,-14.75,-67.8333333333,mose1249,cas,Mosetenan,,Mosetenan,c5F3380,cas,false,false,BO,Bibolotti-1917 Sakel-2002a Sakel-2002b Suarez-1973
mot,Motuna,Papunesia,-6.61666666667,155.416666667,siwa1245,siw,South Bougainville,,South Bougainville,c8351CC,siw,false,false,PG,Onishi-1994 Onishi-2000
mou,Moru,Africa,4.75,29.75,moru1253,mgd,Central Sudanic,,Moru-Ma'di,cAC51CC,mgd,false,false,SS,Andersen-1984 Andersen-1986 Tucker-1967 Tucker-and-Bryan-1966
mov,Movima,South America,-13.8333333333,-65.6666666667,movi1243,mzp,,,,c9851CC,mzp,false,false,BO,Aikhenvald-and-Dixon-1999 Haude-2006 Judy-and-Judy-1962a Judy-and-Judy-1962b Judy-and-Judy-1967
mpa,Murrinh-Patha,Australia,-14.6666666667,129.666666667,murr1258,mwf,Southern Daly,,Murrinh-Patha,c337C80,mwf,false,false,AU,Fabricius-1998 Street-1980 Street-1987 Street-and-Mollinjin-1981 Walsh-1976 Walsh-1999
mpo,Mpongwe,Africa,-1.25,9.5,myen1241,mye,Niger-Congo,Benue-Congo,Bantu,cC3CC51,mye,false,false,GA,Gautier-1912
mpr,Maipure,South America,5.5,-67.5,maip1246,,Arawakan,,Alto-Orinoco,c334A80,,false,false,VR,Zamponi-2003a
mpt,Mian,Papunesia,-4.75,141.5,mian1256,mpt,Trans-New Guinea,Awyu-Ok,Ok,c3E8033,mpt,false,false,PG,Fedden-2007
mpu,Mpur,Papunesia,-0.75,133.25,mpur1239,akc,,,,cA2CC51,akc,false,false,ID,Ode-2002
mpy,Mapoyo,South America,6,-67,mapo1246,mcg,Cariban,,Cariban,cCC9251,mcg,false,false,VR,Tavera-Acosta-1907
mqc,Martinique Creole,North America,14.6666666667,-61,guad1242,gcf,other,,Creoles and Pidgins,c333D80,gcf,false,false,MQ,Bernabe-1983
mqf,Momuna,Papunesia,-4.83333333333,139.25,momu1241,mqf,Trans-New Guinea,,Somahai,c337180,mqf,false,false,ID,Reimer-1986
mra,Mara,Australia,-15,135.166666667,mara1385,mec,Mangarrayi-Maran,,Mara,c5176CC,mec,false,false,AU,Dixon-2002 Fabricius-1998 Heath-1981
mrc,Marchha,Eurasia,30.25,79.5833333333,rong1264,rnp,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,rnp,false,false,IN,Sharma-1989c
mrd,Marind,Papunesia,-7.83333333333,140.166666667,nucl1622,mrz,Trans-New Guinea,Anim,Marind-Yaqay,cCC5168,mrz,false,true,ID,Boelaars-1950 Drabbe-1955 Geurtjens-1926a Geurtjens-1926b
mrg,Margi,Africa,11,13,marg1265,mrt,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,mrt,false,false,NG,Bybee-et-al-1994 Hoffmann-1963 Hoffmann-1975 Maddieson-1987 Stolz-1996
mrh,Marrithiyel,Australia,-13.8333333333,130,mari1424,mfr,Western Daly,,Bringen,c338075,mfr,false,false,AU,Green-1981 Green-1989 Mushin-1995 Tryon-1974
mri,Moraori,Papunesia,-8.58333333333,140.666666667,moro1289,mok,,,,cCC6651,mok,false,false,ID,Boelaars-1950
mrj,Mirniny,Australia,-31,129,ngad1258,nju,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,nju,false,false,AU,
mrk,Murik,Papunesia,-3.83333333333,144.25,muri1260,mtf,Lower Sepik-Ramu,,Lower Sepik,cCC51C8,mtf,false,false,PG,Abbott-1985
mrl,Murle,Africa,6.5,33.5,murl1244,mur,Eastern Sudanic,Surmic,South Surmic,c806933,mur,false,true,SS,Arensen-1982 Arensen-1992 Arensen-1998 Lyth-1971 Tucker-and-Bryan-1966 Unseth-1986 Yigezu-2001
mrn,Maranao,Papunesia,7.83333333333,124.25,mara1404,mrw,Austronesian,,Greater Central Philippine,cCC8E51,mrw,false,false,PH,McKaughan-1958 McKaughan-and-Macaraya-1967
mro,Moro,Africa,11,30.1666666667,moro1285,mor,Kordofanian,,Heiban,c333480,mor,false,false,SD,Black-and-Black-1971 Schadeberg-1981b
mrq,Marquesan,Papunesia,-8.91666666667,-140.083333333,,,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mqm mrq,false,false,PF,Kruppa-1999 Lynch-2002a
mrr,Maringarr,Australia,-14.25,130,mari1419,zmt,Western Daly,,Bringen,c338075,zmt,false,false,AU,Tryon-1974
mrs,Mairasi,Papunesia,-3.5,134,nucl1594,zrs,Mairasic,,Mairasic,c5193CC,zrs,false,false,ID,Peckham-1982 Peckham-1991
mrt,Martuthunira,Australia,-20.8333333333,116.5,mart1255,vma,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,vma,true,true,AU,Dench-1987 Dench-1995
mru,Maru,Eurasia,23.5,98.5,maru1249,mhx,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,mhx,false,false,MM,Abbey-1899 Clerk-1911
mrw,Muruwari,Australia,-28.75,147,muru1266,zmu,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,zmu,false,false,AU,Mushin-1995 Oates-1988 Trefry-1971
msc,Muisca,South America,5,-74,chib1270,chb,Chibchan,,Chibcha-Duit,c51CC76,chb,false,false,CO,Adelaar-2004 Ostler-1994
mse,Munsee,North America,41.5,-74.6666666667,muns1251,umu,Algic,,Algonquian,c758033,umu,false,false,US,Goddard-1979 Goddard-1982 OMeara-1996
msg,Mising,Eurasia,28.5,94.8333333333,misi1242,mrg,Sino-Tibetan,Tibeto-Burman,Tani,c51CCBE,mrg,false,false,IN,Prasad-1991
msh,Marshallese,Papunesia,7.11666666667,171.05,mars1254,mah,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mah,false,false,MH,Abo-et-al-1976 Bender-1971 Bender-1993 Zewen-1977
msk,Masakin,Africa,10.6666666667,30,ngil1242,jle,Kordofanian,,Talodi,c333B80,jle,false,false,SD,Tucker-and-Bryan-1966
msl,Masalit,Africa,13.3333333333,22,nucl1440,mls,Maban,,Maban,c80337E,mls,false,false,TD SD,Edgar-1989
msm,Musom,Papunesia,-6.58333333333,147,muso1238,msu,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,msu,false,false,PG,Holzknecht-1997b
msn,Maisin,Papunesia,-9.5,149.166666667,mais1250,mbq,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mbq,false,false,PG,Ross-1984
msq,Musqueam,North America,49.1666666667,-123,halk1245,hur,Salishan,,Central Salish,c51ADCC,hur,false,false,CA,Suttles-2004
mss,Miwok (Southern Sierra),North America,37.5,-120,sout2985,skd,Penutian,Utian,Miwok,c335D80,skd,false,true,US,Broadbent-1964 Freeland-1951 Nichols-1992 Shipley-1957
msy,Magar (Syangja),Eurasia,28.0833333333,83.8333333333,west2418,mrd,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,mrd,false,false,NP,Noonan-2003c
mta,Mentuh Tapuh,Papunesia,1.25,111,buka1257,sdo,Austronesian,,Land Dayak,c806A33,sdo,false,false,MY,Court-1972
mtb,Matuumbi,Africa,-8.5,39,matu1259,mgw,Niger-Congo,Benue-Congo,Bantu,cC3CC51,mgw,false,false,TZ,Odden-1996
mtg,Montagnais,North America,52,-65,mont1268,moe,Algic,,Algonquian,c758033,moe,false,false,CA,James-et-al-1997 Lemoine-1901
mth,Mixe (Tlahuitoltepec),North America,17.0833333333,-96.1666666667,tlah1239,mxp,Mixe-Zoque,,Mixe-Zoque,cA351CC,mxp,false,false,MX,Lyon-1967
mti,Barí,South America,9,-73,bari1297,mot,Chibchan,,Barí,cCCAE51,mot,false,false,CO VR,Huber-and-Reed-1992
mtk,Matukar,Papunesia,-4.91666666667,145.75,matu1261,mjk,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mjk,false,false,PG,ZGraggen-1969
mtl,Mattole,North America,40.1666666667,-124.166666667,matt1238,mvb,Na-Dene,,Athapaskan,c8C51CC,mvb,false,false,US,Li-1930
mto,Malto,Eurasia,25,87.3333333333,kuma1274,kmj,Dravidian,,Dravidian,cB7CC51,kmj,false,false,IN,Das-1973 Steever-1998c
mtp,Mixe (Totontepec),North America,17.25,-96,toto1305,mto,Mixe-Zoque,,Mixe-Zoque,cA351CC,mto,false,false,MX,Crawford-1963 Schoenhals-and-Schoenhals-1965 Van-Haitsma-and-Van-Haitsma-1976
mts,Matis,South America,-4.41666666667,-70.25,mati1255,mpq,Pano-Tacanan,,Panoan,c334F80,mpq,false,false,BR,Ferreira-2001
mtt,Massachusett,North America,42.5,-71,wamp1249,wam,Algic,,Algonquian,c758033,wam,false,false,US,Goddard-and-Bragdon-1988 Trumbull-1903
mtu,Motu,Papunesia,-9.33333333333,147,motu1246,meu,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,meu,false,false,PG,Bybee-et-al-1994 Lawes-1888 Lister-Turner-and-Clark-1930
mua,Makua,Africa,-15,38.6666666667,makh1261,mgh,Niger-Congo,Benue-Congo,Bantu,cC3CC51,mgh,false,false,MZ,Katupha-1983 Woodward-1926
mud,Mundani,Africa,5.66666666667,9.91666666667,mund1327,mnf,Niger-Congo,Benue-Congo,Wide Grassfields,c7D3380,mnf,false,false,CM,Parker-1986 Parker-1989
mug,Bargam,Papunesia,-4.88333333333,145.75,barg1252,mlp,Trans-New Guinea,Madang,Bargam,c593380,mlp,false,false,PG,ZGraggen-1969
muh,Muher,Africa,8.16666666667,38.1666666667,seba1251,sgw,Afro-Asiatic,,Semitic,cB3CC51,sgw,false,false,ET,Rose-2003
mui,Muinane,South America,-1,-72.5,muin1242,bmr,Boran,,Boran,cCC5651,bmr,false,false,CO,Aschmann-1993 Huber-and-Reed-1992 Walton-and-Walton-1967 Walton-and-Walton-1975
mul,Mulao,Eurasia,25,108,mula1253,mlm,Tai-Kadai,,Kam-Tai,c51CC8A,mlm,false,false,CN,Jung-and-Guoqiao-1993 Wang-and-Guoqiao-1993 Wang-and-Zheng-1993
mum,Mumuye,Africa,9,11.6666666667,nucl1240,mzm,Niger-Congo,Adamawa-Ubangi,Mumuye-Yandang,c4E8033,mzm,false,false,NG,Shimizu-1983 Shimuzu-1983
mun,Mundari,Eurasia,23,84.6666666667,mund1320,unr,Austro-Asiatic,,Munda,c807D33,unr,false,true,IN,Abbi-1992 Bhattacharya-1976 Cook-1965 Gumperz-and-Bilibiri-1957 Hoffmann-1903 Nottrott-1882 Osada-1992 Osada-2007 Pinnow-1959 Sinha-1975
muo,Muong,Eurasia,20.5,105.083333333,muon1246,mtq,Austro-Asiatic,Mon-Khmer,Viet-Muong,cCCC951,mtq,false,false,VN,Sokolovskaja-and-Nguyen-1987
mup,Mupun,Africa,9.5,8.83333333333,mwag1236,sur,Afro-Asiatic,Chadic,West Chadic,cADCC51,sur,false,false,NG,Frajzyngier-1991 Frajzyngier-1993 Jungraithmayr-1963
mur,Mursi,Africa,5.58333333333,36.0833333333,murs1242,muz,Eastern Sudanic,Surmic,South Surmic,c806933,muz,false,false,ET,Turton-and-Bender-1976
mus,Mussau,Papunesia,-1.45,149.616666667,muss1246,emi,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,emi,false,false,PG,Ross-2002b
mut,Mutsun,North America,36.8333333333,-121.5,sout2986,css,Penutian,Utian,Costanoan,c518ACC,css,false,false,US,Mason-1916 Okrand-1977
muu,Mundurukú,South America,-7,-58,mund1330,myu,Tupian,,Munduruku,c80CC51,myu,false,false,BR,Crofts-1973 Derbyshire-and-Payne-1990 Martius-1863
muy,Muyuw,Papunesia,-9.08333333333,152.75,muyu1244,myw,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,myw,false,false,PG,Lithgow-and-Lithgow-1974
mwa,Martu Wangka,Australia,-21.5,126,mart1256,mpj,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,mpj,false,false,AU,
mwb,Manobo (Western Bukidnon),Papunesia,7.66666666667,124.75,west2555,mbb,Austronesian,,Greater Central Philippine,cCC8E51,mbb,false,false,PH,Elkins-1968 Elkins-1970
mwc,Mawchi,Eurasia,21.3333333333,73.6666666667,mawc1242,mke,Indo-European,,Indic,cCC5351,mke,false,false,IN,
mwe,Mwera,Africa,-9,39,mwer1248,mwe,Niger-Congo,Benue-Congo,Bantu,cC3CC51,mwe,false,false,TZ,Bybee-et-al-1994 Harries-1950
mwl,Miwok (Lake),North America,38.9166666667,-122.666666667,lake1258,lmw,Penutian,Utian,Miwok,c335D80,lmw,false,false,US,Callaghan-1965
mwn,Miwok (Northern Sierra),North America,38.3333333333,-120.666666667,nort2968,nsq,Penutian,Utian,Miwok,c335D80,nsq,false,false,US,Callaghan-1987
mwo,Mwotlap,Papunesia,-13.5833333333,167.583333333,motl1237,mlv,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mlv,false,false,VU,Crowley-2002d Francois-2001
mwp,Miwok (Plains),North America,38,-121,plai1259,pmw,Penutian,Utian,Miwok,c335D80,pmw,false,false,US,Callaghan-1984
mxa,Mixtec (Atatlahuca),North America,17,-97.75,atat1238,mib,Oto-Manguean,Mixtecan,Mixtec,c338080,mib,false,false,MX,Alexander-1980 Yasugi-1995
mxc,Mixtec (Chalcatongo),North America,17.05,-97.5833333333,sanm1296,mig,Oto-Manguean,Mixtecan,Mixtec,c338080,mig,true,true,MX,Macaulay-1996 Macaulay-2005 Nichols-1992
mxe,Ifira-Mele,Papunesia,-17.75,168.25,mele1250,mxe,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mxe,false,false,VU,Clark-2002
mxg,Mixtec (San Miguel el Grande),North America,17.05,-97.5666666667,sanm1295,mig,Oto-Manguean,Mixtecan,Mixtec,c338080,mig,false,false,MX,Dyk-and-Stoudt-1973
mxj,Mixtec (Jicaltepec),North America,16.3333333333,-98,pino1237,mio,Oto-Manguean,Mixtecan,Mixtec,c338080,mio,false,false,MX,Bradley-1970
mxl,Mixtec (Alacatlatzala),North America,17.25,-98.5833333333,alac1244,mim,Oto-Manguean,Mixtecan,Mixtec,c338080,mim,false,false,MX,
mxm,Mixtec (Molinos),North America,17,-97.5833333333,sanm1259,mig,Oto-Manguean,Mixtecan,Mixtec,c338080,mig,false,false,MX,Hunter-and-Pike-1969
mxo,Mixtec (Ocotepec),North America,17.1666666667,-97.75,ocot1243,mie,Oto-Manguean,Mixtecan,Mixtec,c338080,mie,false,false,MX,Alexander-1988
mxp,Mixtec (Peñoles),North America,17.0833333333,-96.9166666667,peno1244,mil,Oto-Manguean,Mixtecan,Mixtec,c338080,mil,false,false,MX,Daly-1973
mxs,Mixtec (Silacayoapan),North America,17.5,-98.1666666667,sila1250,mks,Oto-Manguean,Mixtecan,Mixtec,c338080,mks,false,false,MX,Shields-1988
mxt,Mixtec (Ayutla),North America,16.9166666667,-99.1666666667,ayut1236,miy,Oto-Manguean,Mixtecan,Mixtec,c338080,miy,false,false,MX,Hills-1990 Pankraz-and-Pike-1967
mxu,Mixtec (Chayuco),North America,16.4166666667,-97.8333333333,chay1249,mih,Oto-Manguean,Mixtecan,Mixtec,c338080,mih,false,false,MX,Pensinger-1974
mxx,Mixe (Ayutla),North America,17.0833333333,-96.0833333333,tlah1239,mxp,Mixe-Zoque,,Mixe-Zoque,cA351CC,mxp,false,false,MX,
mxy,Mixtec (Yosondúa),North America,16.9166666667,-97.5833333333,yoso1239,mpm,Oto-Manguean,Mixtecan,Mixtec,c338080,mpm,false,false,MX,Farris-1992
mxz,Mixtec (Coatzospan),North America,18.0833333333,-96.5833333333,coat1241,miz,Oto-Manguean,Mixtecan,Mixtec,c338080,miz,false,false,MX,Small-1990
mya,Ma'ya,Papunesia,-1.25,130.916666667,maya1282,slz,Austronesian,Eastern Malayo-Polynesian,South Halmahera - West New Guinea,c807433,slz,false,false,ID,Remijsen-2001 van-der-Leeden-1993
myg,Mayogo,Africa,3,29,mayo1261,mdm,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,mdm,false,false,CD,Sawka-2001
myi,Mangarrayi,Australia,-14.6666666667,133.5,mang1381,mpc,Mangarrayi-Maran,,Mangarrayi,cCCB851,mpc,true,true,AU,Merlan-1982 Merlan-1989 Nichols-1992
myk,Malay (Kuala Lumpur),Eurasia,3.16666666667,101.7,mala1479,zlm,Austronesian,,Malayo-Sumbawan,cCC7D51,zlm,false,false,MY,
mym,Malayalam,Eurasia,10,76.5,mala1464,mal,Dravidian,,Dravidian,cB7CC51,mal,false,false,IN,Andronov-1996 Asher-1968 Asher-and-Kumari-1997 Emeneau-1980 George-1971 Gil-1994b Malherbe-and-Rosenberg-1996 Moag-2001
myn,Ma'anyan,Papunesia,-2,115,maan1238,mhy,Austronesian,,Barito,c807833,mhy,false,false,ID,Gudai-1988 Kawi-et-al-1984 Sundermann-1913a
myo,Mayo,North America,26,-108,mayo1264,mfy,Uto-Aztecan,,Cahita,c698033,mfy,false,false,MX,Collard-and-Collard-1974 Freeze-1989 Stolz-1996
myr,Matsés,South America,-5.41666666667,-73.25,mats1244,mcf,Pano-Tacanan,,Panoan,c334F80,mcf,false,false,BR PE,Fleck-2002 Fleck-2003 Wise-1978
myy,Mayi-Yapi,Australia,-20,141,mayk1239,xyj,Pama-Nyungan,,Northern Pama-Nyungan,c336680,xyj,false,false,AU,Breen-1981b
mzc,Mazatec (Chiquihuitlán),North America,17.75,-96.9166666667,chiq1250,maq,Oto-Manguean,,Popolocan,c5173CC,maq,false,false,MX,Capen-1996 Jamieson-1976a Jamieson-1976b Jamieson-1988
mzh,Mazatec (Huautla),North America,18.25,-96.8333333333,huau1238,mau,Oto-Manguean,,Popolocan,c5173CC,mau,false,false,MX,Pike-1967
mzn,Mazanderani,Eurasia,36.5,52,maza1291,mzn,Indo-European,,Iranian,c803335,mzn,false,false,IR,Yoshie-1996
naa,Neo-Aramaic (Amadiya),Eurasia,37,43,chal1275,cld,Afro-Asiatic,,Semitic,cB3CC51,cld,false,false,IQ,Hoberman-1997
nab,Nabak,Papunesia,-6.41666666667,147,naba1256,naf,Trans-New Guinea,Finisterre-Huon,Huon,c804C33,naf,false,false,PG,Fabian-et-al-1998
nad,Nadëb,South America,-1,-66.5,nade1244,mbj,Nadahup,,Nadahup,c573380,mbj,false,false,BR,Martins-and-Martins-1999 Weir-1984 Weir-1986 Weir-1994
naf,Nafaanra,Africa,8,-2.58333333333,nafa1258,nfr,Niger-Congo,,Senufo,c338034,nfr,false,false,CI GH,
nag,Nagatman,Papunesia,-3.75,141.5,yale1246,nce,Yale,,Yale,c807533,nce,false,false,PG,Campbell-and-Campbell-1987
nah,Nahali,Eurasia,19.75,77.8333333333,niha1238,nll,,,,c503380,nll,false,false,IN,Kuiper-1962 Nichols-1992 Stolz-1996
nai,Nanai,Eurasia,49.5,137,nana1257,gld,Altaic,,Tungusic,c798033,gld,false,false,RU,Avrorin-1959 Avrorin-1968 Cincius-1975 Haspelmath-1997 Menges-1968 Nichols-1992 Petrova-1960 Sem-1975 Sunik-1982 Zhang-et-al-1989
naj,Neo-Aramaic (Arbel Jewish),Eurasia,36.3833,44.0,lish1245,aij,Afro-Asiatic,,Semitic,cB3CC51,aij,false,false,IQ,Arsanis-1968 Khan-1999
nak,Nakanai,Papunesia,-5.58333333333,150.583333333,naka1262,nak,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,nak,false,false,PG,Bybee-et-al-1994 Johnston-1980 Spaelti-1997
nal,Nalik,Papunesia,-2.95,151.333333333,nali1244,nal,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,nal,false,false,PG,Volker-1998
nam,Namia,Papunesia,-3.83333333333,141.75,nami1256,nnm,Sepik,,Yellow River,c51C9CC,nnm,false,false,PG,Feldpausch-and-Feldpausch-1992
nan,Nandi,Africa,0.25,35,nand1266,niq,Eastern Sudanic,Nilotic,Eastern Nilotic,c807E33,niq,false,false,KE,Creider-1989 Creider-and-Creider-1989 Creider-nd Hollis-1909 Mutaka-1990
nap,Neo-Aramaic (Persian Azerbaijan),Eurasia,38,47,lish1246,trg,Afro-Asiatic,,Semitic,cB3CC51,trg,false,false,IR IL,Garbell-1965 Jastrow-1997
nar,Nara (in Ethiopia),Africa,15.0833333333,37.5833333333,nara1262,nrb,Eastern Sudanic,,Nara,c7E51CC,nrb,false,false,ER,Bender-1968 Nichols-1992 Reinisch-1874 Thompson-1976a Tucker-and-Bryan-1966
nas,Nasioi,Papunesia,-6.33333333333,155.583333333,naas1242,nas,South Bougainville,,South Bougainville,c8351CC,nas,false,false,PG,Foley-1986 Hurd-and-Hurd-1966 Hurd-and-Hurd-1970 Nichols-1992 Rausch-1912
nat,Natchez,North America,31.75,-91.3333333333,natc1249,ncz,,,,c7551CC,ncz,false,false,US,Haas-1975 Swanton-1991 Van-Tuyl-1979
nau,Nauruan,Papunesia,-0.5,166.916666667,naur1243,nau,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,nau,false,false,NR,Kayser-1993 Lynch-1998
nav,Navajo,North America,36.1666666667,-108,nava1243,nav,Na-Dene,,Athapaskan,c8C51CC,nav,false,true,US,Baskakov-1966c Field-2001 Haile-1926 Haile-1941 Hale-and-Platero-2000 Landar-1963 Nichols-1992 Platero-1974 Reichard-1951 Sapir-and-Hoijer-1967 Schauber-1979 Speas-1990 Willie-1991 Willie-1996 Young-1992 Young-and-Morgan-1972 Young-and-Morgan-1980 Young-and-Morgan-1987
nax,Naxi,Eurasia,27.5,100,naxi1245,nxq,Sino-Tibetan,Tibeto-Burman,Naic,c51CC59,nxq,false,false,CN,Bradley-1975 He-and-Jiang-1985 Jiang-1980 Jiang-1985
nbb,Nambas (Big),Papunesia,-16.0833333333,167.2,bign1238,nmb,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,nmb,false,false,VU,Fox-1979
nbd,Nubian (Dongolese),Africa,18.25,30.75,dong1288,dgl,Eastern Sudanic,,Nubian,c8951CC,dgl,false,true,SD,Armbruster-1960 Armbruster-1965 Gil-1982
nbe,Ngombe,Africa,3,23,ngom1268,ngc,Niger-Congo,Benue-Congo,Bantu,cC3CC51,ngc,false,false,CD,Motingea-1988
nbh,Ghulfan,Africa,12,31,ghul1238,ghl,Eastern Sudanic,,Nubian,c8951CC,ghl,false,false,SD,Kauczor-1920
nbk,Natügu,Papunesia,-10.7833333333,165.866666667,natu1246,ntu,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,ntu,false,false,SB,Wurm-1972b
nbm,Ngbaka (Ma'bo),Africa,3.56,18.36,ngba1284,nbm,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,nbm,false,false,CD,GrandEury-1991 Thomas-1963
nbo,Nyambo,Africa,-1,31.3333333333,nyam1277,now,Niger-Congo,Benue-Congo,Bantu,cC3CC51,now,false,false,TZ,Bickmore-1989 Bickmore-1992
nbr,Ngäbere,North America,8.66666666667,-82,ngab1239,gym,Chibchan,,Guaymiic,c51CC81,gym,false,false,PA,Alphonse-1956 Bybee-et-al-1994 Young-and-Givon-1990
nca,Nicobarese (Car),Eurasia,9,93,carn1240,caq,Austro-Asiatic,Mon-Khmer,Nicobarese,c807C33,caq,false,false,IN,Braine-1970 Bybee-et-al-1994
ncm,Ncàm,Africa,9.33333333333,0.666666666667,ntch1242,bud,Niger-Congo,Gur,Oti-Volta,cCCB351,bud,false,false,TG GH,Cox-1998
ndb,Ndebele,Africa,-25.3333333333,29,nort2795,nde,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nde,false,false,ZA,Bowern-and-Lotridge-2002 Hyman-and-Sibanda-2008 Ziervogel-1959
nde,Nande,Africa,-0.0833333333333,29.1666666667,nand1264,nnb,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nnb,false,false,CD,Baudet-1947 Mutaka-1990
ndg,Ndogo,Africa,7.75,27,ndog1248,ndz,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,ndz,false,false,SS,Santandrea-1961
ndi,Ngbandi,Africa,3.75,22,,ngb,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,ngb,false,false,CD,Lekens-1923 Toronzoni-1989
ndj,Ndjébbana,Australia,-12.1666666667,134.116666667,djee1236,djj,Mangrida,,Ndjébbana,c51CCB0,djj,false,false,AU,McKay-2000
ndo,Ndonga,Africa,-18,17,ndon1254,ndo,Niger-Congo,Benue-Congo,Bantu,cC3CC51,ndo,false,false,AO NA,Fivaz-1986 Viljoen-and-Amakali-1978
ndr,Nadroga,Papunesia,-18.0833333333,177.416666667,west2519,wyy,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,wyy,false,false,FJ,Geraghty-2002
ndt,Ndut,Africa,14.9166666667,-16.9166666667,ndut1239,ndv,Niger-Congo,North-Central Atlantic,Cangin,c5D8033,ndv,false,false,SN,Gueye-1986 Morgan-1996
ndu,Ndumu,Africa,-1.66666666667,13.5833333333,ndum1239,nmd,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nmd,false,false,GA,Biton-1969
ndy,Ndyuka,South America,4.5,-54.5,ndyu1242,djk,other,,Creoles and Pidgins,c333D80,djk,false,true,GF SR,George-Huttar-pc-cited-in-Gil-1994 Huttar-and-Huttar-1972 Huttar-and-Huttar-1994
ned,Nederlandse Gebarentaal,Eurasia,52.25,5.5,dutc1253,dse,other,,Sign Languages,c515CCC,dse,false,false,NL,Coerts-1992
neg,Negidal,Eurasia,53,139,negi1245,neg,Altaic,,Tungusic,c798033,neg,false,false,RU,Cincius-1997a Kolesnikova-and-Konstantinova-1968
neh,Nehan,Papunesia,-4.5,154.2,neha1247,nsn,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,nsn,false,false,PG,Todd-1978
nel,Nelemwa,Papunesia,-20.25,164.083333333,kuma1276,nee,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,nee,false,false,NC,Bril-1999 Bril-2002 Bril-2004 Bril-2007
nen,Nenets (Forest),Eurasia,69,72,nene1251,yrk,Uralic,,Samoyedic,c578033,yrk,false,true,RU,Castren-1854 Collinder-1957 Decsy-1966 Decsy-1968 Hajdu-1963 Hajdu-1988 Kanakin-1996 Katz-1975a Nichols-1992 Perrot-1996 Ristinen-1965 Ristinen-1968 Salminen-1993-99 Salminen-1997 Salminen-1998 Sammallahti-1974 Stolz-1996 Tereshchenko-1956 Tereshchenko-1966a Tereshchenko-1973
nep,Nepali,Eurasia,28,85,nepa1254,npi,Indo-European,,Indic,cCC5351,npi,false,false,NP,Acharya-1991 Bandhu-1973 Bandhu-et-al-1971 Bickel-and-Nichols-2007 Clark-1966 Hari-1973 Korolev-1965 Malherbe-and-Rosenberg-1996 Meerendonk-1949 Michailovsky-1996 Riccardi-2003 Turnbull-1982 Warren-1990
nev,Nevome,North America,31,-112.5,pima1248,pia,Uto-Aztecan,,Tepiman,c6D8033,pia,false,false,MX,Shaul-1982 Shaul-1986
new,Newari (Kathmandu),Eurasia,27.6666666667,85.5,newa1246,new,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,new,false,false,NP,Hale-and-Hale-1969 Hargreaves-2003 Korolev-1989 Malherbe-and-Rosenberg-1996 Malla-1985 Manandhar-1986 Noonan-2003c
ney,Neyo,Africa,5,-6,neyo1238,ney,Niger-Congo,,Kru,c6F51CC,ney,false,false,CI,Grah-1983
nez,Nez Perce,North America,46,-116,nezp1238,nez,Penutian,,Sahaptian,c335A80,nez,false,true,US,Aoki-1970 Aoki-1973 Aoki-1979 Aoki-1994 Rude-1982 Rude-1985 Rude-1986 Rude-1988a
nga,Nganasan,Eurasia,71,93,ngan1291,nio,Uralic,,Samoyedic,c578033,nio,false,false,RU,Castren-1966 Helimski-1998a Tereshchenko-1966c Tereshchenko-1979
ngb,Ngbaka (Minagende),Africa,3.5,20,ngba1285,nga,Niger-Congo,,Gbaya-Manza-Ngbaka,c803336,nga,false,false,CD,GrandEury-1991 Thomas-1963
ngd,Ngad'a,Papunesia,-8.83333333333,121,ngad1261,nxg,Austronesian,,Central Malayo-Polynesian,c807633,nxg,false,false,ID,Arndt-1933b Djawanai-1977 Djawanai-2002 Djawanai-and-Grimes-1995 Moore-1980
nge,Ngemba,Africa,6.2,10,ngem1255,nge,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nge,false,false,CM,Chumbow-1977
ngg,Ngan'gityemerri,Australia,-14.25,130.416666667,nang1259,nam,Southern Daly,,Ngankikurungkurr,c51C7CC,nam,false,false,AU,Reid-1990 Reid-1997
ngi,Ngiyambaa,Australia,-31.75,145.5,wang1291,wyb,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,wyb,true,true,AU,Donaldson-1977 Donaldson-1980 Donaldson-1997a Donaldson-1999 Nichols-1992
ngj,Ngadjumaja,Australia,-32.3333333333,123.833333333,ngad1258,nju,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,nju,false,false,AU,von-Brandenstein-1980
ngk,Ngankikurungkurr,Australia,-14,130.5,nang1259,nam,Southern Daly,,Ngankikurungkurr,c51C7CC,nam,false,false,AU,Fabricius-1998 Hoddinott-and-Kofod-1988 Mushin-1995
ngl,Ngalakan,Australia,-14.25,134,ngal1293,nig,Gunwinyguan,,Eastern Gunwinyguan,c3C8033,nig,false,false,AU,Merlan-1983
ngm,Ngambay,Africa,8.66666666667,16,ngam1268,sba,Central Sudanic,,Bongo-Bagirmi,c643380,sba,false,false,TD CM,Bybee-et-al-1994 Thayer-1978 Vandame-1963
ngn,Ngandi,Australia,-13.8333333333,135,ngan1295,nid,Gunwinyguan,,Eastern Gunwinyguan,c3C8033,nid,false,false,AU,Heath-1978 Mushin-1995
ngo,Ngoni,Africa,-11,36,ngon1269,ngo,Niger-Congo,Benue-Congo,Bantu,cC3CC51,ngo,false,false,MZ TZ,Ngonyani-2003
ngr,Ngarinyeri,Australia,-36,140,narr1259,nay,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,nay,false,false,AU,Yallop-1975a Yallop-1975b
ngt,Naga (Tangkhul),Eurasia,25,94.5,tang1336,nmf,Sino-Tibetan,Tibeto-Burman,Tangkhul-Maring,c51CCCC,nmf,false,false,IN,Arokianathan-1987 Grierson-1903 Pettigrew-1918 Subbarao-and-Murthy-2000 Subbarao-et-al-2000
ngu,Nguna,Papunesia,-16.9166666667,168.5,nort2836,llp,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,llp,false,false,VU,Ray-1926 Schutz-1969a Schutz-1969b
ngw,Ngawun,Australia,-19,141.5,ngaw1240,nxn,Pama-Nyungan,,Northern Pama-Nyungan,c336680,nxn,false,false,AU,Breen-1981a Breen-1981b Fabricius-1998
ngy,Ngarinyman,Australia,-16.5,130.5,ngar1235,nbj,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,nbj,false,false,AU,
ngz,Ngizim,Africa,12.0833333333,10.9166666667,ngiz1242,ngi,Afro-Asiatic,Chadic,West Chadic,cADCC51,ngi,false,false,NG,Schuh-1972 Schuh-1977 Schuh-1981
nha,Nhanda,Australia,-27,114.166666667,nhan1238,nha,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,nha,false,false,AU,Blevins-2001
nhc,Nahuatl (Central),North America,19,-98.25,cent2132,nhn,Uto-Aztecan,,Aztecan,cA9CC51,nhn,false,false,MX,Karttunen-2001
nhh,Nahuatl (Huasteca),North America,22,-99,huas1257,,Uto-Aztecan,,Aztecan,cA9CC51,nhe nhw,false,false,MX,Beller-and-Beller-1979
nhm,Nahuatl (Michoacán),North America,18.5,-103,mich1245,ncl,Uto-Aztecan,,Aztecan,cA9CC51,ncl,false,false,MX,Sischo-1979
nhn,Nahuatl (North Puebla),North America,20,-98.25,nort2957,ncj,Uto-Aztecan,,Aztecan,cA9CC51,ncj,false,false,MX,Brockway-1963 Brockway-1979 Key-and-Key-1953b
nhp,Nahuatl (Pochutla),North America,15.75,-96.5,poch1244,xpo,Uto-Aztecan,,Aztecan,cA9CC51,xpo,false,false,MX,Langacker-1977
nht,Nahuatl (Tetelcingo),North America,19.6666666667,-99,tete1251,nhg,Uto-Aztecan,,Aztecan,cA9CC51,nhg,false,true,MX,Brewer-and-Brewer-1971 Pittman-1954 Tuggy-1979
nhu,Nahuatl (Huauchinango),North America,20.1666666667,-98.0833333333,nort2957,ncj,Uto-Aztecan,,Aztecan,cA9CC51,ncj,false,false,MX,Brockway-et-al-2000
nhx,Nahuatl (Xalitla),North America,18,-99.5,guer1241,ngu,Uto-Aztecan,,Aztecan,cA9CC51,ngu,false,false,MX,Ramirez-de-Alejandro-and-Dakin-1979
nia,Nias,Papunesia,1,97.75,nias1242,nia,Austronesian,,Northwest Sumatra-Barrier Islands,cCC7751,nia,false,false,ID,Brown-2001 Brown-2005 Sundermann-1913b
nic,Nicobarese,Eurasia,7,93.8333333333,cent1990,ncb,Austro-Asiatic,Mon-Khmer,Nicobarese,c807C33,ncb,false,false,IN,Zograf-1990
nif,Niuafo'ou,Papunesia,-15.5666666667,-175.616666667,niua1240,num,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,num,false,false,TO,Early-2002 Tsukamoto-1988
nih,Nihon Shuwa (Japanese Sign Language),Eurasia,36,139,japa1238,jsl,other,,Sign Languages,c515CCC,jsl,false,false,JP,Morgan-2003
nim,Nimboran,Papunesia,-2.5,140.166666667,nucl1633,nir,,,,c5E51CC,nir,false,false,ID,Anceaux-1965 Bybee-et-al-1994 May-1997
nin,Ningil,Papunesia,-3.5,142.25,ning1273,niz,Torricelli,,East Wapei,cC851CC,niz,false,false,PG,Manning-and-Jaggers-1977
nis,Nyishi,Eurasia,27.5,93.5,nyis1236,njz,Sino-Tibetan,Tibeto-Burman,Tani,c51CCBE,njz,false,false,IN,Hamilton-1900 Namkung-1996 Ray-1967 Tayeng-1990a
nit,Nitinaht,North America,48.6666666667,-124.75,diti1235,dtd,Wakashan,,Southern Wakashan,c718033,dtd,false,false,CA,Carlson-and-Thomas-1979
niu,Niuean,Papunesia,-19.05,-170.116666667,niue1239,niu,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,niu,false,false,NZ,Polinskaja-1995 Seiter-1980 Tregear-and-Smith-1907
niv,Nivkh,Eurasia,53.3333333333,142,gily1242,niv,,,,c373380,niv,false,true,RU,Austerlitz-1964 Austerlitz-nd Beffa-1982 Comrie-1980 Gruzdeva-1997 Gruzdeva-1998 Gruzdeva-2001 Krejnovich-1937 Mattissen-2001 Nichols-1992 Otaina-and-Nedjalkov-2007 Panfilov-1962 Panfilov-1965 Panfilov-1968
nju,Nyungar,Australia,-33.75,122,nyun1247,nys,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,nys,false,false,AU,Douglas-1968 Douglas-1976
nkb,Ngalkbun,Australia,-13.5,134.833333333,ngal1292,ngk,Gunwinyguan,,Marne,c61CC51,ngk,false,false,AU,Capell-1962b Sandefur-and-Jentian-1977
nke,Nkem,Africa,6.58333333333,8.58333333333,nkem1242,isi,Niger-Congo,Benue-Congo,Bantu,cC3CC51,isi,false,false,NG,Sibomana-1986
nkk,Nakkara,Australia,-12.1166666667,134.416666667,naka1260,nck,Mangrida,,Nakkara,c338066,nck,false,false,AU,Eather-1990
nkn,Nkonya,Africa,7.16666666667,0.25,nkon1245,nko,Niger-Congo,Kwa,Tano,c806233,nko,false,false,GH,Painter-1970 Reineke-1972
nko,Nkore-Kiga,Africa,-0.916666666667,29.8333333333,chig1238,cgg,Niger-Congo,Benue-Congo,Bantu,cC3CC51,cgg,false,true,UG,Taylor-1985
nkr,Nukuoro,Papunesia,3.83333333333,154.916666667,nuku1260,nkr,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,nkr,false,false,FM,Carroll-1965 Carroll-and-Soulik-1973 Stolz-1996
nkt,Nyah Kur (Tha Pong),Eurasia,15.6666666667,101.666666667,nyah1250,cbn,Austro-Asiatic,Mon-Khmer,Monic,cCCCC51,cbn,false,false,TH,Diffloth-1984 Thongkum-1982 Thongkum-1984
nku,Nubian (Kunuz),Africa,23,33,kenu1243,xnz,Eastern Sudanic,,Nubian,c8951CC,xnz,false,false,EG,Abdel-Hafiz-1988 Hofmann-1983
nlr,Ngarla,Australia,-20,119,ngar1296,nrk,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,nrk,false,false,AU,
nlu,Ngarluma,Australia,-20.8333333333,117.5,ngar1287,nrl,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,nrl,false,false,AU,Hall-1971
nly,Nyamal,Australia,-21,119,nyam1271,nly,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,nly,false,false,AU,
nma,Naga (Mao),Eurasia,25.5,94.3333333333,maon1238,nbi,Sino-Tibetan,Tibeto-Burman,Angami-Pochuri,c803A33,nbi,false,false,IN,Giridhar-1994
nmb,Nambikuára (Southern),South America,-14,-59.5,sout2994,nab,Nambikuaran,,Nambikuaran,c493380,nab,false,false,BR,Kroeker-1972 Kroeker-1982 Kroeker-2001 Lowe-1999 Price-1976
nmd,Samo,Papunesia,-6.16666666667,142.25,samo1303,smq,Trans-New Guinea,,East Strickland,c804933,smq,false,false,PG,Voorhoeve-1975
nmi,Nahuatl (Mecayapan Isthmus),North America,18.25,-94.8333333333,isth1242,nhx,Uto-Aztecan,,Aztecan,cA9CC51,nhx,false,false,MX,Law-1958 Wolgemuth-1981 Wolgemuth-2002
nmm,Manange,Eurasia,28.5833333333,84,mana1288,nmm,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,nmm,false,false,NP,Hildebrandt-2004
nmp,Nahuatl (Milpa Alta),North America,19.25,-99.1666666667,more1259,nhm,Uto-Aztecan,,Aztecan,cA9CC51,nhm,false,false,MX,Whorf-1946b
nnc,Nancowry,Eurasia,8.05,93.5,cent1990,ncb,Austro-Asiatic,Mon-Khmer,Nicobarese,c807C33,ncb,false,false,IN,Das-1977 Man-1889 Radhakrishnan-1970 Radhakrishnan-1981 Steriade-1988
nnd,Nend,Papunesia,-5,144.916666667,nend1239,anh,Trans-New Guinea,Madang,Sogeram,cCC5180,anh,false,false,PG,Harris-1990
nne,Nengone,Papunesia,-21.5,168,neng1238,nen,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,nen,false,false,NC,Tryon-1967b Tryon-and-Dubois-1969 Tryon-and-Dubois-1971
nng,Nyanga,Africa,-1.25,28.1666666667,nyan1304,nyj,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nyj,false,false,CD,Bentley-and-Kulemeka-2001 Kadima-1965 Mateene-1980 Mchombo-2004 Price-1966
nnk,Nankina,Papunesia,-5.78333333333,146.45,nank1250,nnk,Trans-New Guinea,Finisterre-Huon,Finisterre,cCC51B9,nnk,false,false,PG,Spaulding-and-Spaulding-1994
nnm,Nanumea,Papunesia,-5.66666666667,176.116666667,tuva1244,tvl,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tvl,false,false,TV,Ranby-1980
nnn,Nuni (Northern),Africa,12.1666666667,-3,nort2784,nuv,Niger-Congo,Gur,Grusi,c448033,nuv,false,false,BF,Prost-1999
nnt,Nanticoke,North America,38,-76.25,nant1249,nnt,Algic,,Algonquian,c758033,nnt,false,false,US,Murray-1996
nob,Nobiin,Africa,21,31,nobi1240,fia,Eastern Sudanic,,Nubian,c8951CC,fia,false,false,EG SD,Bell-1968 Bell-1971 Werner-1987
noc,Nocte,Eurasia,27,95.5,noct1238,njb,Sino-Tibetan,Tibeto-Burman,Brahmaputran,c6C51CC,njb,false,false,IN,Das-Gupta-1971
nog,Noghay,Eurasia,44,46,noga1249,nog,Altaic,,Turkic,c778033,nog,false,false,RU,Baskakov-1966a Baskakov-1973 Baskakov-1997c Baskakov-and-Abdulzalilov-1956 Csato-and-Karakoc-1998 Karacaevo-Cerkesskij-Institut-1956
nok,Noghay (Karagash),Eurasia,47.5,47.25,noga1249,nog,Altaic,,Turkic,c778033,nog,false,false,RU,Arslanov-1997b
nom,Nomatsiguenga,South America,-11.6666666667,-74.5,noma1263,not,Arawakan,,Pre-Andine Arawakan,cCC5451,not,false,false,PE,Wise-1978 Wise-1990
non,Noni,Africa,6.41666666667,10.5833333333,noon1243,nhu,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nhu,false,false,CM,Hyman-1981b
noo,Noon,Africa,14.8333333333,-16.8333333333,noon1242,snf,Niger-Congo,North-Central Atlantic,Cangin,c5D8033,snf,false,false,SN,Soukka-2000
nor,Norwegian,Eurasia,61,8,norw1258,nor,Indo-European,,Germanic,c803433,nor,false,false,NO,Askedal-1994 Berit-and-Strandskogen-1998 Berulfsen-1977 Lektor-et-al-1965 Moen-and-Pedersen-1983 Olson-1901 Rice-1999 Strandskogen-and-Strandskogen-1986 Strandskogen-and-Strandskogen-1995 Vanvik-1972
npa,Nahuatl (Pajapan),North America,18.25,-94.75,isth1241,nhp,Uto-Aztecan,,Aztecan,cA9CC51,nhp,false,false,MX,Garcia-de-Leon-1976
nph,Nar-Phu,Eurasia,28.6666666667,84.25,narp1239,npa,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,npa,false,false,NP,Noonan-2003a
npi,Nigerian Pidgin,Africa,6.5,3.33333333333,nige1257,pcm,other,,Creoles and Pidgins,c333D80,pcm,false,false,NG,Faraclas-1996
npn,Naga Pidgin,Eurasia,25.6666666667,94,naga1394,nag,other,,Creoles and Pidgins,c333D80,nag,false,false,IN,Sreedhar-1985
npu,Napu,Papunesia,-1.33333333333,120.416666667,napu1241,npy,Austronesian,,Celebic,c803F33,npy,false,false,ID,Garantjang-et-al-1989 Hanna-and-Hanna-1991
nrg,Nanerge,Africa,11.75,-5,nane1238,sen,Niger-Congo,,Senufo,c338034,sen,false,false,BF,Ouedraogo-1984
nrm,Narom,Papunesia,4.41666666667,114,naro1251,nrm,Austronesian,,North Borneo,c804E33,nrm,false,false,MY,Omar-1983
nro,Nharo,Africa,-22.3333333333,20.5,naro1249,nhr,Khoe-Kwadi,,Khoe-Kwadi,c803362,nhr,false,false,NA BW,Barnard-1985 Visser-2001
nse,Nsenga,Africa,-14.5,30.8333333333,nsen1242,nse,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nse,false,false,ZM,Miti-2001 Ranger-1928
nsg,Nisgha,North America,55,-130,nisg1240,ncg,Tsimshianic,,Tsimshianic,c336180,ncg,false,false,CA,Tarpent-1987
nsk,Naskapi,North America,56,-70,nask1242,nsk,Algic,,Algonquian,c758033,nsk,false,false,CA,MacKenzie-and-Jancewicz-1994
nsn,Nisenan,North America,39,-121,nise1244,nsz,Penutian,,Maiduan,c5184CC,nsz,false,false,US,Eatough-1999 Uldall-and-Shipley-1966
nsy,Neo-Aramaic (Assyrian),Eurasia,36,41,assy1241,aii,Afro-Asiatic,,Semitic,cB3CC51,aii,false,false,SY,Tsereteli-1978
nsz,Nahuatl (Sierra de Zacapoaxtla),North America,19.5833333333,-97.3333333333,high1278,azz,Uto-Aztecan,,Aztecan,cA9CC51,azz,false,false,MX,Key-and-Key-1953a Robinson-1966 Yasugi-1995
nte,Norsk Tegnspråk,Eurasia,61,9,norw1255,nsl,other,,Sign Languages,c515CCC,nsl,false,false,NO,Vogt-Svendsen-1990
nti,Ngiti,Africa,1.33333333333,30.25,ngit1239,niy,Central Sudanic,,Lendu,c723380,niy,false,true,CD,Kutsch-Lojenga-1994
ntj,Ngaanyatjarra,Australia,-26,126.5,ngaa1240,ntj,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,ntj,false,false,AU,Douglas-1964 Douglas-1977
ntn,Nateni,Africa,10.5,1.16666666667,nate1242,ntm,Niger-Congo,Gur,Oti-Volta,cCCB351,ntm,false,false,BJ,Neukom-1995
nto,Ntomba,Africa,-2,18.3333333333,ntom1248,nto,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nto,false,false,CD,Gilliard-1928 Mamet-1955
ntu,Nenets,Eurasia,70,76,nene1249,yrk,Uralic,,Samoyedic,c578033,yrk,false,false,RU,Castren-1854 Collinder-1957 Decsy-1966 Decsy-1968 Hajdu-1963 Hajdu-1968 Hajdu-1988 Kanakin-1996 Katz-1975a Nichols-1992 Perrot-1996 Ristinen-1965 Ristinen-1968 Salminen-1993-99 Salminen-1997 Salminen-1998 Salminen-nd Stolz-1996 Tereshchenko-1956 Tereshchenko-1966a Tereshchenko-1973
nua,Nuaulu,Papunesia,-3.25,129.166666667,sout2895,nxl,Austronesian,,Central Malayo-Polynesian,c807633,nxl,false,false,ID,Bolton-1989 Bolton-1990
nub,Nubi,Africa,0.666666666667,32.0833333333,nubi1253,kcn,other,,Creoles and Pidgins,c333D80,kcn,false,false,UG,Heine-1982
nue,Nuer,Africa,8.33333333333,32,nuer1246,nus,Eastern Sudanic,Nilotic,Western Nilotic,cCC6E51,nus,false,false,ET SS,Crazzolara-1933 Frank-1999
nug,Nunggubuyu,Australia,-13.75,135.666666667,nung1290,nuy,Gunwinyguan,,Nunggubuyu,c337580,nuy,false,true,AU,Dixon-2002 Fabricius-1998 Heath-1982 Heath-1984 Hore-1981 Hughes-and-Healy-1971 Hughes-and-Leeding-1971 Nichols-1992
nuk,Nukak,South America,2.5,-71.5,nuka1242,mbr,Cacua-Nukak,,Cacua-Nukak,cCC9851,mbr,false,false,CO,Huber-and-Reed-1992
nun,Nung (in Vietnam),Eurasia,21.9166666667,106.416666667,nung1283,nut,Tai-Kadai,,Kam-Tai,c51CC8A,nut,false,false,VN,Be-et-al-1982 Li-1977a Saul-and-Wilson-1980 Vy-Thi-Be-and-Saul-1974
nup,Nupe,Africa,9.16666666667,5.41666666667,nupe1254,nup,Niger-Congo,Benue-Congo,Nupoid,c423380,nup,false,false,NG,Smith-1967a
nus,Nusu,Eurasia,26.75,99,nusu1239,nuf,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,nuf,false,false,CN,Sun-and-Liu-1986
nuu,Nuuchahnulth,North America,49.6666666667,-126.666666667,nuuc1236,nuk,Wakashan,,Southern Wakashan,c718033,nuk,false,false,CA,Carlson-et-al-2001 Carreno-1913 Davidson-2002 Mithun-1999 Nahayama-1997 Sapir-and-Swadesh-1939 Stonham-1999 Swadesh-1939 Whistler-1986a
nvs,Nivkh (South Sakhalin),Eurasia,47,142.5,gily1242,niv,Nivkh,,Nivkh,c373380,niv,false,false,RU,
nwd,Newar (Dolakha),Eurasia,27.3333333333,86,east2773,new,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,new,false,false,NP,Genetti-1986 Genetti-1990 Genetti-1991 Genetti-1994 Genetti-2003
nya,Nyawaygi,Australia,-19,146.166666667,nyaw1247,nyt,Pama-Nyungan,,Northern Pama-Nyungan,c336680,nyt,false,false,AU,Dixon-1983
nyg,Nyangi,Africa,3.41666666667,33.5833333333,nyan1313,nyp,Eastern Sudanic,,Kuliak,c7251CC,nyp,false,false,UG,Heine-1975a
nyh,Nyiha,Africa,-10,33,nyih1240,nih,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nih,false,false,ZM TZ,Busse-1960
nyi,Nyimang,Africa,12.1666666667,29.3333333333,amas1236,nyi,Eastern Sudanic,,Nyimang,c563380,nyi,false,false,SD,Stevenson-1957 Tucker-and-Bryan-1966
nyk,Nyamkad,Eurasia,32,78.5,tukp1239,tpq,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,tpq,false,false,IN,Sharma-1989b Sharma-1992
nyl,Nyelâyu,Papunesia,-20.3333333333,164.333333333,nyal1254,yly,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,yly,false,false,NC,Ozanne-Rivierre-1998
nym,Nyamwezi,Africa,-5,33,nyam1276,nym,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nym,false,false,TZ,Maganga-and-Schadeberg-1992
nyn,Nyigina,Australia,-18,124.333333333,nyig1240,nyh,Nyulnyulan,,Nyulnyulan,cCCBB51,nyh,false,false,AU,Fabricius-1998 Stokes-1982
nyr,Nyangumarda,Australia,-20,121,nyan1301,nna,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,nna,false,false,AU,Geytenbeek-1980
nyu,Nyulnyul,Australia,-17,122.833333333,nyul1247,nyv,Nyulnyulan,,Nyulnyulan,cCCBB51,nyv,false,false,AU,McGregor-1996
nza,Nzakara,Africa,5,23,nzak1247,nzk,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,nzk,false,false,CF CD,Santandrea-1965b Tucker-and-Bryan-1966
nze,Naga (Zeme),Eurasia,25.1666666667,93.5,zeme1240,nzm,Sino-Tibetan,Tibeto-Burman,Zemeic,c519ECC,nzm,false,false,IN,Soppitt-1885
nzs,New Zealand Sign Language,Papunesia,-43,172,newz1236,nzs,other,,Sign Languages,c515CCC,nzs,false,false,NZ,McKee-2003
obg,Ogbronuagum,Africa,4.75,6.86666666667,ogbr1243,ogu,Niger-Congo,Benue-Congo,Central Delta,cCCC551,ogu,false,false,NG,Kari-2000
obk,Obokuitai,Papunesia,-3,138,obok1239,afz,Lakes Plain,,East Tariku,c80335E,afz,false,false,ID,Scott-and-Jenison-1991
obo,Obolo,Africa,4.58333333333,7.83333333333,obol1243,ann,Niger-Congo,Benue-Congo,Lower Cross,c335C80,ann,false,false,NG,Faraclas-1984
oca,Ocaina,South America,-2.75,-71.75,ocai1244,oca,Witotoan,,Witoto,cCC6851,oca,false,false,PE,Agnew-and-Pike-1957 Aschmann-1993 Derbyshire-and-Payne-1990 Leach-1969
occ,Occitan,Eurasia,44,2,occi1239,oci,Indo-European,,Romance,cCC5154,oci,false,false,FR,Alibert-1976 Bec-1963 Cardaillac-1971 Maas-1969 Malherbe-and-Rosenberg-1996 Maurand-1974 Nouvel-1975 Roca-1999 Sauzet-1986 Sauzet-1994 Wheeler-1988a
ocu,Ocuilteco,North America,18.9166666667,-99.6666666667,atzi1235,ocu,Oto-Manguean,,Matlatzincan,c516ACC,ocu,false,false,MX,Muntzel-1986
ogb,Ogbia,Africa,4.66666666667,6.25,ogbi1239,ogb,Niger-Congo,Benue-Congo,Central Delta,cCCC551,ogb,false,false,NG,Williamson-1970 Williamson-1972
oi,Oi,Eurasia,14.8333333333,107.166666667,oyyy1238,oyb,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,oyb,false,false,LA,
oir,Oirat,Eurasia,37.5,93,kalm1243,xal,Altaic,,Mongolic,cBECC51,xal,false,false,CN MN,Birtalan-2003
oix,Otomí (Ixtenco),North America,19.0833333333,-97.9166666667,ixte1237,otz,Oto-Manguean,,Otomian,c334480,otz,false,false,MX,Lastra-1998
oji,Ojibwa (Eastern),North America,46,-80,east2542,,Algic,,Algonquian,c758033,ojg otw,false,false,CA,Black-Rogers-1982 Bloomfield-1957 Corbett-1991 Nichols-1988 Rhodes-1990 Rhodes-1991 Rhodes-1993 Valentine-2001
ojm,Ojibwe (Minnesota),North America,47.6666666667,-92.5,chip1241,ciw,Algic,,Algonquian,c758033,ciw,false,false,US,Baraga-1878 Nichols-and-Nyholm-1995 Schwartz-and-Dunnigan-1986
ojs,Ojibwa (Severn),North America,53,-90,seve1240,ojs,Algic,,Algonquian,c758033,ojs,false,false,CA,Todd-1970
oka,Okanagan,North America,49.5,-118.5,okan1243,oka,Salishan,,Interior Salish,c51B2CC,oka,false,false,CA US,Mattina-1980 Mattina-1987 Mattina-1993
oko,Oriya (Kotia),Eurasia,18.3333333333,83,adiv1239,ort,Indo-European,,Indic,cCC5351,ort,false,false,IN,Gustafsson-1974
oks,Oksapmin,Papunesia,-5.16666666667,142.166666667,oksa1245,opm,Trans-New Guinea,Awyu-Ok,Oksapmin,c333380,opm,false,false,PG,Lawrence-1972 Lawrence-1993
oku,Oku,Africa,6.25,10.5,okuu1243,oku,Niger-Congo,Benue-Congo,Wide Grassfields,c7D3380,oku,false,false,CM,Davis-1992
olm,Oloh Mangtangai,Papunesia,-0.833333333333,113,ngaj1237,nij,Austronesian,,Barito,c807833,nij,false,false,ID,Muller-1858
olo,Olo,Papunesia,-3.41666666667,142,oloo1241,ong,Torricelli,,Central Wapei,cCCCA51,ong,false,false,PG,McGregor-and-McGregor-1982 Staley-1994 Staley-1995 Staley-nd
olu,Olutec,North America,17.95,-95,olut1240,plo,Mixe-Zoque,,Mixe-Zoque,cA351CC,plo,false,false,MX,Clark-1981 Zavala-2000 Zavala-2002
oma,Omagua,South America,-4,-73.5,omag1248,omg,Tupian,,Maweti-Guarani,cCC6351,omg,false,false,PE,Tavera-Acosta-1907
omh,Omaha,North America,42,-97.25,omah1247,oma,Siouan,,Mississippi Valley Siouan,c7A8033,oma,false,false,US,Boas-and-Swanton-1911 Dorsey-1890
omi,Ömie,Papunesia,-9.05,148.083333333,omie1241,aom,Trans-New Guinea,,Koiarian,c3B8033,aom,false,false,PG,Austing-and-Upia-1975
ond,Oneida,North America,43,-75.6666666667,onei1249,one,Iroquoian,,Northern Iroquoian,cCC516B,one,true,true,US,Abbott-1984 Abbott-2000 Christjohn-and-Hinton-1996 Dahl-1985 Diessel-1999 Lounsbury-1953 Michelson-1988 Mithun-1986
one,One,Papunesia,-3.25,141.916666667,molm1235,aun,Torricelli,,West Wapei,c338036,aun,false,false,PG,
ong,Onge,Eurasia,10.75,92.4166666667,onge1236,oon,South Andamanese,,South Andamanese,c33805D,oon,false,false,IN,Dasgupta-and-Sharma-1982
onn,Onondaga,North America,42.75,-76.1666666667,onon1246,ono,Iroquoian,,Northern Iroquoian,cCC516B,ono,false,false,US,Zeisberger-1887
ono,Ono,Papunesia,-6.16666666667,147.583333333,onoo1246,ons,Trans-New Guinea,Finisterre-Huon,Huon,c804C33,ons,false,false,PG,Bybee-et-al-1994 Phinnemore-1985 Wacke-1930
ood,O'odham,North America,32,-112,toho1245,ood,Uto-Aztecan,,Tepiman,c6D8033,ood,false,false,MX US,Bybee-et-al-1994 Hale-1959 Langacker-1976 Nichols-1992 Payne-1987 Saxton-1963 Saxton-1982 Saxton-and-Saxton-1969 Zepeda-1983
ora,Emai,Africa,7.08333333333,5.91666666667,emai1241,ema,Niger-Congo,Benue-Congo,Edoid,c3B3380,ema,false,false,NG,Donwa-Ifode-1990 Schaefer-and-Egbokhare-2007
orb,Oromo (Boraana),Africa,4.5,38.5,bora1271,gax,Afro-Asiatic,Cushitic,Lowland East Cushitic,c803353,gax,false,false,KE ET,Stroomer-1995
orc,Oroch,Eurasia,50.3333333333,137.5,oroc1248,oac,Altaic,,Tungusic,c798033,oac,false,false,RU,Avrorin-and-Lebedeva-1968 Cincius-1975 Sunik-1982
ord,Ordos,Eurasia,39,109,peri1253,mvf,Altaic,,Mongolic,cBECC51,mvf,false,false,CN,Georg-2003
ore,Orejón,South America,-2.83333333333,-72.5,orej1242,ore,Tucanoan,,Tucanoan,c6FCC51,ore,false,false,PE,Derbyshire-and-Payne-1990 Huber-and-Reed-1992 Velie-and-Velie-1981
orh,Oromo (Harar),Africa,9,42,east2652,hae,Afro-Asiatic,Cushitic,Lowland East Cushitic,c803353,hae,true,true,ET,Heine-1981 Nichols-1992 Owens-1985
ori,Orig,Africa,12.1666666667,30.8333333333,orig1235,tag,Kordofanian,,Rashad,c393380,tag,false,false,SD,Nichols-1992 Schadeberg-and-Elias-1979
ork,Orok,Eurasia,49.5,143.5,orok1265,oaa,Altaic,,Tungusic,c798033,oaa,false,false,RU,Novikova-and-Sem-1997 Petrova-1967 Petrova-1968 Pilsudski-1987
orl,Orokolo,Papunesia,-7.83333333333,145.333333333,orok1267,oro,Eleman,,Eleman,cCC51C5,oro,false,false,PG,Brown-1986 Brown-1988c
orm,Ormuri,Eurasia,32.5,69.75,ormu1247,oru,Indo-European,,Iranian,c803335,oru,false,false,PK,Efimov-1986 Grierson-1921
oro,Orokaiva,Papunesia,-8.83333333333,148.25,orok1269,okv,Trans-New Guinea,Greater Binanderean,Binanderean,c64CC51,okv,false,false,PG,Healey-et-al-1969 Larsen-and-Larsen-1985
orw,Oromo (Waata),Africa,-3.33333333333,39.8333333333,waat1238,ssn,Afro-Asiatic,Cushitic,Lowland East Cushitic,c803353,ssn,false,false,KE,Heine-1981
ory,Orya,Papunesia,-2.75,139.833333333,orya1242,ury,Tor-Kwerba,,Tor-Orya,cCC515D,ury,false,false,ID,Fields-1997
osa,Osage,North America,37,-94,osag1243,osa,Siouan,,Mississippi Valley Siouan,c7A8033,osa,false,false,US,La-Flesche-1932 Quintero-1997 Wolff-1953
osm,Otomí (Santiago Mexquititlan),North America,20.0833333333,-100.083333333,quer1236,otq,Oto-Manguean,,Otomian,c334480,otq,false,false,MX,Hekking-and-Andres-de-Jesus-1989
oss,Ossetic,Eurasia,43,44,osse1243,oss,Indo-European,,Iranian,c803335,oss,false,false,RU GE,Abaev-1964 Bagaev-1965 Haspelmath-1997 Isaev-1966 Isaev-1987 Malherbe-and-Rosenberg-1996 Testen-1997
otm,Otomí (Mezquital),North America,20.1666666667,-99.1666666667,mezq1235,ote,Oto-Manguean,,Otomian,c334480,ote,true,true,MX,Hekking-and-Andres-de-Jesus-1984 Hensey-1972 Hess-1968 Priego-Montfort-de-Mostaghimi-1989 Sinclair-and-Pike-1948 Voigtlander-and-Echegoyen-1979 Wallis-1956 Wallis-1964 Wallis-1968
oto,Oto,North America,40.5,-96,iowa1245,iow,Siouan,,Mississippi Valley Siouan,c7A8033,iow,false,false,US,Miner-1979 Whitman-1947
otr,Otoro,Africa,11.1666666667,30.5,otor1240,otr,Kordofanian,,Heiban,c333480,otr,false,false,SD,Stevenson-1957 Tucker-and-Bryan-1966
ots,Otomí (Sierra),North America,20.6666666667,-98.8333333333,east2556,otm,Oto-Manguean,,Otomian,c334480,otm,false,false,MX,Voigtlander-and-Echegoyen-1985
owc,Oromo (West-Central),Africa,9,37,west2721,gaz,Afro-Asiatic,Cushitic,Lowland East Cushitic,c803353,gaz,false,false,ET,Gragg-1982 Griefenow-Mewis-and-Bitima-1994 Malherbe-and-Rosenberg-1996
owi,Owininga,Papunesia,-4.5,141.75,owin1240,owi,Left May,,Left May,cCC51C2,owi,false,false,PG,Escott-2008
oya,Oriya,Eurasia,21,85,oriy1255,ory,Indo-European,,Indic,cCC5351,ory,false,false,IN,Malherbe-and-Rosenberg-1996 Ray-2000 Ray-2003
paa,Pa'a,Africa,11,9.25,paaa1242,pqa,Afro-Asiatic,Chadic,West Chadic,cADCC51,pqa,false,false,NG,Skinner-1979
pac,Pacoh,Eurasia,16.4166666667,107.083333333,paco1243,pac,Austro-Asiatic,Mon-Khmer,Katuic,cCCC351,pac,false,false,VN,Watson-1964 Watson-1966b Watson-et-al-1979
pad,Padoe,Papunesia,-2.33333333333,121.333333333,pado1242,pdo,Austronesian,,Celebic,c803F33,pdo,false,false,ID,Karhunen-1991 Karhunen-1994
pae,Páez,South America,2.66666666667,-76,paez1247,pbb,Páezan,,Páezan,c5179CC,pbb,false,false,CO,Cruz-Mendez-et-al-1976 Gerdel-1973 Gerdel-1985 Huber-and-Reed-1992 Jung-1989 Rojas-Curieux-et-al-1991 Slocum-1986 Slocum-and-Gerdel-1983
pag,Pagu,Papunesia,1.25,127.75,pagu1249,pgu,North Halmaheran,,North Halmaheran,c807933,pgu,false,false,ID,Wimbish-1992
pai,Paiwan,Papunesia,22.5,120.833333333,paiw1248,pwn,Austronesian,,Paiwan,cCC6A51,pwn,true,true,TW,Egli-1990 Ferrel-1982 Ferrell-1982 Ho-1977 Zeitoun-et-al-1996
pak,Pakanha,Australia,-14.5,142.416666667,paka1251,pkn,Pama-Nyungan,,Northern Pama-Nyungan,c336680,pkn,false,false,AU,Hamilton-1998
pal,Palauan,Papunesia,7.5,134.583333333,pala1344,pau,Austronesian,,Palauan,cCCB251,pau,false,false,PW,Georgopoulos-1991 Hagege-1986 Josephs-1975 McManus-1977
pam,Pame,North America,22,-99.5,sout2999,pmz,Oto-Manguean,,Pamean,c334880,pmz,false,false,MX,Manrique-1967
pan,Panjabi,Eurasia,31,74,panj1256,pan,Indo-European,,Indic,cCC5351,pan,false,false,PK IN,Bhatia-1993 Bhatia-2000 Bhatia-2001 Dahl-1985 Gill-and-Gleason-1963 Gill-and-Gleason-1969 Malherbe-and-Rosenberg-1996 Shackle-2003 Smirnov-1976
pap,Papiamentu,North America,12.25,-69,papi1253,pap,other,,Creoles and Pidgins,c333D80,pap,false,false,AN,Groilo-1974 Maurer-1988 den-Besten-1996
par,Päri,Africa,5,32.5,pari1256,lkr,Eastern Sudanic,Nilotic,Western Nilotic,cCC6E51,lkr,false,false,SS,Andersen-1988 Andersen-2000 Simeoni-1978
pat,Patep,Papunesia,-6.91666666667,146.583333333,pate1247,ptp,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,ptp,false,false,PG,Lauck-1976 Lauck-1979
pau,Paumarí,South America,-6,-64,paum1247,pad,Arauan,,Arauan,cC4CC51,pad,false,true,BR,Chapman-1981 Chapman-and-Derbyshire-1991 Derbyshire-and-Payne-1990
paw,Pawaian,Papunesia,-7,145.083333333,pawa1255,pwa,Teberan-Pawaian,,Pawaian,c51CC73,pwa,false,false,PG,MacDonald-1973 Trefry-1969 Trefry-1972
pba,Pima Bajo,North America,29,-111,pima1248,pia,Uto-Aztecan,,Tepiman,c6D8033,pia,false,false,MX,Estrada-Fernandez-1996
pcm,Poqomam,North America,14.6666666667,-90.5,poqo1253,poc,Mayan,,Mayan,cA951CC,poc,false,false,GT,Santos-Nicolas-et-al-1997 Zinn-and-Zinn-nd
pdp,Folopa,Papunesia,-7,144.5,folo1238,ppo,Teberan-Pawaian,,Teberan,c338048,ppo,false,false,PG,
pec,Pech,North America,15,-85.5,pech1241,pay,Chibchan,,Pech,c768033,pay,false,false,HN,Conzemius-1928 Holt-1986 Holt-1999b
pem,Pemon,South America,5.33333333333,-62,pemo1248,aoc,Cariban,,Cariban,cCC9251,aoc,false,false,GY VR,de-Armellada-1944
pen,Pengo,Eurasia,19.8333333333,83.8333333333,peng1244,peg,Dravidian,,Dravidian,cB7CC51,peg,false,false,IN,Emeneau-1980 Gil-1994b Stolz-1996
per,Pero,Africa,9.58333333333,11,pero1241,pip,Afro-Asiatic,Chadic,West Chadic,cADCC51,pip,false,false,NG,Frajzyngier-1985 Frajzyngier-1989
pga,Pilagá,South America,-25,-60,pila1245,plg,Guaicuruan,,Qom,cCC8551,plg,false,false,AR,Vidal-2001
pgl,Pingilapese,Papunesia,6.21666666667,160.7,ping1243,pif,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,pif,false,false,FM,Kennedy-2002
phl,Phlong,Eurasia,15,99,pwon1235,pww,Sino-Tibetan,Tibeto-Burman,Karen,c51CCC4,pww,false,false,TH,Cooke-et-al-1976
pia,Piaroa,South America,5,-67,piar1243,pid,Sáliban,,Maco-Piaroa,c51CCAA,pid,false,false,VR,Derbyshire-and-Payne-1990 Krisologo-1976 Krute-1989
pil,Pileni,Papunesia,-10.2166666667,166.216666667,pile1238,piv,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,piv,false,false,SB,Naess-2000
pin,Pintupi,Australia,-23,129,pint1250,piu,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,piu,false,false,AU,Hansen-and-Hansen-1969 Hansen-and-Hansen-1977
pip,Pipil,North America,13.8333333333,-89.5833333333,pipi1250,ppl,Uto-Aztecan,,Aztecan,cA9CC51,ppl,false,false,SV,Campbell-1985 Nichols-1992
pir,Piro,South America,-11,-73.5,yine1238,pib,Arawakan,,Purus,cCC5A51,pib,false,false,PE,Derbyshire-and-Payne-1990 Matteson-1965 Nies-1986
pis,Pisa,Papunesia,-5.16666666667,139.166666667,asue1235,psa,Trans-New Guinea,Awyu-Ok,Awju,c51CC65,psa,false,false,ID,Boelaars-1950
pit,Pitjantjatjara,Australia,-26,130,pitj1243,pjt,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,pjt,false,true,AU,Bowe-1990 Douglas-1959 Douglas-1964 Eckert-and-Hudson-1988 Eckert-and-Hudson-1994 Glass-and-Hackett-1970
pkm,Pokomchí,North America,15.4166666667,-90.5,poqo1254,poh,Mayan,,Mayan,cA951CC,poh,false,false,GT,Mayers-1960
pkn,Paakantyi,Australia,-32.5,142.5,darl1243,drl,Pama-Nyungan,,Central Pama-Nyungan,c335F80,drl,false,false,AU,Fabricius-1998 Hercus-1982 Hercus-1999b Mushin-1995
pkt,Pokot,Africa,1.5,35.5,poko1263,pko,Eastern Sudanic,Nilotic,Southern Nilotic,c807733,pko,false,false,KE UG,Baroja-1989 Crazzolara-1978 Tucker-and-Bryan-1966
pla,Playero,South America,7,-71,play1240,gob,Guahiban,,Guahiban,cCC6751,gob,false,false,CO,Huber-and-Reed-1992
plb,Polabian,Eurasia,51,12.8333333333,pola1255,pox,Indo-European,,Slavic,c803338,pox,false,false,DE,Olesch-1974
plg,Palaung,Eurasia,22.6666666667,96.6666666667,shwe1236,pll,Austro-Asiatic,Mon-Khmer,Palaungic,c398033,pll,false,false,MM,Bybee-et-al-1994 Milne-1921
plh,Paulohi,Papunesia,-3.25,128.75,paul1238,plh,Austronesian,,Central Malayo-Polynesian,c807633,plh,false,false,ID,Stresemann-1918
plk,Palikur,South America,3,-51,pali1279,plu,Arawakan,,Palikur,c6F8033,plu,false,false,BR,Derbyshire-1986 Derbyshire-and-Payne-1990 Green-and-Green-1972
plp,Pulopetak,Papunesia,1.41666666667,109.833333333,ngaj1237,nij,Austronesian,,Barito,c807833,nij,false,false,ID,Mihing-and-Stokhof-1977
plr,Palor,Africa,14.8333333333,-16.75,palo1243,fap,Niger-Congo,North-Central Atlantic,Cangin,c5D8033,fap,false,false,SN,DAlton-1983
pmc,Pomo (Central),North America,39,-123.333333333,cent2138,poo,Hokan,,Pomoan,c803733,poo,false,false,US,Corbett-and-Mithun-1996 Mithun-1988a Mithun-1988b Mithun-1990 Mithun-1993
pme,Pomo (Eastern),North America,39,-122.666666667,east2545,peb,Hokan,,Pomoan,c803733,peb,false,false,US,McLendon-1975 McLendon-1996
pmn,Pomo (Northern),North America,39.3333333333,-123.5,nort2966,pej,Hokan,,Pomoan,c803733,pej,false,false,US,OConnor-1992
pms,Paamese,Papunesia,-16.5,168.25,paam1238,pma,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,pma,false,true,VU,Crowley-1982
pna,Pamona,Papunesia,-1.75,120.833333333,pamo1252,pmf,Austronesian,,Celebic,c803F33,pmf,false,false,ID,Adriani-1931
png,Pangwa,Africa,-10,34.75,pang1287,pbr,Niger-Congo,Benue-Congo,Bantu,cC3CC51,pbr,false,false,TZ,Stirnimann-1983
pnn,Pangasinan,Papunesia,15.9166666667,120.333333333,pang1290,pag,Austronesian,,Northern Luzon,c805533,pag,false,false,PH,Benton-1971a Benton-1971b Bybee-et-al-1994 Llamzon-1978 Rubino-2001b
pno,Paiute (Northern),North America,42,-118,nort2954,pao,Uto-Aztecan,,Northern Uto-Aztecan,c803633,pao,false,false,US,Davis-1966 Langacker-1976 Poldevaart-1987 Snapp-et-al-1982
pnr,Panare,South America,6.5,-66,enap1235,pbh,Cariban,,Cariban,cCC9251,pbh,false,false,VR,Aikhenvald-2000 Carlson-and-Payne-1989 Cauty-1974a Cauty-1974b Cauty-1978 Derbyshire-and-Payne-1990 Payne-1990b
pnu,Bunu (Younuo),Eurasia,24,107,youn1235,buh,Hmong-Mien,,Mienic,c6151CC,buh,false,false,CN,Mao-and-Tsu-yao-1972
pnx,Panará,South America,-10,-55,pana1307,kre,Macro-Ge,Je,Je Setentrional,c807033,kre,false,false,BR,Dourado-2001
pny,Panyjima,Australia,-22.8333333333,118.416666667,pany1241,pnw,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,pnw,false,false,AU,Dench-1991
poa,Po-Ai,Papunesia,-20.6666666667,164.833333333,fwai1237,fwa,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,fwa,false,false,NC,
pod,Podoko,Africa,11,14.0833333333,park1239,pbi,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,pbi,false,false,CM,Jarvis-1989
pog,Pogoro,Africa,-8.75,36.5,pogo1243,poy,Niger-Congo,Benue-Congo,Bantu,cC3CC51,poy,false,false,TZ,Hendle-1907
poh,Pohnpeian,Papunesia,6.88333333333,158.25,pohn1238,pon,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,pon,false,false,FM,Lynch-1998 Rehg-1981 Rehg-1984a Rehg-1984b Rehg-and-Sohl-1979
pok,Poko-Rawo,Papunesia,-2.83333333333,141.583333333,rawo1244,rwa,Skou,,Serra Hills,c338068,rwa,false,false,PG,
pol,Polish,Eurasia,52,20,poli1260,pol,Indo-European,,Slavic,c803338,pol,false,false,PL,Bielec-1998 Brooks-1975 Bulas-and-Whitfield-1983 Franks-1985 Haspelmath-1997 Laskowski-1972 Mazur-1983 Mikhalik-1984 Muhlhausler-and-Harre-1990 Rothstein-1993 Siewierska-1993 Stone-1980 Szober-1957 Wiemer-2007 Wojtowcz-1972
pop,Popoloca (Metzontla),North America,18.1666666667,-97.5,mezo1235,pbe,Oto-Manguean,,Popolocan,c5173CC,pbe,false,false,MX,Veerman-Leichsenring-1991
por,Portuguese,Eurasia,39,-8,port1283,por,Indo-European,,Romance,cCC5154,por,false,false,PT,Abaurre-and-Wetzels-1992 Camara-and-Mattoso-1979 Dahl-1985 Gartner-1998 Haspelmath-1997 Hutchinson-and-Lloyd-1996 Lamb-1964 Lausberg-1972 Malherbe-and-Rosenberg-1996 Martins-1982 Mateus-et-al-1989 Muhlhausler-and-Harre-1990 Parkinson-1988 Roca-1999 Schmitt-2001
pot,Potawatomi,North America,44.5,-85,pota1247,pot,Algic,,Algonquian,c758033,pot,false,false,US,Hockett-1948
pow,Powhatan,North America,37.3333333333,-76.5,powh1243,pim,Algic,,Algonquian,c758033,pim,false,false,US,Strachey-1849
ppc,Piapoco,South America,4,-69.5,piap1246,pio,Arawakan,,Japura-Colombia,c9A51CC,pio,false,false,CO,Reinoso-Galindo-2002 de-Klumpp-1995
ppi,Pitta Pitta,Australia,-22.8333333333,140,pitt1247,pit,Pama-Nyungan,,Central Pama-Nyungan,c335F80,pit,false,false,AU,Blake-1979c Blake-and-Breen-1971 Fabricius-1998
pra,Prasuni,Eurasia,35.5,71,pras1239,prn,Indo-European,,Nuristani,cCC516E,prn,false,false,AF,Morgenstierne-1949
prc,Paresi,South America,-14,-57.5,pare1272,pab,Arawakan,,Central Arawakan,c803833,pab,false,false,BR,Derbyshire-1986 Derbyshire-and-Payne-1990
prd,Parji (Dravidian),Eurasia,19.5,82.5,duru1236,pci,Dravidian,,Dravidian,cB7CC51,pci,false,false,IN,Burrow-and-Bhattacharya-1953
pre,Pare,Africa,-4,36.5,asut1235,asa,Niger-Congo,Benue-Congo,Bantu,cC3CC51,asa,false,false,TZ,Kagaya-1989 Kotz-1964
prh,Pirahã,South America,-7,-62,pira1253,myp,Mura,,Mura,c5B3380,myp,true,true,BR,Derbyshire-and-Payne-1990 Everett-1986 Everett-1988 Everett-1991 Everett-and-Everett-1984 Nichols-1992
pri,Príncipense,Africa,1.61666666667,7.36666666667,prin1242,pre,other,,Creoles and Pidgins,c333D80,pre,false,false,ST,Gunther-1973
prk,Purki,Eurasia,34.6666666667,76,puri1258,prx,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,prx,false,false,IN,Rangan-1979
pro,Provençal,Eurasia,44,6,occi1239,oci,Indo-European,,Romance,cCC5154,oci,false,false,FR,Malherbe-and-Rosenberg-1996
prs,Persian,Eurasia,32,54,west2369,pes,Indo-European,,Iranian,c803335,pes,true,true,IR,Alavi-and-Lorenz-1988 Boyle-1966 Comrie-1981b Dahl-1985 Elwell-Sutton-1941 Elwell-Sutton-1963 Haspelmath-1997 Jones-1809 Lambton-1953 Lambton-1967 Lambton-1974 Lazard-1957a Lazard-1957b Lazard-1992 Mahootian-1997 Majidi-1986 Majidi-1990 Majidi-and-Ternes-1999 Malherbe-and-Rosenberg-1996 Netzer-1971 Obolensky-et-al-1963 Rastorgueva-1964 Rubinchik-1960 Windfuhr-1979 Windfuhr-1982 Windfuhr-1987
prt,Piratapuyo,South America,0.333333333333,-69.5,pira1254,pir,Tucanoan,,Tucanoan,c6FCC51,pir,false,false,CO BR,Huber-and-Reed-1992
psh,Pashto,Eurasia,33,67,cent1973,pst,Indo-European,,Iranian,c803335,pst,false,false,PK AF,Becka-1969 Elfenbein-1997a Grjunberg-1987 Grjunberg-and-Edelman-1987 Lorenz-1979 Lorenz-1982 Lorimer-1915 Malherbe-and-Rosenberg-1996 Penzl-1955 Shafeev-1964 Tegey-and-Robson-1996
psj,Popoloca (San Juan Atzingo),North America,18.1666666667,-96.4166666667,sanj1285,poe,Oto-Manguean,,Popolocan,c5173CC,poe,false,false,MX,Kalstrom-Dolson-et-al-1995 Krumholz-et-al-1995
psl,Plains-Indians Sign Language,North America,40,-100,plai1235,psd,other,,Sign Languages,c515CCC,psd,false,false,US,Taylor-1996
psm,Passamaquoddy-Maliseet,North America,45,-67,male1292,pqm,Algic,,Algonquian,c758033,pqm,false,true,CA US,Francis-and-Leavitt-1998 LeSourd-1993 Leavitt-1996 Leavitt-and-Francis-1986 Ng-1999 Ng-2002 Sherwood-1986 Teeter-1971 Teeter-and-LeSourd-1983
pso,Pomo (Southeastern),North America,39,-122.5,sout2982,pom,Hokan,,Pomoan,c803733,pom,false,true,US,Moshinsky-1974
psv,Popoloca (San Vicente Coyotepec),North America,18.25,-97.8333333333,coyo1236,pbf,Oto-Manguean,,Popolocan,c5173CC,pbf,false,false,MX,Barrera-and-Dakin-1978
psw,Port Sandwich,Papunesia,-16.5,167.75,port1285,psw,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,psw,false,false,VU,Crowley-2002e
pta,Paita,Papunesia,-22.0833333333,166.5,dumb1241,duf,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,duf,false,false,NC,Paita-and-Shintani-1990 Shintani-and-Paita-1990
pte,Paite,Eurasia,24,93.1666666667,pait1244,pck,Sino-Tibetan,Tibeto-Burman,Kuki-Chin,c51CCB8,pck,false,false,IN,Abbi-1992
ptp,Patpatar,Papunesia,-3.76666666667,152.5,patp1243,gfk,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,gfk,false,false,PG,Peekel-1909
ptt,Pattani,Eurasia,32.75,76.75,patt1248,lae,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,lae,false,false,IN,Sharma-1982a Sharma-1989b Sharma-1989c Sharma-2000
ptw,Patwin,North America,39,-122.333333333,patw1250,pwi,Penutian,,Wintuan,c5190CC,pwi,false,false,US,Whistler-1977 Whistler-1986b
pui,Puinave,South America,4,-68,puin1248,pui,,,,c336580,pui,false,false,CO VR,Huber-and-Reed-1992
puk,Parauk,Eurasia,23.25,99.5,para1301,prk,Austro-Asiatic,Mon-Khmer,Palaungic,c398033,prk,false,false,CN MM,Diffloth-1980 Maddieson-and-Ladefoged-1985 Qiu-et-al-1980
pul,Puluwat,Papunesia,7.33333333333,149.333333333,pulu1242,puw,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,puw,false,false,FM,Elbert-1972 Elbert-1974 Lynch-2002e
pum,Pumi,Eurasia,28,101,pumi1242,pmi,Sino-Tibetan,Tibeto-Burman,Qiangic,c33806F,pmi,false,false,CN,Ding-1998 Lu-1983 Sun-1993
pun,Pungupungu,Australia,-13.5,130.416666667,wadj1254,wdj,Wandjiginy,,Wandjiginy,c51CC9E,wdj,false,false,AU,Tryon-1974
puq,Puquina,South America,-16.5,-68.5,puqu1242,puq,,,,c51A1CC,puq,false,false,BO PE,Adelaar-2004
pur,Purépecha,North America,19.5,-101.666666667,pure1242,tsz,Tarascan,,Tarascan,c51CC7F,tsz,false,false,MX,Chamereau-2000 Chamoreau-1998 Chamoreau-2000 Foster-1969 Friedrich-1984 Gilberti-1901 Nichols-1992 Stolz-1996 Suarez-1983b de-Paul-1989
put,Paiute (Southern),North America,37.8333333333,-113.333333333,sout2969,ute,Uto-Aztecan,,Northern Uto-Aztecan,c803633,ute,false,false,US,Davis-1966 Harms-1966 Langacker-1976 Nichols-1992 Sapir-1930
pwn,Pawnee,North America,41,-98.6666666667,pawn1254,paw,Caddoan,,Northern Caddoan,c805A33,paw,false,false,US,Nichols-1992 Parks-1976 Weltfish-1936 Weltfish-1937
qaf,Qafar,Africa,12,42,afar1241,aar,Afro-Asiatic,Cushitic,Lowland East Cushitic,c803353,aar,false,false,ET ER DJ,Bliese-1981 Corbett-1991 Hayward-1998 Malherbe-and-Rosenberg-1996 Parker-and-Hayward-1985
qan,Quechua (Ancash),South America,-8.5,-77.5,chiq1249,qxa,Quechuan,,Quechuan,c336880,qxa,false,false,PE,Parker-and-Chavez-1976
qaw,Qawasqar,South America,-49,-75,qawa1238,alc,Alacalufan,,Alacalufan,c738033,alc,false,true,CL,Aguilera-1980 Beauvoir-1915 Clairis-1977 Clairis-1985 Perez-1988
qay,Quechua (Ayacucho),South America,-14,-74,ayac1239,quy,Quechuan,,Quechuan,c336880,quy,false,false,PE,Adelaar-1984 Hartmann-1987 Parker-1969
qbo,Quechua (Bolivian),South America,-20,-66,boli1262,,Quechuan,,Quechuan,c336880,quh qul,false,false,BO,van-de-Kerke-2007
qca,Quechua (Cajamarca),South America,-7,-78.5,caja1238,qvc,Quechuan,,Quechuan,c336880,qvc,false,false,PE,Quesada-1976
qch,Quiché,North America,15,-91.4166666667,kich1262,quc,Mayan,,Mayan,cA951CC,quc,false,false,GT,Mayers-1966 Pontious-1980 Stolz-1996
qco,Quechua (Cochabamba),South America,-17.5,-66,sout2991,quh,Quechuan,,Quechuan,c336880,quh,false,false,BO,Dahl-1985 Lastra-1968
qcu,Quechua (Cuzco),South America,-14.5,-71,cusc1236,quz,Quechuan,,Quechuan,c336880,quz,false,false,PE,Faller-2001 van-de-Kerke-2007 von-Tschudi-1884
qec,Quechua (Ecuadorean),South America,-1,-79,chim1302,qug,Quechuan,,Quechuan,c336880,qug,false,false,EC,Catta-1987 Cordero-1967 Reyburn-1954b
qhu,Quechua (Huallaga),South America,-9.5,-75.5,hual1241,qub,Quechuan,,Quechuan,c336880,qub,false,false,PE,Weber-1989
qia,Qiang,Eurasia,32,102.666666667,qian1264,,Sino-Tibetan,Tibeto-Burman,Qiangic,c33806F,cng qxs,false,false,CN,LaPolla-2003b Sun-1981
qim,Quechua (Imbabura),South America,0.333333333333,-78,imba1240,qvi,Quechuan,,Quechuan,c336880,qvi,true,true,EC,Cole-1982 Cole-1985 Derbyshire-and-Payne-1990 Jake-1985
qta,Quechua (Tarma),South America,-11.4166666667,-75.75,nort2980,qvn,Quechuan,,Quechuan,c336880,qvn,false,false,PE,Adelaar-1977
que,Quechan,North America,32.8333333333,-114.333333333,quec1382,yum,Hokan,,Yuman,cCC6151,yum,false,false,US,Halpern-1946a Halpern-1946b Halpern-1947
qui,Quileute,North America,47.9166666667,-124.25,quil1240,qui,Chimakuan,,Chimakuan,cCC8A51,qui,false,false,US,Andrade-1931 Andrade-1933 Hoard-1993 Nichols-1992 Powell-1975 Powell-and-Woodruff-1976 Swadesh-1955
qum,Sipakapense,North America,15.25,-91.75,sipa1247,qum,Mayan,,Mayan,cA951CC,qum,false,false,GT,Barrett-1999
rad,Rade,Eurasia,13,108.5,rade1240,rad,Austronesian,,Malayo-Sumbawan,cCC7D51,rad,false,false,VN,Y-Chang-1979
rag,Raga,Papunesia,-15.5,168.166666667,hano1246,lml,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,lml,false,false,VU,Crowley-2002c
ral,Ralte,Eurasia,23.75,92.75,ralt1242,ral,Sino-Tibetan,Tibeto-Burman,Kuki-Chin,c51CCB8,ral,false,false,MM IN,Grierson-1904
ram,Rama,North America,11.75,-83.75,rama1270,rma,Chibchan,,Rama,c805833,rma,true,true,NI,Craig-and-Hale-1988 Grinevald-1988 Grinevald-1990 Grinevald-nd Lehmann-1920 Rigby-and-Schneider-1989
rao,Rao,Papunesia,-4.75,144.5,raoo1244,rao,Lower Sepik-Ramu,Ramu,Annaberg,cCB51CC,rao,false,false,PG,Stanhope-1980
rap,Rapanui,Papunesia,-27.1166666667,-109.366666667,rapa1244,rap,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,rap,true,true,CL,Chapin-1978 Du-Feu-1996 Fuentes-1960
ras,Rashad,Africa,11.8333333333,31.05,tega1236,ras,Kordofanian,,Rashad,c393380,ras,false,false,SD,Tucker-and-Bryan-1966
rav,Romani (Ajia Varvara),Eurasia,38,23.5833333333,balk1252,rmn,Indo-European,,Indic,cCC5351,rmn,false,false,GR,Igla-1989
raw,Rawang,Eurasia,27.5,97.5,rawa1265,raw,Sino-Tibetan,Tibeto-Burman,Nungish,c338073,raw,false,false,MM,Barnard-1934 Bybee-et-al-1994 LaPolla-2000 LaPolla-2003a
rbg,Romani (Burgenland),Eurasia,47.5,16.5,sint1235,rmo,Indo-European,,Indic,cCC5351,rmo,false,false,AT,Matras-et-al-2002
rbu,Romani (Bugurdzi),Eurasia,42.6666666667,21.1666666667,balk1252,rmn,Indo-European,,Indic,cCC5351,rmn,false,false,RS,Boretzky-1993
rcp,Russian-Chinese Pidgin (Birobidjan),Eurasia,48.8,132.95,kjac1234,,other,,Creoles and Pidgins,c333D80,,false,false,RU,
rej,Rejang,Papunesia,-3.41666666667,102.5,reja1240,rej,Austronesian,,Rejang,c806F33,rej,false,false,ID,McGinn-1982
rem,Remo,Eurasia,18,82,bond1245,bfw,Austro-Asiatic,,Munda,c807D33,bfw,false,false,IN,Fernandez-1967
ren,Rendille,Africa,2,37.5,rend1243,rel,Afro-Asiatic,Cushitic,Lowland East Cushitic,c803353,rel,false,false,KE,Oomen-1981 Pillinger-1989 Pillinger-and-Galboran-1999
res,Resígaro,South America,-2.41666666667,-71.5,resi1247,rgr,Arawakan,,Japura-Colombia,c9A51CC,rgr,false,false,CO PE,Allin-1976 Allin-1979
ret,Retuarã,South America,-0.5,-70.6666666667,tani1257,tnc,Tucanoan,,Tucanoan,c6FCC51,tnc,false,false,CO,Huber-and-Reed-1992 Strom-1992
rga,Ronga,Africa,-26,32.5,rong1268,rng,Niger-Congo,Benue-Congo,Bantu,cC3CC51,rng,false,false,MZ,Junod-1896
rgc,rGyalrong (Caodeng),Eurasia,31.6666666667,101.75,zbua1234,jya,Sino-Tibetan,Tibeto-Burman,rGyalrong,c33806C,jya,false,false,CN,Sun-2003
rgn,Roglai (Northern),Eurasia,12.1666666667,108.833333333,nort2994,rog,Austronesian,,Malayo-Sumbawan,cCC7D51,rog,false,false,VN,Cobbey-and-Cobbey-1977
ria,Riantana,Papunesia,-7.5,138.5,rian1263,ran,Kolopom,,Kolopom,cCC51A5,ran,false,false,ID,Voorhoeve-1975
rik,Rikbaktsa,South America,-11.8333333333,-57.5,rikb1245,rkb,Macro-Ge,,Rikbaktsa,c743380,rkb,false,false,BR,Boswood-1978a
rim,Rimi,Africa,-5,34.6666666667,nyat1246,rim,Niger-Congo,Benue-Congo,Bantu,cC3CC51,rim,false,false,TZ,Olson-1964
rit,Ritharngu,Australia,-12.8333333333,135.5,rita1239,rit,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,rit,false,false,AU,Fabricius-1998 Heath-1980a
rji,Raji,Eurasia,28,82.75,raji1240,rji,Sino-Tibetan,Tibeto-Burman,Raji-Raute,c80335A,rji,false,false,IN NP,Sharma-1990
rka,Romani (Kalderash),Eurasia,45,21,vlax1238,rmy,Indo-European,,Indic,cCC5351,rmy,false,false,RS,Boretzky-1994 Matras-et-al-2002
rlo,Romani (Lovari),Eurasia,47,21.5,vlax1238,rmy,Indo-European,,Indic,cCC5351,rmy,false,false,HU RO,Matras-et-al-2002
rmb,Rembarnga,Australia,-12.8333333333,134.583333333,remb1249,rmb,Gunwinyguan,,Eastern Gunwinyguan,c3C8033,rmb,false,false,AU,Fabricius-1998 McKay-1975
rmc,Romansch,Eurasia,46.6666666667,9.16666666667,roma1326,roh,Indo-European,,Romance,cCC5154,roh,false,false,CH,Lausberg-1972 Malherbe-and-Rosenberg-1996
rnd,Rundi,Africa,-3.5,30,rund1242,run,Niger-Congo,Benue-Congo,Bantu,cC3CC51,run,false,false,BI,Meeussen-1959
rng,Rengao,Eurasia,14.5833333333,107.833333333,reng1252,ren,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,ren,false,false,VN,Gregerson-and-Gregerson-1977
rnn,Rennellese,Papunesia,-11.6166666667,160.25,renn1242,mnv,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mnv,false,false,SB,Elbert-1975 Elbert-1981
rnr,Romani (North Russian),Eurasia,60,38,balt1257,rml,Indo-European,,Indic,cCC5351,rml,false,false,RU,Ventzel-1983
rny,Runyankore,Africa,-0.5,30.5,nyan1307,nyn,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nyn,false,false,UG,Morris-and-Kirwan-1957 Morris-and-Kirwan-1972
rom,Romanian,Eurasia,46,25,roma1327,ron,Indo-European,,Romance,cCC5154,ron,false,false,RO,Agard-1958 Augerot-1974 Avram-1978 Bergman-1968 Beyrer-et-al-1987 Braun-1984 Cazacu-et-al-1967 Coteanu-et-al-1998 Dahl-1985 Graur-and-Rosetti-1938 Haspelmath-1997 Lausberg-1972 Lombard-1935 Mallinson-1986 Mallinson-1988 Roca-1999 Ruhlen-1973 Steriade-1984 Tataru-1978 Ulivi-1977 Ulivi-1985
ron,Ron,Africa,9,8.75,ronn1241,cla,Afro-Asiatic,Chadic,West Chadic,cADCC51,cla,false,false,NG,Seibert-1998
ror,Roro,Papunesia,-8.75,146.583333333,waim1251,rro,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,rro,false,false,PG,Bluhme-1970 Davis-1974 Strong-1913
rot,Rotuman,Papunesia,-12.5,177.066666667,rotu1241,rtm,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,rtm,false,false,FJ,Churchward-1940 Moravcsik-1978 Schmidt-2002
rov,Roviana,Papunesia,-8.25,157.333333333,rovi1238,rug,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,rug,false,false,SB,Corston-Oliver-2002
rpa,Rang Pas,Eurasia,30.3333333333,79.3333333333,tibe1272,bod,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,bod,false,false,NP,Zoller-1983
rru,Runyoro-Rutooro,Africa,1.5,31.3333333333,nyor1246,nyo,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nyo,false,false,UG,Rubongoya-1999
rsc,Romansch (Scharans),Eurasia,46.75,9.5,roma1326,roh,Indo-European,,Romance,cCC5154,roh,false,false,CH,Soler-and-Ebneter-1988
rse,Romani (Sepecides),Eurasia,38.25,27,balk1252,rmn,Indo-European,,Indic,cCC5351,rmn,false,false,TR,Cech-and-Heinschink-1996 Matras-et-al-2002
rsh,Shughni,Eurasia,38.1666666667,71.5,shug1248,sgh,Indo-European,,Iranian,c803335,sgh,false,false,AF TJ,
rsl,Russian Sign Language,Eurasia,56,44,russ1255,rsl,other,,Sign Languages,c515CCC,rsl,false,false,RU,Grenoble-1992
rsm,Romansch (Surmeiran),Eurasia,46.5833333333,9.75,roma1326,roh,Indo-European,,Romance,cCC5154,roh,false,false,CH,Kamprath-1987 Roca-1999
rsu,Romansch (Sursilvan),Eurasia,46.6666666667,8.83333333333,roma1326,roh,Indo-European,,Romance,cCC5154,roh,false,false,CH,Candinas-1982 Haiman-1988
rti,Roti,Papunesia,-10.6666666667,123.25,term1237,twu,Austronesian,,Central Malayo-Polynesian,c807633,twu,false,false,ID,Fox-and-Grimes-1995 Jonker-1915
rtk,Rotokas,Papunesia,-6,155.166666667,roto1249,roo,West Bougainville,,West Bougainville,c7F8033,roo,false,false,PG,Firchow-and-Firchow-1969 Firchow-et-al-1973
ruk,Rukai (Tanan),Papunesia,22.8333333333,120.833333333,ruka1240,dru,Austronesian,,Rukai,c804733,dru,false,false,TW,Bybee-et-al-1994 Li-1973 Li-1977b Zeitoun-2007
rum,Rumu,Papunesia,-7.16666666667,144.25,rumu1243,klq,Trans-New Guinea,,Turama-Kikorian,c548033,klq,false,false,PG,Petterson-1999
run,Runga,Africa,10.3333333333,21,rung1258,rou,Maban,,Maban,c80337E,rou,false,false,CF TD,Nougayrol-1989
rus,Russian,Eurasia,56,38,russ1263,rus,Indo-European,,Slavic,c803338,rus,true,true,RU,Berneker-and-Vasmer-1971 Beyer-2001 Bivon-1971 Borras-and-Christian-1959 Boyanus-1955 Comrie-1989 Corbett-1991 Dahl-1985 Fraser-and-Corbett-1995 Halle-1959 Hamilton-1980 Haspelmath-1997 Jones-and-Ward-1969 Kodzasov-1999b Krylova-and-Khavronina-1976 Launer-1974 Pulkina-1978 Pulkina-and-Zakhava-Nekrasova-1974 Stilman-and-Harkins-1964 Tauscher-and-Kirschbaum-1963 Unbegaun-1957 Wade-1992 Wedel-and-Romanov-1964
rut,Rutul,Eurasia,41.5,47.4166666667,rutu1240,rut,Nakh-Daghestanian,Daghestanian,Lezgic,c8051CC,rut,false,false,AZ RU,Alekseev-1994b Dzhejranishvili-1967 Ibragimov-1978 Kodzasov-1990b Maxmudova-2001
rwa,Rawa,Papunesia,-5.83333333333,146,rawa1267,rwo,Trans-New Guinea,Finisterre-Huon,Finisterre,cCC51B9,rwo,false,false,PG,Toland-and-Toland-1991
rwe,Romani (Welsh),Eurasia,52,-4,wels1246,rmw,Indo-European,,Indic,cCC5351,rmw,false,false,GB,Sampson-1926
ryu,Shuri,Eurasia,26.5,127.5,cent2126,ryu,Japanese,,Japanese,c80334A,ryu,false,false,JP,Kuwae-1983
saa,Sa'a,Papunesia,-9.61666666667,161.45,saaa1240,apb,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,apb,false,false,SB,Ivens-1918
sab,Sa'ban,Papunesia,3.66666666667,115.666666667,saba1265,snv,Austronesian,,North Borneo,c804E33,snv,false,false,ID,Clayre-1973
sae,Saek,Eurasia,17.4166666667,104.75,saek1240,skb,Tai-Kadai,,Kam-Tai,c51CC8A,skb,false,false,LA TH,Morev-1988
sah,Sahu,Papunesia,1.16666666667,127.5,sahu1245,saj,North Halmaheran,,North Halmaheran,c807933,saj,false,false,ID,Visser-and-Voorhoeve-1987
sak,Sakao,Papunesia,-15.1666666667,167.083333333,saka1289,sku,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,sku,false,false,VU,Guy-1974a
sal,Salinan,North America,36,-121,sali1253,sln,Hokan,,Salinan,c336C80,sln,false,false,US,Dryer-1989 Mason-1918 Nichols-1992 Turner-1987
sam,Samoan,Papunesia,-13.9166666667,-171.833333333,samo1305,smo,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,smo,false,false,AS WS,Chung-1973 Marsack-1962 Marsack-1975 Milner-1966 Moravcsik-1978 Mosel-1994b Mosel-and-Hovdhaugen-1992 Pratt-1960
san,Sango,Africa,5,18,sang1328,sag,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,sag,true,true,CF,Didi-Kidiri-1995 Malherbe-and-Rosenberg-1996 Samarin-1967a Samarin-1967b Samarin-and-Walker-1994 Thornell-1997
sao,Saho,Africa,14.75,39.75,saho1246,ssy,Afro-Asiatic,Cushitic,Lowland East Cushitic,c803353,ssy,false,false,ET ER,Welmers-1952b
sap,Sapuan,Eurasia,15.1666666667,106.833333333,sapu1248,spu,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,spu,false,false,LA,Jacq-and-Sidwell-1999
sar,Sare,Papunesia,-4.5,143.166666667,kapr1245,dju,Sepik,,Sepik Hill,c51C4CC,dju,false,false,PG,Sumbuk-2002
sav,Savi,Eurasia,35,71.5,savi1242,sdg,Indo-European,,Indic,cCC5351,sdg,false,false,AF,Buddruss-1967
saw,Sawu,Papunesia,-11.5,121.916666667,sabu1255,hvn,Austronesian,,Central Malayo-Polynesian,c807633,hvn,false,false,ID,Walker-1982
say,Sayula Popoluca,North America,17.8333333333,-95,sayu1241,pos,Mixe-Zoque,,Mixe-Zoque,cA351CC,pos,false,false,MX,Clark-1962 Clark-and-Clark-1974
sba,Sáliba (in Colombia),South America,6,-70,sali1298,slc,Sáliban,,Sáliba,c51A7CC,slc,false,false,CO VR,Aikhenvald-and-Dixon-1999 Benaissa-1979 Benaissa-1991 Suarez-1977
sbg,Sama (Balangingi),Papunesia,6.16666666667,121.833333333,bala1311,sse,Austronesian,,Sama-Bajaw,cCCBD51,sse,false,false,PH,Gault-1979
sch,Saanich,North America,48.5833333333,-123.416666667,stra1244,str,Salishan,,Central Salish,c51ADCC,str,false,false,CA,Thompson-et-al-1974
scr,Serbian-Croatian,Eurasia,44,19,sout1528,hbs,Indo-European,,Slavic,c803338,hbs,false,false,RS BA HR,Browne-1974 Browne-1993 Gvozdanovic-1999 Hamm-1975 Hamm-1981 Haspelmath-1997 Hewitt-1989c Hodge-1946 Javarek-and-Sudjic-1972 Kalogjera-1982 Kordic-1997 Malherbe-and-Rosenberg-1996 Partridge-1964 Schmaus-1983 Subotic-and-Forbes-1918
scs,Saami (Central-South),Eurasia,64.6666666667,16.75,sout2674,sma,Uralic,Finno-Ugric,Saami,c86CC51,sma,false,false,SE,Hasselbrink-1965 Kert-1971
sdh,Sindhi,Eurasia,26,69,sind1272,snd,Indo-European,,Indic,cCC5351,snd,false,false,PK IN,Abbi-1992 Jegorova-1966 Khubchandani-1969 Malherbe-and-Rosenberg-1996 Nihalani-1999
sdw,Sandawe,Africa,-5,35,sand1273,sad,,,,c6D3380,sad,false,false,TZ,Dempwolff-1916 Eaton-2008 Elderkin-1982 Kagaya-1993 Kiessling-2002 Maddieson-et-al-1999 Nichols-1992 Tucker-et-al-1977 van-de-Kimmenade-1954
sea,Southeast Ambrym,Papunesia,-16.3,168.216666667,sout2859,tvk,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tvk,false,false,VU,Crowley-2002b Parker-1968 Parker-1970
seb,Sebei,Africa,1.33333333333,34.5833333333,kups1238,kpz,Eastern Sudanic,Nilotic,Southern Nilotic,c807733,kpz,false,false,UG,Montgomery-1970 OBrien-and-Cuypers-1975
sec,Secoya,South America,-0.333333333333,-76,seco1241,sey,Tucanoan,,Tucanoan,c6FCC51,sey,false,false,EC PE,Huber-and-Reed-1992 Johnson-and-Levinsohn-1990
sed,Sedang,Eurasia,14.8333333333,108,seda1262,sed,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,sed,false,false,VN,Smith-1967b Smith-1968 Smith-1975b Smith-1979
see,Seediq,Papunesia,24.1666666667,121.416666667,taro1264,trv,Austronesian,,Atayalic,c806B33,trv,false,false,TW,Aldridge-2004 Asai-1953 Holmer-1996 Pecoraro-1977
sel,Selknam,South America,-53,-70,onaa1245,ona,Chonan,,Chonan Proper,c5551CC,ona,false,true,AR,Beauvoir-1915 Najlis-1973 Tonelli-1926
sem,Sema,Eurasia,26,94.5,sumi1235,nsm,Sino-Tibetan,Tibeto-Burman,Angami-Pochuri,c803A33,nsm,false,false,IN,Sreedhar-1980 Subbarao-and-Murthy-2000 Subbarao-et-al-2000
sen,Sena,Africa,-18,35.25,nucl1396,seh,Niger-Congo,Benue-Congo,Bantu,cC3CC51,seh,false,false,MZ,Anderson-1897
ser,Seri,North America,29,-112,seri1257,sei,Hokan,,Seri,c803B33,sei,false,false,MX,Marlett-1981 Marlett-1984 Marlett-1988 Moser-and-Moser-1961
ses,Sesotho,Africa,-28,27,sout2807,sot,Niger-Congo,Benue-Congo,Bantu,cC3CC51,sot,false,false,LS ZA,Dahl-1985 Demuth-and-Machobane-2001 Guma-1971 Jacottet-1927 Malherbe-and-Rosenberg-1996 Paroz-1946
sey,Seychelles Creole,Eurasia,-4.75,55.5,sese1246,crs,other,,Creoles and Pidgins,c333D80,crs,false,false,SC,Bollee-1977
sgb,Sougb,Papunesia,-1.5,134,mani1235,mnx,East Bird's Head,,East Bird's Head,cCC7851,mnx,false,false,ID,Reesink-2002
sge,Songe,Africa,-6.83333333333,22,song1303,sop,Niger-Congo,Benue-Congo,Bantu,cC3CC51,sop,false,false,CD,Samain-1923
sgl,Sengele,Africa,-1.83333333333,17.3333333333,seng1278,szg,Niger-Congo,Benue-Congo,Bantu,cC3CC51,szg,false,false,CD,Mangulu-2001
sgr,Sangir,Papunesia,3.5,125.5,sang1336,sxn,Austronesian,,Sangiric,c804333,sxn,false,false,ID,Adriani-1893 Sneddon-1984
sgs,Songish,North America,48.45,-123.333333333,stra1244,str,Salishan,,Central Salish,c51ADCC,str,false,false,CA,Thompson-et-al-1974
sgu,Sangu,Africa,-1.5,11.8333333333,sang1333,snq,Niger-Congo,Benue-Congo,Bantu,cC3CC51,snq,false,false,GA,Idiata-1998
sha,Shan,Eurasia,22,98,shan1277,shn,Tai-Kadai,,Kam-Tai,c51CC8A,shn,false,false,MM,Chan-1980 Chao-1951 Cheng-1973b Cushing-1888
shb,Shabo,Africa,7.58333333333,35.4166666667,shab1252,sbf,,,,cCC51BF,sbf,false,false,ET,Teferra-1991 Teferra-and-Unseth-1989
shd,Sherdukpen,Eurasia,27,92.5,sher1257,sdp,Sino-Tibetan,Tibeto-Burman,Kho-Bwa,c51CC87,sdp,false,false,IN,Dondrup-1988
she,Sherpa,Eurasia,27.75,86.8333333333,sher1255,xsr,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,xsr,false,false,NP,Schottelndreyer-and-Schottelndreyer-1973 Woodbury-1986
shh,Sharanahua,South America,-11,-70,shar1245,mcd,Pano-Tacanan,,Panoan,c334F80,mcd,false,false,BR PE,Scott-and-Frantz-1974
shi,Shiriana,South America,3.5,-62.8333333333,nina1238,shb,Yanomam,,Yanomam,c807233,shb,false,false,BR VR,Borgman-and-Cue-1963 Gomez-1990 Migliazza-and-Grimes-1961
shk,Shipibo-Konibo,South America,-7.5,-75,ship1254,shp,Pano-Tacanan,,Panoan,c334F80,shp,false,true,PE,Davila-Rengifo-and-Picon-Panduro-1973 Faust-1973 Loriot-et-al-1993 Tessmann-1929 Valenzuela-1997 Valenzuela-2002 Valenzuela-2003 Valenzuela-et-al-2001 Weisshar-and-Illius-1990 Wise-1978
shl,Shilluk,Africa,9.66666666667,31.75,shil1265,shk,Eastern Sudanic,Nilotic,Western Nilotic,cCC6E51,shk,false,false,SS,Kohnen-1933 Westermann-1912 Westermann-1974
shm,Shambala,Africa,-4.25,38.25,sham1280,ksb,Niger-Congo,Benue-Congo,Bantu,cC3CC51,ksb,false,false,TZ,Besha-1993
shn,Shona,Africa,-18,31,shon1251,sna,Niger-Congo,Benue-Congo,Bantu,cC3CC51,sna,false,false,ZW,Brauner-1993 Brauner-1995 Fortune-1955 Fortune-1981
sho,Shoshone,North America,41,-114,shos1248,shh,Uto-Aztecan,,Northern Uto-Aztecan,c803633,shh,false,false,US,Crapo-1976 Langacker-1976 Miller-1972 Miller-1996b
shp,Klikitat,North America,46.5,-120,yaki1237,yak,Penutian,,Sahaptian,c335A80,yak,false,false,US,Jacobs-1929 Jacobs-1931
shr,Shor,Eurasia,53,88,shor1247,cjs,Altaic,,Turkic,c778033,cjs,false,false,RU,Babushkin-and-Donidze-1966 Donidze-1997 Dyrenkova-1941
shs,Shasta,North America,41.8333333333,-122.666666667,shas1239,sht,Hokan,,Shasta,c803933,sht,false,false,US,Nichols-1992 Powell-1877 Silver-1964 Silver-1966 Silver-and-Wicks-1977
sht,Shatt,Africa,10.8333333333,30,shat1244,shj,Eastern Sudanic,,Daju,c473380,shj,false,false,SD,Tucker-and-Bryan-1966
shu,Shuswap,North America,52,-120,shus1248,shs,Salishan,,Interior Salish,c51B2CC,shs,false,false,CA,Bell-1982 Bybee-et-al-1994 Kuipers-1974 Kuipers-1975
shw,Shawnee,North America,40,-83,shaw1249,sjw,Algic,,Algonquian,c758033,sjw,false,false,US,Voegelin-1938-1940 Yegerlehner-and-Voegelin-1957
shy,Shira Yughur,Eurasia,38,99,east2337,yuy,Altaic,,Mongolic,cBECC51,yuy,false,false,CN,Nugteren-2003
sia,Siane,Papunesia,-6.08333333333,145.2,sian1257,snp,Trans-New Guinea,Kainantu-Goroka,Siane-Yagaria,c55CC51,snp,false,false,PG,Salisbury-1956
sid,Sidaama,Africa,6.66666666667,38.5,sida1246,sid,Afro-Asiatic,Cushitic,Highland East Cushitic,cCC517A,sid,false,false,ET,Kawachi-2007
sik,Sika,Papunesia,-8.7,122.25,sika1262,ski,Austronesian,,Central Malayo-Polynesian,c807633,ski,false,false,ID,Arndt-1931
sil,Sila,Africa,12.3333333333,21.75,dars1235,dau,Eastern Sudanic,,Daju,c473380,dau,false,false,TD,Jungraithmayr-1981 Tucker-and-Bryan-1966
sim,Simeulue,Papunesia,2.5,96.25,sime1241,smr,Austronesian,,Northwest Sumatra-Barrier Islands,cCC7751,smr,false,false,ID,Abdullah-Faridan-et-al-1983 Kahler-1963
sin,Siona,South America,0.333333333333,-76.25,sion1247,snn,Tucanoan,,Tucanoan,c6FCC51,snn,false,false,EC CO,Derbyshire-and-Payne-1990 Espinosa-Perez-1955 Huber-and-Reed-1992 Wheeler-1962 Wheeler-1970 Wheeler-1987 Wheeler-and-Wheeler-1962
sio,Sio,Papunesia,-5.95,147.333333333,sioo1240,xsi,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,xsi,false,false,PG,Clark-and-Clark-1987 Soetenga-1993
sir,Siar,Papunesia,-4.66666666667,152.916666667,siar1238,sjr,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,sjr,false,false,PG,Ross-2002f
sis,Sisiqa,Papunesia,-7,156.833333333,baba1268,baa,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,baa,false,false,SB,Ross-2002l
siu,Siuslaw,North America,44,-124,sius1254,sis,Oregon Coast,,Siuslawan,c5156CC,sis,false,false,US,Frachtenberg-1914 Frachtenberg-1922b Mithun-1999 Nichols-1992 Stolz-1996
ski,Saami (Kildin),Eurasia,67,37,kild1236,sjd,Uralic,Finno-Ugric,Saami,c86CC51,sjd,false,false,RU,Kert-1971
skk,Sikkimese,Eurasia,27.8333333333,88.5,sikk1242,sip,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,sip,false,false,IN,Sandberg-1888
skl,Sikule,Papunesia,2.66666666667,96,siku1242,skh,Austronesian,,Northwest Sumatra-Barrier Islands,cCC7751,skh,false,false,ID,Kohler-1955
skm,Sukuma,Africa,-2.83333333333,32,suku1261,suk,Niger-Congo,Benue-Congo,Bantu,cC3CC51,suk,false,false,TZ,Batibo-1985
sko,Skou,Papunesia,-2.66666666667,140.916666667,nucl1634,skv,Skou,,Western Skou,c51CCAD,skv,false,false,ID,Voorhoeve-1971
skp,Selkup,Eurasia,65,82,selk1253,sel,Uralic,,Samoyedic,c578033,sel,false,false,RU,Decsy-1970 Helimski-1998b Katz-1975b Kuznecova-et-al-1980 McNaughton-1976 Prokofjeva-1966 Redei-1970
skr,Sikaritai,Papunesia,-2.91666666667,138.25,sika1263,tty,Lakes Plain,,East Tariku,c80335E,tty,false,false,ID,Martin-1986 Martin-1991b
sku,Suku,Africa,-6,17.6666666667,suku1259,sub,Niger-Congo,Benue-Congo,Bantu,cC3CC51,sub,false,false,AO CD,Bunkheti-1997
skw,Shekhawati,Eurasia,28,75.5,shek1243,swv,Indo-European,,Indic,cCC5351,swv,false,false,IN,Gusain-2001
sla,Slave,North America,67,-125,slav1253,den,Na-Dene,,Athapaskan,c8C51CC,den,true,true,CA,Bybee-et-al-1994 Petitot-1876 Rice-1976 Rice-1978 Rice-1989 Rice-2000
slb,Saliba (in Papua New Guinea),Papunesia,-10.5833333333,150.716666667,sali1295,sbe,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,sbe,false,false,PG,Margetts-1999a Margetts-1999b Mosel-1994a
sle,Samba Leko,Africa,8.5,12.5,samb1305,ndi,Niger-Congo,Adamawa-Ubangi,Samba-Duru,c72CC51,ndi,false,false,NG CM,Fabre-2003
slg,Sulung,Eurasia,28.3333333333,93.25,sulu1241,suv,,,,c33805A,suv,false,false,IN,Tayeng-1990b
slo,Slovene,Eurasia,46,15,slov1268,slv,Indo-European,,Slavic,c803338,slv,false,false,SI,Derbyshire-1993 Gvozdanovic-1999 Herrity-2000 Jug-Kranjec-1989 Malherbe-and-Rosenberg-1996 Priestly-1993
slp,Selepet,Papunesia,-6.16666666667,147.166666667,sele1250,spl,Trans-New Guinea,Finisterre-Huon,Huon,c804C33,spl,false,false,PG,McElhanon-1970b McElhanon-1970c McElhanon-1972
slr,Salar,Eurasia,35,103,sala1264,slr,Altaic,,Turkic,c778033,slr,false,false,CN,Dwyer-2000 Tenishev-1997b
slv,Slavey,North America,60,-120,sout2959,xsl,Na-Dene,,Athapaskan,c8C51CC,xsl,false,false,CA,Gouy-1930
sly,Selayar,Papunesia,-6,120.5,sela1260,sly,Austronesian,,South Sulawesi,cCC6B51,sly,false,false,ID,Mithun-and-Basri-1986
smd,Semandang,Papunesia,-0.75,110.5,sema1269,sdm,Austronesian,,Land Dayak,c806A33,sdm,false,false,ID,
sme,Seme,Africa,11,-4.91666666667,siam1242,sif,Niger-Congo,,Kru,c6F51CC,sif,false,false,BF,Prost-1964d
smj,Semai,Eurasia,4.33333333333,101.666666667,sema1266,sea,Austro-Asiatic,Mon-Khmer,Aslian,c7E8033,sea,false,false,MY,Means-and-Means-1987
sml,Semelai,Eurasia,3,103,seme1247,sza,Austro-Asiatic,Mon-Khmer,Aslian,c7E8033,sza,false,true,MY,Kruspe-1999 Kruspe-2004
smn,Seminole,North America,33,-84,cree1270,mus,Muskogean,,Muskogean,c9251CC,mus,false,false,US,Nathan-1977
smp,Shompen,Eurasia,7,93.75,shom1245,sii,,,,c33807E,sii,false,false,IN,Chattopadhyay-and-Mukhopadhyay-2003
smt,Sahaptin (Umatilla),North America,45.6666666667,-118.5,umat1237,uma,Penutian,,Sahaptian,c335A80,uma,false,false,US,Jacobs-1931 Rigsby-and-Rude-1996 Rude-1988b
sna,Shina,Eurasia,36,74,shin1264,scl,Indo-European,,Indic,cCC5351,scl,false,false,PK,Bailey-1924
snc,Seneca,North America,42.5,-77.5,sene1264,see,Iroquoian,,Northern Iroquoian,cCC516B,see,false,false,US,Chafe-1960 Chafe-1963 Chafe-1967 Chafe-1977 Chafe-1996 Chafe-and-Foster-1981 Dahl-1985 Foster-1982 Holmer-1954 Nichols-1992
snd,Senadi,Africa,9.5,-6.25,ceba1235,sef,Niger-Congo,,Senufo,c338034,sef,false,false,CI,Mills-1984 Welmers-1950
sng,Sinaugoro,Papunesia,-9.83333333333,147.833333333,sina1266,snc,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,snc,false,false,PG,Kolia-1975 Tauberschmidt-1999 Tauberschmidt-and-Bala-1992
snh,Sinhala,Eurasia,7,80.5,sinh1246,sin,Indo-European,,Indic,cCC5351,sin,false,false,LK,Coates-and-da-Silva-1960 Gair-1970 Gair-1998 Gair-and-Karunatillake-2000 Gair-and-Paolillo-1997 Geiger-1938 Malherbe-and-Rosenberg-1996 Matzel-1966 Reynolds-1980 Reynolds-1995
snm,Sanuma,South America,4.5,-64.6666666667,sanu1240,xsu,Yanomam,,Yanomam,c807233,xsu,true,true,BR VR,Aikhenvald-and-Dixon-1999 Borgman-1990 Derbyshire-and-Payne-1990
snn,Soninke,Africa,15,-10.5,soni1259,snk,Mande,,Western Mande,c6751CC,snk,false,false,BF ML CI SN,Diagana-1995 Malherbe-and-Rosenberg-1996
sno,Saami (Northern),Eurasia,69,24,nort2671,sme,Uralic,Finno-Ugric,Saami,c86CC51,sme,false,false,NO FI SE,Bartens-1989 Bergsland-1976 Honti-1997 Itkonen-1955 Itkonen-1969 Malherbe-and-Rosenberg-1996 Nickel-1994 Sammallahti-1998a Sammallahti-1998b
snt,Sentani,Papunesia,-2.58333333333,140.583333333,nucl1632,set,,,,c51BECC,set,false,true,ID,Cowan-1965 Foley-1986 Hartzler-1994 Nichols-1992
so,So,Africa,2.58333333333,34.75,sooo1256,teu,Eastern Sudanic,,Kuliak,c7251CC,teu,false,false,UG,Carlin-1993 Serzisko-1989 Tucker-and-Bryan-1966
sob,Sobei,Papunesia,-1.91666666667,138.75,sobe1238,sob,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,sob,false,false,ID,Sterner-1976 Sterner-and-Ross-2002
sod,Soddo,Africa,8.5,38.5,kist1241,gru,Afro-Asiatic,,Semitic,cB3CC51,gru,false,false,ET,Cohen-1931 Leslau-1968b
sol,Solon,Eurasia,48,120,even1259,evn,Altaic,,Tungusic,c798033,evn,false,false,CN,Cincius-1997b Lie-1978
som,Somali,Africa,3,45,soma1255,som,Afro-Asiatic,Cushitic,Lowland East Cushitic,c803353,som,false,false,SO,Andrzejewsky-1955 Andrzejewsky-1956 Armstrong-1964 Bell-1953 Berchem-1991 Cardona-1981 Dubnova-1990 El-Solami-Mewis-1987 Farnetani-1981 Hyman-1981a Kirk-1903 Kirk-1905 Malherbe-and-Rosenberg-1996 Puglielli-1997 Saeed-1987 Saeed-1999 Serzisko-1984
son,Sonsorol-Tobi,Papunesia,5.33333333333,132.25,sons1242,sov,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,sov,false,false,PW,Capell-1969
soo,Sooke,North America,48.3333333333,-123.75,stra1244,str,Salishan,,Central Salish,c51ADCC,str,false,false,CA,Thompson-et-al-1974
soq,Soqotri,Africa,12.5,54,soqo1240,sqt,Afro-Asiatic,,Semitic,cB3CC51,sqt,false,false,YE,Johnstone-1975 Leslau-1938 Lonnet-and-Simeone-Senelle-1997 Simeone-Senelle-1997
sor,Sora,Eurasia,20,84.3333333333,sora1254,srb,Austro-Asiatic,,Munda,c807D33,srb,false,false,IN,Ramamurti-1931 Ramamurti-1986 Starosta-1967 Stolz-1996
sou,Sorbian (Upper),Eurasia,51.8333333333,14.5,uppe1395,hsb,Indo-European,,Slavic,c803338,hsb,false,false,DE,De-Bray-1980a Fasske-1981 Schuster-Sewc-1996 Stone-1993
spa,Spanish,Eurasia,40,-4,stan1288,spa,Indo-European,,Romance,cCC5154,spa,true,true,ES,Alarcos-Llorach-1965 Ashcom-and-Goodell-1955 Berschin-etal-1995 Butt-and-Benjamin-1988 Butt-and-Benjamin-1994 Butt-and-Benjamin-2000 Cuyas-1972 Dahl-1985 Green-1988 Harris-1969a Harris-1983 Jarvis-et-al-1981 Lopez-2001 Navarro-1961 Navarro-1965 Otero-1999 Roca-1991 Roca-1999 Saporta-and-Contreras-1962
spc,Spanish (Canary Islands),Eurasia,28,-15.5833333333,stan1288,spa,Indo-European,,Romance,cCC5154,spa,false,false,ES,
spi,Spitian,Eurasia,32.25,78,spit1240,spt,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,spt,false,false,IN,Sharma-1989b Sharma-1992
spo,Spokane,North America,47.6666666667,-117.75,spok1245,spo,Salishan,,Interior Salish,c51B2CC,spo,false,false,US,Bates-1997 Carlson-1989 Carlson-and-Flett-1989
sps,Salish (Southern Puget Sound),North America,47.25,-122.5,sout2965,slh,Salishan,,Central Salish,c51ADCC,slh,false,false,US,Snyder-1968
squ,Squamish,North America,49.6666666667,-123.166666667,squa1248,squ,Salishan,,Central Salish,c51ADCC,squ,false,true,CA,Demers-and-Horn-1978 Jacobs-1996 Kuipers-1967
sra,Sranan,South America,5.83333333333,-55.3333333333,sran1240,srn,other,,Creoles and Pidgins,c333D80,srn,false,false,SR,Arends-1989 Donicie-1954 Malherbe-and-Rosenberg-1996 Voorhoeve-1962
srb,Sorbian,Eurasia,51.5,14,sorb1249,,Indo-European,,Slavic,c803338,dsb hsb,false,false,DE,Dogil-1999 Janas-1976 Mucke-1965 Sjwela-1952 Stone-1993 Wowcerk-1951
src,Sarcee,North America,52.5,-116,sars1236,srs,Na-Dene,,Athapaskan,c8C51CC,srs,false,false,CA,Cook-1984
srd,Sardinian,Eurasia,40,9,camp1261,sro,Indo-European,,Romance,cCC5154,sro,false,false,IT,Blasco-1986 Jones-1988 Lausberg-1972 Porru-1975 Roca-1999 Virdis-1978 Wagner-1984
sre,Sre,Eurasia,11.5,108,koho1244,kpm,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,kpm,false,false,VN,Dournes-1950 Manley-1972 Stolz-1996
sri,Siriano,South America,0.75,-70.1666666667,siri1274,sri,Tucanoan,,Tucanoan,c6FCC51,sri,false,false,CO BR,Huber-and-Reed-1992
srl,Sorbian (Lower),Eurasia,51.75,14.3333333333,lowe1385,dsb,Indo-European,,Slavic,c803338,dsb,false,false,DE,Janas-1976
srm,Saramaccan,South America,4.5,-55.5,sara1340,srm,other,,Creoles and Pidgins,c333D80,srm,false,false,GF SR,Byrne-1987 Kouwenberg-1987 Stolz-1996
srn,Sirionó,South America,-15.5833333333,-64,siri1273,srq,Tupian,,Maweti-Guarani,cCC6351,srq,false,false,BO,Firestone-1965 Key-1965 Priest-and-Priest-1967 Priest-and-Priest-1980 Priest-et-al-1961 Schermair-1949
sro,Siroi,Papunesia,-5.5,146,siro1249,ssd,Trans-New Guinea,Madang,Rai Coast,c51CCC1,ssd,false,false,PG,Wells-1979
srr,Serrano,North America,34.5,-117,serr1255,ser,Uto-Aztecan,,Northern Uto-Aztecan,c803633,ser,false,false,US,Hill-1967 Langacker-1976
sru,Selaru,Papunesia,-8.2,131,sela1259,slu,Austronesian,,Central Malayo-Polynesian,c807633,slu,false,false,ID,Coward-1989 Drabbe-1932
sry,Siraya,Papunesia,23,120.25,sira1267,fos,Austronesian,,East Formosan,cCC5163,fos,false,false,TW,
ssa,Sisaala,Africa,10.8333333333,-2.66666666667,tumu1242,sil,Niger-Congo,Gur,Grusi,c448033,sil,false,false,GH,Blass-1975
ssh,Shinassha,Africa,10.4166666667,36.1666666667,boro1277,bwo,Afro-Asiatic,Omotic,Ta-Ne-Omotic,cCC5751,bwo,false,false,ET,Lamberti-1993a
ssl,South Korean Sign Language,Eurasia,37,128,kore1273,kvk,other,,Sign Languages,c515CCC,kvk,false,false,KR,
sss,Salish (Samish Straits),North America,48.5833333333,-122.583333333,stra1244,str,Salishan,,Central Salish,c51ADCC,str,false,false,US,Galloway-1990
sst,Salish (Straits),North America,48.75,-123.25,stra1244,str,Salishan,,Central Salish,c51ADCC,str,false,false,CA US,Mithun-1999
sta,Santa,Eurasia,31.5,107.5,dong1285,sce,Altaic,,Mongolic,cBECC51,sce,false,false,CN,Kim-2003 Todaeva-1997b
sti,Stieng,Eurasia,11.8333333333,106.75,stie1250,,Austro-Asiatic,Mon-Khmer,Bahnaric,cCACC51,sti stt,false,false,VN KH,Azemar-1887 Miller-1976
stl,Santali,Eurasia,24.5,87,sant1410,sat,Austro-Asiatic,,Munda,c807D33,sat,false,false,IN,Anderson-2001 Macphail-1953 Macphail-1983 Neukom-2001 Vermeer-1969
stn,Sotho (Northern),Africa,-24,29,pedi1238,nso,Niger-Congo,Benue-Congo,Bantu,cC3CC51,nso,false,false,ZA,Louwrens-et-al-1995 Poulos-and-Louwrens-1994 Ziervogel-et-al-1969
sto,Stoney,North America,53.75,-116.5,ston1242,sto,Siouan,,Mississippi Valley Siouan,c7A8033,sto,false,false,CA,Shaw-1985a
sub,Subiya,Africa,-17.75,24.9166666667,subi1246,sbs,Niger-Congo,Benue-Congo,Bantu,cC3CC51,sbs,false,false,NA,Baumbach-1997
sud,Sudest,Papunesia,-11.5,153.45,sude1239,tgo,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tgo,false,false,PG,Anderson-and-Ross-2002
sue,Suena,Papunesia,-7.75,147.55,suen1241,sue,Trans-New Guinea,Greater Binanderean,Binanderean,c64CC51,sue,false,true,PG,Nichols-1992 Wilson-1969 Wilson-1974
sug,Sungor,Africa,13.75,21.5,assa1269,sjg,Eastern Sudanic,,Taman,c4E3380,sjg,false,false,TD,Lukas-1938 Tucker-and-Bryan-1966
sui,Sui,Eurasia,26,107.5,suii1243,swi,Tai-Kadai,,Kam-Tai,c51CC8A,swi,false,false,CN,Li-1948
suk,Suki,Papunesia,-8,141.75,suki1245,sui,Trans-New Guinea,Gogodala-Suki,Suki,c804433,sui,false,false,PG,Hatfield-2008 Voorhoeve-1975
sul,Sulka,Papunesia,-5.08333333333,151.916666667,sulk1246,sua,,,,c51CC96,sua,false,false,PG,Muller-1916 Nichols-1992 Schneider-1962 Tharp-1996
sum,Mayangna,North America,13,-84.5,maya1285,yan,Misumalpan,,Misumalpan,c663380,yan,false,false,NI,Houwald-1980
sun,Sundanese,Papunesia,-7,107,sund1252,sun,Austronesian,,Malayo-Sumbawan,cCC7D51,sun,false,false,ID,Clynes-1995a Coolsma-1904 Dahl-1985 Hardjadibrata-1985 Muller-Gotama-2001 Robins-1959 Sugiarto-1993
sup,Supyire,Africa,11.5,-5.58333333333,supy1237,spp,Niger-Congo,,Senufo,c338034,spp,true,true,ML,Carlson-1990 Carlson-1994
sur,Sursurunga,Papunesia,-4,152.766666667,surs1246,sgz,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,sgz,false,false,PG,Hutchisson-1986
sus,Susu,Africa,10,-13,susu1250,sus,Mande,,Western Mande,c6751CC,sus,false,false,GN,Friedlander-1974 Houis-1963 Lacan-1942
sva,Svan,Eurasia,43,42.5,svan1243,sva,Kartvelian,,Kartvelian,c80335C,sva,false,false,GE,Gudjedjiani-and-Palmaitis-1985 Tuite-1997
svc,Slovincian,Eurasia,54,16,kash1274,csb,Indo-European,,Slavic,c803338,csb,false,false,PL,Kurylowicz-1960 Lehr-Splawinski-1917 Lorentz-1903
svk,Slovak,Eurasia,49,20,slov1269,slk,Indo-European,,Slavic,c803338,slk,false,false,SK,Balaz-and-Darovec-1978 De-Bray-1980a Dogil-1999 Kralj-1988 Letz-1950 Malherbe-and-Rosenberg-1996 Mistrik-1981 Rubach-1991 Short-1993c Trnka-1992
svs,Savosavo,Papunesia,-9.13333333333,159.8,savo1255,svs,Solomons East Papuan,,Savosavo,c338061,svs,false,false,SB,Todd-1975 Wegener-2008
svt,Svenska Teckenspråket,Eurasia,59,15,swed1236,swl,other,,Sign Languages,c515CCC,swl,false,false,SE,Bergman-1988 Bergman-1995
swa,Swahili,Africa,-6.5,39,swah1253,swh,Niger-Congo,Benue-Congo,Bantu,cC3CC51,swh,true,true,TZ,Abdulaziz-1996 Ashton-1944 Ashton-1947 Ashton-1969 Blake-1994 Brandon-1974 Contini-Morava-1989 Contini-Morava-1997 Corbett-1991 Gregersen-1967 Gromova-and-Oxotina-1995 Haspelmath-1997 Hurskainen-1989 Johnson-and-Madan-1939 Loogman-1965 Malherbe-and-Rosenberg-1996 Mohlig-and-Heine-1999 Myachina-1981 Njogu-2001b Perrott-1950 Polome-nd Snoxall-1958 Vitale-1981 Wald-1975 Wald-1987 Welmers-1973 Whiteley-1968 Wilson-1970
swe,Swedish,Eurasia,60,15,swed1254,swe,Indo-European,,Germanic,c803433,swe,false,false,FI SE,Bruce-1999a Dahl-1985 Hammar-1958 Haspelmath-1997 Holm-and-Nylund-Lindgren-1977 Holmes-and-Hinchliffe-1994 McClean-1963 Ritte-1998
swi,Sawai,Papunesia,0.5,128,sawa1247,szw,Austronesian,Eastern Malayo-Polynesian,South Halmahera - West New Guinea,c807433,szw,false,false,ID,Whisler-1992 Whisler-and-Whisler-1995
swr,Shoshone (Wind River),North America,43.4166666667,-108.833333333,shos1248,shh,Uto-Aztecan,,Northern Uto-Aztecan,c803633,shh,false,false,US,Davis-1966
swt,Swati,Africa,-26.5,31,swat1243,ssw,Niger-Congo,Benue-Congo,Bantu,cC3CC51,ssw,false,false,ZA SZ,Kiyomi-1992 Mpunga-wa-Ilunga-2001 Taljaard-et-al-1991 Ziervogel-1952
swv,Swedish (Västerbotten),Eurasia,64.25,19.75,swed1254,swe,Indo-European,,Germanic,c803433,swe,false,false,SE,
syg,Saryg Yughur,Eurasia,38.75,99.75,west2402,ybe,Altaic,,Turkic,c778033,ybe,false,false,CN,Tenishev-1997c
syu,Salt-Yui,Papunesia,-6.28333333333,145.033333333,salt1242,sll,Trans-New Guinea,,Chimbu-Wahgi,c51CC7C,sll,false,false,PG,Irwin-1974 Nichols-1992
tab,Taba,Papunesia,0,127.5,east2440,mky,Austronesian,Eastern Malayo-Polynesian,South Halmahera - West New Guinea,c807433,mky,false,true,ID,Bowden-1997a Bowden-2001 Bowden-and-Hajek-1999
tac,Tacana,South America,-13.5,-68,taca1256,tna,Pano-Tacanan,,Tacanan,c338056,tna,false,false,BO,Key-1968 Ottaviano-1980 Ottaviano-and-Ottaviano-1967 Van-Wynen-and-Van-Wynen-1962
taf,Taiof,Papunesia,-5.53333333333,154.633333333,sapo1253,sps,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,sps,false,false,PG,Ross-2002g
tag,Tagalog,Papunesia,15,121,taga1270,tgl,Austronesian,,Greater Central Philippine,cCC8E51,tgl,true,true,PH,Aldridge-2004 Bloomfield-1917 De-Guzman-1978 English-1965 Himmelmann-1999 Kolmer-1998 Kroeger-1993 Kruz-and-Shkarban-1966 Llamzon-1966 Llamzon-1976 Malherbe-and-Rosenberg-1996 Rachkov-2001 Ramos-1971 Ramos-and-Morales-Goulet-1981 Rubino-1998a Schachter-and-Otanes-1972 Schachter-and-Otanes-1983 Shkarban-1998 Shkarban-2001 Shkarban-and-Rachkov-2007
tah,Tahitian,Papunesia,-17.6666666667,-149.583333333,tahi1242,tah,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tah,false,false,PF,Bybee-et-al-1994 Davies-1851 Jaussen-1969 Lazard-and-Peltzer-1999 Malherbe-and-Rosenberg-1996 Paia-and-Vernaudon-1999 Tryon-1970a Tryon-1976 Vergnaud-and-Halle-1978
tai,Tuareg (Air),Africa,19,9,taya1257,thz,Afro-Asiatic,,Berber,cAACC51,thz,false,false,NE,Galand-1974
taj,Tajik,Eurasia,38.6666666667,70,taji1245,tgk,Indo-European,,Iranian,c803335,tgk,false,false,TJ,Kerimova-1966 Malherbe-and-Rosenberg-1996 Rastorgueva-1963
tak,Takia,Papunesia,-4.66666666667,146,taki1248,tbc,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tbc,false,false,PG,Ross-2002h
tal,Talinga,Africa,0.416666666667,29.6666666667,tali1258,tlj,Niger-Congo,Benue-Congo,Bantu,cC3CC51,tlj,false,false,CD UG,Paluku-1998
tam,Tamang (Eastern),Eurasia,27.5,85.666666666667,,taj,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,taj,false,false,NP,Matisoff-1997 Mazaudon-1973 Mazaudon-1976 Mazaudon-2003 Taylor-1973
tan,Tangale,Africa,9.75,11.3333333333,nucl1696,tan,Afro-Asiatic,Chadic,West Chadic,cADCC51,tan,false,false,NG,Jungraithmayr-1991
tao,Tarao,Eurasia,24.25,94.1666666667,tara1313,tro,Sino-Tibetan,Tibeto-Burman,Kuki-Chin,c51CCB8,tro,false,false,IN,Singh-2002
tap,Taiap,Papunesia,-4.08333333333,144.5,taia1239,gpn,Gapun,,Gapun,cCC7051,gpn,false,false,PG,Kulick-and-Stroud-1992
tar,Tariana,South America,1,-69.1666666667,tari1256,tae,Arawakan,,Japura-Colombia,c9A51CC,tae,false,false,BR,Aikhenvald-2001 Aikhenvald-2003 Aikhenvald-2007a Aikhenvald-and-Dixon-1998 Huber-and-Reed-1992
tas,Tashlhiyt,Africa,31,-5,tach1250,shi,Afro-Asiatic,,Berber,cAACC51,shi,false,false,MA,Applegate-1955 Applegate-1958 El-Mountassir-1999 Kossmann-and-Stroomer-1997 Laoust-1921 Naumann-2000 Quitout-1997 Sadiqi-1997
tat,Tatana',Papunesia,5.5,115.5,tata1257,txx,Austronesian,,North Borneo,c804E33,txx,false,false,MY,Dunn-and-Peck-1988 Pekkanen-1988
tau,Tauya,Papunesia,-5.75,145.333333333,tauy1241,tya,Trans-New Guinea,Madang,Rai Coast,c51CCC1,tya,false,false,PG,MacDonald-1990
taw,Tawala,Papunesia,-10.3333333333,150.666666667,tawa1275,tbo,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tbo,false,false,PG,Ezard-1991 Ezard-1997
tay,Tayo,Papunesia,-22,166.333333333,tayo1238,cks,other,,Creoles and Pidgins,c333D80,cks,false,false,NC,Ehrhart-1993
taz,Talysh (Azerbaijan),Eurasia,38.75,48.6666666667,taly1247,tly,Indo-European,,Iranian,c803335,tly,false,false,AZ,Miller-1953 Schulze-2000
tba,Tabare,Papunesia,-6.08333333333,145,sina1271,sst,Trans-New Guinea,,Chimbu-Wahgi,c51CC7C,sst,false,false,PG,McVinney-and-Luzbetak-1954
tbb,Tübatulabal,North America,36,-118.333333333,tuba1278,tub,Uto-Aztecan,,Northern Uto-Aztecan,c803633,tub,false,false,US,Langacker-1976 Voegelin-1935 Voegelin-1958
tbe,Tigré (Beni Amer),Africa,15.5,38,tigr1270,tig,Afro-Asiatic,,Semitic,cB3CC51,tig,false,false,ER,Nakano-1982
tbl,Tabla,Papunesia,-2.45,140.416666667,tabl1243,tnm,Sentani,,Sentani,c51BECC,tnm,false,false,ID,Abisay-et-al-1983 Collier-and-Collier-1986
tbo,Tboli,Papunesia,6.16666666667,124.5,tbol1240,tbl,Austronesian,,Bilic,cCC8251,tbl,false,false,PH,Porter-1977
tbr,Tabaru,Papunesia,1.5,127.25,taba1263,tby,North Halmaheran,,North Halmaheran,c807933,tby,false,false,ID,Damayu-et-al-1991 Fortgens-1928
tbs,Tabassaran,Eurasia,41.8333333333,47.9166666667,taba1259,tab,Nakh-Daghestanian,Daghestanian,Lezgic,c8051CC,tab,false,false,RU,Magometov-1965 Stolz-1996
tbt,Tobati,Papunesia,-2.58333333333,140.666666667,toba1266,tti,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tti,false,false,ID,Donohue-2002
tbu,Tubu,Africa,16,15,tebu1238,,Saharan,Saharan,Western Saharan,cC351CC,dzg tuq,false,false,TD NE,Le-Coeur-and-Le-Coeur-1956 Lukas-1953 Stolz-1996 Tucker-and-Bryan-1966
tbw,Tabwa,Africa,-8,29.5,taab1238,tap,Niger-Congo,Benue-Congo,Bantu,cC3CC51,tap,false,false,CD ZM,de-Beerst-1896
tbx,Tangbe,Eurasia,28.9166666667,83.75,seke1240,skj,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,skj,false,false,NP,Honda-2003
tce,Tarahumara (Central),North America,27.5,-107.5,cent2131,tar,Uto-Aztecan,,Tarahumaran,cAFCC51,tar,false,false,MX,Cohen-1998 Hilton-1959 Hilton-1993 Langacker-1976
tda,Toda,Eurasia,11.4166666667,76.75,toda1252,tcx,Dravidian,,Dravidian,cB7CC51,tcx,false,false,IN,Emeneau-1984
tdi,Tibetan (Dingri),Eurasia,28.5,86.5,tibe1272,bod,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,bod,false,false,CN,Herrmann-1989
tdr,Tibetan (Drokpa),Eurasia,32.25,81.25,tibe1272,bod,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,bod,false,false,CN,Kretschmar-1986
tec,Tectiteco,North America,15.4166666667,-92.0833333333,tekt1235,ttc,Mayan,,Mayan,cA951CC,ttc,false,false,GT MX,Kaufman-1969
tee,Tepehua (Huehuetla),North America,20.5,-98,hueh1236,tee,Totonacan,,Totonacan,c338033,tee,false,false,MX,Kung-2007
teh,Tehuelche,South America,-48,-68,tehu1242,teh,Chonan,,Chonan Proper,c5551CC,teh,false,false,AR,Fernandez-Garay-1993 Fernandez-Garay-1998 Schmid-1910 Suarez-1973
tel,Telugu,Eurasia,16,79,telu1262,tel,Dravidian,,Dravidian,cB7CC51,tel,false,false,IN,Bhaskararao-1972 Emeneau-1980 Gil-1994b Grierson-1906 Kelley-1963 Kostic-et-al-1977 Krishnamurti-1961 Krishnamurti-1998 Krishnamurti-and-Gwynn-1985 Krishnamurti-and-Sarma-1968 Lisker-1963 Malherbe-and-Rosenberg-1996 Petrunicheva-1960 Sastry-1972 Stolz-1996 Subbarao-and-Murthy-2000 Subrahmanyam-1974
tem,Tem,Africa,8.66666666667,0.5,temm1241,kdh,Niger-Congo,Gur,Grusi,c448033,kdh,false,false,TG BJ GH,Bybee-et-al-1994 Tchagbale-1998
ten,Tennet,Africa,4.41666666667,32.5,tenn1246,tex,Eastern Sudanic,Surmic,South Surmic,c806933,tex,false,false,SS,Randal-1998
teo,Teop,Papunesia,-5.66666666667,155,teop1238,tio,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tio,false,false,PG,Mosel-and-Spriggs-1992 Mosel-and-Spriggs-1999 Reinig-2000
tep,Tepehua (Tlachichilco),North America,20.5833333333,-98.25,tlac1235,tpt,Totonacan,,Totonacan,c338033,tpt,false,false,MX,Watters-1988 Watters-1996
ter,Tera,Africa,11,11.8333333333,tera1251,ttr,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,ttr,false,false,NG,Newman-1970 Stolz-1996
tes,Teso,Africa,1.83333333333,33.8333333333,teso1249,teo,Eastern Sudanic,Nilotic,Eastern Nilotic,c807E33,teo,false,false,UG,Creider-1989 Hilders-and-Lawrance-1956 Tucker-and-Bryan-1966
tet,Tetela,Africa,-4,24,tete1250,tll,Niger-Congo,Benue-Congo,Bantu,cC3CC51,tll,false,false,CD,Jacobs-1964 Labaere-1984 Wetshemongo-1996 Wetshemongo-1998
tew,Tewa (Arizona),North America,35.8333333333,-110.416666667,tewa1260,tew,Kiowa-Tanoan,,Kiowa-Tanoan,cCC519F,tew,false,false,US,Kroskrity-1993 Yegerlehner-1959
tex,Turkic (East-Central Xorasan),Eurasia,37,59,khor1269,kmz,Altaic,,Turkic,c778033,kmz,false,false,IR,Potseluevskij-1997b
tga,Tangga,Papunesia,-3.46666666667,153.2,tang1348,tgg,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tgg,false,false,PG,Bell-1977 Bybee-et-al-1994
tgb,Tagbanwa (Aborlan),Papunesia,9.5,118.5,tagb1258,tbw,Austronesian,,Greater Central Philippine,cCC8E51,tbw,false,false,PH,Llamzon-1978
tgh,Tuareg (Ghat),Africa,25,10.1666666667,taha1241,thv,Afro-Asiatic,,Berber,cAACC51,thv,false,false,LY,Nehlil-1909
tgk,Tigak,Papunesia,-2.71666666667,150.8,tiga1245,tgc,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tgc,false,false,PG,Beaumont-1979 Stolz-1996
tgl,Tshangla,Eurasia,27.8333333333,92.1666666667,tsha1245,tsj,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,tsj,false,false,BT IN,Andvik-1999 Andvik-2003 Das-Gupta-1968
tgn,Tugun,Papunesia,-7.71666666667,126.75,tugu1245,tzn,Austronesian,,Central Malayo-Polynesian,c807633,tzn,false,false,ID,Hinton-1991
tgo,Tsogo,Africa,-1.5,11.3333333333,tsog1243,tsv,Niger-Congo,Benue-Congo,Bantu,cC3CC51,tsv,false,false,GA,Raponda-Walker-1950
tgp,Tanglapui,Papunesia,-8.28333333333,125.083333333,kula1280,tpg,Greater West Bomberai,Timor-Alor-Pantar,Alor-Pantar,c608033,tpg,false,false,ID,
tgr,Tigré,Africa,16.5,38.5,tigr1270,tig,Afro-Asiatic,,Semitic,cB3CC51,tig,false,false,ER,Bybee-et-al-1994 Klingenheben-1966 Palmer-1962 Raz-1983 Raz-1997 Rose-nd
tgw,Tarangan (West),Papunesia,-6.5,134.166666667,west2538,txn,Austronesian,,Central Malayo-Polynesian,c807633,txn,false,false,ID,Nivens-1992
tha,Thai,Eurasia,16,101,thai1261,tha,Tai-Kadai,,Kam-Tai,c51CC8A,tha,true,true,TH,Abramson-1962 Anthony-et-al-1968 Bisang-1991 Bisang-1992 Burusphat-1991 Campbell-1964 Campbell-1968 Campbell-2000 Campbell-and-Shaweevongse-1957 Campbell-and-Shaweevongse-1962 Cooke-1968 Dahl-1985 Diller-1994 Haas-1946 Haas-1964 Hudak-1987 Kalaya-and-Abramson-1999 Kruatrachue-1960 Malherbe-and-Rosenberg-1996 Morezh-et-al-1961 Needleman-1973 Noss-1954 Noss-1964 Robertson-1969 Smyth-2002 Vichit-Vadakan-1976 Warotamasikkhadit-1972 Yates-and-Tryon-1970
thd,Thadou,Eurasia,24.4166666667,93.9166666667,thad1238,tcz,Sino-Tibetan,Tibeto-Burman,Kuki-Chin,c51CCB8,tcz,false,false,IN MM,Abbi-1992 Krishan-1980
thk,Thakali,Eurasia,29,83.75,thak1245,ths,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,ths,false,false,NP,Georg-1995 Georg-1996
thn,Thangmi,Eurasia,27.75,86,than1259,thf,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,thf,false,false,NP,Turin-2000
tho,Thompson,North America,49.75,-121.75,thom1243,thp,Salishan,,Interior Salish,c51B2CC,thp,false,false,CA,Haeberlin-1918 Thompson-and-Thompson-1980 Thompson-and-Thompson-1992 Thompson-and-Thompson-1996 Thompson-et-al-1996
thp,Thaypan,Australia,-14.8333333333,143.166666667,thay1248,typ,Pama-Nyungan,,Northern Pama-Nyungan,c336680,typ,false,false,AU,Rigsby-1976
ths,Thai Sign Language,Eurasia,15,101,thai1240,tsq,other,,Sign Languages,c515CCC,tsq,false,false,TH,Suwanarat-and-Reilly-1986
tht,Tehit,Papunesia,-1.5,132,tehi1237,kps,West Bird's Head,,West Bird's Head,cCBCC51,kps,false,false,ID,Flassy-and-Stockhof-1979 Reesink-1996
thu,Thulung,Eurasia,27.4166666667,86.5,thul1246,tdh,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,tdh,false,false,NP,Allen-1975b
thw,Thao,Papunesia,23.8833333333,120.916666667,thao1240,ssf,Austronesian,,Western Plains Austronesian,c803345,ssf,false,false,TW,Chang-1998
thy,Kuuk Thaayorre,Australia,-14.5833333333,141.833333333,thay1249,thd,Pama-Nyungan,,Northern Pama-Nyungan,c336680,thd,false,false,AU,Hall-1972
tia,Tima,Africa,11.6666666667,29.25,tima1241,tms,Kordofanian,,Katla-Tima,c5B51CC,tms,false,false,SD,Tucker-and-Bryan-1966
tib,Tibetan (Standard Spoken),Eurasia,30,91,tibe1272,bod,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,bod,false,false,CN,Bell-1939 Bell-1965 De-Lancey-2003 Denwood-1999 Goldstein-and-Nornang-1970 Goldstein-and-Nornang-1978 Hannah-1912 Malherbe-and-Rosenberg-1996 Rerix-1961
tic,Ticuna,South America,-4,-70.5,ticu1245,tca,,,,c51CC6D,tca,false,false,BR PE,Anderson-1959 Anderson-1962 Montes-Rodriguez-2004 de-Alviano-1944
tid,Tidore,Papunesia,0.75,127.5,tido1248,tvo,North Halmaheran,,North Halmaheran,c807933,tvo,false,false,ID,Pikkert-and-Pikkert-1995 Pikkert-et-al-1994 van-Staden-2000
tif,Tifal,Papunesia,-5,141.333333333,tifa1245,tif,Trans-New Guinea,Awyu-Ok,Ok,c3E8033,tif,false,false,PG,
tig,Tigrinya,Africa,14.5,38.5,tigr1271,tir,Afro-Asiatic,,Semitic,cB3CC51,tir,false,false,ET ER,Dahl-1985 Kogan-1997 Tewolde-2001
tik,Tikar,Africa,5.83333333333,11.6666666667,tika1246,tik,Niger-Congo,Benue-Congo,Tikar,c78CC51,tik,false,false,CM,Hagege-1969 Stanley-1991 Stolz-1996
til,Tillamook,North America,45.3333333333,-123.75,till1254,til,Salishan,,Tillamook,c336F80,til,false,false,US,Edel-1939 Reichard-1959 Thompson-and-Thompson-1966
tim,Timugon,Papunesia,5,116,timu1262,tih,Austronesian,,North Borneo,c804E33,tih,false,false,MY,Omar-1983 Prentice-1971
tin,Tinrin,Papunesia,-21.6666666667,165.75,tiri1258,cir,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,cir,false,false,NC,Osumi-1995
tir,Tiriyo,South America,3.25,-55.75,trio1238,tri,Cariban,,Cariban,cCC9251,tri,false,false,SR BR,Meira-1999
tis,Tibetan (Shigatse),Eurasia,29,89,tibe1272,bod,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,bod,false,false,CN,Haller-2000
tiv,Tiv,Africa,7.5,9,tivv1240,tiv,Niger-Congo,Benue-Congo,Tivoid,c51CC70,tiv,false,false,NG,Abraham-1933 Abraham-1940
tiw,Tiwi,Australia,-11.5,131,tiwi1244,tiw,Tiwian,,Tiwian,c33807C,tiw,true,true,AU,Anderson-and-Maddieson-1994 Fabricius-1998 Lee-1983 Lee-1984 Lee-1987 Lee-1993 Nichols-1992 Osborne-1974
tja,Tiipay (Jamul),North America,32.1666666667,-116.5,kumi1248,dih,Hokan,,Yuman,cCC6151,dih,false,false,MX US,Langdon-1970 Miller-1990 Miller-2001
tke,Tokelauan,Papunesia,-9,-172,toke1240,tkl,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tkl,false,false,TK,Hooper-1996 Vonen-1999
tki,Tuki,Africa,4.58333333333,11.5,tuki1240,bag,Niger-Congo,Benue-Congo,Bantu,cC3CC51,bag,false,false,CM,Biloa-1997
tkl,Takelma,North America,42.5,-123,take1257,tkm,,,,c33804F,tkm,false,false,US,Kendall-1977 Nichols-1992 Sapir-1909 Sapir-1922b Sapir-1976 Stolz-1996
tkm,Turkmen,Eurasia,40,58,turk1304,tuk,Altaic,,Turkic,c778033,tuk,false,false,TM,Azimov-et-al-1966 Baskakov-and-Hamzaev-1956 Charyjarov-and-Nazarov-1997 Clark-1998b Institut-Jazyka-i-Literatury-1956 Schonig-1998b
tks,Teke (Southern),Africa,-2.33333333333,14.5,teke1280,kkw,Niger-Congo,Benue-Congo,Bantu,cC3CC51,kkw,false,false,CG,Paulian-1975
tla,Tolai,Papunesia,-4.25,152.083333333,kuan1248,ksd,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,ksd,false,false,PG,Bley-1912 Franklin-et-al-1974 Mosel-1984
tlb,Tatar-Noghay (Alabugat),Eurasia,47.4166666667,45.6666666667,noga1249,nog,Altaic,,Turkic,c778033,nog,false,false,RU,Arslanov-1997a
tld,Talaud,Papunesia,4.25,126.75,tala1285,tld,Austronesian,,Sangiric,c804333,tld,false,false,ID,Sneddon-1984 Talens-1911
tlf,Telefol,Papunesia,-5,141.75,tele1256,tlf,Trans-New Guinea,Awyu-Ok,Ok,c3E8033,tlf,false,false,PG,Healey-1964 Healey-1965a Healey-1965b Healey-1965c Healey-and-Healey-1977 Nichols-1992
tli,Tlingit,North America,59,-135,tlin1245,tli,Na-Dene,,Tlingit,c543380,tli,false,true,US,Boas-1917 Dryer-1985 Kelly-and-Willard-1904 Kinkade-2001 Leer-1991b Maddieson-et-al-2001 Naish-1979 Stolz-1996 Story-1979 Swanton-1909 Swanton-1911a Swanton-1911b
tll,Taulil,Papunesia,-4.41666666667,152.083333333,taul1251,tuh,,,,c806833,tuh,false,false,PG,Stebbins-2002
tlo,Tobelo,Papunesia,1.5,128.5,tobe1252,tlb,North Halmaheran,,North Halmaheran,c807933,tlb,false,false,ID,Holton-2003 Hueting-1908 Hueting-1936 den-Besten-2001
tlp,Tlapanec,North America,17.0833333333,-99,acat1239,tcf,Oto-Manguean,,Subtiaba-Tlapanec,c334180,tcf,false,false,MX,Radin-1935 Suarez-1983a Suarez-1988
tls,Talysh (Southern),Eurasia,37.5,49,tari1263,shm,Indo-European,,Iranian,c803335,shm,false,false,IR,Stilo-2005
tma,Tama,Africa,14.5,22,tama1331,tma,Eastern Sudanic,,Taman,c4E3380,tma,false,false,TD SD,Tucker-and-Bryan-1966
tmc,Timucua,North America,30.25,-82.5,timu1245,tjm,,,,c51CC68,tjm,false,false,US,Gatschet-1877 Granberry-1956 Granberry-1990 Granberry-1993
tmg,Tamagario,Papunesia,-6.41666666667,139.25,tama1336,tcg,Kayagar,,Kayagar,cCC5199,tcg,false,false,ID,Voorhoeve-1975
tmi,Tatar (Mishar),Eurasia,55.5,49,tata1255,tat,Altaic,,Turkic,c778033,tat,false,false,RU,
tmk,Tumak,Africa,9.5,17.3333333333,tuma1260,tmc,Afro-Asiatic,Chadic,East Chadic,cA7CC51,tmc,false,false,TD,Caprile-1977a
tml,Tamil,Eurasia,11,78.5,tami1289,tam,Dravidian,,Dravidian,cB7CC51,tam,false,false,IN LK,Abbi-1992 Annamalai-2000 Annamalai-and-Steever-1998 Asher-1982 Asher-1985 Beythan-1943 Brown-and-Levinson-1987 Burrow-and-Emeneau-1984 Dahl-1985 Emeneau-1980 Gil-1994b Herring-1994 Lehmann-1993 Steever-2001
tmm,Tamabo,Papunesia,-15.6666666667,167.166666667,malo1243,mla,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mla,false,false,VU,Jauncey-2002
tmn,Temein,Africa,11.9166666667,29.4166666667,nucl1339,teq,Eastern Sudanic,,Temein,c5D3380,teq,false,false,SD,Tucker-and-Bryan-1966
tmo,Tibetan (Modern Literary),Eurasia,29.8333333333,91.5,tibe1272,bod,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,bod,false,false,CN,Goldstein-1991
tmp,Tampulma,Africa,10.4166666667,-0.583333333333,tamp1252,tpm,Niger-Congo,Gur,Grusi,c448033,tpm,false,false,GH,Bergman-et-al-1969
tmr,Temiar,Eurasia,5,101.5,temi1246,tea,Austro-Asiatic,Mon-Khmer,Aslian,c7E8033,tea,false,false,MY,Benjamin-1976 Carey-1961 Nichols-1992
tms,Tommo So,Africa,15,-3,tomm1242,dto,Dogon,,Dogon,c515FCC,dto,false,false,ML,Plungian-1995
tmu,Tat (Muslim),Eurasia,41.25,48.75,musl1236,ttt,Indo-European,,Iranian,c803335,ttt,false,false,AZ,Grjunberg-1963 Grjunberg-1966
tna,Turkana,Africa,3,35.5,turk1308,tuv,Eastern Sudanic,Nilotic,Eastern Nilotic,c807E33,tuv,false,false,KE UG,Best-1983 Dimmendaal-1982 Dimmendaal-1983a Dimmendaal-1983b
tnb,Tunebo,South America,6.75,-72.25,cent2150,tuf,Chibchan,,Tunebo,c338042,tuf,false,false,CO,Headland-1997 Huber-and-Reed-1992 Rocherau-1926
tnc,Tanacross,North America,63.5,-143.5,tana1290,tcb,Na-Dene,,Athapaskan,c8C51CC,tcb,false,false,US,Holton-2000
tnd,Tindi,Eurasia,42.3666666667,46.25,tind1238,tin,Nakh-Daghestanian,Daghestanian,Avar-Andic-Tsezic,c7B51CC,tin,false,false,RU,Gudava-1964
tne,Temne,Africa,8.66666666667,-13.0833333333,timn1235,tem,Niger-Congo,Mel,Northern Mel,c807B33,tem,false,false,SL,Bybee-et-al-1994 Dalby-1966 Scott-1956 Sumner-1922 Wilson-1961a Yillah-1992
tng,Tongan,Papunesia,-21.1666666667,-175.166666667,tong1325,ton,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,ton,false,false,TO,Broschart-1994 Churchward-1953 Feldman-1978 Lynch-1998 Tchekhoff-1981
tni,Tinani,Eurasia,32.3333333333,77.1666666667,tina1246,lbf,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,lbf,false,false,IN,Sharma-1989b
tnj,Tanaina,North America,62,-150,tana1289,tfn,Na-Dene,,Athapaskan,c8C51CC,tfn,false,false,US,Tenenbaum-1975
tnk,Tungak,Papunesia,-2.55,150.25,tung1290,lcm,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,lcm,false,false,PG,Fast-1990
tnl,Tanana (Lower),North America,65,-150,lowe1425,taa,Na-Dene,,Athapaskan,c8C51CC,taa,false,false,US,Krauss-1974
tnn,Tunen,Africa,4.75,10.6666666667,tune1261,tvu,Niger-Congo,Benue-Congo,Bantu,cC3CC51,tvu,false,false,CM,Dugast-1971 Mous-1997
tno,Tondano,Papunesia,1.25,125,tond1251,tdn,Austronesian,,Minahasan,cCC7151,tdn,false,false,ID,Sneddon-1975
tns,Tanna (Southwest),Papunesia,-19.5666666667,169.333333333,sout2869,nwi,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,nwi,false,false,VU,Lynch-1982b
tnt,Tontemboan,Papunesia,1.08333333333,124.5,tont1239,tnt,Austronesian,,Minahasan,cCC7151,tnt,false,false,ID,Adriani-and-Adriani-1908
tny,Tenyer,Africa,10.6666666667,-4.5,west2466,kza,Niger-Congo,,Senufo,c338034,kza,false,false,BF,Dahl-1985 Prost-1964h
toa,Toaripi,Papunesia,-8.33333333333,146.25,toar1246,tqo,Eleman,,Eleman,cCC51C5,tqo,false,false,PG,Brown-1968 Brown-1973
tob,Toba,South America,-26.5,-59,toba1269,tob,Guaicuruan,,Qom,cCC8551,tob,false,false,AR,Buckwalter-1980 Derbyshire-and-Payne-1990 Klein-1973 Klein-2001 Messineo-2003
tod,Tod,Eurasia,32.4166666667,77.25,stod1241,sbu,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,sbu,false,false,IN,Sharma-1989b
tof,Tofa,Eurasia,53.75,98,kara1462,kim,Altaic,,Turkic,c778033,kim,false,false,RU,Rassadin-1978 Rassadin-1997
toj,Tojolabal,North America,16.3333333333,-91.5,tojo1241,toj,Mayan,,Mayan,cA951CC,toj,false,false,MX,Bybee-et-al-1994 Furbee-Losee-1976 Lenkersdorf-1979a Lenkersdorf-1979b Lenkersdorf-1994
tok,Tarok,Africa,9,10.0833333333,taro1263,yer,Niger-Congo,Benue-Congo,Benue-Congo Plateau,cB1CC51,yer,false,false,NG,Robinson-1976
tol,Tol,North America,14.6666666667,-87,toll1241,jic,,,,c33803D,jic,false,false,HN,Dennis-and-Dennis-1983 Fleming-and-Dennis-1977 Holt-1999a
ton,Tonkawa,North America,30.25,-96.75,tonk1249,tqw,,,,c51CC62,tqw,false,false,US,Hoijer-1933-1938 Hoijer-1946b Hoijer-1949 Hoijer-1972 Nichols-1992 Troike-1967
toq,Toqabaqita,Papunesia,-8.41666666667,160.583333333,toab1237,mlu,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,mlu,false,false,SB,Lichtenberk-1987 Lichtenberk-1991 Lichtenberk-2000 Lichtenberk-2007 Simons-1986
tor,Toratán,Papunesia,1.08333333333,124.833333333,rata1244,rth,Austronesian,,Sangiric,c804333,rth,false,false,ID,Himmelmann-and-Wolf-1999 Sneddon-1984
tos,Totonac (Sierra),North America,19.9166666667,-97.4166666667,high1243,tos,Totonacan,,Totonacan,c338033,tos,false,false,MX,Aschmann-1973b
tot,Totonac (Misantla),North America,19.9166666667,-96.9166666667,yecu1235,tlc,Totonacan,,Totonacan,c338033,tlc,false,false,MX,Levy-Podolsky-1990 MacKay-1991 MacKay-1999
tou,Southern Toussian,Africa,11,-4.66666666667,sout2797,wib,Niger-Congo,Gur,Tusia,c51CC53,wib,false,false,BF,Prost-1964g
toy,Tasmanian (Oyster Bay to Pitwater),Australia,-42.5,147.75,oyst1235,,Tasmanian,,Tasmanian,c33804B,,false,false,AU,Roth-1899
toz,Tonga (in Zambia),Africa,-17,27,tong1318,toi,Niger-Congo,Benue-Congo,Bantu,cC3CC51,toi,false,false,ZM,Collins-1962
tpa,Totonac (Papantla),North America,20.3333333333,-97.3333333333,papa1238,top,Totonacan,,Totonacan,c338033,top,false,false,MX,Aschmann-1946 Aschmann-1973a Levy-Podolsky-1990 Suarez-1983b
tpc,Tepecano,North America,21.75,-104.75,tepe1278,tep,Uto-Aztecan,,Tepiman,c6D8033,tep,false,false,MX,Langacker-1976
tpi,Tok Pisin,Papunesia,-9.5,147.166666667,tokp1240,tpi,other,,Creoles and Pidgins,c333D80,tpi,false,false,PG,Bybee-et-al-1994 Mihalic-1971 Mosel-1980 Muhlhausler-1981 Muhlhausler-1984 Wurm-and-Muhlhausler-1985
tpn,Tepehuan (Northern),North America,26.3333333333,-107,nort2959,ntp,Uto-Aztecan,,Tepiman,c6D8033,ntp,false,false,MX,Bascom-1982
tpr,Tupuri,Africa,10.1666666667,14.75,tupu1244,tui,Niger-Congo,Adamawa-Ubangi,Mbumic,c7ECC51,tui,false,false,TD CM,Ruelland-1992 Ruelland-1998
tps,Tepehuan (Southeastern),North America,23,-104.5,sout2976,stp,Uto-Aztecan,,Tepiman,c6D8033,stp,false,false,MX,Kim-1988 Willett-1979 Willett-1982 Willett-1991
tpt,Tapieté,South America,-19.75,-61.6666666667,tapi1253,tpj,Tupian,,Maweti-Guarani,cCC6351,tpj,false,false,PY,Gonzalez-2005 Schmidt-1936
trb,Teribe,North America,9.33333333333,-82.6666666667,teri1250,tfr,Chibchan,,Western Isthumus Chibchan,cCCBF51,tfr,false,false,PA CR,Arroyo-1972 Quesada-2000
trc,Trique (Chicahuaxtla),North America,17.1666666667,-97.8333333333,chic1273,trs,Oto-Manguean,Mixtecan,Trique,c803333,trs,false,false,MX,Good-1978
trd,Toraja,Papunesia,-3,119.75,tora1261,sda,Austronesian,,South Sulawesi,cCC6B51,sda,false,false,ID,Sande-and-Stokhof-1977
trg,Tewa (Rio Grande),North America,36.25,-106.166666667,tewa1260,tew,Kiowa-Tanoan,,Kiowa-Tanoan,cCC519F,tew,false,false,US,Speirs-1966
tri,Trique (Copala),North America,17.1666666667,-97.9166666667,copa1237,trc,Oto-Manguean,Mixtecan,Trique,c803333,trc,false,false,MX,Hollenbach-1992 Hollenbach-and-Hollenbach-1975
trm,Tirmaga,Africa,5.75,35.25,suri1267,suq,Eastern Sudanic,Surmic,South Surmic,c806933,suq,false,false,ET,Bryant-1999
trn,Terêna,South America,-20,-56,tere1279,ter,Arawakan,,Bolivia-Parana,c803533,ter,false,false,BR,Derbyshire-1986 Derbyshire-and-Payne-1990
trr,Tairora,Papunesia,-6.5,146,nort2920,tbg,Trans-New Guinea,Kainantu-Goroka,Tairora,cA651CC,tbg,false,false,PG,Vincent-1973a Vincent-1973b Vincent-1973c Vincent-and-Vincent-1962
trt,Ternate,Papunesia,0.833333333333,127.25,tern1247,tft,North Halmaheran,,North Halmaheran,c807933,tft,false,false,ID,Hayami-Allen-2001 Watuseke-1991
tru,Trumai,South America,-11.9166666667,-53.5833333333,trum1247,tpy,,,,c458033,tpy,false,true,BR,Aikhenvald-and-Dixon-1999 Guirardello-1992 Guirardello-1999a Guirardello-1999b Monod-Becquelin-1975
trw,Torwali,Eurasia,34.25,72,torw1241,trw,Indo-European,,Indic,cCC5351,trw,false,false,PK,Lunsford-2001
try,Tiruray,Papunesia,6.75,124.166666667,tiru1241,tiy,Austronesian,,Bilic,cCC8251,tiy,false,false,PH,Post-1966 Schlegel-1971
tsa,Tsakhur,Eurasia,41.6666666667,47.1666666667,tsak1249,tkr,Nakh-Daghestanian,Daghestanian,Lezgic,c8051CC,tkr,false,false,AZ RU,Ibragimov-1990 Kibrik-1999 Kodzasov-1999a Ljutikova-and-Bonch-Osmolovskaja-1999 Schulze-1997
tse,Timorese,Papunesia,-9.66666666667,124.5,uabm1237,aoz,Austronesian,,Central Malayo-Polynesian,c807633,aoz,false,false,ID,Middelkoop-1950
tsf,Tsafiki,South America,-1,-79.3333333333,colo1256,cof,Barbacoan,,Barbacoan,cCCA451,cof,false,false,EC,Dickinson-2002 Huber-and-Reed-1992 Moore-1979
tsg,Tausug,Papunesia,6,121,taus1251,tsg,Austronesian,,Greater Central Philippine,cCC8E51,tsg,false,false,MY PH ID,Ashley-1963 Hardaker-1963 Hassan-et-al-1975 Llamzon-1978 Reid-1971 Rubino-2006
tsh,Tümpisa Shoshone,North America,37,-117,pana1305,par,Uto-Aztecan,,Northern Uto-Aztecan,c803633,par,false,false,US,Dayley-1989a Dayley-1989b
tsi,Tsimshian (Coast),North America,52.5,-129,nucl1649,tsi,Tsimshianic,,Tsimshianic,c336180,tsi,false,true,CA US,Boas-1911c Dunn-1970 Dunn-1979 Dunn-1995 Hoard-1978 Mulder-1988 Mulder-1994 Sapir-1949
tsj,Tewa (San Juan Pueblo),North America,36.0833333333,-106.083333333,tewa1260,tew,Kiowa-Tanoan,,Kiowa-Tanoan,cCC519F,tew,false,false,US,Martinez-1983
tsk,Tamashek,Africa,20,-2,tama1365,taq,Afro-Asiatic,,Berber,cAACC51,taq,false,false,ML,Heath-2005
tsl,Tanzania Sign Language,Africa,-6,35,tanz1238,tza,other,,Sign Languages,c515CCC,tza,false,false,TZ,
tsm,Tasmanian,Australia,-42.1666666667,146.5,,,,,,c33804B,,false,false,AU,Crowley-and-Dixon-1981 Schmidt-1952
tsn,Tsonga,Africa,-24,32,tson1249,tso,Niger-Congo,Benue-Congo,Bantu,cC3CC51,tso,false,false,MZ ZA,Baumbach-1987
tso,Tsou,Papunesia,23.5,120.75,tsou1248,tsu,Austronesian,,Tsou,c804033,tsu,false,false,TW,Szakos-1994 Tung-1964 Wright-and-Ladefoged-1994
tsp,Tamil (Spoken),Eurasia,11,78,tami1289,tam,Dravidian,,Dravidian,cB7CC51,tam,false,false,IN,
tsr,Taushiro,South America,-3.25,-75.5,taus1253,trr,,,,c51CC79,trr,false,false,PE,Wise-1999
tst,Tsat,Eurasia,18.25,109.5,tsat1238,huq,Austronesian,,Malayo-Sumbawan,cCC7D51,huq,false,false,CN,
tsw,Tswana,Africa,-24,26,tswa1253,tsn,Niger-Congo,Benue-Congo,Bantu,cC3CC51,tsn,false,false,ZA BW,Brown-1985 Cole-and-Mokaila-1962
tsz,Tsez,Eurasia,42.25,45.75,dido1241,ddo,Nakh-Daghestanian,Daghestanian,Avar-Andic-Tsezic,c7B51CC,ddo,false,false,RU,Alekseev-and-Radzhabov-2004 Bokarev-1959 Comrie-2000 Comrie-and-Polinsky-1999
ttb,Tatar (Baraba),Eurasia,55.3333333333,78.3333333333,tata1255,tat,Altaic,,Turkic,c778033,tat,false,false,RU,Dmitrieva-1997
ttd,Tetun Dili,Papunesia,-8.58333333333,125.583333333,tetu1246,tet,Austronesian,,Central Malayo-Polynesian,c807633,tet,false,false,TL,Williams-van-Klinken-et-al-2002
tte,Tutelo,North America,37.6666666667,-78.75,tute1247,tta,Siouan,,Ohio Valley Siouan,cCC9151,tta,false,false,US,Oliverio-1996
ttn,Tetun,Papunesia,-9,126,tetu1245,tet,Austronesian,,Central Malayo-Polynesian,c807633,tet,false,false,TL,Morris-1984 Taryono-et-al-1993 van-Klinken-1997 van-Klinken-1999
tts,Tati (Southern),Eurasia,36,49.6666666667,take1255,tks,Indo-European,,Iranian,c803335,tks,false,false,IR,Yar-Shater-1969
ttu,Tsova-Tush,Eurasia,42.5,45.5,bats1242,bbl,Nakh-Daghestanian,,Nakh,c4D3380,bbl,false,false,GE,Desheriev-1953 Holisky-and-Gagua-1994
tty,Tatuyo,South America,0.416666666667,-70.5,tatu1247,tav,Tucanoan,,Tucanoan,c6FCC51,tav,false,false,CO,Huber-and-Reed-1992
tua,Tuamotuan,Papunesia,-17,-144,tuam1242,pmt,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,pmt,false,false,PF,Kuki-1970 Stimson-1964
tub,Tubar,North America,27,-108,tuba1279,tbu,Uto-Aztecan,,Tubar,cA3CC51,tbu,false,false,MX,Lionnet-1978
tuc,Tucano,South America,0.5,-69.1666666667,tuca1252,tuo,Tucanoan,,Tucanoan,c6FCC51,tuo,false,false,CO BR,Aikhenvald-2007a Bybee-et-al-1994 Derbyshire-and-Payne-1990 Giacone-nd Huber-and-Reed-1992 Sorensen-1969 West-1980
tug,Tuareg (Ahaggar),Africa,23,6,taha1241,thv,Afro-Asiatic,,Berber,cAACC51,thv,false,false,LY NE DZ,Bybee-et-al-1994 Hanoteau-1896 Louali-Reynal-et-al-1997 Penchoen-1973b Prasse-1972 Quitout-1997
tui,Türk Isaret Dili,Eurasia,39,34,turk1288,tsm,other,,Sign Languages,c515CCC,tsm,false,false,TR,
tuk,Tukang Besi,Papunesia,-5.5,123.5,tuka1247,,Austronesian,,Celebic,c803F33,bhq khc,true,true,ID,Donohue-1999a Donohue-1999c
tul,Tulu,Eurasia,12.75,75.3333333333,tulu1258,tcy,Dravidian,,Dravidian,cB7CC51,tcy,false,false,IN,Bhat-1967 Brigel-1982
tum,Tumleo,Papunesia,-3.08333333333,142.416666667,tuml1238,tmq,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tmq,false,false,PG,Schultze-1911
tun,Tunica,North America,32.6666666667,-91,tuni1252,tun,,,,c498033,tun,false,true,US,Haas-1940 Haas-1953 Nichols-1992 Swanton-1919 Swanton-1921
tup,Tupi,South America,-6,-36,tupi1273,tpn,Tupian,,Maweti-Guarani,cCC6351,tpn,false,false,BR,Masucci-1979 Platzmann-1874 Stolz-1996
tur,Turkish,Eurasia,39,35,nucl1301,tur,Altaic,,Turkic,c778033,tur,true,true,TR,Aksu-Koc-and-Slobin-1986 Comrie-1998 Dahl-1985 Darwin-1872 Erguvanli-1984 Godel-1945 Haspelmath-1997 Kononov-1941 Kononov-1956 Kornfilt-1997 Kornrumpf-1960 Lees-1961 Lewis-1967 Malherbe-and-Rosenberg-1996 Nemeth-1962 Sezer-1983 Swift-1963 Thomas-1967 Underhill-1976 Zimmer-and-Orgun-1999 van-Schaaik-1994
tus,Tuscarora,North America,36,-77.5,tusc1257,tus,Iroquoian,,Northern Iroquoian,cCC516B,tus,false,false,US,Mithun-1986 Mithun-1987 Rudes-1987 Williams-1976
tut,Tutchone (Northern),North America,63,-137,nort2941,ttm,Na-Dene,,Athapaskan,c8C51CC,ttm,false,false,CA,Ritter-et-al-1977
tuv,Tuvan,Eurasia,52,95,tuvi1240,tyv,Altaic,,Turkic,c778033,tyv,false,false,RU MN,Anderson-and-Harrison-1999 Harrison-2000 Isxakov-and-Palmbax-1961 Krueger-1977 Kuular-2007 Mongus-1980 Nichols-1992 Sat-1966 Seglenmej-1979 Song-1982 Ubrjatova-and-Litvin-1984
tuy,Tuyuca,South America,0.5,-70.0833333333,tuyu1244,tue,Tucanoan,,Tucanoan,c6FCC51,tue,false,false,CO BR,Barnes-1984 Barnes-1990 Barnes-1994 Huber-and-Reed-1992
tvl,Tuvaluan,Papunesia,-8.5,179.166666667,tuva1244,tvl,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,tvl,false,false,TV,Besnier-2000
tvo,Tatar,Eurasia,56,49.5,tata1255,tat,Altaic,,Turkic,c778033,tat,false,false,RU,Berta-1998 Comrie-1997a Dmitriev-1955 Poppe-1963 Poppe-1968 Shakhmayev-1994 Zakiev-1966 Zakiev-1997
tvt,Tutsa,Eurasia,27.5,96.5,tuts1235,tvt,Sino-Tibetan,Tibeto-Burman,Brahmaputran,c6C51CC,tvt,false,false,IN,Rekhung-1992
twa,Twana,North America,47.6666666667,-122.75,twan1247,twa,Salishan,,Central Salish,c51ADCC,twa,false,false,US,
twe,Tarahumara (Western),North America,27.5,-108,lowl1265,tac,Uto-Aztecan,,Tarahumaran,cAFCC51,tac,false,false,MX,Burgess-1984 Yasugi-1995
twn,Tiwa (Northern),North America,36.5,-105.5,nort1550,twf,Kiowa-Tanoan,,Kiowa-Tanoan,cCC519F,twf,false,false,US,Curtis-1926 Hoijer-and-Dozier-1949 Trager-1946 Trager-1971 Zaharlick-1977
tws,Tiwa (Southern),North America,35,-106.333333333,sout2961,tix,Kiowa-Tanoan,,Kiowa-Tanoan,cCC519F,tix,false,false,US,Leap-1970
twx,Turkic (West Xorasan),Eurasia,36.6666666667,56,khor1269,kmz,Altaic,,Turkic,c778033,kmz,false,false,IR,Potseluevskij-1997a
txj,Totonac (Xicotepec de Juárez),North America,20.4166666667,-97.8333333333,xico1235,too,Totonacan,,Totonacan,c338033,too,false,false,MX,Reid-1991 Reid-and-Bishop-1974 Reid-et-al-1968
tye,Tyeraity,Australia,-13,130.333333333,tyar1236,woa,Northern Daly,,Northern Daly,c5181CC,woa,false,false,AU,Tryon-1974
tza,Tzeltal (Aguacatenango),North America,16.4166666667,-92.5,tzel1254,tzh,Mayan,,Mayan,cA951CC,tzh,false,false,MX,Kaufman-1971
tze,Tzeltal,North America,16.8333333333,-92.25,tzel1254,tzh,Mayan,,Mayan,cA951CC,tzh,false,false,MX,Berlin-1963 Slocum-et-al-1999 Suarez-1983b
tzi,Taiwanese Sign Language (Ziran Shouyu),Papunesia,24,121,taiw1241,tss,other,,Sign Languages,c515CCC,tss,false,false,TW,
tzo,Tzotzil,North America,16.5,-92.6666666667,tzot1259,tzo,Mayan,,Mayan,cA951CC,tzo,false,false,MX,Aissen-1987 Cowan-1969 Delgaty-and-Ruiz-Sanchez-1978 Haviland-1988 Haviland-2001 Haviland-et-al-nd Jacobs-and-Longacre-1967 Sarles-1966
tzt,Tzeltal (Tenejapa),North America,16.6666666667,-92.3333333333,tzel1254,tzh,Mayan,,Mayan,cA951CC,tzh,false,false,MX,Berlin-and-Kaufman-1962
tzu,Tzutujil,North America,14.6666666667,-91.3333333333,tzut1248,tzj,Mayan,,Mayan,cA951CC,tzj,false,false,GT,Dayley-1981 Dayley-1985
uby,Ubykh,Eurasia,43.6666666667,39.6666666667,ubyk1235,uby,Northwest Caucasian,,Northwest Caucasian,c5851CC,uby,false,false,RU TR,Charachidze-1989 Dirr-1928 Stolz-1996
udh,Udihe,Eurasia,47.6666666667,136.25,udih1248,ude,Altaic,,Tungusic,c798033,ude,false,false,RU,Cincius-1975 Nikolaeva-and-Tolskaja-nd Nikolaeva-and-Tolskaya-2001
udi,Udi,Eurasia,41,48,udii1243,udi,Nakh-Daghestanian,Daghestanian,Lezgic,c8051CC,udi,false,false,AZ,Schulze-1982 Schulze-Furhoff-1994 Stolz-1996
udm,Udmurt,Eurasia,57.5,52.5,udmu1245,udm,Uralic,Finno-Ugric,Permic,c98CC51,udm,false,false,RU,Bybee-et-al-1994 Csucs-1998 Perevoshchikov-1962 Stolz-1996 Tepljashina-1966 Tepljashina-and-Lytkin-1976 Vaxrushev-1970 Vaxrushev-1983 Winkler-2001
ugs,Ugandan Sign Language,Africa,1,32.5,ugan1238,ugn,other,,Sign Languages,c515CCC,ugn,false,false,UG,
uhi,Uradhi,Australia,-11.9166666667,142.416666667,atam1239,urf,Pama-Nyungan,,Northern Pama-Nyungan,c336680,urf,false,false,AU,Crowley-1983 Hale-1976a Nichols-1992
ukr,Ukrainian,Eurasia,49,33,ukra1253,ukr,Indo-European,,Slavic,c803338,ukr,false,false,UA,Beloded-and-Zhovtobrjux-1966 Danylenko-and-Vakulenko-1995 Hrabovsky-1991 Humesky-1980 Malherbe-and-Rosenberg-1996 Medushevsky-and-Zyatovska-1963 Pugh-and-Press-1999 Shevelov-1993 Stechishin-1958 Struk-1978 Struk-1982
uku,Upper Kuskokwim,North America,63,-157,uppe1438,kuu,Na-Dene,,Athapaskan,c8C51CC,kuu,false,false,US,Kibrik-2004
ulc,Ulcha,Eurasia,52.25,140.333333333,ulch1241,ulc,Altaic,,Tungusic,c798033,ulc,false,false,RU,Cincius-1975
uld,Uldeme,Africa,10.95,14.1166666667,wuzl1236,udl,Afro-Asiatic,Chadic,Biu-Mandara,c6C8033,udl,false,false,CM,Provoost-and-Koulifa-1987 de-Colombel-1997
uli,Ulithian,Papunesia,9.91666666667,139.583333333,ulit1238,uli,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,uli,false,false,FM,Lynch-1998 Lynch-2002b Sohn-and-Bender-1973
uma,Uma,Papunesia,-1.83333333333,120,umaa1242,ppk,Austronesian,,Celebic,c803F33,ppk,false,false,ID,Esser-1964 Martens-1988a Martens-1988b Martens-1995
umb,UMbundu,Africa,-12.5,15,umbu1257,umb,Niger-Congo,Benue-Congo,Bantu,cC3CC51,umb,false,false,AO,Schadeberg-1982 Schadeberg-1990
ump,Umpila,Australia,-13.5,143.5,umpi1239,ump,Pama-Nyungan,,Northern Pama-Nyungan,c336680,ump,false,false,AU,
umu,Umaua,South America,1,-72,cari1279,cbd,Cariban,,Cariban,cCC9251,cbd,false,false,CO,Durbin-and-Seijas-1972
una,Una,Papunesia,-4.66666666667,140,unaa1239,mtg,Trans-New Guinea,,Mek,c428033,mtg,false,true,ID,Louwerse-1988
ung,Ungarinjin,Australia,-16.3333333333,126,ngar1284,ung,Worrorran,,Worrorran,c51CCBB,ung,false,true,AU,Capell-1970 Coate-and-Elkin-1974 Coate-and-Oates-1970 Fabricius-1998 Nichols-1992 Rumsey-1982
unm,Unami,North America,40,-75.1666666667,unam1242,unm,Algic,,Algonquian,c758033,unm,false,false,US,Goddard-1979 Goddard-1982
ura,Ura,Papunesia,-18.6666666667,169.083333333,urav1235,uur,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,uur,false,false,VU,Crowley-1998c Crowley-1999
urd,Urdu,Eurasia,25,67,urdu1245,urd,Indo-European,,Indic,cCC5351,urd,false,false,PK,Bender-1967 Dymshic-2001 Schmidt-1999 Stolz-1996
urh,Urhobo,Africa,5.58333333333,6,urho1239,urh,Niger-Congo,Benue-Congo,Edoid,c3B3380,urh,false,false,NG,Awoyale-1986
uri,Urim,Papunesia,-3.58333333333,142.666666667,urim1252,uri,Torricelli,,Urim,c338039,uri,false,false,PG,Hemmila-1989
urk,Urubú-Kaapor,South America,-2.33333333333,-46.5,urub1250,urb,Tupian,,Maweti-Guarani,cCC6351,urb,false,true,BR,Kakumasu-1986 Kakumasu-and-Kakumasu-1988 Stolz-1996
url,Urak Lawoi',Eurasia,8,98.3333333333,urak1238,urk,Austronesian,,Malayo-Sumbawan,cCC7D51,urk,false,false,TH,Hogan-1988
urm,Urum,Eurasia,47.1166666667,37.55,urum1249,uum,Altaic,,Turkic,c778033,uum,false,false,UA GE,Muratov-1997
urn,Urarina,South America,-4.5,-75.5,urar1246,ura,,,,c628033,ura,false,false,PE,Olawsky-2002 Olawsky-2006 Wise-1999
urt,Urat,Papunesia,-3.66666666667,142.833333333,urat1244,urt,Torricelli,,Urat,c338063,urt,false,false,PG,Sposato-2008
uru,Uru,South America,-16.75,-69,uruu1244,ure,Uru-Chipaya,,Uru-Chipaya,c9DCC51,ure,false,false,BO,Vellard-1967
usa,Usan,Papunesia,-4.83333333333,145.166666667,usan1239,wnu,Trans-New Guinea,Madang,North Adelbert,c4B3380,wnu,false,true,PG,Reesink-1984 Reesink-1987
usl,Urubú Sign Language,South America,-2.33333333333,-46,urub1243,uks,other,,Sign Languages,c515CCC,uks,false,false,BR,Kakumasu-1966
usr,Usarufa,Papunesia,-6.41666666667,145.583333333,usar1243,usa,Trans-New Guinea,Kainantu-Goroka,Gauwa,cB151CC,usa,false,false,PG,Bee-1973
ute,Ute,North America,39,-109,utee1244,ute,Uto-Aztecan,,Northern Uto-Aztecan,c803633,ute,false,false,US,Anonymous-1979 Davis-1966 Sapir-1930 Southern-Ute-Tribe-1980
uyg,Uyghur,Eurasia,40,80,uigh1240,uig,Altaic,,Turkic,c778033,uig,false,false,CN,Bybee-et-al-1994 Comrie-1997b Dwyer-2001 Hahn-1991 Hahn-1998 Malherbe-and-Rosenberg-1996 Nadzhip-1960 Sadvasakov-1997
uzb,Uzbek,Eurasia,39,66,uzbe1247,,Altaic,,Turkic,c778033,uzn uzs,false,false,UZ AF,Boeschoten-1998 Khakimov-1994 Kononov-1960 Malherbe-and-Rosenberg-1996 Raun-1969 Reshetov-1966 Sjoberg-1963 Xodzhiev-1997
uzn,Uzbek (Northern),Eurasia,40.6666666667,66.5,nort2690,uzn,Altaic,,Turkic,c778033,uzn,false,false,UZ,Raun-1969 Sjoberg-1962 Sjoberg-1963
vaf,Vafsi,Eurasia,34.6666666667,49.9166666667,vafs1240,vaf,Indo-European,,Iranian,c803335,vaf,false,false,IR,Stilo-2004 Stilo-2005
vag,Vagla,Africa,9.41666666667,-2.41666666667,vagl1239,vag,Niger-Congo,Gur,Grusi,c448033,vag,false,false,GH,Crouch-and-Naden-1998
vai,Vai,Africa,6.91666666667,-11.25,vaii1241,vai,Mande,,Western Mande,c6751CC,vai,false,false,SL LR,Stolz-1996 Welmers-1976
vas,Vasavi,Eurasia,24.5,71.5,vasa1239,vas,Indo-European,,Indic,cCC5351,vas,false,false,IN,
vat,Vata,Africa,5.83333333333,-5.41666666667,lako1244,dic,Niger-Congo,,Kru,c6F51CC,dic,false,false,CI,Koopman-1984
ved,Vedda,Eurasia,7,81,vedd1240,ved,Indo-European,,Indic,cCC5351,ved,false,false,LK,Sugathapala-de-Silva-1972
ven,Venda,Africa,-22,30,vend1245,ven,Niger-Congo,Benue-Congo,Bantu,cC3CC51,ven,false,false,ZA ZW,Poulos-1990 Stolz-1996
vep,Veps,Eurasia,60,35,veps1250,vep,Uralic,Finno-Ugric,Finnic,c5B8033,vep,false,false,RU,Laanest-1982
vie,Vietnamese,Eurasia,10.5,106.5,viet1252,vie,Austro-Asiatic,Mon-Khmer,Viet-Muong,cCCC951,vie,true,true,VN,Binh-1971 Bisang-1991 Bisang-1992 Bystrov-and-Stankevich-2001 Bystrov-and-Stankevich-2007 Emeneau-1951 Hoang-1982 Huffman-and-Hai-1980 Hung-1979 Jones-and-Thong-1960 Malherbe-and-Rosenberg-1996 Nguyen-1966 Nguyen-1974a Nguyen-1974b Nguyen-1975 Nguyen-1990 Nguyen-1997 Nguyen-2001 Solncev-et-al-1960 Thompson-1965 Thompson-1987 Thompson-1991 Van-Chinh-1970 Vu-1998 Vuong-Gia-Thuy-1975
vif,Vili,Africa,-5.5,14,vili1238,vif,Niger-Congo,Benue-Congo,Bantu,cC3CC51,vif,false,false,CG GA,Carrie-1890 Ndamba-1977
vka,Kariera,Australia,-20.5,118.5,kari1304,vka,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,vka,false,false,AU,
vla,Vlaamse Gebarentaal,Eurasia,51,4,vlaa1235,vgt,other,,Sign Languages,c515CCC,vgt,false,false,BE,
vnm,Vinmavis,Papunesia,-16.1666666667,167.416666667,vinm1237,vnm,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,vnm,false,false,VU,Crowley-2002g
vot,Votic,Eurasia,59.5,30,voti1245,vot,Uralic,Finno-Ugric,Finnic,c5B8033,vot,false,false,RU,Ariste-1968 Ariste-1997 Laanest-1982
wag,Wagiman,Australia,-14,131.25,wage1238,waq,,,,c335180,waq,false,false,AU,Cook-1987 Tryon-1971
wah,Wahgi,Papunesia,-5.83333333333,144.716666667,wahg1249,,Trans-New Guinea,,Chimbu-Wahgi,c51CC7C,wgi whg,false,false,PG,Ladefoged-et-al-1977 Luzbetak-1954 Luzbetak-1956 Phillips-1976
wai,Wai Wai,South America,1,-59,waiw1244,waw,Cariban,,Cariban,cCC9251,waw,false,false,GY BR,Hawkins-1991 Hawkins-1998
wak,Wakhi,Eurasia,36.5,72,wakh1245,wbl,Indo-European,,Iranian,c803335,wbl,false,false,PK AF TJ,Grunberg-1988b Lorimer-1958
wal,Walman,Papunesia,-3.21666666667,142.5,valm1241,van,Torricelli,,West Palei,c804533,van,false,false,PG,Schmidt-and-Vormann-1900 Spolgen-and-Schmidt-1901
wam,Wambaya,Australia,-18.6666666667,135.75,wamb1258,wmb,Mirndi,,Wambayan,c336E80,wmb,false,true,AU,Nordlinger-1993 Nordlinger-1998
wan,Wangkumara,Australia,-27.3333333333,143,ngur1261,xwk,Pama-Nyungan,,Central Pama-Nyungan,c335F80,xwk,false,false,AU,McDonald-and-Wurm-1979
wao,Waorani,South America,-1,-76.5,waor1240,auc,,,,c748033,auc,false,false,EC,Derbyshire-and-Payne-1990 Nichols-1992 Peeke-1973 Peeke-1979 Peeke-1994 Pike-1964 Pike-and-Saint-1989 Saint-and-Pike-1962 Wilkendorf-1988
wap,Wappo,North America,38.5,-122.5,wapp1239,wao,Wappo-Yukian,,Wappo,c788033,wao,false,false,US,Li-and-Thompson-1977 Li-and-Thompson-1978 Li-et-al-1977 Nichols-1992 Radin-1929 Sawyer-1965
war,Wari',South America,-11.3333333333,-65,wari1268,pav,Chapacura-Wanham,,Chapacura-Wanham,cCC8F51,pav,true,true,BR,Everett-and-Kern-1997 MacEachern-et-al-1997
was,Washo,North America,39.25,-120,wash1253,was,,,,c7B8033,was,false,false,US,Jacobsen-1964 Kroeber-1906 Lowie-1963 Moravcsik-1978
wat,Watjarri,Australia,-26,117.5,waja1257,wbv,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,wbv,false,false,AU,Douglas-1981 Fabricius-1998
wau,Waunana,South America,4,-77,woun1238,noa,Choco,,Choco,cCC8751,noa,false,false,CO PA,Loewen-1954 Sanchez-et-al-1977
way,Wayampi,South America,1,-52,waya1270,oym,Tupian,,Maweti-Guarani,cCC6351,oym,false,false,BR,Dooley-1990 Grenand-1980 Grenand-1989 Jensen-1994
wbn,Wambon,Papunesia,-5.5,140.416666667,wamb1259,wms,Trans-New Guinea,Awyu-Ok,Dumut,c5165CC,wms,false,false,ID,de-Vries-1989 de-Vries-and-de-Vries-Wiersma-1992
wbt,Wanman,Australia,-22,123,wanm1242,wbt,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,wbt,false,false,AU,
wch,Wichí,South America,-22.5,-62.5833333333,wich1264,mzh,Matacoan,,Matacoan,cB451CC,mzh,true,true,BO AR,Hunt-1940 Remedi-1896 Tovar-1981 Vinas-Urquiza-1970 Vinas-Urquiza-1974
wdo,Western Desert (Ooldea),Australia,-30.5,132,pitj1243,pjt,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,pjt,false,false,AU,Douglas-1955 Douglas-1964
wec,Welsh (Colloquial),Eurasia,52.75,-3.5833,wels1247,cym,Indo-European,,Celtic,c80333C,cym,false,false,GB,Watkins-1993
wed,Wedau,Papunesia,-10.1666666667,150.166666667,weda1241,wed,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,wed,false,false,PG,King-1901a
wel,Welsh,Eurasia,52,-3,wels1247,cym,Indo-European,,Celtic,c80333C,cym,false,false,GB,Ball-1993 Bowen-and-Jones-1960 Comrie-and-Thompson-1985 Evans-and-Thomas-1958 Fife-1990 Jones-1955 Jones-1970 Jones-and-Thomas-1977 Kibre-2001 King-1993a MacAulay-1992c Malherbe-and-Rosenberg-1996 Rhys-Jones-1985 Thomas-1992a Thorne-1993 Watkins-1993 Williams-1980b
wem,Wembawemba,Australia,-35.3333333333,144,west2443,xww,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,xww,false,false,AU,Hercus-1969b Hercus-1986b Hercus-1999b Nichols-1992
wer,Weri,Papunesia,-7.75,146.916666667,weri1253,wer,Trans-New Guinea,,Goilalan,c58CC51,wer,false,false,PG,Boxwell-and-Boxwell-1966
wet,Wetan,Papunesia,-8.16666666667,128,luan1263,lex,Austronesian,,Central Malayo-Polynesian,c807633,lex,false,false,ID,de-Jong-1987
wgg,Wangkangurru,Australia,-27,137,wang1290,wgg,Pama-Nyungan,,Central Pama-Nyungan,c335F80,wgg,false,false,AU,
wgl,Waigali,Eurasia,35,71.25,waig1243,wbk,Indo-European,,Nuristani,cCC516E,wbk,false,false,AF,Morgenstierne-1954 Nichols-1992
wgu,Warrongo,Australia,-18,145,waru1264,wrg,Pama-Nyungan,,Northern Pama-Nyungan,c336680,wrg,false,false,AU,Tsunoda-1988 Tsunoda-2007a
wic,Wichita,North America,33.3333333333,-97.3333333333,wich1260,wic,Caddoan,,Northern Caddoan,c805A33,wic,true,true,US,Rood-1976 Rood-1996
wik,Wikchamni,North America,36.4166666667,-119.083333333,yoku1256,yok,Penutian,,Yokuts,c335380,yok,false,false,US,Gamble-1978 Mithun-1999
win,Wintu,North America,41,-122.5,wint1259,wnw,Penutian,,Wintuan,c5190CC,wnw,false,false,US,Mithun-1999 Nichols-1992 Pitkin-1963 Pitkin-1977 Pitkin-1984 Pitkin-1985 Schlichter-1981 Shepherd-1989
wir,Wirangu,Australia,-32,134,wira1265,wgu,Pama-Nyungan,,Central Pama-Nyungan,c335F80,wgu,false,false,AU,Hercus-1999a
wiy,Wiyot,North America,40.8333333333,-124.166666667,wiyo1248,wiy,Algic,,Wiyot,cBCCC51,wiy,false,false,US,Proulx-1984 Reichard-1925 Teeter-1964 Teeter-and-Nichols-1993
wkw,Wagawaga,Australia,-26.5,152.5,waka1274,wkw,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,wkw,false,false,AU,
wlf,Wolof,Africa,15.25,-16,nucl1347,wol,Niger-Congo,North-Central Atlantic,Wolof,c95CC51,wol,false,false,GM SN,Church-1981 Dahl-1985 Diouf-and-Yaguello-1991 Ka-1994 Ka-2001 Malherbe-and-Rosenberg-1996 Malherbe-and-Sall-1989 Manessy-and-Sauvageot-1963 Nikiforova-1981 Njie-1982 Nussbaum-et-al-1970 Rambaud-1903 Sauvageot-1965 Ward-1963
wll,Wallisian,Papunesia,-13.3,-176.2,wall1257,wls,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,wls,false,false,WF,Nguyen-1998
wlm,Walmatjari,Australia,-19.5,125.75,walm1241,wmt,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,wmt,false,false,AU,Hudson-1978 Hudson-and-Richards-1969
wlo,Wolio,Papunesia,-5.5,122.75,woli1241,wlo,Austronesian,,Celebic,c803F33,wlo,false,false,ID,Anceaux-1952 Anceaux-and-Grimes-1995 Husen-et-al-1985
wlw,Warluwara,Australia,-22,138.5,warl1256,wrb,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,wrb,false,false,AU,Breen-1970
wly,Wolaytta,Africa,6.83333333333,37.75,wola1242,wal,Afro-Asiatic,Omotic,Ta-Ne-Omotic,cCC5751,wal,false,false,ET,Lamberti-and-Sottile-1997 Tucker-and-Bryan-1966
wma,West Makian,Papunesia,0.5,127.583333333,west2600,mqs,North Halmaheran,,North Halmaheran,c807933,mqs,false,false,ID,Voorhoeve-1982 Watuseke-1976
wme,Wambule,Eurasia,29.25,85.9166666667,wamb1257,wme,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,wme,false,false,NP,Opgenort-2004
wmn,Wéménugbé,Africa,6.66666666667,2.5,weme1239,wem,Niger-Congo,Kwa,Tano,c806233,wem,false,false,BJ,Brand-1999
wmu,Wik Munkan,Australia,-13.9166666667,141.75,wikm1247,wim,Pama-Nyungan,,Northern Pama-Nyungan,c336680,wim,false,false,AU,Godfrey-1964 Kilham-et-al-1986 McConnel-1945 Mushin-1995 Oates-and-Oates-1964 Sayers-and-Godfrey-1964
wn,Wik Ngathana,Australia,-13.9166666667,141.5,wikn1245,wig,Pama-Nyungan,,Northern Pama-Nyungan,c336680,wig,false,false,AU,Sutton-1978
wna,Wan,Africa,7.83333333333,-5.86666666667,wann1242,wan,Mande,,Eastern Mande,c403380,wan,false,false,CI,Nikitina-2008
wnb,Winnebago,North America,43.5,-88.5,hoch1243,win,Siouan,,Mississippi Valley Siouan,c7A8033,win,false,false,US,Hale-and-White-Eagle-1980 Marino-1968 Miner-1979 Miner-1981 Yegerlehner-and-Voegelin-1957
wnt,Wantoat,Papunesia,-6.16666666667,146.5,want1252,wnc,Trans-New Guinea,Finisterre-Huon,Finisterre,cCC51B9,wnc,false,false,PG,Davis-1969
wob,Wobe,Africa,7.41666666667,-7.33333333333,weno1238,wob,Niger-Congo,,Kru,c6F51CC,wob,false,false,CI,
wog,Wogamusin,Papunesia,-4.25,142.333333333,woga1249,wog,Sepik,,Wogamusin-Chenapian,cCC7451,wog,false,false,PG,Laycock-and-Zgraggen-1975
woi,Woisika,Papunesia,-8.25,124.833333333,kama1365,woi,Greater West Bomberai,Timor-Alor-Pantar,Alor-Pantar,c608033,woi,false,false,ID,Stokhof-1979 Stokhof-1982
wol,Woleaian,Papunesia,7.33333333333,143.833333333,wole1240,woe,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,woe,false,false,FM,Sohn-1975 Sohn-and-Tawerilmang-1976
wom,Womo,Papunesia,-2.91666666667,141.833333333,womo1238,wmx,Skou,,Serra Hills,c338068,wmx,false,false,PG,
wor,Worora,Australia,-15.6666666667,124.666666667,woro1255,wro,Worrorran,,Worrorran,c51CCBB,wro,false,false,AU,Bybee-et-al-1994 Love-2000
wps,Wapishana,South America,2.66666666667,-60,wapi1253,wap,Arawakan,,Negro-Roraima,c336380,wap,false,false,GY BR,Tracy-1972
wra,Warao,South America,9.33333333333,-61.6666666667,wara1303,wba,,,,cC0CC51,wba,true,true,VR,Osborn-1966 Osborn-1967 Romero-Figueroa-1985 Romero-Figueroa-1986 Romero-Figueroa-1997 Vaquero-1965 de-Barral-1979 de-Goeje-1930
wrb,Warrnambool,Australia,-38.25,142.5,warr1257,gjm,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,gjm,false,false,AU,Blake-2003
wrd,Wardaman,Australia,-15.5,131,ward1246,wrr,Yangmanic,Gunwinyguan,Yangmanic,c51CC8D,wrr,false,true,AU,Merlan-1994
wrg,Warrgamay,Australia,-18.5833333333,146.083333333,warr1255,wgy,Pama-Nyungan,,Northern Pama-Nyungan,c336680,wgy,false,false,AU,Dixon-1981
wrk,Warekena,South America,1.5,-67.5,guar1293,gae,Arawakan,,Alto-Orinoco,c334A80,gae,false,false,CO BR VR,Aikhenvald-1998 Aikhenvald-2007b
wrl,Warlpiri,Australia,-20,132.333333333,warl1254,wbp,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,wbp,false,false,AU,Capell-1962b Hale-1976b Nash-1980 Nash-1986 Reece-1970 Reece-1975 Reece-1979 Simpson-1983 Simpson-1991 Swartz-1988 Terrill-2001a
wrm,Warembori,Papunesia,-1.66666666667,137.583333333,ware1253,wsa,Austronesian,Eastern Malayo-Polynesian,South Halmahera - West New Guinea,c807433,wsa,false,false,ID,Donohue-1999b
wrn,Warndarang,Australia,-14.4166666667,135.583333333,wand1263,wnd,Mangarrayi-Maran,,Mara,c5176CC,wnd,false,false,AU,Dixon-2002 Heath-1980b Nichols-1992
wrp,Waropen,Papunesia,-2.33333333333,136.583333333,waro1242,wrp,Austronesian,Eastern Malayo-Polynesian,South Halmahera - West New Guinea,c807433,wrp,false,false,ID,Held-1942
wrs,Waris,Papunesia,-3.16666666667,141,wari1266,wrs,Border,,Border,cCC9E51,wrs,false,false,ID PG,Brown-1988b
wru,Warumungu,Australia,-19.5,134.5,waru1265,wrm,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,wrm,false,false,AU,
wrw,Warrwa,Australia,-17.5,123.5,warr1258,wwr,Nyulnyulan,,Nyulnyulan,cCCBB51,wwr,false,false,AU,McGregor-1994
wry,Waray (in Australia),Australia,-13.1666666667,131.25,wara1290,wrz,Gunwinyguan,,Western Gunwinyguan,cCC5151,wrz,false,false,AU,Fabricius-1998 Harvey-1986
wsk,Waskia,Papunesia,-4.5,146,wask1241,wsk,Trans-New Guinea,Madang,Kowan,c337880,wsk,false,false,PG,Ross-and-Paol-1978
wth,Wathawurrung,Australia,-38,144,wath1238,wth,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,wth,false,false,AU,Blake-et-al-1998a
wtm,Watam,Papunesia,-3.91666666667,144.5,wata1253,wax,Lower Sepik-Ramu,Ramu,Lower Ramu,cC651CC,wax,false,false,PG,Anonymous-5
wuc,Wu,Eurasia,31.6666666667,119.916666667,wuch1236,wuu,Sino-Tibetan,,Chinese,c51CCC9,wuu,false,false,CN,Chao-1970
wur,Waurá,South America,-13,-53,waur1244,wau,Arawakan,,Central Arawakan,c803833,wau,false,false,BR,Derbyshire-1986 Derbyshire-and-Payne-1990 Wise-1990
wwa,Waama,Africa,10.5833333333,1.66666666667,waam1244,wwa,Niger-Congo,Gur,Oti-Volta,cCCB351,wwa,false,false,BJ,Peter-1990
wwr,Woiwurrung,Australia,-37.5,145.5,woiw1237,wyu,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,wyu,false,false,AU,Blake-1991
wwy,Waray-Waray,Papunesia,12,125,wara1300,war,Austronesian,,Greater Central Philippine,cCC8E51,war,false,false,PH,Rubino-2001c
wya,Wyandot,North America,44.3333333333,-77.5,wyan1247,wya,Iroquoian,,Northern Iroquoian,cCC516B,wya,false,false,CA,Kopris-2001
wyn,Wayana,South America,3.25,-54.1666666667,waya1269,way,Cariban,,Cariban,cCC9251,way,false,false,GF SR BR,Jackson-1972 de-Goeje-1946
xam,/Xam,Africa,-31,21,xamm1241,xam,Tu,,Tu,cCC51A8,xam,false,false,ZA,Anonymous-4 Stolz-1996
xar,Xârâcùù,Papunesia,-21.6666666667,166,xara1244,ane,Austronesian,Eastern Malayo-Polynesian,Oceanic,c806D33,ane,false,false,NC,Grace-1975
xas,Xasonga,Africa,14.25,-10.5,xaas1235,kao,Mande,,Western Mande,c6751CC,kao,false,false,ML SN,Koite-Herschel-1981-1982
xav,Xavánte,South America,-15,-52.5,xava1240,xav,Macro-Ge,Je,Je Central,cCC518B,xav,false,false,BR,McLeod-and-Mitchell-1980 Rodrigues-1999b
xbi,Kombio,Papunesia,-3.5,142.75,komb1272,xbi,Torricelli,,Kombio-Arapesh,c51CC56,xbi,false,false,PG,Yi-2008
xer,Xerénte,South America,-10,-48.1666666667,xere1240,xer,Macro-Ge,Je,Je Central,cCC518B,xer,false,false,BR,Martius-1863 Wiesemann-1986a de-Souza-Filho-2007
xho,Xhosa,Africa,-32,27,xhos1239,xho,Niger-Congo,Benue-Congo,Bantu,cC3CC51,xho,false,false,ZA,Downing-2001 McLaren-1939
xns,Kanashi,Eurasia,32.0833333333,77.25,kana1283,xns,Sino-Tibetan,Tibeto-Burman,Bodic,c51CCB2,xns,false,false,IN,Sharma-1992
xok,Xokleng,South America,-24.5,-50,xokl1240,xok,Macro-Ge,Je,Je Meridional,c83CC51,xok,false,false,BR,Henry-1935 Martius-1863 Urban-1985 Wiesemann-1986a
xoo,!Xóõ,Africa,-24,21.5,huaa1248,nmn,Tu,,Tu,cCC51A8,nmn,false,false,BW,Traill-1985 Traill-1994
xun,!Xun (Ekoka),Africa,-19.6666666667,18,kung1261,knw,Kxa,,Ju-Kung,cCC5191,knw,false,false,AO NA,Konig-and-Heine-2001
yag,Yagua,South America,-3.5,-72,yagu1244,yad,Peba-Yaguan,,Peba-Yaguan,c517FCC,yad,true,true,PE,Derbyshire-and-Payne-1990 Everett-1989 Nichols-1992 Payne-1985 Payne-1990a Payne-1992 Payne-1997 Payne-and-Payne-1990 Powlison-1995
yah,Yahgan,South America,-55,-68,yama1264,yag,Yámana,,Yámana,cCCBC51,yag,false,false,CL,Adam-1885 Adelaar-2004 Beauvoir-1915
yak,Yaka,Africa,-7,17.5,yaka1269,yaf,Niger-Congo,Benue-Congo,Bantu,cC3CC51,yaf,false,false,AO CD,Ruttenberg-1999
yal,Yale (Kosarek),Papunesia,-4.08333333333,139.5,kosa1249,kkl,Trans-New Guinea,,Mek,c428033,kkl,false,false,ID,Heeschen-1992
yam,Yaminahua,South America,-8,-73,yami1256,yaa,Pano-Tacanan,,Panoan,c334F80,yaa,false,false,BR PE,Eakin-1991
yan,Yana,North America,40.5,-122,yana1271,ynn,Hokan,,Yana,cCC5C51,ynn,false,false,US,Sapir-1922a Sapir-and-Swadesh-1960
yao,Yao (in Malawi),Africa,-14.5,35.5,yaoo1241,yao,Niger-Congo,Benue-Congo,Bantu,cC3CC51,yao,false,false,MZ MW,Whiteley-1966
yap,Yapese,Papunesia,9.58333333333,138.166666667,yape1248,yap,Austronesian,,Yapese,cCCB551,yap,false,false,FM,Hsu-1969 Jensen-1977a Jensen-et-al-1977a Lynch-1998
yaq,Yaqui,North America,27.5,-110.25,yaqu1251,yaq,Uto-Aztecan,,Cahita,c698033,yaq,true,true,MX,Dedrick-and-Casad-1999 Escalante-1990 Jelinek-1998 Johnson-1962 Kurath-and-Spicer-1947 Lindenfeld-1973 Shaul-1999
yar,Yareba,Papunesia,-9.5,148.5,yare1248,yrb,Trans-New Guinea,,Yareban,cCCB651,yrb,false,false,PG,Weimer-1972 Weimer-and-Weimer-1972 Weimer-and-Weimer-1974 Weimer-and-Weimer-1975
yav,Yavapai,North America,34,-113.333333333,hava1248,yuf,Hokan,,Yuman,cCC6151,yuf,false,false,US,Kendall-1976 Shaterian-1983
yaw,Yawa,Papunesia,-1.75,136.25,nucl1454,yva,,,,cCCB051,yva,false,false,ID,Jones-1986a Jones-1986b
yay,Yay,Eurasia,22.4166666667,104.75,bouy1240,pcc,Tai-Kadai,,Kam-Tai,c51CC8A,pcc,false,false,VN,Gedney-1965 Hudak-1991
yaz,Yazgulyam,Eurasia,38.5,71.5,yazg1240,yah,Indo-European,,Iranian,c803335,yah,false,false,TJ,Efimov-1975 Payne-1989b
yba,Yamba,Africa,6.41666666667,11.0833333333,yamb1251,yam,Niger-Congo,Benue-Congo,Wide Grassfields,c7D3380,yam,false,false,CM,
ybi,Yamphu,Eurasia,27.5833333333,87.3333333333,yamp1242,ybi,Sino-Tibetan,Tibeto-Burman,Himalayish,c517CCC,ybi,false,false,NP,Rutgers-1998
ych,Yup'ik (Chevak),North America,61.5,-165.75,cent2127,esu,Eskimo-Aleut,,Eskimo,cCC7351,esu,false,false,US,Jacobson-1985 Woodbury-1981
ycn,Yucuna,South America,-0.75,-71,yucu1253,ycn,Arawakan,,Japura-Colombia,c9A51CC,ycn,false,false,CO,Huber-and-Reed-1992 Schauer-and-Schauer-1958 Schauer-and-Schauer-1967
yct,Yucatec,North America,20,-89,yuca1254,yua,Mayan,,Mayan,cA951CC,yua,false,false,MX,Arzapalo-1973 Bricker-et-al-1998 Straight-1976 Suarez-1983b Tozzer-1921
ydb,Yiddish (Bessarabian),Eurasia,47,28.5,east2295,ydd,Indo-European,,Germanic,c803433,ydd,false,false,MD,
ydd,Yiddish,Eurasia,52,23,yidd1255,ydd,Indo-European,,Germanic,c803433,ydd,false,false,UA BY DE LT PL,Katz-1987
ydl,Yiddish (Lodz),Eurasia,51.75,19.4166666667,east2295,ydd,Indo-European,,Germanic,c803433,ydd,false,false,PL,
yei,Yei,Papunesia,-7.91666666667,140.916666667,yeii1239,jei,Yam,,Yei,c80333A,jei,false,false,ID PG,Boelaars-1950
yel,Yelî Dnye,Papunesia,-11.3666666667,154.166666667,yele1255,yle,Yele,,Yele,c806B33,yle,false,false,PG,Henderson-1975 Henderson-1995
yem,Yemba,Africa,5.41666666667,10.0833333333,yemb1246,ybb,Niger-Congo,Benue-Congo,Wide Grassfields,c7D3380,ybb,false,false,CM,Haynes-1989
yes,Yessan-Mayo,Papunesia,-4.16666666667,142.583333333,yess1239,yss,Sepik,,Tama Sepik,c337E80,yss,false,false,PG,Bybee-et-al-1994 Foreman-1974 Foreman-and-Marten-1973
yey,Yeyi,Africa,-20,23.5,yeyi1239,yey,Niger-Congo,Benue-Congo,Bantu,cC3CC51,yey,false,false,NA BW,Gowlett-1997 Lukusa-2002
ygd,Dii,Africa,8,14,diii1241,dur,Niger-Congo,Adamawa-Ubangi,Samba-Duru,c72CC51,dur,false,false,CM,Bohnhoff-1986
ygn,Yaghnobi,Eurasia,39,69,yagn1238,yai,Indo-European,,Iranian,c803335,yai,false,false,TJ,Xromov-1987
ygr,Yagaria,Papunesia,-6.33333333333,145.416666667,yaga1260,ygr,Trans-New Guinea,Kainantu-Goroka,Siane-Yagaria,c55CC51,ygr,false,false,PG,Bybee-et-al-1994 Haiman-1980 Renck-1967 Renck-1975 Renck-1977
yi,Nuosu,Eurasia,28.0,103.0,sich1238,iii,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,iii,false,false,CN,Chen-et-al-1985 Gao-1958
yid,Yidiny,Australia,-17,145.75,yidi1250,yii,Pama-Nyungan,,Northern Pama-Nyungan,c336680,yii,false,true,AU,Dixon-1977a Dixon-1977b Dixon-1991a Nash-1979
yil,Yil,Papunesia,-3.53333333333,142.15,yill1241,yll,Torricelli,,East Wapei,cC851CC,yll,false,false,PG,Martens-and-Tuominen-1977
yim,Yimas,Papunesia,-4.66666666667,143.55,yima1243,yee,Lower Sepik-Ramu,,Lower Sepik,cCC51C8,yee,false,true,PG,Foley-1991
yin,Yindjibarndi,Australia,-21.75,117.916666667,yind1247,yij,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,yij,false,false,AU,Fabricius-1998 Kager-1992 Mushin-1995 Wordick-1982
yir,Yir Yoront,Australia,-14.8333333333,141.833333333,jirj1239,yyr,Pama-Nyungan,,Northern Pama-Nyungan,c336680,yyr,false,false,AU,Alpher-1973 Alpher-1991 Stolz-1996
yiw,Yi (Wuding-Luquan),Eurasia,25.5,102.5,wudi1238,ywq,Sino-Tibetan,Tibeto-Burman,Burmese-Lolo,c338077,ywq,false,false,,Gao-1958
yki,Yuki,North America,39.6666666667,-123.5,yuki1243,yuk,Wappo-Yukian,,Yukian,cBACC51,yuk,false,false,US,Sawyer-and-Schlichter-1984
ykm,Yakoma,Africa,4.41666666667,18.4166666667,yako1252,yky,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,yky,false,false,CF,Boyeldieu-1995
ykn,Yakan,Papunesia,6.5,122,yaka1277,yka,Austronesian,,Sama-Bajaw,cCCBD51,yka,false,false,PH,
yko,Yukaghir (Kolyma),Eurasia,65.75,150.833333333,sout2750,yux,Yukaghir,,Yukaghir,cCCA551,yux,false,true,RU,Maslova-1999 Maslova-2003a Nikolaeva-and-Xelimskij-1997
ykp,Yukpa,South America,10.1666666667,-72.75,yukp1241,yup,Cariban,,Cariban,cCC9251,yup,false,false,CO VR,Hanes-1952 de-Vegamian-1978
ykt,Yakut,Eurasia,62,130,yaku1245,sah,Altaic,,Turkic,c778033,sah,false,false,RU,Antonov-1997 Boehtlingk-1964 Bohtlingk-1964 Buder-1989 Haspelmath-1997 Korkina-1970 Krueger-1962 Malherbe-and-Rosenberg-1996 Nedjalkov-and-Nedjalkov-2007b Stachowski-and-Menz-1998 Ubrjatova-1966
ylb,Yulparija,Australia,-21,124,yulp1238,mpj,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,mpj,false,false,AU,Burridge-1996
yli,Yali,Papunesia,-4,139.333333333,angg1239,yli,Trans-New Guinea,,Dani,c378033,yli,false,false,ID,Fahner-1979
ylm,Yelmek,Papunesia,-7.66666666667,139.166666667,yelm1242,jel,Bulaka River,,Bulaka River,cCC9B51,jel,false,false,ID,Boelaars-1950
ylr,Yalarnnga,Australia,-22,140,yala1262,ylr,Pama-Nyungan,,Northern Pama-Nyungan,c336680,ylr,false,false,AU,
ylt,Yiddish (Lithuanian),Eurasia,55,25,east2295,ydd,Indo-European,,Germanic,c803433,ydd,false,false,LT,
ymd,Yamdena,Papunesia,-7.5,131.5,yamd1240,jmd,Austronesian,,Central Malayo-Polynesian,c807633,jmd,false,false,ID,Drabbe-1926b Lamere-and-Mettler-1994 Mettler-and-Mettler-1990
ymi,Yami,Papunesia,22,121.5,yami1254,tao,Austronesian,,Batanic,c805133,tao,false,false,TW,
yms,Yemsa,Africa,7.83333333333,37.3333333333,yems1235,jnj,Afro-Asiatic,Omotic,Ta-Ne-Omotic,cCC5751,jnj,false,false,ET,Lamberti-1993b
yna,Yupik (Naukan),Eurasia,66,-172,nauk1242,ynk,Eskimo-Aleut,,Eskimo,cCC7351,ynk,false,false,RU,Menovshchikov-1975
yng,Yingkarta,Australia,-25.1666666667,114.833333333,ying1247,yia,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,yia,false,false,AU,Dench-1998
ynk,Yankuntjatjara,Australia,-27,132,yank1247,kdd,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,kdd,false,false,AU,Douglas-1964 Fabricius-1998 Goddard-1983 Goddard-1985 Goddard-1994b
ynm,Yanomámi,South America,2.33333333333,-63,yano1262,wca,Yanomam,,Yanomam,c807233,wca,false,false,BR,Aikhenvald-and-Dixon-1999
yns,Yansi,Africa,-3.83333333333,18,yans1239,yns,Niger-Congo,Benue-Congo,Bantu,cC3CC51,yns,false,false,CD,Mayanga-1985
yny,Yanyuwa,Australia,-16.4166666667,137.166666667,yany1243,jao,Pama-Nyungan,,Western Pama-Nyungan,c5198CC,jao,false,false,AU,Fabricius-1998 Huttar-and-Kirton-1981 Kirton-1967 Kirton-1971a Kirton-1971b Kirton-1977 Kirton-and-Charlie-1978 Kirton-and-Charlie-1996
yok,Yokuts (Yaudanchi),North America,36.0833333333,-119.083333333,yoku1256,yok,Penutian,,Yokuts,c335380,yok,false,false,US,Kroeber-1904
yor,Yoruba,Africa,8,4.33333333333,yoru1245,yor,Niger-Congo,Benue-Congo,Defoid,c6451CC,yor,true,true,NG BJ,Akinlabi-2001 Ashiwaju-1968 Awobuluyi-1978 Bamgbose-1966 Dahl-1985 Jakovleva-1963 Malherbe-and-Rosenberg-1996 Nichols-1992 Ogunbowale-1970 Rowlands-1965 Rowlands-1969 Ward-1952 Welmers-1973
ypk,Yup'ik (Central),North America,59.5,-160,cent2127,esu,Eskimo-Aleut,,Eskimo,cCC7351,esu,false,true,US,Benua-1995 Corbett-and-Mithun-1996 Jacobson-1984a Jacobson-1985 Jacobson-1995 Leer-1985a Miyaoka-1985 Miyaoka-1996 Reed-et-al-1977 Woodbury-1987
yqy,Yaqay,Papunesia,-6.58333333333,139.25,yaqa1246,jaq,Trans-New Guinea,Anim,Marind-Yaqay,cCC5168,jaq,false,false,ID,Boelaars-1950
yrc,Yuracare,South America,-16.5833333333,-65.25,yura1255,yuz,,,,c806333,yuz,false,false,BO,Suarez-1973
yrm,Yurimangí,South America,3.83333333333,-77,yuru1243,,,,,cCC9F51,,false,false,CO,Adelaar-2004 Rivet-1942
yrr,Yaruro,South America,7,-68,pume1238,yae,,,,c806E33,yae,false,false,VR,Mosonyi-et-al-2000a
yrt,Yuruti,South America,1,-70.4166666667,yuru1263,yui,Tucanoan,,Tucanoan,c6FCC51,yui,false,false,CO,Huber-and-Reed-1992
ysi,Yupik (Sirenik),Eurasia,64.5,-174,sire1246,ysr,Eskimo-Aleut,,Eskimo,cCC7351,ysr,false,false,RU,Mudrak-1986 Vaxtin-1995 Vaxtin-2001
ysl,Yupik (St. Lawrence Island),Eurasia,63.5,-170.5,cent2128,ess,Eskimo-Aleut,,Eskimo,cCC7351,ess,false,false,US,Jacobson-1984b Jacobson-1985 Krauss-1975
yta,Yurt Tatar,Eurasia,46.3333333333,48.5,noga1249,nog,Altaic,,Turkic,c778033,nog,false,false,RU,Arslanov-1997c
ytu,Yukaghir (Tundra),Eurasia,69,155,nort2745,ykg,Yukaghir,,Yukaghir,cCCA551,ykg,false,false,RU,Krejnovich-1958 Krejnovich-1968c Maslova-2003b
yuc,Yuchi,North America,35.75,-86.75,yuch1247,yuc,,,,c806733,yuc,false,true,US,Ballard-1975 Crawford-1973 Linn-2001 Mithun-1999 Nichols-1992 Wagner-1931 Wagner-1933-1938 Wagner-1934
yug,Yugh,Eurasia,61,90,yugh1239,yug,Yeniseian,,Yeniseian,cCCAB51,yug,false,false,RU,Verner-1997
yuk,Yukulta,Australia,-17.3333333333,138.833333333,gang1267,gcd,Tangkic,,Tangkic,c51CCA4,gcd,false,false,AU,Evans-1995 Fabricius-1998 Keen-1983 Nichols-1992
yul,Yulu,Africa,8.5,25.25,nucl1427,yul,Central Sudanic,,Bongo-Bagirmi,c643380,yul,false,false,SS,Boyeldieu-1987 Santandrea-1970
yun,Yup'ik (Norton Sound),North America,64,-161,cent2127,esu,Eskimo-Aleut,,Eskimo,cCC7351,esu,false,false,US,Jacobson-1985
yur,Yurok,North America,41.3333333333,-124,yuro1248,yur,Algic,,Yurok,cB9CC51,yur,false,true,US,Garrett-2001 Robins-1958
yus,Yupik (Siberian),Eurasia,65,-173,cent2128,ess,Eskimo-Aleut,,Eskimo,cCC7351,ess,false,false,RU,Badten-et-al-1987 Jacobson-1990 Krauss-1975 Reuse-1994 Vaxtin-2001 de-Reuse-1988
yuw,Yuwaalaraay,Australia,-29.5,148,gami1243,kld,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,kld,false,false,AU,Mushin-1995 Williams-1980a
ywl,Yawelmani,North America,35.4166666667,-119,yoku1256,yok,Penutian,,Yokuts,c335380,yok,false,false,US,Newman-1944 Newman-1946 Nichols-1992
ywr,Yawuru,Australia,-18,122.5,yawu1244,ywr,Nyulnyulan,,Nyulnyulan,cCCBB51,ywr,false,false,AU,Hosokawa-1991
yyg,Yaygir,Australia,-29.6666666667,153,yayg1236,xya,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,xya,false,false,AU,Crowley-1979
yyo,Yorta Yorta,Australia,-36,146,yort1237,xyy,Pama-Nyungan,,Southeastern Pama-Nyungan,c518DCC,xyy,false,false,AU,Bowe-and-Morey-1999
yzv,Yazva,Eurasia,65,55,komi1268,kpv,Uralic,Finno-Ugric,Permic,c98CC51,kpv,false,false,RU,Austerlitz-1964 Itkonen-1955 Lytkin-1961
zag,Beria,Africa,16,23,zagh1240,zag,Saharan,Saharan,Eastern Saharan,c7A3380,zag,false,false,TD SD,Crass-and-Jakobi-2004
zai,Zapotec (Isthmus),North America,16.416667,-95,isth1244,zai,Oto-Manguean,,Zapotecan,c5162CC,zai,false,false,MX,Pickett-1960 Pickett-1971 Pickett-et-al-1998
zaj,Zapotec (Juárez),North America,17.5,-96.5833333333,sier1250,zaa,Oto-Manguean,,Zapotecan,c5162CC,zaa,false,false,MX,Nellis-and-Nellis-1983
zam,Zapotec (Mixtepec),North America,16.3333333333,-96.3333333333,mixt1426,zpm,Oto-Manguean,,Zapotecan,c5162CC,zpm,false,false,MX,Reeck-1991
zan,Zande,Africa,4,26,zand1248,zne,Niger-Congo,Adamawa-Ubangi,Ubangi,c6951CC,zne,false,false,CF CD SS,Claudi-1985 Corbett-1991 Gore-1926 Gore-1931 Santandrea-1965b Tucker-1959 Tucker-and-Bryan-1956 Tucker-and-Bryan-1966 Tucker-and-Hackett-1959
zap,Zapotec (Mitla),North America,16.8,-96.25,mitl1236,zaw,Oto-Manguean,,Zapotecan,c5162CC,zaw,false,false,MX,Briggs-1961 Stubblefield-and-Hollenbach-1991 Stubblefield-and-Stubblefield-1991
zaq,Zapotec (Quiegolani),North America,16.1666666667,-96.0833333333,sant1451,zpi,Oto-Manguean,,Zapotecan,c5162CC,zpi,false,false,MX,Black-2000
zar,Zarma,Africa,13.8333333333,2.16666666667,zarm1239,dje,Songhay,,Songhay,c803370,dje,false,false,NE,Ardant-du-Picq-1933 Malherbe-and-Rosenberg-1996 Tersis-1972 Westermann-1921b
zay,Zayse,Africa,5.91666666667,37.3333333333,zays1235,zay,Afro-Asiatic,Omotic,Ta-Ne-Omotic,cCC5751,zay,false,false,ET,Hayward-1990b
zaz,Zazaki,Eurasia,39,41,diml1238,diq,Indo-European,,Iranian,c803335,diq,false,false,TR,Paul-1998 Sandonato-1994 Selcan-1998 Todd-1985
zch,Zoque (Chimalapa),North America,16.75,-94.75,chim1300,zoh,Mixe-Zoque,,Mixe-Zoque,cA351CC,zoh,false,false,MX,Johnson-2000 Knudson-1980
zen,Zenaga,Africa,17.3333333333,-16,zena1248,zen,Afro-Asiatic,,Berber,cAACC51,zen,false,false,MR,Nicolas-1953
zfl,Zoque (Francisco León),North America,17.3333333333,-93.25,fran1266,zos,Mixe-Zoque,,Mixe-Zoque,cA351CC,zos,false,false,MX,Engel-and-Engel-1987
zhn,Zhuang (Northern),Eurasia,24,108,guib1245,zgb,Tai-Kadai,,Kam-Tai,c51CC8A,zgb,false,false,CN,Edmondson-2001 Yongxian-Luo-2008
zim,Zimakani,Papunesia,-7.43333333333,141.433333333,zima1244,zik,Trans-New Guinea,Anim,Boazi,c51CC93,zik,false,false,PG,Voorhoeve-1975
zno,Zulu (Northern),Africa,-28,31,zulu1248,zul,Niger-Congo,Benue-Congo,Bantu,cC3CC51,zul,false,false,ZA,Doke-1953
zpi,Zapotec (Ixtlan),North America,17.25,-96.5,sout3005,zpd,Oto-Manguean,,Zapotecan,c5162CC,zpd,false,false,MX,de-Angulo-and-Freeland-1935
zpr,Zaparo,South America,-2,-76.3333333333,zapa1253,zro,Zaparoan,,Zaparoan,cCC9951,zro,false,false,EC PE,Peeke-1962
zqc,Zoque (Copainalá),North America,17,-93.25,copa1236,zoc,Mixe-Zoque,,Mixe-Zoque,cA351CC,zoc,true,true,MX,Harrison-et-al-1981 Knudson-1975 Wonderly-1947 Wonderly-1951a Wonderly-1951b
zqo,Zoque (Ostuacan),North America,17.4166666667,-93.3,ostu1241,zoc,Mixe-Zoque,,Mixe-Zoque,cA351CC,zoc,false,false,MX,Engel-and-Longacre-1963
zqr,Zoque (Rayon),North America,17.0833333333,-93,rayo1235,zor,Mixe-Zoque,,Mixe-Zoque,cA351CC,zor,false,false,MX,Harrison-and-Harrison-1984
zqs,Popoluca (Sierra),North America,18.3333333333,-95.1666666667,high1276,poi,Mixe-Zoque,,Mixe-Zoque,cA351CC,poi,false,false,MX,Elson-1947 Elson-1967 Elson-and-Gutierrez-1999 Foster-and-Foster-1948
zso,Zulu (Southern),Africa,-31,30,zulu1248,zul,Niger-Congo,Benue-Congo,Bantu,cC3CC51,zul,false,false,ZA,Doke-1953
zsq,Zapotec (San Lucas Quiaviní),North America,16.9,-96.4666666667,sanj1284,zab,Oto-Manguean,,Zapotecan,c5162CC,zab,false,false,MX,Munro-and-Lopez-1999
zte,Zapotec (Texmelucan),North America,16.5,-97.1666666667,texm1235,zpz,Oto-Manguean,,Zapotecan,c5162CC,zpz,false,false,MX,
zul,Zulu,Africa,-30,30,zulu1248,zul,Niger-Congo,Benue-Congo,Bantu,cC3CC51,zul,true,true,ZA,Canonici-1989 Canonici-1995 Cope-1982 Dahl-1985 Doke-1926 Doke-1927 Doke-1931 Doke-1945 Doke-1954 Doke-1961 Doke-1967 Doke-et-al-1982 Gil-1996b Malherbe-and-Rosenberg-1996 ONeil-1913 Oxotina-1961 Poulos-and-Bosch-1997 Poulos-and-Msimang-1998 Sibusiso-Nyembezi-1972 Taljaard-and-Bosch-1988 Ziervogel-et-al-1967 Ziervogel-et-al-1981
zun,Zuni,North America,35.0833333333,-108.833333333,zuni1245,zun,,,,c805C33,zun,false,false,US,Bunzel-1933-1938 Bybee-et-al-1994 Cook-1975 Miner-1986 Newman-1958 Newman-1965 Newman-1996 Nichols-1992 Nichols-1997b Nichols-1997c Nichols-1999 Walker-1972
zya,Zapotec (Yatzachi),North America,17.2,-96.2,yatz1235,zav,Oto-Manguean,,Zapotecan,c5162CC,zav,false,false,MX,Butler-1980
zzo,Zapotec (Zoogocho),North America,17.25,-96.25,zoog1238,zpq,Oto-Manguean,,Zapotecan,c5162CC,zpq,false,false,MX,Long-C-and-Cruz-M-1999 Sonnenschein-2005`,
    ["Latitude", "Longitude", "GenusIcon", "Samples_100", "Samples_200", "Source"]
)