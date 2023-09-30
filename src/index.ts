import pm2 from "pm2";
pm2.connect((err) => {
  const force_restart = false;
  const force_start = true;
  const app_name = "pm2-test";
  const app_path = "./dist/app.js";
  if (err) {
    console.error(err);
    process.exit(2);
  }
  pm2.list((err, list) => {
    if (err) return pm2.disconnect();
    const process = list.find((p) => p.name === app_name);
    if (process) {
      const is_online = process?.pm2_env?.status === "online";
      if (is_online || force_restart) {
        pm2.restart(app_name, (err, proc) => {
          if (err) console.log(err);
          return pm2.disconnect();
        });
      } else {
        return pm2.disconnect();
      }
    } else {
      if (force_start) {
        pm2.start(
          {
            script: app_path,
            name: app_name,
          },
          (err, apps) => {
            if (err) console.log(err);
            return pm2.disconnect();
          }
        );
      } else {
        return pm2.disconnect();
      }
    }
  });
});
