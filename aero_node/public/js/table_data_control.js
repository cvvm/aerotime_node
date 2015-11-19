function DatatableCtrl($scope) {
    $scope.headers = [
        {"order": 1, "width": 0, "label": "ID", "data": "_id", "type": "string", "visible": false},
        {"order": 2, "width": 50, "label": "Tracking Seq", "data": "trackingSeq", "type": "string", "visible": true},
        {"order": 3, "width": 120, "label": "Call Sign", "data": "callSign", "type": "string", "visible": true},
        {"order": 4, "width": 150, "label": "FCC City", "data": "fccCity", "type": "string", "visible": true},
        {"order": 5, "width": 50, "label": "FCC State", "data": "fccState", "type": "string", "visible": true},
        {"order": 6, "width": 50, "label": "Country", "data": "country", "type": "string", "visible": true},
        {"order": 7, "width": 50, "label": "DM Rank", "data": "dmaRank", "type": "string", "visible": true},
        {"order": 8, "width": 80, "label": "Station Type", "data": "stationType", "type": "string", "visible": true},
        {"order": 9, "width": 100, "label": "Language", "data": "language", "type": "string", "visible": true},
        {"order": 10, "width": 70, "label": "FCC Channel", "data": "fccChannel", "type": "string", "visible": true},
        {"order": 11, "width": 70, "label": "FYI Channel", "data": "fyiChannel", "type": "string", "visible": true},
        {"order": 12, "width": 70, "label": "FYI FCC", "data": "fyiFcc", "type": "string", "visible": true},
        {"order": 13, "width": 70, "label": "FYI Virtual Channel", "data": "fyiVirtualChannel", "type": "string", "visible": true},
        {"order": 14, "width": 70, "label": "On FCC List", "data": "onFccList", "type": "string", "visible": true},
        {"order": 15, "width": 150, "label": "FCC Licensee", "data": "fccLicensee", "type": "string", "visible": true},
        {"order": 16, "width": 150, "label": "FCC Market Info", "data": "fccMarketInfo", "type": "string", "visible": true},
        {"order": 17, "width": 100, "label": "City", "data": "city", "type": "string", "visible": true},
        {"order": 18, "width": 70, "label": "FS State", "data": "fsState", "type": "string", "visible": true},
        {"order": 19, "width": 80, "label": "PT Factor", "data": "ptFactor", "type": "string", "visible": true},
        {"order": 20, "width": 80, "label": "Call Sign Short", "data": "callSignShort", "type": "string", "visible": true},
        {"order": 21, "width": 100, "label": "Notes", "data": "notes", "type": "string", "visible": true},
        {"order": 22, "width": 70, "label": "GM Offset", "data": "gmtOffset", "type": "string", "visible": true},
        {"order": 23, "width": 70, "label": "Observes DST", "data": "observesDST", "type": "string", "visible": true},
        {"order": 24, "width": 70, "label": "Affiliate ID", "data": "affiliateID", "type": "string", "visible": true},
        {"order": 25, "width": 90, "label": "Affiliation of", "data": "affiliateOf", "type": "string", "visible": true},
        {"order": 26, "width": 50, "label": "Parent Station ID", "data": "parentstationId", "type": "string", "visible": true},
        {"order": 27, "width": 100, "label": "Parent Station", "data": "parentstation", "type": "string", "visible": true}
    ];
    $scope.aeroStations = [];
    $scope.headerOrder = "order";
    $scope.headerFilter = function (header) {
        return header.visible;
    };

}
