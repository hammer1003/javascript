function onOpen(e) {
  var label = GmailApp.getUserLabelByName("receiptFromBank");
  var threads = label.getThreads();

  for (var i = threads.length - 1; i >= 0; i--) {
    var messages = threads[i].getMessages();

    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];
      if (message.isUnread()) {
        extractDetails(message);
        GmailApp.markMessageRead(message);
      }
    }
    threads[i].removeLabel(label);
  }
}

function extractDetails(message) {
  var email = {
    date: "Null",
    sender: "Null",
    subject: "Null",
    refNum: "Null",
    acAliases: "Null",
    amount: "Null",
    receiptWay: "Null",
    bank: "Null",
    transDate: "Null",
  };

  var emailKey = {
    refNum: "參考號碼",
    acAliases: "入賬戶口別名",
    amount: "入賬金額",
    receiptWay: "受款方式",
    bank: "付款服務供應商",
    transDate: "交易日期",
  };

  email.date = message.getDate();
  email.sender = message.getFrom();
  email.subject = message.getSubject();
  var body = message.getPlainBody();

  var regExp;
  regExp = new RegExp("(?<=" + emailKey.refNum + ").*");
  email.refNum = body.match(regExp).toString().replace("：", " ").trim();

  regExp = new RegExp("(?<=" + emailKey.acAliases + ").*");
  email.acAliases = body.match(regExp).toString().replace("：", " ").trim();

  regExp = new RegExp("(?<=" + emailKey.amount + ").*");
  email.amount = body.match(regExp).toString().replace("：", " ").trim();

  regExp = new RegExp("(?<=" + emailKey.receiptWay + ").*");
  email.receiptWay = body.match(regExp).toString().replace("：", " ").trim();

  regExp = new RegExp("(?<=" + emailKey.bank + ").*");
  email.bank = body.match(regExp).toString().replace("：", " ").trim();

  regExp = new RegExp("(?<=" + emailKey.transDate + ").*");
  email.transDate = body.match(regExp).toString().replace("：", " ").trim();

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var data = [];

  for (var k in email) {
    data.push(email[k]);
  }

  sheet.appendRow(data);
}