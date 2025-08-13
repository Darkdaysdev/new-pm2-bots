require("./App/Guard I/index");
require("./App/Guard II/index");
require("./App/Guard III/index");
require("./App/Welcome/index");
require("./App/Voucher/index");
require("./App/Statistic/index");
require("./App/Moderation/index");
require("./App/Web/index");

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});
