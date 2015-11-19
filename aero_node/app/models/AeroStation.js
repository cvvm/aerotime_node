var mongoose = require('mongoose');

var AeroStationSchema = new mongoose.Schema({
	trackingSeq : String,
	callSign : String,
	fccCity : String,
	fccState : String,
	country : String,
	dmaRank : String,
	stationType : String,
	language : String,
	fccChannel : String,
	fyiChannel : String,
	fyiFcc : String,
	fyiVirtualChannel : String,
	onFccList : String,
	fccLicensee : String,
	fccMarketInfo : String,
	city : String,
	fsState : String,
	ptFactor : String,
	callSignShort : String,
	notes : String,
	gmtOffset : String,
	observesDST : String,
	affiliateID : String,
	affiliateOf : String,
	parentstationId : String,
	parentstation : String
});

module.exports = mongoose.model('AeroStation', AeroStationSchema);