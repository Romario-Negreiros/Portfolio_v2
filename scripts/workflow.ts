import { ChildProcess, exec } from "child_process";

type ProcessExitHandler = (code: number | null, signal: NodeJS.Signals | null) => void;

const { exit } = process;

const successColor = "\x1b[32m";
const errorColor = "\x1b[31m";
const infoColor = "\x1b[34m";
const resetColor = "\x1b[0m";

function dispatchEvents(cProcess: ChildProcess, processExitHandler: ProcessExitHandler) {
  function handleError(error: Error, color: string = errorColor) {
    console.error(`\n${color}${error} ${resetColor}`);
  }

  cProcess.on("error", handleError);
  cProcess.stderr?.on("data", (error) => handleError(error, infoColor));

  cProcess.stdout?.on("data", (data) => console.log(data));

  cProcess.on("exit", processExitHandler);
}

console.log(`${infoColor}Running eslint... ${resetColor}`);

const lintingProcess = exec("npm run lint --fix");

dispatchEvents(lintingProcess, function (code, signal) {
  if (code == 1) {
    console.error(`${errorColor}Errors could not be automatically fixed... ${resetColor}`);

    exit(1);
  } else {
    console.log(`${infoColor}Running prettier... ${resetColor}`);

    const prettierProcess = exec("npm run prettier");

    dispatchEvents(prettierProcess, function (code, signal) {
      if (code == 1) {
        console.error(`${errorColor}Files could not be formatted... ${resetColor}`);

        exit(1);
      } else {
        console.log(`${infoColor}Running git push to branch main... ${resetColor}`);

        const pushProcess = exec("git push origin main");

        dispatchEvents(pushProcess, function (code, signal) {
          if (code == 1) {
            console.error(`${errorColor}Unable to push... ${resetColor}`);

            exit(1);
          } else {
            console.log(`${successColor}Script concluded with success... ${resetColor}`);

            exit(0);
          }
        });
      }
    });
  }
});
