"use strict";

var express = require("express");
var app = express();
var PORT = 8080;


app.set("json spaces", 4);

var domains = [
/* Default domains included */
"aol.com", "att.net", "comcast.net", "facebook.com", "gmail.com", "gmx.com", "googlemail.com",
"google.com", "hotmail.com", "hotmail.co.uk", "mac.com", "me.com", "mail.com", "msn.com",
"live.com", "sbcglobal.net", "verizon.net", "yahoo.com", "yahoo.co.uk",

/* Other global domains */
"email.com", "games.com" /* AOL */, "gmx.net", "hush.com", "hushmail.com", "icloud.com", "inbox.com",
"lavabit.com", "love.com" /* AOL */, "outlook.com", "pobox.com", "rocketmail.com" /* Yahoo */,
"safe-mail.net", "wow.com" /* AOL */, "ygm.com" /* AOL */, "ymail.com" /* Yahoo */, "zoho.com", "fastmail.fm",
"yandex.com","iname.com",

/* United States ISP domains */
"bellsouth.net", "charter.net", "comcast.net", "cox.net", "earthlink.net", "juno.com",

/* British ISP domains */
"btinternet.com", "virginmedia.com", "blueyonder.co.uk", "freeserve.co.uk", "live.co.uk",
"ntlworld.com", "o2.co.uk", "orange.net", "sky.com", "talktalk.co.uk", "tiscali.co.uk",
"virgin.net", "wanadoo.co.uk", "bt.com",

/* Domains used in Asia */
"sina.com", "qq.com", "naver.com", "hanmail.net", "daum.net", "nate.com", "yahoo.co.jp", "yahoo.co.kr", "yahoo.co.id", "yahoo.co.in", "yahoo.com.sg", "yahoo.com.ph",

/* French ISP domains */
"hotmail.fr", "live.fr", "laposte.net", "yahoo.fr", "wanadoo.fr", "orange.fr", "gmx.fr", "sfr.fr", "neuf.fr", "free.fr",

/* German ISP domains */
"gmx.de", "hotmail.de", "live.de", "online.de", "t-online.de" /* T-Mobile */, "web.de", "yahoo.de",

/* Russian ISP domains */
"mail.ru", "rambler.ru", "yandex.ru", "ya.ru", "list.ru",

/* Belgian ISP domains */
"hotmail.be", "live.be", "skynet.be", "voo.be", "tvcablenet.be", "telenet.be",

/* Argentinian ISP domains */
"hotmail.com.ar", "live.com.ar", "yahoo.com.ar", "fibertel.com.ar", "speedy.com.ar", "arnet.com.ar",

/* Domains used in Mexico */
"hotmail.com", "gmail.com", "yahoo.com.mx", "live.com.mx", "yahoo.com", "hotmail.es", "live.com", "hotmail.com.mx", "prodigy.net.mx", "msn.com",

/* Domains used in Brazil */
"yahoo.com.br", "hotmail.com.br", "outlook.com.br", "uol.com.br", "bol.com.br", "terra.com.br", "ig.com.br", "itelefonica.com.br", "r7.com", "zipmail.com.br", "globo.com", "globomail.com", "oi.com.br"
];

var verifyEmail = function(email){
	var email = email.split("@");
	var domain_name = email[1];
	var contains = (domains.indexOf(domain_name) > -1);
	return contains;
}





app.get("/", function(req, res){
	res.send("Use /email/your_email_address to verify the address");
});


app.get("/email/:mail_addr", function(req, res){
	var valid_email = verifyEmail(req.params.mail_addr);
	if (valid_email) {
		res.json({ email: req.params.mail_addr, message:"[+] This email address is (probably) valid.", valid: true });
	} else {
		res.json({ email: req.params.mail_addr, message:"[-] This email address appears to be invalid.", valid: false });
	}
});


app.listen(PORT, function(err){
	if (err) {
		throw err;
	}
	console.log("Server listening on port " + PORT);
});






