const axios = require("axios");

var functions = function () {

    const appId = "fee90ad1";
    const appKey = "60acab403a86d82b895c4ad37ba92e8a";

    function getHotelInCity(location) {
        //TODO(Pooja): Fetch cityid based on location from csv file
        const bangaloreCityId = "6771549831164675055";
        const fetchUrl = "http://developer.goibibo.com/api/voyager/get_hotels_by_cityid/?app_id=" + appId +
            "&app_key=" + appKey + "&city_id=" +  bangaloreCityId;

        console.log("Fetching hotels");

        axios
            .get(fetchUrl)
            .then(response => {
                console.log(`Respone : ${response.data.data} -`);
            })
            .catch(error => {
                console.log(error);
            });
        return ["Ibis", "Novotel"];
    };


    function getBuses(from, to, journeyDate) {
        return {
            "data": {
             "returnflights": [],
             "onwardflights": [
              {
               "origin": "Bangalore",
               "rating": "3.3",
               "DepartureTime": "22:45",
               "cancellationPolicy": "0:3:100:0;3:24:25:0;24:-1:15:0",
               "avlWindowSeats": 22,
               "BusServiceID": "2138",
               "totalReviews": "176",
               "seat": "SL",
               "duration": "6h 15m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92Qcz-8B4CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17936566",
                  "BPContactNumber": "080-29999999,26709912",
                  "BPName": "17936566-Kalasipalyam",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Opp City Market Bus stand",
                  "BPLocation": "KALASIPALAYAM(KPN)",
                  "BPAddress": "A.V.Road, Kalasipalayam,Bangalore.",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17936431",
                  "BPContactNumber": "080-25525699,25526055",
                  "BPName": "17936431-Madiwala",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Opp Mas Residency, Hosur Main Road",
                  "BPLocation": "MADIWALA(KPN)",
                  "BPAddress": "Madiwala,Koramangala,Bangalore.",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "1049694",
                  "BPContactNumber": "080-42150124,9148903539",
                  "BPName": "1049694-Bommasandra",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "Mangutha timper building",
                  "BPLocation": "BOMMACHANDRA(KPN)",
                  "BPAddress": "First cross,Vidya Nager,Opp SKF,Hosur main road",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Movie,Fire Extinguisher,Blankets,Charging Point,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1365",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1300.0",
                "adulttotalfare": "0",
                "servicetax": "65.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "102",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "",
                  "DPName": "53066-Chennai",
                  "DPId": "53066",
                  "BPLandmark": "Chennai",
                  "BPAddress": "Chennai",
                  "DPLocation": "Chennai"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Multi Axle A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1365",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 33,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:45:00Z",
               "idRequired": "false",
               "ServiceID": 1096462,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 2,
                 "seats": 2,
                 "onBoardExperience": 2,
                 "onTimeAD": 1.17
                },
                "reviewCount": 6,
                "posReviewCount": 0,
                "criReviewCount": 6,
                "imgReviewCount": 0,
                "totalRating": 1.33,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2245-KPN-MultiAxleACSleeper2+1"
               },
               "TravelsName": "K.P.N",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771096462",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2245-KPN-MultiAxleACSleeper2+1",
               "arrdate": "2018-05-02T05:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.1",
               "DepartureTime": "22:30",
               "cancellationPolicy": "0:4:100:0;4:12:25:0;12:24:20:0;24:48:15:0;48:-1:15:0",
               "avlWindowSeats": 20,
               "BusServiceID": "642969",
               "totalReviews": "358",
               "seat": "SL",
               "duration": "7h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9mgZzesA5CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "478760",
                  "BPContactNumber": "7483070725",
                  "BPName": "478760-Marathahalli",
                  "BPTime": "2018-05-01T19:00:00Z",
                  "BPLandmark": "KALAMANDHIR OPP  BMTC BUS STAND NEAR AIRTEL 4G SHOP",
                  "BPLocation": "MARATHALL(PICK UP VEHICLE) OPP KALAMANDIR NEAR AIRTEL 4G SHOP TOWARDS TIN FACTORY PH- 7483070725",
                  "BPAddress": "MARATHALLI OPP KALAMANDIR B M TC BUS STAND Airtel 4g Shop Towards Tin Factory",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "429612",
                  "BPContactNumber": "080 - 22971107, + 9741805834",
                  "BPName": "429612-Yeshwantpur",
                  "BPTime": "2018-05-01T21:15:00Z",
                  "BPLandmark": "",
                  "BPLocation": "YESHWANTPUR (PICK UP VEHICLE) PH 9343722001,9741805834,",
                  "BPAddress": "NO.46/1 , C M MOHAN BULDING , OPP:RAILWAY STATION , NEAR GOVARDHAN THEATER TUMKUR ROAD , YESHWANTHPUR , BENGALURU-22",
                  "BPCoordinates": "13.0279661,77.54091560000006"
                 },
                 {
                  "BPId": "429613",
                  "BPContactNumber": "080 - 22971174, +919343993245",
                  "BPName": "429613-Rajajinagar",
                  "BPTime": "2018-05-01T21:30:00Z",
                  "BPLandmark": "",
                  "BPLocation": "RAJAJINAGAR B (PICK UP VEHICLE) PH 080 - 22971174",
                  "BPAddress": "NO.68, 1ST MAIN ROAD, 2ND BLOCK, DR.RAJKUMAR ROAD, OPP SUBRAMANYA TRAFFIC POLICE STATION RAJAJI NAGAR B",
                  "BPCoordinates": "12.9900578,77.55249249999997"
                 },
                 {
                  "BPId": "17938809",
                  "BPContactNumber": "080 22971203",
                  "BPName": "17938809-Anand Rao Circle",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "",
                  "BPLocation": "ANAND RAO CIRCLE- 080 22971202 /03/04/05/06/07/",
                  "BPAddress": "VRL BUS STAND, SHESHADRI ROAD , ANAND RAO CIRCLE",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "429535",
                  "BPContactNumber": "080 - 41143427,41513422 , 9845019729",
                  "BPName": "429535-Kalasipalyam",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "",
                  "BPLocation": "KALASIPALYAM HP PETOL BUNK  PH 080 - 41143427 080 22971202 /03 /04 /05 /06",
                  "BPAddress": "NO.21/5, A V ROAD KALASIPALYAM BENGALURU- 02",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "429539",
                  "BPContactNumber": "080 - 41554321 / 080 - 41554323",
                  "BPName": "429539-Madiwala",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "NEAR  VENKATESHWARA  HOSPITAL",
                  "BPLocation": "MADIWALA{NEXT TO VENKATESHWAR HOSPITAL:NEAR AYAPPA TEMPLE} 7829206782 PH 080 - 41554321 / 41554322 /",
                  "BPAddress": "NO.3 HOSUR MAIN ROAD MARUTI NAGAR MADIWALA -76",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17856400",
                  "BPContactNumber": "7829206782",
                  "BPName": "17856400-Electronic City",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "AUDI SERVICE SHOW ROOM",
                  "BPLocation": "ELECTRONIC CITY- TOLL OPP TO AUDI SERVICE SHOW ROOM, 7829206782",
                  "BPAddress": "OPP TO AUDI SERVICE SHOW ROOM, NEAR TOLL",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Blankets,Reading Light,CCTV",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1418",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1350.0",
                "adulttotalfare": "0",
                "servicetax": "68.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "5483",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "+919962937454",
                  "DPName": "429604-Poonamallee",
                  "DPId": "429604",
                  "BPLandmark": "POONAMALLE  BY PASS",
                  "BPAddress": "POONAMALLE BY PASS",
                  "DPLocation": "POONAMALLE BY PASS - REQUEST DROP ONLY (M+919962937454"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "9962937454",
                  "DPName": "17934404-Central Railway Station",
                  "DPId": "17934404",
                  "BPLandmark": "THE ROYAL REGENCY",
                  "BPAddress": "NEAR THE ROYAL REGENCY",
                  "DPLocation": "CENTRAL OPP GOLDEN TOWER   (M)9962937454"
                 },
                 {
                  "DPTime": "2018-05-03T05:40:00Z",
                  "BPContactNumber": "04424799277",
                  "DPName": "505885-Koyambedu",
                  "DPId": "505885",
                  "BPLandmark": "Opp KFC Resturant",
                  "BPAddress": "Opp KFC Resturant Near CMBT Bus Stand",
                  "DPLocation": "KOYAMBEDU-NEAR CMBT BUS STAND OPP KFC RESTURANT(M)9962937454"
                 },
                 {
                  "DPTime": "2018-05-03T05:50:00Z",
                  "BPContactNumber": "+919962937454",
                  "DPName": "17934360-T Nagar",
                  "DPId": "17934360",
                  "BPLandmark": "",
                  "BPAddress": "19-A SOUTH USMAN ROAD, OPP RAJU HOSPITAL T-NAGAR(M))+918925039922",
                  "DPLocation": "T. NAGAR-OPP RAJU HOSPITAL-(M)9940014098"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1418",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "1470",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "1575",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:30:00Z",
               "idRequired": "false",
               "ServiceID": 464056,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "staffBehaviour": 4,
                 "busQuality": 4,
                 "onBoardExperience": 4,
                 "onTimeAD": 3.5,
                 "acQuality": 4,
                 "stopOverExperience": 3.5,
                 "seats": 4,
                 "seater": 4,
                 "punctuality": 4
                },
                "reviewCount": 4,
                "posReviewCount": 3,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 3.75,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2230-VRLTravels-ACSleeper2+1"
               },
               "TravelsName": "VRL  Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770464056",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-2230-VRLTravels-ACSleeper2+1",
               "arrdate": "2018-05-02T05:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.1",
               "DepartureTime": "17:00",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 21,
               "BusServiceID": "SCHH3EJ413663",
               "totalReviews": "325",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92cVzfMA5CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17944722",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "17944722-Madiwala",
                  "BPTime": "2018-05-01T17:00:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17945644",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17945644-Silk Board",
                  "BPTime": "2018-05-01T17:15:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17977271",
                  "BPContactNumber": "7550244433,7847845455",
                  "BPName": "17977271-Electronic City",
                  "BPTime": "2018-05-01T17:20:00Z",
                  "BPLandmark": "Near Audi Service ",
                  "BPLocation": "Electronic City Toll Plaza",
                  "BPAddress": "TOLL PLAZA,ON FLY OVER",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "23:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "603",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "575.0",
                "adulttotalfare": "0",
                "servicetax": "28.75"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T22:10:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17961325-Sriperumbudur",
                  "DPId": "17961325",
                  "BPLandmark": "TOLL PLAZA",
                  "BPAddress": "Sri Perumbudur",
                  "DPLocation": "Sri Perumbudur Toll"
                 },
                 {
                  "DPTime": "2018-05-01T22:40:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17961285-Poonamallee",
                  "DPId": "17961285",
                  "BPLandmark": "Near KFC Poonamallee",
                  "BPAddress": "Motel Highway,",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T23:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17971606-Koyambedu",
                  "DPId": "17971606",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi Axle Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "603",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 45,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T17:00:00Z",
               "idRequired": "false",
               "ServiceID": 1324856,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "staffBehaviour": 4,
                 "busQuality": 4,
                 "onBoardExperience": 4.5,
                 "onTimeAD": 4.5,
                 "acQuality": 5,
                 "stopOverExperience": 4.5,
                 "seats": 4.5,
                 "seater": 4,
                 "punctuality": 4
                },
                "reviewCount": 2,
                "posReviewCount": 2,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 4.5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1700-HebronTransports-VolvoACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771324856",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1700-HebronTransports-VolvoACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T23:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.9",
               "DepartureTime": "10:45",
               "cancellationPolicy": "0:8:100:0;8:24:50:0;24:48:25:0;48:-1:10:0",
               "avlWindowSeats": 16,
               "BusServiceID": "1352",
               "totalReviews": "83",
               "seat": "ST",
               "duration": "6h 15m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92sTye_84SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17933788",
                  "BPContactNumber": "9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "17933788-Kalasipalyam",
                  "BPTime": "2018-05-01T09:30:00Z",
                  "BPLandmark": "Kalasipalayam Or Http://Zip.Pr/In/Ntsh7786",
                  "BPLocation": "Kalasipalayam",
                  "BPAddress": "no  8 T S P Road  or http://zip.pr/IN/NTSH7786",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17944706",
                  "BPContactNumber": " 9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "17944706-Majestic",
                  "BPTime": "2018-05-01T10:15:00Z",
                  "BPLandmark": "Opp Krstc And Bmtc Next To Hotel Sanman Shop No 2 And 3",
                  "BPLocation": "Majestic National Opp Bmtc Bus Stand",
                  "BPAddress": "National Travels , Opp Krstc And Bmtc Next To Hotel Sanman Shop No 2 And 3 ",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17937164",
                  "BPContactNumber": "9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "17937164-Anand Rao Circle",
                  "BPTime": "2018-05-01T10:20:00Z",
                  "BPLandmark": "Next To Hotel Rajmahal",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "32, Hotel Suprabhata Building, 8th Main, Sheshadri Road, A R C",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17933861",
                  "BPContactNumber": "9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "17933861-Double Road",
                  "BPTime": "2018-05-01T10:45:00Z",
                  "BPLandmark": "Reliance Marcket",
                  "BPLocation": "Double Road   8892222548",
                  "BPAddress": "reliance marcket next to srs and kpn trvels",
                  "BPCoordinates": "12.961,77.634"
                 },
                 {
                  "BPId": "17933880",
                  "BPContactNumber": " 9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "17933880-Madiwala",
                  "BPTime": "2018-05-01T11:25:00Z",
                  "BPLandmark": "Madiwala Police Station Next To Bharat Petrol Bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": "Madiwala Police station next to bharat petrol bunk",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17954817",
                  "BPContactNumber": " 9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "17954817-Silk Board",
                  "BPTime": "2018-05-01T11:30:00Z",
                  "BPLandmark": "Silk Bord End Of The Fly Over  Towards  Hosur  Road",
                  "BPLocation": "SILKBOARD",
                  "BPAddress": "silk bord end of the fly over  towards  hosur  road  ",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "237179",
                  "BPContactNumber": " 9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "237179-Electronic City",
                  "BPTime": "2018-05-01T11:45:00Z",
                  "BPLandmark": "On Fly Over Toll Gate Audi Service",
                  "BPLocation": "Electronic City Audi Service Toll",
                  "BPAddress": "Audi service toll plaza (on fly over toll gate) ",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17950772",
                  "BPContactNumber": "9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "17950772-Bommasandra",
                  "BPTime": "2018-05-01T11:50:00Z",
                  "BPLandmark": "Near Bus Stand A2b Anand Bhavan Opposit Kallada Travels",
                  "BPLocation": "Bommasandra Kallada Travels",
                  "BPAddress": "Main Road Bommasandra kallada travels",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17949297",
                  "BPContactNumber": "9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "17949297-Attibele",
                  "BPTime": "2018-05-01T12:00:00Z",
                  "BPLandmark": "Near Attibele Toll Gate Hosur Road",
                  "BPLocation": "Attibele Tollgate  8892222548",
                  "BPAddress": "Near Attibele Toll Gate Hosur Road",
                  "BPCoordinates": "12.78,77.77"
                 },
                 {
                  "BPId": "17958960",
                  "BPContactNumber": "9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "17958960-Hosur",
                  "BPTime": "2018-05-01T12:15:00Z",
                  "BPLandmark": "Opp  Govt Bus Stand",
                  "BPLocation": "Hosur",
                  "BPAddress": "Opp  Govt Bus stand",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Hammer (to break glass),Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "17:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "509",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "500.0",
                "adulttotalfare": "0",
                "servicetax": "0.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "2323",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T13:15:00Z",
                  "BPContactNumber": "022 28313300",
                  "DPName": "17794404-Krishnagiri",
                  "DPId": "17794404",
                  "BPLandmark": "Near Bus Stop",
                  "BPAddress": "Near Bus Stop",
                  "DPLocation": "Krishnagiri"
                 },
                 {
                  "DPTime": "2018-05-01T15:30:00Z",
                  "BPContactNumber": "7358545026 9384655551",
                  "DPName": "17944671-Vellore Bypass",
                  "DPId": "17944671",
                  "BPLandmark": "Vellore Bye Pass",
                  "BPAddress": "Vellore Bye pass ",
                  "DPLocation": "Vellore Highway"
                 },
                 {
                  "DPTime": "2018-05-01T16:30:00Z",
                  "BPContactNumber": "07358545026  09444888354",
                  "DPName": "17947889-Kanchipuram",
                  "DPId": "17947889",
                  "BPLandmark": "Bus Depot Entrance",
                  "BPAddress": "Bus depot Entrance",
                  "DPLocation": "Kanchipuram"
                 },
                 {
                  "DPTime": "2018-05-01T17:00:00Z",
                  "BPContactNumber": "7358545026 9384655551",
                  "DPName": "17934589-Sriperumbudur",
                  "DPId": "17934589",
                  "BPLandmark": "Near Bus Stop",
                  "BPAddress": "Near Bus Stop",
                  "DPLocation": "Sri Perumbabhur Tollgate National"
                 },
                 {
                  "DPTime": "2018-05-01T17:20:00Z",
                  "BPContactNumber": "7358545026  9384655551",
                  "DPName": "369982-Poonamallee",
                  "DPId": "369982",
                  "BPLandmark": "Near Bus Stand",
                  "BPAddress": "Near Bus Stand",
                  "DPLocation": "Poonamalai"
                 },
                 {
                  "DPTime": "2018-05-01T17:30:00Z",
                  "BPContactNumber": "7358545026 9384655551",
                  "DPName": "17934491-Maduravoyal",
                  "DPId": "17934491",
                  "BPLandmark": "Poonamalai High Road",
                  "BPAddress": "m j r university college ",
                  "DPLocation": "Maduraival  National"
                 },
                 {
                  "DPTime": "2018-05-01T17:45:00Z",
                  "BPContactNumber": "7358545026-9384655551-8248349700-8754463222",
                  "DPName": "17934402-Koyambedu",
                  "DPId": "17934402",
                  "BPLandmark": "Near Chennai  Delux Hotel",
                  "BPAddress": "koyambedu  Market Opposit National Travels  ground floor, Koyembedu Market",
                  "DPLocation": "Koyambedu National"
                 },
                 {
                  "DPTime": "2018-05-01T17:55:00Z",
                  "BPContactNumber": "7358545026  9384655551 8248349700",
                  "DPName": "17947410-Vadapalani",
                  "DPId": "17947410",
                  "BPLandmark": "Near Bus Stand",
                  "BPAddress": "near Bus Stop",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-01T18:00:00Z",
                  "BPContactNumber": "7358545026 9384655551",
                  "DPName": "17947396-Ashok Pillar",
                  "DPId": "17947396",
                  "BPLandmark": "Near Bus Stop",
                  "BPAddress": "nera Bus Stop",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-01T18:05:00Z",
                  "BPContactNumber": "7358545026 9384655551",
                  "DPName": "17947400-Guindy",
                  "DPId": "17947400",
                  "BPLandmark": "Guindy",
                  "BPAddress": "Guindy",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-01T18:10:00Z",
                  "BPContactNumber": "7358545026 7358545027",
                  "DPName": "17953771-Meenambakkam Airport",
                  "DPId": "17953771",
                  "BPLandmark": "Domestic Airport Departure Entrance Gate",
                  "BPAddress": "Domestic Airport departure entrance gate",
                  "DPLocation": "Airport"
                 },
                 {
                  "DPTime": "2018-05-01T18:15:00Z",
                  "BPContactNumber": "7358545026 7358545027",
                  "DPName": "1547324-Pallavaram",
                  "DPId": "1547324",
                  "BPLandmark": "Bharath Petrol Bunk, Opp to Pallavaram Bus Stand",
                  "BPAddress": "Bharath Petrol Bunk, Opp to Pallavaram Bus Stand",
                  "DPLocation": "Pallavaram"
                 },
                 {
                  "DPTime": "2018-05-01T18:20:00Z",
                  "BPContactNumber": "7358545026 7358545027",
                  "DPName": "1547323-Chrompet",
                  "DPId": "1547323",
                  "BPLandmark": "Infront Of Adayar Anantha Bhavan , Opp to Saravana store.",
                  "BPAddress": "Infront Of Adayar Anantha Bhavan , Opp to Saravana store.",
                  "DPLocation": "Chrompet"
                 },
                 {
                  "DPTime": "2018-05-01T18:30:00Z",
                  "BPContactNumber": "7358545026 7358545027",
                  "DPName": "1629538-Tambaram",
                  "DPId": "1629538",
                  "BPLandmark": "Tamparam Bus Stop , Opp To Railway Station Entrance",
                  "BPAddress": "Tamparam bus stop , Opp to railway station entrance",
                  "DPLocation": "Tambaram"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi Axle Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "509",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 36,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T10:45:00Z",
               "idRequired": "false",
               "ServiceID": 1700413,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3,
                 "seats": 3,
                 "onBoardExperience": 3,
                 "onTimeAD": 3
                },
                "reviewCount": 2,
                "posReviewCount": 1,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 3,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1045-Nationaltravels-VolvoACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "National  travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771700413",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1045-Nationaltravels-VolvoACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T17:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.4",
               "DepartureTime": "23:15",
               "cancellationPolicy": "0:6:100:0;6:12:50:0;12:24:25:0;24:-1:10:0",
               "avlWindowSeats": 19,
               "BusServiceID": "27",
               "totalReviews": "688",
               "seat": "SL",
               "duration": "6h 5m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92cY0PH74iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17933702",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933702-Majestic",
                  "BPTime": "2018-05-01T21:15:00Z",
                  "BPLandmark": "Near  Amar  Hotel",
                  "BPLocation": "Majestic",
                  "BPAddress": " Near Amar  Hotel",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17933734",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933734-Anand Rao Circle",
                  "BPTime": "2018-05-01T21:25:00Z",
                  "BPLandmark": "Infront Of Congress Party Office",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "Infront of Congress Party Office Next To Hotel Tourist",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17943070",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17943070-Indiranagar",
                  "BPTime": "2018-05-01T21:50:00Z",
                  "BPLandmark": "Indranagar Police Station Old Madras Road",
                  "BPLocation": "Indranagar",
                  "BPAddress": "Indranagar Police Station Old Madras Road",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17944505",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17944505-Shanthinagar",
                  "BPTime": "2018-05-01T22:15:00Z",
                  "BPLandmark": "Bmtc Bus Stand / Near Srs Travels",
                  "BPLocation": "Shanthi Nagar (Pickup Van/Bus)",
                  "BPAddress": "Infront of  Bus Stand ",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "1549828",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "1549828-Marathahalli",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "Infront Of Kalamundhir Showroom",
                  "BPLocation": "Marathahalli",
                  "BPAddress": "Infront of Kalamundhir Showroom",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "17780245",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17780245-Bellandur",
                  "BPTime": "2018-05-01T22:40:00Z",
                  "BPLandmark": "Opp To Coffee Day, Near Tvs Indian Showroom",
                  "BPLocation": "Bellandur",
                  "BPAddress": "Opp to Coffee Day, Near TVS Indian Showroom",
                  "BPCoordinates": "12.92,77.67"
                 },
                 {
                  "BPId": "17780244",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17780244-HSR Layout",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Infont Of Kebab Magic, Masti Square, Outer Ring Road",
                  "BPLocation": "Hsr Layout",
                  "BPAddress": "Infont of Kebab Magic, Masti Square, Outer Ring Road",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17933816",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933816-Madiwala",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Next To Citi Bank Atm, Beside Savoury Hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "ASIAN XPRESS Office, Next to CITI Bank ATM",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17933856",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933856-Silk Board",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Infront Of Renault Car Showroom",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Infront Of Renault Car Showroom Next To Aswad Hospital",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17933890",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933890-Bommanahalli",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "Infront To Shell Petrol Bunk",
                  "BPLocation": "Bommanhalli",
                  "BPAddress": "Infront to Shell Petrol Bunk",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17943823",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17943823-Electronic City",
                  "BPTime": "2018-05-01T23:50:00Z",
                  "BPLandmark": "Infront Of Seasons Restaurant",
                  "BPLocation": "Electronics City",
                  "BPAddress": "Infront of Seasons Restaurant",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17933957",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933957-Bommasandra",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "Opp To Skf Factory Flyover.",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "Opp to SKF Factory Flyover",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Movie,Water Bottle,Blankets,Charging Point,Emergency exit,Emergency Contact Number,Central TV,Fire Extinguisher,Reclining seat,Reading Light,Hammer (to break glass),CCTV,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:20",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1417",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1400.0",
                "adulttotalfare": "0",
                "servicetax": "70.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "11182",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:15:00Z",
                  "BPContactNumber": "+919710748123",
                  "DPName": "17934025-Sriperumbudur",
                  "DPId": "17934025",
                  "BPLandmark": "Near Sri Perumbudur Toll Plaza",
                  "BPAddress": "Near Sri Perumbudur Toll Plaza",
                  "DPLocation": "Sri Perumbudur"
                 },
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "+919710748123",
                  "DPName": "17934041-Poonamallee",
                  "DPId": "17934041",
                  "BPLandmark": "Near Motel Highway",
                  "BPAddress": "Poonamalli Byepass, Infront of KFC",
                  "DPLocation": "Poonamalli"
                 },
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17934055-Koyambedu",
                  "DPId": "17934055",
                  "BPLandmark": "B 5 Srji  Majestic Complex, Basement Omi Bus Stand",
                  "BPAddress": "B-5 Srji  majestic complex, basement Omi Bus Stand",
                  "DPLocation": "Koyembedu"
                 },
                 {
                  "DPTime": "2018-05-03T04:55:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17948281-Vadapalani",
                  "DPId": "17948281",
                  "BPLandmark": "Vadapalani,Sims Hospital",
                  "BPAddress": "Vadapalani,SIMS hospital",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "1701652-Ashok Pillar",
                  "DPId": "1701652",
                  "BPLandmark": "Udayam Theatre.Bus Stop",
                  "BPAddress": "oppsite,udayam theatre.bus stop",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-03T05:05:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17934069-Guindy",
                  "DPId": "17934069",
                  "BPLandmark": "Guindy",
                  "BPAddress": "Guindy",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "7530059801 7530059802 9884618111",
                  "DPName": "17947810-Adyar",
                  "DPId": "17947810",
                  "BPLandmark": "Behind Adyar Bsnl Office",
                  "BPAddress": "C/O Lucky Travels No 6,First Avenue,Shastri Nager,Adayar",
                  "DPLocation": "Adyar"
                 },
                 {
                  "DPTime": "2018-05-03T05:20:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17933982-Tharamani",
                  "DPId": "17933982",
                  "BPLandmark": "Next To Mosque, Taramani",
                  "BPAddress": "11 A, 100 feet road, Tharamani",
                  "DPLocation": "Tharamani"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17934004-Velachery",
                  "DPId": "17934004",
                  "BPLandmark": "Opp. Baby Nagar Hot Chips Hotel, Near Indian Bank",
                  "BPAddress": "Baby nagar",
                  "DPLocation": "Velachery"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1417",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 28,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "1470",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 28,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:15:00Z",
               "idRequired": "false",
               "ServiceID": 1357604,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "onBoardExperience": 3.33,
                 "onTimeAD": 3.5,
                 "stopOverExperience": 3.5,
                 "seats": 3.5
                },
                "reviewCount": 6,
                "posReviewCount": 4,
                "criReviewCount": 2,
                "imgReviewCount": 1,
                "totalRating": 3.5,
                "approvedImageCount": 1,
                "id": "Bangalore-Chennai-2315-AsianXpress-ACSleeper2+1"
               },
               "TravelsName": "Asian Xpress",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771357604",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2315-AsianXpress-ACSleeper2+1",
               "arrdate": "2018-05-02T05:20:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.6",
               "DepartureTime": "22:00",
               "cancellationPolicy": "0:6:100:0;6:12:50:0;12:24:25:0;24:-1:10:0",
               "avlWindowSeats": 14,
               "BusServiceID": "19",
               "totalReviews": "1017",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92Yb0ez-3iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1549828",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "1549828-Marathahalli",
                  "BPTime": "2018-05-01T20:50:00Z",
                  "BPLandmark": "Infornt Of Kalamundhir Showroom",
                  "BPLocation": "Marathahalli",
                  "BPAddress": "Infront of Kalamundhir Showroom, Marathahalli ring road ",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "17780245",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17780245-Bellandur",
                  "BPTime": "2018-05-01T21:05:00Z",
                  "BPLandmark": "Opp To Coffee Day, Near Tvs Indian Showroom",
                  "BPLocation": "Bellandur",
                  "BPAddress": "Opp to Coffee Day, Near TVS Indian Showroom",
                  "BPCoordinates": "12.92,77.67"
                 },
                 {
                  "BPId": "17780244",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17780244-HSR Layout",
                  "BPTime": "2018-05-01T21:20:00Z",
                  "BPLandmark": "Infont Of Kebab Magic, Masti Square, Outer Ring Road",
                  "BPLocation": "Hsr Layout",
                  "BPAddress": "Infont of Kebab Magic, Masti Square, Outer Ring Road",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17933816",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933816-Madiwala",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": "Next To Citi Bank Atm, Beside Savoury Hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "ASIAN XPRESS Office, Next to CITI Bank ATM",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17933856",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933856-Silk Board",
                  "BPTime": "2018-05-01T22:15:00Z",
                  "BPLandmark": "Infront Of Renault Car Showroom",
                  "BPLocation": "Silk Board",
                  "BPAddress": " Infront Of Renault Car Showroom Next To Aswad Hospital",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17943823",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17943823-Electronic City",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "Electronic City Toll Gate",
                  "BPLocation": "Electronics City",
                  "BPAddress": "Electronic City Toll Gate",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17933957",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933957-Bommasandra",
                  "BPTime": "2018-05-01T22:40:00Z",
                  "BPLandmark": "Opp To Skf Factory Flyover.",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "Opp to SKF Factory Flyover",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Movie,Water Bottle,Blankets,Charging Point,Emergency exit,Emergency Contact Number,Central TV,Fire Extinguisher,Reclining seat,Reading Light,Hammer (to break glass),CCTV,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "04:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1155",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1100.0",
                "adulttotalfare": "0",
                "servicetax": "55.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "11182",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T02:45:00Z",
                  "BPContactNumber": "+919710748123",
                  "DPName": "17934025-Sriperumbudur",
                  "DPId": "17934025",
                  "BPLandmark": "Infront Of Sri Perumbudur Arch, Opp To Rajiv Gandhi Memorial",
                  "BPAddress": "Infront of Sri Perumbudur Arch, Opp to Rajiv Gandhi Memorial",
                  "DPLocation": "Sri Perumbudur"
                 },
                 {
                  "DPTime": "2018-05-03T03:05:00Z",
                  "BPContactNumber": "+919710748123",
                  "DPName": "17934041-Poonamallee",
                  "DPId": "17934041",
                  "BPLandmark": "Near Motel Highway",
                  "BPAddress": "Poonamalli Byepass, Infront of KFC",
                  "DPLocation": "Poonamalli"
                 },
                 {
                  "DPTime": "2018-05-03T03:15:00Z",
                  "BPContactNumber": "+919710748123",
                  "DPName": "1701658-Maduravoyal",
                  "DPId": "1701658",
                  "BPLandmark": "Infront Of J.C Garden",
                  "BPAddress": "Infront of J.C garden",
                  "DPLocation": "Maduravoyal"
                 },
                 {
                  "DPTime": "2018-05-03T03:20:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17934055-Koyambedu",
                  "DPId": "17934055",
                  "BPLandmark": "B 5 Srji  Majestic Complex, Basement Omi Bus Stand",
                  "BPAddress": "B-5 Srji  majestic complex, basement Omi Bus Stand",
                  "DPLocation": "Koyembedu"
                 },
                 {
                  "DPTime": "2018-05-03T03:25:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17948281-Vadapalani",
                  "DPId": "17948281",
                  "BPLandmark": "Vadapalani,Sims Hospital",
                  "BPAddress": "Vadapalani,SIMS hospital",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-03T03:30:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "1701652-Ashok Pillar",
                  "DPId": "1701652",
                  "BPLandmark": "Udayam Theatre.Bus Stop",
                  "BPAddress": "oppsite,udayam theatre.bus stop",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-03T03:45:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17934069-Guindy",
                  "DPId": "17934069",
                  "BPLandmark": "Guindy",
                  "BPAddress": "Guindy",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-03T03:50:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17850393-Madhya Kailash",
                  "DPId": "17850393",
                  "BPLandmark": "Mathiya Kailash, Infront Of Kasthuribai Nagar Metro Station",
                  "BPAddress": "Mathiya Kailash, Infront of Kasthuribai Nagar Metro Station",
                  "DPLocation": "Madhya Kailash"
                 },
                 {
                  "DPTime": "2018-05-03T03:55:00Z",
                  "BPContactNumber": "7530059801 7530059802 9884618111",
                  "DPName": "17947810-Adyar",
                  "DPId": "17947810",
                  "BPLandmark": "Behind Adyar Bsnl Office",
                  "BPAddress": "C/O Lucky Travels No 6,First Avenue,Shastri Nager,Adayar",
                  "DPLocation": "Adyar"
                 },
                 {
                  "DPTime": "2018-05-03T04:10:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17950968-Tidel Park",
                  "DPId": "17950968",
                  "BPLandmark": "Opp. Tidel Park, Thiruvanmiyur Railway Station",
                  "BPAddress": "Opp. Tidel Park, Thiruvanmiyur Railway Station",
                  "DPLocation": "Tidel Park / Thiruvanmiyur"
                 },
                 {
                  "DPTime": "2018-05-03T04:15:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17933982-Tharamani",
                  "DPId": "17933982",
                  "BPLandmark": "Next To Mosque, Taramani",
                  "BPAddress": "11 A, 100 feet road, Tharamani",
                  "DPLocation": "Tharamani"
                 },
                 {
                  "DPTime": "2018-05-03T04:20:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17934004-Velachery",
                  "DPId": "17934004",
                  "BPLandmark": "Opp. Baby Nagar Hot Chips Hotel, Near Indian Bank",
                  "BPAddress": "Baby nagar",
                  "DPLocation": "Velachery"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi-Axle Semisleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1155",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:00:00Z",
               "idRequired": "false",
               "ServiceID": 1288130,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "onBoardExperience": 4.08,
                 "onTimeAD": 3.92,
                 "stopOverExperience": 3.85,
                 "seats": 3.77
                },
                "reviewCount": 13,
                "posReviewCount": 8,
                "criReviewCount": 3,
                "imgReviewCount": 0,
                "totalRating": 3.62,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2200-AsianXpress-VolvoACMulti-AxleSemisleeper2+2"
               },
               "TravelsName": "Asian Xpress",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771288130",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2200-AsianXpress-VolvoACMulti-AxleSemisleeper2+2",
               "arrdate": "2018-05-02T04:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.5",
               "DepartureTime": "05:25",
               "cancellationPolicy": "0:3:90:0;3:4:60:0;4:12:30:0;12:-1:15:0",
               "avlWindowSeats": 24,
               "BusServiceID": "1653",
               "totalReviews": "607",
               "seat": "ST",
               "duration": "5h 50m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9msc0u3-5CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17963639",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17963639-Kalasipalyam",
                  "BPTime": "2018-05-01T04:55:00Z",
                  "BPLandmark": "State Bank Of India Bulding",
                  "BPLocation": "Kalasipalayam",
                  "BPAddress": "24 Anand Arcad Albert Victor Road",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17963598",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17963598-Majestic",
                  "BPTime": "2018-05-01T05:00:00Z",
                  "BPLandmark": "Opp KSRTC Bus Stand",
                  "BPLocation": "Majestic",
                  "BPAddress": "Infront of Mayura Hotel,No 32,Tank Bund Road,",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17963700",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17963700-Shanthinagar",
                  "BPTime": "2018-05-01T05:15:00Z",
                  "BPLandmark": "In-Front Of Reliance Market",
                  "BPLocation": "Shanthi Nagar",
                  "BPAddress": "Shanthi Nagar Bus Stand In-Front Of Reliance Market",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17960574",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17960574-Madiwala",
                  "BPTime": "2018-05-01T05:25:00Z",
                  "BPLandmark": "Opp to Bajaj Showroom",
                  "BPLocation": "Madiwala",
                  "BPAddress": "No 06 Hosur Main Road Near Ayyappaswamy Temple",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17960596",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17960596-Silk Board",
                  "BPTime": "2018-05-01T05:30:00Z",
                  "BPLandmark": "Near AS-WAD Hospital",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Silk Board Bridge Ted-End",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17961621",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17961621-Bommanahalli",
                  "BPTime": "2018-05-01T05:40:00Z",
                  "BPLandmark": "Next To Shell Petrol Bunk",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "24, Shop No :03,Next  To Shell  Petrol Bunk",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17962261",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17962261-Electronic City",
                  "BPTime": "2018-05-01T05:50:00Z",
                  "BPLandmark": "Near BMTC Bus Stand",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Infront Of Season Hotel  and Ruchi Sagar Hotel",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17963028",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17963028-Bommasandra",
                  "BPTime": "2018-05-01T05:55:00Z",
                  "BPLandmark": "Infront of Royal Enfield Showroom",
                  "BPLocation": "Bommasandra Parveen Travels",
                  "BPAddress": "235/A,2nd Cross KIABB Service Road",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Movie,Water Bottle,Blankets,Charging Point,Music/MP3,Emergency exit,Emergency Contact Number,Fire Extinguisher,Reading Light,Snacks,Hammer (to break glass),WIFI,CCTV,Pillow",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "11:15",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "742",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "707.0",
                "adulttotalfare": "0",
                "servicetax": "35.35"
               },
               "dst_vendor_id": "102",
               "OperatorID": "9032",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T10:00:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17964928-Sriperumbudur",
                  "DPId": "17964928",
                  "BPLandmark": "Sriperumbudur Toll Gate",
                  "BPAddress": "Sriperumbudur Toll Gate",
                  "DPLocation": "Sriperumbudur Toll Gate"
                 },
                 {
                  "DPTime": "2018-05-01T10:45:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17964336-Poonamallee",
                  "DPId": "17964336",
                  "BPLandmark": "Near Nazarthpettai Signal.",
                  "BPAddress": "Sri Motel Highway",
                  "DPLocation": "Poonamallee -Sri Motel Highway"
                 },
                 {
                  "DPTime": "2018-05-01T11:10:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17964963-Omni Bus Stand",
                  "DPId": "17964963",
                  "BPLandmark": "Lanson Toyota",
                  "BPAddress": "Poonamalle High Rd",
                  "DPLocation": "Koyambedu Metro Station"
                 },
                 {
                  "DPTime": "2018-05-01T11:15:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17963778-Koyambedu",
                  "DPId": "17963778",
                  "BPLandmark": "Near Koyembedu Fly-Over Bridge",
                  "BPAddress": "No.37, School Street, Next to Vijayakanth Kalyanamandapam,",
                  "DPLocation": "Koyembedu New Parveen Terminus"
                 },
                 {
                  "DPTime": "2018-05-01T11:45:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17964939-Anna University",
                  "DPId": "17964939",
                  "BPLandmark": "Anna University",
                  "BPAddress": "Anna University, Kotturpuram",
                  "DPLocation": "Anna University (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T11:50:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17966230-Madhya Kailash",
                  "DPId": "17966230",
                  "BPLandmark": "Opp To Madhya Kailash Temple",
                  "BPAddress": "Madhya Kailash Temple",
                  "DPLocation": "Madhya Kailash (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T11:55:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17964983-Adyar",
                  "DPId": "17964983",
                  "BPLandmark": "Opp:KTM Bike Showroom, Behind:  BSNL Telephone Exchange",
                  "BPAddress": "No-39/16 ,Shasthrinagar",
                  "DPLocation": "Adyar (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T12:05:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17964994-Tidel Park",
                  "DPId": "17964994",
                  "BPLandmark": "Tidel Park ",
                  "BPAddress": "Tidel Park Bus Stop",
                  "DPLocation": "Tidel Park Signal (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T12:10:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17965012-Perungudi",
                  "DPId": "17965012",
                  "BPLandmark": "Perungudi Toll Plaza",
                  "BPAddress": "Perungudi Toll Plaza",
                  "DPLocation": "Perungudi (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T12:20:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17965039-Thuraipakkam",
                  "DPId": "17965039",
                  "BPLandmark": "Near Hotel Sangeetha",
                  "BPAddress": "OPP Rattha Tek Towers ",
                  "DPLocation": "Thuraipakkam (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T12:25:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17965480-Karappakkam",
                  "DPId": "17965480",
                  "BPLandmark": "Hot Chips Restaurant",
                  "BPAddress": "Rajiv Gandhi Road,OMR, Near Arvind theater,Karappakkam,",
                  "DPLocation": "Karappakkam (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T12:30:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17966214-Sholinganallur",
                  "DPId": "17966214",
                  "BPLandmark": "Opp Aloft Hotel",
                  "BPAddress": "  Opp Aloft Hotel ,Near By SBI ATM",
                  "DPLocation": "Sholinganallur (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T12:35:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17966223-Sholinganallur",
                  "DPId": "17966223",
                  "BPLandmark": "Near By Sathyabama University",
                  "BPAddress": "Indian Oil Petrol Bunk",
                  "DPLocation": "Kumaran Nagar (Sholinganallur-Van Drop)"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "742",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 48,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T05:25:00Z",
               "idRequired": "false",
               "ServiceID": 799236,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4.31,
                 "seats": 4.38,
                 "onBoardExperience": 4.23,
                 "onTimeAD": 4.23
                },
                "reviewCount": 13,
                "posReviewCount": 11,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 4.31,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-0525-ParveenTravels-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Parveen Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770799236",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-0525-ParveenTravels-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T11:15:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.5",
               "DepartureTime": "16:45",
               "cancellationPolicy": "0:3:90:0;3:4:60:0;4:12:30:0;12:-1:15:0",
               "avlWindowSeats": 22,
               "BusServiceID": "1703",
               "totalReviews": "791",
               "seat": "ST",
               "duration": "5h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9msc0u3-5SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17968494",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17968494-Kalasipalyam",
                  "BPTime": "2018-05-01T15:15:00Z",
                  "BPLandmark": "State Bank Of India Bulding",
                  "BPLocation": "Kalasipalayam",
                  "BPAddress": "24 Anand Arcad Albert Victor Road",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17949032",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17949032-Majestic",
                  "BPTime": "2018-05-01T15:30:00Z",
                  "BPLandmark": "Opp KSRTC Bus Stand",
                  "BPLocation": "Majestic",
                  "BPAddress": "Infront of Mayura Hotel,No 32,Tank Bund Road,",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "1306114",
                  "BPContactNumber": "044-49007555",
                  "BPName": "1306114-Shanthinagar",
                  "BPTime": "2018-05-01T15:50:00Z",
                  "BPLandmark": "In-Front Of Reliance Market",
                  "BPLocation": "Shanthi Nagar",
                  "BPAddress": "Shanthi Nagar Bus Stand In-Front Of Reliance Market",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "1306108",
                  "BPContactNumber": "044-49007555",
                  "BPName": "1306108-Madiwala",
                  "BPTime": "2018-05-01T16:45:00Z",
                  "BPLandmark": "Opp to Bajaj Showroom",
                  "BPLocation": "Madiwala",
                  "BPAddress": "No 06 Hosur Main Road Near Ayyappaswamy Temple",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "1306109",
                  "BPContactNumber": "044-49007555",
                  "BPName": "1306109-Silk Board",
                  "BPTime": "2018-05-01T16:55:00Z",
                  "BPLandmark": "Near AS-WAD Hospital",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Silk Board Bridge Ted-End",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17968880",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17968880-Electronic City",
                  "BPTime": "2018-05-01T17:05:00Z",
                  "BPLandmark": "Near Tollgate",
                  "BPLocation": "Electronic City TollGate",
                  "BPAddress": "Infront of Audi Service Centre",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17948444",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17948444-Bommasandra",
                  "BPTime": "2018-05-01T17:10:00Z",
                  "BPLandmark": "Infront of Royal Enfield Showroom",
                  "BPLocation": "Bommasandra Parveen Travels",
                  "BPAddress": "235/A,2nd Cross KIABB Service Road",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Movie,Water Bottle,Blankets,Charging Point,Music/MP3,Emergency exit,Emergency Contact Number,Fire Extinguisher,Reading Light,Snacks,Hammer (to break glass),WIFI,CCTV,Pillow",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "22:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "892",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "850.0",
                "adulttotalfare": "0",
                "servicetax": "42.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "9032",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T21:30:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17969119-Sriperumbudur",
                  "DPId": "17969119",
                  "BPLandmark": "Sriperumbudur Toll Gate",
                  "BPAddress": "Sriperumbudur Toll Gate",
                  "DPLocation": "Sriperumbudur Toll Gate"
                 },
                 {
                  "DPTime": "2018-05-01T22:00:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17968687-Poonamallee",
                  "DPId": "17968687",
                  "BPLandmark": "Near Nazarthpettai Signal.",
                  "BPAddress": "Sri Motel Highway",
                  "DPLocation": "Poonamallee -Sri Motel Highway"
                 },
                 {
                  "DPTime": "2018-05-01T22:25:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17969746-Omni Bus Stand",
                  "DPId": "17969746",
                  "BPLandmark": "Lanson Toyota",
                  "BPAddress": "Poonamalle High Rd",
                  "DPLocation": "Koyambedu Metro Station"
                 },
                 {
                  "DPTime": "2018-05-01T22:30:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17969251-Koyambedu",
                  "DPId": "17969251",
                  "BPLandmark": "Near Koyembedu Fly-Over Bridge",
                  "BPAddress": "No.37, School Street, Next to Vijayakanth Kalyanamandapam,",
                  "DPLocation": "Koyembedu New Parveen Terminus"
                 },
                 {
                  "DPTime": "2018-05-01T22:50:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17969759-Anna University",
                  "DPId": "17969759",
                  "BPLandmark": "Anna University",
                  "BPAddress": "Anna University, Kotturpuram",
                  "DPLocation": "Anna University (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T22:55:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17970579-Madhya Kailash",
                  "DPId": "17970579",
                  "BPLandmark": "Opp To Madhya Kailash Temple",
                  "BPAddress": "Madhya Kailash Temple",
                  "DPLocation": "Madhya Kailash (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T23:00:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17952940-Adyar",
                  "DPId": "17952940",
                  "BPLandmark": "Opp:KTM Bike Showroom, Behind:  BSNL Telephone Exchange",
                  "BPAddress": "No-39/16 ,Shasthrinagar",
                  "DPLocation": "Adyar (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T23:05:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17969766-Tidel Park",
                  "DPId": "17969766",
                  "BPLandmark": "Tidel Park ",
                  "BPAddress": "Tidel Park Bus Stop",
                  "DPLocation": "Tidel Park Signal (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T23:10:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "1352528-Perungudi",
                  "DPId": "1352528",
                  "BPLandmark": "Perungudi Toll Plaza",
                  "BPAddress": "Perungudi Toll Plaza",
                  "DPLocation": "Perungudi (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T23:15:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17954018-Thuraipakkam",
                  "DPId": "17954018",
                  "BPLandmark": "Near Hotel Sangeetha",
                  "BPAddress": "OPP Rattha Tek Towers ",
                  "DPLocation": "Thuraipakkam (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T23:20:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17971079-Karappakkam",
                  "DPId": "17971079",
                  "BPLandmark": "Hot Chips Restaurant",
                  "BPAddress": "Rajiv Gandhi Road,OMR, Near Arvind theater,Karappakkam,",
                  "DPLocation": "Karappakkam (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T23:25:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17954455-Sholinganallur",
                  "DPId": "17954455",
                  "BPLandmark": "Opp Aloft Hotel",
                  "BPAddress": "  Opp Aloft Hotel ,Near By SBI ATM",
                  "DPLocation": "Sholinganallur (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-01T23:30:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17971515-Sholinganallur",
                  "DPId": "17971515",
                  "BPLandmark": "Near By Sathyabama University",
                  "BPAddress": "Indian Oil Petrol Bunk",
                  "DPLocation": "Kumaran Nagar (Sholinganallur-Van Drop)"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "892",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 46,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T16:45:00Z",
               "idRequired": "false",
               "ServiceID": 799237,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "staffBehaviour": 3.25,
                 "busQuality": 4.75,
                 "onBoardExperience": 3.33,
                 "onTimeAD": 3.75,
                 "acQuality": 3.75,
                 "stopOverExperience": 3.67,
                 "seats": 3.75,
                 "seater": 4.75,
                 "punctuality": 4.25
                },
                "reviewCount": 12,
                "posReviewCount": 6,
                "criReviewCount": 3,
                "imgReviewCount": 0,
                "totalRating": 3.42,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1645-ParveenTravels-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Parveen Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770799237",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1645-ParveenTravels-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T22:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.4",
               "DepartureTime": "23:30",
               "cancellationPolicy": "0:3:90:0;3:4:60:0;4:12:30:0;12:-1:15:0",
               "avlWindowSeats": 23,
               "BusServiceID": "1704",
               "totalReviews": "762",
               "seat": "ST",
               "duration": "5h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9msc0u3-3iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17972064",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17972064-Madiwala",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Opp to Bajaj Showroom",
                  "BPLocation": "Madiwala",
                  "BPAddress": "No 06 Hosur Main Road Near Ayyappaswamy Temple",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "1306116",
                  "BPContactNumber": "044-49007555",
                  "BPName": "1306116-Silk Board",
                  "BPTime": "2018-05-01T23:35:00Z",
                  "BPLandmark": "Near AS-WAD Hospital",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Silk Board Bridge Ted-End",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17972698",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17972698-Bommanahalli",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "Next To Shell Petrol Bunk",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "24, Shop No :03,Next  To Shell  Petrol Bunk",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17972692",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17972692-Electronic City",
                  "BPTime": "2018-05-01T23:50:00Z",
                  "BPLandmark": "Near BMTC Bus Stand",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Infront Of Season Hotel  and Ruchi Sagar Hotel",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17972696",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17972696-Bommasandra",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "Infront of Royal Enfield Showroom",
                  "BPLocation": "Bommasandra Parveen Travels",
                  "BPAddress": "235/A,2nd Cross KIABB Service Road",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Movie,Water Bottle,Blankets,Charging Point,Music/MP3,Emergency exit,Emergency Contact Number,Fire Extinguisher,Reading Light,Hammer (to break glass),WIFI,CCTV,Pillow",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:15",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1155",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1100.0",
                "adulttotalfare": "0",
                "servicetax": "55.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "9032",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:15:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17972746-Sriperumbudur",
                  "DPId": "17972746",
                  "BPLandmark": "Sriperumbudur Toll Gate",
                  "BPAddress": "Sriperumbudur Toll Gate",
                  "DPLocation": "Sriperumbudur Toll Gate"
                 },
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17972738-Poonamallee",
                  "DPId": "17972738",
                  "BPLandmark": "Near Nazarthpettai Signal.",
                  "BPAddress": "Sri Motel Highway",
                  "DPLocation": "Poonamallee -Sri Motel Highway"
                 },
                 {
                  "DPTime": "2018-05-03T04:50:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17972764-Anna University",
                  "DPId": "17972764",
                  "BPLandmark": "Anna University",
                  "BPAddress": "Anna University, Kotturpuram",
                  "DPLocation": "Anna University (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-03T04:55:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17973218-Madhya Kailash",
                  "DPId": "17973218",
                  "BPLandmark": "Opp To Madhya Kailash Temple",
                  "BPAddress": "Madhya Kailash Temple",
                  "DPLocation": "Madhya Kailash (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17973234-Adyar",
                  "DPId": "17973234",
                  "BPLandmark": "Opp:KTM Bike Showroom, Behind:  BSNL Telephone Exchange",
                  "BPAddress": "No-39/16 ,Shasthrinagar",
                  "DPLocation": "Adyar (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-03T05:05:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17973236-Tidel Park",
                  "DPId": "17973236",
                  "BPLandmark": "Tidel Park ",
                  "BPAddress": "Tidel Park Bus Stop",
                  "DPLocation": "Tidel Park Signal (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-03T05:10:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17973238-Perungudi",
                  "DPId": "17973238",
                  "BPLandmark": "Perungudi Toll Plaza",
                  "BPAddress": "Perungudi Toll Plaza",
                  "DPLocation": "Perungudi (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17972701-Koyambedu",
                  "DPId": "17972701",
                  "BPLandmark": "Near Koyembedu Fly-Over Bridge",
                  "BPAddress": "No.37, School Street, Next to Vijayakanth Kalyanamandapam,",
                  "DPLocation": "Koyembedu New Parveen Terminus"
                 },
                 {
                  "DPTime": "2018-05-03T05:20:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17973253-Thuraipakkam",
                  "DPId": "17973253",
                  "BPLandmark": "Near Hotel Sangeetha",
                  "BPAddress": "OPP Rattha Tek Towers ",
                  "DPLocation": "Thuraipakkam (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-03T05:25:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17973268-Karappakkam",
                  "DPId": "17973268",
                  "BPLandmark": "Hot Chips Restaurant",
                  "BPAddress": "Rajiv Gandhi Road,OMR, Near Arvind theater,Karappakkam,",
                  "DPLocation": "Karappakkam (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17973272-Sholinganallur",
                  "DPId": "17973272",
                  "BPLandmark": "Opp Aloft Hotel",
                  "BPAddress": "  Opp Aloft Hotel ,Near By SBI ATM",
                  "DPLocation": "Sholinganallur (Van Drop)"
                 },
                 {
                  "DPTime": "2018-05-03T05:35:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17973291-Sholinganallur",
                  "DPId": "17973291",
                  "BPLandmark": "Near By Sathyabama University",
                  "BPAddress": "Indian Oil Petrol Bunk",
                  "DPLocation": "Kumaran Nagar (Sholinganallur-Van Drop)"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1155",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 47,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:30:00Z",
               "idRequired": "false",
               "ServiceID": 799230,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "staffBehaviour": 4.5,
                 "busQuality": 4.5,
                 "onBoardExperience": 4,
                 "onTimeAD": 3.83,
                 "acQuality": 4.5,
                 "stopOverExperience": 4,
                 "seats": 4,
                 "seater": 4.5,
                 "punctuality": 4
                },
                "reviewCount": 6,
                "posReviewCount": 5,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 4,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2330-ParveenTravels-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Parveen Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770799230",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2330-ParveenTravels-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-02T05:15:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.3",
               "DepartureTime": "23:45",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 16,
               "BusServiceID": "SCHH4AGO37R",
               "totalReviews": "400",
               "seat": "ST",
               "duration": "5h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92cZzOsC5yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17932029",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "17932029-Madiwala",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17932030",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17932030-Silk Board",
                  "BPTime": "2018-05-01T23:50:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17932031",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17932031-Bommanahalli",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "Next to Shell Petrol bunk",
                  "BPLocation": "Bommana Halli",
                  "BPAddress": "Next to Shell Petrol bunk,Near KPN Travels",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17932032",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17932032-Electronic City",
                  "BPTime": "2018-05-01T23:59:00Z",
                  "BPLandmark": "Near Pallavi Restaurant",
                  "BPLocation": "ElectronicCity",
                  "BPAddress": "BMTC Bus depot,Near Pallavi Restaurant",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "603",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "575.0",
                "adulttotalfare": "0",
                "servicetax": "28.75"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:40:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17932034-Sriperumbudur",
                  "DPId": "17932034",
                  "BPLandmark": "TOLL PLAZA",
                  "BPAddress": "Sri Perumbudur",
                  "DPLocation": "Sri Perumbudur Toll"
                 },
                 {
                  "DPTime": "2018-05-03T04:55:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17964673-Poonamallee",
                  "DPId": "17964673",
                  "BPLandmark": "MTC BUS STOP",
                  "BPAddress": "MTC BUS STOP",
                  "DPLocation": "Poonamalle MTC Bus Stop"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17897642-Sri Ramachandra Medical College",
                  "DPId": "17897642",
                  "BPLandmark": "SRMC Main Gate",
                  "BPAddress": "MTC BUS STOP",
                  "DPLocation": "Sri Ramachandra Medical College"
                 },
                 {
                  "DPTime": "2018-05-03T05:03:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17964162-Porur",
                  "DPId": "17964162",
                  "BPLandmark": "Porur Main Signal",
                  "BPAddress": "Near Hyderabad Briyani",
                  "DPLocation": "Near Porur Signal (DROP)"
                 },
                 {
                  "DPTime": "2018-05-03T05:05:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17964643-DLF IT Park",
                  "DPId": "17964643",
                  "BPLandmark": "DLF IT Park",
                  "BPAddress": "1/124, Mount Poonamalle Road, Manapakkam",
                  "DPLocation": "DLF IT Park"
                 },
                 {
                  "DPTime": "2018-05-03T05:10:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17965937-Meenambakkam Airport",
                  "DPId": "17965937",
                  "BPLandmark": "Near Signal",
                  "BPAddress": "MTC BUS STOP",
                  "DPLocation": "MIOT International Hospital"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17964696-Guindy",
                  "DPId": "17964696",
                  "BPLandmark": "NEAR NHAI OFFICE",
                  "BPAddress": "Kaththipaara Bus Stop",
                  "DPLocation": "Guindy Kaththipaara"
                 },
                 {
                  "DPTime": "2018-05-03T05:20:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17965960-Ashok Pillar",
                  "DPId": "17965960",
                  "BPLandmark": "Opp. Udhayam Theatre",
                  "BPAddress": "Opp. SBI BANK ,",
                  "DPLocation": "Ashok Pillar Bus Stop"
                 },
                 {
                  "DPTime": "2018-05-03T05:25:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17965938-Vadapalani",
                  "DPId": "17965938",
                  "BPLandmark": "Vadapalani Murugan Temple",
                  "BPAddress": "Infront of  Vadapalani Murugan Temple",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17962805-Koyambedu",
                  "DPId": "17962805",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi Axle Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "603",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 33,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:45:00Z",
               "idRequired": "false",
               "ServiceID": 1363079,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771363079",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2345-HebronTransports-VolvoACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-02T05:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.4",
               "DepartureTime": "22:00",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 20,
               "BusServiceID": "SCHH4AGP736",
               "totalReviews": "437",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92cZzOsD3iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1723051",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "1723051-Madiwala",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "1723052",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "1723052-Silk Board",
                  "BPTime": "2018-05-01T22:05:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "1763873",
                  "BPContactNumber": "7550244433,7847845455",
                  "BPName": "1763873-Electronic City",
                  "BPTime": "2018-05-01T22:15:00Z",
                  "BPLandmark": "Near Audi Service ",
                  "BPLocation": "Electronic City Toll Plaza",
                  "BPAddress": "TOLL PLAZA,ON FLY OVER",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "04:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "603",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "575.0",
                "adulttotalfare": "0",
                "servicetax": "28.75"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T03:10:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17975040-Sriperumbudur",
                  "DPId": "17975040",
                  "BPLandmark": "TOLL PLAZA",
                  "BPAddress": "Sri Perumbudur",
                  "DPLocation": "Sri Perumbudur Toll"
                 },
                 {
                  "DPTime": "2018-05-03T03:40:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17975199-Poonamallee",
                  "DPId": "17975199",
                  "BPLandmark": "Near KFC Poonamallee",
                  "BPAddress": "Motel Highway,",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-03T04:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17974581-Koyambedu",
                  "DPId": "17974581",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "603",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 43,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:00:00Z",
               "idRequired": "false",
               "ServiceID": 1363080,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3.67,
                 "seats": 3.67,
                 "onBoardExperience": 3.67,
                 "onTimeAD": 3.83
                },
                "reviewCount": 6,
                "posReviewCount": 3,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 3.5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2200-HebronTransports-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771363080",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2200-HebronTransports-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-02T04:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.5",
               "DepartureTime": "23:00",
               "cancellationPolicy": "0:4:100:0;4:24:50:0;24:-1:15:0",
               "avlWindowSeats": 20,
               "BusServiceID": "SHH4BEU833",
               "totalReviews": "621",
               "seat": "SL",
               "duration": "6h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92cZ0O_75CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1731942",
                  "BPContactNumber": "7299477766",
                  "BPName": "1731942-Double Road",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": " Near : LALBAGH CIRCLE 2nd GATE",
                  "BPLocation": "Double Road ",
                  "BPAddress": "Bangalore , Karnataka",
                  "BPCoordinates": "12.961,77.634"
                 },
                 {
                  "BPId": "1724074",
                  "BPContactNumber": "080-25632727, 080-25632828, 9945080111",
                  "BPName": "1724074-Madiwala",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Near Balaji Medicals ",
                  "BPLocation": "Madiwala",
                  "BPAddress": "Sleigh Travels, #13/94, Soumya Complex, Hosur Main Road, Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "1724076",
                  "BPContactNumber": "7299477766",
                  "BPName": "1724076-Silk Board",
                  "BPTime": "2018-05-01T23:10:00Z",
                  "BPLandmark": "Silk Board",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Silk Board",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "1724077",
                  "BPContactNumber": "7299477766",
                  "BPName": "1724077-Electronic City",
                  "BPTime": "2018-05-01T23:25:00Z",
                  "BPLandmark": "After toll gate",
                  "BPLocation": "Electronic city",
                  "BPAddress": "Electronic City, Electronic City, Bangalore - 560068.\nLandMark : Near Toll Gate",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17968066",
                  "BPContactNumber": "9964883165 , 08042046133 , 7299477766",
                  "BPName": "17968066-Bommasandra",
                  "BPTime": "2018-05-01T23:35:00Z",
                  "BPLandmark": "Opp to : SKF Factory Fly Over",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "C/o. Pavan Tours & Travels, # 310,Sri Manjunatha Timber Building,Vidyanagara, Bommasandra , karnataka",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Movie,Personal TV,Water Bottle,Blankets,Charging Point,Music/MP3,Emergency exit,Emergency Contact Number,Fire Extinguisher,Reading Light,Hammer (to break glass),Soft drink,Pillow",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1312",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1250.0",
                "adulttotalfare": "0",
                "servicetax": "62.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "11046",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T05:10:00Z",
                  "BPContactNumber": "7299477766 , 7299477767",
                  "DPName": "1623925-Poonamallee",
                  "DPId": "1623925",
                  "BPLandmark": "Near by Sree Motel Highway",
                  "BPAddress": "Poonamalle KFC, Near Sree Motel Highway",
                  "DPLocation": "Poonamalle Bypass"
                 },
                 {
                  "DPTime": "2018-05-03T05:20:00Z",
                  "BPContactNumber": "7299477767",
                  "DPName": "1623922-Maduravoyal",
                  "DPId": "1623922",
                  "BPLandmark": "MGR University",
                  "BPAddress": "Near By HP Petrol Bunk, Opposite to MGR University",
                  "DPLocation": "Maduravoyal - MGR University"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "044 24799900, 7299477767 ",
                  "DPName": "17935772-Koyambedu",
                  "DPId": "17935772",
                  "BPLandmark": "Near Opp To Vijayakanth Dmdk Office & Near By Icici Bank ",
                  "BPAddress": "YBM Travels Office: No:29,100 ft Road, Opp to Vijayakanth DMDK Office, Koyambedu, Chennai, Near by ICICI Bank",
                  "DPLocation": "Koyambedu "
                 },
                 {
                  "DPTime": "2018-05-03T05:35:00Z",
                  "BPContactNumber": "7299477767",
                  "DPName": "17935187-Vadapalani",
                  "DPId": "17935187",
                  "BPLandmark": "Infron Of : Amman Temple , Next to Bone Joint Center",
                  "BPAddress": "opp to Lakshman Shrithi Musicals",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-03T05:40:00Z",
                  "BPContactNumber": "7299477766",
                  "DPName": "17934980-Ashok Pillar",
                  "DPId": "17934980",
                  "BPLandmark": "opp to : udhayam theatre",
                  "BPAddress": "Ashok Piller bus stand, opp to : udhayam theatre",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-03T05:45:00Z",
                  "BPContactNumber": "7299477766",
                  "DPName": "1724078-Guindy",
                  "DPId": "1724078",
                  "BPLandmark": "Olympia Tech",
                  "BPAddress": "Olympia Tech Main Entrance Bus Stop",
                  "DPLocation": "Guindy."
                 },
                 {
                  "DPTime": "2018-05-03T05:50:00Z",
                  "BPContactNumber": "7299477767",
                  "DPName": "1328024-Madhya Kailash",
                  "DPId": "1328024",
                  "BPLandmark": "Near Madhya Kailash Bus Stop, \t",
                  "BPAddress": "Tamil Nadu\n",
                  "DPLocation": "Madhya Kailash temple"
                 },
                 {
                  "DPTime": "2018-05-03T05:55:00Z",
                  "BPContactNumber": "7299477766",
                  "DPName": "1327782-Tidel Park",
                  "DPId": "1327782",
                  "BPLandmark": "Opposite to Tidel Park",
                  "BPAddress": "Opposite to Tidel Park\n",
                  "DPLocation": "TIDEL PARK"
                 },
                 {
                  "DPTime": "2018-05-03T06:00:00Z",
                  "BPContactNumber": "7299477766",
                  "DPName": "17959268-SRP Tools",
                  "DPId": "17959268",
                  "BPLandmark": "OPP TO : Holiday Inn Chennai OMR IT Expresswa",
                  "BPAddress": "SRP TOOLS",
                  "DPLocation": "SRP TOOLS"
                 },
                 {
                  "DPTime": "2018-05-03T06:05:00Z",
                  "BPContactNumber": "7299477766",
                  "DPName": "1724080-Perungudi",
                  "DPId": "1724080",
                  "BPLandmark": "Next to Perungudi Toll",
                  "BPAddress": "Near Dominos Pizza and Perungudi Bus Stop",
                  "DPLocation": "Perungudi"
                 },
                 {
                  "DPTime": "2018-05-03T06:10:00Z",
                  "BPContactNumber": "7299477766",
                  "DPName": "17956292-Thuraipakkam",
                  "DPId": "17956292",
                  "BPLandmark": "Hotel Sangeetha",
                  "BPAddress": "Near Hotel Sangeetha, Opposite to Ratha Tech Towers",
                  "DPLocation": "Thuraipakkam"
                 },
                 {
                  "DPTime": "2018-05-03T06:15:00Z",
                  "BPContactNumber": "7299477766",
                  "DPName": "17954827-Sholinganallur",
                  "DPId": "17954827",
                  "BPLandmark": "Near by SBI ATM",
                  "BPAddress": "Opposite to Aloft Hotel, Near by SBI ATM, ELCOT SEZ",
                  "DPLocation": "Shollinganallur"
                 },
                 {
                  "DPTime": "2018-05-03T06:20:00Z",
                  "BPContactNumber": "7299477766",
                  "DPName": "1726512-Sathyabama University",
                  "DPId": "1726512",
                  "BPLandmark": "sathyabama univercity entrance",
                  "BPAddress": "sathyabama univercity entrance",
                  "DPLocation": "sathyabama univercity OMR"
                 },
                 {
                  "DPTime": "2018-05-03T06:25:00Z",
                  "BPContactNumber": "7299477766",
                  "DPName": "1726510-Navalur",
                  "DPId": "1726510",
                  "BPLandmark": "Navalur Toll Gate",
                  "BPAddress": "Navalur Toll Gate",
                  "DPLocation": "Navalur Toll"
                 },
                 {
                  "DPTime": "2018-05-03T06:30:00Z",
                  "BPContactNumber": "7299477766",
                  "DPName": "1726509-SIPCOT Siruseri",
                  "DPId": "1726509",
                  "BPLandmark": "Sipcot entrance OMR",
                  "BPAddress": "Sipcot entrance OMR",
                  "DPLocation": "Siruseri "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1312",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 30,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:00:00Z",
               "idRequired": "false",
               "ServiceID": 1367406,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3.43,
                 "seats": 3.86,
                 "onBoardExperience": 4.14,
                 "onTimeAD": 4
                },
                "reviewCount": 7,
                "posReviewCount": 5,
                "criReviewCount": 1,
                "imgReviewCount": 1,
                "totalRating": 4,
                "approvedImageCount": 2,
                "id": "Bangalore-Chennai-2300-YBMTravels-ACSleeper2+1"
               },
               "TravelsName": "YBM   Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771367406",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2300-YBMTravels-ACSleeper2+1",
               "arrdate": "2018-05-02T05:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.3",
               "DepartureTime": "16:30",
               "cancellationPolicy": "0:6:100:0;6:24:30:0;24:-1:15:0",
               "avlWindowSeats": 24,
               "BusServiceID": "985",
               "totalReviews": "603",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92sUzPL83yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17932979",
                  "BPContactNumber": "7729994667  040 44454647 ",
                  "BPName": "17932979-Yeshwantpur",
                  "BPTime": "2018-05-01T15:00:00Z",
                  "BPLandmark": "Near Diputy Commissioner Of Police Station,Opp Blue Dart.",
                  "BPLocation": "Yeswanthapur  (Pickup Van/Bus)",
                  "BPAddress": "Near Diputy Commissioner Of Police Station,Opp Blue Dart.",
                  "BPCoordinates": "13.0279661,77.54091560000006"
                 },
                 {
                  "BPId": "17932991",
                  "BPContactNumber": "7729994667  040 44454647",
                  "BPName": "17932991-MATHIKERA BNG",
                  "BPTime": "2018-05-01T15:15:00Z",
                  "BPLandmark": "Ramayya Collage Bus Stop,Near Nr Travels Near Reliance Fresh",
                  "BPLocation": "Mathikere  (Pickup Van/Bus)",
                  "BPAddress": "Ramayya Collage Bus Stop,Near Nr Travels Near Reliance Fresh",
                  "BPCoordinates": "13.0571273,77.5023427"
                 },
                 {
                  "BPId": "17933005",
                  "BPContactNumber": "7729994667  040 44454647",
                  "BPName": "17933005-Ganga Nagar",
                  "BPTime": "2018-05-01T15:25:00Z",
                  "BPLandmark": "In Front Of  Cbi Bus Stand,Towards Mekhri Circle",
                  "BPLocation": "Ganganagar  (Pickup Van/Bus)",
                  "BPAddress": "In Front Of  Cbi Bus Stand,Towards Mekhri Circle",
                  "BPCoordinates": "13.02666,77.59"
                 },
                 {
                  "BPId": "17933016",
                  "BPContactNumber": "040 33559999",
                  "BPName": "17933016-KR.PURAM",
                  "BPTime": "2018-05-01T15:30:00Z",
                  "BPLandmark": "Near: Hp Petrol Bunk,Towards Tin Factory",
                  "BPLocation": "KR puram  (Pickup Van/Bus)",
                  "BPAddress": "Near:Hp Petrol Bunk,Towards Tin Factory",
                  "BPCoordinates": "13.004016,77.6877764999"
                 },
                 {
                  "BPId": "17933086",
                  "BPContactNumber": "040 33559999",
                  "BPName": "17933086-Tin Factory",
                  "BPTime": "2018-05-01T15:40:00Z",
                  "BPLandmark": "Hp Petrol Bunk",
                  "BPLocation": "Tin Factory  (Pickup Van/Bus)",
                  "BPAddress": "HP Petrol bunk",
                  "BPCoordinates": "12.9972686,77.66959010000005"
                 },
                 {
                  "BPId": "17933063",
                  "BPContactNumber": "040 33559999",
                  "BPName": "17933063-Anand Rao Circle",
                  "BPTime": "2018-05-01T15:45:00Z",
                  "BPLandmark": "Opp Old Jds Office New Congress Office Towards Race Cource Road",
                  "BPLocation": "Anand Rao Circle  (Pickup Van/Bus)",
                  "BPAddress": "Opp Old Jds Office New Congress Office Towards Race Cource Road",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17933108",
                  "BPContactNumber": "040 33559999",
                  "BPName": "17933108-Indiranagar",
                  "BPTime": "2018-05-01T15:50:00Z",
                  "BPLandmark": "Old Madras Road,Near Petrol Bunk Bda Complex",
                  "BPLocation": "Indra Nagar  (Pickup Van/Bus)",
                  "BPAddress": "Old madras road,near petrol bunk BDA complex",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17931673",
                  "BPContactNumber": "040 33559999",
                  "BPName": "17931673-Domlur",
                  "BPTime": "2018-05-01T16:00:00Z",
                  "BPLandmark": "Ending  Domlur Bridge Towards Koramangala Outer Ring Road",
                  "BPLocation": "DOMLUR  (Pickup Van/Bus)",
                  "BPAddress": "Domlur",
                  "BPCoordinates": "12.96,77.63"
                 },
                 {
                  "BPId": "17933169",
                  "BPContactNumber": "040 33559999",
                  "BPName": "17933169-Koramangala",
                  "BPTime": "2018-05-01T16:10:00Z",
                  "BPLandmark": "Near Shanthi Sagar Hotel",
                  "BPLocation": "KORAMANGALA  (Pickup Van/Bus)",
                  "BPAddress": "Near Shanthi Sagar Hotel",
                  "BPCoordinates": "12.9199,77.6256895"
                 },
                 {
                  "BPId": "17943945",
                  "BPContactNumber": "080 60002020",
                  "BPName": "17943945-Shanthinagar",
                  "BPTime": "2018-05-01T16:10:00Z",
                  "BPLandmark": "Near Reliance Fresh Near Bmtc Bustand",
                  "BPLocation": "Shantinagar bus stop  (Pickup Van/Bus)",
                  "BPAddress": "Shantinagar bus stop",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17931800",
                  "BPContactNumber": "040 33559999",
                  "BPName": "17931800-Marathahalli",
                  "BPTime": "2018-05-01T16:15:00Z",
                  "BPLandmark": "Near Kalamandir Show Room",
                  "BPLocation": "Marathahalli",
                  "BPAddress": "Marthalli",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "113287",
                  "BPContactNumber": "080-60002020",
                  "BPName": "113287-Bellandur",
                  "BPTime": "2018-05-01T16:25:00Z",
                  "BPLandmark": "Infront Of Coffe Day,Opp Bangalore Central Mall",
                  "BPLocation": "Bellandur",
                  "BPAddress": "Bellandur",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17931670",
                  "BPContactNumber": "080-60002020",
                  "BPName": "17931670-HSR Layout",
                  "BPTime": "2018-05-01T16:35:00Z",
                  "BPLandmark": "Under Agra Flyover Near Hanuman Temple",
                  "BPLocation": "Hsr Layout",
                  "BPAddress": "HSR Layout",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17931702",
                  "BPContactNumber": "080-60002020",
                  "BPName": "17931702-Madiwala",
                  "BPTime": "2018-05-01T17:00:00Z",
                  "BPLandmark": "Near Police Station Beside Petrol Bunk Opp: Total Mall",
                  "BPLocation": "Madiwala",
                  "BPAddress": "Main road of Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "304961",
                  "BPContactNumber": "080-60002020",
                  "BPName": "304961-Bommanahalli",
                  "BPTime": "2018-05-01T17:10:00Z",
                  "BPLandmark": "Starting Flyover Towards Electronic City",
                  "BPLocation": "Bomanahalli",
                  "BPAddress": "Bomanahalli",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17933212",
                  "BPContactNumber": "080-60002020",
                  "BPName": "17933212-Electronic City",
                  "BPTime": "2018-05-01T17:20:00Z",
                  "BPLandmark": "Electronic City Near Toll Plaza,In Front Of Audi Service Center Towards Hosure",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Electronic City",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17933232",
                  "BPContactNumber": "080 60002020",
                  "BPName": "17933232-Hosur",
                  "BPTime": "2018-05-01T18:00:00Z",
                  "BPLandmark": "Hosur Bus Stop",
                  "BPLocation": "Hosur",
                  "BPAddress": "Hosur",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "22:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "577",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "550.0",
                "adulttotalfare": "0",
                "servicetax": "27.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "3804",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T22:30:00Z",
                  "BPContactNumber": "040 44454647  9840722296 044-60002020",
                  "DPName": "17938013-Koyambedu",
                  "DPId": "17938013",
                  "BPLandmark": "Omni Bus Stand Near Royal Plaza Opp Flower Market ,Pilar No 53,54",
                  "BPAddress": "Omni Bus Stand Near Royal Plaza Opp Flower Market ,Pilar No 53,54",
                  "DPLocation": "KOYAMBEDU"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "577",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 50,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T16:30:00Z",
               "idRequired": "false",
               "ServiceID": 1713711,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3,
                 "seats": 3.75,
                 "onBoardExperience": 3.75,
                 "onTimeAD": 3.75
                },
                "reviewCount": 4,
                "posReviewCount": 2,
                "criReviewCount": 2,
                "imgReviewCount": 0,
                "totalRating": 3,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1630-OrangeToursTravels-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Orange Tours & Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771713711",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-1630-OrangeToursTravels-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T22:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.5",
               "DepartureTime": "23:30",
               "cancellationPolicy": "0:6:100:0;6:24:30:0;24:-1:15:0",
               "avlWindowSeats": 25,
               "BusServiceID": "988",
               "totalReviews": "570",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92sUzPL_3iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17932979",
                  "BPContactNumber": "7729994666 040 44454647",
                  "BPName": "17932979-Yeshwantpur",
                  "BPTime": "2018-05-01T22:10:00Z",
                  "BPLandmark": "Near Diputy Commissioner Of Police Station,Opp Blue Dart.",
                  "BPLocation": "Yeswanthapur  (Pickup Van/Bus)",
                  "BPAddress": "Near Diputy Commissioner Of Police Station,Opp Blue Dart.",
                  "BPCoordinates": "13.0279661,77.54091560000006"
                 },
                 {
                  "BPId": "17932991",
                  "BPContactNumber": "7729994666 04044454647",
                  "BPName": "17932991-MATHIKERA BNG",
                  "BPTime": "2018-05-01T22:20:00Z",
                  "BPLandmark": "Ramayya Collage Bus Stop,Near Nr Travels Near Reliance Fresh",
                  "BPLocation": "Mathikere  (Pickup Van/Bus)",
                  "BPAddress": "Ramayya Collage Bus Stop,Near Nr Travels Near Reliance Fresh",
                  "BPCoordinates": "13.0571273,77.5023427"
                 },
                 {
                  "BPId": "17933016",
                  "BPContactNumber": "7729994665 04044454647",
                  "BPName": "17933016-KR.PURAM",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "Near:  Hp Petrol Bunk,Towards Tin Factory",
                  "BPLocation": "KR puram  (Pickup Van/Bus)",
                  "BPAddress": "Near:  Hp Petrol Bunk,Towards Tin Factory",
                  "BPCoordinates": "13.004016,77.6877764999"
                 },
                 {
                  "BPId": "17933032",
                  "BPContactNumber": "7729994665 040 44454647",
                  "BPName": "17933032-ITIGATE DOORVANINAGAR",
                  "BPTime": "2018-05-01T22:35:00Z",
                  "BPLandmark": "Opp Iti Gate",
                  "BPLocation": "ITI GATE  (Pickup Van/Bus)",
                  "BPAddress": "Opp ITI GATE",
                  "BPCoordinates": "12.998,77.69"
                 },
                 {
                  "BPId": "17933005",
                  "BPContactNumber": "7729994666 040 44454647",
                  "BPName": "17933005-Ganga Nagar",
                  "BPTime": "2018-05-01T22:35:00Z",
                  "BPLandmark": "In Front Of  Cbi Bus Stand,Towards Mekhri Circle",
                  "BPLocation": "Ganganagar  (Pickup Van/Bus)",
                  "BPAddress": "In Front Of  Cbi Bus Stand,Towards Mekhri Circle",
                  "BPCoordinates": "13.02666,77.59"
                 },
                 {
                  "BPId": "17933086",
                  "BPContactNumber": "7729994665 04044454647",
                  "BPName": "17933086-Tin Factory",
                  "BPTime": "2018-05-01T22:40:00Z",
                  "BPLandmark": "Hp Petrol Bunk",
                  "BPLocation": "Tin Factory  (Pickup Van/Bus)",
                  "BPAddress": "HP Petrol bunk",
                  "BPCoordinates": "12.9972686,77.66959010000005"
                 },
                 {
                  "BPId": "17933108",
                  "BPContactNumber": "7729994665 040 44454647",
                  "BPName": "17933108-Indiranagar",
                  "BPTime": "2018-05-01T22:50:00Z",
                  "BPLandmark": "Old Madras Road,Near Petrol Bunk Bda Complex",
                  "BPLocation": "Indra Nagar  (Pickup Van/Bus)",
                  "BPAddress": "Old Madras Road,Near Petrol Bunk Bda Complex",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17931673",
                  "BPContactNumber": "7729994665 040 44454647",
                  "BPName": "17931673-Domlur",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Opp Dimond District",
                  "BPLocation": "DOMLUR  (Pickup Van/Bus)",
                  "BPAddress": "Opp Dimond District",
                  "BPCoordinates": "12.96,77.63"
                 },
                 {
                  "BPId": "17933063",
                  "BPContactNumber": "7729994666 08060002020",
                  "BPName": "17933063-Anand Rao Circle",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Opp Old Jds Office New Congress Office Towards Race Cource Road",
                  "BPLocation": "Anand Rao Circle  (Pickup Van/Bus)",
                  "BPAddress": "OPP OLD JDS OFFICE NEW CONGRESS OFFICE TOWARDS RACE COURCE ROAD",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "1564299",
                  "BPContactNumber": "7729994665 080-60002020",
                  "BPName": "1564299-HAL",
                  "BPTime": "2018-05-01T23:05:00Z",
                  "BPLandmark": "Near H.A.L Main Gate Towards Marathahalli",
                  "BPLocation": "Hal  (Pickup Van/Bus)",
                  "BPAddress": "HAL",
                  "BPCoordinates": "12.9705,77.65003"
                 },
                 {
                  "BPId": "17931800",
                  "BPContactNumber": "040 33559999",
                  "BPName": "17931800-Marathahalli",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Near Kalamandir Show Room",
                  "BPLocation": "Marathahalli (Pickup Van/Bus)",
                  "BPAddress": "Marthalli",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "17943945",
                  "BPContactNumber": "7729994666 08060002020",
                  "BPName": "17943945-Shanthinagar",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Near Reliance Fresh",
                  "BPLocation": "Shantinagar bus stop  (Pickup Van/Bus)",
                  "BPAddress": "Near Reliance Fresh",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "113287",
                  "BPContactNumber": "04044454647 08060002020",
                  "BPName": "113287-Bellandur",
                  "BPTime": "2018-05-01T23:25:00Z",
                  "BPLandmark": "Infront Of Coffe Day,Opp Bangalore Central Mall",
                  "BPLocation": "Bellandur  (Pickup Van/Bus)",
                  "BPAddress": "Infront Of Coffe Day,Opp Bangalore Central Mall",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "1564294",
                  "BPContactNumber": "7729994666 04044454647",
                  "BPName": "1564294-BTM Layout",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Near Udupi Garden Bus Stand",
                  "BPLocation": "Btm Layout  (Pickup Van/Bus)",
                  "BPAddress": "Near Udupi Garden Bus Stand",
                  "BPCoordinates": "12.91,77.61"
                 },
                 {
                  "BPId": "17931670",
                  "BPContactNumber": "04044454647 08060002020",
                  "BPName": "17931670-HSR Layout",
                  "BPTime": "2018-05-01T23:35:00Z",
                  "BPLandmark": "Under Agra Flyover Near Hanuman Temple",
                  "BPLocation": "Hsr Layout  (Pickup Van/Bus)",
                  "BPAddress": " Under Agra Flyover Near Hanuman Temple",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17931702",
                  "BPContactNumber": "04044454647 08060002020",
                  "BPName": "17931702-Madiwala",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "Orange Tours And Travels Next Venkateswara Hospital Madiwala Main Road",
                  "BPLocation": "Madiwala",
                  "BPAddress": "Orange tours and travels Next Venkateswara Hospital Madiwala Main Road",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17933212",
                  "BPContactNumber": "04044454647 08060002020",
                  "BPName": "17933212-Electronic City",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "Electronic City Near Toll Plaza,In Front Of Audi Service Center Towards Hosure",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Electronic City Near Toll Plaza,In Front Of Audi Service Center Towards Hosure",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17933217",
                  "BPContactNumber": "080  60002020",
                  "BPName": "17933217-Bommasandra",
                  "BPTime": "2018-05-01T23:59:00Z",
                  "BPLandmark": "Bommasandara BMTC bus stop towards hosur ",
                  "BPLocation": "Bommasandara ",
                  "BPAddress": "Bommasandara ",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "630",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "600.0",
                "adulttotalfare": "0",
                "servicetax": "30.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "3804",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "040 44454647  9840722296 044-60002020",
                  "DPName": "17938013-Koyambedu",
                  "DPId": "17938013",
                  "BPLandmark": "Omni Bus Stand Near Royal Plaza Opp Flower Market ,Pilar No 53,54",
                  "BPAddress": "Omni Bus Stand Near Royal Plaza Opp Flower Market ,Pilar No 53,54",
                  "DPLocation": "KOYAMBEDU"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "630",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 51,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:30:00Z",
               "idRequired": "false",
               "ServiceID": 1713740,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3.75,
                 "seats": 4.75,
                 "onBoardExperience": 5,
                 "onTimeAD": 4
                },
                "reviewCount": 4,
                "posReviewCount": 3,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 3.5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2330-OrangeToursTravels-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Orange Tours & Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771713740",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-2330-OrangeToursTravels-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-02T05:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.4",
               "DepartureTime": "22:30",
               "cancellationPolicy": "0:6:100:0;6:24:30:0;24:-1:15:0",
               "avlWindowSeats": 24,
               "BusServiceID": "638",
               "totalReviews": "18",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92QZ0vIA4CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17933016",
                  "BPContactNumber": "080-60002020",
                  "BPName": "17933016-KR.PURAM",
                  "BPTime": "2018-05-01T21:00:00Z",
                  "BPLandmark": "Near: Ganesh Temple",
                  "BPLocation": "KR puram Pickup Van/Bus",
                  "BPAddress": "Near: ganesh Temple",
                  "BPCoordinates": "13.004016,77.6877764999"
                 },
                 {
                  "BPId": "17933063",
                  "BPContactNumber": "080 60002020",
                  "BPName": "17933063-Anand Rao Circle",
                  "BPTime": "2018-05-01T21:00:00Z",
                  "BPLandmark": "Opp Old Jds Office New Congress Office Towards Race Cource Roadow Room",
                  "BPLocation": "Anand Rao Circle Pickup Van/Bus",
                  "BPAddress": " OPP OLD JDS OFFICE NEW CONGRESS OFFICE TOWARDS RACE COURCE ROAD",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17933032",
                  "BPContactNumber": "8970062222",
                  "BPName": "17933032-ITIGATE DOORVANINAGAR",
                  "BPTime": "2018-05-01T21:05:00Z",
                  "BPLandmark": "NEAR ITI GATE",
                  "BPLocation": "ITI GATE Pickup Van/Bus",
                  "BPAddress": "Near ITI GATE",
                  "BPCoordinates": "12.998,77.69"
                 },
                 {
                  "BPId": "17933086",
                  "BPContactNumber": "080-60002020",
                  "BPName": "17933086-Tin Factory",
                  "BPTime": "2018-05-01T21:15:00Z",
                  "BPLandmark": "Hp Petrol Bunk",
                  "BPLocation": "Tin Factory Pickup Van/Bus",
                  "BPAddress": "Hp Petrol Bunk ",
                  "BPCoordinates": "12.9972686,77.66959010000005"
                 },
                 {
                  "BPId": "17933108",
                  "BPContactNumber": "080-60002020",
                  "BPName": "17933108-Indiranagar",
                  "BPTime": "2018-05-01T21:25:00Z",
                  "BPLandmark": "Indian Oil Bunk",
                  "BPLocation": "Indra Nagar (Pickup Van/Bus)",
                  "BPAddress": "Indian Oil Bunk",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17931800",
                  "BPContactNumber": "040 33559999",
                  "BPName": "17931800-Marathahalli",
                  "BPTime": "2018-05-01T21:30:00Z",
                  "BPLandmark": "Near Kalamandir Show Room",
                  "BPLocation": "Marathahalli",
                  "BPAddress": "Marthalli",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "17943945",
                  "BPContactNumber": "080 60002020",
                  "BPName": "17943945-Shanthinagar",
                  "BPTime": "2018-05-01T21:30:00Z",
                  "BPLandmark": "Near Reliance Fresh",
                  "BPLocation": "Shantinagar bus stop Pickup Van/Bus",
                  "BPAddress": "Near Reliance Fresh",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17931673",
                  "BPContactNumber": "080-60002020",
                  "BPName": "17931673-Domlur",
                  "BPTime": "2018-05-01T21:35:00Z",
                  "BPLandmark": "Below Domlur Bridge",
                  "BPLocation": "DOMLUR (Pickup Van/Bus)",
                  "BPAddress": "Below Domlur Bridge",
                  "BPCoordinates": "12.96,77.63"
                 },
                 {
                  "BPId": "113287",
                  "BPContactNumber": "080-60002020",
                  "BPName": "113287-Bellandur",
                  "BPTime": "2018-05-01T21:40:00Z",
                  "BPLandmark": "Towards Hsr Infront Of Coffee Day",
                  "BPLocation": "Bellandur",
                  "BPAddress": "Towards HSR iNFRONT OF Coffee Day",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17933169",
                  "BPContactNumber": "080-60002020",
                  "BPName": "17933169-Koramangala",
                  "BPTime": "2018-05-01T21:45:00Z",
                  "BPLandmark": "Sony World Signal Near Kfc",
                  "BPLocation": "KORAMANGALA (Pickup Van/Bus)",
                  "BPAddress": "Sony World Signal Near KFC ",
                  "BPCoordinates": "12.9199,77.6256895"
                 },
                 {
                  "BPId": "17931670",
                  "BPContactNumber": "080-60002020",
                  "BPName": "17931670-HSR Layout",
                  "BPTime": "2018-05-01T21:50:00Z",
                  "BPLandmark": "Under Agra Flyover Near Hanuman Temple Opp",
                  "BPLocation": "Hsr Layout",
                  "BPAddress": "Under Agra Flyover Near Hanuman Temple Opp",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17931702",
                  "BPContactNumber": "080-41438866 8970018555",
                  "BPName": "17931702-Madiwala",
                  "BPTime": "2018-05-01T22:20:00Z",
                  "BPLandmark": "Next Venkateswara Hospital Madiwala Main Road",
                  "BPLocation": "Madiwala",
                  "BPAddress": "Next Venkateswara Hospital Madiwala Main Road",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17933212",
                  "BPContactNumber": "080-60002020",
                  "BPName": "17933212-Electronic City",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Tollgate, Near Audi Service Center Main Road",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Tollgate, Near Audi Service Center Main Road",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17933217",
                  "BPContactNumber": "080  60002020",
                  "BPName": "17933217-Bommasandra",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Bommasandara Bmtc Bus Stop Towards Hosur",
                  "BPLocation": "Bommasandara ",
                  "BPAddress": "Bommasandara BMTC bus stop towards hosur ",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17933199",
                  "BPContactNumber": "080 60002020",
                  "BPName": "17933199-Narayana Hridayalaya",
                  "BPTime": "2018-05-01T23:10:00Z",
                  "BPLandmark": "Near Bmtc Bus Stop Opp Narayana Hrudayalaya",
                  "BPLocation": "Narayana Hrudayalaya",
                  "BPAddress": "Near BMTC Bus stop opp Narayana Hrudayalaya",
                  "BPCoordinates": "12.809153,77.696584"
                 }
                ]
               },
               "amenities": "Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Hammer (to break glass),Facial Tissues,WIFI,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "04:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "550",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "550.0",
                "adulttotalfare": "0",
                "servicetax": "0.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "3804",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T03:45:00Z",
                  "BPContactNumber": "044 60002020",
                  "DPName": "1564280-Sriperumbudur",
                  "DPId": "1564280",
                  "BPLandmark": "Near Toll Plaza",
                  "BPAddress": "SRI PERUMBABHUR",
                  "DPLocation": "SRI PERUMBABHUR"
                 },
                 {
                  "DPTime": "2018-05-03T04:15:00Z",
                  "BPContactNumber": "044 60002020",
                  "DPName": "18034899-POONAMALI",
                  "DPId": "18034899",
                  "BPLandmark": "Near Honda Show Room",
                  "BPAddress": "POONAMALI",
                  "DPLocation": "POONAMALI"
                 },
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "040 44454647  9840722296 044-60002020",
                  "DPName": "17938013-Koyambedu",
                  "DPId": "17938013",
                  "BPLandmark": "Omni Bus Stand Near Royal Plaza Opp Flower Market ,Pilar No 53,54",
                  "BPAddress": "Omni Bus Stand Near Royal Plaza Opp Flower Market ,Pilar No 53,54",
                  "DPLocation": "KOYAMBEDU"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "040 33559999",
                  "DPName": "17933783-Central Railway Station",
                  "DPId": "17933783",
                  "BPLandmark": "Near Sangeetha Travels (Bell Hotel)",
                  "BPAddress": "Near sangeetha travels (bell hotel)",
                  "DPLocation": "CENTRAL"
                 },
                 {
                  "DPTime": "2018-05-03T05:05:00Z",
                  "BPContactNumber": "044-60002020",
                  "DPName": "17933801-Egmore",
                  "DPId": "17933801",
                  "BPLandmark": "Opp To Railway Station ,Near Fortel Hotel Corner,",
                  "BPAddress": "Opp to Railway Station ,Near Fortel Hotel Corner,",
                  "DPLocation": "EGMORE"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "550",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 50,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:30:00Z",
               "idRequired": "false",
               "ServiceID": 1069752,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 5,
                 "seats": 5,
                 "onBoardExperience": 5,
                 "onTimeAD": 5
                },
                "reviewCount": 1,
                "posReviewCount": 1,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2230-OrangeToursTravels-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Orange Tours & Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771069752",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-2230-OrangeToursTravels-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-02T04:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.8",
               "DepartureTime": "06:30",
               "cancellationPolicy": "0:6:100:0;6:24:30:0;24:-1:15:0",
               "avlWindowSeats": 24,
               "BusServiceID": "635",
               "totalReviews": "20",
               "seat": "ST",
               "duration": "5h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92QZ0vIB5CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17933016",
                  "BPContactNumber": "8970051333",
                  "BPName": "17933016-KR.PURAM",
                  "BPTime": "2018-05-01T05:10:00Z",
                  "BPLandmark": "Near: Ganesh Temple",
                  "BPLocation": "KR puram Pickup Van/Bus",
                  "BPAddress": "Near: ganesh Temple",
                  "BPCoordinates": "13.004016,77.6877764999"
                 },
                 {
                  "BPId": "17933032",
                  "BPContactNumber": "8970051333",
                  "BPName": "17933032-ITIGATE DOORVANINAGAR",
                  "BPTime": "2018-05-01T05:15:00Z",
                  "BPLandmark": "Near Iti Gate",
                  "BPLocation": "ITI GATE Pickup Van/Bus",
                  "BPAddress": "Near ITI GATE",
                  "BPCoordinates": "12.998,77.69"
                 },
                 {
                  "BPId": "17933086",
                  "BPContactNumber": "8970051333",
                  "BPName": "17933086-Tin Factory",
                  "BPTime": "2018-05-01T05:20:00Z",
                  "BPLandmark": "Near Hp Petrol Pump",
                  "BPLocation": "Tin Factory Pickup Van/Bus",
                  "BPAddress": "Near hp petrol pump",
                  "BPCoordinates": "12.9972686,77.66959010000005"
                 },
                 {
                  "BPId": "17933108",
                  "BPContactNumber": "8970051333",
                  "BPName": "17933108-Indiranagar",
                  "BPTime": "2018-05-01T05:30:00Z",
                  "BPLandmark": "Bda Complex,Opp.Punjab National Bank",
                  "BPLocation": "Indra Nagar Pickup Van/Bus",
                  "BPAddress": "Bda Complex,Opp.Punjab National Bank",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17931673",
                  "BPContactNumber": "8970051333",
                  "BPName": "17931673-Domlur",
                  "BPTime": "2018-05-01T05:40:00Z",
                  "BPLandmark": "Opp Daimond Showroom",
                  "BPLocation": "DOMLUR Pickup Van/Bus",
                  "BPAddress": "Opp daimond showroom ",
                  "BPCoordinates": "12.96,77.63"
                 },
                 {
                  "BPId": "17933063",
                  "BPContactNumber": "04044454647 08060002020",
                  "BPName": "17933063-Anand Rao Circle",
                  "BPTime": "2018-05-01T05:40:00Z",
                  "BPLandmark": "Opp Old Jds Office New Congress Office Towards Race Cource Road",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "OPP OLD JDS OFFICE NEW CONGRESS OFFICE TOWARDS RACE COURCE ROAD",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "1564299",
                  "BPContactNumber": " 8970051333",
                  "BPName": "1564299-HAL",
                  "BPTime": "2018-05-01T05:50:00Z",
                  "BPLandmark": "Near H.A.L Main Gate",
                  "BPLocation": "Hal Pickup Van/Bus",
                  "BPAddress": "Near H.A.L Main Gate",
                  "BPCoordinates": "12.9705,77.65003"
                 },
                 {
                  "BPId": "17931800",
                  "BPContactNumber": "040 33559999",
                  "BPName": "17931800-Marathahalli",
                  "BPTime": "2018-05-01T06:00:00Z",
                  "BPLandmark": "Near Kalamandir Show Room",
                  "BPLocation": "Marathahalli (Pickup Van/Bus)",
                  "BPAddress": "Marthalli",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "113287",
                  "BPContactNumber": "8970051333",
                  "BPName": "113287-Bellandur",
                  "BPTime": "2018-05-01T06:10:00Z",
                  "BPLandmark": "Towards Marathali Starting Point Of Flyover",
                  "BPLocation": "Bellandur Pickup Van/Bus",
                  "BPAddress": "Towards Marathali Starting Point Of Flyover",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17943945",
                  "BPContactNumber": "04044454647  08060002020",
                  "BPName": "17943945-Shanthinagar",
                  "BPTime": "2018-05-01T06:10:00Z",
                  "BPLandmark": "Near Reliance Fresh",
                  "BPLocation": "Shantinagar bus stop",
                  "BPAddress": "Near Reliance Fresh",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17931670",
                  "BPContactNumber": "04044454647 08060002020",
                  "BPName": "17931670-HSR Layout",
                  "BPTime": "2018-05-01T06:20:00Z",
                  "BPLandmark": "Under Agra Flyover Near Hanuman Temple",
                  "BPLocation": "Hsr Layout Pickup Van/Bus",
                  "BPAddress": "Under Agra Flyover Near Hanuman Temple",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17931702",
                  "BPContactNumber": "04044454647 8970018555",
                  "BPName": "17931702-Madiwala",
                  "BPTime": "2018-05-01T06:30:00Z",
                  "BPLandmark": "Near Venkateshwara Hospital",
                  "BPLocation": "Madiwala",
                  "BPAddress": "near venkateshwara hospital",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "304961",
                  "BPContactNumber": "04044454647 08060002020",
                  "BPName": "304961-Bommanahalli",
                  "BPTime": "2018-05-01T06:40:00Z",
                  "BPLandmark": "Flover Starting",
                  "BPLocation": "Bomanahalli",
                  "BPAddress": "flover starting",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17933212",
                  "BPContactNumber": "04044454647 08060002020",
                  "BPName": "17933212-Electronic City",
                  "BPTime": "2018-05-01T07:00:00Z",
                  "BPLandmark": "Near Tollpaza Audi Service Center",
                  "BPLocation": "Electronic City",
                  "BPAddress": "near tollpaza audi service center",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17933232",
                  "BPContactNumber": "04044454647 08060002020",
                  "BPName": "17933232-Hosur",
                  "BPTime": "2018-05-01T07:40:00Z",
                  "BPLandmark": "Hosur Bus Stop",
                  "BPLocation": "Hosur",
                  "BPAddress": "Hosur bus stop",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Hammer (to break glass),Facial Tissues,WIFI,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "12:15",
               "zeroCancellationTime": 0,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "420",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "400.0",
                "adulttotalfare": "0",
                "servicetax": "20.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "3804",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T12:15:00Z",
                  "BPContactNumber": "040 44454647  9840722296 044-60002020",
                  "DPName": "17938013-Koyambedu",
                  "DPId": "17938013",
                  "BPLandmark": "Omni Bus Stand Near Royal Plaza Opp Flower Market ,Pilar No 53,54",
                  "BPAddress": "Omni Bus Stand Near Royal Plaza Opp Flower Market ,Pilar No 53,54",
                  "DPLocation": "KOYAMBEDU"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "420",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 50,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T06:30:00Z",
               "idRequired": "false",
               "ServiceID": 1069766,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "Orange Tours And Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771069766",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-0630-OrangeToursAndTravels-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T12:15:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.0",
               "DepartureTime": "23:15",
               "cancellationPolicy": "0:4:100:0;4:12:50:0;12:24:20:0;24:168:15:0;168:-1:15:0",
               "avlWindowSeats": 24,
               "BusServiceID": "4205",
               "totalReviews": "283",
               "seat": "SL",
               "duration": "7h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92YV0Ov85CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17735027",
                  "BPContactNumber": "   080 41241276   9900610889",
                  "BPName": "17735027-Gandhinagar",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "Gandinagar Petrole Pump",
                  "BPLocation": "Majestic Gandhinagar (Pickup Van/Bus)",
                  "BPAddress": "shop  No 5   kurubara Sangha Building",
                  "BPCoordinates": "12.979173,77.577047"
                 },
                 {
                  "BPId": "72863",
                  "BPContactNumber": "9972500300",
                  "BPName": "72863-Kalasipalyam",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Opp Bangalore Medical College",
                  "BPLocation": "Kalasipalyam",
                  "BPAddress": "# 321 TSP Road Opp BMC Kalasipalyam, Call : 9972568052/080 26801616/17",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17937644",
                  "BPContactNumber": "9900087253",
                  "BPName": "17937644-Wilson Garden",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "# 24/3 H Siddaiah Road 5th Main Wilsongarden",
                  "BPLocation": "Wilsongarden",
                  "BPAddress": " # 24/3 H Siddaia road 5th main Wilsongarden ",
                  "BPCoordinates": "12.9481933,77.59718650000002"
                 },
                 {
                  "BPId": "403678",
                  "BPContactNumber": "25501686 9900087292",
                  "BPName": "403678-Madiwala",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "Opp Madiwala Bmtc Bus Stop Hosur Main Road",
                  "BPLocation": "Madiwala",
                  "BPAddress": "#324/1 1st floor Technic Ceramics Building After Madiwala Police Station",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17937811",
                  "BPContactNumber": "25501686 9900087292",
                  "BPName": "17937811-Silk Board",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "Opp Madiwala Bmtc Bus Stop Hosur Main Road",
                  "BPLocation": "Silk Board Towards Madiwala Police station & Darga",
                  "BPAddress": "#324/1 1st floor Technic Ceramics Building After Madiwala Police Station",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "395768",
                  "BPContactNumber": "9900034553",
                  "BPName": "395768-Bommanahalli",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "Near Hemadri Ceramics,Hosur Main Road",
                  "BPLocation": "BommanahalliS R S Travels",
                  "BPAddress": "Near Hemadri ceramics",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17937951",
                  "BPContactNumber": "9901844485 080 65624527",
                  "BPName": "17937951-Bommasandra",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "near D.MART towards hosur road bommasandra",
                  "BPLocation": "Bommsandra SRS Travels ",
                  "BPAddress": "SRS Travels bommsandra signal and circle ",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Fire Extinguisher,Blankets,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),Pillow,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "06:15",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1068",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1000.0",
                "adulttotalfare": "0",
                "servicetax": "50.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "22",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T06:00:00Z",
                  "BPContactNumber": "09840937910",
                  "DPName": "17936970-Koyambedu",
                  "DPId": "17936970",
                  "BPLandmark": "Opp Koyambedu Signal",
                  "BPAddress": "#105,100 Feet Road Koyambedu ",
                  "DPLocation": "Koyambedu"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi Axle Sleeper(2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1068",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 36,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:15:00Z",
               "idRequired": "false",
               "ServiceID": 1227016,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3.25,
                 "seats": 2.25,
                 "onBoardExperience": 2.75,
                 "onTimeAD": 3.25
                },
                "reviewCount": 4,
                "posReviewCount": 1,
                "criReviewCount": 2,
                "imgReviewCount": 0,
                "totalRating": 2.5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2315-SRSTravels-VolvoACMultiAxleSleeper2+1"
               },
               "TravelsName": "SRS Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771227016",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-2315-SRSTravels-VolvoACMultiAxleSleeper2+1",
               "arrdate": "2018-05-02T06:15:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.0",
               "DepartureTime": "08:00",
               "cancellationPolicy": "0:6:100:0;6:24:100:0;24:48:20:0;48:-1:10:0",
               "avlWindowSeats": 17,
               "BusServiceID": "2182",
               "totalReviews": "235",
               "seat": "ST",
               "duration": "7h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92kWze_94yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "154713",
                  "BPContactNumber": "08022288888",
                  "BPName": "154713-K. R. Puram",
                  "BPTime": "2018-05-01T06:00:00Z",
                  "BPLandmark": "General Hospital , Opp.Bmtc Bus Stop",
                  "BPLocation": "K R Puram Ganesh Temple 08022288888 (Pickup Van/Bus)",
                  "BPAddress": "K R Puram,Old Madras Road",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "1456762",
                  "BPContactNumber": "08022288888",
                  "BPName": "1456762-Tin Factory",
                  "BPTime": "2018-05-01T06:05:00Z",
                  "BPLandmark": "Tin Factory",
                  "BPLocation": "Tin Factory 08022288888 (Pickup Van/Bus)",
                  "BPAddress": "Tin Factory",
                  "BPCoordinates": "12.9972686,77.66959010000005"
                 },
                 {
                  "BPId": "228595",
                  "BPContactNumber": "08022288888",
                  "BPName": "228595-Kammanahalli (Pick-up)",
                  "BPTime": "2018-05-01T06:15:00Z",
                  "BPLandmark": "Jala Vayu Vihar Appartments",
                  "BPLocation": "Kammanahalli 08022288888 (Pickup Van/Bus)",
                  "BPAddress": "Geo Tours & Travels",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17781201",
                  "BPContactNumber": "08022288888",
                  "BPName": "17781201-Manyata Tech Park",
                  "BPTime": "2018-05-01T06:20:00Z",
                  "BPLandmark": "Outer Ring Road, Ghar Ka Khana Building",
                  "BPLocation": "Manyatha Tech Park 08022288888 (Pickup Van/Bus)",
                  "BPAddress": "Chanakya Layout",
                  "BPCoordinates": "13.044,77.622"
                 },
                 {
                  "BPId": "1456765",
                  "BPContactNumber": "9880436363 08025500186  08022288888",
                  "BPName": "1456765-Hebbal",
                  "BPTime": "2018-05-01T06:30:00Z",
                  "BPLandmark": "Near Hebbal Crime Police Station",
                  "BPLocation": "Hebbal 08022288888 (Pickup Van/Bus)",
                  "BPAddress": "Hebbal",
                  "BPCoordinates": "13.035,77.597"
                 },
                 {
                  "BPId": "17960456",
                  "BPContactNumber": "08022288888",
                  "BPName": "17960456-Ganga Nagar",
                  "BPTime": "2018-05-01T06:35:00Z",
                  "BPLandmark": "Baptist Hospital",
                  "BPLocation": "Ganganagara 08022288888 (Pickup Van/Bus)",
                  "BPAddress": "Ganganagara",
                  "BPCoordinates": "13.02666,77.59"
                 },
                 {
                  "BPId": "17961989",
                  "BPContactNumber": "08022288888",
                  "BPName": "17961989-MATHIKERA BNG",
                  "BPTime": "2018-05-01T06:45:00Z",
                  "BPLandmark": "Near Muneshwara Temple",
                  "BPLocation": "Mattikere 08022288888 (Pickup Van/Bus)",
                  "BPAddress": "Near Muneshwara Temple",
                  "BPCoordinates": "13.0571273,77.5023427"
                 },
                 {
                  "BPId": "17936662",
                  "BPContactNumber": "08022288888 ",
                  "BPName": "17936662-Indiranagar",
                  "BPTime": "2018-05-01T07:15:00Z",
                  "BPLandmark": "Indian Oil Petrol Bunk",
                  "BPLocation": "Indiranagara 08022288888 (Pickup Van/Bus)",
                  "BPAddress": "Near BDA Complex , Indian Oil Petrol Bunk Indiranagar",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17973152",
                  "BPContactNumber": "08022288888",
                  "BPName": "17973152-Majestic",
                  "BPTime": "2018-05-01T07:45:00Z",
                  "BPLandmark": "Opp Amar Hotel",
                  "BPLocation": "MajesticTank Bund Road 08022288888 (Pickup Van/Bus)",
                  "BPAddress": "Majestic (Opp amar hotel Near Ganesh Temple)) , Majestic (Opp amar hotel Near Ganesh Temple)) ",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17936846",
                  "BPContactNumber": "08022288888",
                  "BPName": "17936846-Marathahalli",
                  "BPTime": "2018-05-01T07:45:00Z",
                  "BPLandmark": "Opp Kalamandir Vodafone Store (Service Road)",
                  "BPLocation": "Marathalli 08022288888 (Pickup Van/Bus)",
                  "BPAddress": "Marathalli Outer Ring Road, Opp Kalamandir Vodafone Store (Service Road)",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "17936815",
                  "BPContactNumber": "08022288888 ",
                  "BPName": "17936815-Anand Rao Circle",
                  "BPTime": "2018-05-01T08:00:00Z",
                  "BPLandmark": "Near Ganesha Temple",
                  "BPLocation": "Anandarao Circle 08022288888",
                  "BPAddress": "SC Road Opp Brigade Plaza , Anandarao Circle",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17946203",
                  "BPContactNumber": "9880436363 08025500186  08022288888",
                  "BPName": "17946203-Shanthinagar",
                  "BPTime": "2018-05-01T08:30:00Z",
                  "BPLandmark": "Next To Court Hall Siddaiah Road",
                  "BPLocation": "Shanthinagar (Siddaiah Road)",
                  "BPAddress": "SeaBird Tourists C/o Abhishek Travels, #46/3 KH Road Siddaiah Road Next to Court Hall",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17947585",
                  "BPContactNumber": "9880436363 08025500186  08022288888",
                  "BPName": "17947585-Dairy circle",
                  "BPTime": "2018-05-01T08:40:00Z",
                  "BPLandmark": "Tata Motors , Near Crist College",
                  "BPLocation": "Dairy Circle 9880436363 08025500186",
                  "BPAddress": "Dairy circle ",
                  "BPCoordinates": "12.937133,77.601719"
                 },
                 {
                  "BPId": "17937170",
                  "BPContactNumber": "9880436363 08025500186 ",
                  "BPName": "17937170-Madiwala",
                  "BPTime": "2018-05-01T08:50:00Z",
                  "BPLandmark": "Madiwala Police Station , Next To Bharath Petrol Bunk , Near Darga",
                  "BPLocation": "Madiwala 9880436363 08025500186",
                  "BPAddress": "SeaBird Tourist Center shop no 76/1 opp canara bank hosur main road madiwala - 560068 , SeaBird Tourist Center shop no 76/1 opp canara bank hosur main road madiwala - 560068 ",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17937209",
                  "BPContactNumber": "9880436363 08025500186 08022288888 ",
                  "BPName": "17937209-Silk Board",
                  "BPTime": "2018-05-01T09:00:00Z",
                  "BPLandmark": "Silk Board  Fly Over End Towards Hosur Main Road",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Silk Board",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17937341",
                  "BPContactNumber": "9880436363 08025500186  08022288888",
                  "BPName": "17937341-Electronic City",
                  "BPTime": "2018-05-01T09:15:00Z",
                  "BPLandmark": "Next To Audi Showroom, Opp Toll Booth",
                  "BPLocation": "Electronic City 9880436363 08025500186  08022288888",
                  "BPAddress": "Electronic City, Flyover Towards Hosur Road",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17973574",
                  "BPContactNumber": "9880436363 08025500186 08022288888 ",
                  "BPName": "17973574-Bommasandra",
                  "BPTime": "2018-05-01T09:25:00Z",
                  "BPLandmark": "Bommasandra  Kfc",
                  "BPLocation": "BommasandraKfc9880436363 08025500186 08022288888",
                  "BPAddress": "Bommasandra",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17960748",
                  "BPContactNumber": "08022288888",
                  "BPName": "17960748-Attibele",
                  "BPTime": "2018-05-01T09:30:00Z",
                  "BPLandmark": "Attibele Toll",
                  "BPLocation": "Attibele 08022288888",
                  "BPAddress": "Attibele",
                  "BPCoordinates": "12.78,77.77"
                 },
                 {
                  "BPId": "17967118",
                  "BPContactNumber": "9880436363  08025500186 ",
                  "BPName": "17967118-Hosur",
                  "BPTime": "2018-05-01T09:45:00Z",
                  "BPLandmark": "Yashodha Tower Opp To Bus Stand",
                  "BPLocation": "Hosur 9880436363 08025500186  08022288888",
                  "BPAddress": "Hosur ",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Central TV,Movie,Fire Extinguisher,Blankets,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),CCTV,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "15:00",
               "zeroCancellationTime": 0,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "630",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "600.0",
                "adulttotalfare": "0",
                "servicetax": "30.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "6",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T13:50:00Z",
                  "BPContactNumber": "9500012331  9003208109  044-24796955 ",
                  "DPName": "394177-Kanchipuram",
                  "DPId": "394177",
                  "BPLandmark": "Kanchipuram Bypass",
                  "BPAddress": "meenakshi medical collage hospital and research national highway 4 tamilnadu, meenakshi medical hospital opp ",
                  "DPLocation": "Kanchipuram Bypass 9500012331 9003208109 044 24796955"
                 },
                 {
                  "DPTime": "2018-05-01T14:10:00Z",
                  "BPContactNumber": "9600066555 044-24796955 9500012331",
                  "DPName": "307820-Sriperumbudur",
                  "DPId": "307820",
                  "BPLandmark": "Sriperambadur  Toll Gate",
                  "BPAddress": "SRIPERAMBADUR  TOLL GATE,  BANGALORE HIGHWAY, BANGALORE HIGHWAY",
                  "DPLocation": "Sri Perumbutur 9600066555 044 24796955 9500012331"
                 },
                 {
                  "DPTime": "2018-05-01T14:20:00Z",
                  "BPContactNumber": "9176176780  044-24796955",
                  "DPName": "17946878-Poonamallee",
                  "DPId": "17946878",
                  "BPLandmark": "Entrance Of Kfc Restrurant",
                  "BPAddress": "ENTRANCE OF KFC RESTRURANT, NEAR HOTEL HIGHWAY, NAZARATHPET SIGNAL , NEAR HOTEL HIGHWAY, NAZARATHPET SIGNAL ",
                  "DPLocation": "Ponamalee"
                 },
                 {
                  "DPTime": "2018-05-01T14:30:00Z",
                  "BPContactNumber": "9176176780    04424796955 ",
                  "DPName": "17948163-Koyambedu",
                  "DPId": "17948163",
                  "BPLandmark": "Near  Hotel  Chennai  Gateway",
                  "BPAddress": "SEABIRD  TOURISTS  125/1045  POONAMALEE  HIGH ROAD,  BELOW KOYAMBEDU FLYOVER, NEAR  HOTEL  CHENNAI  GATEWAY , SEABIRD  TOURISTS  125/1045  POONAMALEE  HIGH ROAD",
                  "DPLocation": "Koyambedu"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo Multi Axle SemiSleeper I-Shift B11R (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "630",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 38,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T08:00:00Z",
               "idRequired": "false",
               "ServiceID": 1534425,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "TravelsName": "Sea Bird Tourist",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771534425",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-0800-SeaBirdTourist-VolvoMultiAxleSemiSleeperI-ShiftB11R2+2",
               "arrdate": "2018-05-01T15:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.7",
               "DepartureTime": "17:00",
               "cancellationPolicy": "0:24:100:0;24:48:50:0;48:-1:15:0",
               "avlWindowSeats": 20,
               "BusServiceID": "27039",
               "totalReviews": "526",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92gbzu4E5yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "228298",
                  "BPContactNumber": "",
                  "BPName": "228298-Majestic",
                  "BPTime": "2018-05-01T15:20:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Majestic",
                  "BPAddress": "Majestic,Kallada Travels(NTJ),Opp KSRTC,Busstand,N,Kallada Travels(NTJ),Opp KSRTC,Busstand,Next to Hotel Sanman,Tankbunk Road:9341555000",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "305531",
                  "BPContactNumber": "",
                  "BPName": "305531-Kammannahalli",
                  "BPTime": "2018-05-01T15:45:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Kammanahally",
                  "BPAddress": "Opp.Sansar Collections Opp. Anand Sweets,080-32515299, 40942094",
                  "BPCoordinates": "13.015,77.637"
                 },
                 {
                  "BPId": "17934947",
                  "BPContactNumber": "",
                  "BPName": "17934947-Kalasipalyam",
                  "BPTime": "2018-05-01T16:00:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Opp Kalasipalayam Bus Stand.Ambika KalladaTravels",
                  "BPAddress": "Ph,080 41140799,41575551,9343455500",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "1696021",
                  "BPContactNumber": "",
                  "BPName": "1696021-Shanthinagar",
                  "BPTime": "2018-05-01T16:15:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Shanthi Nagar",
                  "BPAddress": "Shanthi Nagar,BTMC Bus Depot,Opp Reliance Fresh,Next To SRS",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "139396",
                  "BPContactNumber": "",
                  "BPName": "139396-Indiranagar",
                  "BPTime": "2018-05-01T16:15:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Indiranagar",
                  "BPAddress": "080 42112526,42010000,Sagar Travels Indiranagar,BDA Complex,Opp CanaraBank,9341615500",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "48223",
                  "BPContactNumber": "",
                  "BPName": "48223-Madiwala",
                  "BPTime": "2018-05-01T17:00:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Madiwala Maruthi Nagar Main Road (Next To Balaji Medicals)08042010000.42112525",
                  "BPAddress": "Madiwala Maruthi Nagar Main Road (Next To Balaji M",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17935289",
                  "BPContactNumber": "",
                  "BPName": "17935289-Electronic City",
                  "BPTime": "2018-05-01T17:30:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Electronic city",
                  "BPAddress": "080 42112526,42010000,32928132,Phase Two Toll Gate, In Front of Audi Car Service 9343125500",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17935272",
                  "BPContactNumber": "",
                  "BPName": "17935272-Bommasandra",
                  "BPTime": "2018-05-01T17:40:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "Hennagra Gate Bus Stop Infront of Sangeetha Mobile,Kallada Travels,9343125500",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17935095",
                  "BPContactNumber": "",
                  "BPName": "17935095-Hosur",
                  "BPTime": "2018-05-01T18:15:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Hosur Kallada",
                  "BPAddress": "0434 4325526,9360105500,Kallada,above janani hotel,Opp.busstand",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "23:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "537",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "500.0",
                "adulttotalfare": "0",
                "servicetax": "30.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "2617",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T00:20:00Z",
                  "BPContactNumber": "",
                  "DPName": "17943007-Sholinganallur",
                  "DPId": "17943007",
                  "BPLandmark": "Sholinganallur,Dollar Bus Stop Opp Accenture^^Sholinganallur",
                  "BPAddress": "Sholinganallur,Dollar Bus Stop Opp Accenture^^Sholinganallur",
                  "DPLocation": "Sholinganallur,Dollar Bus Stop Opp Accenture^^Sholinganallur"
                 },
                 {
                  "DPTime": "2018-05-01T12:10:00Z",
                  "BPContactNumber": "",
                  "DPName": "17945650-Perungudi",
                  "DPId": "17945650",
                  "BPLandmark": "Perungudi^^Perungudi",
                  "BPAddress": "Perungudi^^Perungudi",
                  "DPLocation": "Perungudi^^Perungudi"
                 },
                 {
                  "DPTime": "2018-05-01T21:30:00Z",
                  "BPContactNumber": "",
                  "DPName": "17944735-Kanchipuram Bypass",
                  "DPId": "17944735",
                  "BPLandmark": "Kanchipuram Byepass^^09344445500,Near Sakthi Ganapathy Hotel,white gate",
                  "BPAddress": "Kanchipuram Byepass^^09344445500,Near Sakthi Ganapathy Hotel,white gate",
                  "DPLocation": "Kanchipuram Byepass^^09344445500,Near Sakthi Ganapathy Hotel,white gate"
                 },
                 {
                  "DPTime": "2018-05-01T21:50:00Z",
                  "BPContactNumber": "",
                  "DPName": "17969271-Sriperumbudur",
                  "DPId": "17969271",
                  "BPLandmark": "Sri Perumbathur Tollgate^^(National Travels) Near bus stop,chennai PH:735854",
                  "BPAddress": "Sri Perumbathur Tollgate^^(National Travels) Near bus stop,chennai PH:735854",
                  "DPLocation": "Sri Perumbathur Tollgate^^(National Travels) Near bus stop,chennai PH:735854"
                 },
                 {
                  "DPTime": "2018-05-01T22:30:00Z",
                  "BPContactNumber": "",
                  "DPName": "17969662-Poonamallee",
                  "DPId": "17969662",
                  "BPLandmark": "Poonamalai^^(National Travels)Near bus stand,chennai PH:089394",
                  "BPAddress": "Poonamalai^^(National Travels)Near bus stand,chennai PH:089394",
                  "DPLocation": "Poonamalai^^(National Travels)Near bus stand,chennai PH:089394"
                 },
                 {
                  "DPTime": "2018-05-01T23:00:00Z",
                  "BPContactNumber": "",
                  "DPName": "17945657-SRP Tools",
                  "DPId": "17945657",
                  "BPLandmark": "SRP Tools^^SRP Tools",
                  "BPAddress": "SRP Tools^^SRP Tools",
                  "DPLocation": "SRP Tools^^SRP Tools"
                 },
                 {
                  "DPTime": "2018-05-01T23:00:00Z",
                  "BPContactNumber": "",
                  "DPName": "17933572-Arumbakkam",
                  "DPId": "17933572",
                  "BPLandmark": "Arumbakam Metro Station(Near MMDA Signal)04424791500,9362635500,9362555500^^04424791500,9362635500,9362555500",
                  "BPAddress": "Arumbakam Metro Station(Near MMDA Signal)04424791500,9362635500,9362555500^^04424791500,9362635500,9362555500",
                  "DPLocation": "Arumbakam Metro Station(Near MMDA Signal)04424791500,9362635500,9362555500^^04424791500,9362635500,9362555500"
                 },
                 {
                  "DPTime": "2018-05-01T23:20:00Z",
                  "BPContactNumber": "",
                  "DPName": "48240-Ashok Pillar",
                  "DPId": "48240",
                  "BPLandmark": "Ashok Piller ^^9344445500, Ashok Piller ,Anjappa Road",
                  "BPAddress": "Ashok Piller ^^9344445500, Ashok Piller ,Anjappa Road",
                  "DPLocation": "Ashok Piller ^^9344445500, Ashok Piller ,Anjappa Road"
                 },
                 {
                  "DPTime": "2018-05-01T23:30:00Z",
                  "BPContactNumber": "",
                  "DPName": "48241-Guindy",
                  "DPId": "48241",
                  "BPLandmark": "Guindy,9344445500^^09344445500, Opp.TOYOTA Showroom,Central Footware",
                  "BPAddress": "Guindy,9344445500^^09344445500, Opp.TOYOTA Showroom,Central Footware",
                  "DPLocation": "Guindy,9344445500^^09344445500, Opp.TOYOTA Showroom,Central Footware"
                 },
                 {
                  "DPTime": "2018-05-01T23:45:00Z",
                  "BPContactNumber": "",
                  "DPName": "17933584-Madhya Kailash",
                  "DPId": "17933584",
                  "BPLandmark": "Madhya Kailash^^09344445500,Kasthuribai Railway Station Entrance",
                  "BPAddress": "Madhya Kailash^^09344445500,Kasthuribai Railway Station Entrance",
                  "DPLocation": "Madhya Kailash^^09344445500,Kasthuribai Railway Station Entrance"
                 },
                 {
                  "DPTime": "2018-05-01T23:50:00Z",
                  "BPContactNumber": "",
                  "DPName": "101519-Adyar",
                  "DPId": "101519",
                  "BPLandmark": "Adayar, Jem Travels^^Gem Travels, Shop :3 Vantage Plaza, No.2,L.B Road&",
                  "BPAddress": "Adayar, Jem Travels^^Gem Travels, Shop :3 Vantage Plaza, No.2,L.B Road&",
                  "DPLocation": "Adayar, Jem Travels^^Gem Travels, Shop :3 Vantage Plaza, No.2,L.B Road&"
                 },
                 {
                  "DPTime": "2018-05-01T23:55:00Z",
                  "BPContactNumber": "",
                  "DPName": "17970208-Thiruvanmiyur",
                  "DPId": "17970208",
                  "BPLandmark": "Thiruvanmiyur signal^^(National Travels) Thiruvanmiyur,chennai PH:893941",
                  "BPAddress": "Thiruvanmiyur signal^^(National Travels) Thiruvanmiyur,chennai PH:893941",
                  "DPLocation": "Thiruvanmiyur signal^^(National Travels) Thiruvanmiyur,chennai PH:893941"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C MultiAxle Semisleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "537",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 43,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T17:00:00Z",
               "idRequired": "false",
               "ServiceID": 1485399,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3.67,
                 "seats": 4,
                 "onBoardExperience": 3.83,
                 "onTimeAD": 3.17
                },
                "reviewCount": 6,
                "posReviewCount": 5,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 3.83,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1700-KalladaTravelsSureshKallada-VolvoACMultiAxleSemisleeper2+2"
               },
               "TravelsName": "Kallada Travels (Suresh Kallada)",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771485399",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1700-KalladaTravelsSureshKallada-VolvoACMultiAxleSemisleeper2+2",
               "arrdate": "2018-05-01T23:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.8",
               "DepartureTime": "06:00",
               "cancellationPolicy": "0:24:100:0;24:48:50:0;48:-1:15:0",
               "avlWindowSeats": 22,
               "BusServiceID": "27034",
               "totalReviews": "520",
               "seat": "ST",
               "duration": "5h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92gbzu4D3yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17934947",
                  "BPContactNumber": "",
                  "BPName": "17934947-Kalasipalyam",
                  "BPTime": "2018-05-01T04:45:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Opp Kalasipalayam Bus Stand.Ambika KalladaTravels",
                  "BPAddress": "Kallada,Opp.yathri Nivas lodge, 9343455500",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "228298",
                  "BPContactNumber": "",
                  "BPName": "228298-Majestic",
                  "BPTime": "2018-05-01T05:00:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Majestic",
                  "BPAddress": "Majestic,Kallada Travels(NTJ),Opp KSRTC,Busstand,N,Kallada Travels(NTJ),Opp KSRTC,Busstand,Next to Hotel Sanman,Tankbunk Road:9341555000",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "139396",
                  "BPContactNumber": "",
                  "BPName": "139396-Indiranagar",
                  "BPTime": "2018-05-01T05:20:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Indiranagar",
                  "BPAddress": "9343455500,Sagar Travels Indiranagar,BDA Complex,Opp CanaraBank,9341615500",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "1574076",
                  "BPContactNumber": "",
                  "BPName": "1574076-Marathahalli",
                  "BPTime": "2018-05-01T05:40:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Marthahalli",
                  "BPAddress": "Marthahalli,9343455500,9379755500",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "48223",
                  "BPContactNumber": "",
                  "BPName": "48223-Madiwala",
                  "BPTime": "2018-05-01T06:00:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Madiwala Maruthi Nagar Main Road (Next To Balaji Medicals)08042010000.42112525",
                  "BPAddress": "Madiwala Maruthi Nagar Main Road (Next To Balaji M",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17935289",
                  "BPContactNumber": "",
                  "BPName": "17935289-Electronic City",
                  "BPTime": "2018-05-01T06:30:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Electronic city",
                  "BPAddress": "080 42112526,42010000,32928132,Phase Two Toll Gate, In Front of Audi Car Service 9343125500",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17935272",
                  "BPContactNumber": "",
                  "BPName": "17935272-Bommasandra",
                  "BPTime": "2018-05-01T06:40:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "Hennagra Gate Bus Stop Infront of Sangeetha Mobile,Kallada Travels,9343125500",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17935095",
                  "BPContactNumber": "",
                  "BPName": "17935095-Hosur",
                  "BPTime": "2018-05-01T07:00:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Hosur Kallada",
                  "BPAddress": "0434 4325526,9360105500,Kallada,above janani hotel,Opp.busstand",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "11:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "537",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "500.0",
                "adulttotalfare": "0",
                "servicetax": "30.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "2617",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T11:00:00Z",
                  "BPContactNumber": "",
                  "DPName": "17933572-Arumbakkam",
                  "DPId": "17933572",
                  "BPLandmark": "Arumbakam Metro Station(Near MMDA Signal)04424791500,9362635500,9362555500^^04424791500,9362635500,9362555500",
                  "BPAddress": "Arumbakam Metro Station(Near MMDA Signal)04424791500,9362635500,9362555500^^04424791500,9362635500,9362555500",
                  "DPLocation": "Arumbakam Metro Station(Near MMDA Signal)04424791500,9362635500,9362555500^^04424791500,9362635500,9362555500"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C MultiAxle Semisleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "537",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 46,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T06:00:00Z",
               "idRequired": "false",
               "ServiceID": 1485381,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3.4,
                 "seats": 3.3,
                 "onBoardExperience": 3,
                 "onTimeAD": 2.9
                },
                "reviewCount": 10,
                "posReviewCount": 5,
                "criReviewCount": 5,
                "imgReviewCount": 0,
                "totalRating": 3.2,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-0600-KalladaTravelsSureshKallada-VolvoACMultiAxleSemisleeper2+2"
               },
               "TravelsName": "Kallada Travels (Suresh Kallada)",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771485381",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-0600-KalladaTravelsSureshKallada-VolvoACMultiAxleSemisleeper2+2",
               "arrdate": "2018-05-01T11:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.0",
               "DepartureTime": "23:00",
               "cancellationPolicy": "0:24:100:0;24:48:50:0;48:-1:15:0",
               "avlWindowSeats": 24,
               "BusServiceID": "27232",
               "totalReviews": "411",
               "seat": "SL",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92gbz-8B4SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1726736",
                  "BPContactNumber": "",
                  "BPName": "1726736-Jalahalli",
                  "BPTime": "2018-05-01T20:20:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Jalahalli west",
                  "BPAddress": "Shettihalli Cross Bmtc Bus stop,Near AFTC college ,Shettihalli Cross (Van Pickup)080-40926751",
                  "BPCoordinates": "13.052,77.541"
                 },
                 {
                  "BPId": "304712",
                  "BPContactNumber": "",
                  "BPName": "304712-MATHIKERA BNG",
                  "BPTime": "2018-05-01T20:35:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Mathikkare Kalladatravels Opp. State Bank of Mysore",
                  "BPAddress": "Mathikkare Kalladatravels Opp. State Bank of Mysor, Near Fashion Bag World,08040926751",
                  "BPCoordinates": "13.0571273,77.5023427"
                 },
                 {
                  "BPId": "806457",
                  "BPContactNumber": "",
                  "BPName": "806457-Hebbal",
                  "BPTime": "2018-05-01T20:45:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Hebbal",
                  "BPAddress": "(Van Pickup)Kallada Travels.9379355500,Kallada Travels,Near Hebbal Law&Order police Station,Near BMTC Bus Stop,Van Pickup,9379355500",
                  "BPCoordinates": "13.035,77.597"
                 },
                 {
                  "BPId": "201044",
                  "BPContactNumber": "",
                  "BPName": "201044-Marathahalli",
                  "BPTime": "2018-05-01T21:15:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Marathahalli",
                  "BPAddress": "Marathahalli 080 42112526,42010000,Kallada Travels,Opp Kalamandir,Service Road,Near Vodafone Store,9379755500",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "139396",
                  "BPContactNumber": "",
                  "BPName": "139396-Indiranagar",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Indiranagar",
                  "BPAddress": "080-42112526,42010000,Sagar Travels Indiranagar,BDA Complex,Opp CanaraBank,9341615500",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17934947",
                  "BPContactNumber": "",
                  "BPName": "17934947-Kalasipalyam",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Opp Kalasipalayam Bus Stand.Ambika KalladaTravels",
                  "BPAddress": "Ph,080 41140799,41575551,9343455500",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "48223",
                  "BPContactNumber": "",
                  "BPName": "48223-Madiwala",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Madiwala Maruthi Nagar Main Road (Next To Balaji Medicals)08042010000.42112525",
                  "BPAddress": "080 32928132 Kallada,Opp.St.Johns college ground",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17935289",
                  "BPContactNumber": "",
                  "BPName": "17935289-Electronic City",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Electronic city",
                  "BPAddress": "Phase Two Toll Gate, In Front of Audi Car Service ,Phase Two Toll Gate, In Front of Audi Car Service 9343125500",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "1615426",
                  "BPContactNumber": "",
                  "BPName": "1615426-Attibele",
                  "BPTime": "2018-05-01T23:50:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Attibele Tollgate ",
                  "BPAddress": "9342555000,Attibele Toll gate hosur road ,B",
                  "BPCoordinates": "12.78,77.77"
                 }
                ]
               },
               "amenities": "",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "852",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "800.0",
                "adulttotalfare": "0",
                "servicetax": "40.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "2617",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "",
                  "DPName": "17933572-Arumbakkam",
                  "DPId": "17933572",
                  "BPLandmark": "Arumbakam Metro Station(Near MMDA Signal)04424791500,9362635500,9362555500^^04424791500,9362635500,9362555500",
                  "BPAddress": "Arumbakam Metro Station(Near MMDA Signal)04424791500,9362635500,9362555500^^04424791500,9362635500,9362555500",
                  "DPLocation": "Arumbakam Metro Station(Near MMDA Signal)04424791500,9362635500,9362555500^^04424791500,9362635500,9362555500"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Premium Sleeper A/C (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "852",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 36,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "958",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 36,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:00:00Z",
               "idRequired": "false",
               "ServiceID": 1486463,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3,
                 "seats": 2.67,
                 "onBoardExperience": 2.33,
                 "onTimeAD": 3.5
                },
                "reviewCount": 6,
                "posReviewCount": 1,
                "criReviewCount": 5,
                "imgReviewCount": 0,
                "totalRating": 1.83,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2300-KalladaTravelsSureshKallada-PremiumSleeperAC2+1"
               },
               "TravelsName": "Kallada Travels (Suresh Kallada)",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771486463",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2300-KalladaTravelsSureshKallada-PremiumSleeperAC2+1",
               "arrdate": "2018-05-02T05:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.9",
               "DepartureTime": "14:30",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": 24,
               "BusServiceID": "SCH5785530J",
               "totalReviews": "32",
               "seat": "ST",
               "duration": "7h 15m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wTzPEE3iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17777824",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777824-Kalasipalyam",
                  "BPTime": "2018-05-01T14:30:00Z",
                  "BPLandmark": "OPP AYYAPPA TEMPLE",
                  "BPLocation": "Kalasipalayam",
                  "BPAddress": "Kalasipalayam  \nOPP AYYAPPA TEMPLE",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17781721",
                  "BPContactNumber": "8754418555",
                  "BPName": "17781721-Majestic",
                  "BPTime": "2018-05-01T14:40:00Z",
                  "BPLandmark": "OPP BMDC bus stand amar hotel",
                  "BPLocation": "Majestic",
                  "BPAddress": "OPP  BUS STAND",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17777830",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777830-Anand Rao Circle",
                  "BPTime": "2018-05-01T14:50:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "Tourist hotel  ",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17985353",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985353-Shanthinagar",
                  "BPTime": "2018-05-01T15:00:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Shanthi Nagar Bus Stop",
                  "BPAddress": "Shanthi Nagar Bus Stop\nNear reliance market.",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17966274",
                  "BPContactNumber": "8754418555",
                  "BPName": "17966274-Madiwala",
                  "BPTime": "2018-05-01T15:10:00Z",
                  "BPLandmark": "SAVOURY BUSINESS HOTEL",
                  "BPLocation": "Madiwala ",
                  "BPAddress": "Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17985354",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985354-Madiwala",
                  "BPTime": "2018-05-01T15:20:00Z",
                  "BPLandmark": " Next to bharat petrol bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": "Police Station",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17777841",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777841-Silk Board",
                  "BPTime": "2018-05-01T15:40:00Z",
                  "BPLandmark": "Near RENAULT SHOWROOM / ISUZU SHOWROOM",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Near RENAULT SHOWROOM / ISUZU SHOWROOM",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17985355",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985355-Bommanahalli",
                  "BPTime": "2018-05-01T15:45:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "Bus Stop",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17973593",
                  "BPContactNumber": "8754418555",
                  "BPName": "17973593-Electronic City",
                  "BPTime": "2018-05-01T15:55:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Electronic City Bus Depot\nIn front pallavi Restaurant ",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17777842",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777842-Bommasandra",
                  "BPTime": "2018-05-01T16:10:00Z",
                  "BPLandmark": "SKF BEARING COMPANY NEAR KFC / BATA SHOWROOM",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "SKF BEARING COMPANY / NEAR KFC / BATA SHOWROOM",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17985356",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985356-Attibele",
                  "BPTime": "2018-05-01T16:30:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Attibele Toll",
                  "BPAddress": "Tollgate",
                  "BPCoordinates": "12.78,77.77"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Hammer (to break glass),Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "21:45",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "551",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "525.0",
                "adulttotalfare": "0",
                "servicetax": "26.25"
               },
               "dst_vendor_id": "102",
               "OperatorID": "16368",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T19:10:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17777828-Vellore Bypass",
                  "DPId": "17777828",
                  "BPLandmark": " ",
                  "BPAddress": "Vellore Bypass",
                  "DPLocation": "Vellore Bypass"
                 },
                 {
                  "DPTime": "2018-05-01T20:10:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17777815-Kanchipuram Bypass",
                  "DPId": "17777815",
                  "BPLandmark": "Near Anna Arch",
                  "BPAddress": "Anna Arch",
                  "DPLocation": "Kanchipuram "
                 },
                 {
                  "DPTime": "2018-05-01T20:45:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17777814-Sriperumbudur",
                  "DPId": "17777814",
                  "BPLandmark": " Near By Tollgate",
                  "BPAddress": "Sriperumbudur Toll Gate",
                  "DPLocation": "Sriperumbudur"
                 },
                 {
                  "DPTime": "2018-05-01T21:15:00Z",
                  "BPContactNumber": " 7338819222 / 7338819555",
                  "DPName": "17777813-Poonamallee",
                  "DPId": "17777813",
                  "BPLandmark": " ",
                  "BPAddress": "Poonamallee Bypass",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T21:20:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17972196-Velappanchavadi Bus Stop",
                  "DPId": "17972196",
                  "BPLandmark": " Gajapathy Petrol bunk",
                  "BPAddress": "#52 B, Poonamallee Road, Velappanchavadi, Chennai- 77",
                  "DPLocation": "Velappanchavadi"
                 },
                 {
                  "DPTime": "2018-05-01T21:30:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17976041-Maduravoyal",
                  "DPId": "17976041",
                  "BPLandmark": " ",
                  "BPAddress": "Maduravoyal Arikari Bus Stop",
                  "DPLocation": "Maduravoyal"
                 },
                 {
                  "DPTime": "2018-05-01T21:40:00Z",
                  "BPContactNumber": "7338819222/ 7338819555",
                  "DPName": "17777810-Koyambedu",
                  "DPId": "17777810",
                  "BPLandmark": " Near by Majestic complex, koyambedu",
                  "BPAddress": "Plot No: 06, E Road,\nOmni Bus Stand, Koyembedu, Chennai-2",
                  "DPLocation": "Koyambedu "
                 },
                 {
                  "DPTime": "2018-05-01T21:50:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17971589-Vadapalani",
                  "DPId": "17971589",
                  "BPLandmark": " ",
                  "BPAddress": "Bus Stop",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-01T22:00:00Z",
                  "BPContactNumber": "7338819222 ",
                  "DPName": "17849596-Ashok Pillar",
                  "DPId": "17849596",
                  "BPLandmark": "METRO STATION",
                  "BPAddress": "METRO STATION",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-01T22:10:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17781142-Guindy",
                  "DPId": "17781142",
                  "BPLandmark": "Near Sangeetha Restaurants",
                  "BPAddress": "Next To HP Petrol Pump - Perys Agencies",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-01T22:20:00Z",
                  "BPContactNumber": "7338819222",
                  "DPName": "17849617-Saidapet",
                  "DPId": "17849617",
                  "BPLandmark": "Vasan Eye Care - Saidapet",
                  "BPAddress": "Bus Stop",
                  "DPLocation": "Saidapet"
                 },
                 {
                  "DPTime": "2018-05-01T22:35:00Z",
                  "BPContactNumber": "7338819222",
                  "DPName": "17789557-Madhya Kailash",
                  "DPId": "17789557",
                  "BPLandmark": "Madhya Kailash Temple Back Side",
                  "BPAddress": "Bus Stop",
                  "DPLocation": "Madhya Kailash"
                 },
                 {
                  "DPTime": "2018-05-01T22:45:00Z",
                  "BPContactNumber": "7338819222",
                  "DPName": "17953706-Tidel Park",
                  "DPId": "17953706",
                  "BPLandmark": " ",
                  "BPAddress": "Bus Stop",
                  "DPLocation": "TIDEL Park"
                 },
                 {
                  "DPTime": "2018-05-01T23:15:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17831923-Velachery",
                  "DPId": "17831923",
                  "BPLandmark": " ",
                  "BPAddress": "Near Hot Chips",
                  "DPLocation": "Velacherry"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi-Axle Semisleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "551",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 49,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T14:30:00Z",
               "idRequired": "false",
               "ServiceID": 1803690,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "TravelsName": "Sri gajapathy travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771803690",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1430-Srigajapathytravels-VolvoACMulti-AxleSemisleeper2+2",
               "arrdate": "2018-05-01T21:45:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.1",
               "DepartureTime": "22:45",
               "cancellationPolicy": "0:4:100:0;4:12:25:0;12:24:20:0;24:-1:15:0",
               "avlWindowSeats": 20,
               "BusServiceID": "643000",
               "totalReviews": "172",
               "seat": "SL",
               "duration": "6h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92sVz-774CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1140347",
                  "BPContactNumber": "7483070725",
                  "BPName": "1140347-Marathahalli",
                  "BPTime": "2018-05-01T19:00:00Z",
                  "BPLandmark": "",
                  "BPLocation": "MARATHALLI (PICK UP VEHICLE) OPP KALAMANDIR NEAR AIRTEL 4G SHOP TOWARDS TIN FACTRY PH-7483070725",
                  "BPAddress": ".",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "429611",
                  "BPContactNumber": "080 - 22971198",
                  "BPName": "429611-Peenya",
                  "BPTime": "2018-05-01T21:00:00Z",
                  "BPLandmark": "NEAR SANJEEVINI HOSPITAL",
                  "BPLocation": "PEENYA(PICK UP VEHICLE)  PH  080 - 22971198",
                  "BPAddress": "N.H.4 T.DASARAHALLI , PEENYA ,BENGALURU",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "429612",
                  "BPContactNumber": "080 - 22971107, + 9741805834",
                  "BPName": "429612-Yeshwantpur",
                  "BPTime": "2018-05-01T21:15:00Z",
                  "BPLandmark": "",
                  "BPLocation": "YESHWANTPUR (PICK UP VEHICLE) PH 9343722001,9741805834,",
                  "BPAddress": "NO.46/1 , C M MOHAN BULDING , OPP:RAILWAY STATION , NEAR GOVARDHAN THEATER TUMKUR ROAD , YESHWANTHPUR , BENGALURU-22",
                  "BPCoordinates": "13.0279661,77.54091560000006"
                 },
                 {
                  "BPId": "429526",
                  "BPContactNumber": "080 - 22971174, +919343993245",
                  "BPName": "429526-Rajajinagar",
                  "BPTime": "2018-05-01T21:30:00Z",
                  "BPLandmark": "",
                  "BPLocation": "RAJAJI NAGAR B{PICK UP VEHICLE} (OPP SUBRAMANYANAGAR  POLICE STATION) 080 - 22971174, +919343993245",
                  "BPAddress": "NO.68, 1ST MAIN ROAD, 1ST  BLOCK, DR.RAJKUMAR ROAD OPP: SUBRAMANYA NAGAR POLICE STATION",
                  "BPCoordinates": "12.9900578,77.55249249999997"
                 },
                 {
                  "BPId": "17938809",
                  "BPContactNumber": "080 22971203",
                  "BPName": "17938809-Anand Rao Circle",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "",
                  "BPLocation": "ANAND RAO CIRCLE- 080 22971202 /03/04/05/06/07/",
                  "BPAddress": "VRL BUS STAND, SHESHADRI ROAD , ANAND RAO CIRCLE",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "429539",
                  "BPContactNumber": "080 - 41554321 / 080 - 41554323",
                  "BPName": "429539-Madiwala",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "NEAR  VENKATESHWARA  HOSPITAL",
                  "BPLocation": "MADIWALA{NEXT TO VENKATESHWAR HOSPITAL:NEAR AYAPPA TEMPLE} 7829206782 PH 080 - 41554321 / 41554322 /",
                  "BPAddress": "NO.3 HOSUR MAIN ROAD MARUTI NAGAR MADIWALA -76",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17856400",
                  "BPContactNumber": "7829206782",
                  "BPName": "17856400-Electronic City",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "AUDI SERVICE SHOW ROOM",
                  "BPLocation": "ELECTRONIC CITY- TOLL OPP TO AUDI SERVICE SHOW ROOM, 7829206782",
                  "BPAddress": "OPP TO AUDI SERVICE SHOW ROOM, NEAR TOLL",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Blankets,Reading Light,CCTV",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1418",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1350.0",
                "adulttotalfare": "0",
                "servicetax": "68.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "5483",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:15:00Z",
                  "BPContactNumber": "+919962937454",
                  "DPName": "429603-Kanchipuram",
                  "DPId": "429603",
                  "BPLandmark": "KANCHIPURAM BY PASS",
                  "BPAddress": "KANCHIPURAM BY PASS",
                  "DPLocation": "KANCHIPURAM BY PASS - REQUEST DROP ONLY (M+919962937454"
                 },
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "+919962937454",
                  "DPName": "429604-Poonamallee",
                  "DPId": "429604",
                  "BPLandmark": "POONAMALLE  BY PASS",
                  "BPAddress": "POONAMALLE BY PASS",
                  "DPLocation": "POONAMALLE BY PASS - REQUEST DROP ONLY (M+919962937454"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "9962937454",
                  "DPName": "429605-Koyambedu",
                  "DPId": "429605",
                  "BPLandmark": "",
                  "BPAddress": "KOYAMBEDU GOVT BUS STAND",
                  "DPLocation": "KOYAMBEDU GOVT BUS STAND (M)9962937454"
                 },
                 {
                  "DPTime": "2018-05-03T05:45:00Z",
                  "BPContactNumber": "+919962937454",
                  "DPName": "17934360-T Nagar",
                  "DPId": "17934360",
                  "BPLandmark": "",
                  "BPAddress": "19-A SOUTH USMAN ROAD, OPP RAJU HOSPITAL T-NAGAR(M))+918925039922",
                  "DPLocation": "T. NAGAR-OPP RAJU HOSPITAL-(M)9940014098"
                 },
                 {
                  "DPTime": "2018-05-03T06:00:00Z",
                  "BPContactNumber": "9962937454",
                  "DPName": "17934404-Central Railway Station",
                  "DPId": "17934404",
                  "BPLandmark": "THE ROYAL REGENCY",
                  "BPAddress": "NEAR THE ROYAL REGENCY",
                  "DPLocation": "CENTRAL OPP GOLDEN TOWER   (M)9962937454"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1418",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "1470",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "1575",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:45:00Z",
               "idRequired": "false",
               "ServiceID": 1726302,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4.67,
                 "seats": 4.67,
                 "onBoardExperience": 5,
                 "onTimeAD": 5
                },
                "reviewCount": 3,
                "posReviewCount": 3,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2245-VRLTravels-ACSleeper2+1"
               },
               "TravelsName": "VRL  Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771726302",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-2245-VRLTravels-ACSleeper2+1",
               "arrdate": "2018-05-02T05:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.1",
               "DepartureTime": "23:49",
               "cancellationPolicy": "0:4:100:0;4:6:70:0;6:8:50:0;8:24:25:0;24:-1:10:0",
               "avlWindowSeats": 19,
               "BusServiceID": "4105",
               "totalReviews": "394",
               "seat": "SLST",
               "duration": "7h 11m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92gY0ewA4iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "nonac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17970522",
                  "BPContactNumber": "080 42047811",
                  "BPName": "17970522-Kalasipalyam",
                  "BPTime": "2018-05-01T22:59:00Z",
                  "BPLandmark": "near kims hospital",
                  "BPLocation": "Kalasipalayam",
                  "BPAddress": "geepee travels18 2nd Mn Disp. Rd. Kalasipalya Ph: 08041728209",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17970923",
                  "BPContactNumber": "41139269/496",
                  "BPName": "17970923-Majestic",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Opp KSRTC Bus terminus",
                  "BPLocation": "Majestic",
                  "BPAddress": "geepee travels9 Tank Bund Rd Majestic Ph: 41156555/41157555",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17971383",
                  "BPContactNumber": "9945355973",
                  "BPName": "17971383-Anand Rao Circle",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "near ksheera sagar hotel",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "geepee travelsbasement shop no 4 travellors point complexanand roa circle bangalore-560009.9880039",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17971809",
                  "BPContactNumber": "9945355973",
                  "BPName": "17971809-Electronic City",
                  "BPTime": "2018-05-01T23:58:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "electronic city",
                  "BPAddress": "near bmtc bus stand (departure will be half an hour later than the scheduled time at 12.30 a.m)",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17971623",
                  "BPContactNumber": "08041230285",
                  "BPName": "17971623-Bommanahalli",
                  "BPTime": "2018-05-01T23:58:00Z",
                  "BPLandmark": "shell petrol pump",
                  "BPLocation": "bommanahalli",
                  "BPAddress": "near shell petrol pump9880039777   (departure will be approx 25 minutes later than the scheduled ti",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17970103",
                  "BPContactNumber": "08043717157",
                  "BPName": "17970103-Madiwala",
                  "BPTime": "2018-05-01T23:58:00Z",
                  "BPLandmark": "near hanuman temple",
                  "BPLocation": "Madiwala",
                  "BPAddress": "geepee travels no 120 opp indian tvs madiwala Hosur Main Rd. M:9945355973",
                  "BPCoordinates": "12.929,77.6141393"
                 }
                ]
               },
               "amenities": "",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "07:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "946",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "930.0",
                "adulttotalfare": "0",
                "servicetax": "0.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "903",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T06:30:00Z",
                  "BPContactNumber": " ",
                  "DPName": "17972715-Poonamallee",
                  "DPId": "17972715",
                  "BPLandmark": " ",
                  "BPAddress": " ",
                  "DPLocation": "poonamalle byepass"
                 },
                 {
                  "DPTime": "2018-05-03T07:00:00Z",
                  "BPContactNumber": " ",
                  "DPName": "17671074-Koyambedu",
                  "DPId": "17671074",
                  "BPLandmark": " ",
                  "BPAddress": " ",
                  "DPLocation": "koyembedu"
                 },
                 {
                  "DPTime": "2018-05-03T07:30:00Z",
                  "BPContactNumber": " ",
                  "DPName": "17972303-Central Railway Station",
                  "DPId": "17972303",
                  "BPLandmark": " ",
                  "BPAddress": " ",
                  "DPLocation": "Central"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Non A/C Seater/Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "946",
                  "busCondition": "nonac",
                  "seatType": "Seater/Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 30,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "1119",
                  "busCondition": "nonac",
                  "seatType": "Seater/Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 30,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "1221",
                  "busCondition": "nonac",
                  "seatType": "Seater/Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 30,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:49:00Z",
               "idRequired": "false",
               "ServiceID": 1458154,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "onBoardExperience": 2.09,
                 "seats": 1.82,
                 "stopOverExperience": 2,
                 "onTimeAD": 2.27
                },
                "reviewCount": 11,
                "posReviewCount": 2,
                "criReviewCount": 9,
                "imgReviewCount": 0,
                "totalRating": 1.91,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2349-GeepeeTravels-NonACSeaterSleeper2+1"
               },
               "TravelsName": "Geepee Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771458154",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2349-GeepeeTravels-NonACSeaterSleeper2+1",
               "arrdate": "2018-05-02T07:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.5",
               "DepartureTime": "23:00",
               "cancellationPolicy": "0:6:100:0;6:12:50:0;12:24:25:0;24:-1:10:0",
               "avlWindowSeats": 24,
               "BusServiceID": "10",
               "totalReviews": "1217",
               "seat": "ST",
               "duration": "6h 15m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9m0X0PEC4yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17933702",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933702-Majestic",
                  "BPTime": "2018-05-01T21:15:00Z",
                  "BPLandmark": "Near  Amar  Hotel",
                  "BPLocation": "Majestic",
                  "BPAddress": "Near Amar  Hotel",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17933734",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933734-Anand Rao Circle",
                  "BPTime": "2018-05-01T21:30:00Z",
                  "BPLandmark": "Infront Of Congress Party Office",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "Infront of Congress Party Office Next To Hotel Tourist",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17944505",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17944505-Shanthinagar",
                  "BPTime": "2018-05-01T22:15:00Z",
                  "BPLandmark": "Bmtc Bus Stand / Near Srs Travels",
                  "BPLocation": "Shanthi Nagar",
                  "BPAddress": "Infront of  Bus Stand ",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17933816",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933816-Madiwala",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Next To Citi Bank Atm, Beside Savoury Hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "ASIAN XPRESS Office, Next to CITI Bank ATM",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17933856",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933856-Silk Board",
                  "BPTime": "2018-05-01T23:20:00Z",
                  "BPLandmark": "Infront Of Renault Car Showroom",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Infront Of Renault Car Showroom Next To Aswad Hospital",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17933890",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933890-Bommanahalli",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Infront To Shell Petrol Bunk",
                  "BPLocation": "Bommanhalli",
                  "BPAddress": "Infront to Shell Petrol Bunk",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17943823",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17943823-Electronic City",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "Infront Of Seasons Restaurant",
                  "BPLocation": "Electronics City",
                  "BPAddress": "Infront of Seasons Restaurant",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17933957",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933957-Bommasandra",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "Opp To Skf Factory Flyover.",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "Opp to SKF Factory Flyover",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Movie,Water Bottle,Blankets,Charging Point,Emergency exit,Emergency Contact Number,Central TV,Fire Extinguisher,Reclining seat,Reading Light,Hammer (to break glass),CCTV,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:15",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1155",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1100.0",
                "adulttotalfare": "0",
                "servicetax": "55.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "11182",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:00:00Z",
                  "BPContactNumber": "+919710748123",
                  "DPName": "17934025-Sriperumbudur",
                  "DPId": "17934025",
                  "BPLandmark": "Near Sri Perumbudur Toll Plaza",
                  "BPAddress": "Near Sri Perumbudur Toll Plaza",
                  "DPLocation": "Sri Perumbudur"
                 },
                 {
                  "DPTime": "2018-05-03T04:25:00Z",
                  "BPContactNumber": "+919710748123",
                  "DPName": "17934041-Poonamallee",
                  "DPId": "17934041",
                  "BPLandmark": "Near Motel Highway",
                  "BPAddress": "Poonamalli Byepass, Infront of KFC",
                  "DPLocation": "Poonamalli"
                 },
                 {
                  "DPTime": "2018-05-03T04:40:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17934055-Koyambedu",
                  "DPId": "17934055",
                  "BPLandmark": "B 5 Srji  Majestic Complex, Basement Omi Bus Stand",
                  "BPAddress": "B-5 Srji  majestic complex, basement Omi Bus Stand",
                  "DPLocation": "Koyembedu"
                 },
                 {
                  "DPTime": "2018-05-03T04:50:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17934069-Guindy",
                  "DPId": "17934069",
                  "BPLandmark": "Guindy",
                  "BPAddress": "Guindy",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "7530059801 7530059802 9884618111",
                  "DPName": "17947810-Adyar",
                  "DPId": "17947810",
                  "BPLandmark": "Behind Adyar Bsnl Office",
                  "BPAddress": "C/O Lucky Travels No 6,First Avenue,Shastri Nager,Adayar",
                  "DPLocation": "Adyar"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17934004-Velachery",
                  "DPId": "17934004",
                  "BPLandmark": "Opp. Baby Nagar Hot Chips Hotel, Near Indian Bank",
                  "BPAddress": "Baby nagar",
                  "DPLocation": "Velachery"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17933982-Tharamani",
                  "DPId": "17933982",
                  "BPLandmark": "Next To Mosque, Taramani",
                  "BPAddress": "11 A, 100 feet road, Tharamani",
                  "DPLocation": "Tharamani"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo B9R Multi Axle Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1155",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 49,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:00:00Z",
               "idRequired": "false",
               "ServiceID": 947675,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4.67,
                 "seats": 4.33,
                 "onBoardExperience": 4.67,
                 "onTimeAD": 4.67
                },
                "reviewCount": 3,
                "posReviewCount": 3,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 4.67,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2300-AsianXpress-VolvoB9RMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Asian Xpress",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770947675",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2300-AsianXpress-VolvoB9RMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-02T05:15:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.8",
               "DepartureTime": "22:30",
               "cancellationPolicy": "0:8:100:0;8:24:50:0;24:48:25:0;48:-1:10:0",
               "avlWindowSeats": 14,
               "BusServiceID": "216",
               "totalReviews": "667",
               "seat": "SL",
               "duration": "6h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92kXyfT-4SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17938040",
                  "BPContactNumber": "080 26703300 26700156  ",
                  "BPName": "17938040-Kalasipalyam",
                  "BPTime": "2018-05-01T20:45:00Z",
                  "BPLandmark": "Tsp Road",
                  "BPLocation": "Kalasipalyam",
                  "BPAddress": "Opp Jabbar Travels",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17944752",
                  "BPContactNumber": "08041315343 08026703300 ",
                  "BPName": "17944752-Majestic",
                  "BPTime": "2018-05-01T21:05:00Z",
                  "BPLandmark": "Mayura Hotel Opp Mejestic Bus Stand",
                  "BPLocation": "Majestic High5 Holidays",
                  "BPAddress": " # 18, hotel mayura complex tank band road, opp mejestic bus stand",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17846123",
                  "BPContactNumber": "080 26700156 26703300",
                  "BPName": "17846123-Anand Rao Circle",
                  "BPTime": "2018-05-01T21:10:00Z",
                  "BPLandmark": "Race Course Road",
                  "BPLocation": "Anand Rao Circle(Race Course Road)",
                  "BPAddress": "Infront of old  Janatha Dal Office and new congress bhavan",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17705723",
                  "BPContactNumber": "080 26700156 26703300",
                  "BPName": "17705723-Ulsoor",
                  "BPTime": "2018-05-01T21:25:00Z",
                  "BPLandmark": "Ulsoor",
                  "BPLocation": "Ulsoor",
                  "BPAddress": "Near Millenia building and philips  building",
                  "BPCoordinates": "12.9817147,77.62855850000005"
                 },
                 {
                  "BPId": "1451069",
                  "BPContactNumber": "080 26700156 26703300",
                  "BPName": "1451069-Indiranagar",
                  "BPTime": "2018-05-01T21:35:00Z",
                  "BPLandmark": "Behind Punjab National Bank",
                  "BPLocation": "Indira Nagar",
                  "BPAddress": "In front of Indian Oil Petrol Bunk",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17951232",
                  "BPContactNumber": "080 26700156 26703300 ",
                  "BPName": "17951232-Baiyappanahalli Metro Station",
                  "BPTime": "2018-05-01T21:40:00Z",
                  "BPLandmark": "Baiyappanahalli Metro Station Bus Stop",
                  "BPLocation": "Baiyappanahalli Metro Station",
                  "BPAddress": "Baiyappanahalli Metro Station bus stop",
                  "BPCoordinates": "12.9907481,77.65245619999996"
                 },
                 {
                  "BPId": "1451070",
                  "BPContactNumber": "080 26700156 26703300",
                  "BPName": "1451070-Tin Factory",
                  "BPTime": "2018-05-01T21:55:00Z",
                  "BPLandmark": "Bus Stand Bharath Petrol Bunk",
                  "BPLocation": "Tin Factory",
                  "BPAddress": "Near Bharath Petrol Bunk",
                  "BPCoordinates": "12.9972686,77.66959010000005"
                 },
                 {
                  "BPId": "17950720",
                  "BPContactNumber": "080 26700156 26703300 ",
                  "BPName": "17950720-KR.PURAM",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": "K R Puram Railway Station",
                  "BPLocation": "K R Puram Railway Station",
                  "BPAddress": "K R Puram Railway Station",
                  "BPCoordinates": "13.004016,77.6877764999"
                 },
                 {
                  "BPId": "1451071",
                  "BPContactNumber": "080 26700156 26703300 ",
                  "BPName": "1451071-Marathahalli",
                  "BPTime": "2018-05-01T22:10:00Z",
                  "BPLandmark": "Near Kalamandir",
                  "BPLocation": "Marthahalli",
                  "BPAddress": "near kalamandir",
                  "BPCoordinates": "12.9511982,77.6997663"
                 },
                 {
                  "BPId": "775614",
                  "BPContactNumber": "080 26700156 26703300",
                  "BPName": "775614-Bellandur",
                  "BPTime": "2018-05-01T22:15:00Z",
                  "BPLandmark": "Bellandur",
                  "BPLocation": "Bellandur",
                  "BPAddress": "near coffee day",
                  "BPCoordinates": "12.92,77.67"
                 },
                 {
                  "BPId": "1752791",
                  "BPContactNumber": "080 26700156 26703300 ",
                  "BPName": "1752791-HSR Layout",
                  "BPTime": "2018-05-01T22:20:00Z",
                  "BPLandmark": "Hanuman Statue And Opp To Indian Oil Petrol Bunk",
                  "BPLocation": "Hsr Layout  Agara",
                  "BPAddress": "Under Agra Fly Over Bridge hanuman stachu opp",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17779783",
                  "BPContactNumber": "080 26700156 26703300 ",
                  "BPName": "17779783-Koramangala",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "Near Signal",
                  "BPLocation": "Koramangala Krupa Nidhi College",
                  "BPAddress": "Near Krupa Nidhi College",
                  "BPCoordinates": "12.9199,77.6256895"
                 },
                 {
                  "BPId": "17934387",
                  "BPContactNumber": "080 26700156 26703300 ",
                  "BPName": "17934387-Madiwala",
                  "BPTime": "2018-05-01T22:40:00Z",
                  "BPLandmark": "Near Madivala Police Station",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": "Next to Petrol bunk",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17950783",
                  "BPContactNumber": "080 26700156 26703300 ",
                  "BPName": "17950783-Silk Board",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Aswath Hosital",
                  "BPLocation": "Silk Board end of fly over",
                  "BPAddress": "Silk Board end of the fly over",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17950816",
                  "BPContactNumber": "080 26700156 26703300",
                  "BPName": "17950816-Bommanahalli",
                  "BPTime": "2018-05-01T22:50:00Z",
                  "BPLandmark": "Next To Shell Petrol Pump",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "Bommanahalli,Sps Travels",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "1451073",
                  "BPContactNumber": "080 26700156 26703300 ",
                  "BPName": "1451073-Electronic City",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Near Ruchi Sagar Hotel",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Electronic City BMTC Bus Stand",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17954911",
                  "BPContactNumber": "080 26700156 26703300 ",
                  "BPName": "17954911-Hosur",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "Hosur",
                  "BPLocation": "Hosur",
                  "BPAddress": "Hosur",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Pillow,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "551",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "525.0",
                "adulttotalfare": "0",
                "servicetax": "26.25"
               },
               "dst_vendor_id": "102",
               "OperatorID": "8336",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": " 04442818342 9003194899 9840140236",
                  "DPName": "17971528-Sriperumbudur",
                  "DPId": "17971528",
                  "BPLandmark": "Sriperumbudur",
                  "BPAddress": "Sriperumbudur",
                  "DPLocation": "Sriperumbudur Bypass"
                 },
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": " 04442818342 9003194899 9840140236",
                  "DPName": "17954677-Poonamallee",
                  "DPId": "17954677",
                  "BPLandmark": "Poonamallee",
                  "BPAddress": "Poonamallee",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-03T04:50:00Z",
                  "BPContactNumber": " 04442818342 9003194899 9840140236",
                  "DPName": "17967491-Maduravoyal",
                  "DPId": "17967491",
                  "BPLandmark": "Maduraival",
                  "BPAddress": "maduraival",
                  "DPLocation": "Maduraival"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": " 04442818342 9003194899 9840140236",
                  "DPName": "17955069-Koyambedu",
                  "DPId": "17955069",
                  "BPLandmark": "Near Omini Bus Stand",
                  "BPAddress": "C/O Barathi Travels No E6 Sreeji Majestic Complex ",
                  "DPLocation": "Koyambedu"
                 },
                 {
                  "DPTime": "2018-05-03T05:10:00Z",
                  "BPContactNumber": " 04442818342 9003194899 9840140236",
                  "DPName": "1451114-Vadapalani",
                  "DPId": "1451114",
                  "BPLandmark": "Vadapalani",
                  "BPAddress": "Vadapalani",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-03T05:20:00Z",
                  "BPContactNumber": "04442818342 9003194899 9840140236",
                  "DPName": "1451112-Ashok Pillar",
                  "DPId": "1451112",
                  "BPLandmark": "Ashok Pillar",
                  "BPAddress": "Ashok Pillar",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-03T05:25:00Z",
                  "BPContactNumber": "04442818342 9003194899 9840140236",
                  "DPName": "17952383-Guindy",
                  "DPId": "17952383",
                  "BPLandmark": "Guindy",
                  "BPAddress": "Guindy",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "04442818342 9003194899 9840140236",
                  "DPName": "17951982-Adyar",
                  "DPId": "17951982",
                  "BPLandmark": "Near Evr Travels",
                  "BPAddress": "Evr Travels No.70 2Nd Avenue Indranagar Adayar",
                  "DPLocation": "Adyar"
                 },
                 {
                  "DPTime": "2018-05-03T05:35:00Z",
                  "BPContactNumber": "04442818342 9003194899 9840140236",
                  "DPName": "17950654-Thiruvanmiyur",
                  "DPId": "17950654",
                  "BPLandmark": "Thiurvanmiyur",
                  "BPAddress": "Thiurvanmiyur",
                  "DPLocation": "Thiurvanmiyur"
                 },
                 {
                  "DPTime": "2018-05-03T05:40:00Z",
                  "BPContactNumber": "04442818342 9003194899 9840140236",
                  "DPName": "17950582-Tidel Park",
                  "DPId": "17950582",
                  "BPLandmark": "Tidel Park",
                  "BPAddress": "Near Tidel Park CSIR Road Near Signal",
                  "DPLocation": "Tidel Park"
                 },
                 {
                  "DPTime": "2018-05-03T05:50:00Z",
                  "BPContactNumber": " 04442818342 9003194899 9840140236",
                  "DPName": "1451105-Perungudi",
                  "DPId": "1451105",
                  "BPLandmark": "In Front Of Life Line Hospital",
                  "BPAddress": "In Front Of Life Line Hospital Perungudi",
                  "DPLocation": "Perungudi"
                 },
                 {
                  "DPTime": "2018-05-03T06:00:00Z",
                  "BPContactNumber": "04442818342 9003194899 9840140236",
                  "DPName": "775743-Sholinganallur",
                  "DPId": "775743",
                  "BPLandmark": "In Fornt Of Sathya Bama University",
                  "BPAddress": "In Fornt Of Sathya Bama University Sholinganallur",
                  "DPLocation": "Sholinganallur"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "551",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 26,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "576",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 26,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "583",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 26,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "625",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 26,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:30:00Z",
               "idRequired": "false",
               "ServiceID": 1540933,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3.25,
                 "seats": 3.75,
                 "onBoardExperience": 3.25,
                 "onTimeAD": 3.25
                },
                "reviewCount": 4,
                "posReviewCount": 2,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 3.25,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2230-JabbarTravels-ACSleeper2+1"
               },
               "TravelsName": "Jabbar  Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771540933",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2230-JabbarTravels-ACSleeper2+1",
               "arrdate": "2018-05-02T05:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "0",
               "DepartureTime": "07:00",
               "cancellationPolicy": "0:24:100:0;24:-1:20:0",
               "avlWindowSeats": 28,
               "BusServiceID": "64117",
               "totalReviews": "0",
               "seat": "SLST",
               "duration": "7h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92sW0e384CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1400083",
                  "BPContactNumber": " 91-80-22384040 / 22384242 / 9902413397",
                  "BPName": "1400083-Race Course Road",
                  "BPTime": "2018-05-01T07:00:00Z",
                  "BPLandmark": "Madhavnagar-race course road opp congress office",
                  "BPLocation": "Race course road. Paulo travels office-08022384040",
                  "BPAddress": "2/1, Seagull House, Race Course Road, Opp. Congress Bhavan, Madhavnagar,Bangalore - 560001",
                  "BPCoordinates": "12.961553,77.615719"
                 },
                 {
                  "BPId": "1400082",
                  "BPContactNumber": "08022384040,08022384242",
                  "BPName": "1400082-Majestic",
                  "BPTime": "2018-05-01T07:15:00Z",
                  "BPLandmark": "Majiestic - hotel amar near vinayaka temple",
                  "BPLocation": "Majestic-hotel amar near ganesh temple ph no 08022384040",
                  "BPAddress": "Hotel Amar Bldg, Danvanthri Rd, Opp BMTC Bus Stop, Majestic, Bengaluru, Karnataka 560009,Ph no 08022384040, 08022384242 ",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "1430314",
                  "BPContactNumber": "08022384040,9902413397",
                  "BPName": "1430314-Madiwala",
                  "BPTime": "2018-05-01T08:00:00Z",
                  "BPLandmark": "Near bharat petrol pump",
                  "BPLocation": "Madiwala police station near bharat petrol pump",
                  "BPAddress": "Near Bharat Petrol pump, Madiwala police station, Madiwala Ph No 9902413397/08022384242",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "1400087",
                  "BPContactNumber": "08022384040",
                  "BPName": "1400087-Bommasandra",
                  "BPTime": "2018-05-01T08:10:00Z",
                  "BPLandmark": "Bommanahalli-opp skf factory ",
                  "BPLocation": "Bommasandra.opp skf factory-pavan travels ",
                  "BPAddress": "Bommasandra- Opp SKF Factory- Pavan Travels- 08022384040",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Fire Extinguisher,Blankets,Charging Point,Hammer (to break glass),Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "14:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "735",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "700.0",
                "adulttotalfare": "0",
                "servicetax": "35.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "11231",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T13:20:00Z",
                  "BPContactNumber": "",
                  "DPName": "17779163-Kanchipuram Bypass",
                  "DPId": "17779163",
                  "BPLandmark": "Kanchipuram byepass",
                  "BPAddress": "Kanchipuram byepass",
                  "DPLocation": "Kanchipuram byepass"
                 },
                 {
                  "DPTime": "2018-05-01T13:40:00Z",
                  "BPContactNumber": "",
                  "DPName": "17779166-Sriperumbudur",
                  "DPId": "17779166",
                  "BPLandmark": "Sriperumbudur toll gate",
                  "BPAddress": "Sriperumbudur toll gate",
                  "DPLocation": "Sriperumbudur toll gate"
                 },
                 {
                  "DPTime": "2018-05-01T13:50:00Z",
                  "BPContactNumber": "",
                  "DPName": "17779165-Poonamallee",
                  "DPId": "17779165",
                  "BPLandmark": "Poonamallee kfc by pass",
                  "BPAddress": "Poonamallee kfc by pass",
                  "DPLocation": "Poonamallee kfc by pass"
                 },
                 {
                  "DPTime": "2018-05-01T14:00:00Z",
                  "BPContactNumber": "",
                  "DPName": "17779162-Koyambedu",
                  "DPId": "17779162",
                  "BPLandmark": "Koyambedu",
                  "BPAddress": "Koyambedu",
                  "DPLocation": "Koyambedu"
                 },
                 {
                  "DPTime": "2018-05-01T14:00:00Z",
                  "BPContactNumber": "",
                  "DPName": "1400091-Koyambedu",
                  "DPId": "1400091",
                  "BPLandmark": "Koyembedu omni bus stand ",
                  "BPAddress": "Koyembedu omni bus stand ",
                  "DPLocation": "Koyembedu omni bus stand "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi Axle Sleeper/Seater (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "735",
                  "busCondition": "ac",
                  "seatType": "Seater/Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 44,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "840",
                  "busCondition": "ac",
                  "seatType": "Seater/Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 44,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T07:00:00Z",
               "idRequired": "false",
               "ServiceID": 1738212,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "TravelsName": "Paulo Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771738212",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-0700-PauloTravels-VolvoACMultiAxleSleeperSeater2+1",
               "arrdate": "2018-05-01T14:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.4",
               "DepartureTime": "10:15",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": 20,
               "BusServiceID": "SCH378E783G",
               "totalReviews": "6",
               "seat": "SL",
               "duration": "7h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92sXyu784SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17777824",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777824-Kalasipalyam",
                  "BPTime": "2018-05-01T10:15:00Z",
                  "BPLandmark": "OPP AYYAPPA TEMPLE",
                  "BPLocation": "Kalasipalayam",
                  "BPAddress": "Kalasipalayam  \nOPP AYYAPPA TEMPLE",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17781721",
                  "BPContactNumber": "8754418555",
                  "BPName": "17781721-Majestic",
                  "BPTime": "2018-05-01T10:30:00Z",
                  "BPLandmark": "OPP BMDC bus stand amar hotel",
                  "BPLocation": "Majestic",
                  "BPAddress": "OPP  BUS STAND",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17777830",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777830-Anand Rao Circle",
                  "BPTime": "2018-05-01T10:40:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "Tourist hotel  ",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17985353",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985353-Shanthinagar",
                  "BPTime": "2018-05-01T10:50:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Shanthi Nagar Bus Stop",
                  "BPAddress": "Shanthi Nagar Bus Stop\nNear reliance market.",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "18029000",
                  "BPContactNumber": " 8754418555",
                  "BPName": "18029000-Forum Mall",
                  "BPTime": "2018-05-01T11:00:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Forum Mall",
                  "BPAddress": "Near Indain oil petrol bunk",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17966274",
                  "BPContactNumber": "8754418555",
                  "BPName": "17966274-Madiwala",
                  "BPTime": "2018-05-01T11:10:00Z",
                  "BPLandmark": "SAVOURY BUSINESS HOTEL",
                  "BPLocation": "Madiwala ",
                  "BPAddress": "Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17985354",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985354-Madiwala",
                  "BPTime": "2018-05-01T11:20:00Z",
                  "BPLandmark": " Next to bharat petrol bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": "Police Station",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17777841",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777841-Silk Board",
                  "BPTime": "2018-05-01T11:30:00Z",
                  "BPLandmark": "Near RENAULT SHOWROOM / ISUZU SHOWROOM",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Near RENAULT SHOWROOM / ISUZU SHOWROOM",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17977444",
                  "BPContactNumber": "8754418555",
                  "BPName": "17977444-Bommanahalli",
                  "BPTime": "2018-05-01T11:35:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "Shell petrol bunk",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17973593",
                  "BPContactNumber": "8754418555",
                  "BPName": "17973593-Electronic City",
                  "BPTime": "2018-05-01T11:50:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Electronic City Bus Depot\nIn front pallavi Restaurant ",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17777842",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777842-Bommasandra",
                  "BPTime": "2018-05-01T12:00:00Z",
                  "BPLandmark": "SKF BEARING COMPANY NEAR KFC / BATA SHOWROOM",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "SKF BEARING COMPANY / NEAR KFC / BATA SHOWROOM",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17985356",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985356-Attibele",
                  "BPTime": "2018-05-01T12:15:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Attibele Toll",
                  "BPAddress": "Tollgate",
                  "BPCoordinates": "12.78,77.77"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Hammer (to break glass),Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "17:15",
               "zeroCancellationTime": 0,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "525",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "500.0",
                "adulttotalfare": "0",
                "servicetax": "25.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "16368",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T15:20:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17777828-Vellore Bypass",
                  "DPId": "17777828",
                  "BPLandmark": " ",
                  "BPAddress": "Vellore Bypass",
                  "DPLocation": "Vellore Bypass"
                 },
                 {
                  "DPTime": "2018-05-01T15:45:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17777815-Kanchipuram Bypass",
                  "DPId": "17777815",
                  "BPLandmark": "Near Anna Arch",
                  "BPAddress": "Anna Arch",
                  "DPLocation": "Kanchipuram "
                 },
                 {
                  "DPTime": "2018-05-01T16:15:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17777814-Sriperumbudur",
                  "DPId": "17777814",
                  "BPLandmark": " Near By Tollgate",
                  "BPAddress": "Sriperumbudur Toll Gate",
                  "DPLocation": "Sriperumbudur"
                 },
                 {
                  "DPTime": "2018-05-01T16:40:00Z",
                  "BPContactNumber": " 7338819222 / 7338819555",
                  "DPName": "17777813-Poonamallee",
                  "DPId": "17777813",
                  "BPLandmark": " ",
                  "BPAddress": "Poonamallee Bypass",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T16:55:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17976041-Maduravoyal",
                  "DPId": "17976041",
                  "BPLandmark": " ",
                  "BPAddress": "Maduravoyal Arikari Bus Stop",
                  "DPLocation": "Maduravoyal"
                 },
                 {
                  "DPTime": "2018-05-01T17:05:00Z",
                  "BPContactNumber": "7338819222/ 7338819555",
                  "DPName": "17777810-Koyambedu",
                  "DPId": "17777810",
                  "BPLandmark": " Near by Majestic complex, koyambedu",
                  "BPAddress": "Plot No: 06, E Road,\nOmni Bus Stand, Koyembedu, Chennai-2",
                  "DPLocation": "Koyambedu "
                 },
                 {
                  "DPTime": "2018-05-01T17:15:00Z",
                  "BPContactNumber": "7338819222 ",
                  "DPName": "17849596-Ashok Pillar",
                  "DPId": "17849596",
                  "BPLandmark": "METRO STATION",
                  "BPAddress": "METRO STATION",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-01T17:45:00Z",
                  "BPContactNumber": "7338819222",
                  "DPName": "17789559-Guindy",
                  "DPId": "17789559",
                  "BPLandmark": " ",
                  "BPAddress": "ITC GRAND CHOLA HOTEL",
                  "DPLocation": "Guindy ITC Hotel"
                 },
                 {
                  "DPTime": "2018-05-01T17:55:00Z",
                  "BPContactNumber": "7338819222",
                  "DPName": "17789557-Madhya Kailash",
                  "DPId": "17789557",
                  "BPLandmark": "Madhya Kailash Temple Back Side",
                  "BPAddress": "Bus Stop",
                  "DPLocation": "Madhya Kailash"
                 },
                 {
                  "DPTime": "2018-05-01T18:05:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17860753-Tharamani",
                  "DPId": "17860753",
                  "BPLandmark": " ",
                  "BPAddress": "Taramani Bus Stop",
                  "DPLocation": "Taramani"
                 },
                 {
                  "DPTime": "2018-05-01T18:15:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17831923-Velachery",
                  "DPId": "17831923",
                  "BPLandmark": " ",
                  "BPAddress": "Near Hot Chips",
                  "DPLocation": "Velacherry"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "525",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "577",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T10:15:00Z",
               "idRequired": "false",
               "ServiceID": 1741313,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "Sri gajapathy travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771741313",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1015-Srigajapathytravels-ACSleeper2+1",
               "arrdate": "2018-05-01T17:15:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.6",
               "DepartureTime": "22:35",
               "cancellationPolicy": "0:4:100:0;4:24:20:0;24:-1:10:0",
               "avlWindowSeats": 18,
               "BusServiceID": "262",
               "totalReviews": "272",
               "seat": "SL",
               "duration": "6h 25m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92sazu385SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1204391",
                  "BPContactNumber": "080-41440900,9740000900",
                  "BPName": "1204391-Kalasipalyam",
                  "BPTime": "2018-05-01T22:35:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Kalasipalayam",
                  "BPAddress": "#30, 2nd Main, Dispensary Road, \nNear Hotel City Tower, Kalasipalyam",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "1204392",
                  "BPContactNumber": "080-41159505,9686233909",
                  "BPName": "1204392-Madiwala",
                  "BPTime": "2018-05-01T23:05:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Madiwala",
                  "BPAddress": "40, old check post road, jogi colony, Hosur road, \nMadiwala, Bangalore",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17943635",
                  "BPContactNumber": "080-41159505,9686233909",
                  "BPName": "17943635-Silk Board",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Near Silk Board Bus Stop",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "1534987",
                  "BPContactNumber": "080-41159505,9686233909",
                  "BPName": "1534987-Electronic City",
                  "BPTime": "2018-05-01T23:20:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Near Veerasandra Toll Gate Opp.Audi Showroom",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Snacks,WIFI,Pillow,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "945",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "900.0",
                "adulttotalfare": "0",
                "servicetax": "45.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "6087",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T03:30:00Z",
                  "BPContactNumber": "044-24796523 / 24791279 / 9443312377",
                  "DPName": "539145-Kanchipuram",
                  "DPId": "539145",
                  "BPLandmark": "Meenakshi Medical College",
                  "BPAddress": "Meenakshi Medical College",
                  "DPLocation": "Kanchipuram"
                 },
                 {
                  "DPTime": "2018-05-03T03:45:00Z",
                  "BPContactNumber": "044-24796523 / 24791279 / 9443312377",
                  "DPName": "17943058-Sriperumbudur",
                  "DPId": "17943058",
                  "BPLandmark": "Rajeev Gandhi Memorial,\nSriperumbudur",
                  "BPAddress": "Rajeev Gandhi Memorial,\nSriperumbudur",
                  "DPLocation": "Sriperumbudur"
                 },
                 {
                  "DPTime": "2018-05-03T04:10:00Z",
                  "BPContactNumber": "044-24796523 / 24791279 / 9443312377",
                  "DPName": "17945846-Poonamallee",
                  "DPId": "17945846",
                  "BPLandmark": "Opp: Poonamallee Bus Stand",
                  "BPAddress": "Opp: Poonamallee Bus Stand",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-03T04:50:00Z",
                  "BPContactNumber": "9443312329 / 044-24792799",
                  "DPName": "1534974-Parcel Office",
                  "DPId": "1534974",
                  "BPLandmark": "#31,Poonamallee High Road,\nNear Sri DEVI Hospitals,\nOpp Rohini Theatre,\nKoyambedu",
                  "BPAddress": "#31,Poonamallee High Road,\nNear Sri DEVI Hospitals,\nOpp Rohini Theatre,\nKoyambedu",
                  "DPLocation": "Parcel Office"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "044-24796523 / 24791279 / 9443312377",
                  "DPName": "539274-Koyambedu",
                  "DPId": "539274",
                  "BPLandmark": "CMBT Govenment Bus Stand",
                  "BPAddress": "CMBT Govenment Bus Stand",
                  "DPLocation": "Koyambedu"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "9442101288",
                  "DPName": "17945841-Vellore Bypass",
                  "DPId": "17945841",
                  "BPLandmark": "3, Balaji Lodge, New Bypass, Vellore",
                  "BPAddress": "3, Balaji Lodge, New Bypass, Vellore",
                  "DPLocation": "Vellore"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Benz A/c Premium Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "945",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 27,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:35:00Z",
               "idRequired": "false",
               "ServiceID": 1775217,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4.8,
                 "seats": 4.8,
                 "onBoardExperience": 4.8,
                 "onTimeAD": 4.6
                },
                "reviewCount": 5,
                "posReviewCount": 5,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 4.8,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2235-Mettursuperservices-BenzAcPremiumSleeper2+1"
               },
               "TravelsName": "Mettur  super services",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771775217",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2235-Mettursuperservices-BenzAcPremiumSleeper2+1",
               "arrdate": "2018-05-02T05:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.0",
               "DepartureTime": "17:15",
               "cancellationPolicy": "0:24:100:0;24:72:50:0;72:168:25:0;168:-1:20:0",
               "avlWindowSeats": 14,
               "BusServiceID": "64",
               "totalReviews": "108",
               "seat": "SL",
               "duration": "6h 15m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wV0e784CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17975299",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17975299-Anand Rao Circle",
                  "BPTime": "2018-05-01T15:45:00Z",
                  "BPLandmark": "Axis Bank",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "opp to vrl bus stand pooja travels",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17975317",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17975317-Majestic",
                  "BPTime": "2018-05-01T15:45:00Z",
                  "BPLandmark": "Axis Bank",
                  "BPLocation": "Majestic",
                  "BPAddress": "opp to vrl bus stand pooja travels",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17917771",
                  "BPContactNumber": "9535172210 8197455791",
                  "BPName": "17917771-Shanthinagar",
                  "BPTime": "2018-05-01T16:15:00Z",
                  "BPLandmark": "Near Bmtc Bus Stand",
                  "BPLocation": "shanthinagar",
                  "BPAddress": "infront of reliance smart bmtc bus stand",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17978929",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17978929-Madiwala",
                  "BPTime": "2018-05-01T16:45:00Z",
                  "BPLandmark": "Madiwala Police Station Near Bharath Petrol Bunk",
                  "BPLocation": "Madiwala",
                  "BPAddress": "MADIWALA POLICE STATION NEAR BHARATH PETROL BUNK ",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17976240",
                  "BPContactNumber": "9535172210 8197455791",
                  "BPName": "17976240-Silk Board",
                  "BPTime": "2018-05-01T16:50:00Z",
                  "BPLandmark": "Renault Showroom",
                  "BPLocation": "Silk Board Bus Stop",
                  "BPAddress": "Silk Board Bus Stop ",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17917773",
                  "BPContactNumber": "9535172210 8197455791",
                  "BPName": "17917773-Electronic City",
                  "BPTime": "2018-05-01T17:05:00Z",
                  "BPLandmark": "Infront Off Audi Showroom",
                  "BPLocation": "electronic city",
                  "BPAddress": "flyover end",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "23:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "523",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "549.0",
                "adulttotalfare": "0",
                "servicetax": "27.45"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15324",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T22:45:00Z",
                  "BPContactNumber": "9962200099 9543455534",
                  "DPName": "17917774-Poonamallee",
                  "DPId": "17917774",
                  "BPLandmark": "Bye Pass",
                  "BPAddress": "Motel Highway,, Near Thirumazhisai Signal near KFC, MOTEL HIGH WAY",
                  "DPLocation": "Poonamalle Kfc Bye Pass"
                 },
                 {
                  "DPTime": "2018-05-01T23:00:00Z",
                  "BPContactNumber": "9962200099 9543455534",
                  "DPName": "17957558-Koyambedu",
                  "DPId": "17957558",
                  "BPLandmark": "Omni Bus Stand Near Royal Plaza Hotel Near Indion Oil Petrolem Bunk",
                  "BPAddress": "omni bus stand near royal plaza hotel",
                  "DPLocation": "Koyembedu"
                 },
                 {
                  "DPTime": "2018-05-01T23:15:00Z",
                  "BPContactNumber": "9962200099 9543455534",
                  "DPName": "17956364-Central Railway Station",
                  "DPId": "17956364",
                  "BPLandmark": "Bus Stand",
                  "BPAddress": "bus stand",
                  "DPLocation": "Central"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "523",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 20,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "576",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 20,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T17:15:00Z",
               "idRequired": "false",
               "ServiceID": 1828312,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "Vastavika tours and travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771828312",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-1715-Vastavikatoursandtravels-ACSleeper2+1",
               "arrdate": "2018-05-01T23:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "2.9",
               "DepartureTime": "23:55",
               "cancellationPolicy": "0:24:100:0;24:72:50:0;72:168:25:0;168:-1:20:0",
               "avlWindowSeats": 15,
               "BusServiceID": "63",
               "totalReviews": "88",
               "seat": "SL",
               "duration": "6h 20m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wV0e784SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17960346",
                  "BPContactNumber": "9535172210 8197455791",
                  "BPName": "17960346-Kalasipalyam",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Kalasipalayam",
                  "BPLocation": "Kalasipalayam",
                  "BPAddress": "Kalasipalayam",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17917777",
                  "BPContactNumber": "9535172210 9740689815",
                  "BPName": "17917777-Indiranagar",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Opp To Bda Complex",
                  "BPLocation": "indiranagar (Pickup Van/Bus)",
                  "BPAddress": "opp to indian oil petrol bunk towards tin factory",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17917778",
                  "BPContactNumber": "9535172210 9740689815",
                  "BPName": "17917778-Tin Factory",
                  "BPTime": "2018-05-01T23:35:00Z",
                  "BPLandmark": "Bus Stand",
                  "BPLocation": "tinfactory (Pickup Van/Bus)",
                  "BPAddress": "near bus stand fly over entrance",
                  "BPCoordinates": "12.9972686,77.66959010000005"
                 },
                 {
                  "BPId": "17975317",
                  "BPContactNumber": "9535172210 9740689815",
                  "BPName": "17975317-Majestic",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "Axis Bank",
                  "BPLocation": "Majestic",
                  "BPAddress": "opp to vrl bus stand pooja travels",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17975299",
                  "BPContactNumber": "9535172210 9740689815",
                  "BPName": "17975299-Anand Rao Circle",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "Axis Bank",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "opp to vrl bus stand pooja travels",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17917771",
                  "BPContactNumber": "9535172210 9740689815",
                  "BPName": "17917771-Shanthinagar",
                  "BPTime": "2018-05-01T23:50:00Z",
                  "BPLandmark": "Near Bmtc Bus Stand",
                  "BPLocation": "shanthinagar",
                  "BPAddress": "infront of reliance smart bmtc bus stand",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17977871",
                  "BPContactNumber": "9535172210 9740689815",
                  "BPName": "17977871-Marathahalli",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "Kalamandir Bus Stop Towards Silk Board Road",
                  "BPLocation": "Marathalli (Pickup Van/Bus)",
                  "BPAddress": "Kalamandir Bus Stop towards silk board road ",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "17977892",
                  "BPContactNumber": "9535172210 9740689815",
                  "BPName": "17977892-Bellandur",
                  "BPTime": "2018-05-02T00:00:00Z",
                  "BPLandmark": "Opp To Coffee Cafe Day",
                  "BPLocation": "Bellandur (Pickup Van/Bus)",
                  "BPAddress": "fly over end towards silk board",
                  "BPCoordinates": "12.92,77.67"
                 },
                 {
                  "BPId": "17978929",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17978929-Madiwala",
                  "BPTime": "2018-05-02T00:14:00Z",
                  "BPLandmark": "Madiwala Police Station Near Bharath Petrol Bunk",
                  "BPLocation": "Madiwala",
                  "BPAddress": "MADIWALA POLICE STATION NEAR BHARATH PETROL BUNK ",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17976240",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17976240-Silk Board",
                  "BPTime": "2018-05-02T00:20:00Z",
                  "BPLandmark": "Renault Showroom",
                  "BPLocation": "Silk Board Bus Stop",
                  "BPAddress": "Silk Board Bus Stop towards hosur",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17917779",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17917779-Bommanahalli",
                  "BPTime": "2018-05-02T00:25:00Z",
                  "BPLandmark": "Opp To Shell Petrol Bunk Towards Hosur",
                  "BPLocation": "bommanahalli",
                  "BPAddress": "infront off kpn travels",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17917773",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17917773-Electronic City",
                  "BPTime": "2018-05-02T00:35:00Z",
                  "BPLandmark": "Infront Off Audi Showroom",
                  "BPLocation": "electronic city",
                  "BPAddress": "flyover end",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "NA",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "06:15",
               "zeroCancellationTime": 0,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1048",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "999.0",
                "adulttotalfare": "0",
                "servicetax": "49.95"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15324",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T05:55:00Z",
                  "BPContactNumber": "9962200099 9543455534",
                  "DPName": "17917774-Poonamallee",
                  "DPId": "17917774",
                  "BPLandmark": "Bye Pass",
                  "BPAddress": "Motel Highway,, Near Thirumazhisai Signal near KFC, MOTEL HIGH WAY",
                  "DPLocation": "Poonamalle Kfc Bye Pass"
                 },
                 {
                  "DPTime": "2018-05-03T06:05:00Z",
                  "BPContactNumber": "9962200099 9543455534",
                  "DPName": "17920355-Maduravoyal",
                  "DPId": "17920355",
                  "BPLandmark": "Maduravel Bye Pass",
                  "BPAddress": "Maduravel Bye Pass",
                  "DPLocation": "Maduravel"
                 },
                 {
                  "DPTime": "2018-05-03T06:15:00Z",
                  "BPContactNumber": "9962200099 9543455534",
                  "DPName": "17957558-Koyambedu",
                  "DPId": "17957558",
                  "BPLandmark": "Omni Bus Stand Near Royal Plaza Hotel Near Indion Oil Petrolem Bunk",
                  "BPAddress": "omni bus stand near royal plaza hotel",
                  "DPLocation": "Koyembedu"
                 },
                 {
                  "DPTime": "2018-05-03T06:30:00Z",
                  "BPContactNumber": "9962200099 9543455534",
                  "DPName": "17956364-Central Railway Station",
                  "DPId": "17956364",
                  "BPLandmark": "Bus Stand",
                  "BPAddress": "bus stand",
                  "DPLocation": "Central"
                 },
                 {
                  "DPTime": "2018-05-03T06:40:00Z",
                  "BPContactNumber": "9962200099 9543455534",
                  "DPName": "17920501-Guindy",
                  "DPId": "17920501",
                  "BPLandmark": "Olympia Tech Main",
                  "BPAddress": "Olympia Tech Main",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-03T06:45:00Z",
                  "BPContactNumber": "9035990189 ",
                  "DPName": "17920504-Tidel Park",
                  "DPId": "17920504",
                  "BPLandmark": "Near Signal",
                  "BPAddress": "Near Signal",
                  "DPLocation": "tidel park"
                 },
                 {
                  "DPTime": "2018-05-03T06:50:00Z",
                  "BPContactNumber": "9962200099 9543455534",
                  "DPName": "17953866-Thiruvanmiyur",
                  "DPId": "17953866",
                  "BPLandmark": "Near Agarwal Hospital L B Road",
                  "BPAddress": "Near Agarwal Hospital L B Road",
                  "DPLocation": "Thiruvanmiyur"
                 },
                 {
                  "DPTime": "2018-05-03T06:55:00Z",
                  "BPContactNumber": "9962200099 9543455534",
                  "DPName": "17920507-SRP Tools",
                  "DPId": "17920507",
                  "BPLandmark": "Srp Toll Bus Stand",
                  "BPAddress": "SRP TOLL BUS STAND",
                  "DPLocation": "Srp Toll Bus Stand Near Singnal"
                 },
                 {
                  "DPTime": "2018-05-03T07:00:00Z",
                  "BPContactNumber": "9962200099 9543455534",
                  "DPName": "17920518-Velachery",
                  "DPId": "17920518",
                  "BPLandmark": "Hot Chips",
                  "BPAddress": "opp hot chips near Indian Bank Atm, baby nager bus stop",
                  "DPLocation": "Velacherry"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1048",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 23,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:55:00Z",
               "idRequired": "false",
               "ServiceID": 1828313,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4,
                 "seats": 4,
                 "onBoardExperience": 4,
                 "onTimeAD": 4
                },
                "reviewCount": 1,
                "posReviewCount": 1,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 4,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2355-Vastavikatoursandtravels-ACSleeper2+1"
               },
               "TravelsName": "Vastavika tours and travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771828313",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-2355-Vastavikatoursandtravels-ACSleeper2+1",
               "arrdate": "2018-05-02T06:15:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "0",
               "DepartureTime": "10:30",
               "cancellationPolicy": "0:3:90:0;3:4:60:0;4:12:30:0;12:-1:15:0",
               "avlWindowSeats": 0,
               "BusServiceID": "4165",
               "totalReviews": "0",
               "seat": "SL",
               "duration": "6h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wV0e__3iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17974338",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17974338-Majestic",
                  "BPTime": "2018-05-01T09:15:00Z",
                  "BPLandmark": "Opp KSRTC Bus Stand",
                  "BPLocation": "Majestic",
                  "BPAddress": "Infront of Mayura Hotel,No 32,Tank Bund Road,",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17974340",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17974340-Shanthinagar",
                  "BPTime": "2018-05-01T09:30:00Z",
                  "BPLandmark": "In-Front Of Reliance Market",
                  "BPLocation": "Shanthi Nagar",
                  "BPAddress": "Shanthi Nagar Bus Stand In-Front Of Reliance Market",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17973723",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17973723-Madiwala",
                  "BPTime": "2018-05-01T10:30:00Z",
                  "BPLandmark": "Opp to Bajaj Showroom",
                  "BPLocation": "Madiwala",
                  "BPAddress": "No 06 Hosur Main Road Near Ayyappaswamy Temple",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17974093",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17974093-Silk Board",
                  "BPTime": "2018-05-01T10:40:00Z",
                  "BPLandmark": "Near AS-WAD Hospital",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Silk Board Bridge Ted-End",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17974360",
                  "BPContactNumber": "9901999118,080-42112796/044-49007555",
                  "BPName": "17974360-Bommanahalli",
                  "BPTime": "2018-05-01T10:45:00Z",
                  "BPLandmark": "Flyover",
                  "BPLocation": "Bommanahalli Flyover",
                  "BPAddress": "Bommanahalli Flyover",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17974361",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17974361-Electronic City",
                  "BPTime": "2018-05-01T10:55:00Z",
                  "BPLandmark": "Near Tollgate",
                  "BPLocation": "Electronic City TollGate",
                  "BPAddress": "Infront of Audi Service Centre",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17974363",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17974363-Bommasandra",
                  "BPTime": "2018-05-01T11:05:00Z",
                  "BPLandmark": "Bommasandra",
                  "BPLocation": "Bommasandra Pavan Tours and Travels",
                  "BPAddress": "Bommasandra",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "NA",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "17:00",
               "zeroCancellationTime": 0,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "840",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "800.0",
                "adulttotalfare": "0",
                "servicetax": "40.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "9032",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T16:45:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17974376-Poonamallee",
                  "DPId": "17974376",
                  "BPLandmark": "Near Nazarthpettai Signal.",
                  "BPAddress": "Sri Motel Highway",
                  "DPLocation": "Poonamallee -Sri Motel Highway"
                 },
                 {
                  "DPTime": "2018-05-01T17:00:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17974366-Koyambedu",
                  "DPId": "17974366",
                  "BPLandmark": "Near Koyembedu Fly-Over Bridge",
                  "BPAddress": "No.37, School Street, Next to Vijayakanth Kalyanamandapam,",
                  "DPLocation": "Koyembedu New Parveen Terminus"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Premium Deccan Auto A/c Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "840",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 0,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T10:30:00Z",
               "idRequired": "false",
               "ServiceID": 1828440,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "Parveen Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771828440",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1030-ParveenTravels-PremiumDeccanAutoAcSleeper2+1",
               "arrdate": "2018-05-01T17:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "0",
               "DepartureTime": "23:55",
               "cancellationPolicy": "0:3:90:0;3:4:60:0;4:12:30:0;12:-1:15:0",
               "avlWindowSeats": 0,
               "BusServiceID": "4167",
               "totalReviews": "0",
               "seat": "SL",
               "duration": "5h 5m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wV0e8C5iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17974412",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17974412-Majestic",
                  "BPTime": "2018-05-01T21:40:00Z",
                  "BPLandmark": "Opp KSRTC Bus Stand",
                  "BPLocation": "Majestic",
                  "BPAddress": "Infront of Mayura Hotel,No 32,Tank Bund Road,",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17974424",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17974424-Shanthinagar",
                  "BPTime": "2018-05-01T22:05:00Z",
                  "BPLandmark": "In-Front Of Reliance Market",
                  "BPLocation": "Shanthi Nagar",
                  "BPAddress": "Shanthi Nagar Bus Stand In-Front Of Reliance Market",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17974868",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17974868-Silk Board",
                  "BPTime": "2018-05-01T23:05:00Z",
                  "BPLandmark": "Near AS-WAD Hospital",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Silk Board Bridge Ted-End",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17974877",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17974877-Bommanahalli",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Next To Shell Petrol Bunk",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "24, Shop No :03,Next  To Shell  Petrol Bunk",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17974887",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17974887-Electronic City",
                  "BPTime": "2018-05-01T23:25:00Z",
                  "BPLandmark": "Near BMTC Bus Stand",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Infront Of Season Hotel  and Ruchi Sagar Hotel",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17974890",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17974890-Bommasandra",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Bommasandra",
                  "BPLocation": "Bommasandra Pavan Tours and Travels",
                  "BPAddress": "Bommasandra",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17974398",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17974398-Madiwala",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "Opp to Bajaj Showroom",
                  "BPLocation": "Madiwala",
                  "BPAddress": "No 06 Hosur Main Road Near Ayyappaswamy Temple",
                  "BPCoordinates": "12.929,77.6141393"
                 }
                ]
               },
               "amenities": "NA",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:00",
               "zeroCancellationTime": 0,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "945",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "900.0",
                "adulttotalfare": "0",
                "servicetax": "45.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "9032",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17974905-Poonamallee",
                  "DPId": "17974905",
                  "BPLandmark": "Near Nazarthpettai Signal.",
                  "BPAddress": "Sri Motel Highway",
                  "DPLocation": "Poonamallee -Sri Motel Highway"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17974922-Koyambedu",
                  "DPId": "17974922",
                  "BPLandmark": "Near Koyembedu Fly-Over Bridge",
                  "BPAddress": "No.37, School Street, Next to Vijayakanth Kalyanamandapam,",
                  "DPLocation": "Koyembedu New Parveen Terminus"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Premium Deccan Auto A/c Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "945",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 0,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:55:00Z",
               "idRequired": "false",
               "ServiceID": 1828478,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "Parveen Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771828478",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2355-ParveenTravels-PremiumDeccanAutoAcSleeper2+1",
               "arrdate": "2018-05-02T05:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.4",
               "DepartureTime": "20:30",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": 19,
               "BusServiceID": "SCH3A891482J",
               "totalReviews": "19",
               "seat": "SL",
               "duration": "8h 5m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92sa0vD73iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17777824",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777824-Kalasipalyam",
                  "BPTime": "2018-05-01T20:30:00Z",
                  "BPLandmark": "OPP AYYAPPA TEMPLE",
                  "BPLocation": "Kalasipalayam",
                  "BPAddress": "Kalasipalayam  \nOPP AYYAPPA TEMPLE",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17781721",
                  "BPContactNumber": "8754418555",
                  "BPName": "17781721-Majestic",
                  "BPTime": "2018-05-01T20:40:00Z",
                  "BPLandmark": "OPP BMDC bus stand amar hotel",
                  "BPLocation": "Majestic",
                  "BPAddress": "OPP  BUS STAND",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17777830",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777830-Anand Rao Circle",
                  "BPTime": "2018-05-01T20:45:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "Tourist hotel  ",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17985353",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985353-Shanthinagar",
                  "BPTime": "2018-05-01T20:50:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Shanthi Nagar Bus Stop",
                  "BPAddress": "Shanthi Nagar Bus Stop\nNear reliance market.",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17966274",
                  "BPContactNumber": "8754418555",
                  "BPName": "17966274-Madiwala",
                  "BPTime": "2018-05-01T21:10:00Z",
                  "BPLandmark": "SAVOURY BUSINESS HOTEL",
                  "BPLocation": "Madiwala ",
                  "BPAddress": "Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17985354",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985354-Madiwala",
                  "BPTime": "2018-05-01T21:20:00Z",
                  "BPLandmark": " Next to bharat petrol bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": "Police Station",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17777841",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777841-Silk Board",
                  "BPTime": "2018-05-01T21:30:00Z",
                  "BPLandmark": "Near RENAULT SHOWROOM / ISUZU SHOWROOM",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Near RENAULT SHOWROOM / ISUZU SHOWROOM",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17985355",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985355-Bommanahalli",
                  "BPTime": "2018-05-01T21:35:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "Bus Stop",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17973593",
                  "BPContactNumber": "8754418555",
                  "BPName": "17973593-Electronic City",
                  "BPTime": "2018-05-01T21:40:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Electronic City Bus Depot\nIn front pallavi Restaurant ",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17777842",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777842-Bommasandra",
                  "BPTime": "2018-05-01T21:45:00Z",
                  "BPLandmark": "SKF BEARING COMPANY NEAR KFC / BATA SHOWROOM",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "SKF BEARING COMPANY / NEAR KFC / BATA SHOWROOM",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17985356",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985356-Attibele",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Attibele Toll",
                  "BPAddress": "Tollgate",
                  "BPCoordinates": "12.78,77.77"
                 },
                 {
                  "BPId": "17977231",
                  "BPContactNumber": "8754418555",
                  "BPName": "17977231-Hosur",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Hosur",
                  "BPAddress": "Meenakashi bhavan Hotel",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "04:35",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "577",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "550.0",
                "adulttotalfare": "0",
                "servicetax": "27.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "16368",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T01:30:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17777828-Vellore Bypass",
                  "DPId": "17777828",
                  "BPLandmark": " ",
                  "BPAddress": "Vellore Bypass",
                  "DPLocation": "Vellore Bypass"
                 },
                 {
                  "DPTime": "2018-05-03T02:35:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17777815-Kanchipuram Bypass",
                  "DPId": "17777815",
                  "BPLandmark": "Near Anna Arch",
                  "BPAddress": "Anna Arch",
                  "DPLocation": "Kanchipuram "
                 },
                 {
                  "DPTime": "2018-05-03T03:20:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17777814-Sriperumbudur",
                  "DPId": "17777814",
                  "BPLandmark": " Near By Tollgate",
                  "BPAddress": "Sriperumbudur Toll Gate",
                  "DPLocation": "Sriperumbudur"
                 },
                 {
                  "DPTime": "2018-05-03T03:50:00Z",
                  "BPContactNumber": " 7338819222 / 7338819555",
                  "DPName": "17777813-Poonamallee",
                  "DPId": "17777813",
                  "BPLandmark": " ",
                  "BPAddress": "Poonamallee Bypass",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-03T04:00:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17972196-Velappanchavadi Bus Stop",
                  "DPId": "17972196",
                  "BPLandmark": " Gajapathy Petrol bunk",
                  "BPAddress": "#52 B, Poonamallee Road, Velappanchavadi, Chennai- 77",
                  "DPLocation": "Velappanchavadi"
                 },
                 {
                  "DPTime": "2018-05-03T04:15:00Z",
                  "BPContactNumber": "7338819222/ 7338819555",
                  "DPName": "17777810-Koyambedu",
                  "DPId": "17777810",
                  "BPLandmark": " Near by Majestic complex, koyambedu",
                  "BPAddress": "Plot No: 06, E Road,\nOmni Bus Stand, Koyembedu, Chennai-2",
                  "DPLocation": "Koyambedu "
                 },
                 {
                  "DPTime": "2018-05-03T04:25:00Z",
                  "BPContactNumber": "7338819222 ",
                  "DPName": "17849596-Ashok Pillar",
                  "DPId": "17849596",
                  "BPLandmark": "METRO STATION",
                  "BPAddress": "METRO STATION",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-03T04:35:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17781142-Guindy",
                  "DPId": "17781142",
                  "BPLandmark": "Near Sangeetha Restaurants",
                  "BPAddress": "Next To HP Petrol Pump - Perys Agencies",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "7338819222",
                  "DPName": "17789557-Madhya Kailash",
                  "DPId": "17789557",
                  "BPLandmark": "Madhya Kailash Temple Back Side",
                  "BPAddress": "Bus Stop",
                  "DPLocation": "Madhya Kailash"
                 },
                 {
                  "DPTime": "2018-05-03T04:55:00Z",
                  "BPContactNumber": "7338819222",
                  "DPName": "17953706-Tidel Park",
                  "DPId": "17953706",
                  "BPLandmark": " ",
                  "BPAddress": "Bus Stop",
                  "DPLocation": "TIDEL Park"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "7338819222",
                  "DPName": "17969989-Velachery",
                  "DPId": "17969989",
                  "BPLandmark": " Near Hot Chips",
                  "BPAddress": "HOT CHIPS",
                  "DPLocation": "Velachery"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "577",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 30,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T20:30:00Z",
               "idRequired": "false",
               "ServiceID": 1779500,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "Sri gajapathy travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771779500",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2030-Srigajapathytravels-ACSleeper2+1",
               "arrdate": "2018-05-02T04:35:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.2",
               "DepartureTime": "23:20",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": 24,
               "BusServiceID": "SCH3A852553F",
               "totalReviews": "206",
               "seat": "ST",
               "duration": "6h 40m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92sa0vD73yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17777824",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777824-Kalasipalyam",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "OPP AYYAPPA TEMPLE",
                  "BPLocation": "Kalasipalayam",
                  "BPAddress": "Kalasipalayam  \nOPP AYYAPPA TEMPLE",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17781721",
                  "BPContactNumber": "8754418555",
                  "BPName": "17781721-Majestic",
                  "BPTime": "2018-05-01T22:50:00Z",
                  "BPLandmark": "OPP BMDC bus stand amar hotel",
                  "BPLocation": "Majestic",
                  "BPAddress": "OPP  BUS STAND",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17777830",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777830-Anand Rao Circle",
                  "BPTime": "2018-05-01T22:55:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "Tourist hotel  ",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17985353",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985353-Shanthinagar",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Shanthi Nagar Bus Stop",
                  "BPAddress": "Shanthi Nagar Bus Stop\nNear reliance market.",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17966274",
                  "BPContactNumber": "8754418555",
                  "BPName": "17966274-Madiwala",
                  "BPTime": "2018-05-01T23:20:00Z",
                  "BPLandmark": "SAVOURY BUSINESS HOTEL",
                  "BPLocation": "Madiwala ",
                  "BPAddress": "Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17985354",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985354-Madiwala",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": " Next to bharat petrol bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": "Police Station",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17777841",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777841-Silk Board",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "Near RENAULT SHOWROOM / ISUZU SHOWROOM",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Near RENAULT SHOWROOM / ISUZU SHOWROOM",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17977444",
                  "BPContactNumber": "8754418555",
                  "BPName": "17977444-Bommanahalli",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "Shell petrol bunk",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17973593",
                  "BPContactNumber": "8754418555",
                  "BPName": "17973593-Electronic City",
                  "BPTime": "2018-05-01T23:50:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Electronic City Bus Depot\nIn front pallavi Restaurant ",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17985356",
                  "BPContactNumber": "8754418555",
                  "BPName": "17985356-Attibele",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Attibele Toll",
                  "BPAddress": "Tollgate",
                  "BPCoordinates": "12.78,77.77"
                 },
                 {
                  "BPId": "17777842",
                  "BPContactNumber": "8754418555",
                  "BPName": "17777842-Bommasandra",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "SKF BEARING COMPANY NEAR KFC / BATA SHOWROOM",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "SKF BEARING COMPANY / NEAR KFC / BATA SHOWROOM",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Hammer (to break glass),Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "06:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "525",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "500.0",
                "adulttotalfare": "0",
                "servicetax": "25.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "16368",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:00:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17777828-Vellore Bypass",
                  "DPId": "17777828",
                  "BPLandmark": " ",
                  "BPAddress": "Vellore Bypass",
                  "DPLocation": "Vellore Bypass"
                 },
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17777815-Kanchipuram Bypass",
                  "DPId": "17777815",
                  "BPLandmark": "Near Anna Arch",
                  "BPAddress": "Anna Arch",
                  "DPLocation": "Kanchipuram "
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17777814-Sriperumbudur",
                  "DPId": "17777814",
                  "BPLandmark": " Near By Tollgate",
                  "BPAddress": "Sriperumbudur Toll Gate",
                  "DPLocation": "Sriperumbudur"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "7338819222/ 7338819555",
                  "DPName": "17869322-Poonamallee",
                  "DPId": "17869322",
                  "BPLandmark": " ",
                  "BPAddress": "Bus Stop",
                  "DPLocation": "Sundar Theatre (Poonamallee)"
                 },
                 {
                  "DPTime": "2018-05-03T05:20:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17972196-Velappanchavadi Bus Stop",
                  "DPId": "17972196",
                  "BPLandmark": " Gajapathy Petrol bunk",
                  "BPAddress": "#52 B, Poonamallee Road, Velappanchavadi, Chennai- 77",
                  "DPLocation": "Velappanchavadi"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "7338819222/ 7338819555",
                  "DPName": "17777810-Koyambedu",
                  "DPId": "17777810",
                  "BPLandmark": " Near by Majestic complex, koyambedu",
                  "BPAddress": "Plot No: 06, E Road,\nOmni Bus Stand, Koyembedu, Chennai-2",
                  "DPLocation": "Koyambedu "
                 },
                 {
                  "DPTime": "2018-05-03T05:35:00Z",
                  "BPContactNumber": "7338819222 / 7338819555",
                  "DPName": "17971589-Vadapalani",
                  "DPId": "17971589",
                  "BPLandmark": " ",
                  "BPAddress": "Bus Stop",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-03T05:45:00Z",
                  "BPContactNumber": "9841176173 / 7338819222",
                  "DPName": "17783205-T Nagar",
                  "DPId": "17783205",
                  "BPLandmark": "  Monica Travels",
                  "BPAddress": "Monica Travels, #38/11, Burkit Road, T.Nagar, Chennai-17",
                  "DPLocation": "T.Nagar"
                 },
                 {
                  "DPTime": "2018-05-03T05:50:00Z",
                  "BPContactNumber": "7338819222",
                  "DPName": "17784285-Anna Nagar",
                  "DPId": "17784285",
                  "BPLandmark": "Anna bridge Mount road",
                  "BPAddress": "Anna bridge Mount road",
                  "DPLocation": "  Mount road"
                 },
                 {
                  "DPTime": "2018-05-03T06:00:00Z",
                  "BPContactNumber": "7338819222",
                  "DPName": "17783216-Central Railway Station",
                  "DPId": "17783216",
                  "BPLandmark": "opp central railway station",
                  "BPAddress": "CENTRAL OPP GOLDEN TOWER \nNEAR THE ROYAL REGENCY\n",
                  "DPLocation": "Central railway station"
                 },
                 {
                  "DPTime": "2018-05-03T06:05:00Z",
                  "BPContactNumber": "9500169911 / 7338819222 ",
                  "DPName": "17959798-Egmore",
                  "DPId": "17959798",
                  "BPLandmark": " Opp Albert Theatre. Near Park hotel.",
                  "BPAddress": " Opp Albert Theatre. Near Park hotel.",
                  "DPLocation": "Egmore( Van Pickup )"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi-Axle Semisleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "525",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 49,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:20:00Z",
               "idRequired": "false",
               "ServiceID": 1779501,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "TravelsName": "Sri gajapathy travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771779501",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2320-Srigajapathytravels-VolvoACMulti-AxleSemisleeper2+2",
               "arrdate": "2018-05-02T06:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.6",
               "DepartureTime": "13:30",
               "cancellationPolicy": "0:3:100:0;3:24:25:0;24:-1:15:0",
               "avlWindowSeats": 21,
               "BusServiceID": "1955",
               "totalReviews": "70",
               "seat": "ST",
               "duration": "6h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9mgXzvL74CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17936566",
                  "BPContactNumber": "080-29999999,26709912",
                  "BPName": "17936566-Kalasipalyam",
                  "BPTime": "2018-05-01T13:00:00Z",
                  "BPLandmark": "Opp City Market Bus stand",
                  "BPLocation": "KALASIPALAYAM(KPN)",
                  "BPAddress": "A.V.Road, Kalasipalayam,Bangalore.",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "77840",
                  "BPContactNumber": "080-22107192,22107193",
                  "BPName": "77840-Wilson Garden",
                  "BPTime": "2018-05-01T13:15:00Z",
                  "BPLandmark": "NEAR BMTC BUS STAND",
                  "BPLocation": "WILSON GARDEN(KPN)",
                  "BPAddress": "No 24/3,H.Siddaiah Road,Double Road,Bangalore.",
                  "BPCoordinates": "12.9481933,77.59718650000002"
                 },
                 {
                  "BPId": "17936431",
                  "BPContactNumber": "080-25525699,25526055",
                  "BPName": "17936431-Madiwala",
                  "BPTime": "2018-05-01T13:45:00Z",
                  "BPLandmark": "Opp Mas Residency, Hosur Main Road",
                  "BPLocation": "MADIWALA(KPN)",
                  "BPAddress": "Madiwala,Koramangala,Bangalore.",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "1049694",
                  "BPContactNumber": "080-42150124,9148903539",
                  "BPName": "1049694-Bommasandra",
                  "BPTime": "2018-05-01T14:00:00Z",
                  "BPLandmark": "Mangutha timper building",
                  "BPLocation": "BOMMACHANDRA(KPN)",
                  "BPAddress": "First cross,Vidya Nager,Opp SKF,Hosur main road",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Movie,Fire Extinguisher,Blankets,Charging Point,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "20:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1050",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1000.0",
                "adulttotalfare": "0",
                "servicetax": "50.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "102",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T20:00:00Z",
                  "BPContactNumber": "",
                  "DPName": "53066-Chennai",
                  "DPId": "53066",
                  "BPLandmark": "Chennai",
                  "BPAddress": "Chennai",
                  "DPLocation": "Chennai"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi Axle Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1050",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 42,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T13:30:00Z",
               "idRequired": "false",
               "ServiceID": 445702,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "staffBehaviour": 3,
                 "busQuality": 2,
                 "onBoardExperience": 1.67,
                 "onTimeAD": 1.67,
                 "acQuality": 3,
                 "stopOverExperience": 1.67,
                 "seats": 1.33,
                 "seater": 3,
                 "punctuality": 3
                },
                "reviewCount": 3,
                "posReviewCount": 0,
                "criReviewCount": 2,
                "imgReviewCount": 0,
                "totalRating": 1.67,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1330-KPN-VolvoACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "K.P.N",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770445702",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1330-KPN-VolvoACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T20:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.0",
               "DepartureTime": "11:30",
               "cancellationPolicy": "0:8:100:0;8:24:50:0;24:48:25:0;48:-1:10:0",
               "avlWindowSeats": 19,
               "BusServiceID": "925",
               "totalReviews": "282",
               "seat": "ST",
               "duration": "5h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9mwc0fAC5yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17933788",
                  "BPContactNumber": "9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "17933788-Kalasipalyam",
                  "BPTime": "2018-05-01T09:30:00Z",
                  "BPLandmark": "Tsp Road Kalasipalyam",
                  "BPLocation": "Kalasipalayam",
                  "BPAddress": "tsp road kalasipalyam",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17944706",
                  "BPContactNumber": "9845735601-080-41511237-080-4123839-080-41740261",
                  "BPName": "17944706-Majestic",
                  "BPTime": "2018-05-01T10:15:00Z",
                  "BPLandmark": "Opp Krstc And Bmtc Next To Hotel Sanman Shop No 2 And 3",
                  "BPLocation": "Majestic National Opp Bmtc Bus Stand",
                  "BPAddress": "National Travels, Opp Krstc And Bmtc Next To Hotel Sanman Shop No 2 And 3 ",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17937164",
                  "BPContactNumber": "9845735601--080-41511237-080-4123839-080-41740261",
                  "BPName": "17937164-Anand Rao Circle",
                  "BPTime": "2018-05-01T10:20:00Z",
                  "BPLandmark": "Next To Hotel Rajmahal",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "32, Hotel Suprabhata Building, 8th Main, Sheshadri Road, A R C",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17933861",
                  "BPContactNumber": "9845735601-080-41511237-080-4123839-080-41740261",
                  "BPName": "17933861-Double Road",
                  "BPTime": "2018-05-01T10:45:00Z",
                  "BPLandmark": "Reliance Marcket",
                  "BPLocation": "Double Road   8892222548",
                  "BPAddress": "reliance marcket next to srs and kpn trvels",
                  "BPCoordinates": "12.961,77.634"
                 },
                 {
                  "BPId": "17933880",
                  "BPContactNumber": " 9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "17933880-Madiwala",
                  "BPTime": "2018-05-01T11:25:00Z",
                  "BPLandmark": "Madiwala Police Station Next To Bharat Petrol Bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": "Madiwala Police station next to bharat petrol bunk",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17951267",
                  "BPContactNumber": "9845735601-080-41511237-080-4123839-080-41740261",
                  "BPName": "17951267-Silk Board",
                  "BPTime": "2018-05-01T11:30:00Z",
                  "BPLandmark": "Near Flyover Ending Silk Bord Bus Stop  Aswad  Hospital",
                  "BPLocation": "Silk Board 1",
                  "BPAddress": "silk bord end of the fly over  towards  hosur  road  ",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "237179",
                  "BPContactNumber": "9845735601-080-41511237-080-4123839-080-41740261",
                  "BPName": "237179-Electronic City",
                  "BPTime": "2018-05-01T11:45:00Z",
                  "BPLandmark": "Near Audi Service Toll Plaza ( On Fly Over Toll Gate)",
                  "BPLocation": "Electronic City Audi Service Toll",
                  "BPAddress": "Near Audi Service toll plaza (on fly over toll gate )",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17950772",
                  "BPContactNumber": "9845735601 080-41511237 080-41740261",
                  "BPName": "17950772-Bommasandra",
                  "BPTime": "2018-05-01T11:50:00Z",
                  "BPLandmark": "Near Bus Stand A2b Anand Bhavan Opposit Kallada Travels",
                  "BPLocation": "Bommasandra Kallada Travels",
                  "BPAddress": "Main Road Bommasandra kallada travels",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17949297",
                  "BPContactNumber": "9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "17949297-Attibele",
                  "BPTime": "2018-05-01T12:00:00Z",
                  "BPLandmark": "Near Attibele Toll Gate Hosur Road",
                  "BPLocation": "Attibele Tollgate  8892222548",
                  "BPAddress": "Near Attibele Toll Gate Hosur Road",
                  "BPCoordinates": "12.78,77.77"
                 },
                 {
                  "BPId": "17958960",
                  "BPContactNumber": "9845735601--080 41511237-080-41213839-080-41740261",
                  "BPName": "17958960-Hosur",
                  "BPTime": "2018-05-01T12:15:00Z",
                  "BPLandmark": "Opp  Govt Bus Stand",
                  "BPLocation": "Hosur",
                  "BPAddress": "Opp  Govt Bus stand",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Hammer (to break glass),Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "17:15",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "539",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "530.0",
                "adulttotalfare": "0",
                "servicetax": "0.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "2323",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T13:15:00Z",
                  "BPContactNumber": "022 28313300",
                  "DPName": "17794404-Krishnagiri",
                  "DPId": "17794404",
                  "BPLandmark": "Near Bus Stop",
                  "BPAddress": "Near Bus Stop",
                  "DPLocation": "Krishnagiri"
                 },
                 {
                  "DPTime": "2018-05-01T15:30:00Z",
                  "BPContactNumber": "7358545026 9384655551",
                  "DPName": "17944671-Vellore Bypass",
                  "DPId": "17944671",
                  "BPLandmark": "Vellore Bye Pass",
                  "BPAddress": "Vellore Bye pass ",
                  "DPLocation": "Vellore Highway"
                 },
                 {
                  "DPTime": "2018-05-01T16:00:00Z",
                  "BPContactNumber": "07358545026  09444888354",
                  "DPName": "17947889-Kanchipuram",
                  "DPId": "17947889",
                  "BPLandmark": "Bus Depot Entrance",
                  "BPAddress": "Bus depot Entrance",
                  "DPLocation": "Kanchipuram"
                 },
                 {
                  "DPTime": "2018-05-01T16:15:00Z",
                  "BPContactNumber": "7358545026 9384655551",
                  "DPName": "17934589-Sriperumbudur",
                  "DPId": "17934589",
                  "BPLandmark": "Near Bus Stop",
                  "BPAddress": "Near Bus Stop",
                  "DPLocation": "Sri Perumbabhur Tollgate National"
                 },
                 {
                  "DPTime": "2018-05-01T16:30:00Z",
                  "BPContactNumber": "7358545026  9384655551",
                  "DPName": "369982-Poonamallee",
                  "DPId": "369982",
                  "BPLandmark": "Near Bus Stand",
                  "BPAddress": "Near Bus Stand",
                  "DPLocation": "Poonamalai"
                 },
                 {
                  "DPTime": "2018-05-01T16:45:00Z",
                  "BPContactNumber": "7358545026 9384655551",
                  "DPName": "17934491-Maduravoyal",
                  "DPId": "17934491",
                  "BPLandmark": "Poonamalai High Road",
                  "BPAddress": "m j r university college ",
                  "DPLocation": "Maduraival  National"
                 },
                 {
                  "DPTime": "2018-05-01T17:15:00Z",
                  "BPContactNumber": "7358545026-9384655551-8248349700-7358545026-8754463222",
                  "DPName": "17934402-Koyambedu",
                  "DPId": "17934402",
                  "BPLandmark": "Near Chennai  Delux Hotel",
                  "BPAddress": "koyambedu  Market Opposit National Travels  ground floor, Koyembedu Market",
                  "DPLocation": "Koyambedu National"
                 },
                 {
                  "DPTime": "2018-05-01T17:25:00Z",
                  "BPContactNumber": "7358545026  9384655551 8248349700",
                  "DPName": "17947410-Vadapalani",
                  "DPId": "17947410",
                  "BPLandmark": "Near Bus Stand",
                  "BPAddress": "near Bus Stop",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-01T17:35:00Z",
                  "BPContactNumber": "7358545026 9384655551",
                  "DPName": "17947396-Ashok Pillar",
                  "DPId": "17947396",
                  "BPLandmark": "Near Bus Stop",
                  "BPAddress": "nera Bus Stop",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-01T17:45:00Z",
                  "BPContactNumber": "7358545026 9384655551",
                  "DPName": "17947400-Guindy",
                  "DPId": "17947400",
                  "BPLandmark": "Guindy",
                  "BPAddress": "Guindy",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-01T17:50:00Z",
                  "BPContactNumber": "7358545026 7358545027",
                  "DPName": "17953771-Meenambakkam Airport",
                  "DPId": "17953771",
                  "BPLandmark": "Domestic Airport Departure Entrance Gate",
                  "BPAddress": "Domestic Airport departure entrance gate",
                  "DPLocation": "Airport"
                 },
                 {
                  "DPTime": "2018-05-01T18:00:00Z",
                  "BPContactNumber": "7358545026 7358545027",
                  "DPName": "1547324-Pallavaram",
                  "DPId": "1547324",
                  "BPLandmark": "Bharath Petrol Bunk, Opp to Pallavaram Bus Stand",
                  "BPAddress": "Bharath Petrol Bunk, Opp to Pallavaram Bus Stand",
                  "DPLocation": "Pallavaram"
                 },
                 {
                  "DPTime": "2018-05-01T18:05:00Z",
                  "BPContactNumber": "7358545026 7358545027",
                  "DPName": "1547323-Chrompet",
                  "DPId": "1547323",
                  "BPLandmark": "Infront Of Adayar Anantha Bhavan , Opp to Saravana store.",
                  "BPAddress": "Infront Of Adayar Anantha Bhavan , Opp to Saravana store.",
                  "DPLocation": "Chrompet"
                 },
                 {
                  "DPTime": "2018-05-01T18:15:00Z",
                  "BPContactNumber": "7358545026 7358545027",
                  "DPName": "1629538-Tambaram",
                  "DPId": "1629538",
                  "BPLandmark": "Tamparam Bus Stop , Opp To Railway Station Entrance",
                  "BPAddress": "Tamparam bus stop , Opp to railway station entrance",
                  "DPLocation": "Tambaram"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi-Axle Semisleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "539",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 39,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T11:30:00Z",
               "idRequired": "false",
               "ServiceID": 898579,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4,
                 "seats": 4,
                 "onBoardExperience": 4,
                 "onTimeAD": 4
                },
                "reviewCount": 2,
                "posReviewCount": 2,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 4,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1130-Nationaltravels-VolvoACMulti-AxleSemisleeper2+2"
               },
               "TravelsName": "National  travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770898579",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1130-Nationaltravels-VolvoACMulti-AxleSemisleeper2+2",
               "arrdate": "2018-05-01T17:15:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.0",
               "DepartureTime": "21:45",
               "cancellationPolicy": "0:8:100:0;8:24:50:0;24:48:25:0;48:-1:10:0",
               "avlWindowSeats": 16,
               "BusServiceID": "241",
               "totalReviews": "1370",
               "seat": "ST",
               "duration": "6h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92oU0u374SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17938040",
                  "BPContactNumber": "080 26703300 26700156 9494599794",
                  "BPName": "17938040-Kalasipalyam",
                  "BPTime": "2018-05-01T21:30:00Z",
                  "BPLandmark": "Tsp Road",
                  "BPLocation": "Kalasipalyam",
                  "BPAddress": "Opp Jabbar Travels",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17944752",
                  "BPContactNumber": "08041315343 08026703300 9494599794",
                  "BPName": "17944752-Majestic",
                  "BPTime": "2018-05-01T21:55:00Z",
                  "BPLandmark": "Mayura Hotel Opp Mejestic Bus Stand",
                  "BPLocation": "Majestic High5 Holidays",
                  "BPAddress": " # 18, hotel mayura complex tank band road, opp mejestic bus stand",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17846123",
                  "BPContactNumber": "080 26700156 26703300",
                  "BPName": "17846123-Anand Rao Circle",
                  "BPTime": "2018-05-01T22:05:00Z",
                  "BPLandmark": "Race Course Road",
                  "BPLocation": "Anand Rao Circle(Race Course Road)",
                  "BPAddress": "Infront of old  Janatha Dal Office and new congress bhavan",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17705723",
                  "BPContactNumber": "08026700156  26703300 9494599794",
                  "BPName": "17705723-Ulsoor",
                  "BPTime": "2018-05-01T22:20:00Z",
                  "BPLandmark": "Ulsoor",
                  "BPLocation": "Ulsoor",
                  "BPAddress": "Near Millenia building and philips  building",
                  "BPCoordinates": "12.9817147,77.62855850000005"
                 },
                 {
                  "BPId": "1451069",
                  "BPContactNumber": "080 26703300 26700156 9494599794",
                  "BPName": "1451069-Indiranagar",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "Behind Punjab National Bank",
                  "BPLocation": "Indira Nagar",
                  "BPAddress": "In front of Indian Oil Petrol Bunk",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17951232",
                  "BPContactNumber": "08026700156  26703300 9494599794",
                  "BPName": "17951232-Baiyappanahalli Metro Station",
                  "BPTime": "2018-05-01T22:35:00Z",
                  "BPLandmark": "Baiyappanahalli Metro Station Bus Stop",
                  "BPLocation": "Baiyappanahalli Metro Station",
                  "BPAddress": "Baiyappanahalli Metro Station bus stop",
                  "BPCoordinates": "12.9907481,77.65245619999996"
                 },
                 {
                  "BPId": "1451070",
                  "BPContactNumber": "080 26703300 26700156  9494599794",
                  "BPName": "1451070-Tin Factory",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Bus Stand",
                  "BPLocation": "Tin Factory",
                  "BPAddress": "Near mariyamma temple",
                  "BPCoordinates": "12.9972686,77.66959010000005"
                 },
                 {
                  "BPId": "17950720",
                  "BPContactNumber": "08026700156  26703300 9494599794",
                  "BPName": "17950720-KR.PURAM",
                  "BPTime": "2018-05-01T22:50:00Z",
                  "BPLandmark": "K R Puram Railway Station",
                  "BPLocation": "K R Puram Railway Station",
                  "BPAddress": "K R Puram Railway Station",
                  "BPCoordinates": "13.004016,77.6877764999"
                 },
                 {
                  "BPId": "1451071",
                  "BPContactNumber": "080 26703300 26700156 9494599794",
                  "BPName": "1451071-Marathahalli",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Near Kalamandir",
                  "BPLocation": "Marthahalli",
                  "BPAddress": "infront of kalamandir",
                  "BPCoordinates": "12.9511982,77.6997663"
                 },
                 {
                  "BPId": "775614",
                  "BPContactNumber": "080 26703300 26700156 9494599794",
                  "BPName": "775614-Bellandur",
                  "BPTime": "2018-05-01T23:10:00Z",
                  "BPLandmark": "Towards Hsr Layout",
                  "BPLocation": "Bellandur",
                  "BPAddress": "Near coffee day",
                  "BPCoordinates": "12.92,77.67"
                 },
                 {
                  "BPId": "1752791",
                  "BPContactNumber": "080 26703300 26700156 9494599794",
                  "BPName": "1752791-HSR Layout",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Hanuman Statue And Opp To Indian Oil Petrol Bunk",
                  "BPLocation": "Hsr Layout  Agara",
                  "BPAddress": "Under Agra Fly Over Bridge hanuman stachu opp",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17934387",
                  "BPContactNumber": "080 26703300 26700156 9494599794",
                  "BPName": "17934387-Madiwala",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Near Madivala Police Station",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": "Next to Petrol bunk",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17950783",
                  "BPContactNumber": "080 26703300 080 26700156  9494599794",
                  "BPName": "17950783-Silk Board",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "Aswath Hosital",
                  "BPLocation": "Silk Board end of fly over",
                  "BPAddress": "Silk Board end of the fly over",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17950816",
                  "BPContactNumber": "080 26703300 26700156 9494599794",
                  "BPName": "17950816-Bommanahalli",
                  "BPTime": "2018-05-01T23:50:00Z",
                  "BPLandmark": "Next To Shell Petrol Pump",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "Bommanahalli,Sps Travels",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "1451073",
                  "BPContactNumber": "080 26703300 26700156 9494599794",
                  "BPName": "1451073-Electronic City",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "Near Ruchi Sagar Hotel",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Electronic City BMTC Bus Stand",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17947993",
                  "BPContactNumber": "080 26703300 26700156 9494599794",
                  "BPName": "17947993-Attibele",
                  "BPTime": "2018-05-01T23:57:00Z",
                  "BPLandmark": "Attibele Tollgate",
                  "BPLocation": "Attibele TollGate",
                  "BPAddress": "Attibele TollGate",
                  "BPCoordinates": "12.78,77.77"
                 },
                 {
                  "BPId": "17954911",
                  "BPContactNumber": " 080 26703300 26700156 9494599794",
                  "BPName": "17954911-Hosur",
                  "BPTime": "2018-05-01T23:59:00Z",
                  "BPLandmark": "Hosur",
                  "BPLocation": "Hosur",
                  "BPAddress": " Hosur",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Movie,Water Bottle,Blankets,Charging Point,Music/MP3,Emergency exit,Emergency Contact Number,Central TV,Fire Extinguisher,Reclining seat,Reading Light,Snacks,Hammer (to break glass),Facial Tissues,WIFI",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "04:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "471",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "449.0",
                "adulttotalfare": "0",
                "servicetax": "22.45"
               },
               "dst_vendor_id": "102",
               "OperatorID": "8336",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T03:00:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17967030-Vellore Bypass",
                  "DPId": "17967030",
                  "BPLandmark": "Vellore",
                  "BPAddress": "Vellore",
                  "DPLocation": "Vellore Highway"
                 },
                 {
                  "DPTime": "2018-05-03T04:00:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17966428-Sriperumbudur",
                  "DPId": "17966428",
                  "BPLandmark": "Sriperumbudur Toll Gate",
                  "BPAddress": "Sriperumbudur Toll Gate",
                  "DPLocation": "Sriperumbudur Toll Gate"
                 },
                 {
                  "DPTime": "2018-05-03T04:15:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17954677-Poonamallee",
                  "DPId": "17954677",
                  "BPLandmark": "Poonamallee",
                  "BPAddress": "Poonamallee",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-03T04:25:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17967491-Maduravoyal",
                  "DPId": "17967491",
                  "BPLandmark": "Maduraival",
                  "BPAddress": "MADURAIVAL",
                  "DPLocation": "Maduraival"
                 },
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17955069-Koyambedu",
                  "DPId": "17955069",
                  "BPLandmark": "Near Omini Bus Stand",
                  "BPAddress": "C/OMUSKAN Travels  Sreeji Majestic Complex ",
                  "DPLocation": "Koyambedu"
                 },
                 {
                  "DPTime": "2018-05-03T04:40:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "1451114-Vadapalani",
                  "DPId": "1451114",
                  "BPLandmark": "Vadapalani",
                  "BPAddress": "Vadapalani",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "1451112-Ashok Pillar",
                  "DPId": "1451112",
                  "BPLandmark": "Ashok Pillar",
                  "BPAddress": "Ashok Pillar",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-03T04:55:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17970080-Guindy",
                  "DPId": "17970080",
                  "BPLandmark": "Olympia Tech Park",
                  "BPAddress": "olympia tech park",
                  "DPLocation": "Guindy Olympia"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17970500-Adyar",
                  "DPId": "17970500",
                  "BPLandmark": "Adyar Cancer Institute",
                  "BPAddress": "Adyar Cancer Institute ",
                  "DPLocation": "Adyar Cancer Institute "
                 },
                 {
                  "DPTime": "2018-05-03T05:10:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17970901-Madhya Kailash",
                  "DPId": "17970901",
                  "BPLandmark": "Madhya Kailash",
                  "BPAddress": "madhya kailash",
                  "DPLocation": "madhya kailash"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17950654-Thiruvanmiyur",
                  "DPId": "17950654",
                  "BPLandmark": "Thiurvanmiyur",
                  "BPAddress": "Thiurvanmiyur",
                  "DPLocation": "Thiurvanmiyur"
                 },
                 {
                  "DPTime": "2018-05-03T05:20:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17950582-Tidel Park",
                  "DPId": "17950582",
                  "BPLandmark": "Tidel Park",
                  "BPAddress": "Near Tidel Park CSIR Road Near Signal",
                  "DPLocation": "Tidel Park"
                 },
                 {
                  "DPTime": "2018-05-03T05:25:00Z",
                  "BPContactNumber": "9094804013",
                  "DPName": "17949844-SRP Tools",
                  "DPId": "17949844",
                  "BPLandmark": "Srp Tools",
                  "BPAddress": "SRP Tools",
                  "DPLocation": "SRP Tools"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "1667762-Velachery",
                  "DPId": "1667762",
                  "BPLandmark": "Opp To Bsnl Office",
                  "BPAddress": "Hot Chips Baby Nagar Opp To  Bsnl Office",
                  "DPLocation": "Velachery"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi Axle Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "471",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 37,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T21:45:00Z",
               "idRequired": "false",
               "ServiceID": 1619203,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "TravelsName": "Jabbar  Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771619203",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2145-JabbarTravels-VolvoACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-02T04:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.1",
               "DepartureTime": "11:00",
               "cancellationPolicy": "0:8:100:0;8:24:50:0;24:48:25:0;48:-1:10:0",
               "avlWindowSeats": 17,
               "BusServiceID": "240",
               "totalReviews": "553",
               "seat": "ST",
               "duration": "7h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92oU0u7_4iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17938040",
                  "BPContactNumber": "080  26700156   9494599794",
                  "BPName": "17938040-Kalasipalyam",
                  "BPTime": "2018-05-01T11:00:00Z",
                  "BPLandmark": "Tsp Road",
                  "BPLocation": "Kalasipalyam",
                  "BPAddress": "Opp Jabbar Travels",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17944752",
                  "BPContactNumber": " 080 26700156  9494599794",
                  "BPName": "17944752-Majestic",
                  "BPTime": "2018-05-01T11:30:00Z",
                  "BPLandmark": "Mayura Hotel Opp Mejestic Bus Stand",
                  "BPLocation": "Majestic High5 Holidays",
                  "BPAddress": " # 18, hotel mayura complex tank band road, opp mejestic bus stand",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17937821",
                  "BPContactNumber": "080  26700156   9494599794",
                  "BPName": "17937821-Anand Rao Circle",
                  "BPTime": "2018-05-01T11:40:00Z",
                  "BPLandmark": "Race Course Road",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "In front of  Janatha Dal Office",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "1684200",
                  "BPContactNumber": "080  26700156    9494599794",
                  "BPName": "1684200-Shanthinagar",
                  "BPTime": "2018-05-01T11:55:00Z",
                  "BPLandmark": "Next To Srs Travels",
                  "BPLocation": "Double Road  Shanthi Nagar",
                  "BPAddress": "Near Reliance Marketing",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17934377",
                  "BPContactNumber": "080 26703300 26700156  9494599794",
                  "BPName": "17934377-Koramangala",
                  "BPTime": "2018-05-01T12:35:00Z",
                  "BPLandmark": "Agarwal Eye Hospital",
                  "BPLocation": "Koramangala",
                  "BPAddress": "Near water tank  signal",
                  "BPCoordinates": "12.9199,77.6256895"
                 },
                 {
                  "BPId": "17934387",
                  "BPContactNumber": "080 26703300 26700156 9494599794",
                  "BPName": "17934387-Madiwala",
                  "BPTime": "2018-05-01T12:45:00Z",
                  "BPLandmark": "Near Madivala Police Station",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": "Next to Petrol bunk",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17950783",
                  "BPContactNumber": "080 26700156  9494599794",
                  "BPName": "17950783-Silk Board",
                  "BPTime": "2018-05-01T12:50:00Z",
                  "BPLandmark": "Aswath Hosital",
                  "BPLocation": "Silk Board end of fly over",
                  "BPAddress": "Silk Board end of the fly over",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17932449",
                  "BPContactNumber": "080 26700156 9494599794",
                  "BPName": "17932449-Electronic City",
                  "BPTime": "2018-05-01T12:55:00Z",
                  "BPLandmark": "Opp Toll Gate",
                  "BPLocation": " Electronic City Toll Gate ",
                  "BPAddress": " Near Audi Showroom ",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17966466",
                  "BPContactNumber": "080 26700156 9494599794",
                  "BPName": "17966466-Bommasandra",
                  "BPTime": "2018-05-01T13:00:00Z",
                  "BPLandmark": "Bommasandra",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "Opp to A2B  anand bhavan",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17947993",
                  "BPContactNumber": "080  26700156 9494599794",
                  "BPName": "17947993-Attibele",
                  "BPTime": "2018-05-01T13:05:00Z",
                  "BPLandmark": "Attibele Tollgate",
                  "BPLocation": "Attibele TollGate",
                  "BPAddress": "Attibele TollGate",
                  "BPCoordinates": "12.78,77.77"
                 },
                 {
                  "BPId": "17954911",
                  "BPContactNumber": "080  26700156 9494599794",
                  "BPName": "17954911-Hosur",
                  "BPTime": "2018-05-01T13:30:00Z",
                  "BPLandmark": "Hosur",
                  "BPLocation": "Hosur",
                  "BPAddress": "Hosur",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Hammer (to break glass),WIFI",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "18:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "466",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "444.0",
                "adulttotalfare": "0",
                "servicetax": "22.2"
               },
               "dst_vendor_id": "102",
               "OperatorID": "8336",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T16:30:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17967030-Vellore Bypass",
                  "DPId": "17967030",
                  "BPLandmark": "Vellore",
                  "BPAddress": "Vellore",
                  "DPLocation": "Vellore Highway"
                 },
                 {
                  "DPTime": "2018-05-01T17:15:00Z",
                  "BPContactNumber": "934444550",
                  "DPName": "1398787-Kanchipuram Bypass",
                  "DPId": "1398787",
                  "BPLandmark": "Near Shakthi Ganapati Hotel White Green",
                  "BPAddress": "Near Shakthi Ganapati hotel White green",
                  "DPLocation": "Kancheepuram byepass"
                 },
                 {
                  "DPTime": "2018-05-01T18:00:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17966428-Sriperumbudur",
                  "DPId": "17966428",
                  "BPLandmark": "Sriperumbudur Toll Gate",
                  "BPAddress": "Sriperumbudur Toll Gate",
                  "DPLocation": "Sriperumbudur Toll Gate"
                 },
                 {
                  "DPTime": "2018-05-01T18:30:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17954677-Poonamallee",
                  "DPId": "17954677",
                  "BPLandmark": "Poonamallee",
                  "BPAddress": "Poonamallee",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T18:40:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17967491-Maduravoyal",
                  "DPId": "17967491",
                  "BPLandmark": "Maduraival",
                  "BPAddress": "maduraival",
                  "DPLocation": "Maduraival"
                 },
                 {
                  "DPTime": "2018-05-01T19:00:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17955069-Koyambedu",
                  "DPId": "17955069",
                  "BPLandmark": "Near Omini Bus Stand",
                  "BPAddress": "C/O muskan  Travels  Sreeji Majestic Complex ",
                  "DPLocation": "Koyambedu"
                 },
                 {
                  "DPTime": "2018-05-01T19:10:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "1451114-Vadapalani",
                  "DPId": "1451114",
                  "BPLandmark": "Vadapalani",
                  "BPAddress": "Vadapalani",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-01T19:15:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "1451112-Ashok Pillar",
                  "DPId": "1451112",
                  "BPLandmark": "Ashok Pillar",
                  "BPAddress": "Ashok Pillar",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-01T19:30:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17970080-Guindy",
                  "DPId": "17970080",
                  "BPLandmark": "Olympia Tech Park",
                  "BPAddress": "olympia tech park",
                  "DPLocation": "Guindy Olympia"
                 },
                 {
                  "DPTime": "2018-05-01T19:40:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17970500-Adyar",
                  "DPId": "17970500",
                  "BPLandmark": "Adyar Cancer Institute",
                  "BPAddress": "Adyar Cancer Institute ",
                  "DPLocation": "Adyar Cancer Institute "
                 },
                 {
                  "DPTime": "2018-05-01T19:45:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17970901-Madhya Kailash",
                  "DPId": "17970901",
                  "BPLandmark": "Madhya Kailash",
                  "BPAddress": "madhya kailash",
                  "DPLocation": "madhya kailash"
                 },
                 {
                  "DPTime": "2018-05-01T19:55:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17950582-Tidel Park",
                  "DPId": "17950582",
                  "BPLandmark": "Tidel Park",
                  "BPAddress": "Near Tidel Park CSIR Road Near Signal",
                  "DPLocation": "Tidel Park"
                 },
                 {
                  "DPTime": "2018-05-01T20:00:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17950654-Thiruvanmiyur",
                  "DPId": "17950654",
                  "BPLandmark": "Thiurvanmiyur",
                  "BPAddress": "Thiurvanmiyur",
                  "DPLocation": "Thiurvanmiyur"
                 },
                 {
                  "DPTime": "2018-05-01T20:10:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "17949844-SRP Tools",
                  "DPId": "17949844",
                  "BPLandmark": "Srp Tools",
                  "BPAddress": "SRP Tools",
                  "DPLocation": "SRP Tools"
                 },
                 {
                  "DPTime": "2018-05-01T20:15:00Z",
                  "BPContactNumber": "04442818342 9282401333 9840140236",
                  "DPName": "1667762-Velachery",
                  "DPId": "1667762",
                  "BPLandmark": "Opp To Bsnl Office",
                  "BPAddress": "Hot Chips Baby Nagar Opp To  Bsnl Office",
                  "DPLocation": "Velachery"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi Axle Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "466",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 37,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T11:00:00Z",
               "idRequired": "false",
               "ServiceID": 1619344,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 2,
                 "seats": 3,
                 "onBoardExperience": 1,
                 "onTimeAD": 1
                },
                "reviewCount": 1,
                "posReviewCount": 0,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 1,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1100-JabbarTravels-VolvoACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Jabbar  Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771619344",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1100-JabbarTravels-VolvoACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T18:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.2",
               "DepartureTime": "13:00",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 12,
               "BusServiceID": "SCHHABCBZ7",
               "totalReviews": "281",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92oVy_QD5iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17752826",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "17752826-Madiwala",
                  "BPTime": "2018-05-01T13:00:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17752830",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17752830-Silk Board",
                  "BPTime": "2018-05-01T13:15:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17752834",
                  "BPContactNumber": "7550244433,7847845455",
                  "BPName": "17752834-Electronic City",
                  "BPTime": "2018-05-01T13:25:00Z",
                  "BPLandmark": "Near Audi Service ",
                  "BPLocation": "Electronic City Toll Plaza",
                  "BPAddress": "TOLL PLAZA,ON FLY OVER",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "19:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "546",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "520.0",
                "adulttotalfare": "0",
                "servicetax": "26.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T18:20:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17970683-Sriperumbudur",
                  "DPId": "17970683",
                  "BPLandmark": "TOLL PLAZA",
                  "BPAddress": "Sri Perumbudur",
                  "DPLocation": "Sri Perumbudur Toll"
                 },
                 {
                  "DPTime": "2018-05-01T18:45:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17977357-Poonamallee",
                  "DPId": "17977357",
                  "BPLandmark": "Near KFC Poonamallee",
                  "BPAddress": "Motel Highway,",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T19:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17977043-Koyambedu",
                  "DPId": "17977043",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "546",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 29,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T13:00:00Z",
               "idRequired": "false",
               "ServiceID": 1622988,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4,
                 "seats": 2.5,
                 "onBoardExperience": 4,
                 "onTimeAD": 4
                },
                "reviewCount": 2,
                "posReviewCount": 1,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 3,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1300-HebronTransports-VolvoACSemiSleeper2+2"
               },
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771622988",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1300-HebronTransports-VolvoACSemiSleeper2+2",
               "arrdate": "2018-05-01T19:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.6",
               "DepartureTime": "04:25",
               "cancellationPolicy": "0:6:100:0;6:12:50:0;12:24:25:0;24:-1:10:0",
               "avlWindowSeats": 16,
               "BusServiceID": "109",
               "totalReviews": "315",
               "seat": "ST",
               "duration": "5h 20m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92scy-8B4iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1549828",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "1549828-Marathahalli",
                  "BPTime": "2018-05-01T04:00:00Z",
                  "BPLandmark": "Infornt Of Kalamundhir Showroom",
                  "BPLocation": "Marathahalli",
                  "BPAddress": "Infront of Kalamundhir showroom, Marathahalli ring road junction",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "17780245",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17780245-Bellandur",
                  "BPTime": "2018-05-01T04:10:00Z",
                  "BPLandmark": "Opp To Coffee Day, Near Tvs Indian Showroom",
                  "BPLocation": "Bellandur",
                  "BPAddress": "Opp to Coffee Day, Near TVS Indian Showroom",
                  "BPCoordinates": "12.92,77.67"
                 },
                 {
                  "BPId": "17780244",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17780244-HSR Layout",
                  "BPTime": "2018-05-01T04:15:00Z",
                  "BPLandmark": "Infont Of Kebab Magic, Masti Square, Outer Ring Road",
                  "BPLocation": "Hsr Layout",
                  "BPAddress": "Infont of Kebab Magic, Masti Square, Outer Ring Road",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17933816",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933816-Madiwala",
                  "BPTime": "2018-05-01T04:25:00Z",
                  "BPLandmark": "Next To Citi Bank Atm, Beside Savoury Hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "ASIAN XPRESS Office, Next to CITI Bank ATM",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17933856",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933856-Silk Board",
                  "BPTime": "2018-05-01T04:35:00Z",
                  "BPLandmark": "Silk Board Bridge End",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Near Fly Over ",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17943823",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17943823-Electronic City",
                  "BPTime": "2018-05-01T04:50:00Z",
                  "BPLandmark": "Infront Of Seasons Restaurant",
                  "BPLocation": "Electronics City",
                  "BPAddress": "Infront of Seasons Restaurant",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17933957",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933957-Bommasandra",
                  "BPTime": "2018-05-01T05:00:00Z",
                  "BPLandmark": "Opp To Skf Factory Flyover.",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "Opp to SKF Factory Flyover",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Movie,Water Bottle,Blankets,Charging Point,Emergency exit,Emergency Contact Number,Central TV,Fire Extinguisher,Reclining seat,Reading Light,Hammer (to break glass),CCTV,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "09:45",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "577",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "550.0",
                "adulttotalfare": "0",
                "servicetax": "27.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "11182",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T09:00:00Z",
                  "BPContactNumber": "+919710748123",
                  "DPName": "17934025-Sriperumbudur",
                  "DPId": "17934025",
                  "BPLandmark": "Near Sri Perumbudur Arch, Opp To Rajiv Gandhi Memorial",
                  "BPAddress": "Near Sri Perumbudur Arch, Opp to Rajiv Gandhi Memorial",
                  "DPLocation": "Sri Perumbudur"
                 },
                 {
                  "DPTime": "2018-05-01T09:30:00Z",
                  "BPContactNumber": "+919710748123",
                  "DPName": "17934041-Poonamallee",
                  "DPId": "17934041",
                  "BPLandmark": "Near Motel Highway",
                  "BPAddress": "Poonamalli Byepass, Infront of KFC",
                  "DPLocation": "Poonamalli"
                 },
                 {
                  "DPTime": "2018-05-01T09:50:00Z",
                  "BPContactNumber": "+919710748123",
                  "DPName": "1553189-Porur",
                  "DPId": "1553189",
                  "BPLandmark": "After Porur Flyover, Infront Of Syndicate Bank",
                  "BPAddress": "After Porur Flyover, Infront of Syndicate Bank",
                  "DPLocation": "Porur"
                 },
                 {
                  "DPTime": "2018-05-01T10:00:00Z",
                  "BPContactNumber": "+91-97107-48123",
                  "DPName": "17850607-DLF IT Park",
                  "DPId": "17850607",
                  "BPLandmark": "Dlf It Park Ramapuram",
                  "BPAddress": "DLF IT PARK Ramapuram",
                  "DPLocation": "Dlf It Park Ramapuram"
                 },
                 {
                  "DPTime": "2018-05-01T10:15:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17934069-Guindy",
                  "DPId": "17934069",
                  "BPLandmark": "Guindy",
                  "BPAddress": "Guindy",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-01T10:20:00Z",
                  "BPContactNumber": "+91-97107-48123",
                  "DPName": "17850609-Saidapet",
                  "DPId": "17850609",
                  "BPLandmark": "Little Mount Bus Stop, Guindy",
                  "BPAddress": "Little Mount Bus Stop, Guindy",
                  "DPLocation": "Little Mount Bus Stop"
                 },
                 {
                  "DPTime": "2018-05-01T10:25:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17970434-Anna University",
                  "DPId": "17970434",
                  "BPLandmark": "Infront Of Anna University/ Iit Madras",
                  "BPAddress": "Infront of Anna University/ IIT Madras, Infront of Anna University/ IIT Madras",
                  "DPLocation": "Anna University"
                 },
                 {
                  "DPTime": "2018-05-01T10:30:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17850393-Madhya Kailash",
                  "DPId": "17850393",
                  "BPLandmark": "Mathiya Kailash, Infront Of Kasthuribai Nagar Metro Station",
                  "BPAddress": "Mathiya Kailash, Infront of Kasthuribai Nagar Metro Station",
                  "DPLocation": "Madhya Kailash"
                 },
                 {
                  "DPTime": "2018-05-01T10:35:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17950968-Tidel Park",
                  "DPId": "17950968",
                  "BPLandmark": "Opp. Tidel Park, Thiruvanmiyur Railway Station",
                  "BPAddress": "Opp. Tidel Park, Thiruvanmiyur Railway Station",
                  "DPLocation": "Tidel Park / Thiruvanmiyur"
                 },
                 {
                  "DPTime": "2018-05-01T10:45:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17933982-Tharamani",
                  "DPId": "17933982",
                  "BPLandmark": "Next To Mosque, Taramani",
                  "BPAddress": "11 A, 100 feet road, Tharamani",
                  "DPLocation": "Tharamani"
                 },
                 {
                  "DPTime": "2018-05-01T10:55:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17934004-Velachery",
                  "DPId": "17934004",
                  "BPLandmark": "Opp. Baby Nagar Hot Chips Hotel, Near Indian Bank",
                  "BPAddress": "Baby nagar",
                  "DPLocation": "Velachery"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "577",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T04:25:00Z",
               "idRequired": "false",
               "ServiceID": 1792464,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3.5,
                 "seats": 4,
                 "onBoardExperience": 3.5,
                 "onTimeAD": 3.5
                },
                "reviewCount": 6,
                "posReviewCount": 4,
                "criReviewCount": 2,
                "imgReviewCount": 0,
                "totalRating": 3.5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-0425-AsianXpress-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Asian Xpress",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771792464",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-0425-AsianXpress-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T09:45:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "2.8",
               "DepartureTime": "13:30",
               "cancellationPolicy": "0:8:100:0;8:24:50:0;24:48:20:0;48:168:10:0;168:-1:10:0",
               "avlWindowSeats": 20,
               "BusServiceID": "279",
               "totalReviews": "19",
               "seat": "SL",
               "duration": "7h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wW0PT_4iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "402522",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "402522-Anand Rao Circle",
                  "BPTime": "2018-05-01T13:30:00Z",
                  "BPLandmark": "Pooja Travels",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "opp to vrlbustand ",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17927863",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17927863-Shanthinagar",
                  "BPTime": "2018-05-01T13:45:00Z",
                  "BPLandmark": "Bus Stand",
                  "BPLocation": "Shanthinagar",
                  "BPAddress": "Bus stand",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17944251",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17944251-Madiwala",
                  "BPTime": "2018-05-01T14:15:00Z",
                  "BPLandmark": "Police Station",
                  "BPLocation": "Madiwala",
                  "BPAddress": "hp petrol bunk",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17953401",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17953401-Silk Board",
                  "BPTime": "2018-05-01T14:20:00Z",
                  "BPLandmark": "Opp To Ashwath Hospital",
                  "BPLocation": "Silk Board",
                  "BPAddress": "flyover end ",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17954438",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17954438-Electronic City",
                  "BPTime": "2018-05-01T14:35:00Z",
                  "BPLandmark": "Toll Gate Audi  Showroom",
                  "BPLocation": "Electronic City Toll Gate",
                  "BPAddress": "toll gate",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "20:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "472",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "450.0",
                "adulttotalfare": "0",
                "servicetax": "22.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "3687",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T20:30:00Z",
                  "BPContactNumber": "04424790787 04424799687 9710934818",
                  "DPName": "1566776-Koyambedu",
                  "DPId": "1566776",
                  "BPLandmark": "Opp.Koyambedu Flower  Market, Hotel Royal Palaza",
                  "BPAddress": "Shop No.05,Omni Bus Terminus",
                  "DPLocation": "Koyambedu"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "472",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "630",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "682",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T13:30:00Z",
               "idRequired": "false",
               "ServiceID": 1837944,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "Bharathi  Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771837944",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1330-BharathiTravels-ACSleeper2+1",
               "arrdate": "2018-05-01T20:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.3",
               "DepartureTime": "04:25",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 24,
               "BusServiceID": "SCHH5TDELC",
               "totalReviews": "652",
               "seat": "ST",
               "duration": "5h 20m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92gXyu0B4yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1751793",
                  "BPContactNumber": "7550244433,7847840107",
                  "BPName": "1751793-Majestic",
                  "BPTime": "2018-05-01T04:00:00Z",
                  "BPLandmark": "Opp. Majestic bus stand",
                  "BPLocation": "Majestic",
                  "BPAddress": "No.3a,Dhanvantri Road,Near amar hotel",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17945320",
                  "BPContactNumber": "7550244433,7847840107",
                  "BPName": "17945320-Double Road",
                  "BPTime": "2018-05-01T04:10:00Z",
                  "BPLandmark": "Infront of Reliance market",
                  "BPLocation": "Double Road",
                  "BPAddress": "Outside Shanthi nagar bus stand,Double Road",
                  "BPCoordinates": "12.961,77.634"
                 },
                 {
                  "BPId": "1751797",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "1751797-Madiwala",
                  "BPTime": "2018-05-01T04:25:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17943522",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17943522-Silk Board",
                  "BPTime": "2018-05-01T04:30:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17947640",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17947640-Bommanahalli",
                  "BPTime": "2018-05-01T04:35:00Z",
                  "BPLandmark": "Next to Shell Petrol bunk",
                  "BPLocation": "Bommana Halli",
                  "BPAddress": "Next to Shell Petrol bunk,Near KPN Travels",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17945318",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17945318-Electronic City",
                  "BPTime": "2018-05-01T04:40:00Z",
                  "BPLandmark": "Near Pallavi Restaurant",
                  "BPLocation": "ElectronicCity",
                  "BPAddress": "BMTC Bus depot,Near Pallavi Restaurant",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "09:45",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "603",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "575.0",
                "adulttotalfare": "0",
                "servicetax": "28.75"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T09:15:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17962010-Sriperumbudur",
                  "DPId": "17962010",
                  "BPLandmark": "TOLL PLAZA",
                  "BPAddress": "Sri Perumbudur",
                  "DPLocation": "Sri Perumbudur Toll"
                 },
                 {
                  "DPTime": "2018-05-01T09:30:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17945324-Poonamallee",
                  "DPId": "17945324",
                  "BPLandmark": "Near KFC Poonamallee",
                  "BPAddress": "Motel Highway,",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T09:45:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17967615-Koyambedu",
                  "DPId": "17967615",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "603",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 51,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T04:25:00Z",
               "idRequired": "false",
               "ServiceID": 1441265,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771441265",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-0425-HebronTransports-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T09:45:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.9",
               "DepartureTime": "07:30",
               "cancellationPolicy": "0:4:100:0;4:12:50:0;12:24:20:0;24:168:15:0;168:-1:15:0",
               "avlWindowSeats": 23,
               "BusServiceID": "3565",
               "totalReviews": "286",
               "seat": "ST",
               "duration": "6h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9moW0PAE5CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17938028",
                  "BPContactNumber": "9740033994",
                  "BPName": "17938028-Anand Rao Circle",
                  "BPTime": "2018-05-01T07:30:00Z",
                  "BPLandmark": "Anand Rao Circle",
                  "BPLocation": "Majestic Ananda Rao Circle",
                  "BPAddress": "SRS Travels Parking, Opp Fortune Hotel",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "72863",
                  "BPContactNumber": "9972500300",
                  "BPName": "72863-Kalasipalyam",
                  "BPTime": "2018-05-01T08:00:00Z",
                  "BPLandmark": "Opp Bangalore Medical College",
                  "BPLocation": "Kalasipalyam",
                  "BPAddress": "# 321 TSP Road Opp BMC Kalasipalyam, Call : 9972568052/080 26801616/17",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17937644",
                  "BPContactNumber": "9900087253",
                  "BPName": "17937644-Wilson Garden",
                  "BPTime": "2018-05-01T08:10:00Z",
                  "BPLandmark": "# 24/3 H Siddaiah Road 5th Main Wilsongarden",
                  "BPLocation": "Wilsongarden",
                  "BPAddress": " # 24/3 H Siddaia road 5th main Wilsongarden ",
                  "BPCoordinates": "12.9481933,77.59718650000002"
                 },
                 {
                  "BPId": "403678",
                  "BPContactNumber": "25501686 9900087292",
                  "BPName": "403678-Madiwala",
                  "BPTime": "2018-05-01T08:40:00Z",
                  "BPLandmark": "Opp Madiwala Bmtc Bus Stop Hosur Main Road",
                  "BPLocation": "Madiwala",
                  "BPAddress": "#324/1 1st floor Technic Ceramics Building After Madiwala Police Station",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17937951",
                  "BPContactNumber": "9901844485 080 65624527",
                  "BPName": "17937951-Bommasandra",
                  "BPTime": "2018-05-01T09:00:00Z",
                  "BPLandmark": "near D.MART towards hosur road bommasandra",
                  "BPLocation": "Bommsandra SRS Travels ",
                  "BPAddress": "SRS Travels bommsandra signal and circle ",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Central TV,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),Safety belt,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "14:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "640",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "600.0",
                "adulttotalfare": "0",
                "servicetax": "30.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "22",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T14:00:00Z",
                  "BPContactNumber": "09840937910",
                  "DPName": "17936970-Koyambedu",
                  "DPId": "17936970",
                  "BPLandmark": "Opp Koyambedu Signal",
                  "BPAddress": "#105,100 Feet Road Koyambedu ",
                  "DPLocation": "Koyambedu"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "640",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 49,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T07:30:00Z",
               "idRequired": "false",
               "ServiceID": 637596,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 2.67,
                 "seats": 3.33,
                 "onBoardExperience": 2.33,
                 "onTimeAD": 2
                },
                "reviewCount": 6,
                "posReviewCount": 0,
                "criReviewCount": 2,
                "imgReviewCount": 0,
                "totalRating": 2.5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-0730-SRSTravels-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "SRS Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770637596",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-0730-SRSTravels-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T14:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.3",
               "DepartureTime": "23:00",
               "cancellationPolicy": "0:6:100:0;6:24:30:0;24:-1:15:0",
               "avlWindowSeats": 20,
               "BusServiceID": "611",
               "totalReviews": "429",
               "seat": "SL",
               "duration": "7h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9m0cz_QD4iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17931800",
                  "BPContactNumber": "040 33559999",
                  "BPName": "17931800-Marathahalli",
                  "BPTime": "2018-05-01T22:15:00Z",
                  "BPLandmark": "Near Kalamandir Show Room",
                  "BPLocation": "Marathahalli",
                  "BPAddress": "Marthalli",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "113287",
                  "BPContactNumber": "080-60002020",
                  "BPName": "113287-Bellandur",
                  "BPTime": "2018-05-01T22:25:00Z",
                  "BPLandmark": "Towards Hsr Layout Coffee Day",
                  "BPLocation": "Bellandur",
                  "BPAddress": "Towards HSR Layout Coffee Day",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17931670",
                  "BPContactNumber": "080-60002020",
                  "BPName": "17931670-HSR Layout",
                  "BPTime": "2018-05-01T22:35:00Z",
                  "BPLandmark": "Under Agra Flyover Near Hanuman Temple Opp",
                  "BPLocation": "Hsr Layout",
                  "BPAddress": "Under Agra Flyover Near Hanuman Temple Opp",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17931702",
                  "BPContactNumber": "080-8970018555",
                  "BPName": "17931702-Madiwala",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Next Venkateswara Hospital Madiwala Main Road",
                  "BPLocation": "Madiwala",
                  "BPAddress": "Next Venkateswara Hospital Madiwala Main Road",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17933212",
                  "BPContactNumber": "080-8970018555",
                  "BPName": "17933212-Electronic City",
                  "BPTime": "2018-05-01T23:20:00Z",
                  "BPLandmark": "Tollgate, Near Audi Service Center",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Tollgate, Near Audi Service Center",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17933217",
                  "BPContactNumber": "8970018555",
                  "BPName": "17933217-Bommasandra",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Bommasandara Bmtc Bus Stop Towards Hosur",
                  "BPLocation": "Bommasandara ",
                  "BPAddress": "Bommasandara BMTC bus stop towards hosur ",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17933199",
                  "BPContactNumber": "8970018555",
                  "BPName": "17933199-Narayana Hridayalaya",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "Narayana Hrudayalaya Opp A2b Restaurant",
                  "BPLocation": "Narayana Hrudayalaya",
                  "BPAddress": "Narayana Hrudayalaya Opp A2B restaurant ",
                  "BPCoordinates": "12.809153,77.696584"
                 },
                 {
                  "BPId": "17933232",
                  "BPContactNumber": "080 60002020",
                  "BPName": "17933232-Hosur",
                  "BPTime": "2018-05-01T23:59:00Z",
                  "BPLandmark": "Hosur Bus Stop",
                  "BPLocation": "Hosur",
                  "BPAddress": "Hosur",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Movie,Personal TV,Water Bottle,Blankets,Charging Point,Music/MP3,Emergency exit,Fire Extinguisher,Reading Light,Headsets,Snacks,Hammer (to break glass),Facial Tissues,WIFI,Pillow,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "06:00",
               "zeroCancellationTime": 0,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "945",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "900.0",
                "adulttotalfare": "0",
                "servicetax": "45.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "3804",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T05:45:00Z",
                  "BPContactNumber": "044 60002020",
                  "DPName": "1564257-Poonamallee",
                  "DPId": "1564257",
                  "BPLandmark": "Near Honda Show Room",
                  "BPAddress": "Poonamalle",
                  "DPLocation": "Poonamalle"
                 },
                 {
                  "DPTime": "2018-05-03T06:00:00Z",
                  "BPContactNumber": "040 44454647  9840722296 044-60002020",
                  "DPName": "17938013-Koyambedu",
                  "DPId": "17938013",
                  "BPLandmark": "Omni Bus Stand Near Royal Plaza Opp Flower Market ,Pilar No 53,54",
                  "BPAddress": "Omni Bus Stand Near Royal Plaza Opp Flower Market ,Pilar No 53,54",
                  "DPLocation": "KOYAMBEDU"
                 },
                 {
                  "DPTime": "2018-05-03T06:20:00Z",
                  "BPContactNumber": "044 60002020",
                  "DPName": "17937068-Guindy",
                  "DPId": "17937068",
                  "BPLandmark": "Olympia Tech Park, Main Entrance",
                  "BPAddress": "Guindy",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-03T06:40:00Z",
                  "BPContactNumber": "044 60002020",
                  "DPName": "17937150-Adyar",
                  "DPId": "17937150",
                  "BPLandmark": "Opp To Hdfc Bank And Sri Vinayagar Bhaktha Jana Saba Temple",
                  "BPAddress": "Adyar",
                  "DPLocation": "Adyar"
                 },
                 {
                  "DPTime": "2018-05-03T06:45:00Z",
                  "BPContactNumber": "044 60002020",
                  "DPName": "17937231-Thuraipakkam",
                  "DPId": "17937231",
                  "BPLandmark": "Near Hotel Sangeetha, Opp Rattha Tek Towers",
                  "BPAddress": "Thuraipakkam",
                  "DPLocation": "Thuraipakkam"
                 },
                 {
                  "DPTime": "2018-05-03T06:50:00Z",
                  "BPContactNumber": "044 60002020",
                  "DPName": "17936797-Perungudi",
                  "DPId": "17936797",
                  "BPLandmark": "Near Toll Plaza",
                  "BPAddress": "Perungudi",
                  "DPLocation": "Perungudi"
                 },
                 {
                  "DPTime": "2018-05-03T07:00:00Z",
                  "BPContactNumber": "044 60002020",
                  "DPName": "17936866-Sholinganallur",
                  "DPId": "17936866",
                  "BPLandmark": "Sbi Atm, Sholinganallur Junction (Opp. Aloft Hotel)",
                  "BPAddress": "Sholinganallur",
                  "DPLocation": "Sholinganallur"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "945",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 31,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:00:00Z",
               "idRequired": "false",
               "ServiceID": 996984,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4,
                 "seats": 4,
                 "onBoardExperience": 4,
                 "onTimeAD": 4
                },
                "reviewCount": 4,
                "posReviewCount": 2,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 3.5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2300-OrangeToursAndTravels-ACSleeper2+1"
               },
               "TravelsName": "Orange Tours And Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770996984",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-2300-OrangeToursAndTravels-ACSleeper2+1",
               "arrdate": "2018-05-02T06:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.3",
               "DepartureTime": "23:10",
               "cancellationPolicy": "0:6:100:0;6:12:50:0;12:24:25:0;24:-1:15:0",
               "avlWindowSeats": 11,
               "BusServiceID": "1",
               "totalReviews": "424",
               "seat": "SL",
               "duration": "6h 5m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92oYze774SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17964436",
                  "BPContactNumber": "9986203823",
                  "BPName": "17964436-Majestic",
                  "BPTime": "2018-05-01T21:30:00Z",
                  "BPLandmark": "Lakshmi Hayagriva Temple Majestic",
                  "BPLocation": "Mejestic",
                  "BPAddress": "Infront of Amar Hotel",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17770043",
                  "BPContactNumber": "9986203823",
                  "BPName": "17770043-Anand Rao Circle",
                  "BPTime": "2018-05-01T21:35:00Z",
                  "BPLandmark": "Hotel Tourist, Anandrao Circle, Racecourse Road, Bengaluru, Karnataka 560009",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "Infront of Hotel Tourist ",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17963253",
                  "BPContactNumber": "9986203823",
                  "BPName": "17963253-Shanthinagar",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": "Bus Stand Building Beside Take A Break Hotel",
                  "BPLocation": "Shanthi Nagar",
                  "BPAddress": "Near signal c/o of sree shakthi travels beside take a break hotel",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17794569",
                  "BPContactNumber": "9986203823",
                  "BPName": "17794569-M.G.Road",
                  "BPTime": "2018-05-01T22:15:00Z",
                  "BPLandmark": "Vijay Bank Head Office",
                  "BPLocation": "M G Road",
                  "BPAddress": "M G Road Infront Of Vijay Bank Head Office",
                  "BPCoordinates": "12.97463,77.609749"
                 },
                 {
                  "BPId": "17783668",
                  "BPContactNumber": "9986203823",
                  "BPName": "17783668-Indiranagar",
                  "BPTime": "2018-05-01T22:25:00Z",
                  "BPLandmark": "Petrol Pump",
                  "BPLocation": "Indra Nagar",
                  "BPAddress": "Opp to Indian oil petrol pump",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17783630",
                  "BPContactNumber": "9986203823",
                  "BPName": "17783630-Byappanahalli",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "Metro Station",
                  "BPLocation": "Bypanahalli",
                  "BPAddress": "Infront of Metro station towards tin factory road",
                  "BPCoordinates": "13.071,77.72"
                 },
                 {
                  "BPId": "17783648",
                  "BPContactNumber": "9986203823",
                  "BPName": "17783648-Tin Factory",
                  "BPTime": "2018-05-01T22:40:00Z",
                  "BPLandmark": "Petrol Pump",
                  "BPLocation": "Tin Factory",
                  "BPAddress": "Near bharat petrol pump",
                  "BPCoordinates": "12.9972686,77.66959010000005"
                 },
                 {
                  "BPId": "17783671",
                  "BPContactNumber": "9986203823",
                  "BPName": "17783671-KR.PURAM",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Railway Station",
                  "BPLocation": "K R Puram",
                  "BPAddress": "Below hanging bridge fly over in front of railway station",
                  "BPCoordinates": "13.004016,77.6877764999"
                 },
                 {
                  "BPId": "17928140",
                  "BPContactNumber": "9986203823",
                  "BPName": "17928140-bhagemane world technology",
                  "BPTime": "2018-05-01T22:55:00Z",
                  "BPLandmark": "Bhagamane World Technology",
                  "BPLocation": "bhagemane world technology",
                  "BPAddress": "beside the main gate near main road",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17783687",
                  "BPContactNumber": "9986203823",
                  "BPName": "17783687-Marathahalli",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Kalamandir",
                  "BPLocation": "Marathahalli",
                  "BPAddress": "Infront of kalamandir",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "17982705",
                  "BPContactNumber": "9986203823",
                  "BPName": "17982705-Marathahalli",
                  "BPTime": "2018-05-01T23:05:00Z",
                  "BPLandmark": "Ezone",
                  "BPLocation": "marathalli opp to multiplex",
                  "BPAddress": "in front of ezone electronic showroom",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "17783691",
                  "BPContactNumber": "9986203823",
                  "BPName": "17783691-Bellandur",
                  "BPTime": "2018-05-01T23:10:00Z",
                  "BPLandmark": "Kanti Sweets",
                  "BPLocation": "Bellandur",
                  "BPAddress": "End of the fly over Infront of coffee day Or  kanti sweets",
                  "BPCoordinates": "12.92,77.67"
                 },
                 {
                  "BPId": "17962646",
                  "BPContactNumber": "9986203823",
                  "BPName": "17962646-Madiwala",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Next To Madiwala Police Station Infront Of Bharat Petrol Pump",
                  "BPLocation": "Madiwala",
                  "BPAddress": "Next To Madiwala Police Station Infront of Bharat Petrol Pump",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17966952",
                  "BPContactNumber": " 9986203823",
                  "BPName": "17966952-Silk Board",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "Infront Of Renault Showroom",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Infront Of Renault Showroom",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17783844",
                  "BPContactNumber": "9986203823",
                  "BPName": "17783844-Bommanahalli",
                  "BPTime": "2018-05-01T23:50:00Z",
                  "BPLandmark": "Kpn Travels",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "In front of shell petrol pump",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17965582",
                  "BPContactNumber": " 9986203823",
                  "BPName": "17965582-Electronic City",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "Pallavi Restaurent",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Infront Of Pallavi Restaurent",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Hammer (to break glass),Pillow,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:15",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "745",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "710.0",
                "adulttotalfare": "0",
                "servicetax": "35.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "16291",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17783728-Sriperumbudur",
                  "DPId": "17783728",
                  "BPLandmark": "Toll Gate",
                  "BPAddress": "Toll Gate",
                  "DPLocation": "Sri Perumbathur"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17783702-Poonamallee",
                  "DPId": "17783702",
                  "BPLandmark": "Bus Stand",
                  "BPAddress": "Near bridge",
                  "DPLocation": "Poonamalle"
                 },
                 {
                  "DPTime": "2018-05-03T05:10:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17783708-Maduravoyal",
                  "DPId": "17783708",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "Bus stop",
                  "DPLocation": "Maduravel"
                 },
                 {
                  "DPTime": "2018-05-03T05:20:00Z",
                  "BPContactNumber": "8296609799",
                  "DPName": "17935116-Koyambedu",
                  "DPId": "17935116",
                  "BPLandmark": "Near Bus Stand",
                  "BPAddress": "Near Bus Stand",
                  "DPLocation": "Koyembedu"
                 },
                 {
                  "DPTime": "2018-05-03T05:25:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17783730-Vadapalani",
                  "DPId": "17783730",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "Near signal bus  stop",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17783731-Ashok Pillar",
                  "DPId": "17783731",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "near signal bus  stop",
                  "DPLocation": "Ashoka Pillar"
                 },
                 {
                  "DPTime": "2018-05-03T05:35:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17914769-Olympia Technology Park",
                  "DPId": "17914769",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "near bus stop",
                  "DPLocation": "olumpia teck park"
                 },
                 {
                  "DPTime": "2018-05-03T05:40:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17783710-Guindy",
                  "DPId": "17783710",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "Near signal bus  stop",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-03T05:45:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17952086-Adyar",
                  "DPId": "17952086",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "Near signal bus  stop",
                  "DPLocation": "Adyar"
                 },
                 {
                  "DPTime": "2018-05-03T05:47:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17914770-chinna malle",
                  "DPId": "17914770",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "bus stop",
                  "DPLocation": "chinna malle"
                 },
                 {
                  "DPTime": "2018-05-03T05:52:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17914771-Anna University",
                  "DPId": "17914771",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "near signal bus  stop",
                  "DPLocation": "anna university"
                 },
                 {
                  "DPTime": "2018-05-03T05:55:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17914773-Madhya Kailash",
                  "DPId": "17914773",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "near signal bus  stop",
                  "DPLocation": "madya kailash"
                 },
                 {
                  "DPTime": "2018-05-03T06:00:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17934484-Tidel Park",
                  "DPId": "17934484",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "Near signal bus  stop",
                  "DPLocation": "Tidle Park"
                 },
                 {
                  "DPTime": "2018-05-03T06:05:00Z",
                  "BPContactNumber": "9840402478 9986203823",
                  "DPName": "17934454-SRP Tools",
                  "DPId": "17934454",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "Bus stop",
                  "DPLocation": "Srp Tools"
                 },
                 {
                  "DPTime": "2018-05-03T06:10:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17943216-Tharamani",
                  "DPId": "17943216",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "Near signal bus  stop",
                  "DPLocation": "Tharamani"
                 },
                 {
                  "DPTime": "2018-05-03T06:15:00Z",
                  "BPContactNumber": "9986203823",
                  "DPName": "17783723-Velachery",
                  "DPId": "17783723",
                  "BPLandmark": "Bus Stand",
                  "BPAddress": "Near signal bus  stop",
                  "DPLocation": "Velachery"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "745",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 18,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:10:00Z",
               "idRequired": "false",
               "ServiceID": 1654303,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "Ishaa tours and travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771654303",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-2310-Ishaatoursandtravels-ACSleeper2+1",
               "arrdate": "2018-05-02T05:15:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.4",
               "DepartureTime": "14:00",
               "cancellationPolicy": "0:4:100:0;4:24:20:0;24:-1:10:0",
               "avlWindowSeats": 15,
               "BusServiceID": "261",
               "totalReviews": "172",
               "seat": "SL",
               "duration": "7h 15m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92scz-0C4CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1204391",
                  "BPContactNumber": "080-41440900,9740000900",
                  "BPName": "1204391-Kalasipalyam",
                  "BPTime": "2018-05-01T14:00:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Kalasipalayam",
                  "BPAddress": "#30, 2nd Main, Dispensary Road, \nNear Hotel City Tower, Kalasipalyam",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "1204392",
                  "BPContactNumber": "080-41159505,9686233909",
                  "BPName": "1204392-Madiwala",
                  "BPTime": "2018-05-01T14:30:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Madiwala",
                  "BPAddress": "40, old check post road, jogi colony, Hosur road, \nMadiwala, Bangalore",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17943635",
                  "BPContactNumber": "080-41159505,9686233909",
                  "BPName": "17943635-Silk Board",
                  "BPTime": "2018-05-01T14:40:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Near Silk Board Bus Stop",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "1534987",
                  "BPContactNumber": "080-41159505,9686233909",
                  "BPName": "1534987-Electronic City",
                  "BPTime": "2018-05-01T14:45:00Z",
                  "BPLandmark": "",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Near Veerasandra Toll Gate Opp.Audi Showroom",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Snacks,WIFI,Pillow,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "21:15",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "735",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "700.0",
                "adulttotalfare": "0",
                "servicetax": "35.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "6087",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T19:45:00Z",
                  "BPContactNumber": "044-24796523 / 24791279 / 9443312377",
                  "DPName": "539145-Kanchipuram",
                  "DPId": "539145",
                  "BPLandmark": "Meenakshi Medical College",
                  "BPAddress": "Meenakshi Medical College",
                  "DPLocation": "Kanchipuram"
                 },
                 {
                  "DPTime": "2018-05-01T20:00:00Z",
                  "BPContactNumber": "044-24796523 / 24791279 / 9443312377",
                  "DPName": "17943058-Sriperumbudur",
                  "DPId": "17943058",
                  "BPLandmark": "Rajeev Gandhi Memorial,\nSriperumbudur",
                  "BPAddress": "Rajeev Gandhi Memorial,\nSriperumbudur",
                  "DPLocation": "Sriperumbudur"
                 },
                 {
                  "DPTime": "2018-05-01T20:25:00Z",
                  "BPContactNumber": "044-24796523 / 24791279 / 9443312377",
                  "DPName": "17945846-Poonamallee",
                  "DPId": "17945846",
                  "BPLandmark": "Opp: Poonamallee Bus Stand",
                  "BPAddress": "Opp: Poonamallee Bus Stand",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T21:05:00Z",
                  "BPContactNumber": "9443312329 / 044-24792799",
                  "DPName": "1534974-Parcel Office",
                  "DPId": "1534974",
                  "BPLandmark": "#31,Poonamallee High Road,\nNear Sri DEVI Hospitals,\nOpp Rohini Theatre,\nKoyambedu",
                  "BPAddress": "#31,Poonamallee High Road,\nNear Sri DEVI Hospitals,\nOpp Rohini Theatre,\nKoyambedu",
                  "DPLocation": "Parcel Office"
                 },
                 {
                  "DPTime": "2018-05-01T21:15:00Z",
                  "BPContactNumber": "044-24796523 / 24791279 / 9443312377",
                  "DPName": "539274-Koyambedu",
                  "DPId": "539274",
                  "BPLandmark": "CMBT Govenment Bus Stand",
                  "BPAddress": "CMBT Govenment Bus Stand",
                  "DPLocation": "Koyambedu"
                 },
                 {
                  "DPTime": "2018-05-01T21:15:00Z",
                  "BPContactNumber": "9442101288",
                  "DPName": "17945841-Vellore Bypass",
                  "DPId": "17945841",
                  "BPLandmark": "3, Balaji Lodge, New Bypass, Vellore",
                  "BPAddress": "3, Balaji Lodge, New Bypass, Vellore",
                  "DPLocation": "Vellore"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Benz A/c Premium Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "735",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 23,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T14:00:00Z",
               "idRequired": "false",
               "ServiceID": 1796272,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 5,
                 "seats": 5,
                 "onBoardExperience": 5,
                 "onTimeAD": 5
                },
                "reviewCount": 1,
                "posReviewCount": 1,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1400-Mettursuperservices-BenzAcPremiumSleeper2+1"
               },
               "TravelsName": "Mettur  super services",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771796272",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1400-Mettursuperservices-BenzAcPremiumSleeper2+1",
               "arrdate": "2018-05-01T21:15:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.1",
               "DepartureTime": "04:00",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 17,
               "BusServiceID": "SCHI1MEYA75",
               "totalReviews": "154",
               "seat": "SL",
               "duration": "5h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wT0esB3yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17877269",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "17877269-Madiwala",
                  "BPTime": "2018-05-01T04:00:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17877270",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17877270-Silk Board",
                  "BPTime": "2018-05-01T04:05:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17947949",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17947949-Bommanahalli",
                  "BPTime": "2018-05-01T04:10:00Z",
                  "BPLandmark": "Next to Shell Petrol bunk",
                  "BPLocation": "Bommana Halli",
                  "BPAddress": "Next to Shell Petrol bunk,Near KPN Travels",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17877272",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17877272-Electronic City",
                  "BPTime": "2018-05-01T04:15:00Z",
                  "BPLandmark": "Near Pallavi Restaurant",
                  "BPLocation": "ElectronicCity",
                  "BPAddress": "BMTC Bus depot,Near Pallavi Restaurant",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "09:30",
               "zeroCancellationTime": 0,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "682",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "650.0",
                "adulttotalfare": "0",
                "servicetax": "32.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T08:55:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17970725-Sriperumbudur",
                  "DPId": "17970725",
                  "BPLandmark": "TOLL PLAZA",
                  "BPAddress": "Sri Perumbudur",
                  "DPLocation": "Sri Perumbudur Toll"
                 },
                 {
                  "DPTime": "2018-05-01T09:10:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17970712-Poonamallee",
                  "DPId": "17970712",
                  "BPLandmark": "Near KFC Poonamallee",
                  "BPAddress": "Motel Highway,",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T09:30:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17978246-Koyambedu",
                  "DPId": "17978246",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "682",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 23,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T04:00:00Z",
               "idRequired": "false",
               "ServiceID": 1808061,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 2,
                 "seats": 2.5,
                 "onBoardExperience": 2,
                 "onTimeAD": 1
                },
                "reviewCount": 2,
                "posReviewCount": 0,
                "criReviewCount": 2,
                "imgReviewCount": 0,
                "totalRating": 1.5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-0400-HebronTransports-ACSleeper2+1"
               },
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771808061",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-0400-HebronTransports-ACSleeper2+1",
               "arrdate": "2018-05-01T09:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.1",
               "DepartureTime": "05:30",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 14,
               "BusServiceID": "SCHI1ME405598",
               "totalReviews": "104",
               "seat": "ST",
               "duration": "5h 50m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92scz_H75yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17877309",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "17877309-Madiwala",
                  "BPTime": "2018-05-01T05:30:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17877310",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17877310-Silk Board",
                  "BPTime": "2018-05-01T05:40:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17877311",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17877311-Bommanahalli",
                  "BPTime": "2018-05-01T05:45:00Z",
                  "BPLandmark": "Next to Shell Petrol bunk",
                  "BPLocation": "Bommana Halli",
                  "BPAddress": "Next to Shell Petrol bunk,Near KPN Travels",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17877312",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17877312-Electronic City",
                  "BPTime": "2018-05-01T05:55:00Z",
                  "BPLandmark": "Near Pallavi Restaurant",
                  "BPLocation": "ElectronicCity",
                  "BPAddress": "BMTC Bus depot,Near Pallavi Restaurant",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "11:20",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "546",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "520.0",
                "adulttotalfare": "0",
                "servicetax": "26.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T10:45:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17970758-Sriperumbudur",
                  "DPId": "17970758",
                  "BPLandmark": "TOLL PLAZA",
                  "BPAddress": "Sri Perumbudur",
                  "DPLocation": "Sri Perumbudur Toll"
                 },
                 {
                  "DPTime": "2018-05-01T11:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17945385-Poonamallee",
                  "DPId": "17945385",
                  "BPLandmark": "Near KFC Poonamallee",
                  "BPAddress": "Motel Highway,",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T11:20:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17945384-Koyambedu",
                  "DPId": "17945384",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "546",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T05:30:00Z",
               "idRequired": "false",
               "ServiceID": 1796609,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 5,
                 "seats": 5,
                 "onBoardExperience": 5,
                 "onTimeAD": 5
                },
                "reviewCount": 1,
                "posReviewCount": 1,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-0530-HebronTransports-VolvoACSemiSleeper2+2"
               },
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771796609",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-0530-HebronTransports-VolvoACSemiSleeper2+2",
               "arrdate": "2018-05-01T11:20:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.6",
               "DepartureTime": "14:00",
               "cancellationPolicy": "0:6:100:0;6:12:50:0;12:24:25:0;24:-1:10:0",
               "avlWindowSeats": 19,
               "BusServiceID": "5",
               "totalReviews": "588",
               "seat": "ST",
               "duration": "6h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9mwX0vAA4SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17933702",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933702-Majestic",
                  "BPTime": "2018-05-01T12:00:00Z",
                  "BPLandmark": "Near  Amar  Hotel",
                  "BPLocation": "Majestic",
                  "BPAddress": " Near Amar  Hotel",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17933734",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933734-Anand Rao Circle",
                  "BPTime": "2018-05-01T12:10:00Z",
                  "BPLandmark": "Infront Of Congress Party Office",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "Infront of Congress Party Office Next To Hotel Tourist",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17944505",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17944505-Shanthinagar",
                  "BPTime": "2018-05-01T12:45:00Z",
                  "BPLandmark": "Bmtc Bus Stand / Near Srs Travels",
                  "BPLocation": "Shanthi Nagar",
                  "BPAddress": "Infront of  Bus Stand ",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17933816",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933816-Madiwala",
                  "BPTime": "2018-05-01T13:45:00Z",
                  "BPLandmark": "Next To Citi Bank Atm, Beside Savoury Hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "ASIAN XPRESS Office, Next to CITI Bank ATM",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17933856",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933856-Silk Board",
                  "BPTime": "2018-05-01T14:05:00Z",
                  "BPLandmark": "Infront Of Renault Car Showroom",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Infront Of Renault Car Showroom Next To Aswad Hospital",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17933890",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933890-Bommanahalli",
                  "BPTime": "2018-05-01T14:20:00Z",
                  "BPLandmark": "Infront To Shell Petrol Bunk",
                  "BPLocation": "Bommanhalli",
                  "BPAddress": "Infront to Shell Petrol Bunk",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17943823",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17943823-Electronic City",
                  "BPTime": "2018-05-01T14:35:00Z",
                  "BPLandmark": "Infront Of Seasons Restaurant",
                  "BPLocation": "Electronics City",
                  "BPAddress": "Infront of Seasons Restaurant",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17933957",
                  "BPContactNumber": "7530059799 8197779994",
                  "BPName": "17933957-Bommasandra",
                  "BPTime": "2018-05-01T14:45:00Z",
                  "BPLandmark": "Opp To Skf Factory Flyover.",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "Opp to SKF Factory Flyover",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Movie,Water Bottle,Blankets,Charging Point,Emergency exit,Emergency Contact Number,Central TV,Fire Extinguisher,Reclining seat,Reading Light,Hammer (to break glass),CCTV,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "20:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "787",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "750.0",
                "adulttotalfare": "0",
                "servicetax": "37.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "11182",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T19:00:00Z",
                  "BPContactNumber": "+919710748123",
                  "DPName": "17934025-Sriperumbudur",
                  "DPId": "17934025",
                  "BPLandmark": "Near Sri Perumbudur Arch, Opp. Rajiv Gandhi Memorial",
                  "BPAddress": "Near Sri Perumbudur Arch, Opp. Rajiv Gandhi Memorial",
                  "DPLocation": "Sri Perumbudur"
                 },
                 {
                  "DPTime": "2018-05-01T19:40:00Z",
                  "BPContactNumber": "+919710748123",
                  "DPName": "17934041-Poonamallee",
                  "DPId": "17934041",
                  "BPLandmark": "Near Motel Highway",
                  "BPAddress": "Poonamalli Byepass, Infront of KFC",
                  "DPLocation": "Poonamalli"
                 },
                 {
                  "DPTime": "2018-05-01T20:00:00Z",
                  "BPContactNumber": "+919710748123",
                  "DPName": "1553189-Porur",
                  "DPId": "1553189",
                  "BPLandmark": "After Porur Flyover, Infront Of Syndicate Bank",
                  "BPAddress": "After Porur Flyover, Infront of Syndicate Bank",
                  "DPLocation": "Porur"
                 },
                 {
                  "DPTime": "2018-05-01T20:10:00Z",
                  "BPContactNumber": "+91-97107-48123",
                  "DPName": "17850607-DLF IT Park",
                  "DPId": "17850607",
                  "BPLandmark": "Dlf It Park Ramapuram",
                  "BPAddress": "DLF IT PARK Ramapuram",
                  "DPLocation": "Dlf It Park Ramapuram"
                 },
                 {
                  "DPTime": "2018-05-01T20:15:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17934069-Guindy",
                  "DPId": "17934069",
                  "BPLandmark": "Guindy",
                  "BPAddress": "Guindy",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-01T20:25:00Z",
                  "BPContactNumber": "+91-97107-48123",
                  "DPName": "17850609-Saidapet",
                  "DPId": "17850609",
                  "BPLandmark": "Little Mount Bus Stop, Guindy",
                  "BPAddress": "Little Mount Bus Stop, Guindy",
                  "DPLocation": "Little Mount Bus Stop"
                 },
                 {
                  "DPTime": "2018-05-01T20:35:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17850393-Madhya Kailash",
                  "DPId": "17850393",
                  "BPLandmark": "Mathiya Kailash, Infront Of Kasthuribai Nagar Metro Station",
                  "BPAddress": "Mathiya Kailash, Infront of Kasthuribai Nagar Metro Station",
                  "DPLocation": "Madhya Kailash"
                 },
                 {
                  "DPTime": "2018-05-01T20:45:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17950968-Tidel Park",
                  "DPId": "17950968",
                  "BPLandmark": "Opp. Tidel Park, Thiruvanmiyur Railway Station",
                  "BPAddress": "Opp. Tidel Park, Thiruvanmiyur Railway Station",
                  "DPLocation": "Tidel Park / Thiruvanmiyur"
                 },
                 {
                  "DPTime": "2018-05-01T21:00:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17933982-Tharamani",
                  "DPId": "17933982",
                  "BPLandmark": "Next To Mosque, Taramani",
                  "BPAddress": "11 A, 100 feet road, Tharamani",
                  "DPLocation": "Tharamani"
                 },
                 {
                  "DPTime": "2018-05-01T21:05:00Z",
                  "BPContactNumber": "7530059801 7530059802",
                  "DPName": "17934004-Velachery",
                  "DPId": "17934004",
                  "BPLandmark": "Opp. Baby Nagar Hot Chips Hotel, Near Indian Bank",
                  "BPAddress": "Baby nagar",
                  "DPLocation": "Velachery"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi-Axle Semisleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "787",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 41,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T14:00:00Z",
               "idRequired": "false",
               "ServiceID": 849553,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4.33,
                 "seats": 5,
                 "onBoardExperience": 5,
                 "onTimeAD": 5
                },
                "reviewCount": 3,
                "posReviewCount": 3,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 4.67,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1400-AsianXpress-VolvoACMulti-AxleSemisleeper2+2"
               },
               "TravelsName": "Asian Xpress",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770849553",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1400-AsianXpress-VolvoACMulti-AxleSemisleeper2+2",
               "arrdate": "2018-05-01T20:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.2",
               "DepartureTime": "12:15",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 0,
               "BusServiceID": "SCHI1MF50XU",
               "totalReviews": "60",
               "seat": "SL",
               "duration": "5h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wT0e4A5yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17877373",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "17877373-Madiwala",
                  "BPTime": "2018-05-01T12:15:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17877374",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17877374-Silk Board",
                  "BPTime": "2018-05-01T12:30:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17877375",
                  "BPContactNumber": "7550244433,7847845455",
                  "BPName": "17877375-Electronic City",
                  "BPTime": "2018-05-01T12:35:00Z",
                  "BPLandmark": "Near Audi Service ",
                  "BPLocation": "Electronic City Toll Plaza",
                  "BPAddress": "TOLL PLAZA,ON FLY OVER",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "18:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "630",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "600.0",
                "adulttotalfare": "0",
                "servicetax": "30.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T17:30:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17971839-Sriperumbudur",
                  "DPId": "17971839",
                  "BPLandmark": "TOLL PLAZA",
                  "BPAddress": "Sri Perumbudur",
                  "DPLocation": "Sri Perumbudur Toll"
                 },
                 {
                  "DPTime": "2018-05-01T17:45:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17913190-Poonamallee",
                  "DPId": "17913190",
                  "BPLandmark": "Near KFC Poonamallee",
                  "BPAddress": "Motel Highway,",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T18:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17971831-Koyambedu",
                  "DPId": "17971831",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "630",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 0,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T12:15:00Z",
               "idRequired": "false",
               "ServiceID": 1808359,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "onBoardExperience": 4,
                 "onTimeAD": 5,
                 "stopOverExperience": 4,
                 "seats": 4
                },
                "reviewCount": 1,
                "posReviewCount": 1,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 4,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1215-HebronTransports-ACSleeper2+1"
               },
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771808359",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1215-HebronTransports-ACSleeper2+1",
               "arrdate": "2018-05-01T18:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.1",
               "DepartureTime": "21:00",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 16,
               "BusServiceID": "SCHI1MF595148",
               "totalReviews": "141",
               "seat": "SL",
               "duration": "6h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wT0e4B3iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17877424",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "17877424-Madiwala",
                  "BPTime": "2018-05-01T21:00:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17877426",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17877426-Silk Board",
                  "BPTime": "2018-05-01T21:10:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17948556",
                  "BPContactNumber": "7550244433,7847845455",
                  "BPName": "17948556-Electronic City",
                  "BPTime": "2018-05-01T21:20:00Z",
                  "BPLandmark": "Near Audi Service ",
                  "BPLocation": "Electronic City Toll Plaza",
                  "BPAddress": "TOLL PLAZA,ON FLY OVER",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "03:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "735",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "700.0",
                "adulttotalfare": "0",
                "servicetax": "35.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T02:30:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17972863-Sriperumbudur",
                  "DPId": "17972863",
                  "BPLandmark": "TOLL PLAZA",
                  "BPAddress": "Sri Perumbudur",
                  "DPLocation": "Sri Perumbudur Toll"
                 },
                 {
                  "DPTime": "2018-05-03T02:50:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17972870-Poonamallee",
                  "DPId": "17972870",
                  "BPLandmark": "Near KFC Poonamallee",
                  "BPAddress": "Motel Highway,",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-03T03:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17972890-Porur",
                  "DPId": "17972890",
                  "BPLandmark": "Porur Main Signal",
                  "BPAddress": "Near Hyderabad Briyani",
                  "DPLocation": "Near Porur Signal (DROP)"
                 },
                 {
                  "DPTime": "2018-05-03T03:05:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17972923-DLF IT Park",
                  "DPId": "17972923",
                  "BPLandmark": "DLF IT Park",
                  "BPAddress": "1/124, Mount Poonamalle Road, Manapakkam",
                  "DPLocation": "DLF IT Park"
                 },
                 {
                  "DPTime": "2018-05-03T03:15:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17972897-Guindy",
                  "DPId": "17972897",
                  "BPLandmark": "OLYMPIA TECH PARK",
                  "BPAddress": "OLYMPIA TECH PARK, MAIN ENTRANCE",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-03T03:25:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17973341-Vadapalani",
                  "DPId": "17973341",
                  "BPLandmark": "Vadapalani Murugan Temple",
                  "BPAddress": "Infront of  Vadapalani Murugan Temple",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-03T03:30:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17972839-Koyambedu",
                  "DPId": "17972839",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "735",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 23,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T21:00:00Z",
               "idRequired": "false",
               "ServiceID": 1808360,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "onBoardExperience": 2,
                 "onTimeAD": 4,
                 "stopOverExperience": 2,
                 "seats": 3
                },
                "reviewCount": 1,
                "posReviewCount": 0,
                "criReviewCount": 0,
                "imgReviewCount": 1,
                "totalRating": 3,
                "approvedImageCount": 1,
                "id": "Bangalore-Chennai-2100-HebronTransports-ACSleeper2+1"
               },
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771808360",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2100-HebronTransports-ACSleeper2+1",
               "arrdate": "2018-05-02T03:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.3",
               "DepartureTime": "22:00",
               "cancellationPolicy": "0:3:90:0;3:4:60:0;4:12:30:0;12:-1:15:0",
               "avlWindowSeats": 21,
               "BusServiceID": "38",
               "totalReviews": "643",
               "seat": "ST",
               "duration": "5h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9mgWy_EE5yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17954796",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17954796-Majestic",
                  "BPTime": "2018-05-01T21:00:00Z",
                  "BPLandmark": "Opp KSRTC Bus Stand",
                  "BPLocation": "Majestic",
                  "BPAddress": "Infront of Mayura Hotel,No 32,Tank Bund Road,",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17953533",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17953533-Shanthinagar",
                  "BPTime": "2018-05-01T21:15:00Z",
                  "BPLandmark": "In-Front Of Reliance Market",
                  "BPLocation": "Shanthi Nagar",
                  "BPAddress": "Shanthi Nagar Bus Stand In-Front Of Reliance Market",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17949174",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17949174-Madiwala",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": "Opp to Bajaj Showroom",
                  "BPLocation": "Madiwala",
                  "BPAddress": "No 06 Hosur Main Road Near Ayyappaswamy Temple",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17950406",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17950406-Silk Board",
                  "BPTime": "2018-05-01T22:10:00Z",
                  "BPLandmark": "Near AS-WAD Hospital",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Silk Board Bridge Ted-End",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17950458",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17950458-Electronic City",
                  "BPTime": "2018-05-01T22:20:00Z",
                  "BPLandmark": "Near BMTC Bus Stand",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Infront Of Season Hotel  and Ruchi Sagar Hotel",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17950439",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17950439-Bommanahalli",
                  "BPTime": "2018-05-01T22:20:00Z",
                  "BPLandmark": "Next To Shell Petrol Bunk",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "24, Shop No :03,Next  To Shell  Petrol Bunk",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17952205",
                  "BPContactNumber": "044-49007555",
                  "BPName": "17952205-Bommasandra",
                  "BPTime": "2018-05-01T22:35:00Z",
                  "BPLandmark": "Infront of Royal Enfield Showroom",
                  "BPLocation": "Bommasandra Parveen Travels",
                  "BPAddress": "235/A,2nd Cross KIABB Service Road",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Movie,Fire Extinguisher,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),CCTV,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "03:45",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1155",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1100.0",
                "adulttotalfare": "0",
                "servicetax": "55.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "9032",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T03:45:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17955402-Perungalathur",
                  "DPId": "17955402",
                  "BPLandmark": "Parveen Travels",
                  "BPAddress": "No:1, Kamatchi Complex,GST Rd",
                  "DPLocation": "Perungalathur"
                 },
                 {
                  "DPTime": "2018-05-03T03:50:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17955533-Tambaram",
                  "DPId": "17955533",
                  "BPLandmark": "Opp: Hindu Mission Hospital",
                  "BPAddress": "Tambaram",
                  "DPLocation": "Tambaram"
                 },
                 {
                  "DPTime": "2018-05-03T03:55:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17955647-Camp Road",
                  "DPId": "17955647",
                  "BPLandmark": "Infront Of Domino's Pizza",
                  "BPAddress": "CSI ST. Mark Church",
                  "DPLocation": "Camp Road Junction"
                 },
                 {
                  "DPTime": "2018-05-03T04:00:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17957963-Santhosapuram",
                  "DPId": "17957963",
                  "BPLandmark": "Samsung Digital Plaza",
                  "BPAddress": "Samsung Digital Plaza",
                  "DPLocation": "Santhosapuram -Samsung Digital Plaza"
                 },
                 {
                  "DPTime": "2018-05-03T04:00:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17956959-Sembakkam",
                  "DPId": "17956959",
                  "BPLandmark": "Infront Of KTM Bikes",
                  "BPAddress": "KTM Bikes Showroom",
                  "DPLocation": "Gowrivakkam -KTM Bikes "
                 },
                 {
                  "DPTime": "2018-05-03T04:05:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17958050-Medavakkam",
                  "DPId": "17958050",
                  "BPLandmark": "Nilgiris Supermarket",
                  "BPAddress": "Velachery Tambaram Main Rd, Munusamy Nagar",
                  "DPLocation": "Medavakkam"
                 },
                 {
                  "DPTime": "2018-05-03T04:10:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "1670298-Perumbakkam",
                  "DPId": "1670298",
                  "BPLandmark": "Opp To ICICI Bank ",
                  "BPAddress": "Global Hospital ,ECR Link Road, ",
                  "DPLocation": "Perumbakkam - Global Hospital "
                 },
                 {
                  "DPTime": "2018-05-03T04:15:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17959578-Sholinganallur",
                  "DPId": "17959578",
                  "BPLandmark": "HCL Bus Stand",
                  "BPAddress": "HCL Technologies,Elcot Sez",
                  "DPLocation": "HCL Technologies"
                 },
                 {
                  "DPTime": "2018-05-03T04:20:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17959580-Sholinganallur",
                  "DPId": "17959580",
                  "BPLandmark": "College Entrance",
                  "BPAddress": "-Mohamed Sathak ,Medavakkam Road",
                  "DPLocation": "Sholinganallur -Mohamed Sathak College"
                 },
                 {
                  "DPTime": "2018-05-03T04:25:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17959582-Karappakkam",
                  "DPId": "17959582",
                  "BPLandmark": "Hot Chips Restaurant",
                  "BPAddress": "Sree Tours and Travels,Near Arvind theater",
                  "DPLocation": "Karappakkam"
                 },
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17959616-Thuraipakkam",
                  "DPId": "17959616",
                  "BPLandmark": "Opp To Sangeetha Veg Restaurant",
                  "BPAddress": "Old Mahabalipuram Road, Thoraipakkam, Sakthi Nagar",
                  "DPLocation": "Thoraipakkam"
                 },
                 {
                  "DPTime": "2018-05-03T04:35:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17959646-Perungudi",
                  "DPId": "17959646",
                  "BPLandmark": "Opp to Dominos Pizza",
                  "BPAddress": "Old Mahabalipuram Road, Thirumalai Nagar Annexe, ",
                  "DPLocation": "Perungudi Toll"
                 },
                 {
                  "DPTime": "2018-05-03T04:40:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17960383-SRP Tools",
                  "DPId": "17960383",
                  "BPLandmark": "Opp to Holiday Inn",
                  "BPAddress": "SRP Bus Stop Towards Taramani",
                  "DPLocation": "SRP Tools"
                 },
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17960409-Adyar",
                  "DPId": "17960409",
                  "BPLandmark": " Beside HDFC Bank",
                  "BPAddress": "No-39/16 ,Shasthrinagar",
                  "DPLocation": "Adyar -Parveen Travels"
                 },
                 {
                  "DPTime": "2018-05-03T04:50:00Z",
                  "BPContactNumber": "044-49007555\t",
                  "DPName": "17960391-Anna University",
                  "DPId": "17960391",
                  "BPLandmark": "Anna University Bus Stop",
                  "BPAddress": "  Anna University, Nearby Bus Stop",
                  "DPLocation": "Anna University"
                 },
                 {
                  "DPTime": "2018-05-03T04:55:00Z",
                  "BPContactNumber": "044-49007555",
                  "DPName": "17955213-Ashok Pillar",
                  "DPId": "17955213",
                  "BPLandmark": "Infront of Anjappar Hotel",
                  "BPAddress": "Ashok Pillar Junction",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "044-49007555",
                  "DPName": "17955071-Egmore",
                  "DPId": "17955071",
                  "BPLandmark": "Opp : Egmore Railway Station",
                  "BPAddress": "11/5, Kenneth Lane Impala Complex",
                  "DPLocation": "Egmore -Parveen Travels (Van/Bus Pickup)"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Mercedes Multi-Axle Semi-sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1155",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 43,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:00:00Z",
               "idRequired": "false",
               "ServiceID": 432699,
               "busCompany": "mercedes",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3.5,
                 "seats": 3.5,
                 "onBoardExperience": 3.75,
                 "onTimeAD": 3.75
                },
                "reviewCount": 8,
                "posReviewCount": 4,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 3.5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2200-ParveenTravels-MercedesMulti-AxleSemi-sleeper2+2"
               },
               "TravelsName": "Parveen Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770432699",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2200-ParveenTravels-MercedesMulti-AxleSemi-sleeper2+2",
               "arrdate": "2018-05-02T03:45:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.2",
               "DepartureTime": "22:00",
               "cancellationPolicy": "0:3:100:0;3:24:25:0;24:-1:15:0",
               "avlWindowSeats": 18,
               "BusServiceID": "2076",
               "totalReviews": "169",
               "seat": "SL",
               "duration": "7h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92QTy-794SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "77889",
                  "BPContactNumber": "08025252748",
                  "BPName": "77889-Indiranagar",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": "Near R.T.O Office,Opp canara Bank,",
                  "BPLocation": "INDIRA NAGAR(KPN)",
                  "BPAddress": "No 33/2 33 PKN Building 1 STG,Bangalore.",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17936431",
                  "BPContactNumber": "080-25525699,25526055",
                  "BPName": "17936431-Madiwala",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "Opp Mas Residency, Hosur Main Road",
                  "BPLocation": "MADIWALA(KPN)",
                  "BPAddress": "Madiwala,Koramangala,Bangalore.",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17936284",
                  "BPContactNumber": "080-42085298 , 9343349199",
                  "BPName": "17936284-Bommanahalli",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Opp Wipro& Oxford college,Near shell Petrol bunk",
                  "BPLocation": "BOMMANAHALLI(KPN)",
                  "BPAddress": "No 54,64,Garecababi talai,Bangalore.",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "1049694",
                  "BPContactNumber": "080-42150124,9148903539",
                  "BPName": "1049694-Bommasandra",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Mangutha timper building",
                  "BPLocation": "BOMMACHANDRA(KPN)",
                  "BPAddress": "First cross,Vidya Nager,Opp SKF,Hosur main road",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Movie,Fire Extinguisher,Blankets,Charging Point,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1200",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1200.0",
                "adulttotalfare": "0",
                "servicetax": "0.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "102",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "",
                  "DPName": "53066-Chennai",
                  "DPId": "53066",
                  "BPLandmark": "Chennai",
                  "BPAddress": "Chennai",
                  "DPLocation": "Chennai"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1200",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 27,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:00:00Z",
               "idRequired": "false",
               "ServiceID": 1002323,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "staffBehaviour": 2.33,
                 "busQuality": 2.33,
                 "onBoardExperience": 1.83,
                 "onTimeAD": 2,
                 "acQuality": 2.33,
                 "stopOverExperience": 2.33,
                 "seats": 1.83,
                 "seater": 2.33,
                 "punctuality": 2.33
                },
                "reviewCount": 12,
                "posReviewCount": 2,
                "criReviewCount": 9,
                "imgReviewCount": 0,
                "totalRating": 2,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2200-KPN-ACSleeper2+1"
               },
               "TravelsName": "K.P.N",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771002323",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2200-KPN-ACSleeper2+1",
               "arrdate": "2018-05-02T05:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.6",
               "DepartureTime": "23:30",
               "cancellationPolicy": "0:8:100:0;8:24:50:0;24:48:25:0;48:-1:10:0",
               "avlWindowSeats": 13,
               "BusServiceID": "103",
               "totalReviews": "959",
               "seat": "SLST",
               "duration": "6h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9msVyfMD5CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "nonac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1451069",
                  "BPContactNumber": "080- 26703300 26700156 ",
                  "BPName": "1451069-Indiranagar",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "Opp To Indian Oil Petrol Bunk",
                  "BPLocation": "Indira Nagar (Pickup Van/Bus)",
                  "BPAddress": "In front of Indian Oil Petrol Bunk",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17951232",
                  "BPContactNumber": "08026700156  26703300  ",
                  "BPName": "17951232-Baiyappanahalli Metro Station",
                  "BPTime": "2018-05-01T22:40:00Z",
                  "BPLandmark": "Baiyappanahalli Metro Station Bus Stop",
                  "BPLocation": "Baiyappanahalli Metro Station (Pickup Van/Bus)",
                  "BPAddress": "Baiyappanahalli Metro Station bus stop",
                  "BPCoordinates": "12.9907481,77.65245619999996"
                 },
                 {
                  "BPId": "1451070",
                  "BPContactNumber": "080-26703300 26700156",
                  "BPName": "1451070-Tin Factory",
                  "BPTime": "2018-05-01T22:40:00Z",
                  "BPLandmark": "Near Flyover Towards Marathalli Road",
                  "BPLocation": "Tin Factory (Pickup Van/Bus)",
                  "BPAddress": "bharath petrol bunk ",
                  "BPCoordinates": "12.9972686,77.66959010000005"
                 },
                 {
                  "BPId": "17938040",
                  "BPContactNumber": "080- 26703300 26700156 ",
                  "BPName": "17938040-Kalasipalyam",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Tsp Road",
                  "BPLocation": "Kalasipalyam",
                  "BPAddress": "Opp Jabbar Travels",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17950720",
                  "BPContactNumber": "08026700156  26703300 ",
                  "BPName": "17950720-KR.PURAM",
                  "BPTime": "2018-05-01T22:46:00Z",
                  "BPLandmark": "K R Puram Railway Station",
                  "BPLocation": "K R Puram Railway Station (Pickup Van/Bus)",
                  "BPAddress": "K R Puram Railway Station",
                  "BPCoordinates": "13.004016,77.6877764999"
                 },
                 {
                  "BPId": "1451071",
                  "BPContactNumber": "080-26703300 26700156 ",
                  "BPName": "1451071-Marathahalli",
                  "BPTime": "2018-05-01T22:55:00Z",
                  "BPLandmark": "Near Kalamandir",
                  "BPLocation": "Marthahalli (Pickup Van/Bus)",
                  "BPAddress": "JABBAR Travels",
                  "BPCoordinates": "12.9511982,77.6997663"
                 },
                 {
                  "BPId": "775627",
                  "BPContactNumber": "080 26703300 26700156 ",
                  "BPName": "775627-HSR Layout",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Near Hanuman Temple",
                  "BPLocation": "Hsr Layout (Pickup Van/Bus)",
                  "BPAddress": "Under Agra Fly Over Bridge",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17944752",
                  "BPContactNumber": "08041315343 08026703300",
                  "BPName": "17944752-Majestic",
                  "BPTime": "2018-05-01T23:01:00Z",
                  "BPLandmark": "Mayura Hotel Opp Mejestic Bus Stand",
                  "BPLocation": "Majestic High5 Holidays",
                  "BPAddress": " # 18, hotel mayura complex tank band road, opp mejestic bus stand",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17846123",
                  "BPContactNumber": "080 26700156 26703300  ",
                  "BPName": "17846123-Anand Rao Circle",
                  "BPTime": "2018-05-01T23:05:00Z",
                  "BPLandmark": "Race Course Road",
                  "BPLocation": "Anand Rao Circle(Race Course Road)",
                  "BPAddress": "Infront of old  Janatha Dal Office and new congress bhavan",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "1684200",
                  "BPContactNumber": "08026703300 08026700156 ",
                  "BPName": "1684200-Shanthinagar",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Lalbhag 2nd Gate",
                  "BPLocation": "Double Road  Shanthi Nagar",
                  "BPAddress": "Lalbhag 2nd Gate and Opp to Hopcoms Bus Stop",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17934387",
                  "BPContactNumber": "080 26703300 26700156 ",
                  "BPName": "17934387-Madiwala",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Near Police Station",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": "Next to Petrol bunk",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17950783",
                  "BPContactNumber": "080 26703300 26700156 ",
                  "BPName": "17950783-Silk Board",
                  "BPTime": "2018-05-01T23:35:00Z",
                  "BPLandmark": "Aswath Hosital",
                  "BPLocation": "Silk Board end of fly over",
                  "BPAddress": "Silk Board end of the fly over",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17950816",
                  "BPContactNumber": "080 26703300 26700156 ",
                  "BPName": "17950816-Bommanahalli",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "Next To Shell Petrol Pump",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "Bommanahalli,Sps Travels",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "1451073",
                  "BPContactNumber": "080 26703300 26700156 ",
                  "BPName": "1451073-Electronic City",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "Near Ruchi Sagar Hotel",
                  "BPLocation": "Electronic City",
                  "BPAddress": "Electronic City BMTC Bus Stand",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17954911",
                  "BPContactNumber": "080 26703300 26700156 ",
                  "BPName": "17954911-Hosur",
                  "BPTime": "2018-05-01T23:59:00Z",
                  "BPLandmark": "Hosur",
                  "BPLocation": "Hosur",
                  "BPAddress": "Hosur",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "06:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "330",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "330.0",
                "adulttotalfare": "0",
                "servicetax": "0.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "8336",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "7299244766  044-25610180",
                  "DPName": "17954677-Poonamallee",
                  "DPId": "17954677",
                  "BPLandmark": "Poonamallee",
                  "BPAddress": "Poonamallee",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "7299244766 044-25610180",
                  "DPName": "17955069-Koyambedu",
                  "DPId": "17955069",
                  "BPLandmark": "Near Omini Bus Stand",
                  "BPAddress": "C/O Barathi Travels No E6 Sreeji Majestic Complex ",
                  "DPLocation": "Koyambedu"
                 },
                 {
                  "DPTime": "2018-05-03T05:45:00Z",
                  "BPContactNumber": "7299244766 044-25610180",
                  "DPName": "1563507-Amin Ji Geirai Market",
                  "DPId": "1563507",
                  "BPLandmark": "Near Bus Stand",
                  "BPAddress": "Amim Ji Geeirai Market",
                  "DPLocation": "Amin Ji Geirai Market"
                 },
                 {
                  "DPTime": "2018-05-03T05:50:00Z",
                  "BPContactNumber": " 7299244766 044-25610180",
                  "DPName": "17954799-Egmore",
                  "DPId": "17954799",
                  "BPLandmark": "Near Egmore Bus Stand C O National Travels",
                  "BPAddress": "Opp Egmore Railway Station No6 Gandhi Irwin Road Imperial Complex ",
                  "DPLocation": "Egmore"
                 },
                 {
                  "DPTime": "2018-05-03T06:00:00Z",
                  "BPContactNumber": "7299244766 044-25610180",
                  "DPName": "17952486-Central Railway Station",
                  "DPId": "17952486",
                  "BPLandmark": "Opp To Central Tower",
                  "BPAddress": "C/O National Travels no 23 hotel Everest Poonamallee high road Pyramid",
                  "DPLocation": "Central "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Non A/C Seater/Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "330",
                  "busCondition": "nonac",
                  "seatType": "Seater/Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 25,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "390",
                  "busCondition": "nonac",
                  "seatType": "Seater/Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 25,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "490",
                  "busCondition": "nonac",
                  "seatType": "Seater/Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 25,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:30:00Z",
               "idRequired": "false",
               "ServiceID": 720886,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4.25,
                 "seats": 3.25,
                 "onBoardExperience": 3.88,
                 "onTimeAD": 3.5
                },
                "reviewCount": 8,
                "posReviewCount": 4,
                "criReviewCount": 2,
                "imgReviewCount": 0,
                "totalRating": 3.13,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2330-JabbarTravels-NonACSeaterSleeper2+1"
               },
               "TravelsName": "Jabbar  Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770720886",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2330-JabbarTravels-NonACSeaterSleeper2+1",
               "arrdate": "2018-05-02T06:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.1",
               "DepartureTime": "10:00",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 23,
               "BusServiceID": "SCHG4LMF5181",
               "totalReviews": "290",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9m0Vz-3_4CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1459742",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "1459742-Madiwala",
                  "BPTime": "2018-05-01T10:00:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "1459744",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "1459744-Silk Board",
                  "BPTime": "2018-05-01T10:20:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17944264",
                  "BPContactNumber": "7550244433,7847845455",
                  "BPName": "17944264-Electronic City",
                  "BPTime": "2018-05-01T10:25:00Z",
                  "BPLandmark": "Near Audi Service ",
                  "BPLocation": "Electronic City Toll Plaza",
                  "BPAddress": "TOLL PLAZA,ON FLY OVER",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17913170",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17913170-Attibele",
                  "BPTime": "2018-05-01T10:30:00Z",
                  "BPLandmark": "Toll Gate",
                  "BPLocation": "Attibele Toll Gate",
                  "BPAddress": "Attibele Toll Gate,Attibele Toll Gate",
                  "BPCoordinates": "12.78,77.77"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "16:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "603",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "575.0",
                "adulttotalfare": "0",
                "servicetax": "28.75"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T15:20:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17979665-Sriperumbudur",
                  "DPId": "17979665",
                  "BPLandmark": "TOLL PLAZA",
                  "BPAddress": "Sri Perumbudur",
                  "DPLocation": "Sri Perumbudur Toll"
                 },
                 {
                  "DPTime": "2018-05-01T15:45:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17964596-Poonamallee",
                  "DPId": "17964596",
                  "BPLandmark": "Near KFC Poonamallee",
                  "BPAddress": "Motel Highway,",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T16:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "1459750-Koyambedu",
                  "DPId": "1459750",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi Axle Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "603",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 48,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T10:00:00Z",
               "idRequired": "false",
               "ServiceID": 926242,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 1,
                 "seats": 1,
                 "onBoardExperience": 1,
                 "onTimeAD": 1
                },
                "reviewCount": 1,
                "posReviewCount": 0,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 1,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1000-HebronTransports-VolvoACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770926242",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1000-HebronTransports-VolvoACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T16:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.3",
               "DepartureTime": "07:00",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 19,
               "BusServiceID": "SCHG4MF38BJ",
               "totalReviews": "559",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9m0Vz-773iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17956461",
                  "BPContactNumber": "7550244433,7847840107",
                  "BPName": "17956461-Majestic",
                  "BPTime": "2018-05-01T06:00:00Z",
                  "BPLandmark": "Opp. Majestic bus stand",
                  "BPLocation": "Majestic",
                  "BPAddress": "No.3a,Dhanvantri Road,Near amar hotel",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "17956463",
                  "BPContactNumber": "7550244433,7847840107",
                  "BPName": "17956463-Double Road",
                  "BPTime": "2018-05-01T06:15:00Z",
                  "BPLandmark": "Infront of Reliance market",
                  "BPLocation": "Double Road",
                  "BPAddress": "Outside Shanthi nagar bus stand,Double Road",
                  "BPCoordinates": "12.961,77.634"
                 },
                 {
                  "BPId": "17955011",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "17955011-Madiwala",
                  "BPTime": "2018-05-01T07:00:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17956453",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17956453-Silk Board",
                  "BPTime": "2018-05-01T07:05:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17956455",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17956455-Bommanahalli",
                  "BPTime": "2018-05-01T07:10:00Z",
                  "BPLandmark": "Next to Shell Petrol bunk",
                  "BPLocation": "Bommana Halli",
                  "BPAddress": "Next to Shell Petrol bunk,Near KPN Travels",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17956459",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "17956459-Electronic City",
                  "BPTime": "2018-05-01T07:15:00Z",
                  "BPLandmark": "Near Pallavi Restaurant",
                  "BPLocation": "ElectronicCity",
                  "BPAddress": "BMTC Bus depot,Near Pallavi Restaurant",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "13:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "603",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "575.0",
                "adulttotalfare": "0",
                "servicetax": "28.75"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T13:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17967087-Koyambedu",
                  "DPId": "17967087",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "603",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 43,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T07:00:00Z",
               "idRequired": "false",
               "ServiceID": 926300,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "staffBehaviour": 4,
                 "busQuality": 4,
                 "onBoardExperience": 2.86,
                 "onTimeAD": 2.57,
                 "acQuality": 4,
                 "stopOverExperience": 2.57,
                 "seats": 2.57,
                 "seater": 4,
                 "punctuality": 4
                },
                "reviewCount": 7,
                "posReviewCount": 3,
                "criReviewCount": 3,
                "imgReviewCount": 0,
                "totalRating": 2.86,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-0700-HebronTransports-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770926300",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-0700-HebronTransports-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T13:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.2",
               "DepartureTime": "14:00",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 20,
               "BusServiceID": "SCHG4MH2585",
               "totalReviews": "414",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9m0Vz-0E4SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1459774",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "1459774-Madiwala",
                  "BPTime": "2018-05-01T14:00:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "1459775",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "1459775-Silk Board",
                  "BPTime": "2018-05-01T14:15:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17944692",
                  "BPContactNumber": "7550244433,7847845455",
                  "BPName": "17944692-Electronic City",
                  "BPTime": "2018-05-01T14:25:00Z",
                  "BPLandmark": "Near Audi Service ",
                  "BPLocation": "Electronic City Toll Plaza",
                  "BPAddress": "TOLL PLAZA,ON FLY OVER",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "20:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "603",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "575.0",
                "adulttotalfare": "0",
                "servicetax": "28.75"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T20:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17968497-Koyambedu",
                  "DPId": "17968497",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "603",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 41,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T14:00:00Z",
               "idRequired": "false",
               "ServiceID": 926293,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4,
                 "seats": 3,
                 "onBoardExperience": 3,
                 "onTimeAD": 4
                },
                "reviewCount": 1,
                "posReviewCount": 1,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 4,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1400-HebronTransports-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770926293",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1400-HebronTransports-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T20:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.9",
               "DepartureTime": "16:00",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 16,
               "BusServiceID": "SCHG4MH376O",
               "totalReviews": "305",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9m0Vz-0E4iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1459782",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "1459782-Madiwala",
                  "BPTime": "2018-05-01T16:00:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "1459783",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "1459783-Silk Board",
                  "BPTime": "2018-05-01T16:15:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "1459784",
                  "BPContactNumber": "7550244433,7847845455",
                  "BPName": "1459784-Electronic City",
                  "BPTime": "2018-05-01T16:25:00Z",
                  "BPLandmark": "Near Audi Service ",
                  "BPLocation": "Electronic City Toll Plaza",
                  "BPAddress": "TOLL PLAZA,ON FLY OVER",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "22:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "603",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "575.0",
                "adulttotalfare": "0",
                "servicetax": "28.75"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T21:10:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17970142-Sriperumbudur",
                  "DPId": "17970142",
                  "BPLandmark": "TOLL PLAZA",
                  "BPAddress": "Sri Perumbudur",
                  "DPLocation": "Sri Perumbudur Toll"
                 },
                 {
                  "DPTime": "2018-05-01T21:30:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17955769-Poonamallee",
                  "DPId": "17955769",
                  "BPLandmark": "Near KFC Poonamallee",
                  "BPAddress": "Motel Highway,",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T22:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17969610-Koyambedu",
                  "DPId": "17969610",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "603",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 35,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T16:00:00Z",
               "idRequired": "false",
               "ServiceID": 926294,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3.8,
                 "seats": 3.8,
                 "onBoardExperience": 3.8,
                 "onTimeAD": 3.6
                },
                "reviewCount": 5,
                "posReviewCount": 3,
                "criReviewCount": 1,
                "imgReviewCount": 1,
                "totalRating": 3.8,
                "approvedImageCount": 1,
                "id": "Bangalore-Chennai-1600-HebronTransports-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770926294",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1600-HebronTransports-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T22:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.2",
               "DepartureTime": "23:15",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 21,
               "BusServiceID": "SCHG4MIUW87",
               "totalReviews": "432",
               "seat": "ST",
               "duration": "5h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9m0Vz-0E5CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1459796",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "1459796-Madiwala",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "1459797",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "1459797-Silk Board",
                  "BPTime": "2018-05-01T23:20:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "1459798",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "1459798-Bommanahalli",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Next to Shell Petrol bunk",
                  "BPLocation": "Bommana Halli",
                  "BPAddress": "Next to Shell Petrol bunk,Near KPN Travels",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "1459799",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "1459799-Electronic City",
                  "BPTime": "2018-05-01T23:35:00Z",
                  "BPLandmark": "Near Pallavi Restaurant",
                  "BPLocation": "ElectronicCity",
                  "BPAddress": "BMTC Bus depot,Near Pallavi Restaurant",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "603",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "575.0",
                "adulttotalfare": "0",
                "servicetax": "28.75"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17957108-Sriperumbudur",
                  "DPId": "17957108",
                  "BPLandmark": "TOLL PLAZA",
                  "BPAddress": "Sri Perumbudur",
                  "DPLocation": "Sri Perumbudur Toll"
                 },
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17957145-Poonamallee",
                  "DPId": "17957145",
                  "BPLandmark": "Near KFC Poonamallee",
                  "BPAddress": "Motel Highway,",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "1469909-Porur",
                  "DPId": "1469909",
                  "BPLandmark": "Porur Main Signal",
                  "BPAddress": "Near Hyderabad Briyani",
                  "DPLocation": "Near Porur Signal (DROP)"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17957077-Koyambedu",
                  "DPId": "17957077",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 },
                 {
                  "DPTime": "2018-05-03T05:10:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "1463937-Chennai",
                  "DPId": "1463937",
                  "BPLandmark": "DLF IT Park",
                  "BPAddress": "1/124, Mount Poonamalle Road, Manapakkam",
                  "DPLocation": "DLF IT Park"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17983865-Guindy",
                  "DPId": "17983865",
                  "BPLandmark": "MTC Bus Stop",
                  "BPAddress": "MTC Bus Stop",
                  "DPLocation": "Guindy Kaththipaara"
                 },
                 {
                  "DPTime": "2018-05-03T05:18:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "1463802-Vadapalani",
                  "DPId": "1463802",
                  "BPLandmark": "Vadapalani Murugan Temple",
                  "BPAddress": "Infront of  Vadapalani Murugan Temple",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-03T05:21:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "1463801-Ashok Pillar",
                  "DPId": "1463801",
                  "BPLandmark": "Opp. Udhayam Theatre",
                  "BPAddress": "Opp. SBI BANK ,",
                  "DPLocation": "Ashok Pillar Bus Stop"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "603",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 42,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:15:00Z",
               "idRequired": "false",
               "ServiceID": 926296,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 2.5,
                 "seats": 2.5,
                 "onBoardExperience": 2.5,
                 "onTimeAD": 3
                },
                "reviewCount": 2,
                "posReviewCount": 1,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 3,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2315-HebronTransports-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770926296",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2315-HebronTransports-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-02T05:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.2",
               "DepartureTime": "23:30",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": 9,
               "BusServiceID": "SCHG4MI42H2",
               "totalReviews": "608",
               "seat": "ST",
               "duration": "5h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9m0Vz-394iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1459801",
                  "BPContactNumber": "7847845454,7550244433",
                  "BPName": "1459801-Madiwala",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Opp.Amba Bajaj Showroom,opp.savoury business hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "1, i Nest suites, Hosur Main Road,Madiwala",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "1459802",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "1459802-Silk Board",
                  "BPTime": "2018-05-01T23:35:00Z",
                  "BPLandmark": "Towards Hosur mainroad",
                  "BPLocation": "Silk  Board ",
                  "BPAddress": "Infront of Renault Showroom,After Silkboard flyover",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "1459803",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "1459803-Bommanahalli",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "Next to Shell Petrol bunk",
                  "BPLocation": "Bommana Halli",
                  "BPAddress": "Next to Shell Petrol bunk,Near KPN Travels",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "1459804",
                  "BPContactNumber": "7550244433,7847845454",
                  "BPName": "1459804-Electronic City",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "Near Pallavi Restaurant",
                  "BPLocation": "ElectronicCity",
                  "BPAddress": "BMTC Bus depot,Near Pallavi Restaurant",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Hammer (to break glass),WIFI,Emergency exit,Cup holder",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:15",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "546",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "520.0",
                "adulttotalfare": "0",
                "servicetax": "26.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15152",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:40:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17958143-Sriperumbudur",
                  "DPId": "17958143",
                  "BPLandmark": "TOLL PLAZA",
                  "BPAddress": "Sri Perumbudur",
                  "DPLocation": "Sri Perumbudur Toll"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "17958271-Poonamallee",
                  "DPId": "17958271",
                  "BPLandmark": "Near KFC Poonamallee",
                  "BPAddress": "Motel Highway,",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "7550244111,7550244222",
                  "DPName": "1459805-Koyambedu",
                  "DPId": "1459805",
                  "BPLandmark": "Opp Vijayakhanth Kalyanamandabam",
                  "BPAddress": "Koyambedu ",
                  "DPLocation": "Koyambedu "
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "546",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 24,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:30:00Z",
               "idRequired": "false",
               "ServiceID": 926224,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "staffBehaviour": 2.5,
                 "busQuality": 2.5,
                 "onBoardExperience": 3.4,
                 "onTimeAD": 3,
                 "acQuality": 2.5,
                 "stopOverExperience": 3.2,
                 "seats": 3.2,
                 "seater": 2.5,
                 "punctuality": 2.5
                },
                "reviewCount": 5,
                "posReviewCount": 3,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 3.4,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2330-HebronTransports-VolvoACSemiSleeper2+2"
               },
               "TravelsName": "Hebron Transports",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770926224",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2330-HebronTransports-VolvoACSemiSleeper2+2",
               "arrdate": "2018-05-02T05:15:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.9",
               "DepartureTime": "22:45",
               "cancellationPolicy": "0:4:100:0;4:12:50:0;12:24:20:0;24:168:15:0;168:-1:15:0",
               "avlWindowSeats": 19,
               "BusServiceID": "3425",
               "totalReviews": "228",
               "seat": "SL",
               "duration": "6h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9mkY0PD84CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "nonac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17934970",
                  "BPContactNumber": "9591812213",
                  "BPName": "17934970-KR.PURAM",
                  "BPTime": "2018-05-01T20:30:00Z",
                  "BPLandmark": "Opp Syndicate Bank",
                  "BPLocation": "K R Puram",
                  "BPAddress": "Opp.Nisarga Lodge, Near Ganesha Temple, K R Puram Bus Stop",
                  "BPCoordinates": "13.004016,77.6877764999"
                 },
                 {
                  "BPId": "17735027",
                  "BPContactNumber": "   080 41241276   9900610889",
                  "BPName": "17735027-Gandhinagar",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": "Gandinagar Petrole Pump",
                  "BPLocation": "Majestic Gandhinagar (Pickup Van/Bus)",
                  "BPAddress": "shop  No 5   kurubara Sangha Building",
                  "BPCoordinates": "12.979173,77.577047"
                 },
                 {
                  "BPId": "72863",
                  "BPContactNumber": "9972500300",
                  "BPName": "72863-Kalasipalyam",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Opp Bangalore Medical College",
                  "BPLocation": "Kalasipalyam",
                  "BPAddress": "# 321 TSP Road Opp BMC Kalasipalyam, Call : 9972568052/080 26801616/17",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17937644",
                  "BPContactNumber": "9900087253",
                  "BPName": "17937644-Wilson Garden",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "# 24/3 H Siddaiah Road 5th Main Wilsongarden",
                  "BPLocation": "Wilsongarden",
                  "BPAddress": " # 24/3 H Siddaia road 5th main Wilsongarden ",
                  "BPCoordinates": "12.9481933,77.59718650000002"
                 },
                 {
                  "BPId": "403678",
                  "BPContactNumber": "25501686 9900087292",
                  "BPName": "403678-Madiwala",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Opp Madiwala Bmtc Bus Stop Hosur Main Road",
                  "BPLocation": "Madiwala",
                  "BPAddress": "#324/1 1st floor Technic Ceramics Building After Madiwala Police Station",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17937811",
                  "BPContactNumber": "25501686 9900087292",
                  "BPName": "17937811-Silk Board",
                  "BPTime": "2018-05-01T23:20:00Z",
                  "BPLandmark": "Opp Madiwala Bmtc Bus Stop Hosur Main Road",
                  "BPLocation": "Silk Board Towards Madiwala Police station & Darga",
                  "BPAddress": "#324/1 1st floor Technic Ceramics Building After Madiwala Police Station",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "395768",
                  "BPContactNumber": "9900034553",
                  "BPName": "395768-Bommanahalli",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Near Hemadri Ceramics,Hosur Main Road",
                  "BPLocation": "BommanahalliS R S Travels",
                  "BPAddress": "Near Hemadri ceramics",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17937951",
                  "BPContactNumber": "9901844485 080 65624527",
                  "BPName": "17937951-Bommasandra",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "near D.MART towards hosur road bommasandra",
                  "BPLocation": "Bommsandra SRS Travels ",
                  "BPAddress": "SRS Travels bommsandra signal and circle ",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Fire Extinguisher,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),Pillow,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "711",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "699.0",
                "adulttotalfare": "0",
                "servicetax": "0.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "22",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T06:00:00Z",
                  "BPContactNumber": "09840937910",
                  "DPName": "17936970-Koyambedu",
                  "DPId": "17936970",
                  "BPLandmark": "Opp Koyambedu Signal",
                  "BPAddress": "#105,100 Feet Road Koyambedu ",
                  "DPLocation": "Koyambedu"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Non A/C Sleeper  (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "711",
                  "busCondition": "nonac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 29,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:45:00Z",
               "idRequired": "false",
               "ServiceID": 557512,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "staffBehaviour": 5,
                 "busQuality": 5,
                 "onBoardExperience": 3,
                 "onTimeAD": 2.88,
                 "acQuality": 5,
                 "stopOverExperience": 3.25,
                 "seats": 3,
                 "seater": 5,
                 "punctuality": 5
                },
                "reviewCount": 8,
                "posReviewCount": 4,
                "criReviewCount": 2,
                "imgReviewCount": 0,
                "totalRating": 3.25,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2245-SRSTravels-NonACSleeper2+1"
               },
               "TravelsName": "SRS Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770557512",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-2245-SRSTravels-NonACSleeper2+1",
               "arrdate": "2018-05-02T05:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.9",
               "DepartureTime": "22:15",
               "cancellationPolicy": "0:4:100:0;4:12:50:0;12:24:20:0;24:168:15:0;168:-1:15:0",
               "avlWindowSeats": 17,
               "BusServiceID": "1623",
               "totalReviews": "229",
               "seat": "SL",
               "duration": "6h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9mcV0O0C5SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "nonac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17935266",
                  "BPContactNumber": "080 65468012  8861209044",
                  "BPName": "17935266-Dasarahalli",
                  "BPTime": "2018-05-01T19:30:00Z",
                  "BPLandmark": "Near 8th Mile Signal",
                  "BPLocation": "8th Mile",
                  "BPAddress": "shop no 125/6 tumkur road 100meter before 8th mile signal opposite adhishwar and parishkar",
                  "BPCoordinates": "13.9399089,76.9654727"
                 },
                 {
                  "BPId": "17932848",
                  "BPContactNumber": "080 28390466",
                  "BPName": "17932848-Jalahalli",
                  "BPTime": "2018-05-01T19:35:00Z",
                  "BPLandmark": "Jalahalli Cross",
                  "BPLocation": "Jalahalli Pickup Van/Bus",
                  "BPAddress": "2013, Sri Laxmi Towers, Jalahalli Circle,",
                  "BPCoordinates": "13.052,77.541"
                 },
                 {
                  "BPId": "17935064",
                  "BPContactNumber": "080 41159609 23574777",
                  "BPName": "17935064-Yeshwantpur",
                  "BPTime": "2018-05-01T19:45:00Z",
                  "BPLandmark": "Near Govardhan Theater",
                  "BPLocation": " Yeshwantpur Govardhan Theater",
                  "BPAddress": "SRS Travels C/o Sri Manikanta tours and Travels No 46/1 C M Mohan Bulding ,Near Govardhan Theater",
                  "BPCoordinates": "13.0279661,77.54091560000006"
                 },
                 {
                  "BPId": "17932846",
                  "BPContactNumber": "080 23324945",
                  "BPName": "17932846-Rajajinagar",
                  "BPTime": "2018-05-01T20:00:00Z",
                  "BPLandmark": "Near Navrang",
                  "BPLocation": "Rajajinagar Pickup Van/Bus",
                  "BPAddress": "# 122, 13th Cross, Dr. Rajkumar Road, Rajaji Nagar OPP DCB BANK ,  Opp: D C B Bank Call : Call : 9900087294/9900087207",
                  "BPCoordinates": "12.9900578,77.55249249999997"
                 },
                 {
                  "BPId": "17934970",
                  "BPContactNumber": "9591812213",
                  "BPName": "17934970-KR.PURAM",
                  "BPTime": "2018-05-01T20:30:00Z",
                  "BPLandmark": "Opp Syndicate Bank",
                  "BPLocation": "K R Puram",
                  "BPAddress": "Opp.Nisarga Lodge, Near Ganesha Temple, K R Puram Bus Stop",
                  "BPCoordinates": "13.004016,77.6877764999"
                 },
                 {
                  "BPId": "17938028",
                  "BPContactNumber": "9740033994",
                  "BPName": "17938028-Anand Rao Circle",
                  "BPTime": "2018-05-01T21:15:00Z",
                  "BPLandmark": "Anand Rao Circle",
                  "BPLocation": "Majestic Ananda Rao Circle",
                  "BPAddress": "SRS Travels Parking, Opp Fortune Hotel, opp fortune hotel near raichur power corporation LTD Call : 9900087278",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "1207372",
                  "BPContactNumber": "9900063480 9900050511 9900067692 9845600080 9880955077",
                  "BPName": "1207372-Bangalore",
                  "BPTime": "2018-05-01T21:30:00Z",
                  "BPLandmark": "ITPL Front Gate ",
                  "BPLocation": "ITPL Front Gate TN (Pickup Van/Bus)",
                  "BPAddress": "ITPL Front Gate ",
                  "BPCoordinates": "12.971,77.59"
                 },
                 {
                  "BPId": "1207373",
                  "BPContactNumber": "9900063480 9900050511 9900067692 9845600080 9880955077",
                  "BPName": "1207373-Bangalore",
                  "BPTime": "2018-05-01T21:35:00Z",
                  "BPLandmark": "Saibaba Hospital",
                  "BPLocation": "Saibaba Hospital TN (Pickup Van/Bus)",
                  "BPAddress": "Saibaba Hospital",
                  "BPCoordinates": "12.971,77.59"
                 },
                 {
                  "BPId": "1207374",
                  "BPContactNumber": "9900063480 9900050511 9900067692 9845600080 9880955077",
                  "BPName": "1207374-Bangalore",
                  "BPTime": "2018-05-01T21:40:00Z",
                  "BPLandmark": "Vaidehi Hospital Cross",
                  "BPLocation": "Vydehi Hospital Cross TN (Pickup Van/Bus)",
                  "BPAddress": "Vydehi Hospital Cross",
                  "BPCoordinates": "12.971,77.59"
                 },
                 {
                  "BPId": "1207375",
                  "BPContactNumber": "9900063480 9900050511 9900067692 9845600080 9880955077",
                  "BPName": "1207375-Bangalore",
                  "BPTime": "2018-05-01T21:50:00Z",
                  "BPLandmark": "Kundhanahalli (Kalyani motors) Near HP petrol pump",
                  "BPLocation": "Kundhanahalli Kalyani Moters TN (Pickup Van/Bus)",
                  "BPAddress": "Kundhanahalli ",
                  "BPCoordinates": "12.971,77.59"
                 },
                 {
                  "BPId": "1207376",
                  "BPContactNumber": "9731625500",
                  "BPName": "1207376-Marathahalli",
                  "BPTime": "2018-05-01T22:05:00Z",
                  "BPLandmark": "Near Airtel 4g Shop  From Kalamandir Towards Tin Factory",
                  "BPLocation": "Marathalli S R S Travels TN Airtel 4g Shop Towards Tin Fact (Pickup Van/Bus)",
                  "BPAddress": "S R S travels Site No 36/37 chinapanahalli village ",
                  "BPCoordinates": "12.9511982,77.6997663"
                 },
                 {
                  "BPId": "72863",
                  "BPContactNumber": "9972500300",
                  "BPName": "72863-Kalasipalyam",
                  "BPTime": "2018-05-01T22:15:00Z",
                  "BPLandmark": "Opp Bangalore Medical College",
                  "BPLocation": "Kalasipalyam",
                  "BPAddress": "# 321 TSP Road Opp BMC Kalasipalyam, Call : 9972568052/080 26801616/17, Call : 9972568052/080 26801616/17",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "1207377",
                  "BPContactNumber": "9900063480 9900050511 9900067692 9845600080 9880955077",
                  "BPName": "1207377-Bellandur",
                  "BPTime": "2018-05-01T22:20:00Z",
                  "BPLandmark": "Belanduru Central Mall",
                  "BPLocation": "Belanduru TN (Pickup Van/Bus)",
                  "BPAddress": "Belanduru Central Mall opp cafe coffee day",
                  "BPCoordinates": "12.92,77.67"
                 },
                 {
                  "BPId": "1207378",
                  "BPContactNumber": "9900063480 9900050511 9900067692 9845600080 9880955077",
                  "BPName": "1207378-HSR Layout",
                  "BPTime": "2018-05-01T22:25:00Z",
                  "BPLandmark": "Land Mark Nandus Hotel And Indian Oil Petrol Bunk",
                  "BPLocation": "H S R Layout TN (Pickup Van/Bus)",
                  "BPAddress": "Sri Balaji Tour andTravels No 1562 Outer Ring Road",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17937644",
                  "BPContactNumber": "9900087253",
                  "BPName": "17937644-Wilson Garden",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "# 24/3 H Siddaiah Road 5th Main Wilsongarden",
                  "BPLocation": "Wilsongarden",
                  "BPAddress": " # 24/3 H Siddaia road 5th main Wilsongarden , Near Shanti Nagar B M T C Bus Stand",
                  "BPCoordinates": "12.9481933,77.59718650000002"
                 },
                 {
                  "BPId": "403678",
                  "BPContactNumber": "25501686 9900087292",
                  "BPName": "403678-Madiwala",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Opp Madiwala Bmtc Bus Stop Hosur Main Road",
                  "BPLocation": "Madiwala",
                  "BPAddress": "#324/1 1st floor Technic Ceramics Building After Madiwala Police Station",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17937811",
                  "BPContactNumber": "25501686 9900087292",
                  "BPName": "17937811-Silk Board",
                  "BPTime": "2018-05-01T23:05:00Z",
                  "BPLandmark": "Opp Madiwala Bmtc Bus Stop Hosur Main Road",
                  "BPLocation": "Silk Board Towards Madiwala Police station & Darga",
                  "BPAddress": "#324/1 1st floor Technic Ceramics Building After Madiwala Police Station",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "395768",
                  "BPContactNumber": "9900034553",
                  "BPName": "395768-Bommanahalli",
                  "BPTime": "2018-05-01T23:10:00Z",
                  "BPLandmark": "Near Hemadri Ceramics,Hosur Main Road",
                  "BPLocation": "BommanahalliS R S Travels",
                  "BPAddress": "Near Hemadri ceramics",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17937951",
                  "BPContactNumber": "9901844485 080 65624527",
                  "BPName": "17937951-Bommasandra",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "near D.MART towards hosur road bommasandra",
                  "BPLocation": "Bommsandra SRS Travels ",
                  "BPAddress": "SRS Travels bommsandra signal and circle , bomasandra Call : 9972500300/080 26801616/1717",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Fire Extinguisher,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),Pillow,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "711",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "699.0",
                "adulttotalfare": "0",
                "servicetax": "0.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "22",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "09840937910",
                  "DPName": "17936970-Koyambedu",
                  "DPId": "17936970",
                  "BPLandmark": "Opp Koyambedu Signal",
                  "BPAddress": "#105,100 Feet Road Koyambedu , near krishna sweet ot k f c restarant  Call : 044-23455192",
                  "DPLocation": "Koyambedu"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Non A/C Sleeper  (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "711",
                  "busCondition": "nonac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 26,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:15:00Z",
               "idRequired": "false",
               "ServiceID": 327277,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "staffBehaviour": 4,
                 "busQuality": 4,
                 "onBoardExperience": 2.29,
                 "onTimeAD": 3.29,
                 "acQuality": 4,
                 "stopOverExperience": 3.29,
                 "seats": 2.57,
                 "seater": 4,
                 "punctuality": 5
                },
                "reviewCount": 7,
                "posReviewCount": 2,
                "criReviewCount": 4,
                "imgReviewCount": 0,
                "totalRating": 2.29,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2215-SRSTravels-NonACSleeper2+1"
               },
               "TravelsName": "SRS Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770327277",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-2215-SRSTravels-NonACSleeper2+1",
               "arrdate": "2018-05-02T05:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.2",
               "DepartureTime": "22:00",
               "cancellationPolicy": "0:3:100:0;3:24:25:0;24:-1:15:0",
               "avlWindowSeats": 21,
               "BusServiceID": "1353",
               "totalReviews": "156",
               "seat": "ST",
               "duration": "6h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9mca0usC5CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "77840",
                  "BPContactNumber": "080-22107192,22107193",
                  "BPName": "77840-Wilson Garden",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": "NEAR BMTC BUS STAND",
                  "BPLocation": "WILSON GARDEN(KPN)",
                  "BPAddress": "No 24/3,H.Siddaiah Road,Double Road,Bangalore.",
                  "BPCoordinates": "12.9481933,77.59718650000002"
                 },
                 {
                  "BPId": "17936431",
                  "BPContactNumber": "080-25525699,25526055",
                  "BPName": "17936431-Madiwala",
                  "BPTime": "2018-05-01T22:15:00Z",
                  "BPLandmark": "Opp Mas Residency, Hosur Main Road",
                  "BPLocation": "MADIWALA(KPN)",
                  "BPAddress": "Madiwala,Koramangala,Bangalore.",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "1049694",
                  "BPContactNumber": "080-42150124,9148903539",
                  "BPName": "1049694-Bommasandra",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "Mangutha timper building",
                  "BPLocation": "BOMMACHANDRA(KPN)",
                  "BPAddress": "First cross,Vidya Nager,Opp SKF,Hosur main road",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Movie,Fire Extinguisher,Blankets,Charging Point,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "04:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1155",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1100.0",
                "adulttotalfare": "0",
                "servicetax": "55.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "102",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T03:30:00Z",
                  "BPContactNumber": "04427156998, 9884671728",
                  "DPName": "139256-Sriperumbudur",
                  "DPId": "139256",
                  "BPLandmark": "Surya Building",
                  "BPAddress": "BLR Main Rd,Erunkattukottai,Chennai",
                  "DPLocation": "SRIPERAMPATHUR(KPN)"
                 },
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "044-43593001,9489900997",
                  "DPName": "77838-Guindy",
                  "DPId": "77838",
                  "BPLandmark": "Opp SBI",
                  "BPAddress": "No.18,GST Road,Near by hotel hablis,Guindy-",
                  "DPLocation": "GUINDY(KPN)"
                 },
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "044-24347011, 24336854",
                  "DPName": "77837-T Nagar",
                  "DPId": "77837",
                  "BPLandmark": "Panagal park,Near Ordinates park",
                  "BPAddress": "No 15,VN Road,Chennai.",
                  "DPLocation": "T.NAGAR-V.N.ROAD(KPN)"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "04428194436, 9486106799",
                  "DPName": "77835-Egmore",
                  "DPId": "77835",
                  "BPLandmark": "Opp Egmore Railway station",
                  "BPAddress": "No 19,Whannels Road,Egmore,Chennai.",
                  "DPLocation": "EGMORE(KPN)"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "044-24797998, 24791525",
                  "DPName": "17937024-Omni Bus Stand",
                  "DPId": "17937024",
                  "BPLandmark": "Chennai Omni Bus Stand",
                  "BPAddress": "No.17,Koyambedu,Chennai.",
                  "DPLocation": "KOYAMBEDU OMNI BUS STAND"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi Axle Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1155",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 42,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:00:00Z",
               "idRequired": "false",
               "ServiceID": 379076,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3,
                 "seats": 3.33,
                 "onBoardExperience": 3.22,
                 "onTimeAD": 3.44
                },
                "reviewCount": 9,
                "posReviewCount": 5,
                "criReviewCount": 4,
                "imgReviewCount": 0,
                "totalRating": 3.22,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2200-KPN-VolvoACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "K.P.N",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770379076",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2200-KPN-VolvoACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-02T04:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.1",
               "DepartureTime": "23:30",
               "cancellationPolicy": "0:4:100:0;4:12:50:0;12:24:20:0;24:168:15:0;168:-1:15:0",
               "avlWindowSeats": 25,
               "BusServiceID": "1696",
               "totalReviews": "373",
               "seat": "ST",
               "duration": "6h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9mcW0O8D4CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17934970",
                  "BPContactNumber": "9591812213",
                  "BPName": "17934970-KR.PURAM",
                  "BPTime": "2018-05-01T20:30:00Z",
                  "BPLandmark": "Opp Syndicate Bank",
                  "BPLocation": "K R Puram",
                  "BPAddress": "Opp.Nisarga Lodge, Near Ganesha Temple, K R Puram Bus Stop",
                  "BPCoordinates": "13.004016,77.6877764999"
                 },
                 {
                  "BPId": "79674",
                  "BPContactNumber": "9972500300",
                  "BPName": "79674-Jaya Nagar",
                  "BPTime": "2018-05-01T22:25:00Z",
                  "BPLandmark": "Near R V Nursing College Gate  Opp Coffee Day Call  080 26801616",
                  "BPLocation": "Jay Nagar 4th Block TN Pickup Van/Bus",
                  "BPAddress": "pick up point only R V nursing college gate opp coffee day jayanagar 4th block, opp: Jayanagar Shopping Complex( Near Ganesh Juice Centre)",
                  "BPCoordinates": "12.925,77.59"
                 },
                 {
                  "BPId": "17937438",
                  "BPContactNumber": "9972500300-9972568052-08026801616",
                  "BPName": "17937438-Jaya Nagar",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "Near East End Signal",
                  "BPLocation": "Jaya Nagar 9th BlockTN Pickup Van/Bus",
                  "BPAddress": " Opp Rajkumar Stachue towards banashankari, cell : 9972500300/080 26801616",
                  "BPCoordinates": "12.925,77.59"
                 },
                 {
                  "BPId": "17735027",
                  "BPContactNumber": "   080 41241276   9900610889",
                  "BPName": "17735027-Gandhinagar",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Gandinagar Petrole Pump",
                  "BPLocation": "Majestic Gandhinagar Pickup Van/Bus",
                  "BPAddress": "shop  No 5   kurubara Sangha Building",
                  "BPCoordinates": "12.979173,77.577047"
                 },
                 {
                  "BPId": "72863",
                  "BPContactNumber": "9972500300",
                  "BPName": "72863-Kalasipalyam",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Opp Bangalore Medical College",
                  "BPLocation": "Kalasipalyam",
                  "BPAddress": "# 321 TSP Road Opp BMC Kalasipalyam, Call : 9972568052/080 26801616/17, Call : 9972568052/080 26801616/17",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17937644",
                  "BPContactNumber": "9900087253",
                  "BPName": "17937644-Wilson Garden",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "# 24/3 H Siddaiah Road 5th Main Wilsongarden",
                  "BPLocation": "Wilsongarden",
                  "BPAddress": " # 24/3 H Siddaia road 5th main Wilsongarden , Near Shanti Nagar B M T C Bus Stand",
                  "BPCoordinates": "12.9481933,77.59718650000002"
                 },
                 {
                  "BPId": "403678",
                  "BPContactNumber": "25501686 9900087292",
                  "BPName": "403678-Madiwala",
                  "BPTime": "2018-05-01T23:50:00Z",
                  "BPLandmark": "Opp Madiwala Bmtc Bus Stop Hosur Main Road",
                  "BPLocation": "Madiwala",
                  "BPAddress": "#324/1 1st floor Technic Ceramics Building After Madiwala Police Station",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17937811",
                  "BPContactNumber": "25501686 9900087292",
                  "BPName": "17937811-Silk Board",
                  "BPTime": "2018-05-01T23:52:00Z",
                  "BPLandmark": "Opp Madiwala Bmtc Bus Stop Hosur Main Road",
                  "BPLocation": "Silk Board Towards Madiwala Police station & Darga",
                  "BPAddress": "#324/1 1st floor Technic Ceramics Building After Madiwala Police Station",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "395768",
                  "BPContactNumber": "9900034553",
                  "BPName": "395768-Bommanahalli",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "Near Hemadri Ceramics,Hosur Main Road",
                  "BPLocation": "BommanahalliS R S Travels",
                  "BPAddress": "Near Hemadri ceramics",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17937951",
                  "BPContactNumber": "9901844485 080 65624527",
                  "BPName": "17937951-Bommasandra",
                  "BPTime": "2018-05-01T23:59:00Z",
                  "BPLandmark": "near D.MART towards hosur road bommasandra",
                  "BPLocation": "Bommsandra SRS Travels ",
                  "BPAddress": "SRS Travels bommsandra signal and circle , bomasandra Call : 9972500300/080 26801616/1717",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Central TV,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),Safety belt,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "06:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "907",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "850.0",
                "adulttotalfare": "0",
                "servicetax": "42.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "22",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "09840937910",
                  "DPName": "17936970-Koyambedu",
                  "DPId": "17936970",
                  "BPLandmark": "Opp Koyambedu Signal",
                  "BPAddress": "#105,100 Feet Road Koyambedu , near krishna sweet ot k f c restarant  Call : 044-23455192",
                  "DPLocation": "Koyambedu"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Mercedes Benz Multi Axle (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "907",
                  "busCondition": "ac",
                  "seatType": "Seater",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 52,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:30:00Z",
               "idRequired": "false",
               "ServiceID": 337482,
               "busCompany": "mercedes",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 2.5,
                 "seats": 2.5,
                 "onBoardExperience": 1.5,
                 "onTimeAD": 3
                },
                "reviewCount": 2,
                "posReviewCount": 0,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 2,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2330-SRSTravels-MercedesBenzMultiAxle2+2"
               },
               "TravelsName": "SRS Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770337482",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-2330-SRSTravels-MercedesBenzMultiAxle2+2",
               "arrdate": "2018-05-02T06:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.3",
               "DepartureTime": "23:15",
               "cancellationPolicy": "0:24:100:0;24:48:20:0;48:168:15:0;168:-1:10:0",
               "avlWindowSeats": 20,
               "BusServiceID": "3",
               "totalReviews": "436",
               "seat": "SL",
               "duration": "6h 15m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9mQTyu4C3yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17933469",
                  "BPContactNumber": "9845047994 08022371266 08022371277",
                  "BPName": "17933469-Jalahalli",
                  "BPTime": "2018-05-01T20:15:00Z",
                  "BPLandmark": "Jalahalli Circle",
                  "BPLocation": "Jaalahalli Cross",
                  "BPAddress": "Sarathi Holidays, near KSRTC counter",
                  "BPCoordinates": "13.052,77.541"
                 },
                 {
                  "BPId": "17933476",
                  "BPContactNumber": "9845047994",
                  "BPName": "17933476-Gangamma Circle",
                  "BPTime": "2018-05-01T20:25:00Z",
                  "BPLandmark": "Gangamma Circle",
                  "BPLocation": "Gangamma CirclePick Up By Mini Bus (Pickup Van/Bus)",
                  "BPAddress": "Gangamma Circle",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17933508",
                  "BPContactNumber": "9611934576",
                  "BPName": "17933508-MATHIKERA BNG",
                  "BPTime": "2018-05-01T20:45:00Z",
                  "BPLandmark": "Opp To Karnataka Bank Atm (Smitha Stores Nearby)",
                  "BPLocation": "MathikerePick Up By Mini Bus (Pickup Van/Bus)",
                  "BPAddress": "Greenline Travels, 25/1 HMT Main Road",
                  "BPCoordinates": "13.0571273,77.5023427"
                 },
                 {
                  "BPId": "17931632",
                  "BPContactNumber": "9845047994",
                  "BPName": "17931632-Yeshwantpur",
                  "BPTime": "2018-05-01T20:55:00Z",
                  "BPLandmark": "Yashawanth Pur Circle",
                  "BPLocation": "Yashwanth Pur Circle (Pickup Van/Bus)",
                  "BPAddress": "Yashawanthpur circle",
                  "BPCoordinates": "13.0279661,77.54091560000006"
                 },
                 {
                  "BPId": "102718",
                  "BPContactNumber": "08041139854",
                  "BPName": "102718-Marathahalli",
                  "BPTime": "2018-05-01T21:50:00Z",
                  "BPLandmark": "Opp. Kalamandir , Infront Of Ashirwad Hotel",
                  "BPLocation": "Marathahalli Mh",
                  "BPAddress": "opp; kalamandir, infront of Ashirwad hotel",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "17933599",
                  "BPContactNumber": "9845047994",
                  "BPName": "17933599-Kalasipalyam",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": "Near Maharaja Statue",
                  "BPLocation": "Kalasipalyam Kp (Pickup Van/Bus)",
                  "BPAddress": "Dreamline Travels",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17931683",
                  "BPContactNumber": "9606221798",
                  "BPName": "17931683-Race Course Road",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": "Near Gandhi Statue, Race Course Road",
                  "BPLocation": "Anandrao circle Race Course Road Maurya Hotel",
                  "BPAddress": "OPP. Maurya HOTEL, Race course road, NEAR GANDHI STATUE",
                  "BPCoordinates": "12.961553,77.615719"
                 },
                 {
                  "BPId": "17931685",
                  "BPContactNumber": "9845047994   ",
                  "BPName": "17931685-Indiranagar",
                  "BPTime": "2018-05-01T22:10:00Z",
                  "BPLandmark": "Opp: Punjab National Bank, ( Near Rto )",
                  "BPLocation": "Indira Nagar RTO Pickup Van/Bus",
                  "BPAddress": "Mangala Travels ( Sdhueendra condiments)",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17950503",
                  "BPContactNumber": "9845047994",
                  "BPName": "17950503-Old Airport Road",
                  "BPTime": "2018-05-01T22:15:00Z",
                  "BPLandmark": "Old Airport Road",
                  "BPLocation": "Old Airport Road Total Mall Van/Bus Pickup Pickup Van/Bus",
                  "BPAddress": "Infront of Total mall gate, call to Greenline for main bus departure timings",
                  "BPCoordinates": "12.954628,77.682252"
                 },
                 {
                  "BPId": "17933634",
                  "BPContactNumber": "08041136874",
                  "BPName": "17933634-Domlur",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Near Hdfc Bank & Icici Bank, Opp.Creation Jewellers",
                  "BPLocation": "Domlur",
                  "BPAddress": "#302,7th Cross,Domlur Layout, call for main bus departure timings ",
                  "BPCoordinates": "12.96,77.63"
                 },
                 {
                  "BPId": "17933697",
                  "BPContactNumber": "9845047994 08022371266 08022371277",
                  "BPName": "17933697-Madiwala",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "next to wipro bulding   ",
                  "BPLocation": "MADIWALA",
                  "BPAddress": "Greenline Travels & Holidays, No: 125 Ranganatha Complex near Madiwala police station , call to Greenline travels for main bus dep.timings",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17931755",
                  "BPContactNumber": "7022953245",
                  "BPName": "17931755-HSR Layout",
                  "BPTime": "2018-05-01T23:20:00Z",
                  "BPLandmark": "Near Bda Complex, In Front Of Kfc",
                  "BPLocation": "Hsr Layout",
                  "BPAddress": "Near BDA complex, in front of KFC",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17931774",
                  "BPContactNumber": "7022953245",
                  "BPName": "17931774-Bommanahalli",
                  "BPTime": "2018-05-01T23:25:00Z",
                  "BPLandmark": "Near Shell Petrol Bunk, Near Bosch",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "near Shell petrol bunk, near bosch",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17933741",
                  "BPContactNumber": "7022953245",
                  "BPName": "17933741-Electronic City",
                  "BPTime": "2018-05-01T23:35:00Z",
                  "BPLandmark": "Electronic City Toll",
                  "BPLocation": "Electronic City Toll",
                  "BPAddress": "Electronic city toll Gate, After audi Car service centre",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17933728",
                  "BPContactNumber": "08042189991",
                  "BPName": "17933728-Bommasandra",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "Near Kpn Travels, Opp Skf Bearings",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "Pavan Travels, Bommasandra",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17931821",
                  "BPContactNumber": "08042189991",
                  "BPName": "17931821-Attibele",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "Attibele Toll Gate",
                  "BPLocation": "Attibele Toll",
                  "BPAddress": "near Attibele Toll, ph. 7022953245",
                  "BPCoordinates": "12.78,77.77"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Snacks,Hammer (to break glass),WIFI,Pillow,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "813",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "775.0",
                "adulttotalfare": "0",
                "servicetax": "38.75"
               },
               "dst_vendor_id": "102",
               "OperatorID": "3601",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:15:00Z",
                  "BPContactNumber": "044 42818024 9380552914 9282440068",
                  "DPName": "17969206-Sriperumbudur",
                  "DPId": "17969206",
                  "BPLandmark": "Toll Gate Sriperumbudur",
                  "BPAddress": "Toll gate sriperumbudur",
                  "DPLocation": "Sri Perumbadur"
                 },
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "044 42818024 9380552914 9282440068",
                  "DPName": "17961998-Poonamallee",
                  "DPId": "17961998",
                  "BPLandmark": "Kfc",
                  "BPAddress": "poonamallee high way KFC ",
                  "DPLocation": "Poonamallee Bypass"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "044 42818024 9380552914 9282440068",
                  "DPName": "17953981-Koyambedu",
                  "DPId": "17953981",
                  "BPLandmark": "Omni Bus Terminal Entrance",
                  "BPAddress": "Greenline Travels,G-25, Sriji Majestic Complex,, OMNI bus terminal entrance",
                  "DPLocation": "Koyembedu"
                 },
                 {
                  "DPTime": "2018-05-03T05:10:00Z",
                  "BPContactNumber": "9282440068",
                  "DPName": "17957601-Ashok Pillar",
                  "DPId": "17957601",
                  "BPLandmark": "Ashoka Pillar",
                  "BPAddress": "Ashoka pillar",
                  "DPLocation": "Ashoka Pillar"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "9282440068",
                  "DPName": "17958974-Vadapalani",
                  "DPId": "17958974",
                  "BPLandmark": "Vadapalani",
                  "BPAddress": "Vadapani ",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-03T05:25:00Z",
                  "BPContactNumber": "9845047994",
                  "DPName": "17961787-Guindy",
                  "DPId": "17961787",
                  "BPLandmark": "Guindy",
                  "BPAddress": "Guindy",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "9282440068",
                  "DPName": "17957726-Adyar",
                  "DPId": "17957726",
                  "BPLandmark": "Behind Bsnl Telephone Exchange",
                  "BPAddress": "Lucky Travels,#6, 1st Avenue,, Shastri Nagar, Adyar",
                  "DPLocation": "Adyar"
                 },
                 {
                  "DPTime": "2018-05-03T05:50:00Z",
                  "BPContactNumber": "9282440068",
                  "DPName": "17960067-Thiruvanmiyur",
                  "DPId": "17960067",
                  "BPLandmark": "Near Canara Bank Atm",
                  "BPAddress": "Murugan Travels, #56, Thiruvalluvar Salai",
                  "DPLocation": "Tiruvanmayinur"
                 },
                 {
                  "DPTime": "2018-05-03T06:00:00Z",
                  "BPContactNumber": "9282440068",
                  "DPName": "17968780-Sholinganallur",
                  "DPId": "17968780",
                  "BPLandmark": "Solinganalur",
                  "BPAddress": "Solinganalur",
                  "DPLocation": "Solinganalur"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "813",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 29,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:15:00Z",
               "idRequired": "false",
               "ServiceID": 1371,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "staffBehaviour": 3.5,
                 "busQuality": 3.5,
                 "onBoardExperience": 3.44,
                 "onTimeAD": 3.78,
                 "acQuality": 3.5,
                 "stopOverExperience": 3.56,
                 "seats": 3.22,
                 "seater": 3.5,
                 "punctuality": 3.5
                },
                "reviewCount": 9,
                "posReviewCount": 4,
                "criReviewCount": 2,
                "imgReviewCount": 0,
                "totalRating": 3.33,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2315-GreenLineTravelsAndHolidays-ACSleeper2+1"
               },
               "TravelsName": "GreenLine Travels And  Holidays",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770001371",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2315-GreenLineTravelsAndHolidays-ACSleeper2+1",
               "arrdate": "2018-05-02T05:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.3",
               "DepartureTime": "15:00",
               "cancellationPolicy": "0:4:100:0;4:12:50:0;12:24:20:0;24:168:15:0;168:-1:15:0",
               "avlWindowSeats": 24,
               "BusServiceID": "1741",
               "totalReviews": "179",
               "seat": "ST",
               "duration": "7h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV9mQTyu4B5SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17938028",
                  "BPContactNumber": "9740033994",
                  "BPName": "17938028-Anand Rao Circle",
                  "BPTime": "2018-05-01T14:30:00Z",
                  "BPLandmark": "Anand Rao Circle",
                  "BPLocation": "Majestic Ananda Rao Circle (Pickup Van/Bus)",
                  "BPAddress": "SRS Travels Parking, Opp Fortune Hotel",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17936543",
                  "BPContactNumber": "9900067692-9900063480-9900050511-9880955077 9845600080",
                  "BPName": "17936543-South End ",
                  "BPTime": "2018-05-01T14:45:00Z",
                  "BPLandmark": "Shankar Travels",
                  "BPLocation": "South End Pickup Van/Bus",
                  "BPAddress": "SOUTH END ROAD",
                  "BPCoordinates": "12.9367677,77.5769861"
                 },
                 {
                  "BPId": "79674",
                  "BPContactNumber": "9972500300",
                  "BPName": "79674-Jaya Nagar",
                  "BPTime": "2018-05-01T15:00:00Z",
                  "BPLandmark": "Near R V Nursing College Gate  Opp Coffee Day Call  080 26801616",
                  "BPLocation": "Jay Nagar 4th Block TN Pickup Van/Bus",
                  "BPAddress": "pick up point only R V nursing college gate opp coffee day jayanagar 4th block",
                  "BPCoordinates": "12.925,77.59"
                 },
                 {
                  "BPId": "72863",
                  "BPContactNumber": "9972500300",
                  "BPName": "72863-Kalasipalyam",
                  "BPTime": "2018-05-01T15:00:00Z",
                  "BPLandmark": "Opp Bangalore Medical College",
                  "BPLocation": "Kalasipalyam",
                  "BPAddress": "# 321 TSP Road Opp BMC Kalasipalyam, Call : 9972568052/080 26801616/17, Call : 9972568052/080 26801616/17",
                  "BPCoordinates": "12.96,77.577"
                 },
                 {
                  "BPId": "17937438",
                  "BPContactNumber": "9972500300-9972568052-08026801616",
                  "BPName": "17937438-Jaya Nagar",
                  "BPTime": "2018-05-01T15:15:00Z",
                  "BPLandmark": "Near East End Signal",
                  "BPLocation": "Jaya Nagar 9th BlockTN Pickup Van/Bus",
                  "BPAddress": " Opp Rajkumar Stachue towards banashankari",
                  "BPCoordinates": "12.925,77.59"
                 },
                 {
                  "BPId": "17937644",
                  "BPContactNumber": "9900087253",
                  "BPName": "17937644-Wilson Garden",
                  "BPTime": "2018-05-01T15:15:00Z",
                  "BPLandmark": "# 24/3 H Siddaiah Road 5th Main Wilsongarden",
                  "BPLocation": "Wilsongarden",
                  "BPAddress": " # 24/3 H Siddaia road 5th main Wilsongarden ",
                  "BPCoordinates": "12.9481933,77.59718650000002"
                 },
                 {
                  "BPId": "403678",
                  "BPContactNumber": "25501686 9900087292",
                  "BPName": "403678-Madiwala",
                  "BPTime": "2018-05-01T15:40:00Z",
                  "BPLandmark": "Opp Madiwala Bmtc Bus Stop Hosur Main Road",
                  "BPLocation": "Madiwala",
                  "BPAddress": "#324/1 1st floor Technic Ceramics Building After Madiwala Police Station",
                  "BPCoordinates": ","
                 },
                 {
                  "BPId": "17937811",
                  "BPContactNumber": "25501686 9900087292",
                  "BPName": "17937811-Silk Board",
                  "BPTime": "2018-05-01T15:45:00Z",
                  "BPLandmark": "Opp Madiwala Bmtc Bus Stop Hosur Main Road",
                  "BPLocation": "Silk Board Towards Madiwala Police station & Darga",
                  "BPAddress": "#324/1 1st floor Technic Ceramics Building After Madiwala Police Station",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17937951",
                  "BPContactNumber": "9901844485 080 65624527",
                  "BPName": "17937951-Bommasandra",
                  "BPTime": "2018-05-01T16:20:00Z",
                  "BPLandmark": "near D.MART towards hosur road bommasandra",
                  "BPLocation": "Bommsandra SRS Travels ",
                  "BPAddress": "SRS Travels bommsandra signal and circle , bomasandra Call : 9972500300/080 26801616/1717",
                  "BPCoordinates": "12.81,77.698"
                 }
                ]
               },
               "amenities": "Central TV,Fire Extinguisher,Reclining seat,Blankets,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),Safety belt,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "22:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "747",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "700.0",
                "adulttotalfare": "0",
                "servicetax": "35.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "22",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T22:00:00Z",
                  "BPContactNumber": "09840937910",
                  "DPName": "17936970-Koyambedu",
                  "DPId": "17936970",
                  "BPLandmark": "Opp Koyambedu Signal",
                  "BPAddress": "#105,100 Feet Road Koyambedu , near krishna sweet ot k f c restarant  Call : 044-23455192",
                  "DPLocation": "Koyambedu"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Mercedes Benz Multi Axle (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "747",
                  "busCondition": "ac",
                  "seatType": "Seater",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 51,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T15:00:00Z",
               "idRequired": "false",
               "ServiceID": 1367,
               "busCompany": "mercedes",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3.33,
                 "seats": 3.33,
                 "onBoardExperience": 3.33,
                 "onTimeAD": 2.67
                },
                "reviewCount": 3,
                "posReviewCount": 2,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 3.33,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1500-SRSTravels-MercedesBenzMultiAxle2+2"
               },
               "TravelsName": "SRS Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126770001367",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-1500-SRSTravels-MercedesBenzMultiAxle2+2",
               "arrdate": "2018-05-01T22:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.7",
               "DepartureTime": "10:30",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": 16,
               "BusServiceID": "SCH188F266H",
               "totalReviews": "661",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wZzfMA3iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17985945",
                  "BPContactNumber": "9986676022 / 08048669775",
                  "BPName": "17985945-Madiwala",
                  "BPTime": "2018-05-01T10:30:00Z",
                  "BPLandmark": "In Front of  Bharat Petrol Bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": " Opp More Super Market , Total Mall,\nHosur Main Road,",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17985960",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985960-Silk Board",
                  "BPTime": "2018-05-01T10:35:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Silk Board - Renault Show room",
                  "BPAddress": "Renault Show room",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17985974",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985974-Electronic City",
                  "BPTime": "2018-05-01T10:45:00Z",
                  "BPLandmark": "near Audi service centre",
                  "BPLocation": "Electronic City Toll gate",
                  "BPAddress": "Toll gate",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17985995",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985995-Bommasandra",
                  "BPTime": "2018-05-01T10:50:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "A2B Restaurant",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17985977",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985977-Attibele",
                  "BPTime": "2018-05-01T10:55:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Attibele Toll Gate",
                  "BPAddress": "Attibele Toll Gate",
                  "BPCoordinates": "12.78,77.77"
                 },
                 {
                  "BPId": "17985978",
                  "BPContactNumber": "9986676022, 08048669775",
                  "BPName": "17985978-Hosur",
                  "BPTime": "2018-05-01T11:20:00Z",
                  "BPLandmark": "Near Ganesha Temple",
                  "BPLocation": "Hosur (Yashodha Mahal)",
                  "BPAddress": "Yashodha Mahal",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "16:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "682",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "650.0",
                "adulttotalfare": "0",
                "servicetax": "32.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "16604",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T16:30:00Z",
                  "BPContactNumber": "8098103181,8098103193",
                  "DPName": "17985946-Koyambedu",
                  "DPId": "17985946",
                  "BPLandmark": "Next to Assife Briyani",
                  "BPAddress": "1st Floor,  100 Ft Road,\nUpstairs Kodak Mahindra Bank, Koyambedu, Chennai-107",
                  "DPLocation": "Koyambedu Office"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania A/C Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "682",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 32,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T10:30:00Z",
               "idRequired": "false",
               "ServiceID": 1864850,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 3,
                 "seats": 3,
                 "onBoardExperience": 3,
                 "onTimeAD": 3
                },
                "reviewCount": 2,
                "posReviewCount": 1,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 3,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1030-EvacayBus-ScaniaACSemiSleeper2+2"
               },
               "TravelsName": "Evacay Bus",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771864850",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1030-EvacayBus-ScaniaACSemiSleeper2+2",
               "arrdate": "2018-05-01T16:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.7",
               "DepartureTime": "17:45",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": 15,
               "BusServiceID": "SCH168D878L",
               "totalReviews": "710",
               "seat": "ST",
               "duration": "5h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wZzfMA3yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17985945",
                  "BPContactNumber": "9986676022 / 08048669775",
                  "BPName": "17985945-Madiwala",
                  "BPTime": "2018-05-01T17:45:00Z",
                  "BPLandmark": "In Front of  Bharat Petrol Bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": " Opp More Super Market , Total Mall,\nHosur Main Road,",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17985960",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985960-Silk Board",
                  "BPTime": "2018-05-01T17:55:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Silk Board - Renault Show room",
                  "BPAddress": "Renault Show room",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17985974",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985974-Electronic City",
                  "BPTime": "2018-05-01T18:05:00Z",
                  "BPLandmark": "near Audi service centre",
                  "BPLocation": "Electronic City Toll gate",
                  "BPAddress": "Toll gate",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17985995",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985995-Bommasandra",
                  "BPTime": "2018-05-01T18:10:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "A2B Restaurant",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17985977",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985977-Attibele",
                  "BPTime": "2018-05-01T18:20:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Attibele Toll Gate",
                  "BPAddress": "Attibele Toll Gate",
                  "BPCoordinates": "12.78,77.77"
                 },
                 {
                  "BPId": "17985978",
                  "BPContactNumber": "9986676022, 08048669775",
                  "BPName": "17985978-Hosur",
                  "BPTime": "2018-05-01T18:40:00Z",
                  "BPLandmark": "Near Ganesha Temple",
                  "BPLocation": "Hosur (Yashodha Mahal)",
                  "BPAddress": "Yashodha Mahal",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "23:30",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "787",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "750.0",
                "adulttotalfare": "0",
                "servicetax": "37.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "16604",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T23:30:00Z",
                  "BPContactNumber": "8098103181,8098103193",
                  "DPName": "17985946-Koyambedu",
                  "DPId": "17985946",
                  "BPLandmark": "Next to Assife Briyani",
                  "BPAddress": "1st Floor,  100 Ft Road,\nUpstairs Kodak Mahindra Bank, Koyambedu, Chennai-107",
                  "DPLocation": "Koyambedu Office"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania A/C Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "787",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 30,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T17:45:00Z",
               "idRequired": "false",
               "ServiceID": 1864851,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4.75,
                 "seats": 4.75,
                 "onBoardExperience": 4.5,
                 "onTimeAD": 4.75
                },
                "reviewCount": 4,
                "posReviewCount": 4,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 4.75,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1745-EvacayBus-ScaniaACSemiSleeper2+2"
               },
               "TravelsName": "Evacay Bus",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771864851",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1745-EvacayBus-ScaniaACSemiSleeper2+2",
               "arrdate": "2018-05-01T23:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.7",
               "DepartureTime": "16:30",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": 21,
               "BusServiceID": "SCH4B8C660K",
               "totalReviews": "1272",
               "seat": "ST",
               "duration": "5h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wZzfIB4yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17985945",
                  "BPContactNumber": "9986676022 / 08048669775",
                  "BPName": "17985945-Madiwala",
                  "BPTime": "2018-05-01T16:30:00Z",
                  "BPLandmark": "In Front of  Bharat Petrol Bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": " Opp More Super Market , Total Mall,\nHosur Main Road,",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17985960",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985960-Silk Board",
                  "BPTime": "2018-05-01T16:40:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Silk Board - Renault Show room",
                  "BPAddress": "Renault Show room",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17985974",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985974-Electronic City",
                  "BPTime": "2018-05-01T16:50:00Z",
                  "BPLandmark": "near Audi service centre",
                  "BPLocation": "Electronic City Toll gate",
                  "BPAddress": "Toll gate",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17985978",
                  "BPContactNumber": "9986676022, 08048669775",
                  "BPName": "17985978-Hosur",
                  "BPTime": "2018-05-01T17:20:00Z",
                  "BPLandmark": "Near Ganesha Temple",
                  "BPLocation": "Hosur (Yashodha Mahal)",
                  "BPAddress": "Yashodha Mahal",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "22:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "787",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "750.0",
                "adulttotalfare": "0",
                "servicetax": "37.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "16604",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T22:00:00Z",
                  "BPContactNumber": "8098103181,8098103193",
                  "DPName": "17985946-Koyambedu",
                  "DPId": "17985946",
                  "BPLandmark": "Next to Assife Briyani",
                  "BPAddress": "1st Floor,  100 Ft Road,\nUpstairs Kodak Mahindra Bank, Koyambedu, Chennai-107",
                  "DPLocation": "Koyambedu Office"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "787",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 41,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T16:30:00Z",
               "idRequired": "false",
               "ServiceID": 1864765,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4.5,
                 "seats": 4.5,
                 "onBoardExperience": 4.5,
                 "onTimeAD": 4.5
                },
                "reviewCount": 8,
                "posReviewCount": 7,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 4.5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-1630-EvacayBus-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Evacay Bus",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771864765",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1630-EvacayBus-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T22:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.6",
               "DepartureTime": "13:30",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": 17,
               "BusServiceID": "SCH3A88291G",
               "totalReviews": "743",
               "seat": "ST",
               "duration": "6h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wZzfP74CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17985942",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985942-Kodathi Gate",
                  "BPTime": "2018-05-01T12:05:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Kodathi Gate",
                  "BPAddress": "Aradhana Travel Links\nBusstop",
                  "BPCoordinates": "12.896577,77.72003399999994"
                 },
                 {
                  "BPId": "17985943",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985943-Carmelaram",
                  "BPTime": "2018-05-01T12:10:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Carmelaram",
                  "BPAddress": "Busstop",
                  "BPCoordinates": "12.9061527,77.70657540000002"
                 },
                 {
                  "BPId": "17985944",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985944-Kammannahalli",
                  "BPTime": "2018-05-01T12:15:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Kannahalli",
                  "BPAddress": "Busstop",
                  "BPCoordinates": "13.015,77.637"
                 },
                 {
                  "BPId": "17985953",
                  "BPContactNumber": "9986207800.9986676022",
                  "BPName": "17985953-Carmelaram",
                  "BPTime": "2018-05-01T12:20:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Wipro Gate (Mori)",
                  "BPAddress": "Busstop",
                  "BPCoordinates": "12.9061527,77.70657540000002"
                 },
                 {
                  "BPId": "17985955",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985955-Kaikondrahalli",
                  "BPTime": "2018-05-01T12:25:00Z",
                  "BPLandmark": "Opp to Kabab Mantra ",
                  "BPLocation": "Kaikondrahalli",
                  "BPAddress": "Busstop",
                  "BPCoordinates": "12.9127307,77.68738680000001"
                 },
                 {
                  "BPId": "17985956",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985956-Bellandur",
                  "BPTime": "2018-05-01T12:30:00Z",
                  "BPLandmark": "Opp to Spencer Mall ",
                  "BPLocation": "Bellandur Police Station ",
                  "BPAddress": " Busstop",
                  "BPCoordinates": "12.92,77.67"
                 },
                 {
                  "BPId": "17985961",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985961-Agara",
                  "BPTime": "2018-05-01T12:35:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Agara",
                  "BPAddress": "Fly over End towards Silk Board,\nAgara, Bangalore",
                  "BPCoordinates": "12.84,77.48"
                 },
                 {
                  "BPId": "17985968",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985968-HSR Layout",
                  "BPTime": "2018-05-01T12:40:00Z",
                  "BPLandmark": "Near Green View Hospital",
                  "BPLocation": "HSR Layout",
                  "BPAddress": "Infront of HDFC Bank",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17985945",
                  "BPContactNumber": "9986676022 / 08048669775",
                  "BPName": "17985945-Madiwala",
                  "BPTime": "2018-05-01T13:30:00Z",
                  "BPLandmark": "In Front of  Bharat Petrol Bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": " Opp More Super Market , Total Mall,\nHosur Main Road,",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17985960",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985960-Silk Board",
                  "BPTime": "2018-05-01T13:40:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Silk Board - Renault Show room",
                  "BPAddress": "Renault Show room",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17985974",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985974-Electronic City",
                  "BPTime": "2018-05-01T13:55:00Z",
                  "BPLandmark": "near Audi service centre",
                  "BPLocation": "Electronic City Toll gate",
                  "BPAddress": "Toll gate",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17985978",
                  "BPContactNumber": "9986676022, 08048669775",
                  "BPName": "17985978-Hosur",
                  "BPTime": "2018-05-01T14:15:00Z",
                  "BPLandmark": "Near Ganesha Temple",
                  "BPLocation": "Hosur (Yashodha Mahal)",
                  "BPAddress": "Yashodha Mahal",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "20:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "735",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "700.0",
                "adulttotalfare": "0",
                "servicetax": "35.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "16604",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T20:00:00Z",
                  "BPContactNumber": "8098103181,8098103193",
                  "DPName": "17985946-Koyambedu",
                  "DPId": "17985946",
                  "BPLandmark": "Next to Assife Briyani",
                  "BPAddress": "1st Floor,  100 Ft Road,\nUpstairs Kodak Mahindra Bank, Koyambedu, Chennai-107",
                  "DPLocation": "Koyambedu Office"
                 },
                 {
                  "DPTime": "2018-05-01T20:30:00Z",
                  "BPContactNumber": "9940014098,8098103181",
                  "DPName": "17985993-Ashok Pillar",
                  "DPId": "17985993",
                  "BPLandmark": "Anjappar Hotel",
                  "BPAddress": "Near Busstop",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-01T20:35:00Z",
                  "BPContactNumber": "9940014098,8098103181",
                  "DPName": "17986010-Jafferkhanpet",
                  "DPId": "17986010",
                  "BPLandmark": "Busstop",
                  "BPAddress": "Near Busstop",
                  "DPLocation": "Jafferkhanpet"
                 },
                 {
                  "DPTime": "2018-05-01T20:40:00Z",
                  "BPContactNumber": "9940014098,8098103181",
                  "DPName": "17986027-Ekkattuthangal",
                  "DPId": "17986027",
                  "BPLandmark": " ",
                  "BPAddress": "Busstop",
                  "DPLocation": "Ekkattuthangal"
                 },
                 {
                  "DPTime": "2018-05-01T20:45:00Z",
                  "BPContactNumber": "9940014098,8098103181",
                  "DPName": "17986033-Guindy",
                  "DPId": "17986033",
                  "BPLandmark": "Opp to Railway station",
                  "BPAddress": "Railway station",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-01T20:50:00Z",
                  "BPContactNumber": "9940014098,8098103181",
                  "DPName": "17986035-Saidapet",
                  "DPId": "17986035",
                  "BPLandmark": "Near Church",
                  "BPAddress": "Little Mount",
                  "DPLocation": "Little Mount"
                 },
                 {
                  "DPTime": "2018-05-01T20:55:00Z",
                  "BPContactNumber": "9940014098",
                  "DPName": "17986006-Anna University",
                  "DPId": "17986006",
                  "BPLandmark": "Anna University Main Gate",
                  "BPAddress": "Sardar Patel Road, ",
                  "DPLocation": "Anna University"
                 },
                 {
                  "DPTime": "2018-05-01T21:00:00Z",
                  "BPContactNumber": "9940014098",
                  "DPName": "17986005-Madhya Kailash",
                  "DPId": "17986005",
                  "BPLandmark": " ",
                  "BPAddress": "Near Busstop\nBehind Madhya Kailash Temple",
                  "DPLocation": "Madhya Kailash"
                 },
                 {
                  "DPTime": "2018-05-01T21:05:00Z",
                  "BPContactNumber": "9940014098",
                  "DPName": "17985990-Tidel Park",
                  "DPId": "17985990",
                  "BPLandmark": "Opp to Indira nagar railway station",
                  "BPAddress": "bus stop\n",
                  "DPLocation": "Tidel Park Near by"
                 },
                 {
                  "DPTime": "2018-05-01T21:10:00Z",
                  "BPContactNumber": "9940014098",
                  "DPName": "17985983-Tharamani",
                  "DPId": "17985983",
                  "BPLandmark": "opp to SRP Tools ",
                  "BPAddress": "Tharamani Road, OMR rd signal,\nopp to holiday inn hotel",
                  "DPLocation": "Taramani"
                 },
                 {
                  "DPTime": "2018-05-01T21:20:00Z",
                  "BPContactNumber": "9940014098,8098103181",
                  "DPName": "17985982-Velachery",
                  "DPId": "17985982",
                  "BPLandmark": "Near Indian Bank, Before Agarwal Eye Hospital ",
                  "BPAddress": "Baby Nagar,\nTaramani main road,\nOpp to Hot Chips Restaurant",
                  "DPLocation": "Velachery"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi-Axle Semisleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "735",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 34,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T13:30:00Z",
               "idRequired": "false",
               "ServiceID": 1864802,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "TravelsName": "Evacay Bus(To Velachery)",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771864802",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1330-EvacayBusToVelachery-VolvoACMulti-AxleSemisleeper2+2",
               "arrdate": "2018-05-01T20:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.8",
               "DepartureTime": "22:30",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": 19,
               "BusServiceID": "SCH368F820I",
               "totalReviews": "992",
               "seat": "ST",
               "duration": "6h 20m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wZzfP74SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17985945",
                  "BPContactNumber": "9986676022 / 08048669775",
                  "BPName": "17985945-Madiwala",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "In Front of  Bharat Petrol Bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": " Opp More Super Market , Total Mall,\nHosur Main Road,",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17985960",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985960-Silk Board",
                  "BPTime": "2018-05-01T22:40:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Silk Board - Renault Show room",
                  "BPAddress": "Renault Show room",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17985975",
                  "BPContactNumber": "08048669775,9986676022",
                  "BPName": "17985975-Bommanahalli",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Infront of KPN Office",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "Infront of KPN Office",
                  "BPCoordinates": "12.89,77.61"
                 },
                 {
                  "BPId": "17986031",
                  "BPContactNumber": "08048669775,9986676022",
                  "BPName": "17986031-Electronic City",
                  "BPTime": "2018-05-01T22:55:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "ElectronicCity - Season Restaurant",
                  "BPAddress": "Near Season Restaurant",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17985974",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985974-Electronic City",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "near Audi service centre",
                  "BPLocation": "Electronic City Toll gate",
                  "BPAddress": "Toll gate",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17985995",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985995-Bommasandra",
                  "BPTime": "2018-05-01T23:10:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "A2B Restaurant",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17985977",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985977-Attibele",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Attibele Toll Gate",
                  "BPAddress": "Attibele Toll Gate",
                  "BPCoordinates": "12.78,77.77"
                 },
                 {
                  "BPId": "17985978",
                  "BPContactNumber": "9986676022, 08048669775",
                  "BPName": "17985978-Hosur",
                  "BPTime": "2018-05-01T23:20:00Z",
                  "BPLandmark": "Near Ganesha Temple",
                  "BPLocation": "Hosur (Yashodha Mahal)",
                  "BPAddress": "Yashodha Mahal",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "04:50",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "840",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "800.0",
                "adulttotalfare": "0",
                "servicetax": "40.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "16604",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:00:00Z",
                  "BPContactNumber": "8098103181,8098103193",
                  "DPName": "17985946-Koyambedu",
                  "DPId": "17985946",
                  "BPLandmark": "Next to Assife Briyani",
                  "BPAddress": "1st Floor,  100 Ft Road,\nUpstairs Kodak Mahindra Bank, Koyambedu, Chennai-107",
                  "DPLocation": "Koyambedu Office"
                 },
                 {
                  "DPTime": "2018-05-03T04:05:00Z",
                  "BPContactNumber": "9940014098,8098103181",
                  "DPName": "17985993-Ashok Pillar",
                  "DPId": "17985993",
                  "BPLandmark": "Anjappar Hotel",
                  "BPAddress": "Near Busstop",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-03T04:10:00Z",
                  "BPContactNumber": "9940014098,8098103181",
                  "DPName": "17986010-Jafferkhanpet",
                  "DPId": "17986010",
                  "BPLandmark": "Busstop",
                  "BPAddress": "Near Busstop",
                  "DPLocation": "Jafferkhanpet"
                 },
                 {
                  "DPTime": "2018-05-03T04:15:00Z",
                  "BPContactNumber": "9940014098,8098103181",
                  "DPName": "17986027-Ekkattuthangal",
                  "DPId": "17986027",
                  "BPLandmark": " ",
                  "BPAddress": "Busstop",
                  "DPLocation": "Ekkattuthangal"
                 },
                 {
                  "DPTime": "2018-05-03T04:20:00Z",
                  "BPContactNumber": "9940014098,8098103181",
                  "DPName": "17986033-Guindy",
                  "DPId": "17986033",
                  "BPLandmark": "Opp to Railway station",
                  "BPAddress": "Railway station",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-03T04:25:00Z",
                  "BPContactNumber": "9940014098,8098103181",
                  "DPName": "17986035-Saidapet",
                  "DPId": "17986035",
                  "BPLandmark": "Near Church",
                  "BPAddress": "Little Mount",
                  "DPLocation": "Little Mount"
                 },
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "9940014098",
                  "DPName": "17986006-Anna University",
                  "DPId": "17986006",
                  "BPLandmark": "Anna University Main Gate",
                  "BPAddress": "Sardar Patel Road, ",
                  "DPLocation": "Anna University"
                 },
                 {
                  "DPTime": "2018-05-03T04:35:00Z",
                  "BPContactNumber": "9940014098",
                  "DPName": "17986005-Madhya Kailash",
                  "DPId": "17986005",
                  "BPLandmark": " ",
                  "BPAddress": "Near Busstop\nBehind Madhya Kailash Temple",
                  "DPLocation": "Madhya Kailash"
                 },
                 {
                  "DPTime": "2018-05-03T04:40:00Z",
                  "BPContactNumber": "9940014098",
                  "DPName": "17985990-Tidel Park",
                  "DPId": "17985990",
                  "BPLandmark": "Opp to Indira nagar railway station",
                  "BPAddress": "bus stop\n",
                  "DPLocation": "Tidel Park Near by"
                 },
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "9940014098",
                  "DPName": "17985983-Tharamani",
                  "DPId": "17985983",
                  "BPLandmark": "opp to SRP Tools ",
                  "BPAddress": "Tharamani Road, OMR rd signal,\nopp to holiday inn hotel",
                  "DPLocation": "Taramani"
                 },
                 {
                  "DPTime": "2018-05-03T04:50:00Z",
                  "BPContactNumber": "9940014098,8098103181",
                  "DPName": "17985982-Velachery",
                  "DPId": "17985982",
                  "BPLandmark": "Near Indian Bank, Before Agarwal Eye Hospital ",
                  "BPAddress": "Baby Nagar,\nTaramani main road,\nOpp to Hot Chips Restaurant",
                  "DPLocation": "Velachery"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi-Axle Semisleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "840",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 36,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T22:30:00Z",
               "idRequired": "false",
               "ServiceID": 1864803,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "TravelsName": "Evacay Bus(To Velachery)",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771864803",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2230-EvacayBusToVelachery-VolvoACMulti-AxleSemisleeper2+2",
               "arrdate": "2018-05-02T04:50:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.7",
               "DepartureTime": "23:30",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": 22,
               "BusServiceID": "SCH4689412L",
               "totalReviews": "1367",
               "seat": "ST",
               "duration": "5h 15m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wZzfIB5CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17985945",
                  "BPContactNumber": "9986676022 / 08048669775",
                  "BPName": "17985945-Madiwala",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "In Front of  Bharat Petrol Bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": " Opp More Super Market , Total Mall,\nHosur Main Road,",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17985960",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985960-Silk Board",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Silk Board - Renault Show room",
                  "BPAddress": "Renault Show room",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17985974",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985974-Electronic City",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "near Audi service centre",
                  "BPLocation": "Electronic City Toll gate",
                  "BPAddress": "Toll gate",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17985978",
                  "BPContactNumber": "9986676022, 08048669775",
                  "BPName": "17985978-Hosur",
                  "BPTime": "2018-05-02T00:00:00Z",
                  "BPLandmark": "Near Ganesha Temple",
                  "BPLocation": "Hosur (Yashodha Mahal)",
                  "BPAddress": "Yashodha Mahal",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "04:45",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "840",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "800.0",
                "adulttotalfare": "0",
                "servicetax": "40.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "16604",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "8098103181,8098103193",
                  "DPName": "17985946-Koyambedu",
                  "DPId": "17985946",
                  "BPLandmark": "Next to Assife Briyani",
                  "BPAddress": "1st Floor,  100 Ft Road,\nUpstairs Kodak Mahindra Bank, Koyambedu, Chennai-107",
                  "DPLocation": "Koyambedu Office"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "840",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 41,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:30:00Z",
               "idRequired": "false",
               "ServiceID": 1864766,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4.5,
                 "seats": 4.5,
                 "onBoardExperience": 4.5,
                 "onTimeAD": 4.5
                },
                "reviewCount": 4,
                "posReviewCount": 4,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 4.75,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2330-EvacayBus-ScaniaACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Evacay Bus",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771864766",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2330-EvacayBus-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-02T04:45:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.6",
               "DepartureTime": "23:55",
               "cancellationPolicy": "0:8:100:0;8:24:50:0;24:48:20:0;48:168:10:0;168:-1:10:0",
               "avlWindowSeats": 16,
               "BusServiceID": "283",
               "totalReviews": "117",
               "seat": "SL",
               "duration": "6h 5m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92way-384CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "1527657",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "1527657-Shanthinagar",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Shanthi Nager",
                  "BPLocation": "Shanthinager",
                  "BPAddress": "shanthi nager",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "823023",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "823023-Majestic",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Opp To Vrl Bus Stand Pooja Travels",
                  "BPLocation": "Majestic",
                  "BPAddress": "Bharathi TOURS N TRAVELS",
                  "BPCoordinates": "12.976663,77.571"
                 },
                 {
                  "BPId": "402522",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "402522-Anand Rao Circle",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Next To Axis Bank",
                  "BPLocation": "Anand Rao Circle",
                  "BPAddress": "opp to vrl bus stand pooja travels",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17937691",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17937691-Indiranagar",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Near Indira Nagar Bda Complex Indian Oil Petrol Bunk",
                  "BPLocation": "Indira Nagar",
                  "BPAddress": "next to bda complex opp to indian oil petrol bunk",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17971507",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17971507-Tin Factory",
                  "BPTime": "2018-05-01T23:35:00Z",
                  "BPLandmark": "Near Tin Factory Bus Stand",
                  "BPLocation": "Tin Facrory",
                  "BPAddress": "Near Tin Factory Bus Stand",
                  "BPCoordinates": "12.9972686,77.66959010000005"
                 },
                 {
                  "BPId": "17949866",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17949866-KR.PURAM",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "K R Puram Below Flyover Infront To K R Puram Railway Station",
                  "BPLocation": "KR Puram",
                  "BPAddress": "K R PURAM BELOW FLYOVER infront TO K R PURAM RAILWAY STATION",
                  "BPCoordinates": "13.004016,77.6877764999"
                 },
                 {
                  "BPId": "17949895",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17949895-Marathahalli",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "Infront Off Kalamandir",
                  "BPLocation": "Marathalli",
                  "BPAddress": "infront off kalamindir ",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "17956371",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17956371-Bellandur",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "Cafe Coffee Day",
                  "BPLocation": "Bellandur",
                  "BPAddress": "OPPOSITE TO CAFE COFFEE  DAY",
                  "BPCoordinates": "12.92,77.67"
                 },
                 {
                  "BPId": "17979618",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17979618-HSR Layout",
                  "BPTime": "2018-05-01T23:57:00Z",
                  "BPLandmark": "After Sarjapur Flyovr Opposite To Devi Eye Hospital",
                  "BPLocation": "HSR Layout",
                  "BPAddress": "AFTER SARJAPUR FLYOVR OPPOSITE TO DEVI EYE HOSPITAL",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17944251",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17944251-Madiwala",
                  "BPTime": "2018-05-01T23:59:00Z",
                  "BPLandmark": "Madiwala Police Station",
                  "BPLocation": "Madiwala",
                  "BPAddress": "madiwala ploice station infront of bharath petrol bunk",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17953401",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17953401-Silk Board",
                  "BPTime": "2018-05-02T00:10:00Z",
                  "BPLandmark": "Renault Showroom",
                  "BPLocation": "Silk Board",
                  "BPAddress": "flyover end towards hosur",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17954438",
                  "BPContactNumber": "9535172210 9035990189",
                  "BPName": "17954438-Electronic City",
                  "BPTime": "2018-05-02T00:20:00Z",
                  "BPLandmark": "Toll Gate Infront Of Audi Service Station",
                  "BPLocation": "Electronic City Toll Gate",
                  "BPAddress": "toll gate infront of audi service station",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Personal TV,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Hammer (to break glass),Pillow,Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "06:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "630",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "600.0",
                "adulttotalfare": "0",
                "servicetax": "30.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "3687",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:00:00Z",
                  "BPContactNumber": "044 65662475 965585754 9962129067",
                  "DPName": "17954443-Poonamallee",
                  "DPId": "17954443",
                  "BPLandmark": "Near Vasan Eye Care Or Near City Union Bank",
                  "BPAddress": "No 9 Tidco Complex Near Mofussil Bus Stop, Trunk Road Poondamally",
                  "DPLocation": "PoonamalleeSangita Travels "
                 },
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "04424790787 04424799687 9710934818",
                  "DPName": "1566776-Koyambedu",
                  "DPId": "1566776",
                  "BPLandmark": "Opp.Koyambedu Flower  Market, Hotel Royal Palaza",
                  "BPAddress": "Shop No.05,Omni Bus Terminus",
                  "DPLocation": "Koyambedu"
                 },
                 {
                  "DPTime": "2018-05-03T04:50:00Z",
                  "BPContactNumber": "044-65662475 9962129067",
                  "DPName": "17962145-Ashok Pillar",
                  "DPId": "17962145",
                  "BPLandmark": "Bharathi Travels",
                  "BPAddress": "Main Road",
                  "DPLocation": "Ashok Pillar"
                 },
                 {
                  "DPTime": "2018-05-03T05:10:00Z",
                  "BPContactNumber": "9962200099 9543455534",
                  "DPName": "17975476-Guindy",
                  "DPId": "17975476",
                  "BPLandmark": "Guindy Sangeetha Hotel",
                  "BPAddress": "Guindy Sangeetha Hotel, Guindy Sangeetha Hotel",
                  "DPLocation": "Guindy Sangeetha Hotel"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "94440168767",
                  "DPName": "17822431-Vadapalani",
                  "DPId": "17822431",
                  "BPLandmark": "Near Bus Stand",
                  "BPAddress": "Near Bus Stand",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-03T05:20:00Z",
                  "BPContactNumber": "94440168767",
                  "DPName": "17924928-Olapiya",
                  "DPId": "17924928",
                  "BPLandmark": "Near Bus Stand",
                  "BPAddress": "Near Bus Stand",
                  "DPLocation": "Olapiya"
                 },
                 {
                  "DPTime": "2018-05-03T05:25:00Z",
                  "BPContactNumber": "94440168767",
                  "DPName": "17958563-Saidapet",
                  "DPId": "17958563",
                  "BPLandmark": "Near Bus Stand",
                  "BPAddress": "Near Bus Stand",
                  "DPLocation": "Saidapet"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "94440168767",
                  "DPName": "17953350-Madhya Kailash",
                  "DPId": "17953350",
                  "BPLandmark": "Near Bus Stand",
                  "BPAddress": "Near Bus Stand",
                  "DPLocation": "Madhya Kailash"
                 },
                 {
                  "DPTime": "2018-05-03T05:35:00Z",
                  "BPContactNumber": "94440168767",
                  "DPName": "1527860-Tidel Park",
                  "DPId": "1527860",
                  "BPLandmark": "Near Bus Stand",
                  "BPAddress": "Near Bus Stand",
                  "DPLocation": "TIDEL Park"
                 },
                 {
                  "DPTime": "2018-05-03T05:45:00Z",
                  "BPContactNumber": "9962200099 9543455534",
                  "DPName": "986682-Sholinganallur",
                  "DPId": "986682",
                  "BPLandmark": "Near Bus Stand Sholinganallur Subway Hotel",
                  "BPAddress": "Near Bus Stand opp Sholinganallur Subway hotel",
                  "DPLocation": "Sholinganallur Subway Hotel"
                 },
                 {
                  "DPTime": "2018-05-03T05:51:00Z",
                  "BPContactNumber": "94440168767",
                  "DPName": "17924926-Sathyabama University",
                  "DPId": "17924926",
                  "BPLandmark": "Near Bus Stand",
                  "BPAddress": "Near Bus Stand",
                  "DPLocation": "Sathyabama University"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "630",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 25,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "682",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 25,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:55:00Z",
               "idRequired": "false",
               "ServiceID": 1872212,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "Bharathi  Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771872212",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2355-BharathiTravels-ACSleeper2+1",
               "arrdate": "2018-05-02T06:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.7",
               "DepartureTime": "08:00",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": 20,
               "BusServiceID": "SCH1A86369E",
               "totalReviews": "24",
               "seat": "ST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92way-7-4yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17985942",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985942-Kodathi Gate",
                  "BPTime": "2018-05-01T07:00:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Kodathi Gate",
                  "BPAddress": "Aradhana Travel Links\nBusstop",
                  "BPCoordinates": "12.896577,77.72003399999994"
                 },
                 {
                  "BPId": "17985943",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985943-Carmelaram",
                  "BPTime": "2018-05-01T07:05:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Carmelaram",
                  "BPAddress": "Busstop",
                  "BPCoordinates": "12.9061527,77.70657540000002"
                 },
                 {
                  "BPId": "17985944",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985944-Kammannahalli",
                  "BPTime": "2018-05-01T07:10:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Kannahalli",
                  "BPAddress": "Busstop",
                  "BPCoordinates": "13.015,77.637"
                 },
                 {
                  "BPId": "17985953",
                  "BPContactNumber": "9986207800.9986676022",
                  "BPName": "17985953-Carmelaram",
                  "BPTime": "2018-05-01T07:20:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Wipro Gate (Mori)",
                  "BPAddress": "Busstop",
                  "BPCoordinates": "12.9061527,77.70657540000002"
                 },
                 {
                  "BPId": "17985955",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985955-Kaikondrahalli",
                  "BPTime": "2018-05-01T07:25:00Z",
                  "BPLandmark": "Opp to Kabab Mantra ",
                  "BPLocation": "Kaikondrahalli",
                  "BPAddress": "Busstop",
                  "BPCoordinates": "12.9127307,77.68738680000001"
                 },
                 {
                  "BPId": "17985956",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985956-Bellandur",
                  "BPTime": "2018-05-01T07:30:00Z",
                  "BPLandmark": "Opp to Spencer Mall ",
                  "BPLocation": "Bellandur Police Station ",
                  "BPAddress": " Busstop",
                  "BPCoordinates": "12.92,77.67"
                 },
                 {
                  "BPId": "17985961",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985961-Agara",
                  "BPTime": "2018-05-01T07:35:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Agara",
                  "BPAddress": "Fly over End towards Silk Board,\nAgara, Bangalore",
                  "BPCoordinates": "12.84,77.48"
                 },
                 {
                  "BPId": "17985968",
                  "BPContactNumber": "9986207800, 9986676022",
                  "BPName": "17985968-HSR Layout",
                  "BPTime": "2018-05-01T07:40:00Z",
                  "BPLandmark": "Near Green View Hospital",
                  "BPLocation": "HSR Layout",
                  "BPAddress": "Infront of HDFC Bank",
                  "BPCoordinates": "12.902,77.63152"
                 },
                 {
                  "BPId": "17985945",
                  "BPContactNumber": "9986676022 / 08048669775",
                  "BPName": "17985945-Madiwala",
                  "BPTime": "2018-05-01T08:00:00Z",
                  "BPLandmark": "In Front of  Bharat Petrol Bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": " Opp More Super Market , Total Mall,\nHosur Main Road,",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17985960",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985960-Silk Board",
                  "BPTime": "2018-05-01T08:05:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Silk Board - Renault Show room",
                  "BPAddress": "Renault Show room",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17985974",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985974-Electronic City",
                  "BPTime": "2018-05-01T08:15:00Z",
                  "BPLandmark": "near Audi service centre",
                  "BPLocation": "Electronic City Toll gate",
                  "BPAddress": "Toll gate",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17985995",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985995-Bommasandra",
                  "BPTime": "2018-05-01T08:20:00Z",
                  "BPLandmark": "  ",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "A2B Restaurant",
                  "BPCoordinates": "12.81,77.698"
                 },
                 {
                  "BPId": "17985977",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985977-Attibele",
                  "BPTime": "2018-05-01T08:25:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Attibele Toll Gate",
                  "BPAddress": "Attibele Toll Gate",
                  "BPCoordinates": "12.78,77.77"
                 },
                 {
                  "BPId": "17985978",
                  "BPContactNumber": "9986676022, 08048669775",
                  "BPName": "17985978-Hosur",
                  "BPTime": "2018-05-01T08:45:00Z",
                  "BPLandmark": "Near Ganesha Temple",
                  "BPLocation": "Hosur (Yashodha Mahal)",
                  "BPAddress": "Yashodha Mahal",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "Emergency Contact Number,Movie,Water Bottle,Fire Extinguisher,Blankets,Charging Point,Reading Light,Music/MP3,Hammer (to break glass),Emergency exit",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "14:00",
               "zeroCancellationTime": 0,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "630",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "600.0",
                "adulttotalfare": "0",
                "servicetax": "30.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "16604",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T13:30:00Z",
                  "BPContactNumber": "9940014098,8098103181",
                  "DPName": "17985950-Poonamallee",
                  "DPId": "17985950",
                  "BPLandmark": "Next to Sri Motel Highway",
                  "BPAddress": "KFC on bypass road\nAfter check post,\nPoonamallee ",
                  "DPLocation": "Poonamallee KFC"
                 },
                 {
                  "DPTime": "2018-05-01T14:00:00Z",
                  "BPContactNumber": "8098103181,8098103193",
                  "DPName": "17985946-Koyambedu",
                  "DPId": "17985946",
                  "BPLandmark": "Next to Assife Briyani",
                  "BPAddress": "1st Floor,  100 Ft Road,\nUpstairs Kodak Mahindra Bank, Koyambedu, Chennai-107",
                  "DPLocation": "Koyambedu Office"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania AC Multi Axle Semi Sleeper(2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "630",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 40,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T08:00:00Z",
               "idRequired": "false",
               "ServiceID": 1872335,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "Evacay Bus",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771872335",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-0800-EvacayBus-ScaniaACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-01T14:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "3.1",
               "DepartureTime": "23:00",
               "cancellationPolicy": "0:6:100:0;6:24:100:0;24:48:20:0;48:-1:10:0",
               "avlWindowSeats": 11,
               "BusServiceID": "1947",
               "totalReviews": "47",
               "seat": "ST",
               "duration": "7h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV92wazu_94yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17931987",
                  "BPContactNumber": "08022288888 ",
                  "BPName": "17931987-NagaSandra Circle",
                  "BPTime": "2018-05-01T20:45:00Z",
                  "BPLandmark": "Near Nagasandra Circle",
                  "BPLocation": "Nagasandra Circle 08022288888",
                  "BPAddress": "Sri Ganesh Travels South End Road, Near Nagasandra Circle Basavangudi",
                  "BPCoordinates": "12.936938,77.572201"
                 },
                 {
                  "BPId": "17931985",
                  "BPContactNumber": "9880436363 08025500186  08022288888",
                  "BPName": "17931985-Jaya Nagar",
                  "BPTime": "2018-05-01T21:00:00Z",
                  "BPLandmark": "Behind Jain Temple Rv College Of Nursing Jayanagar 4th Block Bus Stop",
                  "BPLocation": "Jayanagar 4th Block 08022288888",
                  "BPAddress": "RV College of Nursing  Bus Stop , 9th Main Behind Jain Temple  Jayanagar 4th block",
                  "BPCoordinates": "12.925,77.59"
                 },
                 {
                  "BPId": "17936662",
                  "BPContactNumber": "08022288888 ",
                  "BPName": "17936662-Indiranagar",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "Indian Oil Petrol Bunk",
                  "BPLocation": "Indiranagara 08022288888",
                  "BPAddress": "Near BDA Complex , Indian Oil Petrol Bunk Indiranagar",
                  "BPCoordinates": "12.97,77.64"
                 },
                 {
                  "BPId": "17936846",
                  "BPContactNumber": "08022288888",
                  "BPName": "17936846-Marathahalli",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Opp Kalamandir Vodafone Store (Service Road)",
                  "BPLocation": "Marathalli 08022288888",
                  "BPAddress": "Marathalli Outer Ring Road, Opp Kalamandir Vodafone Store (Service Road)",
                  "BPCoordinates": "12.9591722,77.697419"
                 },
                 {
                  "BPId": "17936815",
                  "BPContactNumber": "08022288888 ",
                  "BPName": "17936815-Anand Rao Circle",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Near Ganesha Temple",
                  "BPLocation": "Anandarao Circle 08022288888",
                  "BPAddress": "SC Road Opp Brigade Plaza , Anandarao Circle",
                  "BPCoordinates": "13.34,74.733"
                 },
                 {
                  "BPId": "17948144",
                  "BPContactNumber": " 08022288888 08041440915",
                  "BPName": "17948144-Gandhinagar",
                  "BPTime": "2018-05-01T23:05:00Z",
                  "BPLandmark": "Sapna Book House",
                  "BPLocation": "Gandhinagar  08022288888",
                  "BPAddress": "#26 2nd cross Srirama Temple Building, Syndicate Bank Road Opp Sapna Book House",
                  "BPCoordinates": "12.979173,77.577047"
                 },
                 {
                  "BPId": "17946203",
                  "BPContactNumber": "9880436363 08025500186  08022288888",
                  "BPName": "17946203-Shanthinagar",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Shanthinagar(Bmtc Bus Station)",
                  "BPLocation": "ShanthinagarBmtc Bus Station 9880436363 08025500186",
                  "BPAddress": "Shanthinagar(BMTC Bus station)",
                  "BPCoordinates": "12.958314,77.601186"
                 },
                 {
                  "BPId": "17937170",
                  "BPContactNumber": "9880436363 08025500186 ",
                  "BPName": "17937170-Madiwala",
                  "BPTime": "2018-05-01T23:35:00Z",
                  "BPLandmark": "Opp To Canara Bank",
                  "BPLocation": "Madiwala 9880436363 08025500186",
                  "BPAddress": "SeaBird Tourist Center shop no 76/1 opp canara bank hosur main road madiwala - 560068 , SeaBird Tourist Center shop no 76/1 opp canara bank hosur main road madiwala - 560068 ",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17937209",
                  "BPContactNumber": "9880436363 08025500186 08022288888 ",
                  "BPName": "17937209-Silk Board",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "Fly Over End",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Silk Board ",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17937341",
                  "BPContactNumber": "9880436363 08025500186  08022288888",
                  "BPName": "17937341-Electronic City",
                  "BPTime": "2018-05-01T23:57:00Z",
                  "BPLandmark": "Next To Audi Showroom, Opp Toll Booth",
                  "BPLocation": "Electronic City 9880436363 08025500186  08022288888",
                  "BPAddress": "Electronic City",
                  "BPCoordinates": "12.83,77.67"
                 },
                 {
                  "BPId": "17967118",
                  "BPContactNumber": "9880436363  08025500186 ",
                  "BPName": "17967118-Hosur",
                  "BPTime": "2018-05-01T23:59:00Z",
                  "BPLandmark": "Yashodha Tower Opp To Bus Stand",
                  "BPLocation": "Hosur 9880436363 08025500186  08022288888",
                  "BPAddress": "Hosur ",
                  "BPCoordinates": "12.7330270,77.8301600"
                 }
                ]
               },
               "amenities": "NA",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "06:00",
               "zeroCancellationTime": 0,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "525",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "500.0",
                "adulttotalfare": "0",
                "servicetax": "25.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "6",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "9600066555 044-24796955 9500012331",
                  "DPName": "307820-Sriperumbudur",
                  "DPId": "307820",
                  "BPLandmark": "Sriperambadur  Toll Gate",
                  "BPAddress": "SRIPERAMBADUR  TOLL GATE,  BANGALORE HIGHWAY",
                  "DPLocation": "Sri Perumbutur 9600066555 044 24796955 9500012331"
                 },
                 {
                  "DPTime": "2018-05-03T04:40:00Z",
                  "BPContactNumber": "9176176780  044-24796955",
                  "DPName": "17946878-Poonamallee",
                  "DPId": "17946878",
                  "BPLandmark": "Entrance Of Kfc Restrurant",
                  "BPAddress": "ENTRANCE OF KFC RESTRURANT, NEAR HOTEL HIGHWAY, NAZARATHPET SIGNAL , NEAR HOTEL HIGHWAY, NAZARATHPET SIGNAL ",
                  "DPLocation": "Ponamalee"
                 },
                 {
                  "DPTime": "2018-05-03T04:50:00Z",
                  "BPContactNumber": "9840650077 9900066555",
                  "DPName": "1566155-Maduravoyal",
                  "DPId": "1566155",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "Maduravoyil ",
                  "DPLocation": "Maduravoyil"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "9176176780    04424796955 ",
                  "DPName": "17948163-Koyambedu",
                  "DPId": "17948163",
                  "BPLandmark": "Near  Hotel  Chennai  Gateway",
                  "BPAddress": "SEABIRD  TOURISTS  125/1045  POONAMALEE  HIGH ROAD,  BELOW KOYAMBEDU FLYOVER, NEAR  HOTEL  CHENNAI  GATEWAY , SEABIRD  TOURISTS  125/1045  POONAMALEE  HIGH ROAD",
                  "DPLocation": "Koyambedu"
                 },
                 {
                  "DPTime": "2018-05-03T05:10:00Z",
                  "BPContactNumber": "044-24796955 9003208109 9500012331 9900066555 ",
                  "DPName": "1566156-Aminjikarai",
                  "DPId": "1566156",
                  "BPLandmark": "Aminjikarai Skywalk",
                  "BPAddress": "Aminjikarai Skywalk ",
                  "DPLocation": "Aminjikarai Skywalk"
                 },
                 {
                  "DPTime": "2018-05-03T05:20:00Z",
                  "BPContactNumber": "044-24796955 9003208109 9500012331 9900066555 ",
                  "DPName": "1566157-Kilpauk",
                  "DPId": "1566157",
                  "BPLandmark": "Ega Theatre Signal",
                  "BPAddress": "Theatre Signal ",
                  "DPLocation": "Ega Theatre Signal"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "9176176780   044-24796955 ",
                  "DPName": "17943916-Egmore",
                  "DPId": "17943916",
                  "BPLandmark": "Entrance Of Hotel Imperial",
                  "BPAddress": "ENTRANCE OF HOTEL IMPERIAL,  GANDHI IRWIN  NEAR LAXMI TRAVELS, NEAR LAXMI TRAVELS",
                  "DPLocation": "Egmore"
                 },
                 {
                  "DPTime": "2018-05-03T05:40:00Z",
                  "BPContactNumber": "9176176780  044-24796955",
                  "DPName": "160211-Central Railway Station",
                  "DPId": "160211",
                  "BPLandmark": "Opp Central Railway Station",
                  "BPAddress": "Seabird Tourists near Hotel Buhari complex",
                  "DPLocation": "Central"
                 },
                 {
                  "DPTime": "2018-05-03T05:50:00Z",
                  "BPContactNumber": "044-24796955 9003208109 9500012331 9900066555 ",
                  "DPName": "1566159-Santhom",
                  "DPId": "1566159",
                  "BPLandmark": "Bus Stop",
                  "BPAddress": "Santhome ",
                  "DPLocation": "Santhome"
                 },
                 {
                  "DPTime": "2018-05-03T06:00:00Z",
                  "BPContactNumber": "9176176780  044-24796955 ",
                  "DPName": "1695376-Thiruvanmiyur",
                  "DPId": "1695376",
                  "BPLandmark": "Opposite To Cotton House",
                  "BPAddress": "JAYANTHI THEATRE SIGNAL, OPPOSITE TO COTTON HOUSE, THIRUVANMIYUR, THIRUVANMIYUR",
                  "DPLocation": "Thiruvanmiyur"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo A/C Multi Axle SemiSleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "525",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 28,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:00:00Z",
               "idRequired": "false",
               "ServiceID": 1875425,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 1,
                 "seats": 1,
                 "onBoardExperience": 1,
                 "onTimeAD": 1
                },
                "reviewCount": 1,
                "posReviewCount": 0,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 1,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2300-SeaBirdTourist-VolvoACMultiAxleSemiSleeper2+2"
               },
               "TravelsName": "Sea Bird Tourist",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771875425",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "false",
               "ugcid": "Bangalore-Chennai-2300-SeaBirdTourist-VolvoACMultiAxleSemiSleeper2+2",
               "arrdate": "2018-05-02T06:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "0",
               "DepartureTime": "23:45",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": 16,
               "BusServiceID": "SCH58882612C",
               "totalReviews": "0",
               "seat": "ST",
               "duration": "5h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6c0Fl5FJMpnf1qVV920UzvQD3yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "17985945",
                  "BPContactNumber": "9986676022 / 08048669775",
                  "BPName": "17985945-Madiwala",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "In Front of  Bharat Petrol Bunk",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": " Opp More Super Market , Total Mall,\nHosur Main Road,",
                  "BPCoordinates": "12.929,77.6141393"
                 },
                 {
                  "BPId": "17985960",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985960-Silk Board",
                  "BPTime": "2018-05-01T23:50:00Z",
                  "BPLandmark": " ",
                  "BPLocation": "Silk Board - Renault Show room",
                  "BPAddress": "Renault Show room",
                  "BPCoordinates": "12.9171468,77.62279809999995"
                 },
                 {
                  "BPId": "17985974",
                  "BPContactNumber": "9986676022, 080 48669775",
                  "BPName": "17985974-Electronic City",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "near Audi service centre",
                  "BPLocation": "Electronic City Toll gate",
                  "BPAddress": "Toll gate",
                  "BPCoordinates": "12.83,77.67"
                 }
                ]
               },
               "amenities": "NA",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:30",
               "zeroCancellationTime": 0,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "892",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "850.0",
                "adulttotalfare": "0",
                "servicetax": "42.5"
               },
               "dst_vendor_id": "102",
               "OperatorID": "16604",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "8098103181,8098103193",
                  "DPName": "17985946-Koyambedu",
                  "DPId": "17985946",
                  "BPLandmark": "Next to Assife Briyani",
                  "BPAddress": "1st Floor,  100 Ft Road,\nUpstairs Kodak Mahindra Bank, Koyambedu, Chennai-107",
                  "DPLocation": "Koyambedu Office"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Scania A/C Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "892",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 30,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:45:00Z",
               "idRequired": "false",
               "ServiceID": 1915981,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 4.5,
                 "seats": 4.75,
                 "onBoardExperience": 4.5,
                 "onTimeAD": 4.25
                },
                "reviewCount": 4,
                "posReviewCount": 3,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 4.5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2345-EvacayBus-ScaniaACSemiSleeper2+2"
               },
               "TravelsName": "Evacay Bus",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "1000002126771915981",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2345-EvacayBus-ScaniaACSemiSleeper2+2",
               "arrdate": "2018-05-02T05:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "0",
               "DepartureTime": "23:00",
               "cancellationPolicy": "0:3:100:0;3:6:50:0;6:12:25:0;12:-1:10:0",
               "avlWindowSeats": -1,
               "BusServiceID": "",
               "totalReviews": "0",
               "seat": "SLST",
               "duration": "6h 0m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6s0Fl5FJMpnf1qVV9mQc0esB3yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "nonac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "167511",
                  "BPContactNumber": "7550108944 / 7550108957",
                  "BPName": "167511-Kalasipalyam Main Road",
                  "BPTime": "2018-05-01T21:30:00Z",
                  "BPLandmark": "Kalasipalyam Main Road, Opp to Market  7550147621",
                  "BPLocation": "Kalasipalyam Main Road",
                  "BPAddress": "GM Building - Angel Travels\nKalasipalyam Main Road",
                  "BPCoordinates": "12.9605061,77.5778061"
                 },
                 {
                  "BPId": "228044",
                  "BPContactNumber": "7550108944 / 7550108957",
                  "BPName": "228044-Double Road",
                  "BPTime": "2018-05-01T21:40:00Z",
                  "BPLandmark": "near bus stop",
                  "BPLocation": "Double Road",
                  "BPAddress": "Double Road\nnear bus stop ",
                  "BPCoordinates": "12.9619833,77.6344079"
                 },
                 {
                  "BPId": "246138",
                  "BPContactNumber": "7550108944 / 7550108957",
                  "BPName": "246138-Residency Road",
                  "BPTime": "2018-05-01T21:50:00Z",
                  "BPLandmark": "near bishop cotton School",
                  "BPLocation": "Residency Road",
                  "BPAddress": "Residency Road\nnear bishop cotton School",
                  "BPCoordinates": "12.971167,77.600678"
                 },
                 {
                  "BPId": "246139",
                  "BPContactNumber": "7550108944 / 7550108957",
                  "BPName": "246139-Indira Nagar",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": "Indira Nagar Near old madras road",
                  "BPLocation": "Indira Nagar",
                  "BPAddress": "Indira Nagar\nNear old madras road",
                  "BPCoordinates": "12.971886,77.6411142"
                 },
                 {
                  "BPId": "246140",
                  "BPContactNumber": "7550108944 / 7550108957",
                  "BPName": "246140-Tin Factory",
                  "BPTime": "2018-05-01T22:20:00Z",
                  "BPLandmark": "Tin Factory, Near Bharath pertol bulk",
                  "BPLocation": "Tin Factory",
                  "BPAddress": "Tin Factory\nNear Bharath pertol bulk",
                  "BPCoordinates": "12.9968611,77.670655"
                 },
                 {
                  "BPId": "246141",
                  "BPContactNumber": "7550108944 / 7550108957",
                  "BPName": "246141-KR Puram",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "Near railway station two wheeler parking",
                  "BPLocation": "KR Puram",
                  "BPAddress": "KR Puram\nNear railway station two wheeler parking",
                  "BPCoordinates": "13.0001496,77.6831731"
                 },
                 {
                  "BPId": "246142",
                  "BPContactNumber": "7550108944 / 7550108957",
                  "BPName": "246142-Marathahalli",
                  "BPTime": "2018-05-01T22:40:00Z",
                  "BPLandmark": "Near Kalamandhir",
                  "BPLocation": "Marathahalli",
                  "BPAddress": "Marathahalli\nNear Kalamandhir",
                  "BPCoordinates": "12.9518835,77.7001831"
                 },
                 {
                  "BPId": "246143",
                  "BPContactNumber": "7550108944 / 7550108957",
                  "BPName": "246143-Bellandur",
                  "BPTime": "2018-05-01T22:50:00Z",
                  "BPLandmark": "Near conti sweets",
                  "BPLocation": "Bellandur",
                  "BPAddress": "Bellandur\nNear conti sweets",
                  "BPCoordinates": "12.9305365,77.6721055"
                 },
                 {
                  "BPId": "167510",
                  "BPContactNumber": "7550108944 / 7550108957",
                  "BPName": "167510-Madiwala",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "near to universal Travels",
                  "BPLocation": "Madiwala",
                  "BPAddress": "Near to Universal Travels",
                  "BPCoordinates": "12.9195882,77.6158801"
                 },
                 {
                  "BPId": "228047",
                  "BPContactNumber": "7550108944 / 7550108957",
                  "BPName": "228047-Bommanahalli   ",
                  "BPTime": "2018-05-01T23:10:00Z",
                  "BPLandmark": "Bommanahalli   near KPN Travels  Shell petrol bulk",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "Bommanahalli   near KPN Travels  Shell petrol bulk",
                  "BPCoordinates": "12.8985603,77.6178776"
                 },
                 {
                  "BPId": "167509",
                  "BPContactNumber": "7550108944 / 7550108957",
                  "BPName": "167509-Electronic City Toll Gate",
                  "BPTime": "2018-05-01T23:20:00Z",
                  "BPLandmark": "Electronic City Toll Gate",
                  "BPLocation": "Electronic City Toll Gate",
                  "BPAddress": "Electronics City ",
                  "BPCoordinates": "12.8962015,77.5993685"
                 },
                 {
                  "BPId": "228049",
                  "BPContactNumber": "7550108944 / 7550108957",
                  "BPName": "228049-Bommasandra",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "Neat to R. K. Wings Near Kallada Travels",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "Bommasandra- \nNeat to R. K. Wings\nNear Kallada Travels",
                  "BPCoordinates": "null,null"
                 },
                 {
                  "BPId": "228731",
                  "BPContactNumber": "7550108944 / 7550108957",
                  "BPName": "228731-Attibele",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "Attibele TOLL GATE ",
                  "BPLocation": "Attibele",
                  "BPAddress": "Attibele TOLL GATE ",
                  "BPCoordinates": "12.7808949,77.7713144"
                 }
                ]
               },
               "amenities": "NA",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:00",
               "zeroCancellationTime": 10,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "350",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "400.0",
                "adulttotalfare": "0",
                "servicetax": "0.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15442",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "7550147619 / 7550147620 / 044-24341746",
                  "DPName": "167505-Sriperumbudur",
                  "DPId": "167505",
                  "BPLandmark": "TOLL GATE",
                  "BPAddress": "TOLL GATE",
                  "DPLocation": "Sriperumbudur"
                 },
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "7550147619 / 7550147620 / 044-24341746",
                  "DPName": "167504-Poonamalle",
                  "DPId": "167504",
                  "BPLandmark": "Poonamalle - KFC (next to RTO Office)",
                  "BPAddress": "Poonamalle - KFC (next to RTO Office)",
                  "DPLocation": "Poonamalle"
                 },
                 {
                  "DPTime": "2018-05-03T04:55:00Z",
                  "BPContactNumber": "7550147619",
                  "DPName": "185700-Maduravoyal",
                  "DPId": "185700",
                  "BPLandmark": "MGR UNIVER CITY",
                  "BPAddress": "MGR UNIVERCITY OPP  SUDHA TRAVELS",
                  "DPLocation": "Maduravoyal"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "7550147619/ 7550147620/ 04424793232 / 04424793252",
                  "DPName": "167503-Koyambedu",
                  "DPId": "167503",
                  "BPLandmark": "NO . 7   KALIAMMAN KOIL STREET KOYAMBET  NEAR ARAFFA HOTEL OPP  SPG TRAVELS  BY NEXT  CANARA BANK ",
                  "BPAddress": "NO . 7   KALIAMMAN KOIL STREET KOYAMBET  NEAR ARAFFA HOTEL OPP  SPG TRAVELS  BY NEXT  CANARA BANK ",
                  "DPLocation": "Koyambedu"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "7550147619/7550147620/  04424341746/04424311717/04445493252",
                  "DPName": "167500-T Nagar",
                  "DPId": "167500",
                  "BPLandmark": "Ramakrishna school opp SPG TRAVELS",
                  "BPAddress": "NO .61 BURKIT ROAD  T NAGAR CHENNAI 17",
                  "DPLocation": "T Nagar"
                 },
                 {
                  "DPTime": "2018-05-03T05:20:00Z",
                  "BPContactNumber": "7550147619 / 7550147620 / 044-24341746",
                  "DPName": "167499-Saidapet",
                  "DPId": "167499",
                  "BPLandmark": "POLICE STATION",
                  "BPAddress": "saidapet POLICE STATION",
                  "DPLocation": "Saidapet"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "7550147619 / 7550147620 / 044-24341746",
                  "DPName": "167497-Mathiyakailash",
                  "DPId": "167497",
                  "BPLandmark": "bus stop",
                  "BPAddress": "Mathiyakailash  bus  stop ",
                  "DPLocation": "Mathiyakailash"
                 },
                 {
                  "DPTime": "2018-05-03T05:35:00Z",
                  "BPContactNumber": "7550147619 / 7550147620 / 044-24341746",
                  "DPName": "167495-Tidel Park",
                  "DPId": "167495",
                  "BPLandmark": "bus stop",
                  "BPAddress": "Tidel park  bus stop",
                  "DPLocation": "Tidel Park"
                 },
                 {
                  "DPTime": "2018-05-03T05:40:00Z",
                  "BPContactNumber": "7550147619 / 7550147620 / 044-24341746",
                  "DPName": "167494-Perungudi",
                  "DPId": "167494",
                  "BPLandmark": "Apollo Hospitals",
                  "BPAddress": "Apollo Hospitals\n",
                  "DPLocation": "Perungudi"
                 },
                 {
                  "DPTime": "2018-05-03T05:45:00Z",
                  "BPContactNumber": "7550147619 / 7550147620 / 044-24341746",
                  "DPName": "167493-Thuraipakkam",
                  "DPId": "167493",
                  "BPLandmark": "Opp To Rattha Tek Tower",
                  "BPAddress": "Opp To Rattha Tek Tower",
                  "DPLocation": "Thuraipakkam"
                 },
                 {
                  "DPTime": "2018-05-03T05:50:00Z",
                  "BPContactNumber": "7550147619 / 7550147620 / 044-24341746",
                  "DPName": "167492-Sholinganallur",
                  "DPId": "167492",
                  "BPLandmark": "KVB ATM, Near Sholinganallur signal",
                  "BPAddress": "SHOLINGANALLUR  OPP KVB BANK",
                  "DPLocation": "Sholinganallur"
                 },
                 {
                  "DPTime": "2018-05-03T06:00:00Z",
                  "BPContactNumber": "7550147619 /20",
                  "DPName": "190909-Sathyabama University",
                  "DPId": "190909",
                  "BPLandmark": "Sathyabama University",
                  "BPAddress": "Sathyabama University",
                  "DPLocation": "Sathyabama University"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Leyland Non A/C Sleeper/Semi Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "350",
                  "busCondition": "nonac",
                  "seatType": "Semi Sleeper/Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 29,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "400",
                  "busCondition": "nonac",
                  "seatType": "Semi Sleeper/Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 29,
                  "availabilityStatus": "Available"
                 },
                 {
                  "SellFare": "450",
                  "busCondition": "nonac",
                  "seatType": "Semi Sleeper/Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 29,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:00:00Z",
               "idRequired": "false",
               "ServiceID": 98061,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "SPG Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "2000002126770098061",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2300-SPGTravels-LeylandNonACSleeperSemiSleeper2+1",
               "arrdate": "2018-05-02T05:00:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "2.9",
               "DepartureTime": "08:00",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": -1,
               "BusServiceID": "",
               "totalReviews": "99",
               "seat": "ST",
               "duration": "7h 30m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6s0Fl5FJMpnf1qVV9mQa0fIC5yRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "nonac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "31853",
                  "BPContactNumber": "080-41139625, ",
                  "BPName": "31853-anand rao circle",
                  "BPTime": "2018-05-01T08:00:00Z",
                  "BPLandmark": "#30/1 Srinath Building Opp to Bridge Plaza Next to Ganesh temple or http://zip.pr/IN/SVMS2544",
                  "BPLocation": "anand rao circle",
                  "BPAddress": "Opp to Bridge Plaza Next to Ganesh Temple or http://zip.pr/IN/SVMS2544",
                  "BPCoordinates": "12.9803149,77.575718"
                 },
                 {
                  "BPId": "31854",
                  "BPContactNumber": "080-41473621,41139625, ",
                  "BPName": "31854-Indira Nagar",
                  "BPTime": "2018-05-01T08:10:00Z",
                  "BPLandmark": "Opp to pertol bank Next to BDA complex Indiranagar or http://zip.pr/IN/SVMS9486",
                  "BPLocation": "Indira Nagar",
                  "BPAddress": "Opp to pertol bank or http://zip.pr/IN/SVMS9486",
                  "BPCoordinates": "12.9714439,77.6411597"
                 },
                 {
                  "BPId": "31856",
                  "BPContactNumber": "08041473621,41139625,",
                  "BPName": "31856-ITI Gate",
                  "BPTime": "2018-05-01T08:20:00Z",
                  "BPLandmark": "Iti gate KR Puram main road  or http://zip.pr/IN/SVMS8145",
                  "BPLocation": "ITI Gate",
                  "BPAddress": "Iti gate KR Puram main road or http://zip.pr/IN/SVMS8145",
                  "BPCoordinates": "12.9987486,77.6927946"
                 },
                 {
                  "BPId": "31857",
                  "BPContactNumber": "080-41473621,41139625,",
                  "BPName": "31857-KR Puram",
                  "BPTime": "2018-05-01T08:30:00Z",
                  "BPLandmark": "Bus stop near Ganesha KR Puram or http://zip.pr/IN/SVMS3621",
                  "BPLocation": "KR Puram",
                  "BPAddress": "Near Ganesha Temple or http://zip.pr/IN/SVMS3621",
                  "BPCoordinates": "13.0001496,77.6831731"
                 }
                ]
               },
               "amenities": "NA",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "15:30",
               "zeroCancellationTime": 0,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "350",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "350.0",
                "adulttotalfare": "0",
                "servicetax": "0.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "6346",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T15:30:00Z",
                  "BPContactNumber": "080-22207240,41139625",
                  "DPName": "31860-Koyambedu",
                  "DPId": "31860",
                  "BPLandmark": "Near bus stand Koyambedu",
                  "BPAddress": "Near bus stand",
                  "DPLocation": "Koyambedu"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Leyland Non A/C Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "350",
                  "busCondition": "nonac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 35,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T08:00:00Z",
               "idRequired": "false",
               "ServiceID": 78779,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "Sri Venkateshwara travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "2000002126770078779",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-0800-SriVenkateshwaratravels-LeylandNonACSemiSleeper2+2",
               "arrdate": "2018-05-01T15:30:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "4.5",
               "DepartureTime": "23:30",
               "cancellationPolicy": "0:12:100:0;12:24:60:0;24:-1:25:0;",
               "avlWindowSeats": -1,
               "BusServiceID": "",
               "totalReviews": "692",
               "seat": "SL",
               "duration": "6h 15m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6s0Fl5FJMpnf1qVV9mQZzu8D4iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "185657",
                  "BPContactNumber": "9880177545,08025537545,08025537546",
                  "BPName": "185657-BELLANDUR",
                  "BPTime": "2018-05-01T21:59:00Z",
                  "BPLandmark": "NEAR EMPIRE HOTEL",
                  "BPLocation": "BELLANDUR (VAN PICKUP)",
                  "BPAddress": "opp coffee day NEAR EMPIRE HOTEL",
                  "BPCoordinates": "12.9250519,77.6732683"
                 },
                 {
                  "BPId": "130414",
                  "BPContactNumber": "08025537545,9880177545,08025537546",
                  "BPName": "130414-Kalasipalyam New Extension",
                  "BPTime": "2018-05-01T22:00:00Z",
                  "BPLandmark": " OPP TO  VENKETESHWARA TEMPLE",
                  "BPLocation": "Kalasipalyam New Extension",
                  "BPAddress": "NEAR BANGALORE MEDICAL COLLEGE OPP TO VENKETESHWARA TEMPLE\n",
                  "BPCoordinates": "12.960123,77.581283"
                 },
                 {
                  "BPId": "142193",
                  "BPContactNumber": "9880177545,08025537545,08025537546",
                  "BPName": "142193-MARATHALLI(VAN PICKUP)",
                  "BPTime": "2018-05-01T22:10:00Z",
                  "BPLandmark": "NEAR BRAND FACTORY ,HP PETROL PUMP",
                  "BPLocation": "MARATHALLI(VAN PICKUP)",
                  "BPAddress": "NEAR BRAND FACTORY ,HP PETROL PUMP TOWARDS HAL ROAD",
                  "BPCoordinates": "12.9518835,77.7001831"
                 },
                 {
                  "BPId": "144334",
                  "BPContactNumber": "9880177545,08025537545,08025537546",
                  "BPName": "144334-Majestic",
                  "BPTime": "2018-05-01T22:19:00Z",
                  "BPLandmark": "near hotel tourist",
                  "BPLocation": "Majestic",
                  "BPAddress": "near hotel tourist (ANAND RAO CIRCLE )9880177545",
                  "BPCoordinates": "12.9770579,77.5709742"
                 },
                 {
                  "BPId": "133453",
                  "BPContactNumber": "08025537545,9880177545,08025537546",
                  "BPName": "133453-anand rao circle",
                  "BPTime": "2018-05-01T22:20:00Z",
                  "BPLandmark": "near hotel tourist Anand rao circle 9880177545",
                  "BPLocation": "anand rao circle",
                  "BPAddress": "near hotel tourist  Anand rao circle 9880177545",
                  "BPCoordinates": "12.9803149,77.575718"
                 },
                 {
                  "BPId": "183123",
                  "BPContactNumber": "08025537545,9880177545,08025537546",
                  "BPName": "183123-HAL Main Gate",
                  "BPTime": "2018-05-01T22:21:00Z",
                  "BPLandmark": "near signal ",
                  "BPLocation": "HAL Main Gate",
                  "BPAddress": "near signal (pick up van) ",
                  "BPCoordinates": "12.9715167,77.6590705"
                 },
                 {
                  "BPId": "142233",
                  "BPContactNumber": "9880177545,08025537545,08025537546",
                  "BPName": "142233-INDRANAGAR",
                  "BPTime": "2018-05-01T22:35:00Z",
                  "BPLandmark": "Near BDA Complex. Opp To Canara Bank Indira Nagar ph.9880177545",
                  "BPLocation": "INDIRANGAR (VAN PICKUP)",
                  "BPAddress": "Near BDA Complex. Opp To Canara Bank Indira Nagar ",
                  "BPCoordinates": "null,null"
                 },
                 {
                  "BPId": "136247",
                  "BPContactNumber": "9880177545,08025537545,08025537546",
                  "BPName": "136247-Shanti Nagar",
                  "BPTime": "2018-05-01T22:40:00Z",
                  "BPLandmark": "near reliance 9880177545",
                  "BPLocation": "Shanti Nagar",
                  "BPAddress": "In Front Of RELIANCE MART. Next To Shanthi Nagar Bus Stand",
                  "BPCoordinates": "12.956947,77.59926"
                 },
                 {
                  "BPId": "183122",
                  "BPContactNumber": "9880177545,08025537545,08025537546",
                  "BPName": "183122-Domlur Flyover",
                  "BPTime": "2018-05-01T22:45:00Z",
                  "BPLandmark": "near hdfc bank AND JEEP SHOWROOM",
                  "BPLocation": "Domlur Flyover",
                  "BPAddress": "near hdfc bank AND JEEP SHOWROOM",
                  "BPCoordinates": "12.9618204,77.6417319"
                 },
                 {
                  "BPId": "182486",
                  "BPContactNumber": "08025537545,9880177545,08025537546",
                  "BPName": "182486-Dairy circle",
                  "BPTime": "2018-05-01T22:50:00Z",
                  "BPLandmark": "bus stand",
                  "BPLocation": "Dairy circle",
                  "BPAddress": "opp christ college near bus stand",
                  "BPCoordinates": "12.9370749,77.601701"
                 },
                 {
                  "BPId": "191651",
                  "BPContactNumber": "9880177545,080-25537545,08025537546",
                  "BPName": "191651-Sony World (koramangala)",
                  "BPTime": "2018-05-01T22:55:00Z",
                  "BPLandmark": "near wildcraft",
                  "BPLocation": "Sony World",
                  "BPAddress": "koramangala sony world signal near wild craft (pick up van)",
                  "BPCoordinates": "12.9370715,77.6266033"
                 },
                 {
                  "BPId": "145133",
                  "BPContactNumber": "08025537545,9880177545,08025537546",
                  "BPName": "145133-Koramangala",
                  "BPTime": "2018-05-01T23:25:00Z",
                  "BPLandmark": "Koramangala 2nd BLOCK OPP TO FABINDIA OPP TO FABINDIA",
                  "BPLocation": "Koramangala",
                  "BPAddress": "Koramangala 2nd BLOCK OPP TO FABINDIA",
                  "BPCoordinates": "12.9331686,77.6277328"
                 },
                 {
                  "BPId": "126992",
                  "BPContactNumber": "08025537545,9880177545,08025537546",
                  "BPName": "126992-Madiwala",
                  "BPTime": "2018-05-01T23:30:00Z",
                  "BPLandmark": "opp to poorvika mobiles near ayyappa temple",
                  "BPLocation": "Madiwala",
                  "BPAddress": "masjid e noor complex opp to poorvika mobiles near ayyappa temple ",
                  "BPCoordinates": "12.9249223,77.618372"
                 },
                 {
                  "BPId": "183038",
                  "BPContactNumber": "08025537545,9880177545,08025537546",
                  "BPName": "183038-Madiwala Police Station",
                  "BPTime": "2018-05-01T23:35:00Z",
                  "BPLandmark": "Madiwala Police Station",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": "RKT TRAVELS NEAR PETROL PUMP",
                  "BPCoordinates": "12.9217441,77.6215187"
                 },
                 {
                  "BPId": "126994",
                  "BPContactNumber": "08025537545,9880177545,08025537546",
                  "BPName": "126994-Silk Board Bridge",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "Aswad Hospital ",
                  "BPLocation": "Silk Board Bridge",
                  "BPAddress": "NEAR RENAULT SHOWROOM TOWARDS HOSUR ROAD",
                  "BPCoordinates": "12.9169665,77.6232095"
                 },
                 {
                  "BPId": "136248",
                  "BPContactNumber": "9880177545,08025537545,08025537546",
                  "BPName": "136248-Bommanahalli",
                  "BPTime": "2018-05-01T23:41:00Z",
                  "BPLandmark": "In Bommanahalli Circle towords Hosur road bommanahalli bus stop",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "In Bommanahalli Circle towords Hosur road bommanahalli bus stop",
                  "BPCoordinates": "12.8987362,77.6174937"
                 },
                 {
                  "BPId": "182598",
                  "BPContactNumber": "08025537545,9880177545,08025537546",
                  "BPName": "182598-Electronic City BMTC Depot",
                  "BPTime": "2018-05-01T23:50:00Z",
                  "BPLandmark": "PALLAVI RESTAURANT",
                  "BPLocation": "Electronic City BMTC Depot",
                  "BPAddress": "Electronic City BMTC Depot",
                  "BPCoordinates": "12.8466701,77.6726416"
                 },
                 {
                  "BPId": "126995",
                  "BPContactNumber": "9880177545,08025537545,08025537546",
                  "BPName": "126995-Electronic City Toll Gate",
                  "BPTime": "2018-05-01T23:51:00Z",
                  "BPLandmark": "NEAR BMTC BUS DEPO",
                  "BPLocation": "Electronic City Toll Gate",
                  "BPAddress": "NEAR BMTC BUS DEPO",
                  "BPCoordinates": "12.8962015,77.5993685"
                 },
                 {
                  "BPId": "180040",
                  "BPContactNumber": "9845779785,9880177545,08025537546",
                  "BPName": "180040-Bommasandra",
                  "BPTime": "2018-05-01T23:55:00Z",
                  "BPLandmark": "near a 2 b",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "near a 2 b",
                  "BPCoordinates": "12.8223751,77.6863486"
                 },
                 {
                  "BPId": "183070",
                  "BPContactNumber": "08025537545,9880177545,08025537546",
                  "BPName": "183070-Attibele",
                  "BPTime": "2018-05-01T23:58:00Z",
                  "BPLandmark": "toll gate",
                  "BPLocation": "Attibele",
                  "BPAddress": "near toll",
                  "BPCoordinates": "12.7808949,77.7713144"
                 }
                ]
               },
               "amenities": "NA",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "05:45",
               "zeroCancellationTime": 10,
               "gps": "true",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1153",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "1099.0",
                "adulttotalfare": "0",
                "servicetax": "54.95"
               },
               "dst_vendor_id": "102",
               "OperatorID": "10756",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "08025537545,8148077787",
                  "DPName": "182810-Kanchipuram Bypass",
                  "DPId": "182810",
                  "BPLandmark": "Kanchipuram Bypass",
                  "BPAddress": "Kanchipuram Bypass",
                  "DPLocation": "Kanchipuram Bypass"
                 },
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "08025537545,8148077787",
                  "DPName": "129168-Poonamallee(KFC)",
                  "DPId": "129168",
                  "BPLandmark": "Motel Highway KFC ",
                  "BPAddress": "Motel Highway KFC, ",
                  "DPLocation": "Poonamallee(KFC)"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "08025537545,8148077787",
                  "DPName": "180195-Maduravoyal",
                  "DPId": "180195",
                  "BPLandmark": "bye pass Erikara bus stop",
                  "BPAddress": "bye pass Erikara bus stop",
                  "DPLocation": "Maduravoyal"
                 },
                 {
                  "DPTime": "2018-05-03T05:45:00Z",
                  "BPContactNumber": "08025537545,8148077787",
                  "DPName": "129165-Koyambedu",
                  "DPId": "129165",
                  "BPLandmark": "NEAR ROYAL PLAZA HOTEL",
                  "BPAddress": "Near Royal Plaza Hotel , Opp Koyambedu Flower Market , Koyambedu Omni Busstand 600107",
                  "DPLocation": "Koyambedu"
                 },
                 {
                  "DPTime": "2018-05-03T05:55:00Z",
                  "BPContactNumber": "08025537545,8148077787",
                  "DPName": "169608-Egmore",
                  "DPId": "169608",
                  "BPLandmark": "bharath petrol pump",
                  "BPAddress": "opp to albert theatre ,near park hotel",
                  "DPLocation": "Egmore"
                 },
                 {
                  "DPTime": "2018-05-03T06:00:00Z",
                  "BPContactNumber": "08025537545,8148077787",
                  "DPName": "169609-Central Railway Station",
                  "DPId": "169609",
                  "BPLandmark": "NEAR HOTEL EVEREST",
                  "BPAddress": "Near Hotel Everest building , Next to Sana Travels",
                  "DPLocation": "Central Railway Station"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Leyland A/C Sleeper Executive (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1153",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 26,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:30:00Z",
               "idRequired": "false",
               "ServiceID": 65484,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 2,
                 "seats": 1.5,
                 "onBoardExperience": 2,
                 "onTimeAD": 2
                },
                "reviewCount": 2,
                "posReviewCount": 0,
                "criReviewCount": 1,
                "imgReviewCount": 0,
                "totalRating": 2,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-2330-SMATravels-LeylandACSleeperExecutive2+1"
               },
               "TravelsName": "SMA Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "2000002126770065484",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2330-SMATravels-LeylandACSleeperExecutive2+1",
               "arrdate": "2018-05-02T05:45:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "0",
               "DepartureTime": "04:30",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": -1,
               "BusServiceID": "",
               "totalReviews": "0",
               "seat": "ST",
               "duration": "5h 15m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6s0Fl5FJMpnf1qVV9mQbzuz75CRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "214914",
                  "BPContactNumber": "9980567374, 080 48521509, 7847840222, 9444915005",
                  "BPName": "214914-Majestic",
                  "BPTime": "2018-05-01T04:00:00Z",
                  "BPLandmark": "Hotel Amar Building",
                  "BPLocation": "Majestic",
                  "BPAddress": "Opp.to Kempagowda Bus Terminal, Hotel Amar Building",
                  "BPCoordinates": "12.9770579,77.5709742"
                 },
                 {
                  "BPId": "216642",
                  "BPContactNumber": "9980567374, 080 48521509, 7847840222, 9444915005",
                  "BPName": "216642-Shanti Nagar",
                  "BPTime": "2018-05-01T04:10:00Z",
                  "BPLandmark": "Near Reliance Market",
                  "BPLocation": "Shanti Nagar",
                  "BPAddress": "Reliance Market, Shanti Nagar",
                  "BPCoordinates": "12.956947,77.59926"
                 },
                 {
                  "BPId": "85407",
                  "BPContactNumber": "9980567374, 080 48521509, 7847840222, 9444915005",
                  "BPName": "85407-Madiwala",
                  "BPTime": "2018-05-01T04:25:00Z",
                  "BPLandmark": "Near Savoury Business Hotel",
                  "BPLocation": "Madiwala",
                  "BPAddress": "RKK Travels, Kairali Travels, 82, 1st Floor, KTR Complex, Near Savoury Business Hotel, Madiwala",
                  "BPCoordinates": "12.9192702,77.616009"
                 },
                 {
                  "BPId": "240678",
                  "BPContactNumber": "9980567374, 080 48521509, 7847840222, 9444915005",
                  "BPName": "240678-Madiwala Police Station",
                  "BPTime": "2018-05-01T04:30:00Z",
                  "BPLandmark": "Bharath Petroleum Fuel Pump",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": "Bharath Petroleum Fuel Pump, Hosur Road",
                  "BPCoordinates": "12.921717,77.621535"
                 },
                 {
                  "BPId": "214915",
                  "BPContactNumber": "9980567374, 080 48521509, 7847840222, 9444915005",
                  "BPName": "214915-Silk Board",
                  "BPTime": "2018-05-01T04:32:00Z",
                  "BPLandmark": "Renault Car Showrrom",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Silk Board, After the Fly Over",
                  "BPCoordinates": "12.9305343,77.6721061"
                 },
                 {
                  "BPId": "214916",
                  "BPContactNumber": "080-25521222, 7847840222, 9444915005",
                  "BPName": "214916-Bommanahalli",
                  "BPTime": "2018-05-01T04:35:00Z",
                  "BPLandmark": "Shell Petrol Bunk",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "Bommanahalli",
                  "BPCoordinates": "12.8985603,77.6178776"
                 },
                 {
                  "BPId": "214917",
                  "BPContactNumber": "9980567374, 080 48521509, 7847840222, 9444915005",
                  "BPName": "214917-Electronic City Toll Gate",
                  "BPTime": "2018-05-01T04:40:00Z",
                  "BPLandmark": "Near Audi Service Centre",
                  "BPLocation": "Electronic City Toll Gate",
                  "BPAddress": "Electronic City Toll Gate",
                  "BPCoordinates": "12.8962015,77.5993685"
                 },
                 {
                  "BPId": "85443",
                  "BPContactNumber": "9980567374, 080 48521509, 7847840222, 9444915005",
                  "BPName": "85443-Bommasandra",
                  "BPTime": "2018-05-01T04:42:00Z",
                  "BPLandmark": "50meters before Royal Enfield showroom",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "Ammi's Biriyani, National Highway, next to TOTAL fuel station, Opposite to Chethan International",
                  "BPCoordinates": "12.8985603,77.6178776"
                 },
                 {
                  "BPId": "220590",
                  "BPContactNumber": "9980567374, 080 48521509, 7847840222, 9444915005",
                  "BPName": "220590-Attibele",
                  "BPTime": "2018-05-01T04:50:00Z",
                  "BPLandmark": "After the toll gate",
                  "BPLocation": "Attibele",
                  "BPAddress": "Attibele Toll gate",
                  "BPCoordinates": "12.7808949,77.7713144"
                 }
                ]
               },
               "amenities": "NA",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "09:45",
               "zeroCancellationTime": 10,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "624",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "595.0",
                "adulttotalfare": "0",
                "servicetax": "29.75"
               },
               "dst_vendor_id": "102",
               "OperatorID": "8649",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T09:00:00Z",
                  "BPContactNumber": "9444915005, 8807070712",
                  "DPName": "94004-Sriperumbudur",
                  "DPId": "94004",
                  "BPLandmark": "After the toll gate",
                  "BPAddress": "Sriperumbudur Toll Gate",
                  "DPLocation": "Sriperumbudur"
                 },
                 {
                  "DPTime": "2018-05-01T09:15:00Z",
                  "BPContactNumber": "9444915005",
                  "DPName": "93982-Poonamallee",
                  "DPId": "93982",
                  "BPLandmark": "Ambedkar Statue",
                  "BPAddress": "Ambedkar Statue, Byepass Junction",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T09:30:00Z",
                  "BPContactNumber": "8807070712, 9444915005",
                  "DPName": "108162-Maduravoyal",
                  "DPId": "108162",
                  "BPLandmark": "Erikarai Bus Stop",
                  "BPAddress": "Maduravoyal Erikarai Bus Stop",
                  "DPLocation": "Maduravoyal"
                 },
                 {
                  "DPTime": "2018-05-01T09:45:00Z",
                  "BPContactNumber": "9444915005, 044 24793899",
                  "DPName": "74753-Koyambedu",
                  "DPId": "74753",
                  "BPLandmark": "Near Police Station",
                  "BPAddress": "RKK Travels, #11, Kaliamman Koil Street, Koyembedu, CHennai-107",
                  "DPLocation": "Koyambedu"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Volvo Multiaxle A/C Semi Sleeper (2+2)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "624",
                  "busCondition": "ac",
                  "seatType": "Semi Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 38,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T04:30:00Z",
               "idRequired": "false",
               "ServiceID": 85106,
               "busCompany": "volvo",
               "bpDpSeatLayout": false,
               "ugcreview": {
                "ratings": {
                 "stopOverExperience": 5,
                 "seats": 5,
                 "onBoardExperience": 5,
                 "onTimeAD": 5
                },
                "reviewCount": 3,
                "posReviewCount": 3,
                "criReviewCount": 0,
                "imgReviewCount": 0,
                "totalRating": 5,
                "approvedImageCount": 0,
                "id": "Bangalore-Chennai-0430-RkkTravels-VolvoMultiaxleACSemiSleeper2+2"
               },
               "TravelsName": "Rkk Travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "2000002126770085106",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-0430-RkkTravels-VolvoMultiaxleACSemiSleeper2+2",
               "arrdate": "2018-05-01T09:45:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "0",
               "DepartureTime": "23:00",
               "cancellationPolicy": "4:6:50:0;6:12:25:0;12:-1:10:0;",
               "avlWindowSeats": -1,
               "BusServiceID": "",
               "totalReviews": "0",
               "seat": "SL",
               "duration": "5h 45m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6s0Fl5FJMpnf1qVV9mQcyesB5SRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "228798",
                  "BPContactNumber": "9710581155 / 7829353025",
                  "BPName": "228798-Majestic",
                  "BPTime": "2018-05-01T21:45:00Z",
                  "BPLandmark": "AYYPPA SWAY TEMPLE",
                  "BPLocation": "Majestic",
                  "BPAddress": "Opp Metro Railway Station",
                  "BPCoordinates": "12.9770579,77.5709742"
                 },
                 {
                  "BPId": "228799",
                  "BPContactNumber": "9710581155 / 7829353025",
                  "BPName": "228799-Anand Rao Cirlce",
                  "BPTime": "2018-05-01T21:50:00Z",
                  "BPLandmark": "New Congress Office Anand Rao Circle",
                  "BPLocation": "Anand Rao Cirlce",
                  "BPAddress": "New Congress Office Anand Rao Circle",
                  "BPCoordinates": "12.9770579,77.5709742"
                 },
                 {
                  "BPId": "228802",
                  "BPContactNumber": "9710581155 / 7829353025",
                  "BPName": "228802-Corporate circle",
                  "BPTime": "2018-05-01T21:55:00Z",
                  "BPLandmark": "Corporation Circle Bus Stop",
                  "BPLocation": "Corporation Circle",
                  "BPAddress": "Corporation Circle Bus Stop",
                  "BPCoordinates": "12.9677176,77.5889294"
                 },
                 {
                  "BPId": "228797",
                  "BPContactNumber": "9710581155 / 7829353025",
                  "BPName": "228797-Kalasipalayam Bus Stand",
                  "BPTime": "2018-05-01T22:10:00Z",
                  "BPLandmark": "RAINBOW TRAVELS #13 ,Tippusulthan Palace Road , Opp ANANTH ARCADE",
                  "BPLocation": "Kalasipalayam Bus Stand",
                  "BPAddress": "RAINBOW TRAVELS #13 ,Tippusulthan Palace Road , Opp ANANTH ARCADE",
                  "BPCoordinates": "null,null"
                 },
                 {
                  "BPId": "228804",
                  "BPContactNumber": "9710581155 / 7829353025",
                  "BPName": "228804-Shanti Nagar",
                  "BPTime": "2018-05-01T22:15:00Z",
                  "BPLandmark": "shanti nagar near take a break bakery",
                  "BPLocation": " Shanthi Nagar Bus Stand",
                  "BPAddress": "Shanti Nagar near take a break bakery",
                  "BPCoordinates": "12.9536373,77.5961534"
                 },
                 {
                  "BPId": "230586",
                  "BPContactNumber": "9710581155,7829353025",
                  "BPName": "230586-Residency Road",
                  "BPTime": "2018-05-01T22:20:00Z",
                  "BPLandmark": "BISHOP COTTON BOYS SCHOOL",
                  "BPLocation": "Residency Road",
                  "BPAddress": "BISHOP COTTON BOYS SCHOOL",
                  "BPCoordinates": "12.971167,77.600678"
                 },
                 {
                  "BPId": "228810",
                  "BPContactNumber": "9710581155 / 7829353025",
                  "BPName": "228810-Ulsoor",
                  "BPTime": "2018-05-01T22:30:00Z",
                  "BPLandmark": "Ulsoor Metro Station",
                  "BPLocation": "Ulsoor",
                  "BPAddress": "Ulsoor Metro Station",
                  "BPCoordinates": "12.9808346,77.6174847"
                 },
                 {
                  "BPId": "228811",
                  "BPContactNumber": "9710581155 / 7829353025",
                  "BPName": "228811-Indira Nagar",
                  "BPTime": "2018-05-01T22:40:00Z",
                  "BPLandmark": "Indira Nagar ,,indian oil petrol bunk",
                  "BPLocation": "Indira Nagar",
                  "BPAddress": "Indira Nagar ,indian oil petrol bunk",
                  "BPCoordinates": "12.9718578,77.6411171"
                 },
                 {
                  "BPId": "228812",
                  "BPContactNumber": "9710581155 / 7829353025",
                  "BPName": "228812-Domlur Flyover",
                  "BPTime": "2018-05-01T22:50:00Z",
                  "BPLandmark": "Domlur Flyover Near  Fiat Jeep Car Showroom",
                  "BPLocation": "Domlur",
                  "BPAddress": "Domlur Flyover Near Fiat Jeep Car Showroom",
                  "BPCoordinates": "12.9612374,77.6376225"
                 },
                 {
                  "BPId": "244077",
                  "BPContactNumber": "7829353025 9710581155",
                  "BPName": "244077-Ejipura Signal",
                  "BPTime": "2018-05-01T22:55:00Z",
                  "BPLandmark": "NEAR EJIPURA SIGNAL",
                  "BPLocation": "Ejipura Signal",
                  "BPAddress": "NEAR EJIPURA SIGNAL ",
                  "BPCoordinates": "12.9386911,77.6324549"
                 },
                 {
                  "BPId": "228813",
                  "BPContactNumber": "9710581155 / 7829353025",
                  "BPName": "228813-Koramangala",
                  "BPTime": "2018-05-01T23:00:00Z",
                  "BPLandmark": "Koramangala - Sony World Signal",
                  "BPLocation": "Koramangala",
                  "BPAddress": "Koramangala - Sony World Signal",
                  "BPCoordinates": "12.9332024,77.6279094"
                 },
                 {
                  "BPId": "228814",
                  "BPContactNumber": "9710581155 / 7829353025",
                  "BPName": "228814-Madiwala Police Station",
                  "BPTime": "2018-05-01T23:15:00Z",
                  "BPLandmark": "Madiwala Police Station",
                  "BPLocation": "Madiwala Police Station",
                  "BPAddress": "Madiwala Police Station",
                  "BPCoordinates": "12.921717,77.621535"
                 },
                 {
                  "BPId": "228815",
                  "BPContactNumber": "9710581155 /7829353025",
                  "BPName": "228815-Silk Board",
                  "BPTime": "2018-05-01T23:20:00Z",
                  "BPLandmark": "Silk Board Renault Showroom",
                  "BPLocation": "Silk Board",
                  "BPAddress": "Silk Board Renault Showroom",
                  "BPCoordinates": "12.921717,77.621535"
                 },
                 {
                  "BPId": "228816",
                  "BPContactNumber": "9710581155 / 7829353025",
                  "BPName": "228816-Bommanahalli",
                  "BPTime": "2018-05-01T23:25:00Z",
                  "BPLandmark": "Bommanahalli Near Shell Petrol Pump",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "Bommanahalli Near Shell Petrol Pump",
                  "BPCoordinates": "12.8985603,77.6178776"
                 },
                 {
                  "BPId": "228817",
                  "BPContactNumber": "9710581155 / 7829353025",
                  "BPName": "228817-Electronic City Toll Gate",
                  "BPTime": "2018-05-01T23:40:00Z",
                  "BPLandmark": "Electronic City Toll Gate",
                  "BPLocation": "Electronic City Toll Gate",
                  "BPAddress": "Electronic City Toll Gate",
                  "BPCoordinates": "12.8962015,77.5993685"
                 },
                 {
                  "BPId": "238052",
                  "BPContactNumber": "9710581155 7829353025 9036984241",
                  "BPName": "238052-BOMMASANDARA",
                  "BPTime": "2018-05-01T23:45:00Z",
                  "BPLandmark": "KFC NEAR BATA SHOW ROOM",
                  "BPLocation": "Bommasandra",
                  "BPAddress": "BOMMASANDARA    OPP: SKF FACTORY",
                  "BPCoordinates": "null,null"
                 }
                ]
               },
               "amenities": "NA",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "04:45",
               "zeroCancellationTime": 10,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "1048",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "999.0",
                "adulttotalfare": "0",
                "servicetax": "49.95"
               },
               "dst_vendor_id": "102",
               "OperatorID": "15765",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-03T03:15:00Z",
                  "BPContactNumber": "9710585522 / 9710585599",
                  "DPName": "233796-Kanchipuram Bypass",
                  "DPId": "233796",
                  "BPLandmark": "Opp Meenakshi Medical College Hospital",
                  "BPAddress": "Opp Meenakshi Medical College Hospital",
                  "DPLocation": "Kanchipuram Bypass"
                 },
                 {
                  "DPTime": "2018-05-03T04:15:00Z",
                  "BPContactNumber": "9710585522 / 9710585599",
                  "DPName": "228741-Sriperumbudur",
                  "DPId": "228741",
                  "BPLandmark": "Toll plaza , Sriperumbudur",
                  "BPAddress": "Toll plaza",
                  "DPLocation": "Sriperumbudur"
                 },
                 {
                  "DPTime": "2018-05-03T04:30:00Z",
                  "BPContactNumber": "9710585522 / 9710585599",
                  "DPName": "228738-Poonamallee(KFC)",
                  "DPId": "228738",
                  "BPLandmark": "Sri Motel Highway Poonamallee / Near KFC",
                  "BPAddress": "Sri Motel Highway Poonamallee / Near KFC",
                  "DPLocation": "Poonamallee(KFC)"
                 },
                 {
                  "DPTime": "2018-05-03T04:45:00Z",
                  "BPContactNumber": "9710585522 / 9710585599",
                  "DPName": "182619-Koyambedu",
                  "DPId": "182619",
                  "BPLandmark": "Opposite to Canara bank / Saravana Lodge,",
                  "BPAddress": "No 6/9 kaliamman kovil Street,\nOpposite to Canara bank / Saravana Lodge,\nKoyambedu. Chennai-600107",
                  "DPLocation": "Koyambedu"
                 },
                 {
                  "DPTime": "2018-05-03T04:55:00Z",
                  "BPContactNumber": "9710585522 / 9710585599",
                  "DPName": "182623-Vadapalani",
                  "DPId": "182623",
                  "BPLandmark": "(Sivan kovil bus stop)",
                  "BPAddress": "(Sivan kovil bus stop)",
                  "DPLocation": "Vadapalani"
                 },
                 {
                  "DPTime": "2018-05-03T05:00:00Z",
                  "BPContactNumber": "9710585522 / 9710585599",
                  "DPName": "182624-ashok pillar",
                  "DPId": "182624",
                  "BPLandmark": "( Near Hotel Anjappar)",
                  "BPAddress": "( Near Hotel Anjappar)",
                  "DPLocation": "ashok pillar"
                 },
                 {
                  "DPTime": "2018-05-03T05:05:00Z",
                  "BPContactNumber": "9710585522 / 9710585599",
                  "DPName": "182625-Guindy",
                  "DPId": "182625",
                  "BPLandmark": "Opposite to Alandur Court",
                  "BPAddress": "Opposite to Alandur Court",
                  "DPLocation": "Guindy"
                 },
                 {
                  "DPTime": "2018-05-03T05:15:00Z",
                  "BPContactNumber": "9710585522 / 9710585599",
                  "DPName": "228733-Adyar",
                  "DPId": "228733",
                  "BPLandmark": "Lucky Travels ,No.6, Shastri Nagar, 1st Avenue, Adyar",
                  "BPAddress": "Lucky Travels ,No.6, Shastri Nagar, 1st Avenue, Adyar",
                  "DPLocation": "Adyar"
                 },
                 {
                  "DPTime": "2018-05-03T05:20:00Z",
                  "BPContactNumber": "9710585522 / 9710585599",
                  "DPName": "228728-Tharamani",
                  "DPId": "228728",
                  "BPLandmark": " Near Masque ,Tharamani",
                  "BPAddress": " Near Mosque ,Tharamani",
                  "DPLocation": "Tharamani"
                 },
                 {
                  "DPTime": "2018-05-03T05:30:00Z",
                  "BPContactNumber": "9710585522 / 9710585599",
                  "DPName": "228726-Velachery",
                  "DPId": "228726",
                  "BPLandmark": "Opp to Hot chips / Indian Bank ,Velachery",
                  "BPAddress": "Opp to Hot chips / Indian Bank ,Velachery",
                  "DPLocation": "Velachery"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Leyland A/C Sleeper Executive Luxury (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "1048",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 22,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T23:00:00Z",
               "idRequired": "false",
               "ServiceID": 90067,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "Roshan Bus (To: Velachery)",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "2000002126770090067",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-2300-RoshanBusToVelachery-LeylandACSleeperExecutiveLuxury2+1",
               "arrdate": "2018-05-02T04:45:00Z"
              },
              {
               "origin": "Bangalore",
               "rating": "0",
               "DepartureTime": "12:25",
               "cancellationPolicy": "0:12:100:0;12:24:50:0;24:-1:10:0",
               "avlWindowSeats": -1,
               "BusServiceID": "",
               "totalReviews": "0",
               "seat": "SL",
               "duration": "6h 35m",
               "qtype": "bus",
               "AvailCatCard": false,
               "skey": "nJ52KC0ymd0633WCEN-_DzZh6s0Fl5FJMpnf1qVV9mQczO395iRO3mPRkbeN8Cm8Kh_m2uE1Lq1EZg==",
               "busCondition": "ac",
               "src_voyager_id": "6771549831164675055",
               "levyFee": 0,
               "destination": "Chennai",
               "BPPrims": {
                "list": [
                 {
                  "BPId": "29145",
                  "BPContactNumber": "080-41738700,08041248700,8861579700",
                  "BPName": "29145-Kalasipalyam Main Road",
                  "BPTime": "2018-05-01T09:30:00Z",
                  "BPLandmark": "KGN Travels Opp to BMTC Bus Stand ",
                  "BPLocation": "Kalasipalyam Main Road",
                  "BPAddress": "KGN Travels Opp to BMTC Bus Stand Kalasipalyam or http://zip.pr/IN/KGNT7700",
                  "BPCoordinates": "12.9605061,77.5778061"
                 },
                 {
                  "BPId": "29149",
                  "BPContactNumber": "080-22877700,08041248700,8861579700",
                  "BPName": "29149-Majestic (TBR)",
                  "BPTime": "2018-05-01T09:50:00Z",
                  "BPLandmark": "KGN Travels ",
                  "BPLocation": "Majestic",
                  "BPAddress": "KGN Travels Near Hotel Amar Tank Bund Road or http://zip.pr/IN/KGNT7000",
                  "BPCoordinates": "12.976194,77.5710218"
                 },
                 {
                  "BPId": "29134",
                  "BPContactNumber": "080-41738700 41248700",
                  "BPName": "29134-Indira Nagar",
                  "BPTime": "2018-05-01T10:50:00Z",
                  "BPLandmark": "(Indian Oil Petrol Bunk)",
                  "BPLocation": "Indira Nagar",
                  "BPAddress": "Near Indian Oil Petrol Bunk Next To Police Station\nhttp://zip.pr/IN/KGNT7007",
                  "BPCoordinates": "12.9718578,77.6411171"
                 },
                 {
                  "BPId": "105271",
                  "BPContactNumber": "080-41738700,08041248700,",
                  "BPName": "105271-HAL Main Gate",
                  "BPTime": "2018-05-01T11:15:00Z",
                  "BPLandmark": "HAL Main Gate SBI ATM",
                  "BPLocation": "HAL Main Gate",
                  "BPAddress": "HAL Main Gate SBI ATM",
                  "BPCoordinates": "12.9715673,77.6603268"
                 },
                 {
                  "BPId": "202191",
                  "BPContactNumber": "080-41738700,41248700,8861579700",
                  "BPName": "202191-Marathahalli..",
                  "BPTime": "2018-05-01T11:30:00Z",
                  "BPLandmark": "In Front of Kalamandir",
                  "BPLocation": "Marathahalli",
                  "BPAddress": "In Front of Kalamandir",
                  "BPCoordinates": "12.9518835,77.7001831"
                 },
                 {
                  "BPId": "202192",
                  "BPContactNumber": "080-41738700,41248700,8861579700",
                  "BPName": "202192-Bellandur CCD",
                  "BPTime": "2018-05-01T11:40:00Z",
                  "BPLandmark": "Near Cafe Coffee Day, Towards Silk Board",
                  "BPLocation": "Bellandur",
                  "BPAddress": "Near Cafe Coffee Day, Towards Silk Board",
                  "BPCoordinates": "12.9289144,77.6702101"
                 },
                 {
                  "BPId": "202193",
                  "BPContactNumber": "080-41738700,41248700,8861579700",
                  "BPName": "202193-HSR Layout1",
                  "BPTime": "2018-05-01T11:55:00Z",
                  "BPLandmark": "Under Agra Flyover, Near Hanuman Temple",
                  "BPLocation": "HSR Layout",
                  "BPAddress": "Under Agra Flyover, Near Hanuman Temple",
                  "BPCoordinates": "12.90753,77.6479408"
                 },
                 {
                  "BPId": "29147",
                  "BPContactNumber": "080-41738700,41248700,, 8861579700",
                  "BPName": "29147-Madiwala1",
                  "BPTime": "2018-05-01T12:10:00Z",
                  "BPLandmark": "Next to Madiwala Police Station, Near Bharath Petrol Pump",
                  "BPLocation": "Madiwala",
                  "BPAddress": "Next to Madiwala Police Station, Near Bharath Petrol Pump",
                  "BPCoordinates": "12.9195882,77.6158801"
                 },
                 {
                  "BPId": "203989",
                  "BPContactNumber": "080-41738700, 41248700, 9740513836",
                  "BPName": "203989-Silk Board",
                  "BPTime": "2018-05-01T12:25:00Z",
                  "BPLandmark": "In Front of Sri Prashanth Hotel",
                  "BPLocation": "Silk Board",
                  "BPAddress": "In front of Sri Prashanth Hotel, towards Marathahalli\n",
                  "BPCoordinates": "12.9169055,77.6216624"
                 },
                 {
                  "BPId": "202204",
                  "BPContactNumber": "080-41738700,41248700,8861579700",
                  "BPName": "202204-Bommanahalli",
                  "BPTime": "2018-05-01T12:40:00Z",
                  "BPLandmark": "Near Shell Petrol Pump",
                  "BPLocation": "Bommanahalli",
                  "BPAddress": "Near Shell Petrol Pump",
                  "BPCoordinates": "12.8985603,77.6178776"
                 }
                ]
               },
               "amenities": "NA",
               "src_vendor_id": "3",
               "dest_voyager_id": "4354390963378411938",
               "ArrivalTime": "19:00",
               "zeroCancellationTime": 0,
               "gps": "false",
               "fare": {
                "adultservicetax": "0",
                "adultcommission": "0",
                "adultbasefare": "0",
                "adultsurcharge": "0",
                "totalfare": "550",
                "discount": "0",
                "totalsurcharge": "0",
                "totalcommission": "0",
                "transactionfee": "0",
                "totalbasefare": "550.0",
                "adulttotalfare": "0",
                "servicetax": "0.0"
               },
               "dst_vendor_id": "102",
               "OperatorID": "6470",
               "DPPrims": {
                "list": [
                 {
                  "DPTime": "2018-05-01T18:45:00Z",
                  "BPContactNumber": "044-42818342,9840140236",
                  "DPName": "204351-Poonamallee",
                  "DPId": "204351",
                  "BPLandmark": "Poonamallee By Pass Bridge Down Side Ambedkar statue",
                  "BPAddress": "Poonamallee By Pass Bridge Down Side Ambedkar Statue",
                  "DPLocation": "Poonamallee"
                 },
                 {
                  "DPTime": "2018-05-01T19:00:00Z",
                  "BPContactNumber": "044-42818342,9840140236,9087255195",
                  "DPName": "29157-Koyambedu",
                  "DPId": "29157",
                  "BPLandmark": "Sriji Commercial Complex",
                  "BPAddress": "G-6,, Sriji  Majestic Commercial Complex,, Koyembedu.. Chennai-600107",
                  "DPLocation": "Koyambedu"
                 },
                 {
                  "DPTime": "2018-05-01T19:10:00Z",
                  "BPContactNumber": "044-42818342,9840140236",
                  "DPName": "202212-Chennai Central Everest Building",
                  "DPId": "202212",
                  "BPLandmark": "Opp Murugan Idli ",
                  "BPAddress": "Chennai Central Everest Building, Opp Murugan Idli ",
                  "DPLocation": "Hotel Everest Central Railway"
                 }
                ]
               },
               "mTicket": "true",
               "row_type": "onwardflights",
               "BusType": "Leyland A/C Sleeper (2+1)",
               "RouteSeatTypeDetail": {
                "list": [
                 {
                  "SellFare": "550",
                  "busCondition": "ac",
                  "seatType": "Sleeper",
                  "seatTypeSpecific": "Seat",
                  "SeatsAvailable": 0,
                  "availabilityStatus": "Available"
                 }
                ]
               },
               "depdate": "2018-05-01T12:25:00Z",
               "idRequired": "false",
               "ServiceID": 93228,
               "busCompany": "other",
               "bpDpSeatLayout": false,
               "TravelsName": "kgn travels",
               "tbrequired": "1",
               "farebasis": "0",
               "RouteID": "2000002126770093228",
               "ServiceName": "Bangalore to Chennai",
               "srtFee": 0,
               "partialCancellationAllowed": "true",
               "ugcid": "Bangalore-Chennai-1225-kgntravels-LeylandACSleeper2+1",
               "arrdate": "2018-05-01T19:00:00Z"
              }
             ]
            }
           };
    }

    function getFlights(from, to, journeyDate) {
        let departureAirportCode = getFlightCode(from);
        let arrivalAirportCode = getFlightCode(to);

        const fetchUrl = 'http://developer.goibibo.com/api/search/?app_id=' + appId + '&app_key=' + appKey +
            '&format=json&source=' + departureAirportCode + '&destination=' + arrivalAirportCode +
            '&dateofdeparture=20180501&seatingclass=E&adults=1&children=0&infants=0&counter=100';

        return axios
            .get(fetchUrl)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }

    function getFlightCode(city) {
        let airports = require('./../../resources/airportlist.json');
        return airports[city];
    }

    return {
        getHotelInCity: getHotelInCity,
        getBuses: getBuses,
        getFlights: getFlights
    }
};


module.exports = functions;